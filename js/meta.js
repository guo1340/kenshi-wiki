/* ============================================================
   Kenshi Wiki — Meta
   Shared SEO + JSON-LD resolution. Used by app.js (dynamic
   meta on client navigation) and build.js (static prerender).
   Depends on window.WikiData. No DOM access.
   ============================================================ */

(function () {
  const root = typeof window !== 'undefined' ? window : globalThis;
  const D = root.WikiData;
  if (!D) return;

  const S = D.site;

  /* url segment -> { arr: data array name, label } */
  const SECTIONS = {
    guides: { arr: 'guides', label: 'Survival Guides' },
    factions: { arr: 'factions', label: 'Factions' },
    regions: { arr: 'regions', label: 'Regions & Map' },
    cities: { arr: 'cities', label: 'Cities & Settlements' },
    skills: { arr: 'skills', label: 'Skills & Stats' },
    weapons: { arr: 'weapons', label: 'Weapons' },
    armor: { arr: 'armor', label: 'Armor' },
    races: { arr: 'races', label: 'Races' },
    'base-building': { arr: 'baseBuilding', label: 'Base Building' },
    mods: { arr: 'mods', label: 'Mods' },
    lore: { arr: 'lore', label: 'Lore' },
    creatures: { arr: 'creatures', label: 'Creatures' }
  };

  /* sections that carry a hero image */
  const HERO_SECTIONS = [
    'guides', 'regions', 'cities', 'factions', 'creatures', 'lore',
    'skills', 'weapons', 'armor', 'races', 'base-building', 'mods'
  ];

  const LIST_DESC = {
    guides: 'Practical Kenshi survival guides — surviving your first week, escaping slavery, base building, combat, money-making and advanced playthroughs.',
    factions: 'Every major Kenshi faction explained — the Holy Nation, United Cities, Shek Kingdom, Tech Hunters and more, with reputation, territory and survival implications.',
    regions: 'Kenshi region and map guides — climate, threats, loot, recommended levels and travel warnings for every part of the wasteland.',
    cities: 'Kenshi city and settlement guides — who controls each town, the best shops, guard strength, recruitment and nearby dangers.',
    skills: 'Kenshi skill and stat guides — what each skill does, hidden effects, the best training methods and common mistakes.',
    weapons: 'Kenshi weapon guides — damage types, armour penetration, speed, weight and the best and worst situations for every weapon class.',
    armor: 'Kenshi armor guides — heavy, medium and light armor, helmets and robotic limbs, with protection, penalties and the right build for each.',
    races: 'Kenshi race guides — Greenlanders, Scorchlanders, Shek, Hivers and Skeletons, with attribute modifiers, strengths, weaknesses and best playstyles.',
    'base-building': 'Kenshi base building guides — best base locations, farming, power, automated production, raid defence, walls, turrets and water.',
    mods: 'Kenshi mod guides — essential, QoL, graphics, combat, overhaul, performance and difficulty mods, with compatibility and load-order notes.',
    lore: 'Kenshi lore — the Ancient Empire, Skeleton history, Cat-Lon, the Second Empire, the Collapse and the deep history of the wasteland.',
    creatures: 'Kenshi creature guides — Beak Things, Leviathans, Bonedogs, Blood Spiders and more, with danger ratings, behaviour, loot and counters.',
    tips: "Hard-won Kenshi wanderer's notes — the practical advice that keeps wasteland squads alive.",
    patches: 'Kenshi patch history and update notes, including Kenshi 2 development news from Lo-Fi Games.'
  };

  const STATIC_SEO = {
    'getting-started': {
      title: 'Getting Started | ' + S.titleSuffix,
      description: 'New to Kenshi? Start here — the survival mindset, your first hour, understanding stats and the guides to read before the wasteland kills you.'
    },
    about: {
      title: 'About | ' + S.titleSuffix,
      description: 'About the Kenshi Survival Wiki — an unofficial, practical fan guide to surviving the wasteland of Kenshi.'
    },
    'privacy-policy': {
      title: 'Privacy Policy | ' + S.titleSuffix,
      description: 'Privacy policy for the Kenshi Survival Wiki, covering analytics, advertising, cookies and local storage.'
    },
    contact: {
      title: 'Contact | ' + S.titleSuffix,
      description: 'Contact the Kenshi Survival Wiki to report corrections, request removals or suggest new wiki pages.'
    }
  };

  function clean(route) {
    route = (route || '/').replace(/\/+$/, '');
    return route === '' ? '/' : route;
  }

  function entityName(e) {
    return e ? (e.name || e.title || '') : '';
  }

  function plain(s) {
    return String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  }

  function clip(s, max) {
    s = plain(s);
    max = max || 158;
    if (s.length <= max) return s;
    const cut = s.slice(0, max);
    const sp = cut.lastIndexOf(' ');
    return (sp > 60 ? cut.slice(0, sp) : cut).replace(/[,;:.\s]+$/, '') + '…';
  }

  /* resolve a route string to {kind, section, entity, slug} */
  function routeInfo(route) {
    route = clean(route);
    if (route === '/' || route === '/index.html') return { kind: 'home', route: '/' };
    const seg = route.split('/').filter(Boolean);
    if (seg.length === 1) {
      const k = seg[0];
      if (SECTIONS[k]) return { kind: 'list', section: k, route: route };
      if (k === 'tips' || k === 'patches') return { kind: 'list', section: k, route: route };
      if (STATIC_SEO[k]) {
        return { kind: (k === 'getting-started' ? 'static' : 'info'), slug: k, route: route };
      }
      return { kind: 'unknown', route: route };
    }
    if (seg.length === 2 && SECTIONS[seg[0]]) {
      const arr = D[SECTIONS[seg[0]].arr] || [];
      const entity = arr.find((x) => x.id === seg[1]);
      if (entity) return { kind: 'detail', section: seg[0], entity: entity, route: route };
    }
    return { kind: 'unknown', route: route };
  }

  /* hero image {src, alt} for a detail entity, or null */
  function heroFor(section, entity) {
    if (!entity || HERO_SECTIONS.indexOf(section) === -1) return null;
    const name = entityName(entity);
    return {
      src: '/assets/images/' + section + '/' + entity.id + '.jpg',
      alt: entity.heroAlt || (name + ' — Kenshi ' + (SECTIONS[section].label) + ' reference image')
    };
  }

  function abs(path) {
    if (!path) return S.baseUrl + S.defaultOgImage;
    if (/^https?:/.test(path)) return path;
    return S.baseUrl + path;
  }

  function deriveDescription(entity) {
    const src = entity.intro || entity.summary || entity.tagline || entity.governs ||
      entity.bestFor || '';
    return clip(src);
  }

  function deriveKeywords(section, entity) {
    const base = ['kenshi', 'kenshi wiki'];
    const n = entityName(entity).toLowerCase();
    if (n) base.push('kenshi ' + n.replace(/\s*\([^)]*\)\s*/g, '').trim());
    base.push('kenshi ' + (SECTIONS[section] ? SECTIONS[section].label.toLowerCase() : section));
    return base;
  }

  /* full SEO object for a route */
  function seoFor(route) {
    const info = routeInfo(route);
    const canonical = S.baseUrl + (info.route === '/' ? '/' : info.route);
    let title, description, ogImage, keywords, ogType = 'website';

    if (info.kind === 'home') {
      title = S.shortName + ' — Wasteland Survival Manual';
      description = S.defaultDescription;
      ogImage = abs('/assets/images/hero/homepage-hero.jpg');
      keywords = ['kenshi wiki', 'kenshi guide', 'kenshi factions', 'kenshi map', 'kenshi survival'];
    } else if (info.kind === 'list') {
      const label = (SECTIONS[info.section] && SECTIONS[info.section].label) ||
        (info.section === 'tips' ? "Wanderer's Notes" : 'Patch Notes');
      title = label + ' | ' + S.titleSuffix;
      description = LIST_DESC[info.section] || S.defaultDescription;
      ogImage = abs(S.defaultOgImage);
      keywords = ['kenshi', 'kenshi ' + label.toLowerCase()];
    } else if (info.kind === 'static' || info.kind === 'info') {
      const st = STATIC_SEO[info.slug];
      title = st.title;
      description = st.description;
      ogImage = abs(S.defaultOgImage);
      keywords = ['kenshi', 'kenshi wiki'];
    } else if (info.kind === 'detail') {
      const e = info.entity;
      const seo = e.seo || {};
      title = seo.title || (entityName(e) + ' | ' + S.titleSuffix);
      description = seo.description || deriveDescription(e);
      keywords = seo.keywords || deriveKeywords(info.section, e);
      const hero = heroFor(info.section, e);
      ogImage = abs(seo.ogImage || (hero ? hero.src : S.defaultOgImage));
      ogType = 'article';
    } else {
      title = 'Trail Gone Cold | ' + S.titleSuffix;
      description = S.defaultDescription;
      ogImage = abs(S.defaultOgImage);
      keywords = ['kenshi', 'kenshi wiki'];
    }

    return {
      title: title,
      description: description,
      canonical: canonical,
      ogTitle: title,
      ogDescription: description,
      ogImage: ogImage,
      ogType: ogType,
      keywords: keywords
    };
  }

  /* JSON-LD structured data for a route */
  function jsonLdFor(route) {
    const info = routeInfo(route);
    const seo = seoFor(route);
    const publisher = {
      '@type': 'Organization',
      name: S.name,
      url: S.baseUrl
    };

    if (info.kind === 'home') {
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: S.name,
        url: S.baseUrl,
        description: S.defaultDescription,
        publisher: publisher,
        potentialAction: {
          '@type': 'SearchAction',
          target: S.baseUrl + '/?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      };
    }
    if (info.kind === 'list') {
      return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: seo.title,
        description: seo.description,
        url: seo.canonical,
        isPartOf: { '@type': 'WebSite', name: S.name, url: S.baseUrl },
        publisher: publisher
      };
    }
    if (info.kind === 'detail') {
      const e = info.entity;
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: entityName(e),
        description: seo.description,
        image: seo.ogImage,
        url: seo.canonical,
        datePublished: '2026-05-23',
        dateModified: (e.lastUpdated || S.lastUpdated),
        author: { '@type': 'Organization', name: S.name },
        publisher: publisher,
        mainEntityOfPage: { '@type': 'WebPage', '@id': seo.canonical }
      };
    }
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      description: seo.description,
      url: seo.canonical,
      publisher: publisher
    };
  }

  root.WikiMeta = {
    routeInfo: routeInfo,
    seoFor: seoFor,
    jsonLdFor: jsonLdFor,
    heroFor: heroFor,
    sections: SECTIONS,
    heroSections: HERO_SECTIONS
  };
})();
