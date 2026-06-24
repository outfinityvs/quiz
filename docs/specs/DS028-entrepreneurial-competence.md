---
id: DS028
title: Entrepreneurial Competence Compass
status: implemented
owner: outfinity
summary: Entrepreneurial competence map from opportunity recognition to responsible value creation.
---

# Entrepreneurial Competence Compass

## Introduction

Entrepreneurial Competence Compass is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Entrepreneurs, intrapreneurs, students, incubators, and corporate innovation teams |
| Category | Founders, self-knowledge, and operating mode |
| Format | Competence assessment inspired by EntreComp |
| Priority | P1 |
| Estimated duration | 6 min |
| Public slug | /entrepreneurial-competence-assessment |
| SEO focus | entrepreneurial competence assessment; entrepreneurship skills test; EntreComp self assessment |
| Viral mechanic | Positive competence archetypes and cohort-friendly team comparison. |

### Dimensions

1. Opportunity & Vision
2. Resource Mobilisation
3. Action & Experimentation
4. Ethics & Shared Value

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add answer-support context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Opportunity & Vision | When you notice a recurring frustration, what do you do? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Opportunity & Vision | How clearly can you translate an opportunity into a compelling future state? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Resource Mobilisation | How accurately do you understand your own capabilities and gaps? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Resource Mobilisation | How do you mobilise people, money, and knowledge around an opportunity? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Action & Experimentation | How do you act when important information is missing? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Action & Experimentation | How do you use setbacks? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Ethics & Shared Value | How do you evaluate who may benefit or be harmed by the venture? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Ethics & Shared Value | How does the business create value beyond a transaction? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Explorer |
| 25-44 | Initiator |
| 45-64 | Value Builder |
| 65-84 | Entrepreneurial Operator |
| 85-100 | Ecosystem Creator |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and answer-support language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Opportunity & Vision | Opportunity Scout |
| Resource Mobilisation | Resource Orchestrator |
| Action & Experimentation | Action Builder |
| Ethics & Shared Value | Responsible Value Creator |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Opportunity & Vision | Keep an opportunity log and validate one recurring problem through five interviews each month. |
| Resource Mobilisation | Map the next milestone capabilities and acquire one missing resource through learning, partnership, or recruitment. |
| Action & Experimentation | Turn the largest uncertainty into a reversible experiment with a precommitted decision rule. |
| Ethics & Shared Value | Create a stakeholder map and add one harm-prevention and one shared-value metric to the initiative. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Explorer | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Initiator | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Value Builder | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Entrepreneurial Operator | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Ecosystem Creator | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Entrepreneurial Competence Compass is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
