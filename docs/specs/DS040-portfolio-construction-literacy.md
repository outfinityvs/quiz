---
id: DS040
title: Portfolio Construction Literacy
status: implemented
owner: outfinity
summary: Portfolio construction literacy challenge for diversification, liquidity, risk, return, governance, and rebalancing.
---

# Portfolio Construction Literacy

## Introduction

Portfolio Construction Literacy is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Entrepreneurs managing liquidity, angel investors, next-generation family members, and aspiring allocators |
| Category | Investors, portfolios, and family capital |
| Format | Knowledge quiz |
| Priority | P2 |
| Estimated duration | 7 min |
| Public slug | /portfolio-construction-literacy-quiz |
| SEO focus | portfolio construction quiz; investment diversification test; asset allocation knowledge quiz |
| Viral mechanic | Could you think like a CIO knowledge challenge. |

### Dimensions

1. Diversification & Correlation
2. Liquidity & Horizon
3. Risk & Return
4. Governance & Rebalancing

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Diversification & Correlation | What risk is most directly increased when a large share of wealth is held in one company? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 2 | Diversification & Correlation | Which statement about diversification is most accurate? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 3 | Liquidity & Horizon | A family needs substantial cash in three years. Which allocation creates the clearest mismatch? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 4 | Liquidity & Horizon | What does the private-market J-curve commonly describe? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 5 | Risk & Return | Which statement best distinguishes volatility from permanent capital loss? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 6 | Risk & Return | What does an expected return represent? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 7 | Governance & Rebalancing | What is the core purpose of disciplined rebalancing? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 8 | Governance & Rebalancing | Why should manager fees and carry be evaluated on a net basis? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |

### Answer Key and Explanations

- 1: A, concentration increases idiosyncratic company-specific risk.
- 2: B, diversification depends on return drivers and correlations, not only count.
- 3: A, long illiquidity mismatches a near-term cash need.
- 4: B, early negative net cash flows or returns before later value creation/distributions may occur.
- 5: B, volatility is price variability; permanent loss is irreversible impairment or unrecoverable capital.
- 6: B, expected return is probability-weighted and not guaranteed.
- 7: A, rebalancing restores exposure toward agreed ranges.
- 8: B, fees and carry reduce the return actually retained.

### Scoring Contract

Each option carries 0-3 points. The best answer receives 3 points and a deliberately plausible but incomplete answer may receive 1 point only when the explanation justifies it. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. Overall mastery uses the balanced index: 0.70 * mean(dimensions) + 0.30 * weakestDimension. Answer order may be randomised only when numeric readability is preserved. The answer key and points must not be visible before completion.

Level bands:

| Score | Level |
| --- | --- |
| 0-39 | Curious |
| 40-59 | Foundation |
| 60-74 | Allocator |
| 75-89 | Portfolio Strategist |
| 90-100 | CIO-Level |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Diversification & Correlation | Diversifier |
| Liquidity & Horizon | Liquidity Planner |
| Risk & Return | Risk Allocator |
| Governance & Rebalancing | Rebalancing Governor |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Diversification & Correlation | Map look-through concentration by company, sector, geography, and underlying return driver. |
| Liquidity & Horizon | Create a five-year liquidity schedule and separate known commitments from risk capital. |
| Risk & Return | Define risk as a set of loss scenarios, not a single volatility number. |
| Governance & Rebalancing | Write target ranges, rebalancing triggers, and decision authority into an investment policy statement. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Curious | Core concepts are unreliable; show explanations and a short learning path before high-stakes use. |
| Foundation | Basic vocabulary is present, but scenario application is inconsistent; highlight recurring misconceptions. |
| Allocator | Standard cases are handled competently; direct learning toward edge cases and assumptions. |
| Portfolio Strategist | Strong applied understanding; recommend advanced scenarios and peer challenge. |
| CIO-Level | Advanced fluency; still flag jurisdiction-specific or high-stakes questions for specialist review. |

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

Portfolio Construction Literacy is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
