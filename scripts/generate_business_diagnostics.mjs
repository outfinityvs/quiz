import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const specsDir = path.join(root, 'docs/specs');
const quizzesDir = path.join(root, 'docs/quizzes');
const catalogPath = path.join(root, 'docs/catalog/catalog.json');

const typeByFormat = [
  [/knowledge|literacy|challenge/i, 'knowledge'],
  [/paired alignment/i, 'paired-alignment'],
  [/strategic fit/i, 'strategic-fit'],
  [/readiness/i, 'readiness'],
  [/maturity/i, 'maturity'],
  [/competence/i, 'competence'],
  [/scenario/i, 'scenario'],
  [/governance/i, 'governance']
];

const domainByCategory = {
  'Founders, self-knowledge, and operating mode': 'founders',
  'Finance, fundraising, and economic resilience': 'finance',
  'Investors, portfolios, and family capital': 'investor-capital',
  'Product, discovery, and monetisation': 'product',
  'Marketing, growth, sales, and leadership': 'growth-leadership',
  'AI, governance, security, and sustainable value': 'ai-trust'
};

const domainSortOrder = {
  founders: 1,
  finance: 2,
  'investor-capital': 3,
  product: 4,
  'growth-leadership': 5,
  'ai-trust': 6,
  collaboration: 7,
  knowledge: 8,
  interests: 9,
  personality: 10,
  identity: 11,
  values: 12,
  philosophy: 13,
  cognition: 14
};

const evidenceOptions = [
  { value: 'opinion', text: 'Opinion: mostly judgement, memory, or individual perception.' },
  { value: 'anecdotal', text: 'Anecdotal: examples exist, but they are not systematically documented.' },
  { value: 'documented', text: 'Documented: there are current notes, models, policies, metrics, or records.' },
  { value: 'system-verified', text: 'System-verified: evidence is routinely produced by a governed workflow, system, or review cadence.' }
];

