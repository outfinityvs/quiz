# Review and Fixes

Date: 2026-06-24

## Scope

Reviewed the expanded Outfinity Quiz catalog and then pruned it to the current 42 public quiz entries. The review focused on question and answer quality, incomplete content, first-screen explanatory text, result usefulness, catalog completeness, DS alignment, founder relevance, and static-site validity.

## Main Findings

1. The older self-knowledge quizzes were mostly structurally complete. Their biggest weakness was framing: first-screen copy did not always explain that the result is meant as reflection language, not a permanent identity label.
2. The business diagnostics had the largest quality gap. Many had useful question prompts but incomplete `interpretation.json` files: empty level copy, empty strongest-dimension archetypes, and empty weakest-dimension recommendations.
3. Several newer diagnostics still contained generic A-D answer ladders such as "No reliable practice exists yet" and "The practice is governed..." without enough connection to the question.
4. Knowledge challenges had good question structure but incomplete result copy, reducing learning value after completion.
5. `evidence-revision` was listed in the catalog but had no public `index.html`, so its card linked to a missing page.
6. The repository already had DS000-DS055, but `AGENTS.md` still said the next new DS after DS022 was DS023.

## Global Fixes Applied

- Improved first-screen quiz descriptions across the catalog.
- Completed missing `levels.copy`, `archetypes`, and `recommendations` in all affected business, finance, product, investor, AI, security, ESG, and knowledge quiz interpretations.
- Replaced remaining generic A-D maturity ladder text with clearer dimension-specific wording.
- Added a dedicated public page for `evidence-revision`.
- Added the new `Investor Pitch Literacy Challenge` quiz.
- Added DS056 for the investor pitch quiz and regenerated `docs/specs/matrix.md`.
- Updated `AGENTS.md` to keep DS numbering guidance current.
- Updated `docs/dev/quiz-content-review.md` with the new review standards and applied improvements.

## Follow-Up Learning and UI Fixes

- Replaced the unclear public confidence wording with `Answer support` in quiz introductions, catalog metadata, result copy, developer docs, and DS files. Answer support means what the user's answer was based on: opinion, anecdote, documentation, or system-verified evidence. It remains separate from the maturity or knowledge score.
- Updated the standard diagnostic flow so the real quiz title stays visible during answer-support and question stages. The user no longer lands on a generic stage title without knowing which quiz they are taking.
- Added educational `conceptHelp` content to all 456 scored questions and all 88 context questions in the current public catalog. Each concept help entry defines the concept used by that specific question, explains why it matters, gives an answering cue, includes an example tied to the question, and links to stable learning references where useful.
- Updated answer-support/context help so the `i` button teaches the real dimension or context term being asked about, not a generic "evidence basis" concept. Evidence-style context questions now use titles such as `Probabilistic Thinking`, `Customer Access`, or `AI role in the value chain`, while support level remains a calibration detail.
- Added an in-page concept learning panel to the generic quiz engine. The UI shows a compact inline concept button after the question text, opens a half-page side panel, supports outside-click close, Escape close, and focus restoration, and renders JSON text through DOM text nodes rather than HTML injection.
- Fixed the question-title layout so the inline `i` concept button stays visibly aligned with scored and context question prompts even when the prompt wraps across multiple lines.
- Removed the old Explorer Compass context renderer override so that its context questions now use the same standard question legend and inline concept help as the rest of the catalog.
- Rewrote generated concept labels and summaries that were too generic or misleading, including MBTI-style pairs, collaboration mode, conflict style, trust mechanism, evidence revision, AI adoption concepts, responsible AI scope/privacy/oversight concepts, product instrumentation, diligence concepts, decision-style concepts, energy patterns, risk domains, and world-data literacy.
- Audited concept reference links and replaced five Wikipedia URLs that returned 404 with stable alternatives.
- Improved visual contrast and consistency across catalog cards, stage headers, question options, result sections, answer-support cards, recommendation blocks, share surfaces, and the Outfinity initiative banner. The updated design uses stronger borders, accent edges, subtle shadows, hover lift, and more consistent card treatment.
- Rebuilt the Outfinity initiative banner as a central preset system in `docs/engine/banner-presets.js`. The duplicated `Outfinity Diagnostic` banner objects in 24 business quiz JSON files were replaced with the `outfinity-explorer-circle` preset key, so future banners can be added once and assigned by key.
- Updated the banner copy to use `Outfinity Venture Validation Studio` as the title, ask `Entrepreneur or AI Expert?` on its own line, invite users to `Join Explorer Circle for Venture Validation, Partners, and AI-Native Projects`, link to `https://outfinity.ch/studio/explorer-circle.html`, and display a local copy of the Outfinity SVG logo from `docs/assets/outfinity.svg`.
- Restyled the initiative banner as a deliberately high-contrast promotional CTA: light theme gets a dark banner, dark theme gets a light banner, with stronger border, shadow, logo block, and CTA treatment.
- Replaced the public native `Share` result action with `Save Result`. Standard diagnostic pages now render Create shareable link, Download card, and Save Result; custom result pages are enhanced centrally by `result-history.js` so legacy native-share buttons are replaced after render.
- Added `/history/` as a browser-local saved-results page. Results are saved only after the explicit Save Result click, can be labelled for shared computers, are stored only in this browser's `localStorage`, and can be deleted individually or all at once. Individual answers are not stored in History.
- Added a persistent `History` menu link across public pages to make the local-only storage contract visible even before anything has been saved.
- Added local History indicators to catalog and All Quizzes cards. When this browser has saved results for a quiz, the card shows a compact saved-results badge that opens History filtered to that quiz.
- Added a curated `Founder Essentials` catalog group and filter. Entrepreneurial Competence Compass, Founder Readiness Radar, Founder-Market Fit, Investor Pitch Literacy Challenge, Product-Market Fit Evidence, Fundraising Readiness Radar, Product Discovery Maturity, Product Management Mastery Challenge, Positioning & Brand Differentiation, Growth Experimentation Maturity, Startup Finance Literacy Challenge, and Term Sheet Literacy Challenge now appear first.
- Corrected the Explorer Circle destination to `https://outfinity.ch/studio/explorer-circle.html` in the central banner preset and legacy recommendation links.
- Reworded public methodology notes from `Version 1 uses...` to `The current version uses...`.
- Normalized letter spacing in touched CSS to `0` and removed viewport-dependent font sizing from the updated shared styles.

