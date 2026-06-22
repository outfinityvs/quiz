---
id: DS010
title: Basilisk Verdict
status: draft
owner: outfinity
summary: Interactive fiction mapping moral topology across eight axes, three aggregate indices (Moloch, Basilisk, Third Path), seven archetypes, and secondary modifiers.
---

# Basilisk Verdict

## Introduction

The Basilisk Verdict is an interactive fiction instrument that maps the user's moral topology across eight axes. It produces three aggregate indices and classifies the user into one of seven archetypes with optional secondary modifiers. It promotes a book and is published under CC BY 4.0.

## Core Content

The instrument presents 12 dilemmas, each with four options. Options are coded with profile types: M-ACCEL, M-SACR, B-CONTROL, B-CARE, T-POLY, T-BOUND, A-EXIT, H-REFUSE. Each profile type contributes specific values (−2 to +2) to the eight axes: Escalation, Sacrifice, Centralization, Legibility, Exit, Plurality, Limit, and Cooperation.

The three aggregate indices are computed as:
- Moloch = 0.55 × Escalation + 0.45 × Sacrifice
- Basilisk = 0.40 × Centralization + 0.35 × Legibility + 0.25 × (100 − Exit)
- Third Path = (Exit × Plurality × Limit × Cooperation) ^ 0.25

The Third Path uses geometric mean, meaning a single weak component reduces the entire score. This is a deliberate design choice: the Third Path cannot be achieved through compensation.

Seven archetypes are classified in priority order: Circuit Builder (Moloch ≥ 68 AND Basilisk ≥ 68), Third Path Candidate (Third Path ≥ 70, Moloch < 64, Basilisk < 64), Basilisk Disciple, Moloch Disciple, Capturable Idealist, Autonomous Anomaly, and Witness in Conflict (fallback).

Secondary modifiers add labels: Benevolent, Technocratic, Localist, Expansionist, Pluralist, Paternalist, Chronophage.

The visual theme is juridical-cosmic: dark background, serif headings, thin technical lines, Ω/∞ seal, and stamp-like verdict presentation. The result includes a case file number generated deterministically from the scores.

## Decisions & Questions

### Question #1: Should the deliberation animation be theatrical or functional?

Response: Theatrical but brief (under one second). The calculation is instant; the animation sets the tone without frustrating the user.

### Question #2: Should the Basilisk's voice appear throughout or only in the verdict?

Response: Only in the verdict. Questions remain relatively neutral to prevent the user from answering against the narrator rather than the dilemma.

## Conclusion

The Basilisk Verdict validates the engine's profile-based scoring, geometric mean computation, priority-ordered archetype classification, and secondary modifier system. It is the second quiz and the primary driver for book promotion.
