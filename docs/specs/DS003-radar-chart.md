---
id: DS003
title: Radar Chart Module
status: draft
owner: outfinity
summary: SVG radar and polygon chart with configurable axes, multi-overlay support, responsive sizing, text alternative, and accessibility.
---

# Radar Chart Module

## Introduction

The radar chart module renders polygon diagrams on SVG for visualizing multi-dimensional quiz results. It supports single profiles, multi-overlay comparisons with transparency, and responsive sizing.

## Core Content

The chart is rendered as inline SVG within the quiz page. It consists of concentric reference polygons (at 20, 40, 60, 80, 100), axis lines radiating from the center, axis labels, and one or more data polygons representing quiz results.

The module accepts a configuration object containing: axis definitions (label, key), data points (one array per profile), color assignments, and an optional text alternative.

For single profiles, the data polygon is drawn with a semi-transparent fill and a solid stroke. For multi-overlay comparisons, each profile polygon uses a distinct color with reduced opacity so overlapping areas are visible.

Axis labels are positioned outside the outermost reference polygon. Short labels are preferred. The chart must remain legible at 280px width on mobile.

The chart must include a text alternative below the SVG: a list of axis names and their numeric values. This ensures the result is accessible without the visual chart.

The module respects `prefers-reduced-motion`. When reduced motion is preferred, polygon drawing animations are disabled and the chart appears instantly.

Data points on each axis are marked with small circles. Hovering or focusing a point displays the numeric value. The chart must not convey information exclusively through color.

## Decisions & Questions

### Question #1: Should the chart support animation?

Response: Yes, a subtle polygon drawing animation (under 500ms) is used by default. It is disabled when `prefers-reduced-motion` is active.

### Question #2: Should reference polygons use circles or geometric shapes?

Response: Geometric polygons matching the number of axes. This provides better visual alignment with the data polygon vertices.

## Conclusion

The radar chart is the primary visualization for quiz results. It must be accessible, responsive, and support comparison overlays.
