---
id: DS058
title: Early Adopters & Customer Development
status: implemented
owner: outfinity
summary: Knowledge challenge connecting early adopters, Crossing the Chasm, and Customer Development principles.
---

# Early Adopters & Customer Development

## Introduction

Early Adopters & Customer Development is an Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, clinical, forensic, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, product leaders, startup teams, accelerators, and venture studios |
| Category | Product, market adoption, and customer development |
| Format | Knowledge quiz |
| Priority | P1 |
| Estimated duration | 8-10 min |
| Public slug | /early-adopter-customer-development-quiz |
| SEO focus | early adopter quiz; crossing the chasm quiz; customer development quiz; four steps to the epiphany |
| Viral mechanic | Challenge framing around whether the user understands early-market adoption before scaling. |

### Dimensions

1. Adopter Segmentation
2. Chasm & Whole Product
3. Customer Discovery
4. Customer Validation

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Adopter Segmentation | Which description best identifies an early adopter? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 2 | Adopter Segmentation | What is the main risk of confusing visionaries with pragmatists? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 3 | Adopter Segmentation | Which signal best suggests a beachhead segment is worth focus? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 4 | Chasm & Whole Product | What does the chasm represent in early-market strategy? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 5 | Chasm & Whole Product | Why does whole-product thinking matter for pragmatist buyers? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 6 | Chasm & Whole Product | Which go-to-market move best fits chasm strategy? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 7 | Customer Discovery | What is Customer Discovery primarily trying to learn? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 8 | Customer Discovery | Which interview question is strongest during discovery? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 9 | Customer Discovery | When discovery contradicts the original idea, what should happen? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 10 | Customer Validation | What does Customer Validation test? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 11 | Customer Validation | Which evidence is strongest before scaling sales? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 12 | Customer Validation | What should happen if customer validation fails? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |

### Answer Key and Explanations

- 1: B, Early adopters usually have urgent pain, seek alternatives, tolerate incompleteness, and can influence the next reference group.
- 2: B, Visionaries may accept novelty and custom work, while pragmatists often need references, risk reduction, and a complete solution.
- 3: C, A strong beachhead has repeated pain, reachable buyers, similar use cases, and references that matter inside the segment.
- 4: A, The chasm is the difficult transition from visionary early adopters to pragmatic early majority buyers.
- 5: B, Pragmatists want the complete solution needed to solve the business problem, not just a promising core technology.
- 6: B, Chasm strategy favours a focused beachhead where the company can win references before expanding.
- 7: B, Customer Discovery tests whether the problem, customer, and buying context are real before scaling execution.
- 8: C, Behavioural questions about recent real situations produce better evidence than opinions about hypothetical products.
- 9: B, Contradictory discovery evidence should update segmentation, problem framing, or solution assumptions.
- 10: B, Customer Validation tests whether a repeatable sales process and business model can work with real customers.
- 11: A, Repeatable conversion in a narrow segment is stronger than scattered one-off enthusiasm.
- 12: B, Failed validation should trigger a return to discovery or a pivot in customer, problem, product, or go-to-market assumptions.

### Scoring Contract

Each option carries 0-3 points. The best answer receives 3 points and a deliberately plausible but incomplete answer may receive 1 point only when the explanation justifies it. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. Overall mastery uses the balanced index: 0.70 * mean(dimensions) + 0.30 * weakestDimension. The answer key and points must not be visible before completion.

Level bands:

| Score | Level |
| --- | --- |
| 0-39 | Concept Curious |
| 40-59 | Concept Literate |
| 60-74 | Operator |
| 75-89 | Strategist |
| 90-100 | Fluent |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Adopter Segmentation | Segment Reader |
| Chasm & Whole Product | Whole-Product Thinker |
| Customer Discovery | Discovery Operator |
| Customer Validation | Validation Builder |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Adopter Segmentation | Write one early-adopter profile based on urgent pain, current workaround, budget, and reference behaviour. |
| Chasm & Whole Product | Define the smallest complete solution for one beachhead segment, including services, integrations, proof, and support. |
| Customer Discovery | Run discovery around problem, workflow, alternatives, and buying trigger before presenting the solution. |
| Customer Validation | Test whether a repeatable sales motion exists before scaling marketing or hiring a full sales team. |

The share card must be private by default. It may show the level, strongest dimension, archetype, or challenge invitation. It must not publish sensitive weaknesses, answer-level errors, legal or financial details, security gaps, regulatory risk flags, or individual dark-pattern item responses.

Reference sources for content framing:

- Wikipedia: Crossing the Chasm: https://en.wikipedia.org/wiki/Crossing_the_Chasm
- Stanford handout: The Four Steps to the Epiphany: https://web.stanford.edu/group/e145/cgi-bin/winter/drupal/upload/handouts/Four_Steps.pdf

### Implementation Notes

Implementation should reuse the existing JSON-driven quiz engine rather than creating a bespoke page runtime. The instrument should be represented through instrument.json, interpretation.json, catalog.json, and optional recommendations.json. The catalog entry must expose category, method type, estimated duration, priority, and domain filters. The result rendering must use the shared chart/diagram module and shared result layout; quiz-specific custom diagrams are supplements unless this DS explicitly says otherwise.

## Decisions & Questions

### Question #1: Should this instrument use the existing engine?

Response: Yes. The quiz must be declarative and reuse the shared browser-side engine, scoring helpers, result diagram, share-card flow, URL codec, and catalog patterns.

### Question #2: Should generic answer-support questions be added?

Response: No. Score calibration belongs inside scored answer options, concept help, methodology notes, and result guidance. Context questions are allowed only when they collect concrete inputs such as jurisdiction, role, or stage.

### Question #3: Is this instrument validated or certifying?

Response: No. It is an educational, private-by-default diagnostic or challenge. It must not claim predictive validity, professional certification, clinical status, employment suitability, or regulatory compliance.
