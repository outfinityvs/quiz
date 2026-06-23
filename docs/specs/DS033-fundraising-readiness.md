---
id: DS033
title: Fundraising Readiness Radar
status: implemented
owner: outfinity
summary: Fundraising readiness diagnostic for narrative, traction, process, targeting, and deal preparation.
---

# Fundraising Readiness Radar

## Introduction

Fundraising Readiness Radar is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Pre-seed to Series A founders, accelerators, venture studios, and fundraising advisors |
| Category | Finance, fundraising, and economic resilience |
| Format | Readiness assessment |
| Priority | P1 |
| Estimated duration | 6 min |
| Public slug | /fundraising-readiness-assessment |
| SEO focus | fundraising readiness assessment; investor readiness test; startup funding checklist |
| Viral mechanic | High-intent investor-ready result benchmarked by stage and financing objective. |

### Dimensions

1. Narrative & Ambition
2. Evidence & Traction
3. Process & Targeting
4. Deal Readiness

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Narrative & Ambition | How clearly can you explain the problem, customer, and why now in one minute? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Narrative & Ambition | How credible is the venture-scale outcome? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Evidence & Traction | What evidence demonstrates current demand? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Evidence & Traction | How well do you understand the economics behind growth? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Process & Targeting | How is the investor target list constructed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Process & Targeting | How will the fundraising process be run? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Deal Readiness | How precisely are round size and use of funds linked to value-creating milestones? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Deal Readiness | How ready are corporate records, cap table, and diligence materials? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Premature |
| 25-44 | Preparing |
| 45-64 | Pitchable |
| 65-84 | Investable |
| 85-100 | Process-Ready |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Narrative & Ambition | Story Architect |
| Evidence & Traction | Evidence Builder |
| Process & Targeting | Process Conductor |
| Deal Readiness | Deal Mechanic |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Narrative & Ambition | Rewrite the pitch around customer pain, why now, wedge, and credible expansion, not product features. |
| Evidence & Traction | Select the three metrics most likely to change an investor belief and improve their evidence quality. |
| Process & Targeting | Build a partner-level investor scorecard and run outreach in a concentrated, trackable process. |
| Deal Readiness | Tie the round to milestones, update the cap table, and complete a diligence readiness review. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Premature | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Preparing | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Pitchable | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Investable | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Process-Ready | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Fundraising Readiness Radar is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
