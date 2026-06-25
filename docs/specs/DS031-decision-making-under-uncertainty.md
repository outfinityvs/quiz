---
id: DS031
title: Decision-Making Under Uncertainty
status: implemented
owner: outfinity
summary: Decision-quality assessment for probability, evidence, reversibility, speed, bias control, and learning.
---

# Decision-Making Under Uncertainty

## Introduction

Decision-Making Under Uncertainty is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, executives, product leaders, investors, and innovation teams |
| Category | Founders, self-knowledge, and operating mode |
| Format | Scenario-based maturity assessment |
| Priority | P2 |
| Estimated duration | 7-9 min |
| Public slug | /decision-making-under-uncertainty-test |
| SEO focus | decision making under uncertainty assessment; business decision style test; probabilistic thinking quiz |
| Viral mechanic | Business scenarios with feedback on overconfidence and decision style. |

### Dimensions

1. Probabilistic Thinking
2. Evidence Quality
3. Reversibility & Speed
4. Bias Control & Learning

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Probabilistic Thinking | When forecasting a critical milestone, how do you express uncertainty? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Probabilistic Thinking | How often do you use relevant base rates before relying on the specifics of your case? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Evidence Quality | What evidence receives the greatest weight in a strategic decision? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Evidence Quality | How do you distinguish signal from noise in early data? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Reversibility & Speed | A reversible decision has moderate downside and high learning value. What happens? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Reversibility & Speed | How do you approach a difficult-to-reverse decision? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Bias Control & Learning | How is a preferred strategy challenged before commitment? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Bias Control & Learning | What happens after the outcome of an important decision becomes known? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Probabilistic Thinking | How are forecasts updated when new evidence arrives? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Evidence Quality | How do you separate customer evidence from internal enthusiasm? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Reversibility & Speed | How explicitly do you choose between speed, reversibility, and downside? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Bias Control & Learning | How are decision lessons captured before the story gets rewritten? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Intuitive |
| 25-44 | Reactive |
| 45-64 | Structured |
| 65-84 | Probabilistic |
| 85-100 | Calibrated |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Probabilistic Thinking | Probability Thinker |
| Evidence Quality | Evidence Hunter |
| Reversibility & Speed | Fast Reversible Operator |
| Bias Control & Learning | Bias Breaker |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Probabilistic Thinking | Express the next three forecasts as ranges with probabilities and record when they should be updated. |
| Evidence Quality | Create an evidence ladder and require one disconfirming source for the next major decision. |
| Reversibility & Speed | Classify recurring decisions by reversibility and assign guardrails and expected decision speed. |
| Bias Control & Learning | Introduce independent estimates, a premortem, and a quarterly calibration review. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Intuitive | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Reactive | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Structured | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Probabilistic | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Calibrated | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Decision-Making Under Uncertainty is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
