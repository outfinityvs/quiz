---
id: DS035
title: Term Sheet Literacy Challenge
status: implemented
owner: outfinity
summary: Term sheet literacy challenge for economic and control consequences in venture financing.
---

# Term Sheet Literacy Challenge

## Introduction

Term Sheet Literacy Challenge is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, angel investors, operators receiving equity, and startup advisors |
| Category | Finance, fundraising, and economic resilience |
| Format | Knowledge quiz |
| Priority | P1 |
| Estimated duration | 8 min |
| Public slug | /term-sheet-literacy-quiz |
| SEO focus | term sheet quiz; liquidation preference explained quiz; founder dilution test; venture financing terms |
| Viral mechanic | High-curiosity scenarios around whether the user would sign the term sheet. |

### Dimensions

1. Economics & Dilution
2. Control & Governance
3. Downside Protection
4. Process & Rights

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Economics & Dilution | An investor invests EUR 2 million at an EUR 8 million pre-money valuation. Before option-pool or convertible adjustments, what is the investor post-money ownership? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 2 | Economics & Dilution | What is the usual economic effect of increasing a pre-money option pool immediately before the financing? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 3 | Control & Governance | Why can board composition matter even when founders still own a majority of shares? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 4 | Control & Governance | What are protective provisions generally designed to do? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 5 | Downside Protection | What does a 1x non-participating liquidation preference generally provide? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 6 | Downside Protection | Compared with broad-based weighted-average anti-dilution, full-ratchet anti-dilution is generally what? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 7 | Process & Rights | What does a pro-rata right generally allow an investor to do? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 8 | Process & Rights | What is the practical purpose of a no-shop or exclusivity clause? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |

### Answer Key and Explanations

- 1: B, EUR 2m / EUR 10m post-money = 20%.
- 2: A, a pre-money pool top-up primarily dilutes existing shareholders.
- 3: B, board rights can control key corporate decisions.
- 4: A, protective provisions give consent rights over specified fundamental actions.
- 5: B, non-participating preferred chooses preference amount or as-converted proceeds.
- 6: B, full ratchet can reset conversion price to the new lower price regardless of round size.
- 7: A, pro-rata rights allow participation to maintain ownership subject to the agreement.
- 8: A, exclusivity restricts competing financing discussions for a defined period.

### Scoring Contract

Each option carries 0-3 points. The best answer receives 3 points and a deliberately plausible but incomplete answer may receive 1 point only when the explanation justifies it. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. Overall mastery uses the balanced index: 0.70 * mean(dimensions) + 0.30 * weakestDimension. Answer order may be randomised only when numeric readability is preserved. The answer key and points must not be visible before completion.

Level bands:

| Score | Level |
| --- | --- |
| 0-39 | Glossary Learner |
| 40-59 | Deal-Aware |
| 60-74 | Negotiation-Ready |
| 75-89 | Term-Sheet Fluent |
| 90-100 | Boardroom Fluent |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Economics & Dilution | Economics Reader |
| Control & Governance | Governance Reader |
| Downside Protection | Downside Reader |
| Process & Rights | Process Reader |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Economics & Dilution | Model ownership under valuation, pool, convertible, and follow-on scenarios before negotiating headline price. |
| Control & Governance | Map board composition, reserved matters, and information rights as a separate control layer. |
| Downside Protection | Model exit waterfalls under preference and anti-dilution scenarios with qualified counsel. |
| Process & Rights | Review pro-rata, information, transfer, exclusivity, and closing conditions as an integrated process. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Glossary Learner | Core concepts are unreliable; show explanations and a short learning path before high-stakes use. |
| Deal-Aware | Basic vocabulary is present, but scenario application is inconsistent; highlight recurring misconceptions. |
| Negotiation-Ready | Standard cases are handled competently; direct learning toward edge cases and assumptions. |
| Term-Sheet Fluent | Strong applied understanding; recommend advanced scenarios and peer challenge. |
| Boardroom Fluent | Advanced fluency; still flag jurisdiction-specific or high-stakes questions for specialist review. |

The share card must be private by default. It may show the level, strongest dimension, archetype, or challenge invitation. It must not publish sensitive weaknesses, answer-level errors, financial or legal details, security gaps, family-office details, or regulatory risk flags.

### Implementation Notes

Implementation should reuse the existing JSON-driven quiz engine rather than creating a bespoke page runtime. The instrument should be represented through instrument.json, interpretation.json, catalog.json, and optional recommendations.json. The catalog entry must expose category, method type, estimated duration, priority, and domain filters. The result rendering must use the shared chart/diagram module and shared result layout; quiz-specific custom diagrams are supplements unless this DS explicitly says otherwise.

## Decisions & Questions

### Question #1: Should this instrument use the existing engine?

Response: Yes. The quiz must be declarative and reuse the shared browser-side engine, scoring helpers, result diagram, share-card flow, URL codec, and catalog patterns.

### Question #2: What is the minimum viable result view?

Response: The minimum result view is a four-axis diagram, balanced score, level label, strongest-dimension archetype, weakest-dimension next upgrade, two insights, two 30-day actions, one reflection question, methodology note, limitations, and share-safe card actions.

### Question #3: Can benchmarks or percentiles be shown at launch?

Response: No. Benchmarks require at least 100 completions on the same quiz version and at least 30 responses in the displayed segment. The UI must show sample size, period, cohort criteria, and version compatibility before publishing any benchmark.

## Conclusion

Term Sheet Literacy Challenge is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
