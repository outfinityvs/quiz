# Backlog - Outfinity Quiz Implementation Tasks

Last updated: 2026-01-22

## Overview

This document tracks all remaining implementation tasks for the Outfinity Quiz platform. Tasks are organized by priority and phase.

---

## Phase 4: Core Quiz Implementation (High Priority)

### DS011 - Builder Traits Snapshot
- [ ] Create `docs/quizzes/builder-traits/instrument.json` with 20 IPIP items
- [ ] Create `docs/quizzes/builder-traits/interpretation.json` with axis descriptions
- [ ] Create `docs/quizzes/builder-traits/index.html` with quiz interface
- [ ] Implement Likert scoring with reverse items
- [ ] Generate shareable card with 5-axis profile
- [ ] Add IPIP attribution to footer
- [ ] Test with sample responses

### DS012 - Work Interest Constellation
- [ ] Create `docs/quizzes/work-interests/instrument.json` with 24 RIASEC-inspired items
- [ ] Create `docs/quizzes/work-interests/interpretation.json` with venture suggestions
- [ ] Create `docs/quizzes/work-interests/index.html` with quiz interface
- [ ] Implement radar chart visualization for 6 dimensions
- [ ] Generate shareable card with radar chart
- [ ] Add RIASEC attribution to footer
- [ ] Test with sample responses

### DS013 - Social Values Map
- [ ] Create `docs/quizzes/social-values/instrument.json` with 24 balanced items (4 axes × 6 items)
- [ ] Create `docs/quizzes/social-values/interpretation.json` with tension descriptions
- [ ] Create `docs/quizzes/social-values/index.html` with quiz interface
- [ ] Implement bipolar Likert scoring
- [ ] Generate shareable card with 4-axis profile
- [ ] Add 8values attribution to footer
- [ ] Test with sample responses

### DS014 - World Perception Challenge
- [ ] Create `docs/quizzes/world-perception/instrument.json` with 12 factual questions
- [ ] Verify all data sources (World Bank, OWID) and add citations
- [ ] Create `docs/quizzes/world-perception/interpretation.json` with perception style descriptions
- [ ] Create `docs/quizzes/world-perception/index.html` with quiz interface
- [ ] Implement correct-answer scoring with bias detection
- [ ] Generate shareable card with perception profile
- [ ] Add data source attribution to footer
- [ ] Test with sample responses

### DS015 - Decision Style Profile
- [ ] Create `docs/quizzes/decision-style/instrument.json` with 15 scenario-based items
- [ ] Create `docs/quizzes/decision-style/interpretation.json` with decision reflex descriptions
- [ ] Create `docs/quizzes/decision-style/index.html` with quiz interface
- [ ] Implement scenario-based scoring
- [ ] Generate shareable card with 5-axis profile
- [ ] Test with sample responses

### DS016 - Collaboration Species
- [ ] Create `docs/quizzes/collaboration-species/instrument.json` with 10 forced-choice scenarios
- [ ] Create `docs/quizzes/collaboration-species/interpretation.json` with species descriptions
- [ ] Create `docs/quizzes/collaboration-species/index.html` with quiz interface
- [ ] Implement forced-choice scoring (first=3, second=1)
- [ ] Implement team constellation feature (3+ participants)
- [ ] Generate shareable card with species profile
- [ ] Test with sample responses

---

## Phase 5: Additional Quiz Implementation (Medium Priority)

### DS017 - Trust Architecture
- [ ] Create `docs/quizzes/trust-architecture/instrument.json` with 10 scenarios
- [ ] Create `docs/quizzes/trust-architecture/interpretation.json` with trust mechanism descriptions
- [ ] Create `docs/quizzes/trust-architecture/index.html` with quiz interface
- [ ] Implement profile scoring for 5 trust mechanisms
- [ ] Generate shareable card with trust blueprint
- [ ] Test with sample responses

### DS018 - Risk Palate
- [ ] Create `docs/quizzes/risk-palate/instrument.json` with 10 risk scenarios
- [ ] Create `docs/quizzes/risk-palate/interpretation.json` with risk appetite descriptions
- [ ] Create `docs/quizzes/risk-palate/index.html` with quiz interface
- [ ] Implement 3-option Likert scoring
- [ ] Generate shareable "risk menu card"
- [ ] Test with sample responses

