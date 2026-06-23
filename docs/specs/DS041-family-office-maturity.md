---
id: DS041
title: Family Office Institutional Maturity
status: implemented
owner: outfinity
summary: Family office institutional maturity map from founder-centric wealth management to enduring platform.
---

# Family Office Institutional Maturity

## Introduction

Family Office Institutional Maturity is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Single and multi-family offices, entrepreneurial families, trustees, advisors, and next-generation leaders |
| Category | Investors, portfolios, and family capital |
| Format | Institutional maturity assessment |
| Priority | P1 |
| Estimated duration | 7 min |
| Public slug | /family-office-maturity-assessment |
| SEO focus | family office maturity assessment; family office governance checklist; build a family office |
| Viral mechanic | Private executive benchmark with optional anonymised peer comparison. |

### Dimensions

1. Mandate & Governance
2. Investment Process
3. Operations & Controls
4. Talent, Data & Technology

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Mandate & Governance | How explicit is the office mandate and definition of success? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Mandate & Governance | How are authority and reserved decisions structured? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Investment Process | How disciplined is strategic asset allocation and portfolio construction? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Investment Process | How consistently are managers and direct investments selected and monitored? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Operations & Controls | How integrated are accounting, cash, tax, and performance reporting? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Operations & Controls | How mature are operational risk, cybersecurity, and continuity controls? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Talent, Data & Technology | How resilient is the office to the departure or incapacity of key people? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Talent, Data & Technology | How effectively do data and technology support decisions? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Founder-Centric |
| 25-44 | Emerging Office |
| 45-64 | Structured Office |
| 65-84 | Institutional Office |
| 85-100 | Enduring Platform |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Mandate & Governance | Governance Architect |
| Investment Process | Investment Operator |
| Operations & Controls | Control Steward |
| Talent, Data & Technology | Platform Builder |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Mandate & Governance | Document the office mandate, delegated authorities, reserved matters, and emergency decision rules. |
| Investment Process | Create an investment policy with look-through exposures, liquidity, pacing, and rebalancing ranges. |
| Operations & Controls | Map critical processes, segregation of duties, payment controls, cyber risks, and continuity tests. |
| Talent, Data & Technology | Build a key-person succession map and a controlled data architecture with named owners. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Founder-Centric | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Emerging Office | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Structured Office | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Institutional Office | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Enduring Platform | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Family Office Institutional Maturity is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
