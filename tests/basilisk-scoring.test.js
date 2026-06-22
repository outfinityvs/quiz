const { computeProfileScores, normalizeScores } = require('../docs/engine/scoring.js');

// Load Basilisk instrument
const fs = require('fs');
const instrument = JSON.parse(fs.readFileSync('../docs/quizzes/basilisk-verdict/instrument.json', 'utf8'));

// Calculate theoretical min/max for each dimension
const dimensions = ['escalation', 'sacrifice', 'centralization', 'legibility', 'exit', 'plurality', 'limit', 'cooperation'];
const theoreticalValues = {};

for (const dim of dimensions) {
  let minTotal = 0;
  let maxTotal = 0;
  
  for (const question of instrument.questions) {
    let minForQuestion = Infinity;
    let maxForQuestion = -Infinity;
    
    for (const option of question.options) {
      const score = option.dimensionScores[dim] || 0;
      minForQuestion = Math.min(minForQuestion, score);
      maxForQuestion = Math.max(maxForQuestion, score);
    }
    
    minTotal += minForQuestion;
    maxTotal += maxForQuestion;
  }
  
  theoreticalValues[dim] = { min: minTotal, max: maxTotal };
}

console.log('Theoretical values for Basilisk Verdict:');
console.log(JSON.stringify(theoreticalValues, null, 2));

// Test with sample answers
const sampleAnswers = {};
for (let i = 0; i < instrument.questions.length; i++) {
  // Always pick first option (M-ACCEL or similar)
  sampleAnswers[i] = instrument.questions[i].options[0].key;
}

const rawScores = computeProfileScores(sampleAnswers, instrument.questions);
console.log('\nRaw scores (always picking first option):');
console.log(rawScores);

// Normalize with current config
const normalized = normalizeScores(rawScores, instrument.scoring.dimensions);
console.log('\nNormalized scores with current config:');
console.log(normalized);

// Normalize with correct theoretical values
const correctDimensions = instrument.scoring.dimensions.map(d => ({
  key: d.key,
  theoreticalMin: theoreticalValues[d.key].min,
  theoreticalMax: theoreticalValues[d.key].max
}));

const normalizedCorrect = normalizeScores(rawScores, correctDimensions);
console.log('\nNormalized scores with correct theoretical values:');
console.log(normalizedCorrect);
