# Open Tickets — Premium Live Events Frontend

A responsive, multi-page Open Tickets frontend with a restrained ivory, deep-navy and ticket-gold palette. The home hero is an automatic, image-only carousel of complete artwork from upcoming event listings. The supplied Appel banner leads the sequence unchanged; no captions, overlays, icons or manual controls are added to the artwork. A separate, slim, continuously moving trust ribbon sits below the poster, highlighting official listings, clear event details and support. The supplied references informed the date-forward event cards, prominent search/filter hierarchy, premium gold ticket actions and lower-page trust section. A custom SVG icon system keeps the visual details brand-consistent.

## Pages

- `index.html` — The full-width, uncropped, image-only hero sits directly below the header, followed by a shorter separate trust ticker and then the “Next 72 Hours” ticket carousel. The countdown remains synchronized with the active hero poster. The front ticket is 330px tall on common phone widths and 310px on very narrow screens; its one-front/two-neighbor 3D stack supports swipe/drag and left/right arrow keys, and flipping it reveals event details without a visible control rail. Search/category controls and featured tickets follow below. The shared upcoming-event cards place a compact event-date/start-time panel (SAST) directly above the price and “View tickets” action.
- `events.html` — AI-art discovery hero, event search, live category filters, sort control and event cards populated from the existing listing data. Each card uses the formerly open footer space for a clear event-date/start-time strip directly above “View tickets” (SAST).
- `search.html` — AI-art search hero with keyword and location search, date/category/price/venue filters, sorting, pagination, result count and empty state. Search results share the same date/time card design.
- `event.html?id=kaizer` — AI-art atmosphere paired with the event’s own matched official poster; event facts, venue directions, ticket tiers, quantity control, estimated total and official booking hand-off remain dynamic.
- `faq.html` — AI-art customer-care hero, five FAQ categories, live search and accessible accordions.
- Shared header — Retains the relevant customer-facing links from the official Customers page (Events, FAQs, Support and My Account), plus preserved sports/music/outdoor discovery links. Search is available in the desktop header and immediately left of the menu on mobile.
- Mobile navigation — Four-item fixed bottom bar for Home, Events, Tickets and Profile; safe-area spacing is included for modern phones.
- Mobile section copy — Explanatory text under section, event-card and trust headings is tucked away until the heading is tapped; desktop descriptions remain visible.

## Run locally

From this folder, run:

```bash
python3 server.py
```

Then visit `http://localhost:4173`. The preview server reads the public Open Tickets homepage for current hero banners and event dates, refreshes its short-lived cache every five minutes, and serves those images through a same-origin proxy. If the live site is unreachable, the bundled event data remains as a fallback.

## Front-end notes

- Built with HTML, custom CSS, locally bundled Bootstrap 5 CSS and vanilla JavaScript. No remote font, icon or JavaScript assets are required for the local preview.
- The site uses a restrained 3D visual system: layered panel shadows, tactile buttons and card tilt, with reduced-motion preferences respected.
- AI-generated, brand-matched hero artwork is stored locally as `assets/hero-events-ai.jpg`, `assets/hero-search-ai.jpg`, `assets/hero-event-details-ai.jpg` and `assets/hero-support-ai.jpg`; these decorate non-home page heroes. Event-specific details continue to show the matching official event poster separately.
- The custom ticket-led SVG icon system is in `assets/icons.svg`; the coordinated SVG browser icon is `assets/favicon.svg`.
- The supplied Open Tickets brief did not include the current Isotope source code. The refreshed pages preserve the `.isotope-filters`, `data-filter`, `.event-grid` and `.event-item` hooks and make the filters work with vanilla JavaScript. Reconnect the production Isotope engine during theme integration if the existing layout depends on it.
- The hero feed reads only publicly listed homepage banners and event dates from Open Tickets; ticket availability is not inferred from this feed. The 72-hour carousel shows confirmed public event details and known prices only; it makes no seat or availability claims. The project does not implement live booking, payment, queue management, authentication, account access or refund status. Search and ticket totals remain demo interactions.
- Prices are shown only where verified on the public event pages used for this concept (Appel in PE and Kaizer Chiefs vs TS Galaxy). Other event cards defer pricing to the live official listing.
- The home hero rotates through complete event artwork for future listings in the local event data; the Appel lead slide is the supplied 1210 × 450 banner preserved without cropping or added interface. Other event banners and the Open Tickets logo are local copies of public assets from the current Open Tickets website. Confirm usage rights and client approval before production deployment.
- All interface copy, source code and project documentation are in English.

## Asset sources

- Open Tickets logo: `https://opentickets.co.za/themes/bookishow/logo-icon.png`
- Event banners: public Open Tickets event media hosted on `d3fchakcenee6k.cloudfront.net`.
- Bootstrap 5.3.3 CSS: bundled locally from jsDelivr for offline-friendly preview.
