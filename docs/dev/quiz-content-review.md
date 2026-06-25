# Quiz Content Review

## Scope

This review covers the current quiz catalog, with emphasis on the business, investor, product, growth, AI, cyber, privacy, ESG, hiring, customer-development, lean-startup, business-testing, leadership-team, and dark-pattern instruments introduced in DS026-DS062.

## Findings

The older self-knowledge quizzes are structurally complete: they have enough items for their intended lightweight purpose, clear result diagrams, and non-certification disclaimers. They should remain framed as exploratory or derived self-knowledge tools rather than business diagnostics.

The new business diagnostics were structurally correct but initially too superficial because most maturity/readiness instruments reused the same generic A-D ladder for every question. That made the score technically consistent but weak as a real diagnostic. A useful business assessment needs answer choices that describe observable practice, evidence, ownership, cadence, and decision quality in the context of the actual question.

The knowledge challenges are stronger because they already use domain-specific answer options and post-result explanations. They should keep answer-by-answer review and should not expose the answer key before completion.

## Applied Improvements

Business assessment answer options are now generated as question-specific maturity ladders. The generator classifies prompts into practical content families such as evidence, governance, finance, market, risk, data, and operating cadence, then writes A-D options around observable maturity rather than generic labels.

Generic answer-support checks were removed from maturity and readiness diagnostics. Calibration now belongs inside the scored answer wording, concept help, methodology note, and result guidance rather than in a separate pre-quiz questionnaire.

The standard result model now includes a radar chart, balanced index, level, strongest dimension, weakest dimension, archetype, 30-day action, reflection question, methodology limits, shareable link, downloadable card, and explicit local Save Result control.

The 2026-06 review completed missing result copy for all business diagnostics and knowledge challenges. Empty level descriptions, empty strongest-dimension archetypes, and empty weakest-dimension recommendations were replaced from the relevant DS contracts and converted into user-facing result language.

Every quiz introduction now explains the instrument's role more clearly. Business diagnostics are framed as private learning diagnostics for vocabulary, expectations, evidence, and improvement cycles. Knowledge challenges are framed as learning tools that teach through plausible wrong answers and post-result explanations. Reflective self-knowledge instruments now explicitly say that their terms are language for reflection and conversation, not permanent labels.

The review also fixed a catalog completeness issue: `evidence-revision` had catalog metadata and quiz JSON but no public `index.html`. It now has a dedicated page that supports its dual-response scoring model, radar result, text alternative, share-safe aggregate links, and Explorer Circle recommendation.

Investor Pitch Literacy Challenge was added as a new finance knowledge quiz. It teaches the typical structure and expectations of a first investor pitch across Pitch Structure, Problem & Customer, Traction & Ask, and Delivery & Follow-up.

The 2026-06 content expansion moved standard business diagnostics and knowledge challenges from two to three scored public questions per dimension, for 12 scored questions across four dimensions. Responsible AI keeps its two concrete context choices in addition to the 12 scored items.

Six new instruments were added: First Startup Hires Fit, Early Adopters & Customer Development, Lean Startup Practice Readiness, Business Idea Testing Readiness, Leadership Team Behaviour, and Dark Personality Pattern Check. The dark-pattern instrument is framed as a protective reflective screen: higher scores mean stronger protective behaviour against manipulation, entitlement, callousness, and impulse-boundary risk, not stronger dark traits.

The catalog now promotes a `Founder Essentials` group before the general category order. This curated preparation and validation path is sorted by likely founder usefulness: founder readiness, founder-market fit, product-market fit evidence, product discovery, early adopters and customer development, business idea testing, lean startup practice, first startup hires, fundraising, investor pitch literacy, positioning, growth experimentation, pricing and monetisation, startup finance, term sheet literacy, product management, founder operating system, co-founder alignment, leadership team behaviour, and entrepreneurial competence. The homepage presents this as `Founder Quizzes` with a compact cockpit hero, a radar visual rendered by the shared radar chart module, a two-column Founder Essentials path with numeric step markers, and a separate filtered library for the remaining instruments. The homepage Category filter and All Quizzes category sections are generated from `docs/catalog/catalog.json`, so adding or moving quizzes in the catalog updates the public directory without maintaining a second category list. Ordinary categories exclude featured entries in both places to avoid duplicate quiz placement; `Founder Essentials` remains the promoted path. Catalog and All Quizzes cards also show a local saved-result indicator when this browser has History entries for that quiz; the indicator opens History filtered to the quiz and does not expose individual answers.

The category taxonomy was consolidated to avoid near-empty buckets. Philosophy now lives under `Values and Philosophy`; identity and interests live under `Personality, Identity, and Vocation`; world-awareness content lives under `Cognition and Worldview`; and collaboration/trust tools live under `Growth, Leadership, and Collaboration`.

The 2026-06 follow-up added educational concept help to scored and concrete context questions. Each `conceptHelp` entry must explain the specific concept used by that question, not a generic calibration idea. The engine exposes concept help through a small inline `i` button placed after the question text and opens an in-page panel before the user answers. This is intentional: the quiz site is for learning, self-knowledge, and vocabulary fluency, not proctored testing. The standard diagnostic flow also keeps the real quiz title visible during context and question stages.

## Editorial Standard

Every business diagnostic should satisfy these checks before publication:

1. Each standard business diagnostic or knowledge challenge has three distinct scored questions per dimension unless a DS file explicitly defines a different research or legacy instrument structure.
2. Every A-D ladder is specific to the question, not a reusable generic maturity scale.
3. Option D describes observable, governed, evidence-backed practice, not vague excellence.
4. Option A describes a realistic absent or ad hoc state, not a strawman.
5. Results keep score calibration in the answer wording, methodology note, and result guidance rather than in a separate answer-support questionnaire.
6. Share cards do not expose sensitive weaknesses, answer-level errors, legal or financial details, internal governance gaps, security issues, or regulatory risk flags.
7. The result recommends one practical 30-day action tied to the weakest dimension.
8. Knowledge challenges must include answer explanations that teach the concept after completion.
9. Every public question should include `conceptHelp` when it uses a concept, method term, behavioural label, context category, or business vocabulary that a non-expert may not already know.
10. Context questions should be reserved for concrete inputs such as jurisdiction, role, stage, or domain, and their concept help should teach that specific context term.
11. Catalog entries must resolve to a real quiz directory with `index.html`, `instrument.json`, `interpretation.json`, and `catalog.json`.
12. Category filters should stay broad enough to avoid duplicate or one-item buckets unless a DS explicitly requires a separate public category.

## Remaining Limitations

The current business diagnostics are educational screening tools. They are more useful after the content upgrade, but they are not independently validated, predictive, certified, or professional advice. Benchmarks must remain disabled until a compatible sample exists and the sample size, period, and cohort criteria can be shown.