## Founder-Focused Catalog Pruning

- Removed six public quiz directories and catalog entries that were not aligned with the founder-focused catalog direction: `Angel Investor Readiness`, `Venture Due Diligence Maturity`, `Investment Decision Quality & Bias`, `Portfolio Construction Literacy`, `Family Office Institutional Maturity`, and `Family Governance & Succession Readiness`.
- Removed the `Investor and family capital` filter from the homepage because no remaining public quiz uses that domain.
- Marked DS037-DS042 as retired rather than deleting their DS numbers, preserving contiguous DS numbering while making clear that the public quiz pages have been removed.
- Updated vision, site-structure, privacy, share-card, and review documentation so the public catalog is framed around founders seeking investors or partners, startup finance/fundraising, marketing, product management, growth, leadership, AI, security, and sustainable value.
- Aligned the homepage hero card with the two-column quiz grid and changed the filters to a left-aligned two-column layout with equal-width controls.

## Per-Quiz Review Notes

| Quiz | Review result | Fix applied |
| --- | --- | --- |
| Co-Founder Alignment & Compatibility | Relevant paired-alignment topic, but intro/result copy was too sparse and several A-D options were generic. | Improved intro framing, completed result levels/archetypes/recommendations, and clarified generic answer ladders. |
| Decision-Making Under Uncertainty | Strong topic and useful dimensions; one answer ladder and result interpretation were incomplete. | Improved intro, completed result copy, added archetypes/recommendations, and clarified the generic ladder. |
| Entrepreneurial Competence Compass | All questions were relevant but answer ladders were too generic across all dimensions. | Improved intro, completed result copy, and replaced generic maturity wording with clearer dimension language. |
| Founder Operating System | Good operating dimensions; result was incomplete and several questions used generic maturity wording. | Improved intro, completed result copy, added archetypes/recommendations, and clarified weak answer ladders. |
| Founder Readiness Radar | Relevant founder readiness content; some answers were generic and results lacked guidance. | Improved intro, completed result copy and 30-day recommendations, and clarified generic answer options. |
| Founder-Market Fit | Good strategic-fit scope; several items needed clearer evidence wording and result explanation. | Improved intro, completed result interpretation, and replaced generic options. |
| Business Model Resilience Stress Test | Useful diagnostic, but result guidance and a few answer ladders were incomplete. | Improved intro, completed result copy/archetypes/recommendations, and clarified options. |
| Fundraising Readiness Radar | Strong fit with catalog; result copy was missing and several fundraising-process options were generic. | Improved intro, completed result content, and clarified process/deal-readiness answer ladders. |
| Investor Pitch Literacy Challenge | Missing from catalog before this task. | Added new 8-question knowledge challenge, catalog entry, page, interpretation, and DS056. |
| Investor Data Room Readiness | Valuable checklist scope; result content missing and two options were generic. | Improved intro, completed result copy, and clarified corporate/IP answer ladders. |
| Startup Finance Literacy Challenge | Good learning questions; result copy/archetypes/recommendations were missing. | Improved intro and completed knowledge result interpretation. |
| Term Sheet Literacy Challenge | Strong educational topic; result interpretation was incomplete. | Improved intro and completed knowledge result interpretation. |
| Angel Investor Readiness | Relevant investor diagnostic, but not aligned with the founder-focused catalog direction. | Retired from the public catalog and removed quiz files. |
| Family Governance & Succession Readiness | Outside the founder, fundraising, partner, marketing, and product-management scope. | Retired from the public catalog and removed quiz files. |
| Family Office Institutional Maturity | Outside the founder-focused catalog scope. | Retired from the public catalog and removed quiz files. |
| Investment Decision Quality & Bias | Investor-process diagnostic, not a founder-facing learning tool. | Retired from the public catalog and removed quiz files. |
| Portfolio Construction Literacy | Portfolio-allocation literacy, not useful enough for the target founder audience. | Retired from the public catalog and removed quiz files. |
| Venture Due Diligence Maturity | Assessed investor-side diligence maturity rather than founder readiness. | Retired from the public catalog and removed quiz files. |
| Pricing & Monetisation Maturity | Strong dimensions; many answer ladders were generic and result copy missing. | Improved intro, completed interpretation, and clarified answer options. |
| Product Discovery Maturity | Relevant discovery diagnostic; several generic ladders and empty interpretation. | Improved intro, completed interpretation, and clarified problem/experiment options. |
| Product Management Mastery Challenge | Good knowledge quiz; result interpretation missing. | Improved intro and completed knowledge result interpretation. |
| Product-Led Growth Readiness | Useful PLG diagnostic; multiple answer ladders generic and result empty. | Improved intro, completed interpretation, and clarified options. |
| Product-Market Fit Evidence | Good PMF scope; interpretation missing despite strong question content. | Improved intro and completed result copy/archetypes/recommendations. |
| B2B Sales Engine Readiness | Relevant sales readiness topic; some generic answers and empty interpretation. | Improved intro, completed interpretation, and clarified ICP/process answer options. |
| Growth Experimentation Maturity | Good experimentation topic; several generic answer ladders and empty result. | Improved intro, completed interpretation, and clarified portfolio/design/learning options. |
| Positioning & Brand Differentiation | Relevant brand diagnostic; two options generic and interpretation empty. | Improved intro, completed interpretation, and clarified category/value options. |
| Scale Leadership Readiness | Useful leadership scope; several generic ladders and empty interpretation. | Improved intro, completed interpretation, and clarified delegation/operating/culture options. |
| AI Adoption Readiness | Relevant AI transformation diagnostic; many generic answer ladders and empty interpretation. | Improved intro, completed interpretation, and clarified AI value/data/workflow/governance options. |
| Cybersecurity & Privacy Readiness | Good security/privacy scope; result empty and one generic detect/respond ladder. | Improved intro, completed interpretation, and clarified generic option text. |
| Responsible AI & EU/Swiss Readiness | Relevant regulatory-readiness topic; result empty and one oversight ladder generic. | Improved intro, completed interpretation, and clarified human-oversight options. |
| Sustainable Value & ESG Readiness | Useful ESG readiness scope; result empty and one sustainability-target ladder generic. | Improved intro, completed interpretation, and clarified operations/value-chain options. |
| Collaboration Species | Structurally complete reflective quiz; first-screen role could be clearer. | Added explicit reflection-language framing to the intro. |
| Conflict Signature | Structurally complete reflective quiz; first-screen role could be clearer. | Added explicit reflection-language framing to the intro. |
| Trust Architecture | Structurally complete reflective quiz; first-screen role could be clearer. | Added explicit reflection-language framing to the intro. |
| World Perception Challenge | Strong data-awareness challenge; first-screen learning role could be clearer. | Added reflection/learning framing while keeping source and data limitations. |
| Work Interest Constellation | Good RIASEC-inspired interest map; first-screen role could be clearer. | Added reflection-language framing. |
| Builder Traits Snapshot | Structurally complete public-domain/IPIP-inspired quiz; first-screen role could be clearer. | Added reflection-language framing. |
| Energy Economics | Complete reflective profile; first-screen role could be clearer. | Added reflection-language framing. |
| Quick Big Five Mini | Complete quick self-knowledge quiz; first-screen role could be clearer. | Added reflection-language framing. |
| Quick MBTI-Style Quiz | Complete quick self-knowledge quiz; first-screen role could be clearer. | Added reflection-language framing. |
| Time Horizon Portrait | Complete derived profile; first-screen role could be clearer. | Added reflection-language framing. |
| Explorer Compass | Strong flagship role/ecology quiz; first-screen already good but could better explain terminology use. | Added reflection-language framing. |
| Social Values Map | Complete values-tension map; first-screen role could be clearer. | Added reflection-language framing. |
| The Basilisk Verdict | Complete interactive-fiction quiz; first-screen role could be clearer. | Added reflection-language framing while keeping the fiction frame. |
| Decision Style Profile | Complete decision-style map; first-screen role could be clearer. | Added reflection-language framing. |
| Evidence Revision Profile | Good dual-response instrument, but catalog linked to missing page. | Added dedicated `index.html`, mixed scoring renderer, radar result, share-safe links, and updated DS019. |
| Intelligence Type Profile | Complete derived cognitive-strengths profile; first-screen role could be clearer. | Added reflection-language framing. |
| Risk Palate | Complete risk-domain profile; first-screen role could be clearer. | Added reflection-language framing. |

