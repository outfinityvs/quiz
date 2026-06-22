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

The questions array supports the following response types: Likert scales (configurable points), single choice, forced choice (first and second preference), option ranking, scenarios with multidimensional weights, correct answers, prototype matching, decision trees, and conditional branching.

Scoring strategies supported by the engine: sum, mean, reverse-scored items, subscales, axis scores, geometric mean, prototype distance (Euclidean), threshold classification, and two-profile comparison. Each dimension is normalized to 0–100 using theoretical minimum and maximum values derived from the available response options.

The result computation determines the archetype or profile classification based on the scoring configuration. Results are expressed as scores on axes, never as percentages of an identity. The engine passes the computed result to the interpretation module for text generation.

State exists only in page memory by default. The engine exposes optional `saveProgress()` and `restoreProgress()` functions for `localStorage` opt-in, gated by explicit user action.

The engine renders questions one at a time or in configurable groups, with a progress indicator, keyboard navigation, and focus management. Each question uses `<fieldset>` with `<legend>` and real `<input type="radio">` controls.

## Decisions & Questions

### Question #1: Should the engine support multi-page question groups?

Response: Yes. The instrument JSON may define `groups` that cluster questions into pages. The default is one question per page. Groups are optional.

### Question #2: How should option order randomization work?

Response: Option order is randomized on first render and preserved in memory for the session. The randomization seed is not stored. Re-loading the page produces a new randomization.

### Question #3: How should the engine handle missing or invalid JSON?

Response: The engine displays a clear error message and does not proceed. It does not attempt to recover from malformed quiz definitions.

## Conclusion

The engine is a generic runtime that interprets declarative quiz definitions. It enforces the privacy contract by keeping all state in memory and supporting fragment-only result sharing.
