const {
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
} = require('../docs/engine/scoring.js');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
  } else {
    failed++;
    console.error(`FAIL: ${message}`);
  }
}

function assertClose(actual, expected, tolerance, message) {
  if (Math.abs(actual - expected) <= tolerance) {
    passed++;
  } else {
    failed++;
    console.error(`FAIL: ${message} (expected ~${expected}, got ${actual})`);
  }
}

// Test 1: Forced-choice scoring
(function testForcedChoice() {
  const questions = [
    { options: [{ key: 'FS', dimensionScores: { FS: 1 } }, { key: 'SC', dimensionScores: { SC: 1 } }] },
    { options: [{ key: 'MO', dimensionScores: { MO: 1 } }, { key: 'MT', dimensionScores: { MT: 1 } }] }
  ];
  const config = {
    firstChoicePoints: 3,
    secondChoicePoints: 1,
    dimensions: [
      { key: 'FS' }, { key: 'SC' }, { key: 'MO' }, { key: 'MT' }
    ]
  };
  const answers = {
    firstChoices: { '0': 'FS', '1': 'MO' },
    secondChoices: { '0': 'SC', '1': 'MT' }
  };

  const scores = computeForcedChoiceScores(answers, questions, config);
  assert(scores.FS === 3, 'FS first choice = 3 points');
  assert(scores.SC === 1, 'SC second choice = 1 point');
  assert(scores.MO === 3, 'MO first choice = 3 points');
  assert(scores.MT === 1, 'MT second choice = 1 point');
})();

// Test 2: Profile scoring (Basilisk-style)
(function testProfileScoring() {
  const questions = [
    { options: [{ key: 'M-ACCEL', dimensionScores: { escalation: 2, sacrifice: 1, limit: -2 } }] },
    { options: [{ key: 'T-BOUND', dimensionScores: { escalation: -1, sacrifice: -2, limit: 2 } }] }
  ];
  const answers = { '0': 'M-ACCEL', '1': 'T-BOUND' };

  const scores = computeProfileScores(answers, questions);
  assert(scores.escalation === 1, 'Escalation: 2 + (-1) = 1');
  assert(scores.sacrifice === -1, 'Sacrifice: 1 + (-2) = -1');
  assert(scores.limit === 0, 'Limit: -2 + 2 = 0');
})();

// Test 3: Likert scoring
(function testLikertScoring() {
  const questions = [
    { options: [{ value: '0', dimensionScores: { delivery: 0 } }, { value: '50', dimensionScores: { delivery: 50 } }, { value: '100', dimensionScores: { delivery: 100 } }] }
  ];
  const answers = { '0': '50' };

  const scores = computeLikertScores(answers, questions);
  assert(scores.delivery === 50, 'Likert delivery = 50');
})();

// Test 4: Normalization
(function testNormalization() {
  const rawScores = { FS: 12, SC: 6, EB: 0 };
  const dimensions = [
    { key: 'FS', theoreticalMin: 0, theoreticalMax: 15 },
    { key: 'SC', theoreticalMin: 0, theoreticalMax: 15 },
    { key: 'EB', theoreticalMin: 0, theoreticalMax: 15 }
  ];

  const normalized = normalizeScores(rawScores, dimensions);
  assert(normalized.FS === 80, 'FS normalized: 12/15 * 100 = 80');
  assert(normalized.SC === 40, 'SC normalized: 6/15 * 100 = 40');
  assert(normalized.EB === 0, 'EB normalized: 0/15 * 100 = 0');
})();

// Test 5: Normalization with negative min
(function testNormalizationNegative() {
  const rawScores = { escalation: 12 };
  const dimensions = [
    { key: 'escalation', theoreticalMin: -12, theoreticalMax: 24 }
  ];

  const normalized = normalizeScores(rawScores, dimensions);
  assert(normalized.escalation === 67, 'Escalation normalized: (12-(-12))/(24-(-12)) * 100 = 67');
})();

// Test 6: Normalization clamping
(function testNormalizationClamping() {
  const rawScores = { x: 200 };
  const dimensions = [{ key: 'x', theoreticalMin: 0, theoreticalMax: 100 }];

  const normalized = normalizeScores(rawScores, dimensions);
  assert(normalized.x === 100, 'Clamped to 100');
})();

// Test 7: Relative scores
(function testRelativeScores() {
  const normalized = { FS: 80, SC: 40, EB: 60 };
  const relative = computeRelativeScores(normalized);
  assert(relative.FS === 100, 'FS relative = 100 (highest)');
  assert(relative.SC === 50, 'SC relative = 50');
  assert(relative.EB === 75, 'EB relative = 75');
})();

// Test 8: Ecology distance
(function testEcologyDistance() {
  const userValues = [65, 20, 35, 45, 25, 90, 20, 55];
  const prototypes = {
    independentStudio: [65, 20, 35, 45, 25, 90, 20, 55],
    missionStartup: [75, 35, 25, 90, 20, 20, 15, 15]
  };

  const distances = computeEcologyDistance(userValues, prototypes);
  assert(distances[0].key === 'independentStudio', 'Exact match is closest');
  assertClose(distances[0].distance, 0, 0.01, 'Exact match distance is 0');
})();

// Test 9: Moloch index
(function testMolochIndex() {
  const scores = { escalation: 80, sacrifice: 60 };
  const moloch = computeMolochIndex(scores);
  assert(moloch === 71, 'Moloch: 0.55*80 + 0.45*60 = 71');
})();

// Test 10: Basilisk index
(function testBasiliskIndex() {
  const scores = { centralization: 80, legibility: 70, exit: 30 };
  const basilisk = computeBasiliskIndex(scores);
  assert(basilisk === 74, 'Basilisk: 0.40*80 + 0.35*70 + 0.25*(100-30) = 74');
})();

// Test 11: Third Path index (geometric mean)
(function testThirdPathIndex() {
  const scores = { exit: 80, plurality: 70, limit: 60, cooperation: 50 };
  const thirdPath = computeThirdPathIndex(scores);
  const expected = Math.round(Math.pow(80 * 70 * 60 * 50, 0.25));
  assert(thirdPath === expected, `Third Path geometric mean = ${expected}`);
})();

// Test 12: Third Path with zero component
(function testThirdPathZero() {
  const scores = { exit: 0, plurality: 80, limit: 70, cooperation: 60 };
  const thirdPath = computeThirdPathIndex(scores);
  assert(thirdPath === 0, 'Third Path with zero component = 0');
})();

// Test 13: Top roles
(function testTopRoles() {
  const rawScores = { FS: 12, SC: 8, EB: 10, MO: 5 };
  const sorted = determineTopRoles(rawScores, ['FS', 'SC', 'EB', 'MO']);
  assert(sorted[0] === 'FS', 'Top role is FS');
  assert(sorted[1] === 'EB', 'Second role is EB');
  assert(sorted[2] === 'SC', 'Third role is SC');
})();

// Test 14: Role profile classification
(function testRoleClassification() {
  assert(classifyRoleProfile({ FS: 12, SC: 11 }, ['FS', 'SC']) === 'dual', 'Diff <= 1 = dual');
  assert(classifyRoleProfile({ FS: 12, SC: 8 }, ['FS', 'SC', 'EB']) === 'primary-secondary', 'Clear primary-secondary');
  assert(classifyRoleProfile({ FS: 12, SC: 10, EB: 10 }, ['FS', 'SC', 'EB']) === 'hybrid', 'Top 3 within 2 = hybrid');
})();

// Summary
console.log(`\n${passed} passed, ${failed} failed out of ${passed + failed} assertions.`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('All tests passed.');
}
