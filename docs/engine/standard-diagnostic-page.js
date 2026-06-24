import { createEngine } from './quiz-engine.js';
import { createRadarChart, createTextAlternative } from './radar-chart.js';
import { generateShareCard, downloadCanvas } from './share-card.js';
import { buildShareUrl, parseFragment, validatePayload } from './url-codec.js';
import { buildSavedResultRecord, createSaveResultControl } from './result-history.js';

function mountStandardDiagnosticPage(options = {}) {
  const container = document.getElementById(options.containerId || 'quiz-container');
  if (!container) return;

  let instrument = null;
  let interpretation = null;
  let sharedResult = null;

  init();

  async function init() {
    try {
      const fragment = parseFragment();
      const [instrumentResponse, interpretationResponse] = await Promise.all([
        fetch(options.instrumentUrl || 'instrument.json'),
        fetch(options.interpretationUrl || 'interpretation.json')
      ]);
      instrument = await instrumentResponse.json();
      interpretation = await interpretationResponse.json();

      if (fragment) {
        const validation = validatePayload(fragment, {
          versions: [instrument.version],
          dimensions: instrument.scoring.dimensions.length,
          maxValue: 100
        });
        if (validation.valid) sharedResult = fragment;
      }

      if (sharedResult) renderSharedResult();
      else startQuiz();
    } catch (error) {
      container.innerHTML = '<div class="quiz-stage"><p>Could not load quiz data. Run through a local server.</p><p><a href="../../index.html">Return to catalog</a></p></div>';
    }
  }

  function startQuiz() {
    const engine = createEngine(container, {
      id: instrument.id,
      version: instrument.version,
      title: instrument.title,
      introduction: instrument.introduction,
      questions: instrument.questions,
      scoring: instrument.scoring,
      contextQuestions: instrument.contextQuestions || [],
      contextTitle: instrument.contextTitle,
      contextDescription: instrument.contextDescription,
      questionStageTitle: instrument.questionStageTitle,
      questionStageDescription: instrument.questionStageDescription,
      banner: instrument.banner,
      questionOrder: 'sequential',
      deliberationText: instrument.deliberationText || 'Reading the evidence...',
      interpretation: { archetypes: [] },
      onResult: (state, element) => renderResult(state, element)
    });
    engine.render(container);
  }

  function computeDiagnosticResult(state) {
    const dimensionStats = {};
    for (const dimension of instrument.scoring.dimensions) {
      dimensionStats[dimension.key] = {
        key: dimension.key,
        label: dimension.label,
        points: 0,
        maxPoints: 0,
        answered: 0,
        insufficient: false,
        score: null
      };
    }

    for (const [questionIndex, answerKey] of Object.entries(state.answers || {})) {
      const question = instrument.questions[Number(questionIndex)];
      if (!question) continue;
      const dimensionKey = question.dimension;
      const stat = dimensionStats[dimensionKey];
      if (!stat) continue;
      const option = (question.options || []).find(item => (item.key || item.value) === answerKey);
      if (!option || option.excluded) continue;

      const maxPoints = question.maxPoints ?? instrument.scoring.maxPointsPerQuestion ?? 3;
      const points = Number(option.points ?? option.dimensionScores?.[dimensionKey] ?? 0);
      stat.points += points;
      stat.maxPoints += maxPoints;
      stat.answered += 1;
    }

    const scores = {};
    const availableScores = [];
    for (const stat of Object.values(dimensionStats)) {
      const minimumAnswered = instrument.scoring.minimumAnsweredPerDimension ?? 1;
      if (stat.answered < minimumAnswered || stat.maxPoints <= 0) {
        stat.insufficient = true;
        scores[stat.key] = null;
        continue;
      }
      stat.score = Math.max(0, Math.min(100, Math.round((100 * stat.points) / stat.maxPoints)));
      scores[stat.key] = stat.score;
      availableScores.push(stat.score);
    }

    const complete = availableScores.length === instrument.scoring.dimensions.length;
    const mean = availableScores.length ? availableScores.reduce((sum, value) => sum + value, 0) / availableScores.length : null;
    const weakestScore = availableScores.length ? Math.min(...availableScores) : null;
    const balancedScore = complete ? Math.round(0.7 * mean + 0.3 * weakestScore) : null;
    const sorted = Object.values(dimensionStats)
      .filter(stat => typeof stat.score === 'number')
      .sort((a, b) => b.score - a.score);
    const strongest = sorted[0] || null;
    const weakest = sorted.length ? sorted[sorted.length - 1] : null;
    const level = balancedScore === null ? null : findBand(interpretation.levels, balancedScore);

    return {
      dimensionStats,
      scores,
      balancedScore,
      level,
      strongest,
      weakest,
      complete
    };
  }

  function findBand(levels, score) {
    return (levels || []).find(level => score >= level.min && score <= level.max) || null;
  }

  function renderResult(state, element) {
    const result = computeDiagnosticResult(state);
    element.innerHTML = '';

    const section = document.createElement('section');
    section.className = 'quiz-result quiz-result--diagnostic';

    const header = document.createElement('div');
    header.className = 'quiz-result__header';
    appendText(header, 'p', 'quiz-result__kicker', interpretation.resultKicker || 'Your Diagnostic Result');
    appendText(header, 'h1', 'quiz-result__title', instrument.title);
    const subtitle = result.complete
      ? `${result.level ? result.level.label : 'Diagnostic result'} - ${result.balancedScore}/100 balanced index`
      : 'Complete all dimensions to calculate the balanced index.';
    appendText(header, 'p', 'quiz-result__summary', subtitle);
    section.appendChild(header);

    renderChart(section, result.scores, 'Your result');
    renderScoreSummary(section, result);
    renderEvidenceBasis(section, state);
    renderInterpretation(section, result);
    renderAnswerReview(section, state);
    renderShare(section, result);
    renderMethodology(section);

    element.appendChild(section);
  }

  function renderChart(parent, scores, label) {
    const axes = instrument.scoring.dimensions.map(dimension => ({
      key: dimension.key,
      label: dimension.label
    }));
    const values = axes.map(axis => typeof scores[axis.key] === 'number' ? scores[axis.key] : 0);
    const chartWrap = document.createElement('div');
    chartWrap.className = 'quiz-result__chart';
    chartWrap.appendChild(createRadarChart({
      axes,
      datasets: [{ label, values }],
      size: 340,
      animate: true
    }));
    parent.appendChild(chartWrap);
    parent.appendChild(createTextAlternative(axes, [{ label, values }]));
  }

  function renderScoreSummary(parent, result) {
    const grid = document.createElement('div');
    grid.className = 'quiz-diagnostic-grid';

    addMetric(grid, 'Balanced index', result.balancedScore === null ? 'Insufficient' : `${result.balancedScore}/100`);
    addMetric(grid, 'Level', result.level ? result.level.label : 'Insufficient evidence');
    addMetric(grid, 'Strongest dimension', result.strongest ? result.strongest.label : 'Not available');
    addMetric(grid, 'Next upgrade', result.weakest ? result.weakest.label : 'Not available');

    parent.appendChild(grid);
  }

  function renderEvidenceBasis(parent, state) {
    const evidenceEntries = Object.entries(state.contextAnswers || {})
      .filter(([key]) => key.startsWith('evidence-'));
    if (!evidenceEntries.length) return;

    const labels = {
      opinion: 'Opinion',
      anecdotal: 'Anecdotal',
      documented: 'Documented',
      'system-verified': 'System-verified'
    };
    const dimensionByEvidenceKey = Object.fromEntries(
      instrument.scoring.dimensions.map(dimension => [`evidence-${dimension.key}`, dimension.label])
    );
    const section = document.createElement('div');
    section.className = 'quiz-result__section quiz-evidence-basis';
    appendText(section, 'h3', '', 'What backed up your answers');
    appendText(section, 'p', '', 'This is not another score. It shows whether your answers were based on opinion, anecdotes, documents, or system-verified evidence. A high maturity score with weak support should be treated as a hypothesis to verify.');

    const list = document.createElement('ul');
    for (const [key, value] of evidenceEntries) {
      const item = document.createElement('li');
      item.textContent = `${dimensionByEvidenceKey[key] || key}: ${labels[value] || value}`;
      list.appendChild(item);
    }
    section.appendChild(list);
    parent.appendChild(section);
  }

  function renderInterpretation(parent, result) {
    const strongestKey = result.strongest?.key;
    const weakestKey = result.weakest?.key;
    const archetype = strongestKey ? interpretation.archetypes?.[strongestKey] : null;
    const recommendation = weakestKey ? interpretation.recommendations?.[weakestKey] : null;

    if (archetype) {
      addSection(parent, 'Archetype', `${archetype} is your strongest current pattern. Use it as an operating edge, not as a permanent label.`);
    }
    if (result.level?.copy) {
      addSection(parent, 'Level reading', result.level.copy);
    }
    if (recommendation) {
      addSection(parent, '30-day action', recommendation);
    }

    const secondAction = interpretation.defaultSecondAction || 'Choose one measurable change, assign an owner, and review the evidence again in 30 days.';
    addSection(parent, 'Next operating move', secondAction);
    addSection(parent, 'Reflection question', interpretation.reflectionQuestion || 'What evidence would most quickly change this result?');
  }

  function renderAnswerReview(parent, state) {
    if (instrument.scoring.family !== 'knowledge') return;

    const wrap = document.createElement('div');
    wrap.className = 'quiz-result__section quiz-answer-review';
    appendText(wrap, 'h3', '', 'Answer review');
    for (const [index, question] of instrument.questions.entries()) {
      const selected = state.answers[index];
      const selectedOption = (question.options || []).find(option => option.key === selected);
      const row = document.createElement('p');
      row.textContent = `${index + 1}. ${selectedOption?.correct ? 'Correct' : 'Review'} - ${question.explanation || 'Review the concept and retry when ready.'}`;
      wrap.appendChild(row);
    }
    parent.appendChild(wrap);
  }

  function renderShare(parent, result) {
    const section = document.createElement('div');
    section.className = 'quiz-share-section';
    section.dataset.historyEnhanced = 'manual';
    appendText(section, 'h3', '', 'Save or share result');
    appendText(section, 'p', 'quiz-share-note', interpretation.shareNote || 'Shareable links reveal only the level and strongest area, never individual answers or sensitive weaknesses.');
    appendText(section, 'p', 'quiz-share-note quiz-save-explanation', 'Save Result stores this result only in this browser localStorage, only after you click the button. Use the optional label if several people use this computer.');

    const buttons = document.createElement('div');
    buttons.className = 'quiz-share-buttons';

    const copy = document.createElement('button');
    copy.className = 'quiz-btn quiz-btn--primary';
    copy.textContent = 'Create shareable link';
    copy.addEventListener('click', () => {
      const payload = buildSharePayload(result);
      navigator.clipboard.writeText(buildShareUrl(window.location.href.split('#')[0], payload))
        .then(() => showToast('Link copied to clipboard'));
    });

    const download = document.createElement('button');
    download.className = 'quiz-btn quiz-btn--secondary';
    download.textContent = 'Download card';
    download.addEventListener('click', async () => {
      const canvas = await generateCard(result);
      downloadCanvas(canvas, `${instrument.id}.png`);
    });

    const saveControl = createSaveResultControl({
      buildRecord: () => buildSavedResultRecord({
        instrument,
        resultTitle: result.level ? result.level.label : 'Diagnostic result',
        resultSummary: result.strongest ? `Strongest area: ${result.strongest.label}` : '',
        resultUrl: window.location.href.split('#')[0],
        shareUrl: buildShareUrl(window.location.href.split('#')[0], buildSharePayload(result)),
        dimensions: instrument.scoring.dimensions,
        scores: result.scores,
        source: 'standard-diagnostic'
      }),
      showToast
    });

    section.appendChild(saveControl.field);
    buttons.append(copy, download, saveControl.button);
    section.appendChild(buttons);
    parent.appendChild(section);
  }

  function buildSharePayload(result) {
    return {
      v: instrument.version,
      r: instrument.scoring.dimensions.map(dimension => result.scores[dimension.key] || 0),
      a: result.level ? result.level.id : 'insufficient'
    };
  }

  async function generateCard(result) {
    const axes = instrument.scoring.dimensions.map(dimension => ({
      key: dimension.key,
      label: dimension.label
    }));
    return generateShareCard({
      quizTitle: instrument.title,
      resultTitle: result.level ? result.level.label : 'Diagnostic result',
      subtitle: result.strongest ? `Strongest area: ${result.strongest.label}` : '',
      axes,
      scores: axes.map(axis => result.scores[axis.key] || 0),
      shareText: shareText(result),
      quizUrl: window.location.href.split('#')[0]
    });
  }

  function shareText(result) {
    const level = result.level ? result.level.label : 'a diagnostic result';
    const archetype = result.strongest ? interpretation.archetypes?.[result.strongest.key] : null;
    if (archetype) return `My ${instrument.title} level is ${level}. My strongest area is ${archetype}.`;
    return `I completed ${instrument.title}.`;
  }

  function renderMethodology(parent) {
    const text = interpretation.methodologyNote || 'This educational diagnostic uses four dimensions, two questions per dimension, and a balanced index that weights the weakest dimension. It is not professional advice, certification, or validation.';
    addSection(parent, 'Methodology and limits', text);
  }

  function renderSharedResult() {
    const scores = {};
    instrument.scoring.dimensions.forEach((dimension, index) => {
      scores[dimension.key] = sharedResult.r[index] || 0;
    });

    const section = document.createElement('section');
    section.className = 'quiz-result quiz-result--diagnostic';
    const header = document.createElement('div');
    header.className = 'quiz-result__header';
    appendText(header, 'p', 'quiz-result__kicker', 'Shared diagnostic result');
    appendText(header, 'h1', 'quiz-result__title', instrument.title);
    section.appendChild(header);
    renderChart(section, scores, 'Shared result');

    const cta = document.createElement('div');
    cta.className = 'quiz-result__section';
    appendText(cta, 'p', '', 'Take the quiz to generate your own private result.');
    const link = document.createElement('a');
    link.href = window.location.href.split('#')[0];
    link.className = 'quiz-btn quiz-btn--primary';
    link.textContent = `Take ${instrument.title}`;
    cta.appendChild(link);
    section.appendChild(cta);

    container.innerHTML = '';
    container.appendChild(section);
  }

  function addMetric(parent, label, value) {
    const item = document.createElement('div');
    item.className = 'quiz-diagnostic-metric';
    appendText(item, 'p', 'quiz-diagnostic-metric__label', label);
    appendText(item, 'p', 'quiz-diagnostic-metric__value', value);
    parent.appendChild(item);
  }

  function addSection(parent, title, text) {
    const section = document.createElement('div');
    section.className = 'quiz-result__section';
    appendText(section, 'h3', '', title);
    appendText(section, 'p', '', text);
    parent.appendChild(section);
  }

  function appendText(parent, tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    parent.appendChild(element);
    return element;
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'quiz-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }
}

export { mountStandardDiagnosticPage };
