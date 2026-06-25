---
id: DS062
title: Dark Personality Pattern Check
status: implemented
owner: outfinity
summary: Reflective, non-clinical pattern check for manipulation risk, entitlement, empathy under pressure, and impulse control.
---

# Dark Personality Pattern Check

## Introduction

Dark Personality Pattern Check is an Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, clinical, forensic, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Individuals, founders, teams, coaches, and facilitators using reflective self-knowledge tools |
| Category | Personality and interpersonal risk reflection |
| Format | Reflective pattern check |
| Priority | P2 |
| Estimated duration | 10-12 min |
| Public slug | /dark-personality-patterns-test |
| SEO focus | dark personality test; dark triad self reflection; manipulation entitlement empathy quiz |
| Viral mechanic | Share-safe interpersonal-risk radar that keeps individual answers private. |

### Dimensions

1. Transparent Influence
2. Status Humility
3. Empathy Under Pressure
4. Impulse & Boundary Control

Each dimension must have exactly six scored public questions. Higher scores represent stronger protective behaviour against dark-pattern risk, not stronger dark traits. Generic answer-support context questions must not be added; score calibration belongs in the answer wording, concept help, methodology note, and result guidance. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Transparent Influence | How do you persuade someone when full information might weaken your case? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 2 | Transparent Influence | How do you handle a negotiation where the other side trusts you more than they should? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 3 | Transparent Influence | How do you react when a shortcut would let you win without being noticed? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 4 | Status Humility | How do you behave when someone else receives credit for shared work? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 5 | Status Humility | How do you respond when a lower-status person challenges you correctly? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 6 | Status Humility | How do you handle not being invited into an important room? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 7 | Empathy Under Pressure | How do you treat people who block an outcome you care about? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 8 | Empathy Under Pressure | How do you make trade-offs that impose costs on people with less power? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 9 | Empathy Under Pressure | How do you react when someone shows vulnerability you could use against them? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 10 | Impulse & Boundary Control | How do you behave when you are angry and have access to damaging information? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 11 | Impulse & Boundary Control | How do you handle rules that feel inconvenient but protect other people? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 12 | Impulse & Boundary Control | How do you respond when immediate reward conflicts with a boundary you agreed to? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 13 | Transparent Influence | How do you handle information that would make your proposal look less attractive? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 14 | Transparent Influence | How do you react when someone sets a boundary that reduces your influence? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 15 | Transparent Influence | How do you use private knowledge about someone’s insecurity? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 16 | Status Humility | How do you behave when someone junior outperforms you publicly? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 17 | Status Humility | How do you respond when a decision benefits the group but reduces your status? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 18 | Status Humility | How do you handle feedback that you came across as arrogant or dismissive? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 19 | Empathy Under Pressure | How do you respond when achieving the goal requires someone else to carry a burden? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 20 | Empathy Under Pressure | How do you talk about people who are no longer useful to your plan? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 21 | Empathy Under Pressure | How do you behave when a mistake by someone else threatens your outcome? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 22 | Impulse & Boundary Control | How do you handle a tempting opportunity that depends on bending an agreement? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 23 | Impulse & Boundary Control | How do you behave when retaliation would feel justified? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |
| 24 | Impulse & Boundary Control | How do you respond when secrecy would make a questionable action easier? | A=0 high-risk reflex; B=1 partial restraint; C=2 generally protective behaviour; D=3 strong protective behaviour under pressure. Public UI must not show points. |

### Scoring Contract

A/B/C/D receive 0/1/2/3 points, where higher points indicate stronger protective behaviour against the named dark-pattern risk. Each dimension has six items and is normalised as dimensionScore = obtainedPoints / 18 * 100. The balanced overall index is 0.70 * mean(dimensions) + 0.30 * weakestDimension, rounded for display. Not sure / not applicable is unscored; if a dimension has insufficient evidence, display insufficient evidence rather than imputing a value. Public UI must not show points.

Level bands:

| Score | Level |
| --- | --- |
| 85-100 | Low Dark-Pattern Signal |
| 65-84 | Mostly Protected |
| 45-64 | Mixed Signal |
| 25-44 | Interpersonal Risk Signal |
| 0-24 | Strong Caution Signal |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, and limitations.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Transparent Influence | Transparent Influencer |
| Status Humility | Status-Calibrated Partner |
| Empathy Under Pressure | Pressure-Aware Teammate |
| Impulse & Boundary Control | Boundary Keeper |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Transparent Influence | Before persuading, state your interest, the other person stake, and the information they would need to disagree freely. |
| Status Humility | Ask for one piece of feedback about entitlement, credit-sharing, or how you react when you are not the centre of attention. |
| Empathy Under Pressure | When stakes rise, slow down enough to name who could be harmed and what boundary should not be crossed. |
| Impulse & Boundary Control | Choose one high-risk trigger and pre-commit a pause, check, or second reviewer before acting. |

The share card must be private by default. It may show the level, strongest dimension, archetype, or challenge invitation. It must not publish sensitive weaknesses, answer-level errors, legal or financial details, security gaps, regulatory risk flags, or individual dark-pattern item responses.

Reference sources for content framing:

- International Personality Item Pool: https://ipip.ori.org/

### Implementation Notes

Implementation should reuse the existing JSON-driven quiz engine rather than creating a bespoke page runtime. The instrument should be represented through instrument.json, interpretation.json, catalog.json, and optional recommendations.json. The catalog entry must expose category, method type, estimated duration, priority, and domain filters. The result rendering must use the shared chart/diagram module and shared result layout; quiz-specific custom diagrams are supplements unless this DS explicitly says otherwise.

## Decisions & Questions

### Question #1: Should this instrument use the existing engine?

Response: Yes. The quiz must be declarative and reuse the shared browser-side engine, scoring helpers, result diagram, share-card flow, URL codec, and catalog patterns.

### Question #2: Should generic answer-support questions be added?

Response: No. Score calibration belongs inside scored answer options, concept help, methodology notes, and result guidance. Context questions are allowed only when they collect concrete inputs such as jurisdiction, role, or stage.

### Question #3: Is this instrument validated or certifying?

Response: No. It is an educational, private-by-default diagnostic or challenge. It must not claim predictive validity, professional certification, clinical status, employment suitability, or regulatory compliance.
