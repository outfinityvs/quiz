---
id: DS004
title: Share Card Module
status: draft
owner: outfinity
summary: Canvas-based 1080×1350 share card generation, SVG-to-Canvas pipeline, PNG download, and share-safe result artifacts.
---

# Share Card Module

## Introduction

The share card module generates downloadable, shareable image cards from quiz results. Cards are rendered using the Canvas API at 1080x1350 pixels, incorporating the result diagram, result text, and branding.

## Core Content

The card is generated only after explicit user action. It is never created automatically. The module accepts a configuration object containing: quiz title, result title, subtitle, diagram type, diagram data, score values, share text, quiz URL, and branding elements (logo SVG, color scheme).

The rendering pipeline: first, the result diagram is drawn as SVG or Canvas and converted to a Canvas image when needed. Then, the Canvas composites the background, logo, title, result text, diagram image, scores, share text, and URL into the final 1080x1350 card.

The logo is included as inline SVG data, not as an external image file. All text is rendered through Canvas text APIs, not through HTML injection.

The public result actions are separated:
1. Create shareable link copies a fragment-based result URL to the clipboard.
2. Download card generates and downloads the PNG result card.
3. Save Result stores a local-only result summary through `result-history.js`.

The generic native `Share` button is not part of the public result action set because support is inconsistent and the shareable link already covers the portable use case.

The card contains no advertising. It contains: the quiz name, the result archetype or title, a simplified diagram, aggregated scores or level band, one memorable sentence, and the quiz URL.

Share cards for business, finance, governance, security, and regulatory instruments must be private by default. They may reveal the level, strongest dimension, archetype, or challenge invitation, but must not reveal sensitive weaknesses, legal or financial vulnerabilities, individual answers, internal governance gaps, security control gaps, or customer-specific information.

## Decisions & Questions

### Question #1: Should the card include the full radar chart or a simplified version?

Response: A simplified version with fewer reference rings and larger data polygon for legibility at social media sizes when the quiz uses a radar diagram. Non-radar result diagrams must use an equivalently simplified share-safe diagram.

### Question #2: Should the card support dark and light themes?

Response: The card uses the quiz's visual theme. A dark background is the default for the Outfinity Quiz brand.

## Conclusion

The share card is a downloadable artifact. It must be visually compelling, self-contained, generated entirely in the browser, and safe to publish without exposing sensitive result details.
