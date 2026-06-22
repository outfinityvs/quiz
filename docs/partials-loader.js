(function () {
  const includes = document.querySelectorAll('[data-include]');

  async function loadPartial(element) {
    const path = element.getAttribute('data-include');
    if (!path) return;

    try {
      const response = await fetch(path);
      if (!response.ok) return;
      const html = await response.text();
      element.outerHTML = html;
    } catch {
      element.remove();
    }
  }

  Promise.all(Array.from(includes).map(loadPartial));
})();
