---
id: DS019
title: Evidence Revision Profile
status: implemented
owner: outfinity
summary: Profile measuring willingness to revise beliefs when confronted with contrary evidence, derived from actively open-minded thinking scales.
---

# Evidence Revision Profile

## Introduction

The Evidence Revision Profile explores how firmly the user holds beliefs and what would change them, measuring the tension between conviction and openness. It is implemented as a dedicated quiz page because the instrument combines Likert agreement answers with revision-condition choices.

## Core Content

### Source and Licensing

Inspired by actively open-minded thinking (AOT) scales from public domain and CC BY publications. Items are original adaptations.

Source: Inspired by AOT scales (public domain)
License: CC BY 4.0 for original items

### Instrument Design

**Question Count:** 12 statements with dual response (agreement + revision condition)
**Response Format:** 
1. Rate agreement (5-point Likert)
2. Indicate what evidence would change your mind (multiple choice)
**Duration:** 4-5 minutes
**Scoring:** Combined agreement and revision-condition scores

### Dimensions

1. **Conviction Strength** - How firmly beliefs are held
2. **Revision Openness** - Willingness to change beliefs
3. **Evidence Sensitivity** - Responsiveness to contrary evidence
4. **Value Anchoring** - Resistance to changing core values

### Viral Mechanics

- **Belief tension profile:** "I hold strong convictions but revise them quickly"
- **Challenge:** "How open are you to changing your mind?"
- **Comparison:** "Where do we differ in conviction vs. openness?"

### Result Interpretation

Shows positions on four axes describing the tension between conviction and openness. The public result includes a radar chart, text alternative, axis-by-axis interpretation, conviction-openness tension reading, share-safe aggregate link, downloadable card, and Explorer Circle recommendation. It avoids judgment about whether the user is "too rigid" or "too flexible."

### Implementation Notes

The quiz uses `instrument.json`, `interpretation.json`, `catalog.json`, and a dedicated `index.html`. The page reuses the shared quiz engine for question flow and the shared radar chart, URL codec, and share card modules for results. The result renderer computes the mixed scoring model directly from browser-held answers because the generic engine scoring modes do not cover the dual-response AOT-style format.

## Conclusion

Validates dual-response scoring and demonstrates belief-tension result format.
