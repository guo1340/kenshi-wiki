/* ============================================================
   Kenshi Wiki - Static Prerender Build
   Generates a real HTML file for every route, with route-
   specific head meta and JSON-LD, plus main content and both
   sidebars pre-rendered for crawlers. Also writes sitemap.xml.
   Usage:  node build.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

function mkEl() {
  const el = {
    _html: '', _text: '', dataset: {}, style: {}, attributes: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    set innerHTML(v) { this._html = String(v); },
    get innerHTML() { return this._html; },
    set textContent(v) { this._text = String(v); },
    get textContent() { return this._text; },
    setAttribute(k, v) { this.attributes[k] = v; },
    getAttribute(k) { return this.attributes[k] || null; },
    addEventListener() {}, removeEventListener() {},
    querySelector() { return mkEl(); }, querySelectorAll() { return []; },
    appendChild() {}, removeChild() {}, remove() {},
    focus() {}, blur() {}, closest() { return null; },
    set onclick(f) {}, set oninput(f) {}, set onfocus(f) {}
  };
  return el;
}
const els = {};
['main', 'leftNav', 'rightNav', 'searchInput', 'searchResults', 'menuToggle'].forEach(function (id) {
  els[id] = mkEl();
});
const headEl = mkEl();
global.document = {
  getElementById: function (id) { return els[id] || null; },
  querySelector: function () { return mkEl(); },
  querySelectorAll: function () { return []; },
  addEventListener: function () {},
  createElement: function () { return mkEl(); },
  get activeElement() { return mkEl(); },
  head: headEl
};
global.localStorage = { getItem: function () { return null; }, setItem: function () {}, removeItem: function () {} };
global.history = { pushState: function () {} };
let CURRENT = '/';
global.location = { get pathname() { return CURRENT; }, origin: 'https://kenshi.gamewikihub.com' };
global.window = { addEventListener: function () {}, scrollTo: function () {}, adsbygoogle: [] };
global.URL = URL;
global.setTimeout = function () {};

require('./js/data.js');
global.window.WikiData = window.WikiData;
require('./js/meta.js');
global.window.WikiMeta = window.WikiMeta;
const D = window.WikiData;
const M = window.WikiMeta;
const APP = require.resolve('./js/app.js');

function escAttr(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escText(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderRoute(route) {
  CURRENT = route;
  delete require.cache[APP];
  els.main._html = '';
  els.leftNav._html = '';
  els.rightNav._html = '';
  require('./js/app.js');
  return { main: els.main._html, leftNav: els.leftNav._html, rightNav: els.rightNav._html };
}

function headBlock(route) {
  const seo = M.seoFor(route);
  const tags = [
    '<title>' + escText(seo.title) + '</title>',
    '<meta name="description" content="' + escAttr(seo.description) + '" />',
    '<meta name="keywords" content="' + escAttr((seo.keywords || []).join(', ')) + '" />',
    '<link rel="canonical" href="' + escAttr(seo.canonical) + '" />',
    '<meta property="og:site_name" content="Kenshi Survival Wiki" />',
    '<meta property="og:title" content="' + escAttr(seo.ogTitle) + '" />',
    '<meta property="og:description" content="' + escAttr(seo.ogDescription) + '" />',
    '<meta property="og:type" content="' + escAttr(seo.ogType) + '" />',
    '<meta property="og:url" content="' + escAttr(seo.canonical) + '" />',
    '<meta property="og:image" content="' + escAttr(seo.ogImage) + '" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    '<meta name="twitter:title" content="' + escAttr(seo.ogTitle) + '" />',
    '<meta name="twitter:description" content="' + escAttr(seo.ogDescription) + '" />',
    '<meta name="twitter:image" content="' + escAttr(seo.ogImage) + '" />'
  ];
  return '    ' + tags.join('\n    ');
}

function jsonLdBlock(route) {
  return '<script type="application/ld+json" id="kw-jsonld">' + JSON.stringify(M.jsonLdFor(route)) + '</script>';
}

function buildPage(template, route) {
  let html = template;
  const r = renderRoute(route);
  html = html.replace(/<!-- kw:head -->[\s\S]*?<!-- \/kw:head -->/,
    '<!-- kw:head -->\n' + headBlock(route) + '\n    <!-- /kw:head -->');
  html = html.replace(/<script type="application\/ld\+json" id="kw-jsonld">[\s\S]*?<\/script>/,
    jsonLdBlock(route));
  html = html.replace(/<aside class="left" id="leftNav">[\s\S]*?<main id="main">/,
    '<aside class="left" id="leftNav">' + r.leftNav + '</aside>\n      <main id="main">');
  html = html.replace(/<aside class="right" id="rightNav">[\s\S]*?<\/div>/,
    '<aside class="right" id="rightNav">' + r.rightNav + '</aside>\n    </div>');
  html = html.replace(/<main id="main">[\s\S]*?<\/main>/,
    '<main id="main">' + r.main + '</main>');
  return html;
}

const SECTION_MAP = {
  guides: 'guides', factions: 'factions', regions: 'regions', cities: 'cities',
  skills: 'skills', weapons: 'weapons', armor: 'armor', races: 'races',
  'base-building': 'baseBuilding', mods: 'mods', lore: 'lore', creatures: 'creatures'
};

function allRoutes() {
  const routes = ['/', '/getting-started', '/about', '/privacy-policy', '/contact', '/tips', '/patches'];
  Object.keys(SECTION_MAP).forEach(function (seg) {
    routes.push('/' + seg);
    (D[SECTION_MAP[seg]] || []).forEach(function (e) { routes.push('/' + seg + '/' + e.id); });
  });
  return routes;
}

function outPath(route) {
  if (route === '/') return path.join(ROOT, 'index.html');
  return path.join(ROOT, route.replace(/^\//, ''), 'index.html');
}

function priorityFor(route) {
  if (route === '/') return '1.0';
  const seg = route.split('/').filter(Boolean);
  if (seg.length === 1) {
    if (SECTION_MAP[seg[0]] || seg[0] === 'getting-started') return '0.9';
    return '0.5';
  }
  return '0.7';
}

function writeSitemap(routes) {
  const base = D.site.baseUrl;
  const today = D.site.lastUpdated;
  const urls = routes.map(function (r) {
    const loc = base + (r === '/' ? '/' : r);
    return '  <url>\n    <loc>' + escText(loc) + '</loc>\n    <lastmod>' + today +
      '</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>' +
      priorityFor(r) + '</priority>\n  </url>';
  }).join('\n');
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>\n';
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
}

function run() {
  const template = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  if (!/<!-- kw:head -->/.test(template)) {
    console.error('ERROR: index.html is missing the kw:head marker. Aborting.');
    process.exit(1);
  }
  const routes = allRoutes();
  let written = 0;
  routes.forEach(function (route) {
    const html = buildPage(template, route);
    const file = outPath(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html, 'utf8');
    written++;
  });
  writeSitemap(routes);
  console.log('Static prerender complete: ' + written + ' HTML files generated.');
  console.log('sitemap.xml written with ' + routes.length + ' URLs.');
}

run();