const knowledgeOptions = {
  'startup-finance-literacy-quiz': {
    1: [['A', 'Revenue minus all operating expenses, divided by revenue.', 0], ['B', 'Revenue minus cost of goods sold, divided by revenue.', 3], ['C', 'Net income divided by cash collected.', 0], ['D', 'Revenue divided by customer acquisition cost.', 0]],
    2: [['A', '2 months.', 0], ['B', '4 months.', 3], ['C', '6 months.', 0], ['D', 'The answer requires annual recurring revenue only.', 1]],
    3: [['A', '6 months.', 0], ['B', '10 months.', 0], ['C', '12 months.', 3], ['D', '50 months.', 0]],
    4: [['A', 'Revenue growth always increases cash, so this cannot happen.', 0], ['B', 'Customers may pay later while inventory, hiring or acquisition costs are paid earlier.', 3], ['C', 'Only accounting fraud can create this situation.', 0], ['D', 'It occurs only when gross margin is above 100%.', 0]],
    5: [['A', '16.7%.', 1], ['B', '20.0%.', 3], ['C', '25.0%.', 0], ['D', '40.0%.', 0]],
    6: [['A', 'The new investor only.', 0], ['B', 'Existing shareholders before the financing.', 3], ['C', 'Future employees only.', 0], ['D', 'Nobody, because option pools do not dilute ownership.', 0]],
    7: [['A', 'Income statement.', 0], ['B', 'Cash flow statement.', 0], ['C', 'Balance sheet.', 3], ['D', 'Sales pipeline report.', 0]],
    8: [['A', 'The cash flow statement, because it includes working capital, capital expenditure and financing flows.', 3], ['B', 'The cap table, because it records all cash movements.', 0], ['C', 'The product roadmap, because it recognises depreciation.', 0], ['D', 'Positive EBITDA guarantees positive cash flow.', 0]]
  },
  'term-sheet-literacy-quiz': {
    1: [['A', '16.7%.', 1], ['B', '20.0%.', 3], ['C', '25.0%.', 0], ['D', 'It cannot be calculated without the exit value.', 0]],
    2: [['A', 'It primarily dilutes existing shareholders.', 3], ['B', 'It primarily dilutes the incoming investor.', 0], ['C', 'It has no dilution effect until options are exercised.', 1], ['D', 'It automatically increases the pre-money valuation.', 0]],
    3: [['A', 'Boards approve only annual accounts, so composition rarely matters.', 0], ['B', 'The board may control key corporate decisions, appointments and strategic approvals.', 3], ['C', 'A board seat automatically transfers share ownership.', 0], ['D', 'Board composition matters only after an IPO.', 0]],
    4: [['A', 'Give investors consent rights over specified fundamental actions.', 3], ['B', 'Guarantee that the investment will produce a return.', 0], ['C', 'Replace all duties of the board.', 0], ['D', 'Prevent employees from receiving options.', 0]],
    5: [['A', 'The investor receives both the original investment and full common-share participation in every case.', 0], ['B', 'The investor typically chooses the greater of the preference amount or the as-converted common proceeds.', 3], ['C', 'The investor receives one percent of the company.', 0], ['D', 'The founders must repay the investor personally.', 0]],
    6: [['A', 'Less dilutive to existing common holders.', 0], ['B', 'More punitive because it can reset the conversion price to the new lower price regardless of round size.', 3], ['C', 'Identical in all financing scenarios.', 0], ['D', 'Relevant only to employee options.', 0]],
    7: [['A', 'Maintain a proportionate ownership stake in a future financing, subject to the agreement.', 3], ['B', 'Force the company to repurchase shares at any time.', 0], ['C', 'Approve every customer contract.', 0], ['D', 'Receive a fixed dividend before all creditors.', 0]],
    8: [['A', 'It restricts the company from soliciting or negotiating competing financing offers for a defined period.', 3], ['B', 'It guarantees that the financing will close.', 0], ['C', 'It prevents the company from selling products.', 0], ['D', 'It removes the need for definitive legal documents.', 0]]
  },
  'portfolio-construction-literacy-quiz': {
    1: [['A', 'Idiosyncratic or company-specific risk.', 3], ['B', 'Only inflation risk.', 0], ['C', 'Only currency risk.', 0], ['D', 'No risk if the owner knows the company well.', 0]],
    2: [['A', 'Owning more securities always guarantees lower loss.', 0], ['B', 'Diversification depends substantially on how return drivers and correlations differ, not only on asset count.', 3], ['C', 'Two companies in the same narrow sector are fully diversified.', 0], ['D', 'Diversification eliminates market-wide risk.', 0]],
    3: [['A', 'Assets expected to remain illiquid for ten years with uncertain distributions.', 3], ['B', 'A ladder of short-duration liquid instruments.', 0], ['C', 'Cash reserves matched to known commitments.', 0], ['D', 'A diversified liquid portfolio with a documented withdrawal plan.', 0]],
    4: [['A', 'A guarantee that every fund eventually outperforms.', 0], ['B', 'Early negative net cash flows or returns before later value creation and distributions may occur.', 3], ['C', 'A tax rule that applies only in Switzerland.', 0], ['D', 'A method for eliminating manager fees.', 0]],
    5: [['A', 'They are always identical.', 0], ['B', 'Volatility is price variability; permanent loss concerns an irreversible impairment of value or inability to recover capital.', 3], ['C', 'Permanent loss applies only to public equities.', 0], ['D', 'Volatility matters only when returns are positive.', 0]],
    6: [['A', 'A promised minimum outcome.', 0], ['B', 'A probability-weighted estimate or central tendency, not a guaranteed result.', 3], ['C', 'The highest historical return.', 0], ['D', 'The risk-free rate plus all fees.', 0]],
    7: [['A', 'To restore exposure toward agreed target ranges after market movements or circumstances change.', 3], ['B', 'To buy only the best recent performers.', 0], ['C', 'To prevent any asset from declining.', 0], ['D', 'To eliminate the need for an investment policy.', 0]],
    8: [['A', 'Because gross performance is the only return received by the investor.', 0], ['B', 'Because costs reduce the return actually retained and can compound over time.', 3], ['C', 'Because fees remove all investment risk.', 0], ['D', 'Because net returns are always higher than gross returns.', 0]]
  },
  'product-management-knowledge-quiz': {
    1: [['A', 'A chronological list of features requested by stakeholders.', 0], ['B', 'A set of choices about target customer, valuable problem, advantage and how the product will win.', 3], ['C', 'The engineering sprint plan for the next quarter.', 0], ['D', 'A company vision statement without trade-offs.', 1]],
    2: [['A', 'Estimate all items and begin with the easiest.', 0], ['B', 'Translate requests into desired outcomes, strategic fit, evidence and trade-offs before committing.', 3], ['C', 'Give every stakeholder an equal number of items.', 0], ['D', 'Remove all stakeholder requests automatically.', 0]],
    3: [['A', 'Would you use an AI-powered version of this product?', 0], ['B', 'How much would you theoretically pay for this idea?', 0], ['C', 'Tell me about the last time this problem occurred and what you did next.', 3], ['D', 'Do you agree that this problem is important?', 0]],
    4: [['A', 'Include the minimum number of features for a public launch.', 1], ['B', 'Test the riskiest important assumption with the least credible effort and exposure.', 3], ['C', 'Replicate the market leader with a smaller team.', 0], ['D', 'Maximise visual polish before any customer contact.', 0]],
    5: [['A', 'Prioritise the request from the most senior stakeholder.', 0], ['B', 'Prioritise by expected customer/business outcome, evidence, strategic fit, cost and risk.', 3], ['C', 'Prioritise the oldest backlog items first.', 0], ['D', 'Prioritise only by engineering effort.', 0]],
    6: [['A', 'Discovery and delivery proceed in parallel, with learning informing what is built.', 3], ['B', 'Two engineering teams build the same feature.', 0], ['C', 'Product managers discover while engineers deliver with no collaboration.', 1], ['D', 'Every product must maintain two roadmaps.', 0]],
    7: [['A', 'Total registered accounts, regardless of activity.', 0], ['B', 'A recurring measure that reflects delivered customer value and relates to sustainable business outcomes.', 3], ['C', 'Number of features shipped.', 0], ['D', 'Social media impressions.', 0]],
    8: [['A', 'Declare a win because the point estimate is positive.', 0], ['B', 'Treat the result as uncertain, review test power and continue or redesign according to a pre-set decision rule.', 3], ['C', 'Ignore all quantitative evidence permanently.', 0], ['D', 'Roll out only to customers who already converted.', 0]]
  }
};

