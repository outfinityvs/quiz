---
id: DS032
title: Startup Finance Literacy Challenge
status: implemented
owner: outfinity
summary: Founder finance literacy challenge covering unit economics, runway, dilution, and financial statements.
---

# Startup Finance Literacy Challenge

## Introduction

Startup Finance Literacy Challenge is a planned Outfinity Quiz instrument for an international, European, and Swiss audience. It must reuse the existing static quiz infrastructure, browser-first state model, shared engine components, compact initiative banner, result diagram, share card, catalog metadata, and privacy-by-design constraints. Public quiz copy is English for the MVP; future localisations should prioritise German, French, and Italian.

The instrument is educational. It must not present itself as legal, tax, financial, investment, medical, employment, regulatory, or psychometric certification advice.

## Core Content

### Instrument Metadata

| Field | Value |
| --- | --- |
| Public | Founders, startup employees, angel investors, and accelerator cohorts |
| Category | Finance, fundraising, and economic resilience |
| Format | Knowledge quiz |
| Priority | P1 |
| Estimated duration | 7-8 min |
| Public slug | /startup-finance-literacy-quiz |
| SEO focus | startup finance quiz; financial literacy for founders; unit economics quiz; dilution calculator quiz |
| Viral mechanic | Challenge framing around whether the user can pass founder finance basics. |

### Dimensions

1. Unit Economics
2. Cash & Runway
3. Cap Table & Dilution
4. Financial Statements

Each dimension must have exactly two scored public questions. Maturity and readiness instruments may add evidence-confidence context questions; these are displayed separately and are not scored. The result screen must show a diagram regardless of quiz type. For this four-dimensional instrument the default diagram is a radar chart with all four dimensions, the balanced score, and the level label.

### Public Questions and Answer Model

| # | Dimension | Public prompt | Required answer model |
| --- | --- | --- | --- |
| 1 | Unit Economics | Which formula correctly calculates gross margin percentage? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 2 | Unit Economics | A customer costs EUR 600 to acquire and generates EUR 150 of monthly gross profit. What is the simple CAC payback period? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 3 | Cash & Runway | A company has EUR 600,000 in cash and a stable monthly net burn of EUR 50,000. Ignoring future changes, what is its runway? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 4 | Cash & Runway | How can a fast-growing company report increasing revenue while running out of cash? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 5 | Cap Table & Dilution | An investor invests EUR 2 million at an EUR 8 million pre-money valuation. What is the investor post-money ownership before other adjustments? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 6 | Cap Table & Dilution | A new option pool is created immediately before a financing and included in the pre-money valuation. Who generally bears most of that dilution? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 7 | Financial Statements | Which statement shows assets, liabilities, and shareholders equity at a point in time? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |
| 8 | Financial Statements | Which statement best explains why a company can have positive EBITDA but declining cash? | A-D options score 0-3. The best answer receives 3; a partial answer may receive 1 only when the explanation justifies it. Public UI must not show points before completion. |

### Answer Key and Explanations

- 1: B, gross margin is (Revenue - COGS) / Revenue.
- 2: B, EUR 600 / EUR 150 = 4 months.
- 3: C, EUR 600,000 / EUR 50,000 = 12 months.
- 4: B, working capital and upfront growth costs can consume cash before collection.
- 5: B, EUR 2m / EUR 10m post-money = 20%.
- 6: B, a pre-money option pool top-up primarily dilutes existing holders.
- 7: C, the balance sheet presents financial position at a point in time.
- 8: A, the cash flow statement reconciles working capital, capex, and financing flows.

### Scoring Contract

Each option carries 0-3 points. The best answer receives 3 points and a deliberately plausible but incomplete answer may receive 1 point only when the explanation justifies it. Each dimension has two items and is normalised as dimensionScore = obtainedPoints / 6 * 100. Overall mastery uses the balanced index: 0.70 * mean(dimensions) + 0.30 * weakestDimension. Answer order may be randomised only when numeric readability is preserved. The answer key and points must not be visible before completion.

Level bands:

| Score | Level |
| --- | --- |
| 0-39 | Finance Curious |
| 40-59 | Finance Literate |
| 60-74 | Operator |
| 75-89 | CFO-Minded |
| 90-100 | Capital Fluent |

### Result Contract

The result must display the four-axis diagram, the balanced score, the level label, the strongest dimension, the weakest dimension, a positive archetype from the strongest dimension, and a next upgrade from the weakest dimension. The result must include two personalised insights, two 30-day actions, one reflection question, methodology date/version, limitations, and evidence-confidence language when supported by the UI.

Archetype mapping:

| Dimension | Archetype |
| --- | --- |
| Unit Economics | Unit Economics Analyst |
| Cash & Runway | Cash Guardian |
| Cap Table & Dilution | Ownership Strategist |
| Financial Statements | Financial Statement Reader |

Recommendations triggered by the weakest dimension:

| Weakest dimension | 30-day recommended action |
| --- | --- |
| Unit Economics | Build a contribution-margin and CAC-payback model by customer segment. |
| Cash & Runway | Maintain a rolling 13-week cash forecast and three runway scenarios. |
| Cap Table & Dilution | Model the cap table through the next financing, including options, convertibles, and pro-rata rights. |
| Financial Statements | Review the income statement, balance sheet, and cash flow statement together each month. |

Level copy requirements:

| Level | Result copy intent |
| --- | --- |
| Finance Curious | Core concepts are unreliable; show explanations and a short learning path before high-stakes use. |
| Finance Literate | Basic vocabulary is present, but scenario application is inconsistent; highlight recurring misconceptions. |
| Operator | Standard cases are handled competently; direct learning toward edge cases and assumptions. |
| CFO-Minded | Strong applied understanding; recommend advanced scenarios and peer challenge. |
| Capital Fluent | Advanced fluency; still flag jurisdiction-specific or high-stakes questions for specialist review. |

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

Startup Finance Literacy Challenge is specified as a planned, implementation-ready quiz definition that extends the Outfinity Quiz catalog while preserving the shared engine, result diagram requirement, privacy contract, transparent scoring, and ethical sharing rules.
