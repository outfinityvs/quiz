---
id: DS048
title: Positioning & Brand Differentiation
status: implemented
owner: outfinity
summary: Positioning and differentiation diagnostic for ICP clarity, category framing, value proof, and message learning.
---

# Positioning & Brand Differentiation

## Introduction

Positioning & Brand Differentiation is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, marketers, product marketers, consultants, and B2B revenue teams |
| Category | Marketing, growth, sales, and leadership |
| Format | Positioning maturity assessment |
| Priority | P1 |
| Estimated duration | 6 min |
| Public slug | /brand-positioning-assessment |
| SEO focus | positioning assessment; brand differentiation quiz; B2B positioning test; product positioning checklist |
| Viral mechanic | Homepage-oriented curiosity around whether ideal customers understand the offer in 10 seconds. |

### Dimensions

1. ICP & Trigger Clarity
2. Category & Alternatives
3. Value & Proof
4. Message Consistency & Learning

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add answer-support context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | ICP & Trigger Clarity | How precisely is the ideal customer profile defined? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | ICP & Trigger Clarity | How clearly is the moment that creates demand understood? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Category & Alternatives | What does the customer compare the offer against? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Category & Alternatives | How clearly is the differentiated category or frame articulated? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Value & Proof | How concrete is the value proposition? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Value & Proof | How strong is the proof behind core claims? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Message Consistency & Learning | How consistent is positioning across the customer journey? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Message Consistency & Learning | How is message effectiveness learned? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Generic |
| 25-44 | Interesting |
| 45-64 | Relevant |
| 65-84 | Differentiated |
| 85-100 | Category-Shaping |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and answer-support language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| ICP & Trigger Clarity | ICP Specialist |
| Category & Alternatives | Category Strategist |
| Value & Proof | Proof Builder |
| Message Consistency & Learning | Message Orchestrator |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| ICP & Trigger Clarity | Define one primary ICP using trigger, buying context, fit, and exclusion criteria. |
| Category & Alternatives | Map the real alternatives and write one contrast that changes the buyer evaluation criteria. |
| Value & Proof | Turn the core claim into a quantified, bounded outcome with relevant proof. |
| Message Consistency & Learning | Audit homepage, pitch, product, and sales copy and establish a message learning loop. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Generic | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Interesting | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Relevant | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Differentiated | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Category-Shaping | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Positioning & Brand Differentiation is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