## New Investor Pitch Quiz

Added `docs/quizzes/investor-pitch-literacy-quiz/` with:

- `index.html`
- `instrument.json`
- `interpretation.json`
- `catalog.json`

The quiz has 8 scenario questions across:

- Pitch Structure
- Problem & Customer
- Traction & Ask
- Delivery & Follow-up

It teaches typical investor-pitch expectations: opening narrative, story order, customer specificity, why-now logic, traction quality, funding ask, Q&A handling, and follow-up discipline.

## Documentation and Specs

- Added `docs/specs/DS056-investor-pitch-literacy.md`.
- Updated `docs/specs/DS019-evidence-revision.md` to implemented status and documented the dedicated mixed-scoring page.
- Regenerated `docs/specs/matrix.md`.
- Updated `docs/dev/quiz-content-review.md`.
- Updated `AGENTS.md` DS numbering guidance.

## Verification

Commands run successfully:

- `node .agents/skills/gamp-specs/scripts/generate_specs_matrix.mjs`
- `node .agents/skills/gamp-specs/scripts/verify_docs_links.mjs`
- `node .agents/skills/gamp-specs/scripts/verify_static_site.js docs/`
- JSON parse audit for all quiz JSON files and the master catalog.
- Catalog completeness audit for every entry: 42 catalog entries verified.
- Removed-slug audit: the six retired investor/family/portfolio-side quiz directories are absent and none appears in the public catalog.
- DS continuity audit: DS000-DS056 contiguous.
- Empty interpretation audit: no empty `levels.copy`, `archetypes`, or `recommendations` remain in affected standard interpretations.
- Generic maturity wording audit: old generic phrases no longer appear.

