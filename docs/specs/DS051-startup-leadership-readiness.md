---
id: DS051
title: Scale Leadership Readiness
status: implemented
owner: outfinity
summary: Scale leadership readiness diagnostic for delegation, talent, operating rhythm, culture, and psychological safety.
---

# Scale Leadership Readiness

## Introduction

Scale Leadership Readiness is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, executives, new managers, leadership teams, and executive coaches |
| Category | Marketing, growth, sales, and leadership |
| Format | Leadership maturity assessment |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /startup-leadership-readiness-assessment |
| SEO focus | startup leadership assessment; founder leadership style test; scale leadership readiness |
| Viral mechanic | Personal leadership archetype and optional anonymous team comparison. |

### Dimensions

1. Delegation & Decision Rights
2. Talent & Coaching
3. Operating Rhythm
4. Culture & Psychological Safety

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Delegation & Decision Rights | How often do routine decisions escalate to senior leaders? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Delegation & Decision Rights | How is delegation defined? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Talent & Coaching | How systematic is hiring for critical roles? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Talent & Coaching | How regularly do managers coach and give useful feedback? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Operating Rhythm | How coherent is the leadership operating cadence? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Operating Rhythm | How are strategy and priorities translated into team execution? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Culture & Psychological Safety | How safe is it to report bad news, uncertainty, or mistakes? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Culture & Psychological Safety | How are conflict and accountability balanced? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Delegation & Decision Rights | How often do leaders let teams make consequential decisions within clear constraints? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Talent & Coaching | How quickly are weak role fits addressed with coaching, role change, or exit? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Operating Rhythm | How tightly do leadership meetings convert issues into decisions and owners? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Culture & Psychological Safety | How consistently do leaders reward truth-telling when the news is bad? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Heroic Founder |
| 25-44 | Emerging Manager |
| 45-64 | Team Builder |
| 65-84 | Scalable Leader |
| 85-100 | Institution Builder |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Delegation & Decision Rights | Delegation Architect |
| Talent & Coaching | Talent Builder |
| Operating Rhythm | Operating Rhythm Designer |
| Culture & Psychological Safety | Culture Steward |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Delegation & Decision Rights | Create a decision-rights map and delegate one outcome with authority, constraints, and review points. |
| Talent & Coaching | Use outcome scorecards and structured evidence in hiring; establish a manager coaching standard. |
| Operating Rhythm | Redesign weekly, monthly, and quarterly forums around distinct decisions and closed actions. |
| Culture & Psychological Safety | Model a constructive response to bad news and introduce a blameless learning review with accountability. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Heroic Founder | Practices are mainly absent or ad hoc; show one stabilising action and avoid a long recommendation list. |
| Emerging Manager | Some practices exist but depend on individuals; show the two routines that create repeatability. |
| Team Builder | Core practices are repeatable, although evidence and ownership remain uneven; focus on the weakest dimension. |
| Scalable Leader | Practices are measured and integrated; show the principal scaling or optimisation constraint. |
| Institution Builder | The system learns continuously; recommend calibration, resilience, and contribution to peer benchmarks. |

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

Scale Leadership Readiness is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
