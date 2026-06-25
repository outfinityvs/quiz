---
id: DS007
title: Site Structure and Navigation
status: draft
owner: outfinity
summary: Route map, catalog page, thematic organization, cross-linking, card components, filter system, meta tags, and OG tags.
---

# Site Structure and Navigation

## Introduction

This specification defines the public route structure, navigation model, catalog page, and cross-linking strategy for Outfinity Quiz.

## Core Content

The subsite uses a multipage architecture. Each quiz has its own directory with an `index.html` entry point. Static informational pages occupy their own directories.

The route map is:

| Route | Function |
|---|---|
| `/` | Catalog of all quizzes |
| `/quizzes/<slug>/` | Individual quiz page |
| `/methods/` | Methodology explanation |
| `/privacy/` | Privacy policy |
| `/licenses/` | Licenses and attributions |
| `/history/` | Browser-local saved result history |
| `/sitemap.html` | All Quizzes directory |

The catalog page is the entry point and is framed as `Founder Quizzes`, not a generic quiz list. The first viewport combines a privacy-forward studio introduction, a radar visual rendered through the shared `docs/engine/radar-chart.js` module, primary links into `Founder Essentials` and `History`, and live catalog counts. The hero radar uses five visible labels: Competence, Market, Product, Capital, and Learning. The public title must render on one elegant line across supported viewport widths. Below that, quiz cards display title, promise, duration, question count, category, method type label, priority where relevant, license or methodology status, commercial recommendation flag, and a compact saved-result indicator when this browser has local History entries for that quiz. The saved-result indicator links to `/history/?quiz=<slug>` and must not expose individual answers. The default desktop homepage uses two-column card grids to keep cards readable; mobile viewports collapse to one column. Filtering is local and intentionally compact: by Category first and Duration second. Filtering transmits no data and produces no persistent profile.

The default catalog and Category filter order places entrepreneurial and business diagnostics first. A synthetic `Founder Essentials` group appears as a preparation and validation path before the rest of the catalog and includes the highest-value founder instruments in usefulness order: founder readiness, founder-market fit, product-market fit evidence, product discovery, early adopters and customer development, business idea testing, lean startup practice, first startup hires, fundraising readiness, investor pitch literacy, positioning, growth experimentation, pricing and monetisation, startup finance, term sheet literacy, product management, founder operating system, co-founder alignment, leadership team behaviour, and entrepreneurial competence. The homepage library hides those featured entries by default to avoid immediate duplication, while category filters can still reveal matching instruments across their normal domains. The remaining business order is founders, finance and fundraising, product and monetisation, growth/leadership/collaboration, and AI/trust/sustainable value. The catalog excludes family-office, family-governance, portfolio-allocation, and investor-side maturity tools that are not useful to founders seeking investors, partners, marketing clarity, product-management capability, go-to-market learning, early hiring, or leadership-team operating clarity. Older self-knowledge categories are intentionally broad and consolidated: personality/identity/vocation, values/philosophy, and cognition/worldview appear after the entrepreneurial catalog. The catalog must not expose duplicate or near-empty categories such as separate `philosophy`, `identity`, `interests`, `knowledge`, or `collaboration` buckets when their quizzes can sit naturally inside those broader groups.

The All Quizzes page (`sitemap.html`) groups quizzes into separate category sections using the same business-first category order as the catalog. It shows `Founder Essentials` as the first section and omits those featured entries from their ordinary category sections to avoid visual duplication. Each section shows a category heading, quiz count, and single-column compact cards with category and type metadata. Compact cards also show the local saved-result indicator when applicable.

