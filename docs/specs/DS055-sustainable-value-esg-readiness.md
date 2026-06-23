---
id: DS055
title: Sustainable Value & ESG Readiness
status: implemented
owner: outfinity
summary: Sustainable value and ESG readiness diagnostic for materiality, governance, data, operations, claims, and reporting.
---

# Sustainable Value & ESG Readiness

## Introduction

Sustainable Value & ESG Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, SMEs, boards, investors, family offices, and sustainability leaders |
| Category | AI, governance, security, and sustainable value |
| Format | Sustainable value maturity assessment |
| Priority | P2 |
| Estimated duration | 7 min |
| Public slug | /sustainable-value-esg-readiness-assessment |
| SEO focus | ESG readiness assessment; sustainability maturity assessment; sustainable business assessment; ESG quiz |
| Viral mechanic | Credibility-oriented result around whether the sustainability strategy is real. |

### Dimensions

1. Materiality & Strategy
2. Governance & Data
3. Operations & Value Chain
4. Claims & Reporting

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Materiality & Strategy | How are material sustainability impacts, risks, and opportunities identified? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Materiality & Strategy | How tightly are material sustainability issues connected to strategy and capital allocation? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Governance & Data | How clear are governance and accountability? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Governance & Data | How reliable are sustainability data and baselines? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Operations & Value Chain | How operational are sustainability targets? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Operations & Value Chain | How deeply are suppliers, customers, and product life cycle considered? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Claims & Reporting | How well are external claims substantiated? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Claims & Reporting | How integrated are reporting and decision use? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Narrative-Only |
| 25-44 | Baseline |
| 45-64 | Managed |
| 65-84 | Integrated |
| 85-100 | Value-Creating |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Materiality & Strategy | Materiality Strategist |
| Governance & Data | ESG Data Governor |
| Operations & Value Chain | Value-Chain Improver |
| Claims & Reporting | Claims Assurer |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Materiality & Strategy | Prioritise material issues by impact, dependency, financial relevance, and stakeholder evidence. |
| Governance & Data | Assign board/executive ownership and establish data definitions, lineage, and control evidence. |
| Operations & Value Chain | Translate one material target into funded operational and value-chain milestones. |
| Claims & Reporting | Audit the highest-visibility claim for scope, method, evidence, limitations, and potential misinterpretation. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Narrative-Only | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Baseline | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Managed | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Integrated | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Value-Creating | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Sustainable Value & ESG Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
