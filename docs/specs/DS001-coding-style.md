---
id: DS001
title: Coding Style
status: draft
owner: outfinity
summary: Vanilla JavaScript, CSS, and HTML conventions, no-dependency rule, file naming, module structure, and testing approach.
---

# Coding Style

## Introduction

This specification defines the coding standards for Outfinity Quiz. The project uses only HTML semantic markup, CSS, and vanilla JavaScript. No frameworks, build tools, or external dependencies are permitted.

## Core Content

All JavaScript must be ES2020+ compatible and written as standard modules (`<script type="module">`) or classic scripts depending on the page structure. No transpilation, no bundling. Code must run directly in modern browsers.

CSS is written in a single global stylesheet (`docs/styles.css`) for the site shell and a shared engine stylesheet (`docs/engine/quiz-styles.css`) for quiz components. No CSS-in-JS, no preprocessors, no utility frameworks. Custom properties define the design tokens.

HTML must be semantic: `<main>`, `<section>`, `<article>`, `<fieldset>`, `<legend>`, `<nav>`, `<header>`, `<footer>`. Quiz questions use `<fieldset>` with `<legend>`. Answer options use real `<input type="radio">` controls with `<label>` elements.

File naming follows kebab-case for all files: `quiz-engine.js`, `radar-chart.js`, `share-card.js`. Quiz directories use the quiz slug: `explorer-compass/`, `basilisk-verdict/`.

JSON quiz files follow a fixed naming convention: `instrument.json`, `interpretation.json`, `catalog.json`, `recommendations.json`.

JavaScript modules export named functions and classes. No default exports. No global mutations. State is passed explicitly through function parameters.

The engine modules are: `quiz-engine.js` (state machine, scoring, rendering), `radar-chart.js` (SVG chart), `share-card.js` (Canvas card), `url-codec.js` (URL fragment encoding), `compare.js` (multi-result overlay). Each module is a single file under `docs/engine/`.

Testing is manual verification against acceptance criteria defined in each quiz's DS file. There is no automated test framework. Verification is performed by loading the quiz in a browser and checking deterministic output, share link round-trips, keyboard navigation, and accessibility.

All user-facing text uses `textContent`, never `innerHTML`, except for trusted static HTML templates defined in the source code. Decoded URL payloads are rendered exclusively through `textContent`.

## Decisions & Questions

### Question #1: Should we use ES modules or classic scripts?

Response: ES modules (`<script type="module">`) for engine files. Each quiz page imports the engine modules it needs. The quiz page itself uses a classic inline script for initialization that calls the imported engine.

### Question #2: How should design tokens be defined?

Response: CSS custom properties on `:root` in `docs/styles.css`. Tokens include colors, spacing, typography, and breakpoints. Quiz-specific overrides use scoped selectors.

## Conclusion

The coding style enforces simplicity, portability, and zero dependencies. Every quiz page must function after local download with no external resources.
