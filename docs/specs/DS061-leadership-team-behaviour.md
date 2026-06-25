---
id: DS061
title: Leadership Team Behaviour
status: implemented
owner: outfinity
summary: Leadership-team behaviour diagnostic for strategic conflict, decision rights, trust, accountability, and operating cadence.
---

# Leadership Team Behaviour

## Introduction

Leadership Team Behaviour is an Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, clinical, forensic, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, executive teams, scaleup leaders, boards, and operating partners |
| Category | Leadership, governance, and team operating behaviour |
| Format | Governance assessment |
| Priority | P1 |
| Estimated duration | 7-9 min |
| Public slug | /leadership-team-behaviour-assessment |
| SEO focus | leadership team behaviour assessment; executive team dynamics quiz; startup leadership team diagnostic |
| Viral mechanic | Leadership-team radar for difficult conversations before they become operating debt. |

### Dimensions

1. Strategic Conflict
2. Decision Rights
3. Trust & Accountability
4. Operating Cadence

Each dimension must have exactly three scored public questions. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Strategic Conflict | How openly does the leadership team debate strategic trade-offs? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 2 | Strategic Conflict | How are dissenting views protected before a major commitment? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 3 | Strategic Conflict | How quickly does unresolved strategic tension get named? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 4 | Decision Rights | How clear is the owner for recurring leadership decisions? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 5 | Decision Rights | How are cross-functional trade-offs decided when priorities collide? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 6 | Decision Rights | How often are decisions revisited because ownership was unclear? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 7 | Trust & Accountability | How safe is it to admit missed commitments early? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 8 | Trust & Accountability | How consistently does the team distinguish accountability from blame? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 9 | Trust & Accountability | How are private frustrations brought into the room constructively? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 10 | Operating Cadence | How well do leadership meetings convert facts into decisions and owners? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 11 | Operating Cadence | How visible are commitments, deadlines, and follow-up after meetings? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |
| 12 | Operating Cadence | How often does the team review whether its operating rhythm is still fit for stage? | A=0 absent/ad hoc/no evidence; B=1 informal or partial; C=2 documented/repeatable; D=3 governed, evidence-backed, or system-level. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points. Each dimension has three items and is normalised as dimensionScore = obtainedPoints / 9 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 0-24 | Ad Hoc |
| 25-44 | Forming |
| 45-64 | Working |
| 65-84 | Operating |
| 85-100 | Venture-Ready |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Strategic Conflict | Constructive Challenger |
| Decision Rights | Decision Architect |
| Trust & Accountability | Accountable Partner |
| Operating Cadence | Cadence Builder |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Strategic Conflict | Name the strategic disagreement that is being avoided and run a structured debate with evidence and decision criteria. |
| Decision Rights | Define owner, input rights, vetoes, and escalation path for the next five recurring leadership decisions. |
| Trust & Accountability | Create a visible commitment review where missed commitments are discussed without blame avoidance or politeness theatre. |
| Operating Cadence | Tighten leadership meetings around facts, decisions, owners, dates, and follow-up instead of status narration. |

The share card must be private by default. It may show the level, strongest dimension, archetype, or challenge invitation. It must not publish sensitive weaknesses, answer-level errors, legal or financial details, security gaps, regulatory risk flags, or individual dark-pattern item responses.

### Implementation Notes

Implementation should reuse the existing JSON-driven quiz engine rather than creating a bespoke page runtime. The instrument should be represented through instrument.json, interpretation.json, catalog.json, and optional recommendations.json. The catalog entry must expose category, method type, estimated duration, priority, and domain filters. The result rendering must use the shared chart/diagram module and shared result layout; quiz-specific custom diagrams are supplements unless this DS explicitly says otherwise.

## Decisions & Questions

### Question #1: Should this instrument use the existing engine?

Response: Yes. The quiz must be declarative and reuse the shared browser-side engine, scoring helpers, result diagram, share-card flow, URL codec, and catalog patterns.

### Question #2: Should generic answer-support questions be added?

Response: No. Score calibration belongs inside scored answer options, concept help, methodology notes, and result guidance. Context questions are allowed only when they collect concrete inputs such as jurisdiction, role, or stage.

### Question #3: Is this instrument validated or certifying?

Response: No. It is an educational, private-by-default diagnostic or challenge. It must not claim predictive validity, professional certification, clinical status, employment suitability, or regulatory compliance.
