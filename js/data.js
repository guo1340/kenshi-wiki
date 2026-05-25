/* Lightweight route-aware data loader. Keeps static pages from loading the full wiki data set. */
(function () {
  const path = (location.pathname || '/').replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
  const chunks = ['core', 'search-index'];
  if (path === '/skills') chunks.push('skills');
  if (path === '/weapons') chunks.push('weapons');
  const seen = {};
  chunks.forEach(function (name) {
    if (seen[name]) return;
    seen[name] = true;
    document.write('<script src="/js/data/' + name + '.js"><\/script>');
  });
})();