### DS019 - Evidence Revision Profile
- [ ] Create `docs/quizzes/evidence-revision/instrument.json` with 12 dual-response items
- [ ] Create `docs/quizzes/evidence-revision/interpretation.json` with belief tension descriptions
- [ ] Create `docs/quizzes/evidence-revision/index.html` with quiz interface
- [ ] Implement dual-response scoring (agreement + revision condition)
- [ ] Generate shareable card with belief tension profile
- [ ] Add AOT scale attribution to footer
- [ ] Test with sample responses

### DS020 - Conflict Signature
- [ ] Create `docs/quizzes/conflict-signature/instrument.json` with 8 forced-choice scenarios
- [ ] Create `docs/quizzes/conflict-signature/interpretation.json` with conflict approach descriptions
- [ ] Create `docs/quizzes/conflict-signature/index.html` with quiz interface
- [ ] Implement forced-choice scoring (first=3, second=1)
- [ ] Generate shareable card with conflict signature
- [ ] Test with sample responses

### DS021 - Energy Economics
- [ ] Create `docs/quizzes/energy-economics/instrument.json` with 12 paired activities
- [ ] Create `docs/quizzes/energy-economics/interpretation.json` with energy pattern descriptions
- [ ] Create `docs/quizzes/energy-economics/index.html` with quiz interface
- [ ] Implement paired-choice scoring
- [ ] Generate shareable "energy ledger" card
- [ ] Test with sample responses

### DS022 - Time Horizon Portrait
- [ ] Create `docs/quizzes/time-horizon/instrument.json` with 15 Likert items
- [ ] Create `docs/quizzes/time-horizon/interpretation.json` with time orientation descriptions
- [ ] Create `docs/quizzes/time-horizon/index.html` with quiz interface
- [ ] Implement Likert scoring for 5 time orientations
- [ ] Generate shareable card with time orientation radar
- [ ] Add Zimbardo attribution to footer
- [ ] Test with sample responses

---

## Phase 6: Quick Quiz Implementation (High Priority - Viral Potential)

### DS023 - Intelligence Type Profile
- [ ] Create `docs/quizzes/intelligence-type/instrument.json` with 20 scenario-based items
- [ ] Create `docs/quizzes/intelligence-type/interpretation.json` with intelligence type descriptions
- [ ] Create `docs/quizzes/intelligence-type/index.html` with quiz interface
- [ ] Implement multiple-choice scoring for 8 intelligence types
- [ ] Generate shareable card with intelligence profile radar
- [ ] Add Multiple Intelligences attribution to footer
- [ ] Test with sample responses

### DS024 - Quick MBTI-Style Quiz
- [ ] Create `docs/quizzes/quick-mbti/instrument.json` with 12 binary-choice items
- [ ] Create `docs/quizzes/quick-mbti/interpretation.json` with 16 type descriptions
- [ ] Create `docs/quizzes/quick-mbti/index.html` with quiz interface
- [ ] Implement binary-choice scoring for 4 dimensions
- [ ] Generate shareable card with type code (e.g., "INTJ")
- [ ] Add Jungian/MBTI attribution to footer
- [ ] Test with sample responses

### DS025 - Quick Big Five Mini
- [ ] Create `docs/quizzes/quick-bigfive/instrument.json` with 10 IPIP items
- [ ] Create `docs/quizzes/quick-bigfive/interpretation.json` with brief dimension descriptions
- [ ] Create `docs/quizzes/quick-bigfive/index.html` with quiz interface
- [ ] Implement ultra-short Likert scoring (2 items per dimension)
- [ ] Generate shareable card with 5-axis profile
- [ ] Add IPIP attribution to footer
- [ ] Test with sample responses

---

## Phase 7: Engine Improvements (Medium Priority)

### Scoring System Fixes
- [ ] Fix Basilisk Verdict scoring bug (theoreticalMax values incorrect)
- [ ] Verify all quiz scoring calculations match DS specifications
- [ ] Add unit tests for all scoring functions in `docs/engine/scoring.js`
- [ ] Test edge cases (all same answers, extreme values, missing data)

