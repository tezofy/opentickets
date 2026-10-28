# Design Notes — Open Tickets Visual Refresh

## Client brief and reference access

The public Freelancer brief calls for a premium, elegant visual refresh that remains recognisable to returning Open Tickets customers. It specifically asks to retain the existing logo, event imagery and banners, familiar event-card and event-detail patterns, the homepage hero and featured events as the visual priority, and the isotope filters in their existing location and behavior. It also names responsive Home, FAQ, Event Detail and Search Results screens, a fixed/shrinking top navigation, lightweight Bootstrap 5/vanilla-JavaScript implementation, and easily rethemed text and colours.

The four supplied `byentry` pages redirect to Freelancer sign-in in this environment, so their individual visual designs could not be inspected. No entry-specific layout has been claimed or copied. The refinement is based on the public brief and the existing Open Tickets theme, using its supplied logo, official event imagery and current interaction patterns. The exact Open Tickets logo asset is now used in the shared header and footer; colour and typography foundations are exposed as CSS custom properties at the top of `css/styles.css`.

## Page-by-page information architecture

### Home (`index.html`)

- Refined shared header as a deep-navy color band with the supplied white Open Tickets mark, light nav links and a restrained solid-gold lower rule. Events, Sports, Music and Outdoor each open their own local page with a niche-matched generated hero and scoped listings; FAQs, Support and Search remain available. Desktop actions are Sign up and Log in. On mobile, both account links are included in the expanded nav menu beside the existing Search shortcut; the four-item Home, Events, Tickets and Profile dock is a floating deep-navy pill inspired by the supplied navigation image. The active icon rises into a raised disc with a rotating multicolour halo; the disc and icon cycle through the same spectrum hue at contrasting brightness, while the active destination label stays gold. Other destination names remain screen-reader accessible but visually hidden. Home and Events open local pages; Tickets opens the official bookings route (signed-out users are redirected to My Bookings login); Profile opens official account/profile guidance, not a separate dashboard. The Log in action uses the official email magic-link route; Sign up opens the official account-creation guidance because Open Tickets creates customer accounts during ticket purchase rather than offering a separate manual registration flow. Navigation choices were compared against the official Customers page; admin/content-management entries were intentionally not copied.
- The image-only hero sits directly below the header at its existing size and automatically rotates complete sports, concert and upcoming-event artwork. The generic pre-match football lineup banner is illustrative, not specific to a team or fixture. The concert slide uses a new 1696 × 624 AI-generated crowd panorama based on the uploaded reference; it is atmospheric artwork, not the official Appel event poster. Official homepage banners and dates refresh through the preview proxy, with bundled event data as fallback. No captions or controls are layered over the artwork. A reduced-height, separate continuous trust ticker remains beneath the hero.
- The “Next 7 Days” deck follows the ticker. It uses only actual verified listings whose start times fall within that seven-day window; it shows fewer than five desktop or three mobile cards when fewer listings qualify. The deck targets five visible positions on desktop and three on mobile when enough real events qualify; when the seven-day feed contains fewer listings, only those real cards appear. The 29 October 2026 checked snapshot has three real entries inside the seven-day window—ISR Sewes en Hoops, KempieFees 2026 and Mamelodi Sundowns vs Durban City, all on 31 October—so it displays three rather than inventing two more. It expands to five desktop positions when five or more qualifying listings exist. The centered card is emphasized and side cards stay visible around it; arrow controls appear only when multiple real events qualify. The number/dot pager is removed. Swipe/drag, keyboard, side-card selection, cyclic 360° navigation and flip interactions remain; the countdown uses South African Standard Time.
- Real listings remain restricted to events beginning within the next seven days. The deck is never padded with invented or placeholder listings; an empty-state message appears if no events qualify. Event imagery and event details come from the site listing dataset.
- The listings use a white, rounded image-card style based on the supplied reference, with site-provided event imagery and details only. Its example NYC listing, reviews, and amenities are not copied or invented. The 3D deck keeps side-card selection, touch swipe, mouse drag, left/right keyboard arrows, and flip-to-details interactions; visible arrows appear only when multiple real cards qualify. The number/dot pager is removed. Gold remains a solid brand accent, with gold gradients removed from text and shapes.
- Home discovery uses one full-width search/location form followed by a concise row of working category filter pills. The redundant secondary category-shortcut row was removed to keep the search path simple and uncluttered.
- Three featured event-ticket cards follow later in the home flow. Their artwork-led panels overlap in a layered desktop collage inspired by the selected Tixdoor reference, recolored in Open Tickets navy, warm white and restrained gold; phones retain a horizontal snap/swipe row.
- Shared event cards use a white rounded body and inset image with a lower-right day/month stamp, plus listed venue/category, event title, date/time (including SAST), and the minimum published ticket price verified from the official Open Tickets event listing. Prices are a checked snapshot, not live inventory; confirm changes on the official listing. No reference-only reviews or amenities are used. “View ticket” and official “Buy Ticket” actions are retained.
- A four-point “Why choose Open Tickets?” reassurance section follows the featured tickets, then support/help. A dedicated Appel concert-image feature closes the main content immediately above the footer; its detail link leads to the local event page and official ticket hand-off.

### Browse events (`events.html`)

- The all-events page has its own locally generated live-events arena hero, search form and working category filters.
- Event count and sort control precede the working category filters.
- Three-column event cards use the same component and reading order as search results.

### Sports (`sports.html`)

- A standalone route with its own generated night-football stadium hero, sports-specific headline and search prompt.
- The listing is scoped to the site’s football category; count and sort update within that category. Search carries the football filter into the Search page.

### Music (`music.html`)

- A standalone route with its own generated concert-stage hero, music-specific copy and search prompt.
- Only the music listings are displayed; the shared card component preserves event-specific source data and official ticket links.

### Outdoor (`outdoor.html`)

- A standalone route with its own generated mountain-veld outdoor-event hero, category-specific copy and search prompt.
- Only outdoor listings are displayed, with the shared event card and official ticket hand-off.

### Shared category-page behavior

- Each category hero uses a compact search bar centered within the hero. Immediately below, a continuous marquee cycles through every actual listing title and date for that page; repeated copies are hidden from assistive technology and do not create placeholder events. Hover/focus pauses the motion, and reduced-motion users get a static, scrollable list.

### Search (`search.html`)

- Generated event-search hero art, a clear search promise and the live keyword/location form lead the page.
- Date, category and price filters remain immediately below the hero; optional venue/area search stays behind “More filters”.
- Result count and sort selector share a row; cards begin immediately underneath.
- Cards use the same white rounded image-led design: site event photography, lower-right day/month stamp, venue/category and title, date/time panel (with SAST called out), available price information and a two-action footer: “View ticket” on the left, “Buy ticket” on the right.
- On narrow screens, explanatory copy under section, event-card and trust headings collapses into the tappable heading; descriptions open on demand, while desktop copy stays visible. Filter controls scroll horizontally and event cards use a single column for readable details and comfortable tap targets. Search results include working pagination, with six cards per page.

### Event detail (`event.html`)

- The selected event’s own image fills a responsive, full-bleed hero; the event name, category, date and venue stay tied to the clicked card and remain readable on a dark overlay.
- Dynamic event identity, date, venue and digital-entry facts remain tied to the selected event before the editorially arranged About this event section.
- Venue directions use an embedded Google Map plus a matching Open-in-Google-Maps link.
- A premium sticky Ticket Options panel on desktop keeps verified ticket categories, quantity, estimate and official hand-off visible; it returns to normal flow on mobile.
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
