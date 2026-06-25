---
id: DS049
title: Growth Experimentation Maturity
status: implemented
owner: outfinity
summary: Growth experimentation maturity diagnostic for measurement, portfolio, experiment design, and learning velocity.
---

# Growth Experimentation Maturity

## Introduction

Growth Experimentation Maturity is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Growth, product, marketing, and revenue teams; founders and innovation units |
| Category | Marketing, growth, sales, and leadership |
| Format | Experimentation maturity assessment |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /growth-experimentation-maturity-assessment |
| SEO focus | growth experimentation maturity; experimentation assessment; growth team assessment; A B testing maturity |
| Viral mechanic | Team-level score around whether the team is experimenting or just shipping changes. |

### Dimensions

1. Measurement & Metric Quality
2. Portfolio & Prioritisation
3. Experiment Design
4. Learning Velocity

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Measurement & Metric Quality | How reliable is measurement across the critical growth funnel? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Measurement & Metric Quality | How are success and guardrail metrics chosen? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Portfolio & Prioritisation | How is the experiment backlog created? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Portfolio & Prioritisation | How are experiments prioritised? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Experiment Design | How specific is the experiment hypothesis? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Experiment Design | How well does the design support causal interpretation? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Learning Velocity | How rapidly does the team complete decision-relevant learning cycles? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Learning Velocity | How is learning retained and reused? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Measurement & Metric Quality | How quickly can the team detect a broken or biased growth metric? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Portfolio & Prioritisation | How balanced is the experiment portfolio across acquisition, activation, retention, and revenue? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Experiment Design | How clearly is the riskiest assumption isolated in each experiment? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Learning Velocity | How often does a losing experiment produce a useful decision? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Random Acts |
| 25-44 | Campaign-Led |
| 45-64 | Experimental |
| 65-84 | Learning Engine |
| 85-100 | Compounding Growth |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Measurement & Metric Quality | Measurement Engineer |
| Portfolio & Prioritisation | Portfolio Prioritiser |
| Experiment Design | Experiment Scientist |
| Learning Velocity | Learning Accelerator |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Measurement & Metric Quality | Govern the critical funnel and define one primary, one leading, and two guardrail metrics. |
| Portfolio & Prioritisation | Rebuild the backlog around explicit problems and expected value of information. |
| Experiment Design | Pre-register hypothesis, population, threshold, sample, duration, and decision rule. |
| Learning Velocity | Measure question-to-decision cycle time and maintain a reusable evidence repository. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Random Acts | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Campaign-Led | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Experimental | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Learning Engine | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Compounding Growth | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Growth Experimentation Maturity is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
