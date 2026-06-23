---
id: DS013
title: Social Values Map
status: draft
owner: outfinity
summary: Values profile inspired by 8values, mapping four axes of social and political tension without ideological labels.
---

# Social Values Map

## Introduction

The Social Values Map explores the user's positions on four axes of social values, revealing the tensions they carry rather than assigning ideological labels. Inspired by the 8values project, this quiz avoids reductive political categorization (e.g., "socialist," "libertarian") and instead describes the value conflicts that shape the user's worldview.

## Core Content

### Source and Licensing

The 8values project is an open-source political quiz that measures positions on eight value axes. The project is released under the MIT license, allowing unrestricted use, modification, and commercial application.

**Important:** We do NOT reproduce 8values items or use all eight axes. Instead, we create original items for four carefully selected axes that are most relevant to venture builders and social entrepreneurs. This simplifies the quiz while maintaining conceptual rigor.

Source: https://github.com/8values/8values.github.io
License: MIT (permissive, allows commercial use)
Modification: Original items created, inspired by 8values structure
Commercial use: Permitted

### Instrument Design

**Question Count:** 24 statements (6 per axis, balanced pro/con)
**Response Format:** 5-point agreement scale (Strongly Disagree to Strongly Agree)
**Duration:** 3-4 minutes
**Scoring Method:** Sum of agreement scores per axis, with reverse scoring for balanced items

### Dimensions and Axes

The quiz measures four value axes, each representing a fundamental social tension:

1. **Equality ↔ Merit**
   - Equality pole: Society should prioritize reducing inequality, even if it limits individual achievement
   - Merit pole: Society should reward individual effort and talent, even if it creates inequality
   - Tension: Fairness vs. incentive
   - Venture context: Cooperative vs. competitive business models, profit distribution

2. **Local ↔ Global**
   - Local pole: Communities should prioritize local needs, culture, and autonomy
   - Global pole: Communities should prioritize global cooperation, universal values, and cosmopolitanism
   - Tension: Particularity vs. universality
   - Venture context: Local community ventures vs. scalable global platforms

3. **Liberty ↔ Authority**
   - Liberty pole: Individual freedom should be maximized, even if it creates social disorder
   - Authority pole: Social order should be maintained, even if it limits individual freedom
   - Tension: Autonomy vs. stability
   - Venture context: Decentralized vs. hierarchical organizations, governance models

4. **Tradition ↔ Progress**
   - Tradition pole: Society should preserve established customs, institutions, and wisdom
   - Progress pole: Society should embrace change, innovation, and new ways of living
   - Tension: Continuity vs. transformation
   - Venture context: Incremental improvement vs. disruptive innovation, cultural preservation vs. modernization

### Question Format

Each question presents a statement about social values. The user rates agreement on a 5-point scale:
- Strongly Disagree (1)
- Disagree (2)
- Neutral (3)
- Agree (4)
- Strongly Agree (5)

**Balanced items:** Each axis has 3 pro-pole and 3 con-pole statements to prevent response bias.

**Example questions:**

Equality ↔ Merit:
- Pro-Equality: "Society should ensure that no one is extremely wealthy while others are in poverty."
- Pro-Merit: "People who work harder and smarter deserve to earn more than those who don't."

Local ↔ Global:
- Pro-Local: "Communities should prioritize the needs of their own members over outsiders."
- Pro-Global: "National borders are artificial barriers that prevent human cooperation."

Liberty ↔ Authority:
- Pro-Liberty: "Individuals should be free to do as they please as long as they don't harm others."
- Pro-Authority: "Strong leadership and clear rules are necessary for a functioning society."

Tradition ↔ Progress:
- Pro-Tradition: "We should respect the wisdom of past generations and preserve cultural traditions."
- Pro-Progress: "Society should constantly question old ways and embrace new possibilities."

### Result Interpretation

Results are displayed as positions on four bipolar axes. Each axis shows:
- **Axis label:** Bipolar dimension name (e.g., "Equality ↔ Merit")
- **Position indicator:** Visual marker showing where the user falls
- **Tension description:** 2-3 sentences describing the user's value tension

**Example result:**
```
Equality ↔ Merit
[──────●──────○]
You lean toward merit-based rewards but recognize the importance of 
reducing extreme inequality. You believe effort should be rewarded, but 
not at the cost of leaving people behind. This tension is common among 
social entrepreneurs who want to build profitable ventures while 
addressing inequality.
```

**Critical principle:** The result NEVER assigns ideological labels. Instead, it describes tensions:
- ✗ "You are a moderate libertarian"
- ✓ "You value individual liberty but recognize the need for some social order"

