# Design Notes — Open Tickets Visual Refresh

## Reference review

The supplied four-star search-results reference is strong because it gets the ticket-discovery path in the right order:

1. A familiar brand and compact navigation.
2. One obvious search field, with location alongside it.
3. Fast, horizontal filters that remain visible and easy to scan.
4. Result count and sorting immediately above the cards.
5. A three-column image-first card grid.
6. Event type badges on the image, compact date/venue details, visible ticket pricing and one direct action.

The earlier dark gaming concept created atmosphere, but its dark header, oversized hero and high-energy accents dominated more than the actual event-search task. The revised home hero is an image-only carousel of complete event posters, led by the supplied Appel artwork; discovery and checkout use a calmer light surface with restrained gold accents. A custom ticket-shaped SVG icon system carries the brand identity. On mobile, primary actions sit in a fixed, four-item bottom bar for Home, Events, Tickets and Profile, with safe-area spacing. Search moves to the header immediately beside the three-dot menu.

The linked Freelancer entry page redirected to a sign-up screen during inspection. The user-supplied screenshot was available and served as the visual reference for the search-results hierarchy.

## Page-by-page information architecture

### Home (`index.html`)

- Refined shared white header with Open Tickets lockup, Events plus sports/music/outdoor discovery links, FAQs and Support, a desktop Search shortcut, My Account and a Browse events action. The mobile Search shortcut stays immediately left of the three-dot menu; the fixed bottom bar retains Home, Events, Tickets and Profile. Navigation choices were compared against the official Customers page; admin/content-management entries were intentionally not copied.
- The image-only hero sits directly below the header and automatically rotates complete upcoming event banners, preserving their full proportions on desktop and mobile. Official homepage banners and dates refresh through the preview proxy, with bundled event data as fallback. No captions, ticket overlays, navigation icons or controls are layered over the artwork. A reduced-height, separate continuous trust ticker remains beneath the hero.
- The “Next 72 Hours” ticket stack follows the ticker. Its title, compact timer and smaller featured ticket are arranged so mobile users can see the full card when they reach the section; the card is 330px high on common phones and 310px on narrow screens. The countdown still uses South African Standard Time and remains synchronized with the active hero event.
- The listings use ticket-inspired 3D cards, taking the perforated silhouette and front/back page treatment from the supplied reference without copying its seat map. One event is featured with two adjacent cards behind; touch swipe, mouse drag or left/right keyboard arrows rotate the stack, and the selected ticket flips to reveal date/time, venue, event copy and any known price. No visible control rail, seat map or unverified availability/status is shown.
- Home discovery uses one full-width search/location form followed by a concise row of working category filter pills. The redundant secondary category-shortcut row was removed to keep the search path simple and uncluttered.
- Three featured event-ticket cards follow later in the home flow. After the page has fully loaded, each image remains full-card for three seconds, then slides into a half-width left panel as the title, date, venue and concise description reveal on the right.
- Shared event cards use a compact date/time strip (date plus start time in SAST) in the spare area directly above price and “View tickets”, while keeping venue and event artwork easy to scan across Home, Events, Search and related listings.
- A four-point “Why choose Open Tickets?” reassurance section follows the featured tickets, then support/help closes the page.

### Browse events (`events.html`)

- AI-generated, locally stored stadium hero art supports the page title and search affordance while keeping the event listings as the source of event-specific information.
- Event count and sort control precede the working category filters.
- Three-column event cards use the same component and reading order as search results.

### Search (`search.html`)

- Generated event-search hero art, a clear search promise and the live keyword/location form lead the page.
- Date, category and price filters remain immediately below the hero; optional venue/area search stays behind “More filters”.
- Result count and sort selector share a row; cards begin immediately underneath.
- Cards emphasize event photography, a category badge, title and venue. The spare footer area now holds a compact, two-part date/time panel (with SAST called out) immediately above the price and “View tickets” action.
- On narrow screens, explanatory copy under section, event-card and trust headings collapses into the tappable heading; descriptions open on demand, while desktop copy stays visible. Filter controls scroll horizontally and event cards use a single column for readable details and comfortable tap targets. Search results include working pagination, with six cards per page.

### Event detail (`event.html`)

- A neutral AI-generated stadium atmosphere provides the page-level hero; the selected event’s matching official artwork remains clearly displayed in a separate hero poster card.
- Dynamic event identity, date, venue and digital-entry facts remain tied to the selected event before the description.
- Venue/map and booking guidance follow the event copy.
- A sticky ticket panel on desktop keeps ticket category, quantity, total and next action visible. It returns to normal flow on mobile.
- The final action hands off to the official Open Tickets event page; it does not simulate payment.

### Help (`faq.html`)

- AI-generated customer-care image pairs with the support-oriented hero and searchable FAQ.
- Topic navigation stays alongside the questions on desktop, then becomes a compact grid on mobile.
- Accordions reduce scanning effort while preserving the supplied categories and customer-support content.

## Visual system

- Warm off-white canvases and white cards keep event photos prominent.
- Ticket gold is reserved for important controls, selected filters and price/action emphasis.
- Ink/navy is used for text, header/footer and selected story sections.
- Gaming cues are deliberately subtle: event photography, compact scoreboard-like metadata, precision grid details and ticket motifs. A site-wide soft 3D treatment adds layered surfaces, tactile controls and restrained hover tilt while preserving legibility.
- Motion is limited to the hero carousel, card tilt and small state transitions; reduced-motion preferences are respected.
