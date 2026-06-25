---
id: DS044
title: Product Discovery Maturity
status: implemented
owner: outfinity
summary: Discovery maturity diagnostic for continuous contact, problem framing, experiment quality, and decision integration.
---

# Product Discovery Maturity

## Introduction

Product Discovery Maturity is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Product teams, founders, UX researchers, designers, and product leaders |
| Category | Product, discovery, and monetisation |
| Format | Team maturity assessment |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /product-discovery-maturity-assessment |
| SEO focus | product discovery maturity assessment; continuous discovery assessment; product discovery process |
| Viral mechanic | Team comparison exposing leader-practitioner discovery misalignment. |

### Dimensions

1. Continuous Customer Contact
2. Problem Framing
3. Experiment Quality
4. Decision Integration

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Continuous Customer Contact | How frequently does the product trio or equivalent team engage directly with target users? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Continuous Customer Contact | How representative is the customer evidence used in product decisions? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Problem Framing | How are opportunities framed before solutions are discussed? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Problem Framing | How explicitly are assumptions identified? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Experiment Quality | How are discovery tests selected? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Experiment Quality | How are success and failure interpreted? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Decision Integration | How often does discovery evidence change the roadmap or stop work? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Decision Integration | How traceable is the path from insight to product decision? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Continuous Customer Contact | How reliably does the team speak to non-customers or churned users? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Problem Framing | How clearly are opportunity statements separated from preferred solutions? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Experiment Quality | How well do tests distinguish desirability, viability, feasibility, and usability risk? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Decision Integration | How often does discovery kill, narrow, or reshape planned work? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Opinion-Led |
| 25-44 | Episodic |
| 45-64 | Repeatable |
| 65-84 | Continuous |
| 85-100 | Evidence-Native |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Continuous Customer Contact | Continuous Researcher |
| Problem Framing | Problem Framer |
| Experiment Quality | Experiment Designer |
| Decision Integration | Evidence Integrator |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Continuous Customer Contact | Establish a weekly customer contact cadence with deliberate participant sampling. |
| Problem Framing | Require an opportunity brief and assumption map before a feature receives delivery capacity. |
| Experiment Quality | Predefine evidence standards and decision thresholds for each critical assumption. |
| Decision Integration | Link insights, assumptions, roadmap choices, and observed outcomes in a searchable decision repository. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Opinion-Led | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Episodic | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Repeatable | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Continuous | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Evidence-Native | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Product Discovery Maturity is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
