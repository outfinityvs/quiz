---
id: DS006
title: Compare Module
status: draft
owner: outfinity
summary: Multi-result radar overlay with transparency, labeled profiles, complementarity calculation, and collaboration agreement generation.
---

# Compare Module

## Introduction

The compare module compares two or more quiz results through a shared visual result diagram, enabling visual comparison, alignment analysis, complementarity analysis, and safe team aggregation. It supports "Compare Our Maps," paired alignment, team constellation, founder-pair unlock, and anonymized team-dispersion features.

## Core Content

The module accepts an array of result objects, each containing: label (person name or identifier), scores array, optional color, optional role, and optional comparison mode. Dimensional results are rendered as overlapping polygons on a shared radar chart with distinct colors and reduced opacity. Alignment results may use a per-item or per-dimension heatmap when the quiz DS defines answer-distance scoring.

The comparison flow: Person A completes the quiz and generates a shareable link. Person B opens the link, sees an invitation to take the quiz and compare results. After Person B completes the quiz, the module overlays both results.

Labels are assigned by the user. Person A's label defaults to "You" and can be edited. Person B enters their name or label when starting the comparison. For team constellations, each participant enters a label.

The complementarity analysis computes: shared strengths (dimensions where both score above a threshold), complementary pairs (dimensions where one scores high and the other low, matching the quiz's complementarity map), and tension points (dimensions where both score high or both score low in ways the quiz identifies as potentially conflicting).

The collaboration agreement is a text generated from the complementarity analysis. It follows a template defined in the quiz's interpretation JSON, filling in the specific dimensions and scores. The text is displayed and can be copied.

For team constellations (3+ participants), the module additionally identifies: redundant roles (dimensions where multiple people score high), absent roles (dimensions where nobody scores high), score dispersion, and the team's overall coverage pattern. Team views must enforce the privacy threshold defined by the relevant quiz DS before displaying aggregate data.

The module renders the overlay chart or comparison heatmap, a textual comparison summary, and the collaboration agreement. All rendering uses `textContent` for dynamic values.

## Decisions & Questions

### Question #1: How many results can be compared simultaneously?

Response: Two for "Compare Our Maps," up to eight for "Team Constellation." Beyond eight, the overlay becomes visually illegible.

### Question #2: Should comparison results be shareable?

Response: Yes for low-sensitivity quizzes and explicit paired invitations. Business, investor, family, cybersecurity, regulatory, and team results must share only safe aggregate summaries unless all participants explicitly approve the disclosure.

### Question #3: Should paired founder alignment be treated as maturity scoring?

Response: No. In solo mode it is a preference profile. In paired mode it is an answer-distance alignment map. It must not label one preference as inherently more mature unless the per-quiz DS defines an explicit readiness bonus for documented agreements.

## Conclusion

The compare module is the primary social and viral feature. It transforms individual results into relational insights, driving invitations and sharing.
