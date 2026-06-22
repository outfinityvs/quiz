function computeForcedChoiceScores(answers, questions, config) {
  const firstPoints = config.firstChoicePoints || 3;
  const secondPoints = config.secondChoicePoints || 1;
  const scores = {};

  for (const dim of config.dimensions) {
    scores[dim.key] = 0;
  }

  for (const [qIdx, choiceKey] of Object.entries(answers.firstChoices || {})) {
    const question = questions[parseInt(qIdx)];
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

  for (const [qIdx, choiceKey] of Object.entries(answers.secondChoices || {})) {
    const question = questions[parseInt(qIdx)];
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

  return scores;
}

function computeProfileScores(answers, questions) {
  const scores = {};

  for (const [qIdx, choiceKey] of Object.entries(answers)) {
    const question = questions[parseInt(qIdx)];
    if (!question || !question.options) continue;
    const option = question.options.find(o => o.key === choiceKey);
    if (option && option.dimensionScores) {
      for (const [dim, val] of Object.entries(option.dimensionScores)) {
        scores[dim] = (scores[dim] || 0) + val;
      }
    }
  }

  return scores;
}

function computeLikertScores(answers, questions) {
  const scores = {};

  for (const [qIdx, value] of Object.entries(answers)) {
    const question = questions[parseInt(qIdx)];
    if (!question) continue;
    const option = question.options ? question.options.find(o => o.value === value) : null;
    if (option && option.dimensionScores) {
      for (const [dim, val] of Object.entries(option.dimensionScores)) {
        scores[dim] = (scores[dim] || 0) + val;
      }
    }
  }

  return scores;
}

function normalizeScores(rawScores, dimensions) {
  const normalized = {};

  for (const dim of dimensions) {
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
  if (highest === 0) return { ...normalizedScores };

  const relative = {};
  for (const [key, val] of Object.entries(normalizedScores)) {
    relative[key] = Math.round(100 * val / highest);
  }
  return relative;
}

function computeEcologyDistance(ecologyValues, prototypes) {
  const distances = [];

  for (const [key, proto] of Object.entries(prototypes)) {
    const squared = ecologyValues.reduce((sum, val, i) => sum + Math.pow(val - proto[i], 2), 0);
    distances.push({ key, distance: Math.sqrt(squared / ecologyValues.length) });
  }

  distances.sort((a, b) => a.distance - b.distance);
  return distances;
}

function computeMolochIndex(scores) {
  return Math.max(0, Math.min(100, Math.round(0.55 * scores.escalation + 0.45 * scores.sacrifice)));
}

function computeBasiliskIndex(scores) {
  return Math.max(0, Math.min(100, Math.round(0.40 * scores.centralization + 0.35 * scores.legibility + 0.25 * (100 - scores.exit))));
}

function computeThirdPathIndex(scores) {
  const product = Math.max(0, scores.exit) * Math.max(0, scores.plurality) * Math.max(0, scores.limit) * Math.max(0, scores.cooperation);
  return Math.max(0, Math.min(100, Math.round(Math.pow(product, 0.25))));
}

function determineTopRoles(rawScores, roleKeys) {
  const sorted = [...roleKeys].sort((a, b) => (rawScores[b] || 0) - (rawScores[a] || 0));
  return sorted;
}

function classifyRoleProfile(rawScores, sortedRoles) {
  const primary = sortedRoles[0];
  const secondary = sortedRoles[1];
  const primaryDiff = (rawScores[primary] || 0) - (rawScores[secondary] || 0);
  const thirdScore = rawScores[sortedRoles[2]] || 0;

  if (primaryDiff <= 1) return 'dual';
  if ((rawScores[primary] || 0) - thirdScore <= 2 && (rawScores[secondary] || 0) - thirdScore <= 2) return 'hybrid';
  return 'primary-secondary';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    computeForcedChoiceScores,
    computeProfileScores,
    computeLikertScores,
    normalizeScores,
    computeRelativeScores,
    computeEcologyDistance,
    computeMolochIndex,
    computeBasiliskIndex,
    computeThirdPathIndex,
    determineTopRoles,
    classifyRoleProfile
  };
}
