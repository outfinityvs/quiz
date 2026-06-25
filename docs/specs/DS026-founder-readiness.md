---
id: DS026
title: Founder Readiness Radar
status: implemented
owner: outfinity
summary: Founder readiness diagnostic across opportunity evidence, execution, resourcefulness, economics, and resilience.
---

# Founder Readiness Radar

## Introduction

Founder Readiness Radar is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Aspiring founders, first-time founders, accelerators, and entrepreneurship programmes |
| Category | Founders, self-knowledge, and operating mode |
| Format | Maturity assessment |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /founder-readiness-assessment |
| SEO focus | founder readiness assessment; am I ready to start a business; entrepreneur self assessment |
| Viral mechanic | Status-oriented founder-ready score, radar card, and shareable founder archetype. |

### Dimensions

1. Opportunity Insight
2. Execution Discipline
3. Resourcefulness & Economics
4. Resilience & Sustainability

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Opportunity Insight | How strong is your evidence that the target problem is urgent? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Opportunity Insight | How precisely can you define the first customer segment and buying trigger? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Execution Discipline | How do you choose the most important outcome for the coming week? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Execution Discipline | How frequently do you ship something that can change a decision? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Resourcefulness & Economics | What happens when a critical resource is missing? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Resourcefulness & Economics | How well do you understand runway and the economics of the next milestone? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Resilience & Sustainability | How do you react to evidence that contradicts your preferred idea? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Resilience & Sustainability | How sustainable is your current way of working? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Opportunity Insight | What evidence shows the first segment is actively trying to solve the problem now? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Execution Discipline | How consistently do weekly priorities turn into shipped learning? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Resourcefulness & Economics | How quickly can you convert a constraint into a concrete alternative? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Resilience & Sustainability | How deliberately do you protect attention and recovery during pressure? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Dreamer |
| 25-44 | Starter |
| 45-64 | Builder |
| 65-84 | Operator |
| 85-100 | Venture-Ready |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Opportunity Insight | Customer Detective |
| Execution Discipline | Execution Architect |
| Resourcefulness & Economics | Resource Hacker |
| Resilience & Sustainability | Resilient Builder |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Opportunity Insight | Run 15 problem interviews in one narrow segment and document repeated pains, triggers, and current alternatives. |
| Execution Discipline | Introduce a weekly outcome, one hypothesis-driven experiment, and a decision log. |
| Resourcefulness & Economics | Create a 13-week cash forecast and a map of people, partners, channels, and non-cash resources. |
| Resilience & Sustainability | Define personal risk signals, protected recovery time, and one task to delegate or stop this month. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Dreamer | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Starter | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Builder | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Operator | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Venture-Ready | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Founder Readiness Radar is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
