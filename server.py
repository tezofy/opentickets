"""Local preview server with a small, cached read-only proxy for Open Tickets' public homepage.

The proxy reads only publicly listed homepage banners and their matching event dates. It does
not submit booking, authentication, payment, or ticket-availability requests.
"""
from __future__ import annotations

from collections import OrderedDict
from datetime import datetime, timedelta, timezone
from html.parser import HTMLParser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import URLError
from urllib.parse import parse_qs, urlparse
from urllib.request import Request, urlopen
import json
import os
import re
import threading
import time

ROOT = Path(__file__).resolve().parent
OFFICIAL_HOME = "https://opentickets.co.za/"
OFFICIAL_HOST = "opentickets.co.za"
IMAGE_HOST = "d3fchakcenee6k.cloudfront.net"
FEED_TTL = 300  # refresh the official homepage snapshot at most once every five minutes
IMAGE_TTL = 3600
MAX_IMAGE_CACHE = 24

_feed_lock = threading.Lock()
_feed_cache: dict = {"expires": 0.0, "events": None, "updated": None}
_image_lock = threading.Lock()
_image_cache: OrderedDict[str, tuple[float, bytes, str]] = OrderedDict()
_VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


def event_id_from_url(url: str) -> str | None:
    match = re.search(r"/event/([A-Za-z0-9_-]+)", urlparse(url).path)
    return match.group(1) if match else None


