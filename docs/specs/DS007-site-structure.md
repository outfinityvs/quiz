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
| `/` | Catalog of all explorations |
| `/explorer-compass/` | Explorer Compass quiz |
| `/basilisk-verdict/` | Basilisk Verdict quiz |
| `/methods/` | Methodology explanation |
| `/privacy/` | Privacy policy |
| `/licenses/` | Licenses and attributions |
| `/partners/` | Partner policy |

The catalog page is the entry point. It displays quiz cards with title, promise, duration, question count, method type label, license, and commercial recommendation flag. Filtering is local: by domain, duration, method type, and language. Filtering transmits no data and produces no persistent profile.

Each quiz page follows a fixed sequence: presentation, instructions, questions, complete result, methodology, optional next step, sharing, and related explorations. The recommendation never appears before the complete result.

Navigation between quizzes uses cross-links on result pages ("Related explorations") and catalog cards. There is no global navigation bar beyond a link back to the catalog.

Every quiz page includes Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`) for social sharing previews. The default OG image is `docs/assets/og-default.png`.

Method type labels are displayed explicitly on each quiz card and page:
- Research instrument: "Published instrument, used per original method and license."
- Derived map: "Based on open scales; Outfinity interpretation is experimental."
- Reflective exploration: "Original self-knowledge instrument; not a validated psychometric assessment."
- Interactive fiction: "Narrative experience; result does not represent a psychological evaluation."

## Decisions & Questions

### Question #1: Should there be a persistent navigation bar?

Response: No. The catalog page serves as the hub. Quiz pages have a back link to the catalog and cross-links to related quizzes. A persistent nav bar would add visual noise and distract from the quiz experience.

### Question #2: How should the catalog handle a growing number of quizzes?

Response: Local filtering by domain, duration, method type, and language. No search box initially. If the catalog exceeds 20 quizzes, a text search may be added.

## Conclusion

The site structure prioritizes discoverability through the catalog and cross-linking rather than persistent navigation. Each quiz is a self-contained, shareable page.
