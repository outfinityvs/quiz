---
id: DS046
title: Product-Led Growth Readiness
status: implemented
owner: outfinity
summary: PLG readiness diagnostic for time to value, activation, signals, expansion, and virality.
---

# Product-Led Growth Readiness

## Introduction

Product-Led Growth Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | B2B and B2C SaaS founders, product, growth, sales, and customer-success leaders |
| Category | Product, discovery, and monetisation |
| Format | Go-to-market readiness assessment |
| Priority | P1 |
| Estimated duration | 6 min |
| Public slug | /product-led-growth-readiness-assessment |
| SEO focus | product led growth assessment; PLG readiness; product led growth maturity model |
| Viral mechanic | Popular operating model label and cross-functional team comparison. |

### Dimensions

1. Time to Value
2. Activation & Self-Service
3. Product Signals & Data
4. Expansion & Virality

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add answer-support context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Time to Value | How quickly can a qualified new user experience meaningful value? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Time to Value | How clearly is the first-value event defined? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Activation & Self-Service | How much friction exists before a user can start? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Activation & Self-Service | How effectively does the product guide users through activation? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Product Signals & Data | How are product-qualified leads or accounts defined? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Product Signals & Data | How trustworthy is product instrumentation? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Expansion & Virality | Does normal product use naturally invite or expose value to additional users? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Expansion & Virality | How naturally does usage lead to paid expansion? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Sales-Dependent |
| 25-44 | Assisted |
| 45-64 | Product-Enabled |
| 65-84 | Product-Led |
| 85-100 | Compounding PLG |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and answer-support language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Time to Value | Time-to-Value Designer |
| Activation & Self-Service | Activation Optimiser |
| Product Signals & Data | Signal Engineer |
| Expansion & Virality | Expansion Architect |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Time to Value | Define and instrument the first-value event, then remove the largest step before it. |
| Activation & Self-Service | Design a segment-specific activation path and progressively disclose complexity. |
| Product Signals & Data | Govern the event taxonomy and validate PQL/PQA signals against durable revenue outcomes. |
| Expansion & Virality | Model one collaboration or sharing loop and align upgrade triggers with realised value. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Sales-Dependent | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Assisted | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Product-Enabled | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Product-Led | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Compounding PLG | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Product-Led Growth Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