Additional follow-up checks run successfully after the learning/UI update:

- Legacy terminology scan: no remaining old confidence-label public strings.
- Concept help coverage audit: all 456 scored quiz questions and all 88 context questions have `conceptHelp`; no public catalog question is missing a learning entry.
- Context concept audit: all answer-support/context questions now expose the inline `i` button when rendered by the standard engine.
- Quiz runtime audit: all 42 public quiz pages use either `createEngine()` or `mountStandardDiagnosticPage()`; no public quiz page keeps a manual question renderer that bypasses the inline concept-help legend.
- Concept text audit: no remaining old calibration-label concept text, generated fallback phrasing, `Quiz concept`, `concept concept`, `Evidence basis`, `Answer support for ...`, `undefined`, `null`, `ResourceSovereignty`, or `DistributedGovernance` labels in concept help.
- External concept reference audit: 90 unique concept URLs checked by HTTP HEAD; no 4xx failures remained after replacing five broken Wikipedia links.
- Catalog/context consistency audit: catalog descriptions only mention answer-support checks for quizzes that actually include answer-support context questions; knowledge quizzes without that step now promise answer review and learning explanations instead.
- CSS audit: no viewport-dependent font-size functions remain in `docs/styles.css` or `docs/engine/quiz-styles.css`; all `letter-spacing` declarations in those files are set to `0`.
- Local server smoke test: `http://127.0.0.1:8080/` returned `200 OK`; the removed `family-office-maturity-assessment` route returned `404 File not found`.
- Screenshot automation note: Playwright and browser executables were not installed in this workspace, so visual screenshot verification could not be run. Layout verification was done through CSS review, static-site checks, and server smoke tests.

## Remaining Notes

The quiz platform is still an educational diagnostic system, not a validated psychometric, legal, investment, financial, regulatory, employment, tax, or medical advice product. Benchmarks and percentiles remain intentionally absent until compatible samples and transparent cohort criteria exist.
