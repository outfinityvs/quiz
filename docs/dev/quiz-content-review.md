# Quiz Content Review

## Scope

This review covers the current quiz catalog, with emphasis on the business, investor, product, growth, AI, cyber, privacy, and ESG diagnostics introduced in DS026-DS055.

## Findings

The older self-knowledge quizzes are structurally complete: they have enough items for their intended lightweight purpose, clear result diagrams, and non-certification disclaimers. They should remain framed as exploratory or derived self-knowledge tools rather than business diagnostics.

The new business diagnostics were structurally correct but initially too superficial because most maturity/readiness instruments reused the same generic A-D ladder for every question. That made the score technically consistent but weak as a real diagnostic. A useful business assessment needs answer choices that describe observable practice, evidence, ownership, cadence, and decision quality in the context of the actual question.

The knowledge challenges are stronger because they already use domain-specific answer options and post-result explanations. They should keep answer-by-answer review and should not expose the answer key before completion.

## Applied Improvements

Business assessment answer options are now generated as question-specific maturity ladders. The generator classifies prompts into practical content families such as evidence, governance, finance, market, risk, data, and operating cadence, then writes A-D options around observable maturity rather than generic labels.

Maturity and readiness diagnostics now include answer-support checks per dimension. These ask whether the user's answers are supported by opinion, anecdote, documentation, or system-verified evidence. Answer support is displayed separately as calibration context and does not inflate the score.

The standard result model now includes a radar chart, balanced index, level, strongest dimension, weakest dimension, archetype, 30-day action, reflection question, methodology limits, shareable link, downloadable card, explicit local Save Result control, and answer support where applicable.

The 2026-06 review completed missing result copy for all business diagnostics and knowledge challenges. Empty level descriptions, empty strongest-dimension archetypes, and empty weakest-dimension recommendations were replaced from the relevant DS contracts and converted into user-facing result language.

Every quiz introduction now explains the instrument's role more clearly. Business diagnostics are framed as private learning diagnostics for vocabulary, expectations, evidence, and improvement cycles. Knowledge challenges are framed as learning tools that teach through plausible wrong answers and post-result explanations. Reflective self-knowledge instruments now explicitly say that their terms are language for reflection and conversation, not permanent labels.

The review also fixed a catalog completeness issue: `evidence-revision` had catalog metadata and quiz JSON but no public `index.html`. It now has a dedicated page that supports its dual-response scoring model, radar result, text alternative, share-safe aggregate links, and Explorer Circle recommendation.

Investor Pitch Literacy Challenge was added as a new finance knowledge quiz. It teaches the typical structure and expectations of a first investor pitch across Pitch Structure, Problem & Customer, Traction & Ask, and Delivery & Follow-up.

The catalog now promotes a `Founder Essentials` group before the general category order. This curated path highlights the most useful founder-facing instruments across entrepreneurial competence, founder readiness, founder-market fit, investor pitch literacy, product-market fit evidence, fundraising, product discovery, product management, positioning, growth experimentation, startup finance, and term sheet literacy. Catalog and All Quizzes cards also show a local saved-result indicator when this browser has History entries for that quiz; the indicator opens History filtered to the quiz and does not expose individual answers.

The 2026-06 follow-up added educational concept help to scored, context, and answer-support questions. Each `conceptHelp` entry must explain the specific concept used by that question, not a generic calibration idea. For answer-support questions, the panel should teach the real dimension being calibrated and only briefly explain how support level affects interpretation. The engine exposes concept help through a small inline `i` button placed after the question text and opens an in-page panel before the user answers. This is intentional: the quiz site is for learning, self-knowledge, and vocabulary fluency, not proctored testing. The standard diagnostic flow also keeps the real quiz title visible during answer-support and question stages.

## Editorial Standard

Every business diagnostic should satisfy these checks before publication:

1. Each scored dimension has at least two distinct questions.
2. Every A-D ladder is specific to the question, not a reusable generic maturity scale.
3. Option D describes observable, governed, evidence-backed practice, not vague excellence.
4. Option A describes a realistic absent or ad hoc state, not a strawman.
5. Results separate maturity score from answer support.
6. Share cards do not expose sensitive weaknesses, answer-level errors, legal or financial details, internal governance gaps, security issues, or regulatory risk flags.
7. The result recommends one practical 30-day action tied to the weakest dimension.
8. Knowledge challenges must include answer explanations that teach the concept after completion.
9. Every public question should include `conceptHelp` when it uses a concept, method term, behavioural label, context category, or business vocabulary that a non-expert may not already know.
10. Answer-support and context questions may include concept help, but the help should teach the specific quiz dimension or context term, not generic "answer support" as if it were the quiz concept.
11. Catalog entries must resolve to a real quiz directory with `index.html`, `instrument.json`, `interpretation.json`, and `catalog.json`.

## Remaining Limitations

The current business diagnostics are educational screening tools. They are more useful after the content upgrade, but they are not independently validated, predictive, certified, or professional advice. Benchmarks must remain disabled until a compatible sample exists and the sample size, period, and cohort criteria can be shown.
