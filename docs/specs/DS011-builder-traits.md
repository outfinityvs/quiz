---
id: DS011
title: Builder Traits Snapshot
status: draft
owner: outfinity
summary: Short Big Five personality profile using IPIP public-domain items, measuring openness, conscientiousness, agreeableness, emotional stability, and achievement orientation.
---

# Builder Traits Snapshot

## Introduction

The Builder Traits Snapshot is a rapid personality assessment based on the International Personality Item Pool (IPIP), which provides public-domain personality scales. This quiz measures five core personality dimensions relevant to venture building and collaborative work, using a shortened format optimized for viral sharing.

## Core Content

### Source and Licensing

The International Personality Item Pool (IPIP) is a public-domain repository of personality assessment items maintained by the Oregon Research Institute. All IPIP items are explicitly released into the public domain, allowing unrestricted use, modification, translation, and commercial application without permission or attribution requirements.

Source: https://ipip.ori.org/
License: Public Domain (CC0 equivalent)
Modification: Explicitly permitted
Commercial use: Explicitly permitted

### Instrument Design

**Question Count:** 20 items (4 per dimension)
**Response Format:** 5-point Likert scale (Strongly Disagree to Strongly Agree)
**Duration:** 2-3 minutes
**Scoring Method:** Sum of item scores per dimension, with reverse-scored items

### Dimensions and Axes

The quiz measures five personality dimensions, each presented as a bipolar axis:

1. **Openness to Experience** (Curiosity ↔ Pragmatism)
   - High: Seeks novelty, enjoys abstract ideas, comfortable with ambiguity
   - Low: Prefers routine, practical focus, concrete thinking
   - IPIP items: 4 items from Openness scale (mix of forward and reverse-scored)

2. **Conscientiousness** (Structure ↔ Spontaneity)
   - High: Organized, disciplined, goal-oriented, reliable
   - Low: Flexible, spontaneous, adaptable, less structured
   - IPIP items: 4 items from Conscientiousness scale

3. **Agreeableness** (Independence ↔ Cooperation)
   - High: Cooperative, trusting, empathetic, team-oriented
   - Low: Independent, skeptical, competitive, self-reliant
   - IPIP items: 4 items from Agreeableness scale

4. **Emotional Stability** (Calm ↔ Reactivity)
   - High: Calm under pressure, resilient, emotionally stable
   - Low: Reactive, sensitive to stress, emotionally volatile
   - IPIP items: 4 items from Emotional Stability scale (reverse of Neuroticism)

5. **Achievement Striving** (Drive ↔ Contentment)
   - High: Ambitious, competitive, goal-focused, persistent
   - Low: Content, balanced, process-oriented, less competitive
   - IPIP items: 4 items from Achievement Striving facet of Conscientiousness

### Question Format

Each question presents a statement about behavior or preference. The user rates agreement on a 5-point scale:
- Strongly Disagree (1)
- Disagree (2)
- Neutral (3)
- Agree (4)
- Strongly Agree (5)

**Reverse Scoring:** Some items are reverse-scored to prevent response bias. For example:
- Forward: "I enjoy thinking about abstract ideas" (high score = high Openness)
- Reverse: "I prefer routine and predictability" (high score = low Openness, so score is inverted: 5→1, 4→2, 3→3, 2→4, 1→5)

### Result Interpretation

Results are displayed as positions on five bipolar axes, not numeric scores. Each axis shows:
- **Axis label:** Bipolar dimension name (e.g., "Curiosity ↔ Pragmatism")
- **Position indicator:** Visual marker showing where the user falls on the spectrum
- **Interpretive text:** 2-3 sentences describing the user's tendency

**Example result:**
```
Curiosity ↔ Pragmatism
[●────────────○]
You lean toward curiosity and exploration. You enjoy abstract thinking, 
novel experiences, and questioning assumptions. This serves you well in 
early-stage ventures where ambiguity is high, but may create tension in 
execution-focused environments.
```