class OfficialHomeParser(HTMLParser):
    """Extract official homepage hero banners and match them to visible event-card dates."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.slides: list[dict] = []
        self.cards: list[dict] = []
        self._slide: dict | None = None
        self._slide_depth = 0
        self._card: dict | None = None
        self._card_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = {key: value or "" for key, value in attrs}
        classes = attr.get("class", "").split()
        if self._card is not None:
            if tag not in _VOID:
                self._card_depth += 1
            if tag == "a" and attr.get("href"):
                self._card["href"] = attr["href"]
            if tag == "img":
                self._card["card_alt"] = attr.get("alt", "")
                self._card["card_image"] = attr.get("src", "")
            return
        if "grid-item" in classes and attr.get("data-name"):
            self._card = {
                "name": attr.get("data-name", ""),
                "venue": attr.get("data-venue", ""),
                "text": "",
                "href": "",
                "card_alt": "",
                "card_image": "",
            }
            self._card_depth = 1
            return
        if self._slide is not None:
            if tag not in _VOID:
                self._slide_depth += 1
            if tag == "a" and attr.get("href"):
                self._slide["href"] = attr["href"]
            if tag == "img":
                self._slide["image"] = attr.get("src", "")
                self._slide["alt"] = attr.get("alt", "")
            return
        if "osahan-slider-item" in classes:
            self._slide = {"href": "", "image": "", "alt": ""}
            self._slide_depth = 1

    def handle_endtag(self, tag: str) -> None:
        if tag in _VOID:
            return
        if self._card is not None:
            self._card_depth -= 1
            if self._card_depth == 0:
                self.cards.append(self._card)
                self._card = None
            return
        if self._slide is not None:
            self._slide_depth -= 1
            if self._slide_depth == 0:
                self.slides.append(self._slide)
                self._slide = None

    def handle_data(self, data: str) -> None:
        if self._card is not None:
            text = " ".join(data.split())
            if text:
                self._card["text"] += " " + text


def parse_official_events(document: str) -> list[dict]:
    parser = OfficialHomeParser()
    parser.feed(document)
    by_id: dict[str, dict] = {}
    for card in parser.cards:
        event_id = event_id_from_url(card["href"])
        if event_id:
            by_id[event_id] = card

    now = datetime.now(timezone.utc)
    sast = timezone(timedelta(hours=2), name="SAST")
    events: list[dict] = []
    seen: set[str] = set()
    for slide in parser.slides:
        event_id = event_id_from_url(slide["href"])
        card = by_id.get(event_id or "")
        if not event_id or event_id in seen or not card:
            continue
        if urlparse(slide["href"]).netloc not in {OFFICIAL_HOST, "www." + OFFICIAL_HOST}:
            continue
        if urlparse(slide["image"]).netloc != IMAGE_HOST:
            continue
        match = re.search(r"(\d{4}-\d{2}-\d{2}),\s*(\d{1,2}:\d{2})", card["text"])
        if not match:
            continue
        try:
            local_time = datetime.strptime(f"{match.group(1)} {match.group(2)}", "%Y-%m-%d %H:%M").replace(tzinfo=sast)
        except ValueError:
            continue
        if local_time.astimezone(timezone.utc) <= now:
            continue
        time_text = local_time.strftime("%I:%M %p").lstrip("0")
        title = slide["alt"].strip() or card["card_alt"].strip() or card["name"].strip().title()
        venue = " ".join(card["venue"].split()).title()
        events.append({
            "id": event_id,
            "officialId": event_id,
            "title": title,
            "date": local_time.strftime("%Y-%m-%dT%H:%M:%S"),
            "day": local_time.strftime("%d"),
            "month": local_time.strftime("%b").upper(),
            "time": time_text,
            "venue": venue,
            "image": slide["image"],
            "alt": title,
        })
        seen.add(event_id)
    if not events:
        raise ValueError("No upcoming hero listings could be matched on the official homepage.")
    return events


def fetch_live_events() -> list[dict]:
    request = Request(OFFICIAL_HOME, headers={
        "User-Agent": "Mozilla/5.0 (compatible; OpenTicketsHomePreview/1.0)",
        "Accept": "text/html,application/xhtml+xml",
    })
    with urlopen(request, timeout=20) as response:
        document = response.read(8 * 1024 * 1024).decode("utf-8", "replace")
    return parse_official_events(document)


def get_live_events() -> tuple[list[dict], str, bool]:
    now = time.monotonic()
    with _feed_lock:
        if _feed_cache["events"] is not None and now < _feed_cache["expires"]:
            return _feed_cache["events"], _feed_cache["updated"], False
        try:
            events = fetch_live_events()
            updated = datetime.now(timezone.utc).isoformat(timespec="seconds")
            _feed_cache.update(events=events, updated=updated, expires=now + FEED_TTL)
            return events, updated, False
        except (OSError, URLError, TimeoutError, ValueError) as exc:
            if _feed_cache["events"] is not None:
                _feed_cache["expires"] = now + 60
                return _feed_cache["events"], _feed_cache["updated"], True
            raise RuntimeError(f"The live Open Tickets event feed could not be refreshed: {exc}") from exc


def fetch_hero_image(url: str) -> tuple[bytes, str]:
    parsed = urlparse(url)
    if parsed.scheme != "https" or parsed.netloc != IMAGE_HOST or not parsed.path.startswith("/storage/"):
        raise ValueError("Only public Open Tickets banner images may be proxied.")
    now = time.monotonic()
    with _image_lock:
        cached = _image_cache.get(url)
        if cached and now < cached[0]:
            _image_cache.move_to_end(url)
            return cached[1], cached[2]
    request = Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; OpenTicketsHomePreview/1.0)"})
    with urlopen(request, timeout=25) as response:
        content_type = response.headers.get_content_type()
        data = response.read(12 * 1024 * 1024)
    if content_type not in {"image/png", "image/jpeg", "image/webp"} or not data:
        raise ValueError("The banner source did not return an image.")
    with _image_lock:
        _image_cache[url] = (now + IMAGE_TTL, data, content_type)
        _image_cache.move_to_end(url)
        while len(_image_cache) > MAX_IMAGE_CACHE:
            _image_cache.popitem(last=False)
    return data, content_type


class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self) -> None:
        # Keep Arena's live preview from reusing stale HTML/CSS/JS between workspace edits.
        # The public poster proxy retains its explicit one-hour cache policy.
        if not urlparse(self.path).path.startswith("/api/"):
            self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
            self.send_header("Pragma", "no-cache")
            self.send_header("Expires", "0")
        super().end_headers()

    def _send_json(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/live-events":
            try:
                events, updated, stale = get_live_events()
                self._send_json({"events": events, "updatedAt": updated, "stale": stale})
            except RuntimeError as exc:
                self._send_json({"events": [], "error": str(exc)}, status=503)
            return
        if parsed.path == "/api/hero-image":
            url = parse_qs(parsed.query).get("url", [""])[0]
            try:
                data, content_type = fetch_hero_image(url)
                self.send_response(200)
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Length", str(len(data)))
                self.send_header("Cache-Control", f"public, max-age={IMAGE_TTL}")
                self.end_headers()
                self.wfile.write(data)
            except (OSError, URLError, TimeoutError, ValueError) as exc:
                self._send_json({"error": str(exc)}, status=502)
            return
        # Ignore browser validators on workspace assets: file timestamps can have
        # one-second resolution, which otherwise lets a stale cached page survive edits.
        for header in ("If-Modified-Since", "If-None-Match"):
            if header in self.headers:
                del self.headers[header]
        super().do_GET()


if __name__ == "__main__":
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", "4173"))
    print(f"Open Tickets preview: http://localhost:{port}")
    print("Live poster feed: Open Tickets public homepage (cached for five minutes).")
    ThreadingHTTPServer((host, port), PreviewHandler).serve_forever()
