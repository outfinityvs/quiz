---
id: DS059
title: Lean Startup Practice Readiness
status: implemented
owner: outfinity
summary: Readiness diagnostic for build-measure-learn, MVP scope, actionable metrics, and pivot discipline.
---

# Lean Startup Practice Readiness

## Introduction

Lean Startup Practice Readiness is an Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, clinical, forensic, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, product teams, startup operators, accelerators, and innovation teams |
| Category | Product, validation, and startup learning |
| Format | Maturity assessment |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /lean-startup-readiness-assessment |
| SEO focus | lean startup quiz; build measure learn assessment; MVP readiness quiz |
| Viral mechanic | Lean Startup radar for teams that want to learn before scaling. |

### Dimensions

1. Problem Hypothesis
2. MVP Learning Design
3. Actionable Metrics
4. Pivot Discipline

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Problem Hypothesis | How clearly is the riskiest customer problem hypothesis stated before building? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Problem Hypothesis | How early does the team test customer pull before product investment? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Problem Hypothesis | How explicitly are assumptions ranked by uncertainty and impact? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | MVP Learning Design | How narrowly is each MVP scoped to produce validated learning? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | MVP Learning Design | How often does the team use concierge, smoke, or prototype tests before software build? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | MVP Learning Design | How clearly are MVP limitations explained so the team does not confuse a test with a product? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Actionable Metrics | How are actionable metrics separated from vanity metrics? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Actionable Metrics | How well are cohorts, retention, or payback used to judge learning? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Actionable Metrics | How quickly does the team complete build-measure-learn loops? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Pivot Discipline | How explicitly are pivot or persevere criteria set before the test? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Pivot Discipline | How does the team handle evidence that invalidates the current strategy? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Pivot Discipline | How are lessons from failed tests reused in the next strategy choice? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Ad Hoc |
| 25-44 | Forming |
| 45-64 | Working |
| 65-84 | Operating |
| 85-100 | Venture-Ready |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Problem Hypothesis | Hypothesis Framer |
| MVP Learning Design | Lean Experimenter |
| Actionable Metrics | Learning Measurer |
| Pivot Discipline | Evidence Adapter |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Problem Hypothesis | Write the riskiest customer, problem, and value assumptions before choosing what to build. |
| MVP Learning Design | Replace the next feature build with the smallest artifact that can test the critical assumption. |
| Actionable Metrics | Define one cohort metric, one decision threshold, and one guardrail before running the next test. |
| Pivot Discipline | Set pivot, persevere, or stop criteria before the next learning cycle begins. |

The share card must be private by default. It may show the level, strongest dimension, archetype, or challenge invitation. It must not publish sensitive weaknesses, answer-level errors, legal or financial details, security gaps, regulatory risk flags, or individual dark-pattern item responses.

Reference sources for content framing:

- The Lean Startup: Methodology: https://theleanstartup.com/principles

### Implementation Notes

Implementation should reuse the existing JSON-driven quiz engine rather than creating a bespoke page runtime. The instrument should be represented through instrument.json, interpretation.json, catalog.json, and optional recommendations.json. The catalog entry must expose category, method type, estimated duration, priority, and domain filters. The result rendering must use the shared chart/diagram module and shared result layout; quiz-specific custom diagrams are supplements unless this DS explicitly says otherwise.

## Decisions & Questions

### Question #1: Should this instrument use the existing engine?

Response: Yes. The quiz must be declarative and reuse the shared browser-side engine, scoring helpers, result diagram, share-card flow, URL codec, and catalog patterns.

### Question #2: Should generic answer-support questions be added?

Response: No. Score calibration belongs inside scored answer options, concept help, methodology notes, and result guidance. Context questions are allowed only when they collect concrete inputs such as jurisdiction, role, or stage.

### Question #3: Is this instrument validated or certifying?

Response: No. It is an educational, private-by-default diagnostic or challenge. It must not claim predictive validity, professional certification, clinical status, employment suitability, or regulatory compliance.