### Viral Mechanics

1. **Shareable card:** Generates a visual card with the user's five-axis profile
2. **Comparison feature:** "Compare with a co-founder" - overlay two profiles to see complementarity
3. **Challenge mechanic:** "What's your builder type?" - share quiz URL without result
4. **Team constellation:** Invite 3+ team members to see the team's personality distribution

### Recommendation Logic

Based on the user's profile, suggest relevant Outfinity ventures:
- High Openness + High Achievement → Explorer Circle (research ventures)
- High Conscientiousness + High Agreeableness → Cooperative ventures
- High Emotional Stability + High Achievement → Mission-driven startups
- Low Agreeableness + High Openness → Independent ventures

### Technical Implementation

**JSON Structure:**
```json
{
  "id": "builder-traits",
  "version": 1,
  "title": "Builder Traits Snapshot",
  "questions": [
    {
      "id": "q1",
      "text": "I enjoy thinking about abstract, theoretical ideas.",
      "type": "likert",
      "dimension": "openness",
      "reverse": false
    }
  ],
  "scoring": {
    "type": "likert",
    "dimensions": [
      {
        "key": "openness",
        "label": "Openness to Experience",
        "axisLabel": "Curiosity ↔ Pragmatism",
        "theoreticalMin": 4,
        "theoreticalMax": 20
      }
    ]
  }
}
```

**Scoring Algorithm:**
1. Sum item scores per dimension (1-5 per item, 4 items = 4-20 range)
2. Apply reverse scoring where `reverse: true`
3. Normalize to 0-100 scale: `(raw - 4) / 16 * 100`
4. Determine axis position: <33 = low pole, 33-66 = middle, >66 = high pole
5. Generate interpretive text based on position

### Attribution

Although IPIP is public domain and does not require attribution, the quiz footer includes:
"Personality items from the International Personality Item Pool (ipip.ori.org), public domain."

This maintains transparency about the source and helps users verify the scientific basis.

## Decisions & Questions

### Question #1: Should we use the full Big Five or a shortened version?

**Response:** Use a shortened 20-item version (4 items per dimension) rather than the full 50-100 item IPIP scales. Rationale:
- Viral quizzes require <3 minute completion time
- 4 items per dimension provides acceptable reliability (α ≈ 0.70-0.80) for informal assessment
- Full scales are available for users who want deeper assessment (link to IPIP website)

### Question #2: Should we display numeric scores or only axis positions?

**Response:** Display only axis positions with interpretive text, not numeric scores. Rationale:
- Numeric scores encourage unhealthy comparison ("I got 78, you got 82")
- Axis positions emphasize that both poles have value depending on context
- Interpretive text provides actionable insight rather than abstract numbers
- Aligns with Outfinity's principle: "Results describe patterns, not deficiencies"

### Question #3: How should reverse-scored items be handled in the UI?

**Response:** Reverse scoring is applied internally during computation. The user sees only the final axis position, not individual item scores. Rationale:
- Simplifies the user experience
- Prevents confusion about why some items seem "backwards"
- Maintains the psychological validity of reverse scoring (prevents acquiescence bias)

### Question #4: Should we include a "full assessment" option?

**Response:** Yes, include a link at the end: "Want a deeper assessment? Take the full 50-item IPIP Big Five at ipip.ori.org." Rationale:
- Respects users who want more rigorous assessment
- Provides clear path to validated instruments
- Maintains Outfinity's role as a gateway, not a replacement for professional assessment

## Conclusion

The Builder Traits Snapshot validates the engine's Likert scoring with reverse items and demonstrates the axis-position result format. It serves as a template for other personality-based quizzes and establishes the pattern of using public-domain scales with transparent attribution.

The quiz balances scientific validity (using established IPIP items) with viral mechanics (short duration, shareable cards, comparison features). It positions Outfinity as a curator of quality self-knowledge tools rather than a creator of pseudoscientific assessments.
