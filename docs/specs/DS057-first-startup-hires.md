---
id: DS057
title: First Startup Hires Fit
status: implemented
owner: outfinity
summary: Readiness diagnostic for hiring early employees who fit startup ambiguity, ownership, customer proximity, and team values.
---

# First Startup Hires Fit

## Introduction

First Startup Hires Fit is an Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, clinical, forensic, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, first operators, startup candidates, venture studios, and accelerators |
| Category | Founders, hiring, and operating mode |
| Format | Readiness assessment |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /first-startup-hires-assessment |
| SEO focus | first startup hires assessment; startup hiring mindset; early employee fit quiz |
| Viral mechanic | Share-safe first-team fit radar for founder hiring conversations. |

### Dimensions

1. Ambiguity Ownership
2. Learning Pace
3. Customer & Product Proximity
4. Team Values & Resilience

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Ambiguity Ownership | How does the candidate respond when the role is only partly defined? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Ambiguity Ownership | How naturally do they turn messy work into owned outcomes? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Ambiguity Ownership | How do they behave when the founder is unavailable for a decision? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Learning Pace | How quickly do they learn a domain they have not worked in before? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Learning Pace | How do they use feedback when the first version is wrong? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Learning Pace | How well do they separate useful speed from careless rushing? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Customer & Product Proximity | How willing are they to speak directly with customers or users? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Customer & Product Proximity | How strongly do they connect their work to product and revenue learning? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Customer & Product Proximity | How do they handle evidence that customers do not care about their output? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Team Values & Resilience | How do they behave when priorities change abruptly? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Team Values & Resilience | How do they handle credit, blame, and public disagreement? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Team Values & Resilience | How do they protect team trust while moving fast? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

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
| Ambiguity Ownership | Owner in Fog |
| Learning Pace | Fast Learner |
| Customer & Product Proximity | Market-Adjacent Builder |
| Team Values & Resilience | Low-Ego Teammate |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Ambiguity Ownership | Ask candidates for a story where they created progress without a clear job description, budget, or manager decision. |
| Learning Pace | Use a work-sample task with unfamiliar constraints and inspect how the candidate asks, learns, and updates. |
| Customer & Product Proximity | Put the candidate close to a real customer problem and evaluate whether they seek evidence before polishing output. |
| Team Values & Resilience | Run reference checks for truth-telling, low-ego collaboration, and behaviour when priorities change. |

The share card must be private by default. It may show the level, strongest dimension, archetype, or challenge invitation. It must not publish sensitive weaknesses, answer-level errors, legal or financial details, security gaps, regulatory risk flags, or individual dark-pattern item responses.

### Implementation Notes

Implementation should reuse the existing JSON-driven quiz engine rather than creating a bespoke page runtime. The instrument should be represented through instrument.json, interpretation.json, catalog.json, and optional recommendations.json. The catalog entry must expose category, method type, estimated duration, priority, and domain filters. The result rendering must use the shared chart/diagram module and shared result layout; quiz-specific custom diagrams are supplements unless this DS explicitly says otherwise.

## Decisions & Questions

### Question #1: Should this instrument use the existing engine?

Response: Yes. The quiz must be declarative and reuse the shared browser-side engine, scoring helpers, result diagram, share-card flow, URL codec, and catalog patterns.

### Question #2: Should generic answer-support questions be added?

Response: No. Score calibration belongs inside scored answer options, concept help, methodology notes, and result guidance. Context questions are allowed only when they collect concrete inputs such as jurisdiction, role, or stage.

### Question #3: Is this instrument validated or certifying?

Response: No. It is an educational, private-by-default diagnostic or challenge. It must not claim predictive validity, professional certification, clinical status, employment suitability, or regulatory compliance.
