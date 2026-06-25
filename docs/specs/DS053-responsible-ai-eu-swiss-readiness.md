---
id: DS053
title: Responsible AI & EU/Swiss Readiness
status: implemented
owner: outfinity
summary: Responsible AI and EU/Swiss readiness map for inventory, classification, data, privacy, risk, oversight, documentation, and monitoring.
---

# Responsible AI & EU/Swiss Readiness

## Introduction

Responsible AI & EU/Swiss Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | AI providers and deployers, founders, boards, product, legal, compliance, data, and risk teams |
| Category | AI, governance, security, and sustainable value |
| Format | Governance readiness assessment with jurisdiction branching |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /responsible-ai-eu-swiss-readiness-assessment |
| SEO focus | EU AI Act readiness assessment; responsible AI assessment; AI governance checklist Switzerland; AI risk assessment |
| Viral mechanic | Regulatory urgency around the largest AI governance gap. |

### Dimensions

1. Classification & Scope
2. Data & Privacy
3. Risk & Human Oversight
4. Documentation & Monitoring

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Classification & Scope | How complete is the inventory of AI systems, models, and material AI-enabled features? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Classification & Scope | How consistently are legal role, jurisdiction, and risk classification assessed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Data & Privacy | How well are training, input, retrieval, and output data rights governed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Data & Privacy | How are privacy impacts integrated into AI design and deployment? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Risk & Human Oversight | How systematically are safety, bias, robustness, and misuse risks evaluated? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Risk & Human Oversight | How meaningful is human oversight? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Documentation & Monitoring | How complete are documentation, transparency, and logging? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Documentation & Monitoring | How are deployed systems monitored and changed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Classification & Scope | How quickly can the team identify when a new AI feature changes risk class? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Data & Privacy | How are data rights, consent, provenance, and retention checked before release? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Risk & Human Oversight | How are human overrides tested for real authority rather than cosmetic review? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Documentation & Monitoring | How are model, prompt, data, and monitoring changes traceable after launch? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Unmapped |
| 25-44 | Aware |
| 45-64 | Controlled |
| 65-84 | Audit-Ready |
| 85-100 | Trustworthy-by-Design |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Classification & Scope | Scope Classifier |
| Data & Privacy | Data Steward |
| Risk & Human Oversight | Risk Controller |
| Documentation & Monitoring | Assurance Builder |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Classification & Scope | Build the AI inventory and document role, jurisdiction, risk tier, owner, and change triggers. |
| Data & Privacy | Map data provenance, purpose, access, retention, transfers, and rights for the highest-risk system. |
| Risk & Human Oversight | Define a risk-based evaluation suite and test whether human oversight can actually prevent or correct harm. |
| Documentation & Monitoring | Create an evidence pack with system card, instructions, logs, evaluations, changes, incidents, and monitoring thresholds. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Unmapped | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Aware | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Controlled | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Audit-Ready | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Trustworthy-by-Design | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

The share card must be private by default. It may show the level, strongest dimension, archetype, or challenge invitation. It must not publish sensitive weaknesses, answer-level errors, financial or legal details, security gaps, or regulatory risk flags.

### Implementation Notes

Implementation should reuse the existing JSON-driven quiz engine rather than creating a bespoke page runtime. The instrument should be represented through instrument.json, interpretation.json, catalog.json, and optional recommendations.json. The catalog entry must expose category, method type, estimated duration, priority, and domain filters. The result rendering must use the shared chart/diagram module and shared result layout; quiz-specific custom diagrams are supplements unless this DS explicitly says otherwise.

### Special Implementation Constraints

The page must include pre-quiz selectors for EU/EEA, Switzerland, UK, or other, and provider, deployer, importer/distributor, or uncertain. Results must be dated, jurisdiction-conditional, and explicitly not legal advice.

## Decisions & Questions

### Question #1: Should this instrument use the existing engine?

Response: Yes. The quiz must be declarative and reuse the shared browser-side engine, scoring helpers, result diagram, share-card flow, URL codec, and catalog patterns.

### Question #2: What is the minimum viable result view?

Response: The minimum result view is a four-axis diagram, balanced score, level label, strongest-dimension archetype, weakest-dimension next upgrade, two insights, two 30-day actions, one reflection question, methodology note, limitations, and share-safe card actions.

### Question #3: Can benchmarks or percentiles be shown at launch?

Response: No. Benchmarks require at least 100 completions on the same quiz version and at least 30 responses in the displayed segment. The UI must show sample size, period, cohort criteria, and version compatibility before publishing any benchmark.

## Conclusion

Responsible AI & EU/Swiss Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
