---
id: DS042
title: Family Governance & Succession Readiness
status: implemented
owner: outfinity
summary: Family governance and succession readiness diagnostic for purpose, decision structures, next generation, and contingency.
---

# Family Governance & Succession Readiness

## Introduction

Family Governance & Succession Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Entrepreneurial families, family-business owners, family offices, next-generation members, and advisors |
| Category | Investors, portfolios, and family capital |
| Format | Governance readiness assessment |
| Priority | P1 |
| Estimated duration | 7 min |
| Public slug | /family-governance-succession-assessment |
| SEO focus | family business succession assessment; family governance questionnaire; next generation family business readiness |
| Viral mechanic | Private family invite loop and alignment heatmap without exposing financial details. |

### Dimensions

1. Shared Purpose & Communication
2. Decision Structures
3. Next-Generation Development
4. Ownership & Contingency

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Shared Purpose & Communication | How clearly does the family understand the purpose of shared ownership? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Shared Purpose & Communication | How are difficult family-business conversations handled? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Decision Structures | How clear are the boundaries between family, ownership, board, and management decisions? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Decision Structures | How institutionalised are family governance bodies and agreements? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Next-Generation Development | How deliberately are next-generation members educated about ownership? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Next-Generation Development | How are family employment and leadership opportunities governed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Ownership & Contingency | How prepared is the transfer of ownership and control? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Ownership & Contingency | How ready is the family for incapacity, death, dispute, or urgent liquidity needs? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Implicit |
| 25-44 | Conversation Stage |
| 45-64 | Structured |
| 65-84 | Transition-Ready |
| 85-100 | Multi-Generational |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Shared Purpose & Communication | Purpose Keeper |
| Decision Structures | Governance Convener |
| Next-Generation Development | Next-Gen Developer |
| Ownership & Contingency | Continuity Planner |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Shared Purpose & Communication | Facilitate a written shared-ownership purpose and a protocol for difficult conversations. |
| Decision Structures | Map family, owner, board, and management decisions and assign each to the correct forum. |
| Next-Generation Development | Create a staged next-generation curriculum with education, experience, and readiness criteria. |
| Ownership & Contingency | Coordinate ownership transfer, incapacity, liquidity, and communication scenarios with qualified advisors. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Implicit | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Conversation Stage | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Structured | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Transition-Ready | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Multi-Generational | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Family Governance & Succession Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