### Card Generation System
- [ ] Create `docs/engine/card-generator.js` module
- [ ] Implement dynamic card generation from quiz results
- [ ] Support custom card templates per quiz type
- [ ] Add image upload/generation for quiz-specific cards
- [ ] Test card generation for all quiz types

### Recommendation System
- [ ] Create `docs/engine/recommendation-engine.js` module
- [ ] Implement recommendation logic based on quiz results
- [ ] Create recommendation database (quiz results → ventures/resources)
- [ ] Add recommendation display to quiz result pages
- [ ] Test recommendations for all quiz types

### Comparison Features
- [ ] Implement "Compare with a friend" feature for all quizzes
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
- [ ] Add progress indicators for multi-page quizzes
- [ ] Implement "save and resume" feature (optional, localStorage)
- [ ] Add keyboard navigation for all quiz interfaces
- [ ] Improve mobile responsiveness for all quiz pages
- [ ] Add accessibility features (ARIA labels, screen reader support)

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
- [ ] Verify all source attributions are correct and complete
- [ ] Review all quiz content for cultural sensitivity
- [ ] Add content warnings where appropriate
- [ ] Create DMCA/contact process for content concerns

---

## Phase 10: Testing and Quality Assurance (Ongoing)

### Automated Testing
- [ ] Run `node tests/scoring.test.js` after each scoring change
- [ ] Run `node scripts/generate_matrix.mjs` after each DS change
- [ ] Run `node .agents/skills/gamp-specs/scripts/verify_static_site.js docs/` before deployment
- [ ] Add integration tests for quiz flows

### Manual Testing
- [ ] Test each quiz on desktop (Chrome, Firefox, Safari)
- [ ] Test each quiz on mobile (iOS Safari, Android Chrome)
- [ ] Test each quiz with screen readers
- [ ] Test each quiz with keyboard-only navigation
- [ ] Test share card generation for each quiz
- [ ] Test comparison features for each quiz

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
- [x] Create sitemap page with all tests grouped by category
- [x] Abstract engine scoring logic, write 28 unit tests (all pass)
- [x] Write DS011-DS022 for 12 new quiz sources
- [x] Verify all 20 paths OK, 28 tests pass

---

## Notes

### Priority Guidelines
- **High Priority:** Core functionality, viral potential, user-facing features
- **Medium Priority:** Additional features, improvements, optimizations
- **Low Priority:** Nice-to-have, documentation, polish

### Dependencies
- Phase 4-6 quizzes depend on Phase 7 engine improvements
- Phase 8 features depend on Phase 4-6 quiz implementation
- Phase 9-10 can proceed in parallel with other phases

### Estimated Effort
- Each quiz implementation: 4-8 hours
- Engine improvements: 8-16 hours
- Platform features: 16-32 hours
- Total remaining: ~200-400 hours

### Success Criteria
- All 15 quizzes (DS011-DS025) implemented and tested
- All scoring calculations verified correct
- All share cards generated successfully
- All comparison features working
- All quizzes pass accessibility testing
- All quizzes load in <2s on mobile

---

## Next Actions

1. **Immediate:** Fix Basilisk Verdict scoring bug (DS010)
2. **This Week:** Implement DS011 (Builder Traits Snapshot)
3. **This Sprint:** Complete Phase 4 quizzes (DS011-DS016)
4. **Next Sprint:** Complete Phase 5-6 quizzes (DS017-DS025)
5. **Ongoing:** Engine improvements and platform features

---

## Questions and Decisions

### Open Questions
- Should we implement all 15 quizzes or prioritize a subset?
- Should we add multilingual support before or after all quizzes are implemented?
- Should we create a quiz creation tool for non-developers?

### Recent Decisions
- **2026-01-22:** Decided to write detailed DS specifications for all quizzes before implementation
- **2026-01-22:** Decided to use light theme as default with dark theme toggle
- **2026-01-22:** Decided to make quiz cards fully clickable for better UX
- **2026-01-22:** Decided to use relative links throughout the platform

---

## Contact

For questions about this backlog or implementation priorities, contact:
- Email: quiz@outfinity.ch
- GitHub: https://github.com/outfinity/quiz
