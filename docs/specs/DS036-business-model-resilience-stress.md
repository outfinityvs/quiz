---
id: DS036
title: Business Model Resilience Stress Test
status: implemented
owner: outfinity
summary: Business resilience stress test for demand concentration, margin, cash shock, and operational dependencies.
---

# Business Model Resilience Stress Test

## Introduction

Business Model Resilience Stress Test is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, SME leaders, investors, lenders, and family-business owners |
| Category | Finance, fundraising, and economic resilience |
| Format | Risk and resilience assessment |
| Priority | P1 |
| Estimated duration | 6 min |
| Public slug | /business-model-resilience-stress-test |
| SEO focus | business resilience assessment; business stress test; customer concentration risk calculator |
| Viral mechanic | Dramatic first-failure-mode result and stress-scenario comparison. |

### Dimensions

1. Demand Concentration
2. Margin Flexibility
3. Cash Shock Capacity
4. Operational Dependencies

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add answer-support context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Demand Concentration | How dependent is revenue on the largest customer or customer group? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Demand Concentration | How dependent is growth on a single acquisition or distribution channel? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Margin Flexibility | How well can gross margin absorb supplier, infrastructure, or service-cost increases? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Margin Flexibility | How flexible is the operating cost base during a downturn? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Cash Shock Capacity | What cash buffer exists under a realistic downside case? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Cash Shock Capacity | How rigorously are downside scenarios translated into actions? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Operational Dependencies | How dependent are critical operations on one person, supplier, or technology component? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Operational Dependencies | How rapidly could the business restore service after a major disruption? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Fragile |
| 25-44 | Exposed |
| 45-64 | Defensible |
| 65-84 | Resilient |
| 85-100 | Adaptive |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and answer-support language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Demand Concentration | Demand Diversifier |
| Margin Flexibility | Margin Engineer |
| Cash Shock Capacity | Cash Defender |
| Operational Dependencies | Dependency Reducer |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Demand Concentration | Set customer and channel concentration thresholds and fund a second repeatable demand source. |
| Margin Flexibility | Model a 10%, 20%, and 30% cost shock and pre-negotiate pricing, sourcing, or scope levers. |
| Cash Shock Capacity | Build a 13-week downside cash plan with named triggers and decision owners. |
| Operational Dependencies | Map the ten critical dependencies and test recovery for the highest-impact single point of failure. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Fragile | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Exposed | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Defensible | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Resilient | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Adaptive | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

The share card must be private by default. It may show the level, strongest dimension, archetype, or challenge invitation. It must not publish sensitive weaknesses, answer-level errors, financial or legal details, security gaps, or regulatory risk flags.

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

Business Model Resilience Stress Test is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