const specFiles = fs.readdirSync(specsDir)
  .filter(file => /^DS0(2[6-9]|3[0-9]|4[0-9]|5[0-5])-.*\.md$/.test(file))
  .sort();

const generatedCatalog = [];

for (const file of specFiles) {
  const source = fs.readFileSync(path.join(specsDir, file), 'utf8');
  const frontmatter = parseFrontmatter(source);
  const metadata = parseMetadata(source);
  const slug = String(metadata['Public slug'] || '').replace(/^\//, '');
  if (!slug) throw new Error(`Missing Public slug in ${file}`);
  const dimensions = parseNumberedListAfter(source, '### Dimensions')
    .filter(item => !/^\(/.test(item));
  const questions = parseQuestions(source);
  const levels = parseLevels(source);
  const archetypes = parseMapping(source, 'Archetype mapping:');
  const recommendations = parseMapping(source, 'Recommendations triggered by the weakest dimension:');
  const levelCopy = parseMapping(source, 'Level copy requirements:');
  const answerExplanations = parseAnswerExplanations(source);
  const format = metadata.Format || 'Maturity assessment';
  const family = /knowledge|literacy|challenge/i.test(format) ? 'knowledge' : 'maturity';
  const methodType = typeByFormat.find(([pattern]) => pattern.test(format))?.[1] || 'assessment';
  const domain = domainByCategory[metadata.Category] || kebab(metadata.Category || 'business-diagnostics');

  const dimensionObjects = dimensions.map(label => ({
    key: kebab(label),
    label,
    theoreticalMin: 0,
    theoreticalMax: 6
  }));
  const dimensionKeyByLabel = new Map(dimensionObjects.map(dimension => [dimension.label, dimension.key]));

  const instrumentQuestions = questions.map(question => {
    const dimensionKey = dimensionKeyByLabel.get(question.dimension);
    const optionSource = family === 'knowledge'
      ? knowledgeOptions[slug]?.[question.number]
      : buildMaturityOptions(question.prompt, question.dimension);
    if (!dimensionKey) throw new Error(`Unknown dimension ${question.dimension} in ${file}`);
    if (!optionSource) throw new Error(`Missing options for quiz ${slug} q${question.number}`);

    return {
      id: `q${question.number}`,
      text: question.prompt,
      type: 'profile',
      dimension: dimensionKey,
      maxPoints: 3,
      randomizeOptions: false,
      explanation: answerExplanations[question.number] || '',
      options: optionSource.map(([key, text, points]) => ({
        key: key.toLowerCase(),
        text: key === 'NA' ? text : `${key}. ${sentenceCase(text)}`,
        points,
        correct: points === 3,
        excluded: points === null,
        dimensionScores: points === null ? {} : { [dimensionKey]: points }
      }))
    };
  });

  const instrument = {
    id: slug,
    slug,
    version: 1,
    locale: 'en',
    title: frontmatter.title,
    language: 'en',
    introduction: {
      subtitle: metadata.Format ? `${metadata.Format}. ${metadata['Estimated duration']}.` : metadata['Estimated duration'],
      description: `<p>${frontmatter.summary}</p><p>This educational diagnostic runs entirely in your browser. You receive the baseline result without account creation or email.</p>`,
      duration: family === 'knowledge'
        ? `${instrumentQuestions.length} questions. Approximately ${metadata['Estimated duration'] || '6 min'}.`
        : `${instrumentQuestions.length} diagnostic questions plus ${dimensionObjects.length} evidence checks. Approximately ${metadata['Estimated duration'] || '6 min'}.`,
      privacyNote: 'Your answers stay in this browser. The result belongs to you. Sharing is explicit and share-safe.',
      disclaimer: 'Educational diagnostic only. Not legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.',
      startButton: family === 'knowledge' ? 'Start the challenge' : 'Start assessment'
    },
    deliberationText: family === 'knowledge' ? 'Checking your answers...' : 'Calculating your diagnostic...',
    questions: instrumentQuestions,
    scoring: {
      type: 'profile',
      family,
      resultMode: 'balanced-index',
      maxPointsPerQuestion: 3,
      minimumAnsweredPerDimension: 1,
      dimensions: dimensionObjects
    },
    banner: {
      title: 'Outfinity Diagnostic',
      message: 'Private-by-design business diagnostics by Outfinity Venture Validation Studio.',
      ctaText: 'Explore Outfinity',
      ctaUrl: 'https://outfinity.ch/'
    }
  };

  if (/responsible-ai-eu-swiss/i.test(slug)) {
    instrument.contextTitle = 'Context';
    instrument.contextQuestions = [
      {
        id: 'jurisdiction',
        text: 'Which jurisdiction context should frame your result?',
        options: [
          { value: 'eu-eea', text: 'EU/EEA' },
          { value: 'switzerland', text: 'Switzerland' },
          { value: 'uk', text: 'UK' },
          { value: 'other', text: 'Other or uncertain' }
        ]
      },
      {
        id: 'role',
        text: 'Which AI role is closest to your organisation?',
        options: [
          { value: 'provider', text: 'Provider' },
          { value: 'deployer', text: 'Deployer' },
          { value: 'importer-distributor', text: 'Importer/distributor' },
          { value: 'uncertain', text: 'Uncertain' }
        ]
      }
    ];
  }

  if (family !== 'knowledge') {
    instrument.contextTitle = instrument.contextTitle || 'Evidence confidence';
    instrument.contextQuestions = [
      ...(instrument.contextQuestions || []),
      ...dimensionObjects.map(dimension => ({
        id: `evidence-${dimension.key}`,
        text: `What level of evidence supports your answers for ${dimension.label}?`,
        options: evidenceOptions
      }))
    ];
  }

  const interpretation = {
    resultKicker: family === 'knowledge' ? 'Your Knowledge Result' : 'Your Readiness Result',
    levels: levels.map(level => ({
      id: kebab(level.label),
      min: level.min,
      max: level.max,
      label: level.label,
      copy: levelCopy[level.label] || ''
    })),
    archetypes: Object.fromEntries(Object.entries(archetypes).map(([label, value]) => [dimensionKeyByLabel.get(label) || kebab(label), value])),
    recommendations: Object.fromEntries(Object.entries(recommendations).map(([label, value]) => [dimensionKeyByLabel.get(label) || kebab(label), value])),
    defaultSecondAction: 'Retake the diagnostic after a focused 30-day improvement cycle and compare only your own progress unless a team comparison is explicitly agreed.',
    reflectionQuestion: 'Which assumption behind your weakest dimension deserves the fastest evidence check?',
    methodologyNote: 'Version 1 uses four dimensions with two questions each. Dimension scores are normalised to 0-100. The balanced index weights 70% average dimension performance and 30% the weakest dimension. No percentile or benchmark is shown until a compatible sample exists.',
    shareNote: 'Share cards reveal only the level and strongest area. They do not publish individual answers, sensitive weaknesses, legal or financial details, security gaps, or family-specific information.'
  };

  const index = buildIndexHtml(frontmatter.title, frontmatter.summary, slug, domain);
  const catalog = {
    slug: `quizzes/${slug}`,
    title: frontmatter.title,
    promise: frontmatter.summary,
    duration: metadata['Estimated duration'] || '~6 min',
    durationCategory: durationCategory(metadata['Estimated duration']),
    questions: instrumentQuestions.length + (instrument.contextQuestions ? instrument.contextQuestions.length : 0),
    type: methodType,
    domain,
    priority: metadata.Priority || '',
    audience: metadata.Public || '',
    hasRecommendation: false,
    license: 'CC BY 4.0',
    description: `${metadata.Format || 'Assessment'} across ${dimensions.join(', ')}. Four-dimensional radar result, balanced index, level label, strongest-dimension archetype, weakest-dimension 30-day action, and separate evidence-confidence checks.`,
    ogTitle: `${frontmatter.title} - Outfinity Quiz`,
    ogDescription: frontmatter.summary
  };

  const outDir = path.join(quizzesDir, slug);
  fs.mkdirSync(outDir, { recursive: true });
  writeJson(path.join(outDir, 'instrument.json'), instrument);
  writeJson(path.join(outDir, 'interpretation.json'), interpretation);
  writeJson(path.join(outDir, 'catalog.json'), catalog);
  fs.writeFileSync(path.join(outDir, 'index.html'), index);
  generatedCatalog.push(catalog);
}

const existingCatalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const generatedSlugs = new Set(generatedCatalog.map(item => item.slug));
const merged = existingCatalog.filter(item => !generatedSlugs.has(item.slug)).concat(generatedCatalog);
merged.sort((a, b) => {
  const domainDiff = (domainSortOrder[a.domain] || 999) - (domainSortOrder[b.domain] || 999);
  if (domainDiff !== 0) return domainDiff;
  return a.title.localeCompare(b.title);
});
writeJson(catalogPath, merged);

console.log(`Generated ${generatedCatalog.length} diagnostic quizzes.`);

function buildMaturityOptions(prompt, dimension) {
  const lower = prompt.toLowerCase();

  if (/how quickly|how rapidly|how frequently|how often/.test(lower)) {
    return [
      ['A', 'It happens rarely, reactively, or only when a crisis forces attention.', 0],
      ['B', 'It happens occasionally, but timing depends on individual initiative or urgency.', 1],
      ['C', 'There is a defined cadence with clear participants, owners, and triggers.', 2],
      ['D', 'The cadence is frequent enough to change decisions, includes quality checks, and improves from outcomes.', 3],
      ['NA', 'Not sure / not applicable.', null]
    ];
  }

  if (/evidence|validated|substantiated|proof|reliable|trustworthy|quality/.test(lower)) {
    return [
      ['A', 'The answer relies mainly on opinion, pitch, memory, or isolated examples.', 0],
      ['B', 'There are supporting examples, but sources are partial, informal, or hard to compare.', 1],
      ['C', 'There is documented evidence from relevant customers, operations, metrics, or records.', 2],
      ['D', 'The evidence is triangulated, current, owner-reviewed, and strong enough to change a material decision.', 3],
      ['NA', 'Not sure / not applicable.', null]
    ];
  }

  if (/decision|authority|rights|governance|owner|accountability|approval|board|committee/.test(lower)) {
    return [
      ['A', 'Authority is unclear, improvised, or concentrated in one person.', 0],
      ['B', 'The practice is informal; boundaries, escalation, or records are inconsistent.', 1],
      ['C', 'Owners, decision rules, and review points are documented for important cases.', 2],
      ['D', 'Authority, evidence standards, exception handling, and periodic review are governed.', 3],
      ['NA', 'Not sure / not applicable.', null]
    ];
  }

  if (/financial|cash|runway|economics|margin|pricing|revenue|forecast|dilution|portfolio|liquidity|allocation/.test(lower)) {
    return [
      ['A', 'There is no usable model; the answer is unknown or based on rough intuition.', 0],
      ['B', 'There is an estimate, but assumptions, sensitivity, and ownership are weak.', 1],
      ['C', 'The model uses current inputs, documented assumptions, and regular review.', 2],
      ['D', 'The model is scenario-tested, tied to triggers and decisions, and reconciled with reliable source data.', 3],
      ['NA', 'Not sure / not applicable.', null]
    ];
  }

  if (/customer|market|segment|buyer|icp|demand|channel|sales|pipeline|positioning|message/.test(lower)) {
    return [
      ['A', 'The answer is broad, assumed, or based mostly on internal belief.', 0],
      ['B', 'There is a high-level description, but segmentation, trigger, or buyer evidence is thin.', 1],
      ['C', 'The answer is defined for a specific segment with documented behaviour, alternatives, and decision criteria.', 2],
      ['D', 'The answer is validated across repeated cases and directly informs targeting, messaging, prioritisation, and trade-offs.', 3],
      ['NA', 'Not sure / not applicable.', null]
    ];
  }

  if (/risk|security|privacy|incident|recover|contingency|resilience|dependency|control|compliance|regulatory/.test(lower)) {
    return [
      ['A', 'The area is mostly unmapped, reactive, or dependent on informal trust.', 0],
      ['B', 'The area is known in broad terms, but controls, owners, or evidence are incomplete.', 1],
      ['C', 'Owners, controls, thresholds, and response or remediation paths are documented.', 2],
      ['D', 'Controls are tested, monitored, reviewed after incidents or changes, and integrated into operating governance.', 3],
      ['NA', 'Not sure / not applicable.', null]
    ];
  }

  if (/data|technology|system|instrumentation|metrics|monitor|measurement|reporting|documentation|model/.test(lower)) {
    return [
      ['A', 'The information is fragmented, missing, or too inconsistent to support decisions.', 0],
      ['B', 'Partial tools or reports exist, but definitions and ownership are weak.', 1],
      ['C', 'Definitions, owners, access rules, and regular review are governed.', 2],
      ['D', 'Lineage, quality controls, exception handling, and a feedback loop into decisions exist.', 3],
      ['NA', 'Not sure / not applicable.', null]
    ];
  }

  return [
    ['A', 'No reliable practice exists yet; the answer depends on intuition or one-off effort.', 0],
    ['B', 'There is an informal practice, but it depends on individuals and has weak repeatability.', 1],
    ['C', 'The practice is documented, repeatable, and used in important decisions.', 2],
    ['D', 'The practice is governed, evidence-backed, measured, and continuously improved.', 3],
    ['NA', 'Not sure / not applicable.', null]
  ];
}

function sentenceCase(text) {
  const value = String(text || '').trim();
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  const result = {};
  if (!match) return result;
  for (const line of match[1].split('\n')) {
    const [, key, value] = line.match(/^([^:]+):\s*(.*)$/) || [];
    if (key) result[key.trim()] = value.trim();
  }
  return result;
}

function parseMetadata(source) {
  const section = between(source, '### Instrument Metadata', '### Dimensions');
  const result = {};
  for (const row of tableRows(section)) {
    if (row.length >= 2 && row[0] !== 'Field') result[row[0]] = row[1];
  }
  return result;
}

function parseNumberedListAfter(source, heading) {
  const section = source.slice(source.indexOf(heading));
  const stop = section.search(/\n### |\n## /);
  const text = stop >= 0 ? section.slice(0, stop) : section;
  return text.split('\n')
    .map(line => (line.match(/^\d+\.\s+(.+)$/) || [])[1])
    .filter(Boolean);
}

function parseQuestions(source) {
  const section = between(source, '### Public Questions and Answer Model', '### Answer Key and Explanations') ||
    between(source, '### Public Questions and Answer Model', '### Scoring Contract');
  return tableRows(section)
    .filter(row => /^\d+$/.test(row[0]))
    .map(row => ({
      number: Number(row[0]),
      dimension: row[1],
      prompt: row[2]
    }));
}

function parseLevels(source) {
  const section = between(source, 'Level bands:', '### Result Contract');
  return tableRows(section)
    .filter(row => /^[0-9]+-[0-9]+$/.test(row[0]))
    .map(row => {
      const [min, max] = row[0].split('-').map(Number);
      return { min, max, label: row[1] };
    });
}

function parseMapping(source, marker) {
  const start = source.indexOf(marker);
  if (start < 0) return {};
  const section = source.slice(start, source.indexOf('\n\n', start + marker.length) > -1 ? source.indexOf('\n\n', start + marker.length) : undefined);
  const result = {};
  for (const row of tableRows(section)) {
    if (row.length >= 2 && !/Dimension|Level|Weakest/.test(row[0])) {
      result[row[0]] = row[1];
    }
  }
  return result;
}

function parseAnswerExplanations(source) {
  const section = between(source, '### Answer Key and Explanations', '### Scoring Contract');
  const result = {};
  for (const line of section.split('\n')) {
    const match = line.match(/^-\s*(\d+):\s*[A-D],\s*(.+)$/);
    if (match) result[Number(match[1])] = match[2].replace(/\.$/, '.');
  }
  return result;
}

function tableRows(section) {
  return section.split('\n')
    .filter(line => /^\|/.test(line))
    .map(line => line.split('|').slice(1, -1).map(cell => cell.trim()))
    .filter(row => !row.every(cell => /^-+$/.test(cell)));
}

function between(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  if (start < 0) return '';
  const afterStart = start + startMarker.length;
  const end = source.indexOf(endMarker, afterStart);
  return end < 0 ? source.slice(afterStart) : source.slice(afterStart, end);
}

function kebab(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function durationCategory(duration) {
  const first = Number((String(duration || '').match(/[0-9]+/) || [6])[0]);
  if (first < 2) return 'short';
  if (first <= 5) return 'medium';
  return 'long';
}

function writeJson(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

function buildIndexHtml(title, description, slug, domain) {
  const escapedTitle = escapeHtml(title);
  const escapedDescription = escapeHtml(description);
  const category = escapeHtml(domain.replace(/-/g, ' '));
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapedTitle} - Outfinity Quiz</title>
  <meta name="description" content="${escapedDescription}">
  <meta property="og:title" content="${escapedTitle} - Outfinity Quiz">
  <meta property="og:description" content="${escapedDescription}">
  <meta property="og:image" content="../../assets/og-default.png">
  <meta property="og:url" content="https://quiz.outfinity.ch/quizzes/${slug}/">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self'; font-src 'none'; object-src 'none'; frame-src 'none'; form-action 'none'; base-uri 'none';">
  <meta name="referrer" content="no-referrer">
  <link rel="icon" href="../../assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../../styles.css">
  <link rel="stylesheet" href="../../engine/quiz-styles.css">
</head>
<body>
  <header class="site-header">
    <a href="../../index.html" class="site-header__logo">
      <svg width="28" height="28" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="50" cy="50" r="8" fill="currentColor"/>
        <line x1="50" y1="5" x2="50" y2="25" stroke="currentColor" stroke-width="2"/>
        <line x1="50" y1="75" x2="50" y2="95" stroke="currentColor" stroke-width="2"/>
        <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" stroke-width="2"/>
        <line x1="75" y1="50" x2="95" y2="50" stroke="currentColor" stroke-width="2"/>
      </svg>
      <span>Outfinity Quiz</span>
    </a>
    <nav class="site-header__nav">
      <a href="../../index.html">Home</a>
      <a href="../../sitemap.html">All Quizzes</a>
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme" title="Toggle theme">☀</button>
    </nav>
  </header>

  <main id="quiz-container">
    <nav class="breadcrumb" style="width:var(--editorial);margin:var(--space-md) auto 0;">
      <a href="../../index.html">Home</a>
      <span class="breadcrumb__sep">›</span>
      <a href="../../sitemap.html#${domain}">${category}</a>
      <span class="breadcrumb__sep">›</span>
      <span class="breadcrumb__current">${escapedTitle}</span>
    </nav>
  </main>

  <footer class="site-footer">
    <nav>
      <a href="../../index.html">Home</a>
      <a href="../../privacy/index.html">Privacy</a>
    </nav>
    <p class="site-footer__disclaimer">AI was used in coding and processing these quizzes. The inspiration and sources are real, but errors may have slipped through. If you find something wrong, please <a href="mailto:quiz@outfinity.ch">send us feedback</a>.</p>
    <p>An initiative by <a href="https://outfinity.ch" target="_blank" rel="noopener noreferrer">Outfinity Venture Validation Studio</a>.</p>
  </footer>

  <script type="module">
    import { mountStandardDiagnosticPage } from '../../engine/standard-diagnostic-page.js';
    mountStandardDiagnosticPage();
  </script>
  <script>
    (function(){var t=document.getElementById('theme-toggle'),h=document.documentElement,s=localStorage.getItem('quiz-theme');if(s){h.setAttribute('data-theme',s);t.textContent=s==='dark'?'☾':'☀';}t.addEventListener('click',function(){var c=h.getAttribute('data-theme'),n=c==='dark'?'light':'dark';h.setAttribute('data-theme',n);localStorage.setItem('quiz-theme',n);t.textContent=n==='dark'?'☾':'☀';});})();
  </script>
  <script>
    (function() {
      var s = document.createElement('script');
      s.src = '../../partials/footer-loader.js';
      s.async = true;
      document.body.appendChild(s);
    })();
  </script>
</body>
</html>
`;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