Each quiz page follows a fixed sequence: presentation, instructions, questions, complete result with diagram, result actions, attribution or methodology, and related quizzes or tools. Result actions include a shareable link, downloadable share-safe card, and explicit `Save Result` control. The former generic native `Share` button is not part of the public result action set. The recommendation never appears before the complete result. A high-contrast Outfinity initiative banner is rendered on every stage by default and is intentionally styled as a visible promotional CTA using the inverse visual theme of the current page. Banner content comes from central engine presets and quiz pages assign presets by key instead of duplicating copy. The quiz title remains visible on optional context and question stages, and concept-specific questions can expose a compact learning button that opens an in-page explanation panel before the user answers.

Navigation between quizzes uses cross-links on result pages ("Related explorations") and catalog cards. The global menu includes `History` on every public page, even before anything has been saved, so users can inspect the local-only storage contract. The History page explains that nothing is saved automatically and lists only results explicitly saved in this browser's `localStorage`.

Every quiz page includes Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`) for social sharing previews. The default OG image is `docs/assets/og-default.png`.

Method type labels are displayed explicitly on each quiz card and page. Supported labels include research instrument, derived map, reflective exploration, interactive fiction, maturity assessment, readiness assessment, strategic fit assessment, paired alignment assessment, team maturity assessment, knowledge challenge, scenario-based maturity assessment, governance readiness assessment, and regulatory readiness assessment. Each label must carry a short limitation statement appropriate to the method.

Business diagnostic pages should support SEO content blocks without blocking the quiz. The public page may include an indexable introduction, methodology summary, dimensions, demonstrative questions, FAQ, glossary, and related tools. The quiz itself remains the primary action and the baseline result is free.

## Decisions & Questions

### Question #1: Should there be a persistent navigation bar?

Response: No. The catalog page serves as the hub. Quiz pages have a back link to the catalog and cross-links to related quizzes. A persistent nav bar would add visual noise and distract from the quiz experience.

### Question #2: How should the catalog handle a growing number of quizzes?

Response: Local filtering by Category and Duration. Method type remains visible on the card as context, but it is not a primary filter because the expanded catalog is easier to scan by audience/problem category. No search box initially. If the catalog exceeds 20 quizzes, a text search may be added.

### Question #3: Should the All Quizzes page remain one-column?

Response: Yes within each category section. The page itself should be sectioned by category so users can understand the catalog structure before scanning individual quiz cards.

### Question #4: Where should share actions sit in the result view?

Response: In the result context, close to the chart area so users can act immediately after seeing the profile.

### Question #5: Should the catalog distinguish self-knowledge quizzes from business diagnostics?

Response: Yes. The catalog should expose category and method type on each card so users understand whether they are taking a self-knowledge quiz, knowledge challenge, maturity assessment, readiness assessment, paired alignment flow, or regulatory diagnostic. The filter UI should stay simpler and use Category rather than a separate Type filter.

### Question #6: Should History be hidden until a result exists?

Response: No. History remains visible in the menu as an educational privacy signal. The empty state explains that results are saved only after the explicit `Save Result` action and only in browser `localStorage`.

### Question #7: Should the most useful founder quizzes be buried inside ordinary categories?

Response: No. The public catalog is now founder-focused, so the highest-value founder path is promoted as `Founder Essentials` before the ordinary category sequence. This group is a catalog curation layer, not a new quiz runtime type, and it can include quizzes from founders, finance, product, and growth categories.

### Question #8: Should local saved-result indicators appear on catalog cards?

Response: Yes. If this browser has saved results for a quiz, catalog and All Quizzes cards show a compact indicator that opens History filtered to that quiz. This helps users return to saved local results without implying that the site tracks them server-side.

### Question #9: Should the homepage remain a plain card directory?

Response: No. The homepage should feel like a founder diagnostic workspace. The catalog still remains the primary action, but the first screen now gives the site a stronger identity through a studio-style hero, a radar visual using the same chart renderer as quiz results, a curated Founder Essentials path, and a separate library area for the remaining instruments.

## Conclusion

The site structure prioritizes discoverability through the catalog and cross-linking rather than persistent navigation. Each quiz is a self-contained, shareable page.
