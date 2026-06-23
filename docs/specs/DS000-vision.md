---
id: DS000
title: Project Vision
status: draft
owner: outfinity
summary: Product identity, user contract, subsite structure, implementation phases, and quality gates for Outfinity Quiz.
---

# Project Vision

## Introduction

Outfinity Quiz is a static subsite dedicated to free self-knowledge quizzes, business diagnostics, knowledge challenges, and lightweight readiness assessments. Each instrument runs in the browser unless a future, explicitly consented feature requires server-side aggregation. Individual answers, private scores, and profiles must not be transmitted by default. The subsite is deployed from the `docs/` directory to `quiz.outfinity.ch`.

## Core Content

The product contract with visitors is defined by four principles: privacy by architecture for individual answers, complete baseline results before any recommendation, explicit sharing only, and honest methodology. The product must not invent percentiles, hide scoring logic, claim certification, or imply clinical, legal, tax, financial, investment, employment, or regulatory advice.

The subsite is multipage. Each quiz has its own URL, social metadata, description, methodology, and version. The catalog page at `/` allows compact local filtering by Category and Duration. Filtering transmits no data.

The architecture separates a reusable engine from declarative quiz definitions. The engine handles state, scoring, rendering, charting, sharing, and comparison. Each quiz is defined by JSON documents: instrument (questions and scoring), interpretation (results and texts), catalog (metadata), and optional recommendation resources when a quiz needs partner or next-tool mappings.

Method types are explicitly labeled. Supported families include published research instruments, derived maps, reflective explorations, interactive fiction, maturity assessments, readiness assessments, knowledge challenges, paired alignment assessments, team maturity assessments, regulatory readiness assessments, and scenario-based decision quizzes. Results are expressed as interpretable dimensions or evidence bands, never as percentages of an identity or as validated predictions of future performance.

Every completed quiz result must display a diagram. For four-axis maturity and knowledge instruments the default diagram is a radar chart. Paired, team, regulatory, and knowledge formats may add heatmaps, score bars, answer-review maps, or document maps, but they must still include a visual result diagram plus a text alternative.

Business, investor, family-office, AI, cyber, ESG, and regulatory instruments are educational diagnostics. They may suggest next actions, templates, calculators, or qualified-review prompts, but must not present the result as professional advice or eligibility determination.

Each quiz must pass a quality gate covering rights, method, balance, result completeness, diagram rendering, limitations, privacy, sharing safety, recommendation placement, accessibility, versioning, and category-specific integrity constraints. Benchmarks require a real sample, compatible quiz versions, visible cohort criteria, and transparent sample size.

## Decisions & Questions

### Question #1: How should the docs/ directory serve dual purposes?

Response: The `docs/` directory is the deployable quiz subsite. Developer-facing technical documentation lives under `docs/dev/`. The GAMP specification infrastructure (`docs/specs/`, `docs/specsLoader.html`) coexists at the `docs/` root level since it is not deployed to the public site.

### Question #2: Should quizzes launch in English or Romanian first?

Response: English first. Romanian translations are added later as separate language files within each quiz directory.

### Question #3: Can the platform host business diagnostics in addition to self-knowledge quizzes?

Response: Yes. The platform may host business, investor, family-office, product, AI, cyber, and ESG diagnostics when they preserve the same privacy-first baseline, transparent scoring, explicit limitations, and browser-first implementation model.

## Conclusion

The vision establishes a privacy-first, dependency-free, JSON-driven quiz platform where the engine is reusable and each quiz is a declarative definition. All subsequent DS files derive their constraints from this vision.
