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
| `/sitemap.html` | All Quizzes directory |

The catalog page is the entry point. It displays quiz cards with title, promise, duration, question count, category, method type label, priority where relevant, license or methodology status, and commercial recommendation flag. Filtering is local and intentionally compact: by Category first and Duration second. Filtering transmits no data and produces no persistent profile.

The default catalog and Category filter order places entrepreneurial and business diagnostics first: founders, finance and fundraising, investor and family capital, product and monetisation, growth/sales/leadership, and AI/trust/sustainable value. Older self-knowledge categories such as personality, identity and roles, philosophy/values, and cognition appear after the entrepreneurial catalog.

The All Quizzes page (`sitemap.html`) groups quizzes into separate category sections using the same business-first category order as the catalog. Each section shows a category heading, quiz count, and single-column compact cards with category and type metadata.

Each quiz page follows a fixed sequence: presentation, instructions, questions, complete result with diagram, sharing, attribution or methodology, and related quizzes or tools. The recommendation never appears before the complete result. A compact Outfinity initiative banner is rendered on every stage by default.

Navigation between quizzes uses cross-links on result pages ("Related explorations") and catalog cards. There is no global navigation bar beyond a link back to the catalog.

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

## Conclusion

The site structure prioritizes discoverability through the catalog and cross-linking rather than persistent navigation. Each quiz is a self-contained, shareable page.
