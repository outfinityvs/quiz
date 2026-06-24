---
id: DS045
title: Product-Market Fit Evidence
status: implemented
owner: outfinity
summary: PMF evidence diagnostic separating fit evidence from enthusiasm, growth, and temporary demand.
---

# Product-Market Fit Evidence

## Introduction

Product-Market Fit Evidence is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Startup founders, product leaders, growth teams, accelerators, and early-stage investors |
| Category | Product, discovery, and monetisation |
| Format | Evidence maturity assessment |
| Priority | P1 |
| Estimated duration | 6 min |
| Public slug | /product-market-fit-assessment |
| SEO focus | product market fit assessment; PMF test; how to measure product market fit; product market fit score |
| Viral mechanic | Strong curiosity hook around whether the startup really has PMF. |

### Dimensions

1. Retention & Behaviour
2. Demand Pull & Willingness to Pay
3. Segment Clarity
4. Repeatable Acquisition

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add answer-support context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Retention & Behaviour | What does retention look like for the most relevant customer cohort? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Retention & Behaviour | How central is the product to the customer recurring workflow or outcome? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Demand Pull & Willingness to Pay | What evidence demonstrates willingness to pay or expand? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Demand Pull & Willingness to Pay | How much demand arrives without continuous founder persuasion? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Segment Clarity | How clearly can you identify the segment with the strongest fit? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Segment Clarity | How consistent is the primary use case within that segment? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Repeatable Acquisition | How repeatable are customer acquisition and conversion? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Repeatable Acquisition | How well do you understand why customers churn or fail to activate? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Hypothesis |
| 25-44 | Early Signal |
| 45-64 | Emerging Fit |
| 65-84 | Strong Fit |
| 85-100 | Repeatable Fit |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and answer-support language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Retention & Behaviour | Retention Analyst |
| Demand Pull & Willingness to Pay | Demand Pull Reader |
| Segment Clarity | Segment Specialist |
| Repeatable Acquisition | Acquisition Builder |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Retention & Behaviour | Build cohort retention by segment and define the recurring behaviour that represents realised value. |
| Demand Pull & Willingness to Pay | Test standard pricing, renewal, and expansion, not only enthusiasm or subsidised pilots. |
| Segment Clarity | Choose the highest-fit segment and publish explicit non-fit criteria internally. |
| Repeatable Acquisition | Prove one channel repeatability with conversion, sales cycle, payback, and saturation indicators. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Hypothesis | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Early Signal | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Emerging Fit | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Strong Fit | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Repeatable Fit | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Product-Market Fit Evidence is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
