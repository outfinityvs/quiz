(function() {
  var path = window.location.pathname;
  var isQuizPage = /\/(?:quizzes)\//.test(path);
  var isSubPage = /\/(privacy|methods|licenses|dev)\//.test(path);
  var base = isQuizPage ? '../../' : (isSubPage ? '../' : '');

  var footer = document.querySelector('footer.site-footer');
  if (!footer) {
    footer = document.createElement('footer');
    footer.className = 'site-footer';
    document.body.appendChild(footer);
  }

  footer.className = 'site-footer';
  footer.innerHTML =
    '<nav>' +
      '<a href="' + base + 'index.html">Home</a>' +
      '<a href="' + base + 'sitemap.html">All Quizzes</a>' +
      '<a href="' + base + 'privacy/index.html">Privacy</a>' +
    '</nav>' +
    '<p class="site-footer__disclaimer">' +
      'AI was used in coding and processing these quizzes. The inspiration and sources are real, but errors may have slipped through. ' +
      'If you find something wrong, please <a href="mailto:quiz@outfinity.ch">send us feedback</a>.' +
    '</p>' +
    '<p>An initiative by <a href="https://outfinity.ch" target="_blank" rel="noopener noreferrer">Outfinity Venture Validation Studio</a>.</p>';

  window.__outfinityFooter = footer;
  window.__outfinityFooterBase = base;

  var analytics = document.createElement('script');
  analytics.src = base + 'partials/footer-analytics.js';
  analytics.async = true;
  analytics.onerror = function() {};
  analytics.onload = function() {};
  document.body.appendChild(analytics);
})();
