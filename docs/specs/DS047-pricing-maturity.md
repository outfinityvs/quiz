---
id: DS047
title: Pricing & Monetisation Maturity
status: implemented
owner: outfinity
summary: Pricing and monetisation maturity diagnostic for value, packaging, price architecture, governance, and experimentation.
---

# Pricing & Monetisation Maturity

## Introduction

Pricing & Monetisation Maturity is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, product leaders, finance teams, revenue leaders, and pricing consultants |
| Category | Product, discovery, and monetisation |
| Format | Commercial maturity assessment |
| Priority | P1 |
| Estimated duration | 6 min |
| Public slug | /pricing-maturity-assessment |
| SEO focus | pricing maturity assessment; SaaS pricing quiz; value based pricing assessment; pricing strategy test |
| Viral mechanic | Curiosity hook around underpricing and value-metric diagnosis. |

### Dimensions

1. Value Understanding
2. Packaging & Segmentation
3. Price Architecture & Governance
4. Experimentation & Realisation

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Value Understanding | How is willingness to pay understood? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Value Understanding | How well can the team quantify customer value? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Packaging & Segmentation | How are plans or offers differentiated? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Packaging & Segmentation | How well do entitlements and limits align with value? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Price Architecture & Governance | How strong is the price metric? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Price Architecture & Governance | How are discounts and exceptions governed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Experimentation & Realisation | How often is pricing tested or reviewed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Experimentation & Realisation | How is monetisation performance measured? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Cost-Plus |
| 25-44 | Emerging |
| 45-64 | Structured |
| 65-84 | Value-Based |
| 85-100 | Monetisation Engine |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Value Understanding | Value Researcher |
| Packaging & Segmentation | Packaging Architect |
| Price Architecture & Governance | Price Strategist |
| Experimentation & Realisation | Monetisation Experimenter |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Value Understanding | Interview recent wins, losses, and churned customers about alternatives, outcomes, budget, and trade-offs. |
| Packaging & Segmentation | Redesign packages around distinct use cases and value, with explicit upgrade paths and fences. |
| Price Architecture & Governance | Evaluate candidate value metrics and establish discount, approval, and exception governance. |
| Experimentation & Realisation | Create a quarterly pricing research and experimentation roadmap with cohort guardrails. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Cost-Plus | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Emerging | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Structured | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Value-Based | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Monetisation Engine | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

The share card must be private by default. It may show the level, strongest dimension, archetype, or challenge invitation. It must not publish sensitive weaknesses, answer-level errors, financial or legal details, security gaps, family-office details, or regulatory risk flags.

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

Pricing & Monetisation Maturity is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