### Viral Mechanics

1. **Shareable value map:** Visual representation of four-axis profile
2. **Comparison feature:** "Compare values with a friend" - overlay two profiles to see alignment/divergence
3. **Debate starter:** "Where do we disagree?" - share specific axes to spark discussion
4. **Team values audit:** "Do our team values align?" - invite team members to see value distribution

### Recommendation Logic

Based on the user's value profile, suggest relevant Outfinity ventures:

- **High Equality + High Local** → Cooperative ventures, community platforms
- **High Merit + High Global** → Scalable market ventures, competitive platforms
- **High Liberty + High Progress** → Decentralized ventures, disruptive innovation
- **High Authority + High Tradition** → Institutional ventures, cultural preservation
- **Mixed profile (middle positions)** → Explorer Circle (exploring tensions)

### Technical Implementation

**JSON Structure:**
```json
{
  "id": "social-values",
  "version": 1,
  "title": "Social Values Map",
  "questions": [
    {
      "id": "q1",
      "text": "Society should ensure that no one is extremely wealthy while others are in poverty.",
      "type": "likert",
      "dimension": "equality_merit",
      "pole": "equality",
      "reverse": false
    },
    {
      "id": "q2",
      "text": "People who work harder and smarter deserve to earn more than those who don't.",
      "type": "likert",
      "dimension": "equality_merit",
      "pole": "merit",
      "reverse": true
    }
  ],
  "scoring": {
    "type": "likert",
    "dimensions": [
      {
        "key": "equality_merit",
        "label": "Equality ↔ Merit",
        "theoreticalMin": 6,
        "theoreticalMax": 30,
        "midpoint": 18
      }
    ]
  }
}
```

**Scoring Algorithm:**
1. Sum agreement scores per axis (1-5 per item, 6 items = 6-30 range)
2. Apply reverse scoring for con-pole items
3. Normalize to 0-100 scale: `(raw - 6) / 24 * 100`
4. Determine axis position: <33 = first pole, 33-66 = middle, >66 = second pole
5. Generate tension description based on position

### Attribution

Footer includes:
"Inspired by the 8values project (github.com/8values/8values.github.io, MIT license). Items are original and not from the 8values quiz."

This maintains transparency while clarifying independence from the original project.

## Decisions & Questions

### Question #1: Should we use all eight 8values axes?

**Response:** No. Use four carefully selected axes. Rationale:
- Eight axes create a 40+ item quiz, which is too long for viral mechanics
- Four axes provide sufficient depth while maintaining <4 minute duration
- Selected axes (Equality/Merit, Local/Global, Liberty/Authority, Tradition/Progress) are most relevant to venture builders
- Other 8values axes (e.g., Markets/Regulation, Nation/World) overlap with selected axes or are less relevant

### Question #2: Should we assign ideological labels (e.g., "libertarian," "socialist")?

**Response:** No. Describe tensions, not labels. Rationale:
- Ideological labels are reductive and polarizing
- Labels encourage tribal identification rather than thoughtful reflection
- Tensions are more nuanced and actionable (e.g., "You value X but recognize Y")
- Aligns with Outfinity's principle: "Results describe patterns, not identities"

### Question #3: Should we include a "political compass" visualization?

**Response:** No. Use four separate bipolar axes, not a 2D compass. Rationale:
- Political compass (2D grid) oversimplifies complex value tensions
- Four separate axes allow more nuanced interpretation
- Compass encourages "quadrant identification" (e.g., "I'm in the top-left")
- Separate axes encourage reflection on each tension independently

### Question #4: How should we handle users with extreme positions?

**Response:** Acknowledge conviction without judgment. Rationale:
- Extreme positions are valid and should not be pathologized
- Interpretive text should describe the position, not evaluate it
- Example: "You strongly prioritize individual liberty over social order. This conviction may lead you toward decentralized ventures and libertarian governance models."
- Avoid: "Your extreme libertarian views may be problematic"

### Question #5: Should we include a "values evolution" feature?

**Response:** No, not in the initial version. Rationale:
- Tracking values over time requires account creation or local storage
- Adds complexity to the quiz flow
- May be added in a future version as an optional feature
- Initial version focuses on single-session value mapping

## Conclusion

The Social Values Map validates the engine's bipolar Likert scoring and demonstrates the tension-based result format. It serves users who are exploring their values in the context of venture building and social entrepreneurship.

The quiz balances scientific grounding (inspired by 8values) with ethical restraint (no ideological labels). It positions Outfinity as a tool for thoughtful reflection, not political tribalism.
