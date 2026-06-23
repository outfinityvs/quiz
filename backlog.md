# Backlog - Outfinity Quiz Implementation Tasks

Last updated: 2026-06-23

## Overview

This document tracks remaining implementation tasks for the Outfinity Quiz platform. Tasks are organized by priority and phase. All 17 quizzes (DS009–DS025) are implemented.

---

## Phase 7: Engine Improvements (Medium Priority)

### Scoring System Fixes
- [ ] Verify all quiz scoring calculations match DS specifications
- [ ] Add unit tests for new quiz scoring (DS011–DS025 forced-choice, profile, likert, custom)
- [ ] Test edge cases (all same answers, extreme values, missing data)
- [ ] Review Evidence Revision (`type: custom`) and Quick MBTI (8-pole profile) scoring for consistency

### Card Generation System
- [ ] Create `docs/engine/card-generator.js` module (de-duplicate per-quiz generateCard functions)
- [ ] Implement dynamic card generation from quiz results, single API
- [ ] Support custom card templates per quiz type
- [ ] Test card generation for all quiz types

### Recommendation System
- [ ] Create `docs/engine/recommendation-engine.js` module
- [ ] Implement recommendation logic based on quiz results
- [ ] Create recommendation database (quiz results → ventures/resources)
- [ ] Add recommendation display to quiz result pages (consistent across all quizzes)
- [ ] Test recommendations for all quiz types

### Comparison Features
- [ ] Implement "Compare with a friend" feature for all quizzes (currently inline per-quiz)
- [ ] Create comparison visualization (overlay two profiles)
- [ ] Generate comparison insights (complementarity, gaps, alignment)
- [ ] Add shareable comparison cards
- [ ] Test comparison features for all quiz types

---

## Phase 8: Platform Features (Low Priority)

### Advertising Card System
- [ ] Design advertising card template for quiz pages
- [ ] Create advertising card for each quiz (dynamic, elegant)
- [ ] Implement card placement on quiz intro and result pages
- [ ] Add tracking for card clicks (privacy-respecting)
- [ ] Test card display on all quiz pages

### User Experience Improvements
- [ ] Add progress indicators for multi-page quizzes (already partial in some quizzes)
- [ ] Implement "save and resume" feature (optional, localStorage)
- [ ] Add keyboard navigation for all quiz interfaces
- [ ] Improve mobile responsiveness for all quiz pages
- [ ] Add accessibility features (ARIA labels, screen reader support) across the new quizzes

### Analytics and Insights
- [ ] Implement privacy-respecting analytics (no tracking)
- [ ] Track quiz completion rates (aggregate, anonymous)
- [ ] Track most popular quiz types (aggregate, anonymous)
- [ ] Generate insights report for quiz improvement
- [ ] Add admin dashboard for analytics viewing

---

## Phase 9: Content and Documentation (Low Priority)

### Quiz Content Expansion
- [ ] Add more questions to existing quizzes (optional depth mode)
- [ ] Create alternative question sets for cultural adaptation
- [ ] Add multilingual support (Romanian, Spanish, French)
- [ ] Create quiz bundles (themed collections)

### Documentation
- [ ] Update `docs/dev/index.html` with complete technical documentation
- [ ] Create user guide for quiz creators
- [ ] Create API documentation for quiz engine
- [ ] Add contribution guidelines for new quiz development

### Legal and Compliance
- [ ] Verify all source attributions are correct and complete (incl. 8values, RIASEC, IPIP, Zimbardo, Gardner, OWID, World Bank, AOT)
- [ ] Review all quiz content for cultural sensitivity
- [ ] Add content warnings where appropriate
- [ ] Create DMCA/contact process for content concerns

---

## Phase 10: Testing and Quality Assurance (Ongoing)

### Automated Testing
- [ ] Run `node tests/scoring.test.js` after each scoring change
- [ ] Extend tests to cover DS011–DS025 quiz scoring (forced-choice, profile, likert, 8-pole binary)
- [ ] Run `node .agents/skills/gamp-specs/scripts/verify_static_site.js docs/` before deployment
- [ ] Run `node .agents/skills/gamp-specs/scripts/verify_docs_links.mjs` after DS changes
- [ ] Regenerate `docs/specs/matrix.md` via `node .agents/skills/gamp-specs/scripts/generate_specs_matrix.mjs`
- [ ] Add integration tests for quiz flows (JSON validity, engine end-to-end)

### Manual Testing
- [ ] Test each quiz on desktop (Chrome, Firefox, Safari)
- [ ] Test each quiz on mobile (iOS Safari, Android Chrome)
- [ ] Test each quiz with screen readers
- [ ] Test each quiz with keyboard-only navigation
- [ ] Test share card generation for each quiz
- [ ] Test comparison features for each quiz
- [ ] Test shared-result fragment round-trips for each quiz

### Performance Testing
- [ ] Optimize quiz page load times (<2s)
- [ ] Optimize card generation (<1s)
- [ ] Minimize JavaScript bundle size
- [ ] Implement lazy loading for non-critical resources

---

## Completed Tasks

