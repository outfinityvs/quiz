---
id: DS037
title: Angel Investor Readiness
status: implemented
owner: outfinity
summary: Angel investor maturity diagnostic for thesis, diligence, portfolio construction, and governance.
---

# Angel Investor Readiness

## Introduction

Angel Investor Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Prospective and active angel investors, founder-angels, and investment clubs |
| Category | Investors, portfolios, and family capital |
| Format | Investor maturity assessment |
| Priority | P1 |
| Estimated duration | 6 min |
| Public slug | /angel-investor-readiness-assessment |
| SEO focus | angel investor assessment; how to become an angel investor; angel investing readiness |
| Viral mechanic | High-status angel investor archetype and peer benchmark. |

### Dimensions

1. Thesis & Boundaries
2. Deal Flow & Diligence
3. Portfolio Discipline
4. Support & Governance

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Thesis & Boundaries | How explicit is your investment thesis? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Thesis & Boundaries | How clearly are your financial and personal boundaries defined? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Deal Flow & Diligence | How is deal flow generated and filtered? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Deal Flow & Diligence | What evidence is required before an investment decision? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Portfolio Discipline | How intentionally is the portfolio constructed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Portfolio Discipline | How are follow-on investments decided? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Support & Governance | How clearly is your promised founder support bounded? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Support & Governance | How are conflicts, information rights, and governance responsibilities handled? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Enthusiast |
| 25-44 | Scout |
| 45-64 | Disciplined Angel |
| 65-84 | Portfolio Angel |
| 85-100 | Institutional Angel |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Thesis & Boundaries | Thesis Specialist |
| Deal Flow & Diligence | Diligence Scout |
| Portfolio Discipline | Portfolio Constructor |
| Support & Governance | Founder Ally |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Thesis & Boundaries | Write a one-page thesis with inclusions, exclusions, cheque size, ownership, and falsifiable beliefs. |
| Deal Flow & Diligence | Use a structured screen, founder references, and a short decision memo for every serious opportunity. |
| Portfolio Discipline | Model portfolio size, pacing, and reserves before making the next cheque. |
| Support & Governance | Define a founder-support menu, response boundaries, and conflict protocol. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Enthusiast | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Scout | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Disciplined Angel | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Portfolio Angel | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Institutional Angel | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Angel Investor Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
