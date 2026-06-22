---
id: DS000
title: Project Vision
status: draft
owner: outfinity
summary: Product identity, user contract, subsite structure, implementation phases, and quality gates for Outfinity Quiz.
---

# Project Vision

## Introduction

Outfinity Quiz is a static subsite dedicated to free self-knowledge questionnaires. Each instrument runs entirely in the browser. Outfinity does not receive answers, scores, or profiles. The subsite is deployed from the `docs/` directory to `quiz.outfinity.ch`.

## Core Content

The product contract with visitors is defined by four principles: privacy by architecture (no data leaves the browser), complete results before any recommendation, explicit sharing only (no automatic posting), and honest methodology (no fake percentiles, no hidden scoring).

The subsite is multipage. Each quiz has its own URL, social metadata, description, methodology, and version. The catalog page at `/` allows local filtering by domain, duration, method type, and language. Filtering transmits no data.

The architecture separates a reusable engine from declarative quiz definitions. The engine handles state, scoring, rendering, charting, sharing, and comparison. Each quiz is defined by four independent JSON documents: instrument (questions and scoring), interpretation (results and texts), recommendations (optional partner mappings), and catalog (metadata).

Method types are explicitly labeled: published research instrument, derived map, reflective exploration, or interactive fiction. Results are expressed as scores on axes (0–100), never as percentages of an identity.

The implementation proceeds in six phases: foundation, core engine, Explorer Compass, Basilisk Verdict, viral circulation features, and additional quizzes. Each quiz must pass a quality gate covering rights, method, balance, result completeness, limitations, privacy, sharing safety, recommendation placement, accessibility, and versioning.

## Decisions & Questions

### Question #1: How should the docs/ directory serve dual purposes?

Response: The `docs/` directory is the deployable quiz subsite. Developer-facing technical documentation lives under `docs/dev/`. The GAMP specification infrastructure (`docs/specs/`, `docs/specsLoader.html`) coexists at the `docs/` root level since it is not deployed to the public site.

### Question #2: Should quizzes launch in English or Romanian first?

Response: English first. Romanian translations are added later as separate language files within each quiz directory.

## Conclusion

The vision establishes a privacy-first, dependency-free, JSON-driven quiz platform where the engine is reusable and each quiz is a declarative definition. All subsequent DS files derive their constraints from this vision.
