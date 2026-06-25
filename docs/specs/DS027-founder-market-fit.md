---
id: DS027
title: Founder-Market Fit
status: implemented
owner: outfinity
summary: Strategic right-to-win assessment for a founding team in a specific market.
---

# Founder-Market Fit

## Introduction

Founder-Market Fit is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, co-founders, venture studios, accelerators, and investors screening early-stage teams |
| Category | Founders, self-knowledge, and operating mode |
| Format | Strategic fit assessment |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /founder-market-fit-assessment |
| SEO focus | founder market fit assessment; founder market fit test; right to win startup |
| Viral mechanic | Investor-style founder-market-fit profile around right to win. |

### Dimensions

1. Domain Edge
2. Customer Access
3. Credibility & Assets
4. Long-Term Pull & Learning

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Domain Edge | How directly have you worked on the target problem? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Domain Edge | What proprietary insight do you possess about why existing solutions fail? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Customer Access | How quickly can you reach qualified target users for discovery? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Customer Access | How strong is your access to buyers, channel partners, or market influencers? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Credibility & Assets | What proof makes target customers trust you? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Credibility & Assets | What difficult-to-copy assets support the venture? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Long-Term Pull & Learning | How durable is your motivation to work on this problem? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Long-Term Pull & Learning | How quickly are you closing your most important knowledge gaps? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Domain Edge | How deeply do you understand the hidden workflow around the problem? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Customer Access | How repeatable is your path to qualified buyer conversations? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Credibility & Assets | What credible unfair advantage can you prove, not just claim? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Long-Term Pull & Learning | How fast do you change the thesis when market evidence contradicts it? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Tourist |
| 25-44 | Researcher |
| 45-64 | Adjacent Insider |
| 65-84 | Embedded Founder |
| 85-100 | Unfairly Positioned |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Domain Edge | Domain Insider |
| Customer Access | Networked Connector |
| Credibility & Assets | Trusted Authority |
| Long-Term Pull & Learning | Mission-Driven Learner |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Domain Edge | Write a one-page non-obvious market truths memo and test each claim with domain experts. |
| Customer Access | Build a repeatable recruitment channel that can deliver 10 qualified conversations per month. |
| Credibility & Assets | Acquire one high-trust proof point: paid pilot, reference, proprietary dataset, or recognised partner. |
| Long-Term Pull & Learning | Create a six-month domain-learning plan with explicit unknowns, experts, and falsifiable beliefs. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Tourist | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Researcher | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Adjacent Insider | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Embedded Founder | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Unfairly Positioned | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Founder-Market Fit is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
