---
id: DS030
title: Co-Founder Alignment & Compatibility
status: implemented
owner: outfinity
summary: Paired founder alignment map for ambition, authority, conflict, economics, and risk.
---

# Co-Founder Alignment & Compatibility

## Introduction

Co-Founder Alignment & Compatibility is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Potential co-founders, existing founding teams, venture studios, and mediators |
| Category | Founders, self-knowledge, and operating mode |
| Format | Paired alignment assessment |
| Priority | P1 |
| Estimated duration | 6 min per founder |
| Public slug | /cofounder-compatibility-alignment-test |
| SEO focus | cofounder compatibility test; cofounder alignment assessment; questions before choosing a cofounder |
| Viral mechanic | Two-person invite loop with result unlock after both founders complete it. |

### Dimensions

1. Ambition & Horizon
2. Roles & Decision Rights
3. Values & Conflict
4. Economics & Risk

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Ambition & Horizon | Which outcome would make this company a success for you? | Each respondent chooses A-D as a preference. Pair distance 0/1/2/3 maps to 100/67/33/0 for alignment; solo mode shows preference profile only. |
| 2 | Ambition & Horizon | What personal time horizon are you prepared to commit before reassessing? | Each respondent chooses A-D as a preference. Pair distance 0/1/2/3 maps to 100/67/33/0 for alignment; solo mode shows preference profile only. |
| 3 | Roles & Decision Rights | Which decision model should the founding team use? | Each respondent chooses A-D as a preference. Pair distance 0/1/2/3 maps to 100/67/33/0 for alignment; solo mode shows preference profile only. |
| 4 | Roles & Decision Rights | How should founder roles evolve? | Each respondent chooses A-D as a preference. Pair distance 0/1/2/3 maps to 100/67/33/0 for alignment; solo mode shows preference profile only. |
| 5 | Values & Conflict | How should serious disagreement be handled? | Each respondent chooses A-D as a preference. Pair distance 0/1/2/3 maps to 100/67/33/0 for alignment; solo mode shows preference profile only. |
| 6 | Values & Conflict | How explicit should founder principles and non-negotiables be? | Each respondent chooses A-D as a preference. Pair distance 0/1/2/3 maps to 100/67/33/0 for alignment; solo mode shows preference profile only. |
| 7 | Economics & Risk | Which financing and control strategy feels acceptable? | Each respondent chooses A-D as a preference. Pair distance 0/1/2/3 maps to 100/67/33/0 for alignment; solo mode shows preference profile only. |
| 8 | Economics & Risk | How should founder equity and downside scenarios be handled? | Each respondent chooses A-D as a preference. Pair distance 0/1/2/3 maps to 100/67/33/0 for alignment; solo mode shows preference profile only. |

### Scoring Contract

For each paired answer, distance 0/1/2/3 receives 100/67/33/0. Dimension score is the mean of its two items. Overall score is 80% mean alignment plus 20% explicitness/readiness bonus derived from the role, principles, and economics documentation items. Solo mode shows preferences only and must not label preferences as maturity.

Level bands:

| Score | Level |
| --- | --- |
| 0-39 | Misaligned |
| 40-59 | Fragile |
| 60-74 | Workable |
| 75-89 | Strong |
| 90-100 | Explicitly Aligned |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Ambition & Horizon | Shared Destination |
| Roles & Decision Rights | Clear Cockpit |
| Values & Conflict | Constructive Partnership |
| Economics & Risk | Aligned Stakes |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Ambition & Horizon | Write a shared founder destination memo covering desired outcome, financing model, and personal horizon. |
| Roles & Decision Rights | Create a decision-rights matrix for product, hiring, capital, sales, and culture. |
| Values & Conflict | Agree a conflict protocol, personal red lines, and a mechanism for periodic relationship reviews. |
| Economics & Risk | Document equity, vesting, compensation, financing appetite, and founder-leaver scenarios with counsel. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Misaligned | Material gaps across several dimensions; display the three conversations that must happen before commitment. |
| Fragile | Some important differences remain implicit; display the highest-risk pair of assumptions to clarify. |
| Workable | The partnership is workable if flagged topics are documented and revisited. |
| Strong | Preferences are strongly compatible; focus on explicit roles, conflict, and economics. |
| Explicitly Aligned | High alignment and explicit agreements; recommend periodic review rather than complacency. |

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

Co-Founder Alignment & Compatibility is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
