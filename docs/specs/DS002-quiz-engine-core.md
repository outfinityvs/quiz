---
id: DS002
title: Quiz Engine Core
status: draft
owner: outfinity
summary: JSON schema for quiz instruments, state machine, scoring strategies, result normalization, and rendering pipeline.
---

# Quiz Engine Core

## Introduction

The quiz engine is the central module of Outfinity Quiz. It provides a generic, reusable runtime that loads quiz definitions from JSON files, manages the interaction state machine, computes scores, and renders results. The engine has no external dependencies and runs entirely in the browser.

## Core Content

The engine operates as a state machine with the following stages: `intro`, `optionalContext`, `questions`, `deliberation`, `result`, `share`, `compare`. Each stage renders its own UI into a container element. Navigation between stages is controlled by the engine, with a persistent back button where appropriate.

Quiz definitions are loaded from `instrument.json` via `fetch` at page initialization. The instrument schema must include: an identity block (id, slug, version, title, language), an introduction block (promise, purpose, duration, limitations), a questions array, and a scoring configuration.

The questions array supports the following response types: Likert scales (configurable points), single choice, maturity ladder choices, forced choice (first and second preference), option ranking, scenarios with multidimensional weights, correct answers with explanation, prototype matching, paired answer distance, team aggregation, decision trees, and conditional branching.

Scoring strategies supported by the engine: sum, mean, reverse-scored items, subscales, axis scores, four-level maturity scoring, knowledge scoring, balanced overall index, geometric mean, prototype distance (Euclidean), threshold classification, two-profile comparison, paired alignment distance, team aggregation, and jurisdiction or context branching. Each dimension is normalized to 0–100 using theoretical minimum and maximum values derived from the available response options unless the quiz specification defines a stricter formula.

The result computation determines the archetype, level, mastery band, readiness band, alignment band, or profile classification based on the scoring configuration. Results are expressed as scores on dimensions or evidence bands, never as percentages of an identity. The engine passes the computed result to the interpretation module for text generation.

Every completed result must include a diagram. The default diagram for multidimensional instruments is a radar chart, including knowledge quizzes and maturity assessments with four dimensions. Other formats may add a heatmap, bar chart, document map, answer-review map, or team dispersion chart when the quiz DS requires it, but the result may not be text-only.

The standard four-dimension business-diagnostic strategy uses two items per dimension. Maturity/readiness items score A/B/C/D as 0/1/2/3 points. Knowledge items may assign 0-3 points per option, with 3 reserved for the best answer and 1 permitted only for a defensible partial answer. Dimension score is `100 * obtainedPoints / maxPoints`. The balanced overall index is `0.70 * mean(availableDimensionScores) + 0.30 * min(availableDimensionScores)`, rounded for display. Decimal values may be kept internally for calibration.

If a dimension lacks enough answered items to compute a defensible score, the engine must display `insufficient evidence` for that dimension and must not impute a value. Quiz DS files may define stricter omission thresholds.

State exists only in page memory by default. The engine exposes optional `saveProgress()` and `restoreProgress()` functions for `localStorage` opt-in, gated by explicit user action.

The engine renders questions one at a time or in configurable groups, with a progress indicator, keyboard navigation, and focus management. Each question uses `<fieldset>` with `<legend>` and real `<input type="radio">` controls.

Each stage can render a compact initiative banner (`quiz-initiative-banner`) above the stage content. A default Outfinity banner is applied globally, while quizzes can pass a custom `banner` object in the engine config to replace it or disable it.

Business diagnostics, knowledge challenges, readiness assessments, and four-axis maturity tools use `docs/engine/standard-diagnostic-page.js` as the generic page runtime. Individual quiz pages must not duplicate result-rendering logic when their behavior fits this standard runtime. They load `instrument.json` and `interpretation.json`; the runtime computes per-dimension scores, insufficient-evidence states, the balanced index, level bands, strongest and weakest dimensions, answer explanations for knowledge quizzes, evidence-confidence summaries for maturity/readiness instruments, share-safe cards, and the radar text alternative.

Evidence-confidence questions are context questions, not scoring questions. They may ask whether each dimensional answer is supported by opinion, anecdote, documentation, or system-verified evidence. The result displays this confidence separately and must not use it to inflate maturity, readiness, or knowledge scores.

## Decisions & Questions

### Question #1: Should the engine support multi-page question groups?

Response: Yes. The instrument JSON may define `groups` that cluster questions into pages. The default is one question per page. Groups are optional.

### Question #2: How should option order randomization work?

Response: Option order is randomized on first render and preserved in memory for the session. The randomization seed is not stored. Re-loading the page produces a new randomization.

### Question #3: How should the engine handle missing or invalid JSON?

Response: The engine displays a clear error message and does not proceed. It does not attempt to recover from malformed quiz definitions.

### Question #4: How should sharing actions be placed in the result view?

Response: Sharing options should remain in the same result section as the chart and stay visible while reading the interpretation on wide screens.

### Question #5: Should non-radar quiz types still render a visual result?

Response: Yes. Every quiz type must render a result diagram. Radar is the default whenever the quiz has two or more comparable dimensions, and four-axis business diagnostics must use a radar diagram unless the per-quiz DS explicitly adds another diagram as a supplement.

### Question #6: Should every new business diagnostic have a custom page script?

Response: No. The standard diagnostic runtime handles the shared interaction, scoring, result, methodology, and share-safe flows. Quiz-specific behavior belongs in declarative JSON unless a per-quiz DS explicitly requires an interaction the generic runtime cannot express.

### Question #7: Should evidence confidence affect the score?

Response: No. Evidence confidence is displayed as calibration context. A high maturity score with weak evidence should be interpreted cautiously, but the engine must not silently boost or penalize the balanced index based on confidence.

## Conclusion

The engine is a generic runtime that interprets declarative quiz definitions. It enforces the privacy contract by keeping all state in memory and supporting fragment-only result sharing.
