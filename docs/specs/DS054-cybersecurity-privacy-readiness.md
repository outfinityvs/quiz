---
id: DS054
title: Cybersecurity & Privacy Readiness
status: implemented
owner: outfinity
summary: Cybersecurity and privacy readiness assessment for governance, protection, response, recovery, and privacy operations.
---

# Cybersecurity & Privacy Readiness

## Introduction

Cybersecurity & Privacy Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Startups, SMEs, boards, family offices, investors, and vendors undergoing customer diligence |
| Category | AI, governance, security, and sustainable value |
| Format | Cyber and privacy maturity assessment |
| Priority | P1 |
| Estimated duration | 7 min |
| Public slug | /cybersecurity-privacy-readiness-assessment |
| SEO focus | cybersecurity readiness assessment; startup security checklist; privacy readiness assessment; NIST CSF assessment |
| Viral mechanic | Trust score and downloadable security-readiness brief for customers or investors. |

### Dimensions

1. Govern & Identify
2. Protect
3. Detect & Respond
4. Recover & Privacy

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Govern & Identify | How clearly are cybersecurity accountability, policies, and risk appetite defined? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Govern & Identify | How complete are inventories of assets, data, identities, and critical third parties? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Protect | How strong are identity, access, and vulnerability controls? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Protect | How well are data, people, and backups protected? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Detect & Respond | How capable is the organisation of detecting abnormal or malicious activity? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Detect & Respond | How prepared is the incident response process? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Recover & Privacy | How confident are you that critical services and data can be restored? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Recover & Privacy | How mature is privacy management? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Exposed |
| 25-44 | Basic Hygiene |
| 45-64 | Managed |
| 65-84 | Resilient |
| 85-100 | Trust-Grade |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Govern & Identify | Governance Mapper |
| Protect | Protection Engineer |
| Detect & Respond | Response Commander |
| Recover & Privacy | Recovery & Privacy Steward |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Govern & Identify | Assign executive ownership and complete a risk-ranked map of assets, data, identities, and critical suppliers. |
| Protect | Close MFA, privileged access, patching, encryption, and immutable-backup gaps for critical services. |
| Detect & Respond | Run a cross-functional incident exercise with decision, evidence, legal, privacy, and communication paths. |
| Recover & Privacy | Test a full restore and operationalise data rights, retention, and privacy impact review. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Exposed | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Basic Hygiene | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Managed | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Resilient | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Trust-Grade | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Cybersecurity & Privacy Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