### Phase 0-3: Foundation and First Quizzes ✓
- [x] Create directory structure
- [x] Write AGENTS.md
- [x] Write DS000-DS001, DS007-DS008
- [x] Create docs shell (index.html, styles.css, partials, static pages, assets)
- [x] Install specsLoader and generate matrix.md
- [x] Write DS002-DS006 (engine module specs)
- [x] Implement quiz-engine.js (state machine, scoring, rendering)
- [x] Implement radar-chart.js, share-card.js, url-codec.js, compare.js
- [x] Implement quiz-styles.css
- [x] Write DS009 + Explorer Compass JSON + HTML
- [x] Write DS010 + Basilisk Verdict JSON + HTML
- [x] Run verification (all 18 paths OK)

### Recent Improvements ✓
- [x] Analyze outfinity.ch styles for light/dark themes
- [x] Rewrite CSS: light theme default, dark theme toggle, wider layout, larger fonts, justified text
- [x] Fix quiz cards to be fully clickable
- [x] Fix all links to be relative (no root assumptions)
- [x] Fix quiz link paths (added quizzes/ prefix in catalog)
- [x] Fix weird texts (changed to "Sharing is your choice")
- [x] Create sitemap page with all quizzes grouped by category
- [x] Abstract engine scoring logic, write 28 unit tests (all pass)
- [x] Write DS011-DS025 for 15 new quiz sources
- [x] Verify all 20 paths OK, 28 tests pass
- [x] Add bipolar `.quiz-axis` styles to quiz-styles.css

### Phase 4-6: All 17 Quizzes Implemented (DS009–DS025) ✓
- [x] DS011 Builder Traits Snapshot (20 IPIP, 5 bipolar axes, Likert + reverse)
- [x] DS012 Work Interest Constellation (24 RIASEC-inspired, 6 dims, radar)
- [x] DS013 Social Values Map (24 items, 4 bipolar axes, 8values-inspired)
- [x] DS014 World Perception Challenge (12 factual MCQ, 4 perception dims, sourced)
- [x] DS015 Decision Style Profile (15 scenarios, 5 bipolar axes)
- [x] DS016 Collaboration Species (10 forced-choice, 5 species, team constellation)
- [x] DS017 Trust Architecture (10 scenarios, 5 trust mechanisms)
- [x] DS018 Risk Palate (10 scenarios, 3-option appetite, 5 risk types)
- [x] DS019 Evidence Revision Profile (12 dual-response, 4 axes, AOT-inspired)
- [x] DS020 Conflict Signature (8 forced-choice, 5 approaches)
- [x] DS021 Energy Economics (12 paired-choice, 6 energy dims)
- [x] DS022 Time Horizon Portrait (15 Likert, 5 orientations, Zimbardo-inspired)
- [x] DS023 Intelligence Type Profile (20 self-rating, 8 types, non-IQ)
- [x] DS024 Quick MBTI-Style Quiz (12 binary, 4 dims, 16 type codes)
- [x] DS025 Quick Big Five Mini (10 IPIP, 5 dims, ultra-short Likert)
- [x] Update catalog/catalog.json with all 15 entries
- [x] Rewrite sitemap.html with real quizzes (remove "Coming soon")
- [x] Simplify site header (Home + All Quizzes + theme toggle; Privacy only in footer)
- [x] Remove /partners/ page and all references
- [x] Drop Sources/Licenses from header (per-quiz attribution instead)

---

## Notes

### Priority Guidelines
- **High Priority:** Core functionality, viral potential, user-facing features
- **Medium Priority:** Additional features, improvements, optimizations
- **Low Priority:** Nice-to-have, documentation, polish

### Dependencies
- Phase 8 features depend on Phase 7 engine improvements
- Phase 9-10 can proceed in parallel with other phases

### Success Criteria
- All scoring calculations verified correct (DS009-DS025)
- All share cards generated successfully
- All comparison features working
- All quizzes pass accessibility testing
- All quizzes load in <2s on mobile

---

## Next Actions

1. **Immediate:** Run static site verification and scoring tests; fix any regressions in the 17 quizzes
2. **This Sprint:** Engine improvements (card generator, recommendation module, comparison features)
3. **Next Sprint:** Platform features (progress indicators, accessibility polish)
4. **Ongoing:** Testing and quality assurance across all 17 quizzes

---

## Questions and Decisions

### Open Questions
- Should we add multilingual support before or after platform features?
- Should we create a quiz creation tool for non-developers?
- Should comparison overlays live in-engine (compare.js) or stay per-quiz?

### Recent Decisions
- **2026-06-23:** All 15 quizzes DS011–DS025 implemented in one pass (instrument + interpretation + catalog + index.html per quiz)
- **2026-06-23:** Site header simplified to Home + All Quizzes + theme toggle; Privacy lives only in footer
- **2026-06-23:** /partners/ page removed; per-quiz attribution moved into each quiz's result page
- **2026-01-22:** Decided to write detailed DS specifications for all quizzes before implementation
- **2026-01-22:** Decided to use light theme as default with dark theme toggle
- **2026-01-22:** Decided to make quiz cards fully clickable for better UX
- **2026-01-22:** Decided to use relative links throughout the platform

---

## Contact

For questions about this backlog or implementation priorities, contact:
- Email: quiz@outfinity.ch
- GitHub: https://github.com/outfinity/quiz
