const HISTORY_STORAGE_KEY = 'outfinity.quiz.savedResults.v1';
const MAX_SAVED_RESULTS = 120;

function readSavedResults() {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function normalizeQuizId(value) {
  if (!value) return '';
  let clean = String(value).trim().replace(/\\/g, '/');
  clean = clean.split('#')[0].split('?')[0];
  const quizPath = clean.match(/(?:^|\/)quizzes\/([^/]+)/);
  if (quizPath) return quizPath[1];
  clean = clean.replace(/^quizzes\//, '');
  clean = clean.replace(/\/index\.html$/, '');
  clean = clean.replace(/\/$/, '');
  return clean;
}

function resultMatchesQuiz(result, quizId) {
  const target = normalizeQuizId(quizId);
  if (!target || !result) return false;
  const candidates = [
    result.quizId,
    result.quizSlug,
    result.resultUrl,
    result.shareUrl
  ];
  return candidates.some(candidate => normalizeQuizId(candidate) === target);
}

function getSavedResultCountForQuiz(quizId) {
  const target = normalizeQuizId(quizId);
  if (!target) return 0;
  return readSavedResults().filter(result => resultMatchesQuiz(result, target)).length;
}

function getHistoryUrlForQuiz(quizId, base = '') {
  const target = normalizeQuizId(quizId);
  const query = target ? `?quiz=${encodeURIComponent(target)}` : '';
  return `${base}history/index.html${query}`;
}

function writeSavedResults(results) {
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(results.slice(0, MAX_SAVED_RESULTS)));
}

function saveResultRecord(record, label) {
  const now = new Date().toISOString();
  const cleanLabel = String(label || '').trim();
  const saved = {
    id: `saved-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    savedAt: now,
    label: cleanLabel || defaultResultLabel(record, now),
    quizId: record.quizId || '',
    quizTitle: record.quizTitle || document.title.replace(/\s+—\s+Outfinity Quiz$/, ''),
    quizVersion: record.quizVersion || null,
    resultTitle: record.resultTitle || 'Saved result',
    resultSummary: record.resultSummary || '',
    resultUrl: record.resultUrl || window.location.href.split('#')[0],
    shareUrl: record.shareUrl || '',
    scores: normalizeScores(record.scores, record.dimensions),
    source: record.source || 'quiz-result'
  };
  const current = readSavedResults();
  writeSavedResults([saved, ...current]);
  return saved;
}

function deleteSavedResult(id) {
  writeSavedResults(readSavedResults().filter(item => item.id !== id));
}

function clearSavedResults() {
  writeSavedResults([]);
}

function defaultResultLabel(record, isoDate) {
  const date = new Date(isoDate);
  const stamp = Number.isNaN(date.getTime())
    ? 'Saved result'
    : date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
  return `${record.quizTitle || 'Quiz'} - ${stamp}`;
}

function normalizeScores(scores, dimensions) {
  if (!scores) return [];
  if (Array.isArray(scores)) {
    return scores
      .map(item => {
        if (!item || typeof item !== 'object') return null;
        const value = Number(item.value ?? item.score);
        return {
          key: String(item.key || item.label || ''),
          label: String(item.label || item.key || 'Score'),
          value: Number.isFinite(value) ? value : String(item.value ?? item.score ?? '')
        };
      })
      .filter(Boolean);
  }
  const dims = Array.isArray(dimensions) ? dimensions : [];
  return Object.entries(scores).map(([key, value]) => {
    const dimension = dims.find(item => item.key === key);
    const numeric = Number(value);
    return {
      key,
      label: dimension?.label || key,
      value: Number.isFinite(numeric) ? numeric : String(value)
    };
  });
}

function buildSavedResultRecord(config) {
  const baseUrl = config.resultUrl || window.location.href.split('#')[0];
  return {
    quizId: config.quizId || config.instrument?.id || '',
    quizTitle: config.quizTitle || config.instrument?.title || document.title.replace(/\s+—\s+Outfinity Quiz$/, ''),
    quizVersion: config.quizVersion || config.instrument?.version || null,
    resultTitle: config.resultTitle || 'Saved result',
    resultSummary: config.resultSummary || '',
    resultUrl: baseUrl,
    shareUrl: config.shareUrl || '',
    scores: config.scores || [],
    dimensions: config.dimensions || config.instrument?.scoring?.dimensions || [],
    source: config.source || 'quiz-result'
  };
}

function createSaveResultControl(options) {
  const field = document.createElement('label');
  field.className = 'quiz-save-result-field';

  const labelText = document.createElement('span');
  labelText.textContent = 'Optional label for this saved result';
  const input = document.createElement('input');
  input.type = 'text';
  input.maxLength = 80;
  input.placeholder = 'Example: Ana, investor pitch retake, June review';
  input.autocomplete = 'off';

  field.append(labelText, input);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = options.buttonClass || 'quiz-btn quiz-btn--secondary';
  button.textContent = 'Save Result';
  button.dataset.historySaveButton = 'true';
  button.addEventListener('click', () => {
    try {
      const record = options.buildRecord();
      const saved = saveResultRecord(record, input.value);
      button.textContent = 'Saved';
      if (typeof options.showToast === 'function') {
        options.showToast(`Saved locally: ${saved.label}`);
      }
      setTimeout(() => {
        button.textContent = 'Save Result';
      }, 1800);
    } catch {
      if (typeof options.showToast === 'function') {
        options.showToast('Could not save. Local storage may be disabled.');
      }
    }
  });

  return { field, input, button };
}

function mountHistoryNavigation(base = '') {
  const nav = document.querySelector('.site-header__nav');
  if (!nav) return;
  const existing = nav.querySelector('[data-history-nav]') || Array.from(nav.querySelectorAll('a')).find(link => {
    const href = link.getAttribute('href') || '';
    return /(?:^|\/)history\/(?:index\.html)?$/.test(href.split(/[?#]/)[0]);
  });
  if (existing) {
    existing.dataset.historyNav = 'true';
    if (/\/history\/(?:index\.html)?$/.test(window.location.pathname)) {
      existing.classList.add('nav-current');
    }
    return;
  }
  const link = document.createElement('a');
  link.href = `${base}history/index.html`;
  link.textContent = 'History';
  link.dataset.historyNav = 'true';
  if (/\/history\/(?:index\.html)?$/.test(window.location.pathname)) {
    link.className = 'nav-current';
  }
  const themeToggle = nav.querySelector('.theme-toggle');
  if (themeToggle) nav.insertBefore(link, themeToggle);
  else nav.appendChild(link);
}

function decorateQuizCardsWithHistory(root = document, options = {}) {
  const base = options.base || '';
  const cards = root.querySelectorAll('[data-quiz-id], [data-quiz-slug]');
  for (const card of cards) {
    const quizId = normalizeQuizId(card.dataset.quizId || card.dataset.quizSlug || card.getAttribute('href'));
    const count = getSavedResultCountForQuiz(quizId);
    let badge = card.querySelector('[data-history-card-link]');

    if (!count) {
      card.classList.remove('quiz-card--has-history', 'sitemap__item--has-history');
      if (badge) badge.remove();
      continue;
    }

    if (!badge) {
      badge = createCardHistoryBadge();
      const host = card.querySelector('.quiz-card__header')
        || card.querySelector('.sitemap__item-content')
        || card;
      host.appendChild(badge);
    }

    const label = count === 1 ? 'Saved' : `${count} saved`;
    const longLabel = count === 1 ? '1 saved result' : `${count} saved results`;
    badge.dataset.historyQuizId = quizId;
    badge.dataset.historyBase = base;
    badge.querySelector('.quiz-card__history-count').textContent = label;
    badge.setAttribute('aria-label', `Open ${longLabel} for this quiz in History`);
    badge.title = `Open ${longLabel} in History`;
    card.classList.add(card.classList.contains('sitemap__item') ? 'sitemap__item--has-history' : 'quiz-card--has-history');
  }
}

function createCardHistoryBadge() {
  const badge = document.createElement('span');
  badge.className = 'quiz-card__history-link';
  badge.dataset.historyCardLink = 'true';
  badge.role = 'link';
  badge.tabIndex = 0;

  const icon = document.createElement('span');
  icon.className = 'quiz-card__history-icon';
  icon.setAttribute('aria-hidden', 'true');

  const count = document.createElement('span');
  count.className = 'quiz-card__history-count';

  badge.append(icon, count);
  badge.addEventListener('click', openCardHistory);
  badge.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openCardHistory(event);
  });
  return badge;
}

function openCardHistory(event) {
  event.preventDefault();
  event.stopPropagation();
  const badge = event.currentTarget;
  window.location.href = getHistoryUrlForQuiz(badge.dataset.historyQuizId, badge.dataset.historyBase || '');
}

function enhanceResultSaveControls() {
  const enhance = () => {
    for (const section of document.querySelectorAll('.quiz-share-section:not([data-history-enhanced])')) {
      section.dataset.historyEnhanced = 'auto';
      const heading = section.querySelector('h3');
      if (heading) heading.textContent = 'Save or share result';
      addSaveExplanation(section);

      const buttons = section.querySelector('.quiz-share-buttons');
      if (!buttons) continue;

      for (const button of Array.from(buttons.querySelectorAll('button'))) {
        const label = button.textContent.trim().toLowerCase();
        const keep = label.includes('shareable link') || label.includes('download card') || label.includes('save result');
        if (!keep) button.remove();
      }

      if (buttons.querySelector('[data-history-save-button]')) continue;
      const control = createSaveResultControl({
        buildRecord: () => buildRecordFromDom(section),
        showToast: showHistoryToast
      });
      section.insertBefore(control.field, buttons);
      buttons.appendChild(control.button);
    }
  };

  enhance();
  const observer = new MutationObserver(enhance);
  observer.observe(document.body, { childList: true, subtree: true });
}

function addSaveExplanation(section) {
  if (section.querySelector('.quiz-save-explanation')) return;
  const note = document.createElement('p');
  note.className = 'quiz-share-note quiz-save-explanation';
  note.textContent = 'Shareable links remain optional. Save Result stores this result only in this browser localStorage, only after you click the button. Individual answers are not added to the saved history.';
  const buttons = section.querySelector('.quiz-share-buttons');
  if (buttons) section.insertBefore(note, buttons);
  else section.appendChild(note);
}

function buildRecordFromDom(section) {
  const result = section.closest('.quiz-result') || document.querySelector('.quiz-result');
  const resultTitle = result?.querySelector('.quiz-result__title')?.textContent.trim()
    || document.title.replace(/\s+—\s+Outfinity Quiz$/, '');
  const resultSummary = result?.querySelector('.quiz-result__summary, .quiz-result__subtitle')?.textContent.trim()
    || '';
  return buildSavedResultRecord({
    quizId: quizIdFromPath(),
    quizTitle: document.title.replace(/\s+—\s+Outfinity Quiz$/, ''),
    resultTitle,
    resultSummary,
    resultUrl: window.location.href.split('#')[0],
    scores: collectScoresFromDom(result)
  });
}

function collectScoresFromDom(root) {
  if (!root) return [];
  const scores = [];
  for (const item of root.querySelectorAll('.quiz-diagnostic-metric')) {
    const label = item.querySelector('.quiz-diagnostic-metric__label')?.textContent.trim();
    const value = item.querySelector('.quiz-diagnostic-metric__value')?.textContent.trim();
    if (label && value) scores.push({ label, value });
  }
  for (const item of root.querySelectorAll('.quiz-result__score-item')) {
    const label = item.querySelector('.quiz-result__score-label')?.textContent.trim();
    const value = item.querySelector('.quiz-result__score-value')?.textContent.trim();
    if (label && value) scores.push({ label, value });
  }
  return scores.slice(0, 16);
}

function quizIdFromPath() {
  const match = window.location.pathname.match(/\/quizzes\/([^/]+)/);
  return match ? match[1] : '';
}

function formatSavedDate(isoDate) {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return 'Unknown date';
  return date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}

function showHistoryToast(message) {
  const toast = document.createElement('div');
  toast.className = 'quiz-toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

export {
  HISTORY_STORAGE_KEY,
  buildSavedResultRecord,
  clearSavedResults,
  createSaveResultControl,
  decorateQuizCardsWithHistory,
  deleteSavedResult,
  enhanceResultSaveControls,
  formatSavedDate,
  getHistoryUrlForQuiz,
  getSavedResultCountForQuiz,
  mountHistoryNavigation,
  normalizeQuizId,
  readSavedResults,
  resultMatchesQuiz,
  saveResultRecord
};
