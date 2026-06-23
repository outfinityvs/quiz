---
id: DS034
title: Investor Data Room Readiness
status: implemented
owner: outfinity
summary: Diligence-readiness assessment for corporate records, financials, commercial evidence, IP, technology, and risk.
---

# Investor Data Room Readiness

## Introduction

Investor Data Room Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, CFOs, legal and finance operations teams, and transaction advisors |
| Category | Finance, fundraising, and economic resilience |
| Format | Operational readiness assessment |
| Priority | P1 |
| Estimated duration | 6-8 min |
| Public slug | /investor-data-room-readiness-checklist |
| SEO focus | startup data room checklist; investor data room readiness; due diligence checklist startup |
| Viral mechanic | Practical data-room score with downloadable room index and owner invite flow. |

### Dimensions

1. Corporate & Ownership
2. Financial & Tax
3. Commercial & Market
4. IP, Technology & Risk

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Corporate & Ownership | How complete and reconcilable are incorporation, share register, and cap-table records? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Corporate & Ownership | How accessible are material approvals, governance records, and contracts? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Financial & Tax | How reliable are historical financials and the operating model? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Financial & Tax | How well are tax, liabilities, and financial contingencies documented? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Commercial & Market | How quickly can a reviewer understand revenue quality and customer concentration? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Commercial & Market | How well is the market and pipeline evidence substantiated? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | IP, Technology & Risk | How complete is the chain of title for intellectual property and software? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | IP, Technology & Risk | How transparently are security, privacy, regulatory, and litigation risks presented? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Scattered |
| 25-44 | Basic |
| 45-64 | Diligence-Aware |
| 65-84 | Investor-Ready |
| 85-100 | Audit-Grade |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Corporate & Ownership | Corporate Custodian |
| Financial & Tax | Financial Controller |
| Commercial & Market | Commercial Verifier |
| IP, Technology & Risk | IP & Risk Guardian |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Corporate & Ownership | Reconcile every security to source documents and establish a version-controlled corporate index. |
| Financial & Tax | Reconcile historical accounts, bank data, and the driver-based model; disclose material contingencies. |
| Commercial & Market | Link contracts, cohorts, concentration, and pipeline claims to source systems and named owners. |
| IP, Technology & Risk | Close IP assignment gaps and prepare transparent security, privacy, and regulatory risk packs. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Scattered | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Basic | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Diligence-Aware | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Investor-Ready | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Audit-Grade | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Investor Data Room Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
