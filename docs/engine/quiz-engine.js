const STAGES = {
  INTRO: 'intro',
  CONTEXT: 'optionalContext',
  QUESTIONS: 'questions',
  DELIBERATION: 'deliberation',
  RESULT: 'result',
  SHARE: 'share',
  COMPARE: 'compare'
};

function createEngine(container, config) {
  let _container = container;

  const state = {
    stage: STAGES.INTRO,
    quizId: config.id,
    version: config.version,
    answers: {},
    contextAnswers: {},
    scores: {},
    result: null,
    questionOrder: [],
    optionOrders: {},
    currentQuestionIndex: 0,
    firstChoices: {},
    secondChoices: {}
  };

  const listeners = [];

  function onStageChange(fn) {
    listeners.push(fn);
  }

  function emit() {
    for (const fn of listeners) {
      fn(state);
    }
  }

  function setStage(stage) {
    state.stage = stage;
    if (_container) render(_container);
    emit();
  }

  function initializeQuestionOrder() {
    if (config.questionOrder === 'random') {
      state.questionOrder = shuffleArray(config.questions.map((_, i) => i));
    } else {
      state.questionOrder = config.questions.map((_, i) => i);
    }

    for (let i = 0; i < config.questions.length; i++) {
      const q = config.questions[i];
      if (q.randomizeOptions !== false && q.options) {
        state.optionOrders[i] = shuffleArray(q.options.map((_, j) => j));
      } else {
        state.optionOrders[i] = q.options ? q.options.map((_, j) => j) : [];
      }
    }
  }

  function shuffleArray(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function answerQuestion(questionIndex, value) {
    state.answers[questionIndex] = value;
  }

  function answerContext(questionId, value) {
    state.contextAnswers[questionId] = value;
  }

  function answerForcedChoice(questionIndex, firstChoice, secondChoice) {
    state.firstChoices[questionIndex] = firstChoice;
    state.secondChoices[questionIndex] = secondChoice;
  }

  function computeScores() {
    const scoring = config.scoring;
    if (!scoring) return {};

    const scores = {};

    for (const dim of scoring.dimensions) {
      scores[dim.key] = 0;
    }

    if (scoring.type === 'forced-choice') {
      const firstPoints = scoring.firstChoicePoints || 3;
      const secondPoints = scoring.secondChoicePoints || 1;

      for (const [qIdx, choiceKey] of Object.entries(state.firstChoices)) {
        const question = config.questions[parseInt(qIdx)];
        if (!question || !question.options) continue;
        const option = question.options.find(o => o.key === choiceKey);
        if (option && option.dimensionScores) {
          for (const [dim, val] of Object.entries(option.dimensionScores)) {
            if (scores[dim] !== undefined) {
              scores[dim] += val * firstPoints;
            }
          }
        }
      }

      for (const [qIdx, choiceKey] of Object.entries(state.secondChoices)) {
        const question = config.questions[parseInt(qIdx)];
        if (!question || !question.options) continue;
        const option = question.options.find(o => o.key === choiceKey);
        if (option && option.dimensionScores) {
          for (const [dim, val] of Object.entries(option.dimensionScores)) {
            if (scores[dim] !== undefined) {
              scores[dim] += val * secondPoints;
            }
          }
        }
      }
    } else if (scoring.type === 'likert') {
      for (const [qIdx, value] of Object.entries(state.answers)) {
        const question = config.questions[parseInt(qIdx)];
        if (!question) continue;
        const option = question.options ? question.options.find(o => o.value === value) : null;
        if (option && option.dimensionScores) {
          for (const [dim, val] of Object.entries(option.dimensionScores)) {
            if (scores[dim] !== undefined) {
              scores[dim] += val;
            }
          }
        }
      }
    } else if (scoring.type === 'profile') {
      for (const [qIdx, choiceKey] of Object.entries(state.answers)) {
        const question = config.questions[parseInt(qIdx)];
        if (!question || !question.options) continue;
        const option = question.options.find(o => o.key === choiceKey);
        if (option && option.dimensionScores) {
          for (const [dim, val] of Object.entries(option.dimensionScores)) {
            if (scores[dim] !== undefined) {
              scores[dim] += val;
            }
          }
        }
      }
    }

    return scores;
  }

  function normalizeScores(rawScores) {
    const scoring = config.scoring;
    if (!scoring) return {};

    const normalized = {};

    for (const dim of scoring.dimensions) {
      const min = dim.theoreticalMin ?? 0;
      const max = dim.theoreticalMax ?? 100;
      const raw = rawScores[dim.key] ?? 0;
      const range = max - min;
      if (range === 0) {
        normalized[dim.key] = 0;
      } else {
        normalized[dim.key] = Math.round(100 * (raw - min) / range);
      }
      normalized[dim.key] = Math.max(0, Math.min(100, normalized[dim.key]));
    }

    return normalized;
  }

  function computeRelativeScores(normalizedScores) {
    const values = Object.values(normalizedScores);
    const highest = Math.max(...values);
    if (highest === 0) return normalizedScores;

    const relative = {};
    for (const [key, val] of Object.entries(normalizedScores)) {
      relative[key] = Math.round(100 * val / highest);
    }
    return relative;
  }

  function determineArchetype(normalizedScores) {
    const interpretation = config.interpretation;
    if (!interpretation || !interpretation.archetypes) return null;

    for (const archetype of interpretation.archetypes) {
      if (archetype.condition(normalizedScores, state)) {
        return archetype;
      }
    }

    const fallback = interpretation.archetypes.find(a => a.fallback);
    return fallback || null;
  }

  function computeResult() {
    const rawScores = computeScores();
    const normalizedScores = normalizeScores(rawScores);
    const relativeScores = computeRelativeScores(normalizedScores);

    let archetype = null;
    if (config.interpretation && config.interpretation.archetypes) {
      for (const arch of config.interpretation.archetypes) {
        if (typeof arch.condition === 'function' && arch.condition(normalizedScores, state)) {
          archetype = arch;
          break;
        }
      }
      if (!archetype) {
        archetype = config.interpretation.archetypes.find(a => a.fallback) || null;
      }
    }

    state.scores = normalizedScores;
    state.rawScores = rawScores;
    state.relativeScores = relativeScores;
    state.result = {
      scores: normalizedScores,
      rawScores: rawScores,
      relativeScores: relativeScores,
      archetype: archetype,
      context: state.contextAnswers
    };

    return state.result;
  }

  function renderIntro() {
    const intro = config.introduction || {};
    const el = document.createElement('section');
    el.className = 'quiz-stage quiz-stage--intro';
    el.innerHTML = `
      <h1>${escapeHtml(config.title)}</h1>
      ${intro.subtitle ? `<p class="quiz-subtitle">${escapeHtml(intro.subtitle)}</p>` : ''}
      ${intro.description ? `<div class="quiz-description">${intro.description}</div>` : ''}
      ${intro.duration ? `<p class="quiz-duration">${escapeHtml(intro.duration)}</p>` : ''}
      <p class="quiz-privacy-note">${escapeHtml(intro.privacyNote || 'Your answers stay in this browser. The result belongs to you. Sharing is your choice.')}</p>
      ${intro.disclaimer ? `<p class="quiz-disclaimer">${escapeHtml(intro.disclaimer)}</p>` : ''}
      <button class="quiz-btn quiz-btn--primary" id="start-btn">${escapeHtml(intro.startButton || 'Begin')}</button>
    `;
    return el;
  }

  function renderContext() {
    const contextQuestions = config.contextQuestions || [];
    const el = document.createElement('section');
    el.className = 'quiz-stage quiz-stage--context';
    el.innerHTML = `<h2>${escapeHtml(config.contextTitle || 'Optional context')}</h2>`;

    for (const q of contextQuestions) {
      const fieldset = document.createElement('fieldset');
      fieldset.className = 'quiz-question';
      const legend = document.createElement('legend');
      legend.textContent = q.text;
      fieldset.appendChild(legend);

      for (const opt of q.options) {
        const label = document.createElement('label');
        label.className = 'quiz-option';
        const input = document.createElement('input');
        input.type = q.multiple ? 'checkbox' : 'radio';
        input.name = `context-${q.id}`;
        input.value = opt.value;
        const span = document.createElement('span');
        span.textContent = opt.text;
        label.appendChild(input);
        label.appendChild(span);
        fieldset.appendChild(label);
      }

      el.appendChild(fieldset);
    }

    const btnRow = document.createElement('div');
    btnRow.className = 'quiz-btn-row';
    const backBtn = document.createElement('button');
    backBtn.className = 'quiz-btn quiz-btn--secondary';
    backBtn.textContent = 'Back';
    backBtn.id = 'context-back-btn';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'quiz-btn quiz-btn--primary';
    nextBtn.textContent = 'Continue';
    nextBtn.id = 'context-next-btn';
    btnRow.appendChild(backBtn);
    btnRow.appendChild(nextBtn);
    el.appendChild(btnRow);

    return el;
  }

  function renderQuestion(questionIndex) {
    const qIdx = state.questionOrder[questionIndex];
    const question = config.questions[qIdx];
    const el = document.createElement('section');
    el.className = 'quiz-stage quiz-stage--question';

    const progress = document.createElement('div');
    progress.className = 'quiz-progress';
    progress.textContent = `${questionIndex + 1} of ${config.questions.length}`;
    el.appendChild(progress);

    const fieldset = document.createElement('fieldset');
    fieldset.className = 'quiz-question';
    fieldset.setAttribute('role', 'radiogroup');

    const legend = document.createElement('legend');
    legend.textContent = question.text;
    fieldset.appendChild(legend);

    if (question.type === 'forced-choice') {
      const firstGroup = document.createElement('div');
      firstGroup.className = 'quiz-choice-group';
      const firstLabel = document.createElement('p');
      firstLabel.className = 'quiz-choice-label';
      firstLabel.textContent = 'First choice';
      firstGroup.appendChild(firstLabel);

      const optionOrder = state.optionOrders[qIdx] || [];
      for (const optIdx of optionOrder) {
        const opt = question.options[optIdx];
        const label = document.createElement('label');
        label.className = 'quiz-option';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `first-${qIdx}`;
        input.value = opt.key;
        if (state.firstChoices[qIdx] === opt.key) input.checked = true;
        const span = document.createElement('span');
        span.textContent = opt.text;
        label.appendChild(input);
        label.appendChild(span);
        firstGroup.appendChild(label);
      }
      fieldset.appendChild(firstGroup);

      const secondGroup = document.createElement('div');
      secondGroup.className = 'quiz-choice-group';
      const secondLabel = document.createElement('p');
      secondLabel.className = 'quiz-choice-label';
      secondLabel.textContent = 'Second choice';
      secondGroup.appendChild(secondLabel);

      for (const optIdx of optionOrder) {
        const opt = question.options[optIdx];
        const label = document.createElement('label');
        label.className = 'quiz-option';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `second-${qIdx}`;
        input.value = opt.key;
        if (state.secondChoices[qIdx] === opt.key) input.checked = true;
        const span = document.createElement('span');
        span.textContent = opt.text;
        label.appendChild(input);
        label.appendChild(span);
        secondGroup.appendChild(label);
      }
      fieldset.appendChild(secondGroup);
    } else if (question.type === 'likert') {
      const scaleContainer = document.createElement('div');
      scaleContainer.className = 'quiz-likert';

      if (question.scaleLabels) {
        const labelsRow = document.createElement('div');
        labelsRow.className = 'quiz-likert-labels';
        for (const sl of question.scaleLabels) {
          const span = document.createElement('span');
          span.textContent = sl;
          labelsRow.appendChild(span);
        }
        scaleContainer.appendChild(labelsRow);
      }

      const optionsRow = document.createElement('div');
      optionsRow.className = 'quiz-likert-options';
      const optionOrder = state.optionOrders[qIdx] || [];
      for (const optIdx of optionOrder) {
        const opt = question.options[optIdx];
        const label = document.createElement('label');
        label.className = 'quiz-option quiz-option--likert';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q-${qIdx}`;
        input.value = opt.value;
        if (state.answers[qIdx] === opt.value) input.checked = true;
        const span = document.createElement('span');
        span.textContent = opt.text || opt.value;
        label.appendChild(input);
        label.appendChild(span);
        optionsRow.appendChild(label);
      }
      scaleContainer.appendChild(optionsRow);
      fieldset.appendChild(scaleContainer);
    } else {
      const optionOrder = state.optionOrders[qIdx] || [];
      for (const optIdx of optionOrder) {
        const opt = question.options[optIdx];
        const label = document.createElement('label');
        label.className = 'quiz-option';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q-${qIdx}`;
        input.value = opt.key || opt.value;
        if (state.answers[qIdx] === (opt.key || opt.value)) input.checked = true;
        const span = document.createElement('span');
        span.textContent = opt.text;
        label.appendChild(input);
        label.appendChild(span);
        fieldset.appendChild(label);
      }
    }

    el.appendChild(fieldset);

    const btnRow = document.createElement('div');
    btnRow.className = 'quiz-btn-row';
    if (questionIndex > 0) {
      const backBtn = document.createElement('button');
      backBtn.className = 'quiz-btn quiz-btn--secondary';
      backBtn.textContent = 'Back';
      backBtn.id = 'question-back-btn';
      btnRow.appendChild(backBtn);
    }
    const nextBtn = document.createElement('button');
    nextBtn.className = 'quiz-btn quiz-btn--primary';
    nextBtn.textContent = questionIndex === config.questions.length - 1 ? 'See result' : 'Next';
    nextBtn.id = 'question-next-btn';
    nextBtn.disabled = !isQuestionAnswered(qIdx, question);
    btnRow.appendChild(nextBtn);
    el.appendChild(btnRow);

    return el;
  }

  function isQuestionAnswered(qIdx, question) {
    if (question.type === 'forced-choice') {
      return state.firstChoices[qIdx] !== undefined && state.secondChoices[qIdx] !== undefined
        && state.firstChoices[qIdx] !== state.secondChoices[qIdx];
    }
    return state.answers[qIdx] !== undefined;
  }

  function renderDeliberation() {
    const el = document.createElement('section');
    el.className = 'quiz-stage quiz-stage--deliberation';
    el.innerHTML = `
      <div class="quiz-deliberation">
        <p class="quiz-deliberation__text">${escapeHtml(config.deliberationText || 'Calculating your result...')}</p>
        <div class="quiz-deliberation__spinner" aria-hidden="true"></div>
      </div>
    `;
    return el;
  }

  function render(container) {
    if (container) _container = container;
    const c = _container;
    c.innerHTML = '';

    switch (state.stage) {
      case STAGES.INTRO: {
        const el = renderIntro();
        c.appendChild(el);
        el.querySelector('#start-btn').addEventListener('click', () => {
          initializeQuestionOrder();
          if (config.contextQuestions && config.contextQuestions.length > 0) {
            setStage(STAGES.CONTEXT);
          } else {
            state.currentQuestionIndex = 0;
            setStage(STAGES.QUESTIONS);
          }
        });
        break;
      }

      case STAGES.CONTEXT: {
        const el = renderContext();
        c.appendChild(el);
        el.querySelector('#context-back-btn').addEventListener('click', () => setStage(STAGES.INTRO));
        el.querySelector('#context-next-btn').addEventListener('click', () => {
          for (const q of (config.contextQuestions || [])) {
            const inputs = el.querySelectorAll(`[name="context-${q.id}"]`);
            if (q.multiple) {
              state.contextAnswers[q.id] = Array.from(inputs).filter(i => i.checked).map(i => i.value);
            } else {
              const checked = Array.from(inputs).find(i => i.checked);
              if (checked) state.contextAnswers[q.id] = checked.value;
            }
          }
          state.currentQuestionIndex = 0;
          setStage(STAGES.QUESTIONS);
        });
        break;
      }

      case STAGES.QUESTIONS: {
        const el = renderQuestion(state.currentQuestionIndex);
        c.appendChild(el);
        bindQuestionEvents(el, state.currentQuestionIndex);
        break;
      }

      case STAGES.DELIBERATION: {
        const el = renderDeliberation();
        c.appendChild(el);
        setTimeout(() => {
          computeResult();
          setStage(STAGES.RESULT);
        }, 800);
        break;
      }

      case STAGES.RESULT: {
        if (config.onResult) {
          config.onResult(state, c);
        }
        break;
      }
    }
  }

  function bindQuestionEvents(el, questionIndex) {
    const qIdx = state.questionOrder[questionIndex];
    const question = config.questions[qIdx];
    const nextBtn = el.querySelector('#question-next-btn');
    const backBtn = el.querySelector('#question-back-btn');

    function updateNextState() {
      nextBtn.disabled = !isQuestionAnswered(qIdx, question);
    }

    if (question.type === 'forced-choice') {
      el.querySelectorAll(`[name="first-${qIdx}"]`).forEach(input => {
        input.addEventListener('change', () => {
          state.firstChoices[qIdx] = input.value;
          updateNextState();
        });
      });
      el.querySelectorAll(`[name="second-${qIdx}"]`).forEach(input => {
        input.addEventListener('change', () => {
          state.secondChoices[qIdx] = input.value;
          updateNextState();
        });
      });
    } else {
      el.querySelectorAll(`[name="q-${qIdx}"]`).forEach(input => {
        input.addEventListener('change', () => {
          state.answers[qIdx] = input.value;
          updateNextState();
        });
      });
    }

    nextBtn.addEventListener('click', () => {
      if (questionIndex < config.questions.length - 1) {
        state.currentQuestionIndex = questionIndex + 1;
        setStage(STAGES.QUESTIONS);
      } else {
        setStage(STAGES.DELIBERATION);
      }
    });

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        state.currentQuestionIndex = questionIndex - 1;
        setStage(STAGES.QUESTIONS);
      });
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  return {
    state,
    render,
    setStage,
    computeResult,
    onStageChange
  };
}

export { createEngine, STAGES };
