---
id: DS050
title: B2B Sales Engine Readiness
status: implemented
owner: outfinity
summary: B2B sales engine readiness diagnostic for ICP, qualification, conversion, enablement, handoff, forecasting, and retention.
---

# B2B Sales Engine Readiness

## Introduction

B2B Sales Engine Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | B2B founders, sales leaders, revenue operations, customer success, and investors |
| Category | Marketing, growth, sales, and leadership |
| Format | Revenue maturity assessment |
| Priority | P1 |
| Estimated duration | 6 min |
| Public slug | /b2b-sales-readiness-assessment |
| SEO focus | B2B sales readiness assessment; sales maturity model; startup sales process assessment |
| Viral mechanic | Direct score around whether the sales engine is scalable. |

### Dimensions

1. ICP & Qualification
2. Process & Conversion
3. Enablement & Customer Handoff
4. Forecasting & Retention

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add answer-support context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | ICP & Qualification | How precisely are target accounts and non-fit accounts defined? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | ICP & Qualification | How consistently are opportunities qualified? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Process & Conversion | How objective are sales stages? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Process & Conversion | How well are conversion and cycle dynamics understood? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Enablement & Customer Handoff | How repeatable are discovery, demonstration, and proof? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Enablement & Customer Handoff | How reliable is the transition from sale to onboarding and customer success? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Forecasting & Retention | How evidence-based is the forecast? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Forecasting & Retention | How tightly is new sales connected to retention and expansion quality? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Founder-Led Chaos |
| 25-44 | Repeatable Motion |
| 45-64 | Managed Engine |
| 65-84 | Predictable Engine |
| 85-100 | Scalable Revenue System |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and answer-support language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| ICP & Qualification | Qualification Architect |
| Process & Conversion | Process Builder |
| Enablement & Customer Handoff | Enablement Coach |
| Forecasting & Retention | Revenue Forecaster |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| ICP & Qualification | Publish ICP, trigger, disqualification, and evidence-based qualification standards. |
| Process & Conversion | Replace activity stages with customer-evidence exit criteria and segment conversion analysis. |
| Enablement & Customer Handoff | Build an observed competency playbook and a mutual success-plan handoff. |
| Forecasting & Retention | Calibrate forecasts against outcomes and connect sales quality to retention and expansion. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Founder-Led Chaos | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Repeatable Motion | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Managed Engine | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Predictable Engine | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Scalable Revenue System | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

B2B Sales Engine Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
