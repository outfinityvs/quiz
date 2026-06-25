---
id: DS052
title: AI Adoption Readiness
status: implemented
owner: outfinity
summary: AI adoption readiness diagnostic for use cases, value, data, technology, workflow, people, governance, and measurement.
---

# AI Adoption Readiness

## Introduction

AI Adoption Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, executive teams, product leaders, and SMEs |
| Category | AI, governance, security, and sustainable value |
| Format | Transformation readiness assessment |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /ai-adoption-readiness-assessment |
| SEO focus | AI readiness assessment; AI adoption maturity model; generative AI readiness; business AI assessment |
| Viral mechanic | Contemporary how AI-ready is your company score with sector and company-size benchmark. |

### Dimensions

1. Use Cases & Value
2. Data & Technology
3. People & Workflow
4. Governance & Measurement

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Use Cases & Value | How are AI use cases selected? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Use Cases & Value | How clearly is the value of each priority use case defined? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Data & Technology | How ready are the relevant data and knowledge sources? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Data & Technology | How production-ready is the AI architecture? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | People & Workflow | How deeply are workflows redesigned around AI capabilities and limits? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | People & Workflow | How prepared are people to use and supervise AI? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Governance & Measurement | How accountable is AI governance? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Governance & Measurement | How is AI performance measured after deployment? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Use Cases & Value | How are AI use cases stopped when value is weak or risk is high? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Data & Technology | How well are AI inputs and outputs monitored for quality drift? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | People & Workflow | How clearly are handoffs defined between AI assistance and human judgement? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Governance & Measurement | How are AI adoption lessons turned into portfolio decisions? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Experimenting |
| 25-44 | Opportunistic |
| 45-64 | Piloting |
| 65-84 | Scaling |
| 85-100 | AI-Native Operator |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Use Cases & Value | Use-Case Strategist |
| Data & Technology | Data Enabler |
| People & Workflow | Workflow Transformer |
| Governance & Measurement | AI Governor |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Use Cases & Value | Prioritise three use cases with baseline, owner, value hypothesis, risk, and kill criteria. |
| Data & Technology | Create an approved data/model architecture with lineage, access, evaluation, and fallback requirements. |
| People & Workflow | Redesign one workflow end to end and certify role-specific human review responsibilities. |
| Governance & Measurement | Establish an AI inventory, risk tiers, approval owner, and post-deployment measurement dashboard. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Experimenting | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Opportunistic | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Piloting | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Scaling | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| AI-Native Operator | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

AI Adoption Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
