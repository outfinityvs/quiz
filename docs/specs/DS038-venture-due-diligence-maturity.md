---
id: DS038
title: Venture Due Diligence Maturity
status: implemented
owner: outfinity
summary: Venture diligence maturity diagnostic from market evidence to traceable investment decision.
---

# Venture Due Diligence Maturity

## Introduction

Venture Due Diligence Maturity is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Angel groups, micro-VCs, family offices, corporate venture teams, and investment analysts |
| Category | Investors, portfolios, and family capital |
| Format | Process maturity assessment |
| Priority | P1 |
| Estimated duration | 7 min |
| Public slug | /venture-due-diligence-maturity-assessment |
| SEO focus | venture capital due diligence checklist; startup investment due diligence; VC diligence assessment |
| Viral mechanic | Professional self-benchmark and team comparison of diligence blind spots. |

### Dimensions

1. Market & Advantage
2. Team & Execution
3. Product & Technology
4. Economics & Risk

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Market & Advantage | How is market size and growth validated? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Market & Advantage | How are competition and durable advantage assessed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Team & Execution | How deeply is the founding team evaluated? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Team & Execution | How is execution capacity separated from founder charisma? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Product & Technology | How is product value validated? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Product & Technology | How are technical, security, and IP risks reviewed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Economics & Risk | How are unit economics and financing requirements stress-tested? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Economics & Risk | How is the final investment decision documented? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Narrative-Led |
| 25-44 | Checklist |
| 45-64 | Evidence-Led |
| 65-84 | IC-Ready |
| 85-100 | Institutional |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Market & Advantage | Market Analyst |
| Team & Execution | People Assessor |
| Product & Technology | Product Examiner |
| Economics & Risk | Risk Underwriter |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Market & Advantage | Replace generic market sizing with a bottom-up model and an explicit alternative/competitor map. |
| Team & Execution | Use role-specific founder references and behavioural evidence before the partner discussion. |
| Product & Technology | Create a risk-proportionate product, technical, data, and security review checklist. |
| Economics & Risk | Adopt a decision memo that records scenarios, probabilities, dissent, and post-investment conditions. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Narrative-Led | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Checklist | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Evidence-Led | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| IC-Ready | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Institutional | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Venture Due Diligence Maturity is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
