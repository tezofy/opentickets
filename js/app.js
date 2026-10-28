(() => {
  'use strict';

  const EVENTS = [
    {
      id: 'kaizer', officialId: '01m59shh3w510d0rz51zsktzhk', title: 'Kaizer Chiefs vs TS Galaxy FC (CKC)', category: 'football', categoryLabel: 'Football',
      date: '2026-10-27T19:00:00', day: '27', month: 'OCT', time: '7:00 PM', venue: 'FNB Stadium', city: 'Johannesburg',
      image: 'assets/kaizer-vs-ts-galaxy.jpg', alt: 'Kaizer Chiefs vs TS Galaxy at FNB Stadium', price: 60,
      description: 'The Carling Knockout Cup brings together South Africa’s top-flight teams in a knockout competition. Kaizer Chiefs meet TS Galaxy at FNB Stadium.',
      venueAddress: 'Soccer City Ave, Johannesburg, 2147, South Africa',
      longDescription: 'Known as the Calabash, FNB Stadium has hosted major sporting and music events. Refer to the official event listing for current gate, entry and ticket information.',
      tiers: [{ name: 'Level 1: General Access', price: 60 }]
    },
    {
      id: 'sundowns-marumo', officialId: '01m5cf9ptpd5rqp9pp12ahqehm', title: 'Mamelodi Sundowns vs Marumo Gallants (CKC)', category: 'football', categoryLabel: 'Football',
      date: '2026-10-27T19:00:00', day: '27', month: 'OCT', time: '7:00 PM', venue: 'Loftus Versfeld Stadium', city: 'Pretoria',
      image: 'assets/sundowns-vs-marumo.jpg', alt: 'Mamelodi Sundowns vs Marumo Gallants event banner', price: null,
      description: 'Mamelodi Sundowns meet Marumo Gallants in a Carling Knockout Cup fixture at Loftus Versfeld Stadium.',
      venueAddress: 'Kirkness Street, Arcadia, Pretoria, South Africa', tiers: [{ name: 'Available ticket category', price: null }]
    },
    {
      id: 'orlando', officialId: '01m5cfmp8rgz7h5v31fhaae677', title: 'Orlando Pirates vs Milford FC (CKC)', category: 'football', categoryLabel: 'Football',
      date: '2026-10-27T19:00:00', day: '27', month: 'OCT', time: '7:00 PM', venue: 'Orlando Amstel Arena', city: 'Johannesburg',
      image: 'assets/orlando-pirates-vs-milford.jpg', alt: 'Orlando Pirates vs Milford FC event banner', price: null,
      description: 'Orlando Pirates face Milford FC in a Carling Knockout Cup fixture at Orlando Amstel Arena.',
      venueAddress: 'Mooki Street, Orlando East, Johannesburg, South Africa', tiers: [{ name: 'Available ticket category', price: null }]
    },
    {
      id: 'durban-stellenbosch', officialId: '01m59t7hbq4v6rsera8x5zzpaz', title: 'Durban City FC vs Stellenbosch FC (CKC)', category: 'football', categoryLabel: 'Football',
      date: '2026-10-28T19:00:00', day: '28', month: 'OCT', time: '7:00 PM', venue: 'Chatsworth Stadium', city: 'Durban',
      image: 'assets/durban-city-vs-stellenbosch.jpg', alt: 'Durban City FC vs Stellenbosch FC event banner', price: null,
      description: 'Durban City FC and Stellenbosch FC meet in a Carling Knockout Cup fixture at Chatsworth Stadium.',
      venueAddress: 'Chatsworth, Durban, KwaZulu-Natal, South Africa', tiers: [{ name: 'Available ticket category', price: null }]
    },
    {
      id: 'sundowns-durban', officialId: '01m5ena2smd0hden3vqrxdks07', title: 'Mamelodi Sundowns vs Durban City', category: 'football', categoryLabel: 'Football',
      date: '2026-10-31T20:15:00', day: '31', month: 'OCT', time: '8:15 PM', venue: 'Royal Bafokeng Stadium', city: 'Rustenburg',
      image: 'assets/sundowns-vs-durban-city.jpg', alt: 'Mamelodi Sundowns vs Durban City event banner', price: null,
      description: 'Mamelodi Sundowns face Durban City at Royal Bafokeng Stadium on 31 October.',
      venueAddress: 'Rustenburg, North West, South Africa', tiers: [{ name: 'Available ticket category', price: null }]
    },
    {
      id: 'appel', officialId: '01ktvcz2dxv10rs7cvq0q9tc0v', title: 'Appel in PE', category: 'music', categoryLabel: 'Music & live',
      date: '2026-11-06T21:00:00', day: '06', month: 'NOV', time: '9:00 PM', venue: 'Boardwalk Hotel and Casino', city: 'Gqeberha',
      image: 'assets/appel-in-pe.png', alt: 'Appel in PE event banner', price: 250,
      description: 'Appel performs in Gqeberha with a live set featuring popular Afrikaans pop and rock songs.',
      venueAddress: 'Beach Road, Gqeberha, 6019, South Africa',
      longDescription: 'The event listing states that children under two may enter free when seated on a parent’s lap. Review the official event information for venue rules, permitted items and age requirements before attending.',
      tiers: [{ name: 'Standing Admission', price: 250 }, { name: 'Reserved Seating', price: 250 }]
    },
    {
      id: 'going-west', officialId: '01kva9y2phdzcq6p7p12s0r5vy', title: 'Going Back West', category: 'outdoor', categoryLabel: 'Outdoor',
      date: '2026-11-07T13:00:00', day: '07', month: 'NOV', time: '1:00 PM', venue: 'Tarlton International Raceway', city: 'Krugersdorp',
      image: 'assets/going-back-west.png', alt: 'Going Back West live event banner', price: null,
      description: 'Going Back West takes place at Tarlton International Raceway. Refer to the official listing for event details and current ticket options.',
      venueAddress: 'R24, Tarlton, Krugersdorp, South Africa', tiers: [{ name: 'Available ticket category', price: null }]
    },
    {
      id: 'black-swan', officialId: '01m0g6gb95z51sc7m9hbtjkqxj', title: 'Black Swan Africa Extravaganza', category: 'music', categoryLabel: 'Music & live',
      date: '2026-11-07T17:00:00', day: '07', month: 'NOV', time: '5:00 PM', venue: 'Twin Trees', city: 'Johannesburg',
      image: 'assets/black-swan.png', alt: 'Black Swan Africa Extravaganza event banner', price: null,
      description: 'Black Swan Africa Extravaganza takes place at Twin Trees. Refer to the official listing for programme details and current ticket options.',
      venueAddress: 'Johannesburg, South Africa', tiers: [{ name: 'Available ticket category', price: null }]
    },
    {
      id: 'prg', officialId: '01m5h6y8j0qjmrxd26sytm2jvp', title: 'PRG Senior Old Boys Ete / Lunch 2026', category: 'music', categoryLabel: 'Community',
      date: '2026-11-13T12:00:00', day: '13', month: 'NOV', time: '12:00 PM', venue: 'Markötter Long Room', city: 'Stellenbosch',
      image: 'assets/prg-old-boys.png', alt: 'PRG Senior Old Boys event banner', price: null,
      description: 'The PRG Senior Old Boys Ete and lunch takes place at the Markötter Long Room. Consult the official event page for ticket details.',
      venueAddress: 'Stellenbosch, Western Cape, South Africa', tiers: [{ name: 'Available ticket category', price: null }]
    },
    {
      id: 'help24', officialId: '01m3vvwks8fnsc3f7qv9fbxpxk', title: 'Help24 Somer Fees', category: 'outdoor', categoryLabel: 'Community',
      date: '2026-11-21T12:00:00', day: '21', month: 'NOV', time: '12:00 PM', venue: 'Hoërskool Florida', city: 'Roodepoort',
      image: 'assets/help24.png', alt: 'Help24 Somer Fees event banner', price: null,
      description: 'Help24 Somer Fees takes place at Hoërskool Florida. Visit the official event page for current information and ticket options.',
      venueAddress: 'Roodepoort, Gauteng, South Africa', tiers: [{ name: 'Available ticket category', price: null }]
    }
  ];

  const HOME_EVENT_IDS = ['kaizer', 'sundowns-marumo', 'orlando', 'appel', 'going-west', 'black-swan'];
  const currency = (amount) => amount == null ? 'See at checkout' : `R ${Number(amount).toLocaleString('en-ZA', { maximumFractionDigits: 2 })}`;
  const eventById = (id) => EVENTS.find((event) => event.id === id) || EVENTS[0];
  const eventTimestamp = (event) => new Date(`${event.date}+02:00`).getTime();
  let activeHeroEvent = null;
  let updateHomepageCountdown = null;
  const officialUrl = (event) => `https://opentickets.co.za/event/${event.officialId}`;
  const eventMarkup = (event, col = 'col-6 col-lg-4') => {
    const priceText = event.price == null ? '<b>Check ticket options</b>' : `From <b>${currency(event.price)}</b>`;
    const dateText = new Date(eventTimestamp(event)).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Africa/Johannesburg' });
    const categoryText = event.category === 'football' ? `Sports · ${event.categoryLabel}` : `Events · ${event.categoryLabel}`;
    return `<div class="${col} event-item category-${event.category}" data-event-id="${event.id}">
      <article class="event-card">
        <a class="event-card-media" href="event.html?id=${encodeURIComponent(event.id)}" aria-label="View ${escapeHtml(event.title)} details">
          <img src="${event.image}" alt="${escapeHtml(event.alt)}" loading="lazy">
          <time class="event-date-stamp" datetime="${escapeHtml(event.date.slice(0, 10))}" aria-label="Event date: ${escapeHtml(event.day)} ${escapeHtml(event.month)}"><b>${escapeHtml(event.day)}</b><small>${escapeHtml(event.month)}</small></time>
        </a>
        <div class="event-card-body">
          <div class="event-card-topline">
            <div class="event-card-line"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#icon-location"></use></svg><span>${escapeHtml(event.venue)}, ${escapeHtml(event.city)}</span></div>
            <span class="event-card-kind">${escapeHtml(categoryText)}</span>
          </div>
          <h3 class="event-card-title"><a href="event.html?id=${encodeURIComponent(event.id)}">${escapeHtml(event.title)}</a></h3>
          <div class="event-card-schedule" aria-label="Event date and start time">
            <div class="event-card-schedule-unit"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#icon-calendar"></use></svg><span><small>EVENT DATE</small><strong>${escapeHtml(dateText)}</strong></span></div>
            <div class="event-card-schedule-unit"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#icon-clock"></use></svg><span><small>STARTS</small><strong>${escapeHtml(event.time)} <em>SAST</em></strong></span></div>
          </div>
          <div class="event-card-bottom"><span class="event-price">${priceText}</span><div class="event-card-actions"><a class="event-card-view" href="event.html?id=${encodeURIComponent(event.id)}" aria-label="View ${escapeHtml(event.title)} details">View ticket</a><a class="event-card-cta" href="${officialUrl(event)}" aria-label="Buy tickets for ${escapeHtml(event.title)} on Open Tickets">Buy ticket <span>↗</span></a></div></div>
        </div>
      </article>
    </div>`;
  };
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }
  function renderInto(target, events, col) {
    if (!target) return;
    target.innerHTML = events.length ? events.map((event) => eventMarkup(event, col)).join('') : '<div class="event-empty">No events match the selected filters.</div>';
  }

  // Briefly stage the featured event cards, then reveal their details without delaying interaction.
  const experienceCards = document.querySelectorAll('.experience-ticket');
  if (experienceCards.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('experience-reveal-pending');
    const scheduleExperienceReveal = () => window.setTimeout(() => {
      document.body.classList.remove('experience-reveal-pending');
      document.body.classList.add('experience-revealed');
    }, 850);
    if (document.readyState === 'complete') scheduleExperienceReveal();
    else window.addEventListener('load', scheduleExperienceReveal, { once: true });
  }

  // Shared navigation, compact-on-scroll behavior and keyboard search shortcut.
  const header = document.getElementById('siteHeader');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primaryNav');
  const onScroll = () => { if (header) header.classList.toggle('scrolled', window.scrollY > 22); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(opened));
      navToggle.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); navToggle.setAttribute('aria-label', 'Open navigation'); }));
    document.addEventListener('click', (event) => {
      if (nav.classList.contains('open') && !nav.contains(event.target) && !navToggle.contains(event.target)) {
        nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); navToggle.setAttribute('aria-label', 'Open navigation');
      }
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav?.classList.contains('open')) {
      nav.classList.remove('open'); navToggle?.setAttribute('aria-expanded', 'false'); navToggle?.setAttribute('aria-label', 'Open navigation');
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      const input = document.querySelector('.search-bar-query input, .home-search-field input, .discover-search input, .faq-search input');
      if (input) input.focus(); else window.location.href = 'search.html';
    }
  });

  // Home: preserve the established Isotope filter hooks and data-filter contract.
  const homeGrid = document.getElementById('homeEventGrid');
  if (homeGrid) renderInto(homeGrid, HOME_EVENT_IDS.map(eventById), 'col-12 col-sm-6 col-lg-4');
  const allGrid = document.getElementById('allEventGrid');
  if (allGrid) {
    renderInto(allGrid, EVENTS, 'col-12 col-sm-6 col-lg-4');
    const count = document.getElementById('eventCount');
    if (count) count.textContent = String(EVENTS.length).padStart(2, '0');
  }
  document.querySelectorAll('.isotope-filters').forEach((filterGroup) => {
    filterGroup.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      filterGroup.querySelectorAll('[data-filter]').forEach((item) => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
      const selector = button.dataset.filter;
      const grid = filterGroup.closest('.container')?.querySelector('.event-grid') || document.querySelector('.event-grid');
      if (!grid) return;
      grid.querySelectorAll('.event-item').forEach((item) => {
        const show = selector === '*' || item.matches(selector);
        item.hidden = !show;
      });
    });
  });
  const categoryParam = new URLSearchParams(location.search).get('category');
  if (categoryParam && allGrid) {
    const button = document.querySelector(`.isotope-filters [data-filter=".category-${CSS.escape(categoryParam)}"]`);
    if (button) button.click();
  }
  const eventSort = document.getElementById('eventSort');
  if (eventSort && allGrid) eventSort.addEventListener('change', () => {
    const sorted = [...EVENTS].sort((a, b) => eventSort.value === 'name' ? a.title.localeCompare(b.title) : new Date(a.date) - new Date(b.date));
    renderInto(allGrid, sorted, 'col-12 col-sm-6 col-lg-4');
    const active = document.querySelector('.event-page-filters .filter-btn.active');
    if (active && active.dataset.filter !== '*') allGrid.querySelectorAll('.event-item').forEach((item) => item.hidden = !item.matches(active.dataset.filter));
  });

  // Actual listings beginning within 72 hours only; the deck never pads with placeholders.
  const nearTermGrid = document.getElementById('nearTermGrid');
  if (nearTermGrid) {
    const mainCard = document.getElementById('mainCountdownCard');
    const carousel = document.getElementById('nearTermCarousel');
    const previousButton = document.getElementById('nearTermPrev');
    const nextButton = document.getElementById('nearTermNext');
    const status = document.getElementById('nearTermCarouselStatus');
    const nextWindow = 72 * 60 * 60 * 1000;
    let visibleIds = [];
    let currentTicketIndex = 0;
    const mobileDeckQuery = window.matchMedia('(max-width: 767px)');
    let activePointer = null;
    let suppressCarouselClickUntil = 0;
    const twoDigits = (value) => String(value).padStart(2, '0');
    const countdownParts = (target, now = Date.now()) => {
      let seconds = Math.max(0, Math.floor((target - now) / 1000));
      const hours = Math.floor(seconds / 3600); seconds -= hours * 3600;
      const minutes = Math.floor(seconds / 60); seconds -= minutes * 60;
      return { hours, minutes, seconds };
    };
    const getTicketCards = () => Array.from(nearTermGrid.querySelectorAll('.ticket-carousel-card'));
    const updateTicketCarousel = (announce = false) => {
      const cards = getTicketCards();
      const count = cards.length;
      if (count) currentTicketIndex = ((currentTicketIndex % count) + count) % count;
      if (carousel) {
        carousel.classList.toggle('is-empty', count === 0);
        carousel.classList.toggle('has-single-event', count < 2);
      }
      const isMobileDeck = mobileDeckQuery.matches;
      cards.forEach((card, index) => {
        let offset = index - currentTicketIndex;
        if (offset > count / 2) offset -= count;
        if (offset < -count / 2) offset += count;
        const position = offset === 0 ? 'center' : offset === 1 ? 'right' : offset === -1 ? 'left' : (!isMobileDeck && offset === 2 ? 'far-right' : !isMobileDeck && offset === -2 ? 'far-left' : 'behind');
        const active = position === 'center';
        card.dataset.ticketIndex = String(index);
        card.dataset.offset = String(offset);
        card.dataset.position = position;
        card.classList.toggle('is-active', active);
        card.setAttribute('aria-hidden', String(position === 'behind'));
        card.setAttribute('aria-label', `${card.dataset.title}, ${index + 1} of ${count}`);
        card.style.zIndex = String(count + 2 - Math.abs(offset));
        card.querySelectorAll('button, a').forEach((control) => { control.tabIndex = active ? 0 : -1; });
      });
      if (previousButton) previousButton.disabled = count < 2;
      if (nextButton) nextButton.disabled = count < 2;
      if (status && announce && count) status.textContent = `${cards[currentTicketIndex].dataset.title}, ticket ${currentTicketIndex + 1} of ${count}`;
    };
    const selectTicket = (index) => {
      const cards = getTicketCards();
      if (!cards.length) return;
      cards.forEach((card) => {
        card.classList.remove('is-flipped');
        card.querySelectorAll('[data-ticket-turn]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
      });
      currentTicketIndex = ((index % cards.length) + cards.length) % cards.length;
      updateTicketCarousel(true);
    };
    mobileDeckQuery.addEventListener?.('change', () => updateTicketCarousel());
    const flipTicket = (card, force) => {
      if (!card?.classList.contains('is-active')) {
        if (card) selectTicket(Number(card.dataset.ticketIndex));
        return;
      }
      const flipped = typeof force === 'boolean' ? force : !card.classList.contains('is-flipped');
      card.classList.toggle('is-flipped', flipped);
      card.querySelectorAll('[data-ticket-turn]').forEach((button) => button.setAttribute('aria-expanded', String(flipped)));
    };
    const updateCountdownValues = (event, now = Date.now()) => {
      const countdownEvent = activeHeroEvent && eventTimestamp(activeHeroEvent) > now ? activeHeroEvent : event;
      if (countdownEvent) {
        const parts = countdownParts(eventTimestamp(countdownEvent), now);
        const hours = document.getElementById('nextHours');
        const minutes = document.getElementById('nextMinutes');
        const seconds = document.getElementById('nextSeconds');
        if (hours) hours.textContent = twoDigits(parts.hours);
        if (minutes) minutes.textContent = twoDigits(parts.minutes);
        if (seconds) seconds.textContent = twoDigits(parts.seconds);
        const title = document.getElementById('nextCountdownTitle');
        const meta = document.getElementById('nextCountdownMeta');
        if (title) title.textContent = countdownEvent.title;
        if (meta) meta.textContent = `${countdownEvent.day} ${countdownEvent.month} · ${countdownEvent.time} SAST · ${countdownEvent.venue}`;
      }
    };
    updateHomepageCountdown = updateCountdownValues;
    const renderNearTerm = (now = Date.now()) => {
      const selectedId = getTicketCards()[currentTicketIndex]?.dataset.eventId;
      const upcoming = EVENTS.filter((event) => eventTimestamp(event) > now && eventTimestamp(event) <= now + nextWindow).sort((a, b) => eventTimestamp(a) - eventTimestamp(b));
      visibleIds = upcoming.map((event) => event.id);
      if (!upcoming.length) {
        nearTermGrid.innerHTML = '<div class="near-term-empty">No events are scheduled to begin within the next 72 hours. <a href="events.html">Browse the full event calendar ↗</a></div>';
        currentTicketIndex = 0;
        if (mainCard) mainCard.hidden = !activeHeroEvent;
        if (activeHeroEvent) updateCountdownValues(activeHeroEvent, now);
        updateTicketCarousel();
        return;
      }
      if (mainCard) mainCard.hidden = false;
      const nextEvent = upcoming[0];
      nearTermGrid.innerHTML = upcoming.map((event, index) => {
        const date = new Date(eventTimestamp(event));
        const dateText = date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Africa/Johannesburg' });
        const dateStamp = `${event.day} ${event.month}`;
        const ticketNumber = String(index + 1).padStart(2, '0');
        const fullVenue = [event.venue, event.city].filter(Boolean).join(', ');
        const priceText = event.price == null ? 'See official listing' : `From ${currency(event.price)}`;
        const safeTitle = escapeHtml(event.title);
        const eventPage = `event.html?id=${encodeURIComponent(event.id)}`;
        const categoryText = event.category === 'football' ? `Sports · ${event.categoryLabel}` : `Events · ${event.categoryLabel}`;
        return `<article class="near-term-card ticket-carousel-card" data-event-id="${escapeHtml(event.id)}" data-title="${safeTitle}" data-position="behind" aria-hidden="true">
          <div class="ticket-flip-inner">
            <section class="ticket-face ticket-face-front" aria-label="${safeTitle} event">
              <a class="ticket-poster" href="${eventPage}" aria-label="View ${safeTitle} event details"><img src="${escapeHtml(event.image)}" alt="${escapeHtml(event.alt)}" loading="eager">
                <time class="event-date-stamp" datetime="${escapeHtml(event.date.slice(0, 10))}" aria-label="Event date: ${escapeHtml(event.day)} ${escapeHtml(event.month)}"><b>${escapeHtml(event.day)}</b><small>${escapeHtml(event.month)}</small></time>
              </a>
              <div class="ticket-front-content">
                <div class="event-card-topline"><div class="event-card-line"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#icon-location"></use></svg><span>${escapeHtml(fullVenue || 'See official event listing')}</span></div><span class="event-card-kind">${escapeHtml(categoryText)}</span></div>
                <h3 class="ticket-card-title"><a href="${eventPage}">${safeTitle}</a></h3>
                <div class="event-card-schedule" aria-label="Event date and start time">
                  <div class="event-card-schedule-unit"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#icon-calendar"></use></svg><span><small>EVENT DATE</small><strong>${escapeHtml(dateText)}</strong></span></div>
                  <div class="event-card-schedule-unit"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#icon-clock"></use></svg><span><small>STARTS</small><strong>${escapeHtml(event.time)} <em>SAST</em></strong></span></div>
                </div>
                <div class="ticket-front-footer"><span class="ticket-front-price">${escapeHtml(priceText)}</span><button class="ticket-turn-button" type="button" data-ticket-turn aria-expanded="false">More details <span aria-hidden="true">↗</span></button></div>
              </div>
            </section>
            <section class="ticket-face ticket-face-back" aria-label="More about ${safeTitle}">
              <div class="ticket-back-header"><span>OPEN TICKETS / EVENT FILE</span><span>PASS ${ticketNumber}</span></div>
              <div class="ticket-back-content">
                <div class="ticket-back-eyebrow">EVENT DETAILS</div>
                <h3>${safeTitle}</h3>
                <p>${escapeHtml(event.description)}</p>
                <div class="ticket-back-facts">
                  <div><small>WHEN</small><strong>${escapeHtml(dateText)} · ${escapeHtml(event.time)} SAST</strong></div>
                  <div><small>WHERE</small><strong>${escapeHtml(fullVenue || 'See official event listing')}</strong></div>
                  <div><small>CATEGORY</small><strong>${escapeHtml(event.categoryLabel)}</strong></div>
                  <div><small>TICKET INFO</small><strong>${escapeHtml(priceText)}</strong></div>
                </div>
                <p class="ticket-listing-note">Confirm current ticket options and event information on the official listing.</p>
              </div>
              <div class="ticket-back-actions"><button class="ticket-turn-button ticket-return-button" type="button" data-ticket-turn aria-expanded="true">Return to ticket <span aria-hidden="true">↶</span></button><a href="event.html?id=${encodeURIComponent(event.id)}">Full event information <span aria-hidden="true">↗</span></a></div>
            </section>
          </div>
        </article>`;
      }).join('');
      const keptIndex = upcoming.findIndex((event) => event.id === selectedId);
      currentTicketIndex = keptIndex >= 0 ? keptIndex : 0;
      updateTicketCarousel();
      updateCountdownValues(nextEvent, now);
    };
    const previousTicket = () => selectTicket(currentTicketIndex - 1);
    const nextTicket = () => selectTicket(currentTicketIndex + 1);
    previousButton?.addEventListener('click', previousTicket);
    nextButton?.addEventListener('click', nextTicket);
    nearTermGrid.addEventListener('click', (event) => {
      if (performance.now() < suppressCarouselClickUntil) { event.preventDefault(); return; }
      const card = event.target.closest('.ticket-carousel-card');
      if (!card) return;
      const turnButton = event.target.closest('[data-ticket-turn]');
      if (turnButton) { event.stopPropagation(); flipTicket(card); return; }
      if (event.target.closest('a')) return;
      if (!card.classList.contains('is-active')) { selectTicket(Number(card.dataset.ticketIndex)); return; }
      if (event.target.closest('button')) return;
      flipTicket(card);
    });
    nearTermGrid.addEventListener('keydown', (event) => {
      if (event.target !== nearTermGrid) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); previousTicket(); }
      else if (event.key === 'ArrowRight') { event.preventDefault(); nextTicket(); }
      else if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flipTicket(getTicketCards()[currentTicketIndex]); }
      else if (event.key === 'Home') { event.preventDefault(); selectTicket(0); }
      else if (event.key === 'End') { event.preventDefault(); selectTicket(getTicketCards().length - 1); }
    });
    nearTermGrid.addEventListener('pointerdown', (event) => {
      if (event.target.closest('button, a') || (event.pointerType === 'mouse' && event.button !== 0)) return;
      activePointer = { id: event.pointerId, x: event.clientX, y: event.clientY, dx: 0, horizontal: false, captured: false };
      nearTermGrid.classList.add('is-dragging');
    });
    nearTermGrid.addEventListener('pointermove', (event) => {
      if (!activePointer || activePointer.id !== event.pointerId) return;
      const dx = event.clientX - activePointer.x;
      const dy = event.clientY - activePointer.y;
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) activePointer.horizontal = true;
      activePointer.dx = dx;
      if (activePointer.horizontal) {
        if (!activePointer.captured) {
          try { nearTermGrid.setPointerCapture(event.pointerId); activePointer.captured = true; } catch (_) {}
        }
        nearTermGrid.style.setProperty('--ticket-drag-x', `${dx}px`);
        nearTermGrid.style.setProperty('--ticket-drag-angle', `${Math.max(-24, Math.min(24, -dx / Math.max(nearTermGrid.clientWidth, 1) * 48))}deg`);
      }
    });
    const finishTicketDrag = (event) => {
      if (!activePointer || activePointer.id !== event.pointerId) return;
      const { dx, horizontal } = activePointer;
      activePointer = null;
      nearTermGrid.classList.remove('is-dragging');
      nearTermGrid.style.removeProperty('--ticket-drag-x');
      nearTermGrid.style.removeProperty('--ticket-drag-angle');
      if (horizontal) suppressCarouselClickUntil = performance.now() + 120;
      if (horizontal && Math.abs(dx) >= 48) selectTicket(currentTicketIndex + (dx < 0 ? 1 : -1));
    };
    nearTermGrid.addEventListener('pointerup', finishTicketDrag);
    nearTermGrid.addEventListener('pointercancel', finishTicketDrag);
    const tickNearTerm = () => {
      const now = Date.now();
      const nextIds = EVENTS.filter((event) => eventTimestamp(event) > now && eventTimestamp(event) <= now + nextWindow).sort((a, b) => eventTimestamp(a) - eventTimestamp(b)).map((event) => event.id);
      if (nextIds.join('|') !== visibleIds.join('|')) renderNearTerm(now);
      const countdownEvent = activeHeroEvent && eventTimestamp(activeHeroEvent) > now ? activeHeroEvent : (visibleIds.length ? eventById(visibleIds[0]) : null);
      if (countdownEvent) updateCountdownValues(countdownEvent, now);
    };
    renderNearTerm();
    window.setInterval(tickNearTerm, 1000);
  }

  // Search results: keyword, city, category, date, price and venue filters work together.
  const searchGrid = document.getElementById('searchResults');
  if (searchGrid) {
    const queryInput = document.getElementById('searchQuery');
    const form = document.getElementById('searchPageForm');
    const queryParams = new URLSearchParams(location.search);
    const dateSelect = document.getElementById('dateFilter');
    const categorySelect = document.getElementById('categoryFilter');
    const priceSelect = document.getElementById('priceFilter');
    const locationSelect = document.getElementById('locationFilter');
    const venueInput = document.getElementById('venueFilter');
    const sortSelect = document.getElementById('searchSort');
    const countEl = document.getElementById('resultCount');
    const titleEl = document.getElementById('resultsTitle');
    const summaryEl = document.getElementById('searchSummary');
    const empty = document.getElementById('emptyState');
    const pagination = document.getElementById('resultsPagination');
    const pageSize = 6;
    let currentPage = 1;
    let currentResults = [];
    if (queryInput) queryInput.value = queryParams.get('q') || '';
    if (locationSelect && queryParams.get('location')) locationSelect.value = queryParams.get('location');
    if (categorySelect && queryParams.get('category')) categorySelect.value = queryParams.get('category');
    function renderSearchPage() {
      const pageCount = Math.max(1, Math.ceil(currentResults.length / pageSize));
      currentPage = Math.min(currentPage, pageCount);
      const startIndex = (currentPage - 1) * pageSize;
      const pageResults = currentResults.slice(startIndex, startIndex + pageSize);
      renderInto(searchGrid, pageResults, 'col-12 col-md-6 col-xl-4');
      searchGrid.querySelectorAll('.event-empty').forEach((node) => node.remove());
      const total = currentResults.length;
      if (countEl) countEl.textContent = String(total);
      if (empty) empty.hidden = total > 0;
      searchGrid.hidden = total === 0;
      if (summaryEl) {
        const first = total ? startIndex + 1 : 0;
        const last = Math.min(startIndex + pageSize, total);
        summaryEl.textContent = total ? `Showing ${first}–${last} of ${total} events` : 'No events match the selected search and filters.';
      }
      if (pagination) {
        if (pageCount <= 1 || total === 0) pagination.innerHTML = '';
        else {
          const numbers = Array.from({ length: pageCount }, (_, index) => {
            const page = index + 1;
            return `<button class="page-number ${page === currentPage ? 'active' : ''}" type="button" data-page="${page}" ${page === currentPage ? 'aria-current="page"' : ''}>${page}</button>`;
          }).join('');
          pagination.innerHTML = `<button class="page-arrow" type="button" data-page="${currentPage - 1}" aria-label="Previous page" ${currentPage === 1 ? 'disabled' : ''}>‹</button>${numbers}<button class="page-arrow" type="button" data-page="${currentPage + 1}" aria-label="Next page" ${currentPage === pageCount ? 'disabled' : ''}>›</button>`;
        }
      }
    }
    function applySearch() {
      const term = (queryInput?.value || '').trim().toLowerCase();
      const dateLimit = Number(dateSelect?.value || 0);
      const category = categorySelect?.value || 'all';
      const locationValue = locationSelect?.value || 'all';
      const priceValue = priceSelect?.value || 'all';
      const venueTerm = (venueInput?.value || '').trim().toLowerCase();
      currentResults = EVENTS.filter((event) => {
        const text = `${event.title} ${event.venue} ${event.city} ${event.categoryLabel}`.toLowerCase();
        const matchesTerm = !term || text.includes(term);
        const matchesVenue = !venueTerm || `${event.venue} ${event.city}`.toLowerCase().includes(venueTerm);
        const matchesCategory = category === 'all' || category === event.category;
        const matchesLocation = locationValue === 'all' || event.city.toLowerCase() === locationValue.toLowerCase();
        const daysAhead = (eventTimestamp(event) - Date.now()) / 86400000;
        const matchesDate = !dateLimit || (daysAhead >= 0 && daysAhead <= dateLimit);
        const matchesPrice = priceValue === 'all' || (event.price != null && (priceValue === 'under100' ? event.price < 100 : event.price >= 100));
        return matchesTerm && matchesVenue && matchesCategory && matchesLocation && matchesDate && matchesPrice;
      });
      currentResults.sort((a,b) => {
        if (sortSelect?.value === 'name') return a.title.localeCompare(b.title);
        if (sortSelect?.value === 'price') return (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER);
        return new Date(a.date) - new Date(b.date);
      });
      currentPage = 1;
      if (titleEl) titleEl.firstChild.textContent = term ? `Results for “${term}” ` : 'All upcoming events ';
      const resetButton = document.getElementById('clearFilters');
      const filtersAreClear = !term && !venueTerm && category === 'all' && locationValue === 'all' && priceValue === 'all' && !dateLimit;
      resetButton?.classList.toggle('active', filtersAreClear);
      renderSearchPage();
    }
    function updateUrl() {
      const next = new URL(location.href);
      const q = queryInput?.value.trim() || '';
      const locationValue = locationSelect?.value || 'all';
      if (q) next.searchParams.set('q', q); else next.searchParams.delete('q');
      if (locationValue !== 'all') next.searchParams.set('location', locationValue); else next.searchParams.delete('location');
      history.replaceState({}, '', next);
    }
    form?.addEventListener('submit', (event) => { event.preventDefault(); updateUrl(); applySearch(); });
    queryInput?.addEventListener('input', applySearch);
    locationSelect?.addEventListener('change', () => { updateUrl(); applySearch(); });
    [dateSelect, categorySelect, priceSelect, sortSelect].forEach((control) => control?.addEventListener('change', applySearch));
    document.getElementById('moreFiltersButton')?.addEventListener('click', (event) => {
      const button = event.currentTarget;
      const panel = document.getElementById('moreFilterPanel');
      if (!panel) return;
      panel.hidden = !panel.hidden;
      button.setAttribute('aria-expanded', String(!panel.hidden));
      button.classList.toggle('active', !panel.hidden);
    });
    document.getElementById('applyMoreFilters')?.addEventListener('click', () => {
      applySearch();
      const panel = document.getElementById('moreFilterPanel');
      if (panel) panel.hidden = true;
      document.getElementById('moreFiltersButton')?.setAttribute('aria-expanded', 'false');
    });
    pagination?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-page]');
      if (!button || button.disabled) return;
      currentPage = Number(button.dataset.page);
      renderSearchPage();
      document.querySelector('.results-head')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    const clear = () => {
      if (queryInput) queryInput.value = '';
      if (dateSelect) dateSelect.value = 'all';
      if (categorySelect) categorySelect.value = 'all';
      if (priceSelect) priceSelect.value = 'all';
      if (locationSelect) locationSelect.value = 'all';
      if (venueInput) venueInput.value = '';
      const panel = document.getElementById('moreFilterPanel'); if (panel) panel.hidden = true;
      updateUrl(); applySearch();
    };
    document.getElementById('clearFilters')?.addEventListener('click', clear);
    document.getElementById('emptyReset')?.addEventListener('click', clear);
    venueInput?.addEventListener('input', applySearch);
    applySearch();
  }

  // Event details and ticket calculator.
  if (document.body.dataset.page === 'event') {
    const id = new URLSearchParams(location.search).get('id') || 'kaizer';
    const event = eventById(id);
    document.title = `${event.title} — Open Tickets`;
    const put = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };
    const image = document.getElementById('eventHeroImage');
    if (image) { image.src = event.image; image.alt = event.alt; }
    put('#eventName', event.title); put('#breadcrumbEvent', event.title); put('#eventCategory', event.categoryLabel.toUpperCase());
    put('#eventDate', `${event.day} ${event.month} 2026 · ${event.time}`); put('#eventVenue', event.venue);
    put('#factDate', `${event.day} ${event.month} 2026 · ${event.time}`); put('#factVenue', event.venue);
    put('#eventDescription', event.description); put('#eventLongDescription', event.longDescription || 'Check the official event page for updated entry information, event policies and any venue-specific requirements.');
    put('#venueName', event.venue); put('#venueAddress', event.venueAddress);
    const mapLink = document.getElementById('mapLink');
    if (mapLink) mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${event.venue} ${event.city}`)}`;
    const officialLink = document.getElementById('officialEventLink');
    if (officialLink) officialLink.href = officialUrl(event);
    const ticketOptions = document.getElementById('ticketOptions');
    let selectedTier = 0;
    let quantity = 1;
    const tiers = event.tiers?.length ? event.tiers : [{ name: 'Available ticket category', price: event.price }];
    if (ticketOptions) ticketOptions.innerHTML = tiers.map((tier, index) => `<label class="ticket-option ${index === 0 ? 'selected' : ''}"><input type="radio" name="ticketTier" value="${index}" ${index === 0 ? 'checked' : ''}><span class="ticket-option-info"><b>${escapeHtml(tier.name)}</b><small>${tier.price == null ? 'Live price shown on the official listing' : 'Official event listing price'}</small></span><span class="ticket-option-price">${currency(tier.price)}</span></label>`).join('');
    const quantityOutput = document.getElementById('ticketQuantity');
    const totalOutput = document.getElementById('ticketTotal');
    function updateTicketTotal() {
      if (quantityOutput) quantityOutput.textContent = String(quantity);
      const price = tiers[selectedTier]?.price;
      if (totalOutput) totalOutput.textContent = price == null ? 'At checkout' : currency(price * quantity);
    }
    ticketOptions?.addEventListener('change', (eventChange) => {
      if (eventChange.target.name !== 'ticketTier') return;
      selectedTier = Number(eventChange.target.value);
      ticketOptions.querySelectorAll('.ticket-option').forEach((label) => label.classList.toggle('selected', label.contains(eventChange.target)));
      updateTicketTotal();
    });
    document.getElementById('qtyMinus')?.addEventListener('click', () => { quantity = Math.max(1, quantity - 1); updateTicketTotal(); });
    document.getElementById('qtyPlus')?.addEventListener('click', () => { quantity = Math.min(10, quantity + 1); updateTicketTotal(); });
    updateTicketTotal();
    const related = EVENTS.filter((item) => item.id !== event.id).slice(0, 3);
    renderInto(document.getElementById('relatedEvents'), related, 'col-12 col-sm-6 col-lg-4');
    const modal = document.getElementById('bookingModal');
    const openBooking = () => {
      if (!modal) return;
      const tier = tiers[selectedTier];
      const summary = document.getElementById('modalSummary');
      if (summary) summary.innerHTML = `<strong>${escapeHtml(event.title)}</strong>${escapeHtml(tier.name)} · ${quantity} ${quantity === 1 ? 'ticket' : 'tickets'} · ${tier.price == null ? 'Live pricing on official listing' : currency(tier.price * quantity)}`;
      modal.hidden = false; document.body.classList.add('modal-open');
      modal.querySelector('.modal-close')?.focus();
    };
    const closeBooking = () => { if (modal) modal.hidden = true; document.body.classList.remove('modal-open'); document.getElementById('bookNowButton')?.focus(); };
    document.getElementById('bookNowButton')?.addEventListener('click', openBooking);
    modal?.querySelectorAll('[data-close-booking]').forEach((button) => button.addEventListener('click', closeBooking));
    document.addEventListener('keydown', (eventKey) => { if (eventKey.key === 'Escape' && modal && !modal.hidden) closeBooking(); });
  }

  // FAQ data mirrors the live site's five help topics and key customer journeys.
  const FAQS = [
    {category:'purchasing',q:'How can I book tickets?',a:'Find the event you would like to attend, choose the number of tickets and add them to your cart. If the event has allocated seating, select your preferred seats and ticket category. Continue to checkout, enter your details and complete payment on the secure payment page. Your tickets are sent to the email address you provide.'},
    {category:'purchasing',q:'Are there any tickets left for the event?',a:'If you can select a ticket and add it to your cart, tickets are still available. The remaining ticket quantity is not displayed.'},
    {category:'delivery',q:'How do I transfer tickets?',a:'Open the ticket confirmation email and choose “Transfer Tickets”. Enter the recipient’s email address, confirm the transfer and select how many tickets to send. The recipient must complete the transfer; if the link expires, the tickets remain in your account.'},
    {category:'delivery',q:'I have not received my tickets yet. What should I do?',a:'Check your inbox, spam, junk and promotions folders. Reminder emails are sent one week before, one day before and on the event day. If you still need help, contact support with your transaction number, purchaser name, checkout email, phone number, event name, ticket quantity and ticket category.'},
    {category:'delivery',q:'How do I view or download my ticket?',a:'Use the links in your confirmation email to view your tickets online, download a PDF or HTML copy, or add them to Google Wallet or Apple Wallet. If you purchased multiple tickets, they are available from the same email.'},
    {category:'account',q:'How do I log in to my account?',a:'An account is created automatically when you purchase tickets. Enter the email address used at checkout to receive a secure sign-in link. After signing in, you can view transactions, download tickets and check approved refund status.'},
    {category:'account',q:'How do I create an account?',a:'You do not need to create an account before purchasing. An account is created automatically for the email address used at checkout.'},
    {category:'account',q:'Why can I not download a PDF of my football tickets?',a:'Football tickets sold online by Open Tickets are digital only and cannot be printed. Present them on a mobile device, add them to a mobile wallet, or download the HTML file. Printed tickets are not accepted at the venue.'},
    {category:'account',q:'The website does not accept my password. What can I do?',a:'Open Tickets does not use passwords to log in. Enter the email address used for the purchase and follow the magic link sent to your inbox. Check your spam or junk folder if it does not arrive.'},
    {category:'general',q:'How do I view my ticket after purchase?',a:'Your order confirmation email includes options to view tickets online, download a PDF or HTML copy, and add them to Google Wallet or Apple Wallet. For several tickets, swipe or scroll between the tickets in the online view.'},
    {category:'general',q:'Where can I buy tickets in person?',a:'Tickets are available online at opentickets.co.za. Selected events may also be available at Shoprite, Checkers or Usave outlets.'},
    {category:'general',q:'Is there an Open Tickets app?',a:'Open Tickets does not currently have an app. Tickets are sent to the email address supplied during checkout.'},
    {category:'general',q:'Can I get notified when an event goes live?',a:'There is currently no event notification system. Please check the Open Tickets website for ticket-sale updates.'},
    {category:'general',q:'Which events are scheduled this weekend?',a:'Check the Events section of the Open Tickets website to see currently listed events.'},
    {category:'general',q:'What should I do if my email link does not arrive?',a:'Check your spam and junk folders first. Confirm you are using the same email address entered during the purchase. Contact support if you still cannot access your tickets.'},
    {category:'football',q:'Does my child under the age of six need a football ticket?',a:'For football matches, every attendee needs a valid ticket, including children under six. Requirements may vary by event, so check the event description or contact the organiser if you are unsure.'},
    {category:'football',q:'Where can I get my Orlando Pirates season card?',a:'Orlando Pirates FC season cards are digital only. No physical collection is required. Follow the post-purchase instructions to access your digital card.'},
    {category:'football',q:'Where can I buy soccer tickets?',a:'Open Tickets sells selected home matches, including matches for Orlando Pirates, Mamelodi Sundowns, Richards Bay FC and selected PSL and CAF fixtures. Check the website for currently available matches.'},
    {category:'football',q:'What if a football final is sold out?',a:'When an event is sold out, no additional public tickets may be available. Only valid ticket holders can enter; check the official event listing for the latest availability.'}
  ];
  const faqList = document.getElementById('faqList');
  if (faqList) {
    const topicNames = {all:'All questions', purchasing:'Tickets & purchasing', delivery:'Delivery & downloads', account:'Account & profile', general:'General questions', football:'Football'};
    let activeTopic = 'all';
    const searchInput = document.getElementById('faqSearchInput');
    function renderFaqs() {
      const term = (searchInput?.value || '').trim().toLowerCase();
      const filtered = FAQS.filter((item) => (activeTopic === 'all' || item.category === activeTopic) && (!term || `${item.q} ${item.a}`.toLowerCase().includes(term)));
      faqList.innerHTML = filtered.map((item, index) => `<article class="faq-item" id="faq-${item.category}-${index}"><button class="faq-question" type="button" aria-expanded="false"><span>${escapeHtml(item.q)}</span><span class="faq-plus" aria-hidden="true">+</span></button><div class="faq-answer"><p>${escapeHtml(item.a)}</p></div></article>`).join('');
      faqList.querySelectorAll('.faq-question').forEach((button) => button.addEventListener('click', () => {
        const item = button.closest('.faq-item'); const opened = item.classList.toggle('open'); button.setAttribute('aria-expanded', String(opened));
      }));
      const title = document.getElementById('faqTopicTitle'); if (title) title.textContent = term ? 'Search results' : topicNames[activeTopic];
      const count = document.getElementById('faqQuestionCount'); if (count) count.textContent = `${String(filtered.length).padStart(2,'0')} QUESTIONS`;
      const none = document.getElementById('faqNoResults'); if (none) none.hidden = filtered.length > 0;
      faqList.hidden = filtered.length === 0;
    }
    document.querySelectorAll('.faq-category').forEach((button) => button.addEventListener('click', () => {
      activeTopic = button.dataset.faqCategory;
      document.querySelectorAll('.faq-category').forEach((item) => item.classList.toggle('active', item === button));
      renderFaqs();
      if (activeTopic !== 'all') history.replaceState({}, '', `#${activeTopic}`); else history.replaceState({}, '', location.pathname);
    }));
    document.getElementById('faqSearchForm')?.addEventListener('submit', (event) => event.preventDefault());
    searchInput?.addEventListener('input', renderFaqs);
    const hash = location.hash.replace('#','');
    if (topicNames[hash]) {
      activeTopic = hash;
      document.querySelectorAll('.faq-category').forEach((item) => item.classList.toggle('active', item.dataset.faqCategory === hash));
    }
    renderFaqs();
  }

  // Full-image event carousel: each poster and the countdown below share the same listing.
  const hero = document.getElementById('heroVisual');
  if (hero) {
    const image = document.getElementById('heroImage');
    let liveEvents = null;
    const makeUpcomingSlides = () => {
      const now = Date.now();
      const source = liveEvents || EVENTS;
      const upcoming = source.filter((event) => eventTimestamp(event) > now);
      upcoming.sort((a, b) => eventTimestamp(a) - eventTimestamp(b));
      const localUpcoming = EVENTS.filter((event) => eventTimestamp(event) > now);
      const choose = (predicate, fallbackId) => upcoming.find(predicate) || localUpcoming.find(predicate) || localUpcoming.find((event) => event.id === fallbackId) || null;
      const footballEvent = choose((event) => event.category === 'football', 'sundowns-durban');
      const concertEvent = choose((event) => event.id === 'appel', 'appel') || choose((event) => event.category === 'music', null);
      const makeSlide = (event, forcedImage = null, forcedAlt = null) => {
        const fromOfficialFeed = Boolean(liveEvents) && /^https:\/\//i.test(event.image || '');
        return {
          event,
          image: forcedImage || (fromOfficialFeed ? `/api/hero-image?url=${encodeURIComponent(event.image)}` : (event.id === 'appel' ? 'assets/hero-appel-event.png' : event.image)),
          alt: forcedAlt || (event.id === 'appel' ? 'Appel in PE concert event artwork, 6 November 2026' : (event.alt || event.title))
        };
      };
      const featuredSlides = [];
      if (footballEvent) featuredSlides.push(makeSlide(footballEvent, 'assets/football-matchday-hero.png', 'Illustrative pre-match football team lineup artwork; not a specific team or live-event photograph'));
      if (concertEvent) featuredSlides.push(makeSlide(concertEvent, concertEvent.id === 'appel' ? 'assets/hero-appel-event.png' : null, concertEvent.id === 'appel' ? 'Appel in PE concert banner, 6 November 2026' : undefined));
      const featuredIds = new Set(featuredSlides.map((slide) => slide.event.id));
      const remainingSlides = upcoming.filter((event) => !featuredIds.has(event.id)).map((event) => makeSlide(event));
      return [...featuredSlides, ...remainingSlides];
    };
    let slides = makeUpcomingSlides();
    let current = 0;
    const showCurrent = (animate = false) => {
      const slide = slides[current];
      if (!slide) return;
      activeHeroEvent = slide.event;
      hero.closest('.hero-wrap')?.removeAttribute('hidden');
      const mainCard = document.getElementById('mainCountdownCard');
      if (mainCard) mainCard.hidden = false;
      if (animate) { hero.classList.remove('slide-next'); void hero.offsetWidth; hero.classList.add('slide-next'); }
      image.src = slide.image;
      image.alt = slide.alt;
      updateHomepageCountdown?.(activeHeroEvent, Date.now());
    };
    const preloadNext = () => {
      const upcoming = slides[(current + 1) % slides.length];
      if (upcoming && upcoming.image !== image.src) { const preload = new Image(); preload.src = upcoming.image; }
    };
    const showNextPoster = () => {
      const currentId = slides[current]?.event.id;
      slides = makeUpcomingSlides();
      if (!slides.length) {
        activeHeroEvent = null;
        hero.closest('.hero-wrap')?.setAttribute('hidden', '');
        return;
      }
      const previousIndex = slides.findIndex((slide) => slide.event.id === currentId);
      current = previousIndex < 0 ? 0 : (previousIndex + 1) % slides.length;
      showCurrent(true);
      preloadNext();
    };
    const refreshFromOfficialSite = async () => {
      try {
        const response = await fetch('/api/live-events', { cache: 'no-store' });
        if (!response.ok) return;
        const payload = await response.json();
        if (!Array.isArray(payload.events)) return;
        const currentId = slides[current]?.event.id;
        liveEvents = payload.events;
        slides = makeUpcomingSlides();
        if (!slides.length) {
          activeHeroEvent = null;
          hero.closest('.hero-wrap')?.setAttribute('hidden', '');
          return;
        }
        const matched = slides.findIndex((slide) => slide.event.id === currentId);
        current = matched < 0 ? 0 : matched;
        showCurrent();
        preloadNext();
      } catch (_) {
        // Keep the bundled records as a resilient fallback if the official feed is unreachable.
      }
    };
    if (slides.length) {
      showCurrent();
      preloadNext();
    } else {
      hero.closest('.hero-wrap')?.setAttribute('hidden', '');
      activeHeroEvent = null;
    }
    refreshFromOfficialSite();
    window.setInterval(refreshFromOfficialSite, 5 * 60 * 1000);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      let posterTimer = window.setInterval(showNextPoster, 6800);
      const pause = () => window.clearInterval(posterTimer);
      const resume = () => { window.clearInterval(posterTimer); posterTimer = window.setInterval(showNextPoster, 6800); };
      hero.addEventListener('mouseenter', pause);
      hero.addEventListener('mouseleave', resume);
      hero.addEventListener('focusin', pause);
      hero.addEventListener('focusout', (event) => { if (!hero.contains(event.relatedTarget)) resume(); });
    }
  }


  // Keep section summaries compact on phones; show descriptions on demand via the heading.
  const disclosureQuery = window.matchMedia('(max-width: 767px)');
  const registeredDisclosures = new WeakSet();
  const registerMobileDisclosure = (details) => {
    if (registeredDisclosures.has(details)) return;
    registeredDisclosures.add(details);
    const summary = details.querySelector(':scope > summary');
    summary?.addEventListener('click', (event) => {
      if (!disclosureQuery.matches) event.preventDefault();
    });
    details.addEventListener('toggle', () => {
      if (!disclosureQuery.matches && !details.open) details.open = true;
    });
  };
  const syncMobileDisclosures = () => {
    document.querySelectorAll('[data-mobile-collapse]').forEach((details) => {
      registerMobileDisclosure(details);
      details.open = !disclosureQuery.matches;
      const summary = details.querySelector(':scope > summary');
      if (summary) summary.tabIndex = disclosureQuery.matches ? 0 : -1;
    });
  };
  syncMobileDisclosures();
  if (disclosureQuery.addEventListener) disclosureQuery.addEventListener('change', syncMobileDisclosures);
  else disclosureQuery.addListener(syncMobileDisclosures);
  const nearTermDisclosureObserver = document.getElementById('nearTermGrid');
  if (nearTermDisclosureObserver && window.MutationObserver) {
    new MutationObserver(() => {
      nearTermDisclosureObserver.querySelectorAll('[data-mobile-collapse]').forEach((details) => {
        if (!registeredDisclosures.has(details)) {
          registerMobileDisclosure(details);
          details.open = !disclosureQuery.matches;
          const summary = details.querySelector(':scope > summary');
          if (summary) summary.tabIndex = disclosureQuery.matches ? 0 : -1;
        }
      });
    }).observe(nearTermDisclosureObserver, { childList: true, subtree: true });
  }

})();
