---
id: DS003
title: Radar Chart Module
status: draft
owner: outfinity
summary: SVG radar and polygon chart with configurable axes, multi-overlay support, responsive sizing, text alternative, and accessibility.
---

# Radar Chart Module

## Introduction

The radar chart module renders polygon diagrams on SVG for visualizing multi-dimensional quiz results. It supports single profiles, multi-overlay comparisons with transparency, and responsive sizing. It is the default result diagram for instruments that expose comparable dimensions, including four-axis business diagnostics and knowledge challenges.

## Core Content

The chart is rendered as inline SVG within the quiz page. It consists of concentric circular reference lines, axis lines radiating from the center, axis labels, and one or more data polygons representing quiz results.

Every quiz result must display a diagram. The radar module satisfies that requirement for any quiz that has dimensional scores. If a quiz adds a more specific visualization such as an answer-review map, heatmap, document map, or team dispersion view, the radar still remains the standard diagram unless the per-quiz DS explicitly states that the supplemental diagram is the primary result diagram.

The module accepts a configuration object containing: axis definitions (label, key), data points (one array per profile), color assignments, label font size, label font weight, label text color, optional level bands, optional strongest/weakest dimension markers, and an optional text alternative.

For single profiles, the data polygon is drawn with a semi-transparent fill and a solid stroke. For multi-overlay comparisons, each profile polygon uses a distinct color with reduced opacity so overlapping areas are visible.

Axis labels are positioned outside the outermost reference polygon. Short labels are preferred, but the renderer must not clip left or right axis text and must not replace axis labels with ellipses in the primary SVG chart. Longer labels should wrap into multiple SVG text lines inside an expanded viewBox.

The chart must include a text alternative below the SVG: a list of full axis names and their numeric values. This ensures the result is accessible without the visual chart.

The module respects `prefers-reduced-motion`. When reduced motion is preferred, polygon drawing animations are disabled and the chart appears instantly.

Data points on each axis are marked with small circles. Hovering or focusing a point displays the numeric value. The chart must not convey information exclusively through color.

## Decisions & Questions

### Question #1: Should the chart support animation?

Response: Yes, a subtle polygon drawing animation (under 500ms) is used by default. It is disabled when `prefers-reduced-motion` is active.

### Question #2: Should reference polygons use circles or geometric shapes?

Response: Concentric circles. They improve readability and keep value radii stable across short and long axis sets.

### Question #3: Are radar charts limited to personality-style profiles?

Response: No. Radar charts are the default way to compare any normalized dimensions, including maturity, readiness, literacy, diligence, governance, cybersecurity, ESG, and product diagnostics.

## Conclusion

The radar chart is the primary visualization for dimensional quiz results. It must be accessible, responsive, and support comparison overlays while allowing specialized result diagrams to supplement it where the quiz type requires them.
