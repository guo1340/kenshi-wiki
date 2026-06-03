/* ============================================================
   Kenshi Wiki — App
   Path router, page renderers, search, filters, ad slots.
   No external dependencies.
   ============================================================ */

(function () {
  const D = window.WikiData;
  const M = window.WikiMeta;
  const main = document.getElementById('main');
  const leftNav = document.getElementById('leftNav');
  const rightNav = document.getElementById('rightNav');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const menuToggle = document.getElementById('menuToggle');

  /* -------------------- helpers -------------------- */
  const $ = (s, p = document) => p.querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const byId = (arr, id) => (arr || []).find((x) => x.id === id);
  const tag = (text, cls) => `<span class="tag ${esc(cls || '')}">${esc(text)}</span>`;
  const titleCase = (s) => String(s || '').replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  /* section url segment -> data array name */
  const ARR = {
    guides: 'guides', factions: 'factions', regions: 'regions', cities: 'cities',
    skills: 'skills', weapons: 'weapons', armor: 'armor', races: 'races',
    'base-building': 'baseBuilding', mods: 'mods', lore: 'lore', creatures: 'creatures'
  };
  const LABEL = {
    guides: 'Survival Guides', factions: 'Factions', regions: 'Regions & Map',
    cities: 'Cities & Settlements', skills: 'Skills & Stats', weapons: 'Weapons',
    armor: 'Armor', races: 'Races', 'base-building': 'Base Building',
    mods: 'Mods', lore: 'Lore', creatures: 'Creatures'
  };

  /* -------------------- icons -------------------- */
  const SVG = {
    sword: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M70 14 L78 22 L40 60 L32 60 L32 52 Z" fill="currentColor"/><rect x="22" y="62" width="22" height="8" rx="2" fill="currentColor" transform="rotate(45 33 66)"/><rect x="20" y="70" width="12" height="18" rx="3" fill="currentColor"/></svg>`,
    banner: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M30 14 L70 14 L70 78 L50 66 L30 78 Z" fill="currentColor"/><rect x="38" y="28" width="24" height="6" fill="rgba(0,0,0,0.4)"/></svg>`,
    map: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 26 L40 18 L62 26 L84 18 L84 74 L62 82 L40 74 L18 82 Z" fill="currentColor"/><line x1="40" y1="18" x2="40" y2="74" stroke="rgba(0,0,0,0.4)" stroke-width="3"/><line x1="62" y1="26" x2="62" y2="82" stroke="rgba(0,0,0,0.4)" stroke-width="3"/></svg>`,
    city: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16 84 L16 50 L34 38 L34 84 Z" fill="currentColor"/><path d="M40 84 L40 28 L62 16 L62 84 Z" fill="currentColor"/><path d="M68 84 L68 46 L86 56 L86 84 Z" fill="currentColor"/><rect x="46" y="36" width="10" height="12" fill="rgba(0,0,0,0.4)"/></svg>`,
    stat: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="18" y="56" width="16" height="28" fill="currentColor"/><rect x="42" y="38" width="16" height="46" fill="currentColor"/><rect x="66" y="22" width="16" height="62" fill="currentColor"/></svg>`,
    shield: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M50 12 L82 24 L82 50 C82 72 66 84 50 90 C34 84 18 72 18 50 L18 24 Z" fill="currentColor"/><path d="M50 28 L66 34 L66 50 C66 62 58 70 50 74 Z" fill="rgba(0,0,0,0.35)"/></svg>`,
    race: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="50" cy="32" r="16" fill="currentColor"/><path d="M24 86 C24 62 38 52 50 52 C62 52 76 62 76 86 Z" fill="currentColor"/></svg>`,
    home: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M50 16 L86 46 L78 46 L78 84 L22 84 L22 46 L14 46 Z" fill="currentColor"/><rect x="42" y="58" width="16" height="26" fill="rgba(0,0,0,0.4)"/></svg>`,
    gear: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M50 20 L58 28 L70 26 L74 38 L86 44 L82 56 L88 66 L78 74 L78 86 L66 86 L58 94 L46 88 L34 90 L30 78 L18 72 L24 60 L18 50 L28 42 L30 30 L42 30 Z" fill="currentColor"/><circle cx="52" cy="56" r="13" fill="rgba(0,0,0,0.4)"/></svg>`,
    book: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="22" y="18" width="56" height="64" rx="3" fill="currentColor"/><line x1="32" y1="34" x2="68" y2="34" stroke="rgba(0,0,0,0.4)" stroke-width="3"/><line x1="32" y1="46" x2="68" y2="46" stroke="rgba(0,0,0,0.4)" stroke-width="3"/><line x1="32" y1="58" x2="56" y2="58" stroke="rgba(0,0,0,0.4)" stroke-width="3"/></svg>`,
    claw: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M26 16 C30 40 34 60 38 84 L46 84 C44 58 42 38 40 16 Z" fill="currentColor"/><path d="M46 14 C48 40 50 62 52 86 L60 86 C58 60 56 38 54 14 Z" fill="currentColor"/><path d="M66 16 C66 40 64 62 62 84 L70 84 C74 58 76 38 78 16 Z" fill="currentColor"/></svg>`,
    biohazard: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="50" cy="50" r="10" fill="currentColor"/><path d="M50 12 Q40 30 50 40 Q60 30 50 12 Z" fill="currentColor"/><path d="M18 70 Q38 64 44 53 Q31 50 18 70 Z" fill="currentColor"/><path d="M82 70 Q62 64 56 53 Q69 50 82 70 Z" fill="currentColor"/><circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
    flame: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M50 10 C58 30 74 38 70 60 C68 78 56 88 50 88 C44 88 30 80 30 60 C30 46 40 44 42 52 C44 38 44 24 50 10 Z" fill="currentColor"/></svg>`
  };

  function iconBox(kind) {
    return `<div class="ico ${esc(kind)}">${SVG[kind] || SVG.biohazard}</div>`;
  }

  /* -------------------- ad slot -------------------- */
  function adSlot(format) {
    const f = format || 'rectangle';
    const isBanner = f === 'banner';
    return `
      <div class="ad-slot ad-${esc(f)}" role="complementary" aria-label="Advertisement">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
          style="display:block;${isBanner ? 'width:100%;height:90px;' : ''}"
          data-ad-client="ca-pub-1319817671788428"
          data-ad-slot="6141169453"
          ${isBanner ? '' : 'data-ad-format="auto"'}
          data-full-width-responsive="true"></ins>
      </div>
    `;
  }

  function loadAds() {
    if (!window.adsbygoogle) return;
    document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])').forEach(() => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
      catch (e) { /* non-fatal */ }
    });
  }

  /* -------------------- section content -------------------- */
  function calloutBlock(kind, label, text) {
    return `<div class="callout ${kind}"><span class="callout-label">${esc(label)}</span>${esc(text)}</div>`;
  }

  function sectionsHTML(sections) {
    return (sections || []).map((s) => {
      const list = s.list && s.list.length
        ? `<ul>${s.list.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`
        : '';
      let extra = '';
      if (s.warn) extra += calloutBlock('warn', 'Travel Warning', s.warn);
      if (s.danger) extra += calloutBlock('danger', 'Danger', s.danger);
      if (s.tip) extra += calloutBlock('tip', "Wanderer's Tip", s.tip);
      if (s.mistake) extra += calloutBlock('mistake', 'Beginner Mistake', s.mistake);
      return `<h3>${esc(s.h)}</h3>${list}${s.body || ''}${extra}`;
    }).join('');
  }

  function heroBlock(section, entity) {
    const hero = M && M.heroFor(section, entity);
    if (!hero) return '';
    return `<figure class="page-hero">
      <img src="${esc(hero.src)}" alt="${esc(hero.alt)}" width="1200" height="500"
        onerror="this.closest('.page-hero').classList.add('hero-missing');this.remove();">
      <span class="hero-fallback" aria-hidden="true">${esc(entity.name || entity.title || '')}</span>
    </figure>`;
  }

  function resolveSources(list) {
    return (list || []).map((s) => (typeof s === 'string' ? D.sourceRegistry[s] : s)).filter(Boolean);
  }

  function sourceNotes(entity) {
    const site = D.site;
    const last = (entity && entity.lastUpdated) || site.lastUpdated;
    const build = (entity && entity.buildStatus) || site.buildStatus;
    const srcs = resolveSources(entity && entity.sources);
    const fallback = srcs.length ? srcs : resolveSources(['steamStore', 'kenshiWiki', 'loFiGames']);
    const links = `<ul class="src-list">${fallback.map((s) =>
      `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a><span> — ${esc(s.note)}</span></li>`
    ).join('')}</ul>`;
    return `<aside class="source-notes" aria-label="Sources and update notes">
      <div class="src-head">Sources &amp; Update Notes</div>
      <div class="src-meta">
        <span><strong>Last updated:</strong> ${esc(last)}</span>
        <span><strong>Game version:</strong> ${esc(build)}</span>
      </div>
      <div class="src-checked"><strong>Sources checked:</strong></div>
      ${links}
      <p class="src-uncertain">Note: Kenshi mechanics, balance and mod behaviour vary by version and load order. Treat exact numbers and requirements as patch-dependent.</p>
    </aside>`;
  }

  function relatedBlock(entity) {
    const rel = (entity && entity.related) || [];
    if (!rel.length) return '';
    return `<nav class="related" aria-label="Related pages">
      <h3>Related Pages</h3>
      <div class="related-grid">
        ${rel.map((r) => `<a class="related-card" href="${esc(r.href)}">${esc(r.label)}</a>`).join('')}
      </div>
    </nav>`;
  }

  function infoboxBlock(entity, headClass) {
    const rows = entity.infobox || [];
    if (!rows.length) return '';
    return `<div class="infobox">
      <div class="infobox-head ${esc(headClass || '')}">${esc(entity.name || entity.title || '')}</div>
      <dl>${rows.map((r) => `<dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd>`).join('')}</dl>
    </div>`;
  }

  function wandererTip() {
    const t = D.survivorTips[Math.floor(Math.random() * D.survivorTips.length)];
    return `<div class="survivor-tip"><span class="st-label">Wanderer's Note</span><p>&ldquo;${esc(t)}&rdquo;</p></div>`;
  }

  /* -------------------- dynamic SEO -------------------- */
  function setMeta(attr, key, value) {
    let el = document.head && document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      if (document.head) document.head.appendChild(el);
    }
    el.setAttribute('content', value || '');
  }

  function setLink(rel, href) {
    let el = document.head && document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      if (document.head) document.head.appendChild(el);
    }
    el.setAttribute('href', href || '');
  }

  function applySeo(route) {
    if (!M || !document.head) return;
    const seo = M.seoFor(route);
    try {
      document.title = seo.title;
      setMeta('name', 'description', seo.description);
      setMeta('name', 'keywords', (seo.keywords || []).join(', '));
      setLink('canonical', seo.canonical);
      setMeta('property', 'og:title', seo.ogTitle);
      setMeta('property', 'og:description', seo.ogDescription);
      setMeta('property', 'og:url', seo.canonical);
      setMeta('property', 'og:image', seo.ogImage);
      setMeta('property', 'og:type', seo.ogType);
      setMeta('name', 'twitter:card', 'summary_large_image');
      setMeta('name', 'twitter:title', seo.ogTitle);
      setMeta('name', 'twitter:description', seo.ogDescription);
      setMeta('name', 'twitter:image', seo.ogImage);
      let ld = document.getElementById('kw-jsonld');
      if (!ld) {
        ld = document.createElement('script');
        ld.type = 'application/ld+json';
        ld.id = 'kw-jsonld';
        document.head.appendChild(ld);
      }
      ld.textContent = JSON.stringify(M.jsonLdFor(route));
    } catch (e) { /* non-fatal */ }
  }

  /* -------------------- left nav -------------------- */
  function renderLeftNav(activeRoute) {
    leftNav.innerHTML = `
      <h3>Start Here</h3>
      <ul>
        <li><a href="/" data-r="/">Home</a></li>
        <li><a href="/getting-started" data-r="/getting-started">Getting Started</a></li>
        <li><a href="/guides" data-r="/guides">Survival Guides</a></li>
      </ul>
      <h3>The World</h3>
      <ul>
        <li><a href="/factions" data-r="/factions">Factions</a></li>
        <li><a href="/regions" data-r="/regions">Regions &amp; Map</a></li>
        <li><a href="/cities" data-r="/cities">Cities</a></li>
        <li><a href="/lore" data-r="/lore">Lore</a></li>
      </ul>
      <h3>The Squad</h3>
      <ul>
        <li><a href="/skills" data-r="/skills">Skills &amp; Stats</a></li>
        <li><a href="/races" data-r="/races">Races</a></li>
        <li><a href="/weapons" data-r="/weapons">Weapons</a></li>
        <li><a href="/armor" data-r="/armor">Armor</a></li>
        <li><a href="/creatures" data-r="/creatures">Creatures</a></li>
      </ul>
      <h3>The Long Game</h3>
      <ul>
        <li><a href="/base-building" data-r="/base-building">Base Building</a></li>
        <li><a href="/mods" data-r="/mods">Mods</a></li>
        <li><a href="/tips" data-r="/tips">Wanderer's Notes</a></li>
        <li><a href="/patches" data-r="/patches">Patch Notes</a></li>
      </ul>
      <h3>Site Info</h3>
      <ul>
        <li><a href="/about" data-r="/about">About</a></li>
        <li><a href="/privacy-policy" data-r="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/contact" data-r="/contact">Contact</a></li>
      </ul>
      ${adSlot('half-page')}
    `;
    leftNav.querySelectorAll('a').forEach((a) => {
      const r = a.getAttribute('data-r');
      if (activeRoute === r || (activeRoute.startsWith(r + '/') && r !== '/')) a.classList.add('active');
      if (r === '/' && activeRoute === '/') a.classList.add('active');
    });
  }

  /* -------------------- right nav -------------------- */
  function renderRightNav(route) {
    let extra = '';
    if (route.startsWith('/factions')) {
      extra = `<h3>Related</h3><ul>
        <li><a href="/regions">Regions &amp; Map</a></li>
        <li><a href="/cities">Cities</a></li>
      </ul>`;
    } else if (route.startsWith('/weapons') || route.startsWith('/armor')) {
      extra = `<h3>Related</h3><ul>
        <li><a href="/skills">Combat skills</a></li>
        <li><a href="/guides/melee-combat-basics">Combat basics</a></li>
      </ul>`;
    } else if (route.startsWith('/base-building')) {
      extra = `<h3>Base Building</h3><ul>
        <li><a href="/base-building/best-base-locations">Best base locations</a></li>
        <li><a href="/base-building/raid-defense">Raid defence</a></li>
      </ul>`;
    } else if (route.startsWith('/regions') || route.startsWith('/cities')) {
      extra = `<h3>Related</h3><ul>
        <li><a href="/factions">Factions</a></li>
        <li><a href="/creatures">Creatures</a></li>
      </ul>`;
    }
    const tip = D.survivorTips[Math.floor(Math.random() * D.survivorTips.length)];
    rightNav.innerHTML = `
      <h3>Most Searched</h3>
      <ul>
        <li><a href="/guides/best-base-locations">Best Base Locations</a></li>
        <li><a href="/guides/surviving-first-week">Beginner Guide</a></li>
        <li><a href="/factions">Faction Guide</a></li>
        <li><a href="/guides/toughness-training">Toughness Training</a></li>
        <li><a href="/guides/best-money-making-methods">Best Money Methods</a></li>
        <li><a href="/regions">Wasteland Map</a></li>
        <li><a href="/creatures/beak-things">Beak Things</a></li>
      </ul>
      ${extra}
      <h3>Wanderer's Note</h3>
      <p class="qd">&ldquo;${esc(tip)}&rdquo;</p>
      <h3>Kenshi 2</h3>
      <p class="qd">${esc(D.patches[0].version)} &mdash; the prequel from Lo-Fi Games. <a href="/patches">Read more.</a></p>
      ${adSlot('rectangle')}
    `;
  }

  /* ============================================================
     ROUTER
     ============================================================ */
  function parseRoute() {
    const pathRoute = location.pathname.replace(/\/$/, '') || '/';
    return pathRoute === '/index.html' ? '/' : pathRoute;
  }

  function go(path) {
    const cleanPath = path.replace(/\/$/, '') || '/';
    if (cleanPath === parseRoute()) return;
    history.pushState({}, '', cleanPath);
    leftNav.classList.remove('open');
    navigate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigate() {
    const route = parseRoute();
    renderLeftNav(route);
    renderRightNav(route);

    const seg = route.split('/').filter(Boolean);

    if (route === '/' || route === '') renderHome();
    else if (route === '/getting-started') renderStaticPage('getting-started');
    else if (route === '/about' || route === '/privacy-policy' || route === '/contact') renderInfoPage(seg[0]);
    else if (route === '/tips') renderTips();
    else if (route === '/patches') renderPatches();
    else if (seg.length === 1 && ARR[seg[0]]) renderList(seg[0]);
    else if (seg.length === 2 && ARR[seg[0]]) renderDetail(seg[0], seg[1]);
    else render404(route);

    applySeo(route);
    setTimeout(loadAds, 100);
  }

  /* ============================================================
     HOME
     ============================================================ */
  function renderHome() {
    const cat = [
      { href: '/getting-started', icon: 'flame', label: 'Getting Started' },
      { href: '/guides', icon: 'biohazard', label: 'Survival Guides' },
      { href: '/factions', icon: 'banner', label: 'Factions' },
      { href: '/regions', icon: 'map', label: 'Regions & Map' },
      { href: '/cities', icon: 'city', label: 'Cities' },
      { href: '/skills', icon: 'stat', label: 'Skills & Stats' },
      { href: '/weapons', icon: 'sword', label: 'Weapons' },
      { href: '/armor', icon: 'shield', label: 'Armor' },
      { href: '/races', icon: 'race', label: 'Races' },
      { href: '/base-building', icon: 'home', label: 'Base Building' },
      { href: '/creatures', icon: 'claw', label: 'Creatures' },
      { href: '/mods', icon: 'gear', label: 'Mods' },
      { href: '/lore', icon: 'book', label: 'Lore' }
    ];
    const featured = [
      { href: '/guides/best-beginner-starts', t: 'Best Beginner Starts', d: 'Pick a start that teaches the game instead of punishing you.' },
      { href: '/factions', t: 'Faction Tier List', d: 'Who to befriend, who to avoid, and who will enslave you.' },
      { href: '/guides/best-base-locations', t: 'Best Base Locations', d: 'Where to settle so the location is not a slow defeat.' },
      { href: '/guides/avoiding-beak-things', t: 'How To Survive Beak Things', d: 'The apex predator that teaches you to check the horizon.' },
      { href: '/guides/best-money-making-methods', t: 'Best Money Methods', d: 'From copper mining to Leviathan pearls — income by game stage.' },
      { href: '/guides/toughness-training', t: 'Toughness Training', d: 'How to grow strong by losing fights on purpose.' }
    ];
    const beginner = D.guides.filter((g) => g.difficulty === 'Beginner').slice(0, 5);
    const popularFactions = ['holy-nation', 'shek-kingdom', 'united-cities', 'tech-hunters'];

    main.innerHTML = `
      <div class="hero">
        <img class="hero-bg" src="/assets/images/hero/homepage-hero.jpg" alt="Kenshi wasteland gameplay scene" loading="eager">
        <div class="hero-fog"></div>
        <div class="hero-inner">
          <span class="hero-kicker">Wasteland Survival Manual</span>
          <h1>Kenshi Wiki</h1>
          <p class="hero-quote">&ldquo;Survive the wasteland. Lose limbs. Become stronger.&rdquo;</p>
          <p class="hero-sub">Kenshi is not about becoming the chosen hero. It is about surviving long enough to matter.</p>
          <div class="hero-buttons">
            <a class="btn" href="/getting-started">Start Here</a>
            <a class="btn" href="/guides/surviving-first-week">Beginner Guide</a>
            <a class="btn" href="/guides/best-beginner-starts">Best Starting Locations</a>
            <a class="btn" href="/factions">Faction Guide</a>
          </div>
        </div>
      </div>

      ${adSlot('banner')}

      <h2 class="section-head">Field Categories</h2>
      <div class="cards cat-cards">
        ${cat.map((c) => `
          <a class="card cat-card" href="${c.href}">
            ${iconBox(c.icon)}
            <h4>${esc(c.label)}</h4>
          </a>`).join('')}
      </div>

      <h2 class="section-head">Featured Field Guides</h2>
      <div class="cards">
        ${featured.map((f) => `
          <a class="card" href="${esc(f.href)}">
            <h4>${esc(f.t)}</h4>
            <p>${esc(f.d)}</p>
          </a>`).join('')}
      </div>

      ${adSlot('in-article')}

      <div class="home-grid">
        <div class="page">
          <h2>Major Factions</h2>
          <div class="breadcrumb">Know who will help you — and who will sell you.</div>
          <div class="chip-list">
            ${popularFactions.map((id) => {
              const f = byId(D.factions, id);
              return f ? `<a class="chip" href="/factions/${esc(f.id)}">${esc(f.name)}</a>` : '';
            }).join('')}
          </div>
          <p style="margin-top:14px;"><a href="/factions">Open the full Faction Guide &rarr;</a></p>
        </div>
        <div class="page">
          <h2>Best Beginner Guides</h2>
          <div class="breadcrumb">The pages new wanderers come back to.</div>
          <ul class="link-list">
            ${beginner.map((g) => `<li><a href="/guides/${esc(g.id)}">${esc(g.title)}</a></li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="page">
        <h2>Why Kenshi Is Different</h2>
        <p>Most games hand you a destiny. Kenshi hands you a body, a harsh world, and complete indifference about whether you live. There is no chosen hero, no story railroad, no enemy scaling politely to your level.</p>
        <p>Defeat is not a game over screen — it is how characters grow. A squad beaten unconscious by bandits wakes up, heals, and comes back tougher. You learn the map, the factions and your own limits the hard way, and that is exactly the point.</p>
        <p><a href="/getting-started">Read the Getting Started guide &rarr;</a></p>
      </div>

      <div class="page">
        <h2>Latest News &mdash; ${esc(D.patches[0].version)}</h2>
        <div class="breadcrumb">${esc(D.patches[0].date)}</div>
        <ul>${D.patches[0].changes.slice(0, 4).map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
        <p><a href="/patches">View full patch history &rarr;</a></p>
      </div>
    `;
  }

  /* ============================================================
     STATIC PAGE (getting-started)
     ============================================================ */
  function renderStaticPage(slug) {
    const p = D.pages[slug];
    if (!p) return render404(slug);
    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page article">
        <h1>${esc(p.title)}</h1>
        <div class="breadcrumb">Home / ${esc(p.title)}</div>
        ${p.body}
      </div>
      ${adSlot('in-article')}
    `;
  }

  /* ============================================================
     LIST PAGES
     ============================================================ */
  function dangerClass(d) {
    return ({ Low: 'good', Moderate: '', High: 'bad', Extreme: 'bad' })[d] || '';
  }
  function dispoClass(d) {
    return ({ Friendly: 'good', Hostile: 'bad', Neutral: '', Conditional: '' })[d] || '';
  }

  function listIntro(section) {
    return ({
      guides: 'Field manuals written from the perspective of wanderers who have been through it. Start with the beginner guides and work toward the advanced playthroughs.',
      factions: 'The wasteland is carved up between powers that will shelter you, ignore you, or enslave you. Know each faction before you cross its land.',
      regions: 'Where you travel matters as much as how. These guides rate every region by climate, threats, loot and the level you should be before entering.',
      cities: 'Every settlement has an owner, a guard force and a reason to visit — or to stay away. Here is who controls what, and what each town is good for.',
      skills: 'Skills are how a squad stops depending on luck. Each page covers what the skill does, hidden effects, the fastest training and the common mistakes.',
      weapons: 'A weapon is a long-term relationship. The best one is rarely the hardest-hitting — it is the one that suits the fighter, the armour and the fight.',
      armor: 'Armour is a trade between protection and speed. These guides explain what each tier costs and which build should wear it.',
      races: 'Your race decides who tolerates you, how you survive the environment, and which builds you are suited to. Choose before the wasteland chooses for you.',
      'base-building': 'A base turns a squad into a settlement. These guides cover location, farming, power, production, defence and the mistakes that get a base overrun.',
      mods: 'Kenshi has one of the strongest modding communities in survival gaming. These guides cover the mods wanderers reach for — and the load-order traps to avoid.',
      lore: 'Kenshi tells its history through ruins and silence. These pages piece together the Ancient Empire, the Skeletons, the Collapse and the dead world beneath the wasteland.',
      creatures: 'The wasteland is full of things that hunt. These guides rate every creature by danger, behaviour, loot and how to counter — or avoid — it.'
    })[section] || '';
  }

  function cardTag(section, e) {
    if (section === 'factions') return ' ' + tag(e.disposition, dispoClass(e.disposition));
    if (section === 'regions' || section === 'creatures') return ' ' + tag(e.danger, dangerClass(e.danger));
    if (section === 'cities') return ' ' + tag(e.controlledBy);
    return '';
  }

  function renderList(section) {
    if (section === 'guides') return renderGuidesList();
    if (section === 'skills') return renderSkillsList();
    if (section === 'weapons') return renderWeaponsList();

    const arr = D[ARR[section]] || [];
    const cards = arr.map((e) => `
      <a class="card" href="/${section}/${esc(e.id)}">
        <h4>${esc(e.name)}${cardTag(section, e)}</h4>
        <p>${esc(e.summary || e.intro || '')}</p>
      </a>`).join('');
    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page">
        <h1>${esc(LABEL[section])}</h1>
        <div class="breadcrumb">Home / ${esc(LABEL[section])}</div>
        <p>${esc(listIntro(section))}</p>
        <div class="cards">${cards}</div>
      </div>
      ${adSlot('in-article')}
    `;
  }

  function renderGuidesList() {
    const cats = [
      { key: 'survival', label: 'Survival Guides' },
      { key: 'economy', label: 'Economy Guides' },
      { key: 'combat', label: 'Combat Guides' },
      { key: 'base', label: 'Base Building Guides' },
      { key: 'squad', label: 'Squad Guides' },
      { key: 'advanced', label: 'Advanced Guides' }
    ];
    const cardFor = (g) => `
      <a class="card" href="/guides/${esc(g.id)}">
        <h4>${esc(g.title)} ${tag(g.difficulty, g.difficulty === 'Beginner' ? 'good' : '')}</h4>
        <p>${esc(g.summary)}</p>
      </a>`;
    const blocks = cats.map((c) => {
      const list = D.guides.filter((g) => g.category === c.key);
      if (!list.length) return '';
      return `<h3>${esc(c.label)}</h3><div class="cards">${list.map(cardFor).join('')}</div>`;
    }).join('');
    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page">
        <h1>Survival Guides</h1>
        <div class="breadcrumb">Home / Survival Guides</div>
        <p>${esc(listIntro('guides'))}</p>
        ${blocks}
      </div>
      ${adSlot('in-article')}
    `;
  }

  function renderSkillsList() {
    const cats = ['all', 'Combat', 'Weapon', 'Utility'];
    const initialState = loadState('skills-filters', { cat: 'all', search: '' });
    const initialRows = D.skills.slice();
    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page">
        <h1>Skills &amp; Stats</h1>
        <div class="breadcrumb">Home / Skills &amp; Stats</div>
        <p>${esc(listIntro('skills'))}</p>
        <div class="toolbar" id="skTb">
          <div class="filter-group">
            <span class="filter-label">Category</span>
            ${cats.map((t) => `<button data-f="cat" data-v="${t}">${titleCase(t)}</button>`).join('')}
          </div>
          <input type="text" class="filter-search" placeholder="Filter by name…" data-f="search" value="${esc(initialState.search)}">
          <span class="result-count" id="skCount">${D.skills.length} of ${D.skills.length}</span>
        </div>
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>Skill</th><th>Category</th><th>What It Governs</th></tr></thead>
            <tbody id="skBody">${skillRowsHTML(initialRows)}</tbody>
          </table>
        </div>
      </div>
      ${adSlot('in-article')}
    `;
    bindSkillsTable();
  }

  function bindSkillsTable() {
    if (!D.skills || !D.skills.length) return;
    const toolbar = $('#skTb');
    const body = $('#skBody');
    const count = $('#skCount');
    const search = toolbar && toolbar.querySelector('input.filter-search');
    if (!toolbar || !body || !count || !search) return;
    const stateKey = 'skills-filters';
    const state = loadState(stateKey, { cat: 'all', search: search.value || '' });
    state.cat = ['all', 'Combat', 'Weapon', 'Utility'].includes(state.cat) ? state.cat : 'all';
    if (state.search) search.value = state.search;
    function applyAndRender() {
      saveState(stateKey, state);
      let rows = D.skills.slice();
      if (state.cat !== 'all') rows = rows.filter((s) => s.category === state.cat);
      if (state.search) {
        const q = state.search.toLowerCase();
        rows = rows.filter((s) => s.name.toLowerCase().includes(q));
      }
      $('#skBody').innerHTML = skillRowsHTML(rows);
      $('#skCount').textContent = `${rows.length} of ${D.skills.length}`;
      document.querySelectorAll('#skTb [data-f="cat"]').forEach((b) => b.classList.toggle('active', b.dataset.v === state.cat));
    }
    toolbar.querySelectorAll('[data-f="cat"]').forEach((b) => {
      b.addEventListener('click', () => { state.cat = b.dataset.v; applyAndRender(); });
    });
    search.addEventListener('input', () => { state.search = search.value; applyAndRender(); });
    applyAndRender();
  }

  function skillRowsHTML(rows) {
    return rows.length === 0
      ? `<tr><td colspan="3"><div class="empty-result">No skills match.</div></td></tr>`
      : rows.map((s) => `
        <tr>
          <td><a href="/skills/${esc(s.id)}" class="row-link">${esc(s.name)}</a></td>
          <td>${tag(s.category)}</td>
          <td>${esc(s.governs)}</td>
        </tr>`).join('');
  }

  function renderWeaponsList() {
    const initialState = loadState('weapons-filters', { type: 'all', search: '' });
    const initialRows = D.weapons.slice();
    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page">
        <h1>Weapons</h1>
        <div class="breadcrumb">Home / Weapons</div>
        <p>${esc(listIntro('weapons'))}</p>
        <div class="toolbar" id="wpnTb">
          <div class="filter-group">
            <span class="filter-label">Type</span>
            ${['all', 'Melee', 'Ranged'].map((t) => `<button data-f="type" data-v="${t}">${titleCase(t)}</button>`).join('')}
          </div>
          <input type="text" class="filter-search" placeholder="Filter by name…" data-f="search" value="${esc(initialState.search)}">
          <span class="result-count" id="wpnCount">${D.weapons.length} of ${D.weapons.length}</span>
        </div>
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>Weapon</th><th>Category</th><th>Type</th><th>Best For</th></tr></thead>
            <tbody id="wpnBody">${weaponRowsHTML(initialRows)}</tbody>
          </table>
        </div>
      </div>
      ${adSlot('in-article')}
    `;
    bindWeaponsTable();
  }

  function bindWeaponsTable() {
    if (!D.weapons || !D.weapons.length) return;
    const toolbar = $('#wpnTb');
    const body = $('#wpnBody');
    const count = $('#wpnCount');
    const search = toolbar && toolbar.querySelector('input.filter-search');
    if (!toolbar || !body || !count || !search) return;
    const stateKey = 'weapons-filters';
    const state = loadState(stateKey, { type: 'all', search: search.value || '' });
    state.type = ['all', 'Melee', 'Ranged'].includes(state.type) ? state.type : 'all';
    if (state.search) search.value = state.search;
    function applyAndRender() {
      saveState(stateKey, state);
      let rows = D.weapons.slice();
      if (state.type !== 'all') rows = rows.filter((w) => w.weaponType === state.type);
      if (state.search) {
        const q = state.search.toLowerCase();
        rows = rows.filter((w) => w.name.toLowerCase().includes(q));
      }
      $('#wpnBody').innerHTML = weaponRowsHTML(rows);
      $('#wpnCount').textContent = `${rows.length} of ${D.weapons.length}`;
      document.querySelectorAll('#wpnTb [data-f="type"]').forEach((b) => b.classList.toggle('active', b.dataset.v === state.type));
    }
    toolbar.querySelectorAll('[data-f="type"]').forEach((b) => {
      b.addEventListener('click', () => { state.type = b.dataset.v; applyAndRender(); });
    });
    search.addEventListener('input', () => { state.search = search.value; applyAndRender(); });
    applyAndRender();
  }

  function weaponRowsHTML(rows) {
    return rows.length === 0
      ? `<tr><td colspan="4"><div class="empty-result">No weapons match.</div></td></tr>`
      : rows.map((w) => `
        <tr>
          <td><a href="/weapons/${esc(w.id)}" class="row-link">${esc(w.name)}</a></td>
          <td>${tag(w.cat)}</td>
          <td>${tag(w.weaponType, w.weaponType === 'Ranged' ? 'bad' : '')}</td>
          <td>${esc(w.bestFor)}</td>
        </tr>`).join('');
  }

  /* ============================================================
     DETAIL PAGES
     ============================================================ */
  function renderDetail(section, id) {
    const arr = D[ARR[section]] || [];
    const e = byId(arr, id);
    if (!e) return render404(section + '/' + id);

    if (section === 'guides') return renderGuideDetail(e);

    let headClass = '';
    let titleTag = '';
    if (section === 'factions') { headClass = dispoClass(e.disposition) === 'good' ? 'pos' : (dispoClass(e.disposition) === 'bad' ? 'neg' : ''); titleTag = ' ' + tag(e.disposition, dispoClass(e.disposition)); }
    if (section === 'regions' || section === 'creatures') { headClass = dangerClass(e.danger) === 'bad' ? 'neg' : 'pos'; titleTag = ' ' + tag(e.danger, dangerClass(e.danger)); }

    const modList = (section === 'mods' && e.modList && e.modList.length) ? `
      <h3>Recommended Mods</h3>
      <div class="mod-list">
        ${e.modList.map((x) => `
          <div class="mod-row">
            <div class="mod-name">${esc(x.name)}</div>
            <div class="mod-why">${esc(x.why)}</div>
          </div>`).join('')}
      </div>` : '';

    let topCallout = '';
    if (e.warn) topCallout += calloutBlock('warn', 'Beginner Warning', e.warn);
    if (e.tip) topCallout += calloutBlock('tip', "Wanderer's Tip", e.tip);

    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page">
        <div class="breadcrumb"><a href="/${section}">${esc(LABEL[section])}</a> / ${esc(e.name)}</div>
        <div class="detail-grid">
          <div class="article">
            <h1>${esc(e.name)}${titleTag}</h1>
            ${heroBlock(section, e)}
            ${e.intro ? `<p class="lore">${esc(e.intro)}</p>` : ''}
            ${e.summary ? `<p>${esc(e.summary)}</p>` : ''}
            ${topCallout}
            ${sectionsHTML(e.sections)}
            ${modList}
            ${wandererTip()}
            ${relatedBlock(e)}
            ${sourceNotes(e)}
          </div>
          <div>
            ${infoboxBlock(e, headClass)}
          </div>
        </div>
      </div>
      ${adSlot('in-article')}
    `;
  }

  function renderGuideDetail(g) {
    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page article">
        <div class="breadcrumb"><a href="/guides">Survival Guides</a> / ${esc(g.title)}</div>
        <h1>${esc(g.title)} ${tag(g.difficulty, g.difficulty === 'Beginner' ? 'good' : '')}</h1>
        ${heroBlock('guides', g)}
        <p class="lore">${esc(g.tagline)}</p>
        <p>${esc(g.summary)}</p>
        ${sectionsHTML(g.sections)}
        ${wandererTip()}
        ${relatedBlock(g)}
        ${sourceNotes(g)}
      </div>
      ${adSlot('in-article')}
    `;
  }

  /* ============================================================
     TIPS / PATCHES
     ============================================================ */
  function renderTips() {
    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page">
        <h1>Wanderer's Notes</h1>
        <div class="breadcrumb">Home / Wanderer's Notes</div>
        <p>Hard-won advice, repeated until it became common sense. Read it before the wasteland teaches it to you the expensive way.</p>
        <div class="tip-grid">
          ${D.survivorTips.map((t) => `<div class="survivor-tip"><span class="st-label">Note</span><p>&ldquo;${esc(t)}&rdquo;</p></div>`).join('')}
        </div>
      </div>
      ${adSlot('in-article')}
    `;
  }

  function renderPatches() {
    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page">
        <h1>Patch Notes</h1>
        <div class="breadcrumb">Home / Patch Notes</div>
        <p style="color:var(--muted);font-size:13px;">Most recent first. Kenshi released in 2018; Kenshi 2 is in active development at Lo-Fi Games.</p>
        ${D.patches.map((p) => `
          <div class="patch">
            <div class="patch-meta"><span class="ver">${esc(p.version)}</span><span>${esc(p.date)}</span></div>
            <ul>${p.changes.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
          </div>`).join('')}
      </div>
      ${adSlot('in-article')}
    `;
  }

  /* ============================================================
     INFO PAGES (about / privacy / contact)
     ============================================================ */
  function renderInfoPage(slug) {
    const pages = {
      'about': {
        title: 'About Kenshi Wiki',
        crumb: 'About',
        body: `
          <p><strong>Kenshi Wiki</strong> is an unofficial, fan-made survival wiki for players navigating the wasteland of Kenshi. It collects practical guidance on factions, regions, cities, skills, weapons, armor, races, base building, mods, lore and long-term survival strategy.</p>
          <p>This site is built and maintained as a static community resource. It is not affiliated with, endorsed by, or sponsored by Lo-Fi Games or any rights holder of Kenshi.</p>
          <h3>Our approach</h3>
          <p>This wiki is written to sound like advice from wanderers who have actually put in the hours — practical, opinionated, and focused on the long game. Every page leads with what matters, explains why, and names the mistakes that get new players killed.</p>
          <h3>Content accuracy</h3>
          <p>Kenshi mechanics, balance and mod behaviour vary by game version and load order. Patch updates and community discoveries can make older pages incomplete. Use the <a href="/contact">Contact page</a> to report corrections.</p>
          <h3>Advertising</h3>
          <p>This site may display advertising to help cover hosting, domain and maintenance costs. Ads are placed so they do not block core wiki content.</p>
        `
      },
      'privacy-policy': {
        title: 'Privacy Policy',
        crumb: 'Privacy Policy',
        body: `
          <p><strong>Effective date:</strong> May 23, 2026</p>
          <p>This Privacy Policy explains how Kenshi Wiki handles information when you visit this website.</p>
          <h3>Information we collect</h3>
          <p>This site is a static wiki and does not require user accounts. We do not intentionally collect names, passwords, payment information, or private account details from visitors.</p>
          <p>Basic technical information may be processed automatically by hosting, security, analytics and advertising providers. This can include IP address, browser type, device type, pages visited, referring pages, approximate location and timestamps.</p>
          <h3>Cookies and local storage</h3>
          <p>The site may use browser storage such as <code>localStorage</code> to remember interface preferences, such as table filters. Third-party services such as analytics or advertising providers may use cookies or similar technologies according to their own policies.</p>
          <h3>Analytics</h3>
          <p>We may use analytics tools to understand site traffic, popular pages, search behaviour and technical issues. Analytics data is used to improve the site and prioritise wiki content.</p>
          <h3>Advertising</h3>
          <p>This site may use Google AdSense or other advertising providers. Advertising partners may use cookies or similar technologies to serve ads, measure ad performance, prevent fraud, and personalise or limit advertising depending on user settings and applicable law.</p>
          <p>You can learn more about how Google uses information from sites that use its services by visiting Google&rsquo;s privacy and advertising documentation.</p>
          <h3>Third-party links</h3>
          <p>This wiki may link to external websites, stores, social platforms, developer posts or community resources. We are not responsible for the privacy practices or content of third-party websites.</p>
          <h3>Children&rsquo;s privacy</h3>
          <p>This site is intended as a general game-information resource. It is not designed to knowingly collect personal information from children.</p>
          <h3>Changes to this policy</h3>
          <p>We may update this Privacy Policy as the site grows, especially when new analytics, advertising, contact or community features are added.</p>
          <h3>Contact</h3>
          <p>Questions about this policy can be sent through the <a href="/contact">Contact page</a>.</p>
        `
      },
      'contact': {
        title: 'Contact',
        crumb: 'Contact',
        body: `
          <p>Use this page to report incorrect wiki information, request removals, suggest new pages, or ask questions about Kenshi Wiki.</p>
          <div class="callout tip"><span class="callout-label">Before publishing</span>Replace the placeholder email below with your real contact email, or link to your issue tracker.</div>
          <h3>Email</h3>
          <p><a href="mailto:contact@gamewikihub.com">contact@gamewikihub.com</a></p>
          <h3>What to include</h3>
          <ul>
            <li>The page or entry name you are referring to.</li>
            <li>What information is wrong, missing or outdated.</li>
            <li>A source, screenshot, patch note or clear explanation when available.</li>
          </ul>
          <h3>Unofficial site notice</h3>
          <p>This is an unofficial fan wiki. For official support, purchasing issues or bug reports, contact Lo-Fi Games or the relevant platform support channel.</p>
        `
      }
    };
    const p = pages[slug];
    if (!p) return render404(slug);
    main.innerHTML = `
      ${adSlot('banner')}
      <div class="page legal-page">
        <h1>${p.title}</h1>
        <div class="breadcrumb">Home / ${p.crumb}</div>
        ${p.body}
        ${sourceNotes(null)}
      </div>
    `;
  }

  function render404(slug) {
    main.innerHTML = `
      <div class="page">
        <h1>Trail Gone Cold</h1>
        <p>No survival record found for <code>${esc(slug)}</code>. The wind has buried the trail.</p>
        <p><a href="/">&larr; Back to safe ground</a></p>
      </div>
    `;
  }

  /* ============================================================
     SEARCH
     ============================================================ */
  function buildSearchIndex() {
    if (Array.isArray(D.searchIndex)) return D.searchIndex;
    const index = [];
    const add = (arr, section, sub, nameKey) => {
      (D[arr] || []).forEach((e) => index.push({
        title: e[nameKey || 'name'], sub: sub, href: '/' + section + '/' + e.id
      }));
    };
    add('guides', 'guides', 'Guide', 'title');
    add('factions', 'factions', 'Faction');
    add('regions', 'regions', 'Region');
    add('cities', 'cities', 'City');
    add('skills', 'skills', 'Skill');
    add('weapons', 'weapons', 'Weapon');
    add('armor', 'armor', 'Armor');
    add('races', 'races', 'Race');
    add('baseBuilding', 'base-building', 'Base Building');
    add('mods', 'mods', 'Mod');
    add('lore', 'lore', 'Lore');
    add('creatures', 'creatures', 'Creature');
    index.push({ title: 'Getting Started', sub: 'Page', href: '/getting-started' });
    index.push({ title: "Wanderer's Notes", sub: 'Page', href: '/tips' });
    index.push({ title: 'Patch Notes', sub: 'Page', href: '/patches' });
    index.push({ title: 'About Kenshi Wiki', sub: 'Site Info', href: '/about' });
    index.push({ title: 'Privacy Policy', sub: 'Site Info', href: '/privacy-policy' });
    index.push({ title: 'Contact', sub: 'Site Info', href: '/contact' });
    return index;
  }

  const searchIndex = buildSearchIndex();

  function runSearch(q) {
    if (!q) { searchResults.classList.remove('open'); return; }
    const ql = q.toLowerCase();
    const matches = searchIndex
      .filter((it) => {
        const haystack = [
          it.title,
          it.sub,
          it.desc,
          it.summary,
          Array.isArray(it.keywords) ? it.keywords.join(' ') : ''
        ].filter(Boolean).join(' ').toLowerCase();
        return haystack.includes(ql);
      })
      .sort((a, b) => {
        const ax = a.title.toLowerCase().indexOf(ql);
        const bx = b.title.toLowerCase().indexOf(ql);
        if (ax === -1 && bx === -1) return a.title.localeCompare(b.title);
        if (ax === -1) return 1;
        if (bx === -1) return -1;
        return ax - bx;
      })
      .slice(0, 12);
    searchResults.innerHTML = matches.length
      ? matches.map((m) => `<a href="${esc(m.href)}">${esc(m.title)}<span class="cat">${esc(m.sub)}</span></a>`).join('')
      : '<div class="empty">No survival records match.</div>';
    searchResults.classList.add('open');
  }

  searchInput.addEventListener('input', () => runSearch(searchInput.value.trim()));
  searchInput.addEventListener('focus', () => { if (searchInput.value.trim()) runSearch(searchInput.value.trim()); });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search')) searchResults.classList.remove('open');
  });
  searchResults.addEventListener('click', () => {
    setTimeout(() => {
      searchInput.value = '';
      searchResults.classList.remove('open');
    }, 50);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchResults.classList.remove('open');
      searchInput.blur();
    }
  });

  if (menuToggle) menuToggle.onclick = () => leftNav.classList.toggle('open');

  function loadState(key, defaults) {
    try {
      const raw = localStorage.getItem('kw:' + key);
      if (!raw) return Object.assign({}, defaults);
      return Object.assign({}, defaults, JSON.parse(raw));
    } catch (e) { return Object.assign({}, defaults); }
  }
  function saveState(key, state) {
    try { localStorage.setItem('kw:' + key, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  // Static pages are fully prerendered. Let normal links load their matching
  // files so local servers, crawlers and deployed hosting all behave the same.

  function hydrateStaticPage() {
    const route = parseRoute();
    if (route === '/skills') bindSkillsTable();
    if (route === '/weapons') bindWeaponsTable();
    setTimeout(loadAds, 100);
  }

  if (window.__KW_PRERENDER__) {
    window.addEventListener('popstate', () => {
      leftNav.classList.remove('open');
      navigate();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    navigate();
  } else {
    hydrateStaticPage();
  }
})();
