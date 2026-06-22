---
id: DS006
title: Compare Module
status: draft
owner: outfinity
summary: Multi-result radar overlay with transparency, labeled profiles, complementarity calculation, and collaboration agreement generation.
---

# Compare Module

## Introduction

The compare module overlays two or more quiz results on a single radar chart, enabling visual comparison and complementarity analysis. It supports the "Compare Our Maps" and "Team Constellation" viral features.

## Core Content

The module accepts an array of result objects, each containing: label (person name or identifier), scores array, and optional color. Results are rendered as overlapping polygons on a shared radar chart with distinct colors and reduced opacity.

The comparison flow: Person A completes the quiz and generates a shareable link. Person B opens the link, sees an invitation to take the quiz and compare results. After Person B completes the quiz, the module overlays both results.

Labels are assigned by the user. Person A's label defaults to "You" and can be edited. Person B enters their name or label when starting the comparison. For team constellations, each participant enters a label.

The complementarity analysis computes: shared strengths (dimensions where both score above a threshold), complementary pairs (dimensions where one scores high and the other low, matching the quiz's complementarity map), and tension points (dimensions where both score high or both score low in ways the quiz identifies as potentially conflicting).

The collaboration agreement is a text generated from the complementarity analysis. It follows a template defined in the quiz's interpretation JSON, filling in the specific dimensions and scores. The text is displayed and can be copied.

For team constellations (3+ participants), the module additionally identifies: redundant roles (dimensions where multiple people score high), absent roles (dimensions where nobody scores high), and the team's overall coverage pattern.

The module renders the overlay chart, a textual comparison summary, and the collaboration agreement. All rendering uses `textContent` for dynamic values.

## Decisions & Questions

### Question #1: How many results can be compared simultaneously?

Response: Two for "Compare Our Maps," up to eight for "Team Constellation." Beyond eight, the overlay becomes visually illegible.

### Question #2: Should comparison results be shareable?

Response: Yes. The comparison view can generate its own shareable link encoding all overlaid results. The payload grows linearly with the number of participants.

## Conclusion

The compare module is the primary social and viral feature. It transforms individual results into relational insights, driving invitations and sharing.
