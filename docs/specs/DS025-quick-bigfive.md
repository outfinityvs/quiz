---
id: DS025
title: Quick Big Five Mini
status: planned
owner: outfinity
summary: Ultra-short Big Five personality quiz using 10 IPIP items (2 per dimension), optimized for viral sharing and quick self-discovery.
---

# Quick Big Five Mini

## Introduction

The Quick Big Five Mini is an ultra-short personality assessment using 10 items from the International Personality Item Pool (IPIP). It measures the five core personality dimensions in under 2 minutes, optimized for viral sharing and quick self-discovery.

## Core Content

### Source and Licensing

The International Personality Item Pool (IPIP) is a public-domain repository of personality assessment items. All IPIP items are explicitly released into the public domain, allowing unrestricted use.

Source: https://ipip.ori.org/
License: Public Domain (CC0 equivalent)
Modification: Permitted
Commercial use: Permitted

### Instrument Design

**Question Count:** 10 items (2 per dimension)
**Response Format:** 5-point Likert scale (Strongly Disagree to Strongly Agree)
**Duration:** 1-2 minutes
**Scoring Method:** Sum of item scores per dimension (2 items = 2-10 range)

### Dimensions

The quiz measures five personality dimensions:

1. **Openness to Experience**
   - High: Curious, creative, open to new ideas
   - Low: Practical, conventional, prefers routine
   - IPIP items: 2 items from Openness scale

2. **Conscientiousness**
   - High: Organized, disciplined, reliable
   - Low: Flexible, spontaneous, adaptable
   - IPIP items: 2 items from Conscientiousness scale

3. **Extraversion**
   - High: Sociable, energetic, assertive
   - Low: Reserved, reflective, independent
   - IPIP items: 2 items from Extraversion scale

4. **Agreeableness**
   - High: Cooperative, trusting, empathetic
   - Low: Independent, skeptical, competitive
   - IPIP items: 2 items from Agreeableness scale

5. **Emotional Stability** (reverse of Neuroticism)
   - High: Calm, resilient, emotionally stable
   - Low: Reactive, sensitive, emotionally volatile
   - IPIP items: 2 items from Emotional Stability scale

### Question Format

Each question presents a statement about behavior or preference. The user rates agreement on a 5-point scale.

**Example questions:**

Openness:
- "I have a vivid imagination." (high score = high Openness)
- "I am not interested in abstract ideas." (reverse-scored)

Conscientiousness:
- "I am always prepared." (high score = high Conscientiousness)
- "I often forget to put things back in their proper place." (reverse-scored)

### Result Interpretation

Results are displayed as positions on five bipolar axes, not numeric scores. Each axis shows:
- **Axis label:** Bipolar dimension name
- **Position indicator:** Visual marker
- **Brief description:** 1-2 sentences describing the user's tendency

**Example result:**
```
Openness: High
You're curious and creative. You enjoy exploring new ideas and experiences.

Conscientiousness: Moderate
You balance structure with flexibility. You're organized when needed but can adapt.

Extraversion: Low
You're energized by solitude and deep reflection. You prefer meaningful conversations over large social gatherings.

Agreeableness: High
You're cooperative and empathetic. You value harmony and consider others' perspectives.

Emotional Stability: Moderate
You're generally calm but can be reactive under stress. You manage emotions well most of the time.
```

### Viral Mechanics

1. **Shareable profile:** "I'm high Openness, low Extraversion"
2. **Comparison:** "Compare Big Five with a friend" - overlay profiles
3. **Team personality audit:** "What's our team's personality mix?" - invite team members
4. **Challenge mechanic:** "What's your Big Five?" - share quiz URL

### Recommendation Logic

Based on Big Five profile, suggest relevant Outfinity ventures:

- **High Openness + High Conscientiousness** → Research ventures, strategic roles
- **High Extraversion + High Agreeableness** → Community ventures, sales, leadership
- **High Emotional Stability + High Conscientiousness** → Operations ventures, quality-focused
- **Low Extraversion + High Openness** → Solo founder ventures, creative roles
- **High Agreeableness + High Emotional Stability** → Cooperative ventures, team building

### Technical Implementation

**JSON Structure:**
```json
{
  "id": "quick-bigfive",
  "version": 1,
  "title": "Quick Big Five Mini",
  "questions": [
    {
      "id": "q1",
      "text": "I have a vivid imagination.",
      "type": "likert",
      "dimension": "openness",
      "reverse": false
    },
    {
      "id": "q2",
      "text": "I am not interested in abstract ideas.",
      "type": "likert",
      "dimension": "openness",
      "reverse": true
    }
  ],
  "scoring": {
    "type": "likert",
    "dimensions": [
      {
        "key": "openness",
        "label": "Openness to Experience",
        "theoreticalMin": 2,
        "theoreticalMax": 10
      }
    ]
  }
}
```

**Scoring Algorithm:**
1. Sum item scores per dimension (1-5 per item, 2 items = 2-10 range)
2. Apply reverse scoring where `reverse: true`
3. Normalize to 0-100 scale: `(raw - 2) / 8 * 100`
4. Determine axis position: <33 = low, 33-66 = moderate, >66 = high
5. Generate brief description based on position

### Attribution

Footer includes:
"Personality items from the International Personality Item Pool (ipip.ori.org), public domain."

This maintains transparency about the source.

## Decisions & Questions

### Question #1: Should we use 10 items or 20 items?

**Response:** Use 10 items (2 per dimension). Rationale:
- 10 items allow <2 minute completion time (viral mechanic)
- 2 items per dimension provides minimal reliability (α ≈ 0.50-0.60)
- Acceptable for informal self-discovery, not clinical assessment
- Users who want deeper assessment can take the 20-item Builder Traits Snapshot

### Question #2: Should we display numeric scores?

**Response:** No. Display only axis positions (low/moderate/high). Rationale:
- Numeric scores encourage unhealthy comparison
- Axis positions emphasize that both poles have value
- Aligns with Outfinity's principle: "Results describe patterns, not rankings"

### Question #3: Should we include a "full assessment" option?

**Response:** Yes, link to Builder Traits Snapshot (20-item version). Rationale:
- Provides clear path to deeper assessment
- Maintains Outfinity's role as a gateway, not a replacement
- Example: "Want a deeper assessment? Take the 20-item Builder Traits Snapshot"

### Question #4: How should we handle the reliability limitation?

**Response:** Include clear disclaimer about reliability. Rationale:
- 2 items per dimension has limited reliability
- Disclaimer: "This is a quick snapshot, not a comprehensive assessment. For deeper insight, take the full Builder Traits Snapshot."
- Aligns with Outfinity's principle of transparency

## Conclusion

The Quick Big Five Mini validates the engine's ultra-short Likert scoring and demonstrates the quick-snapshot result format. It serves users who want a rapid personality snapshot for viral sharing and quick self-discovery.

The quiz balances speed (1-2 minutes) with scientific grounding (IPIP items). It positions Outfinity as a tool for accessible self-knowledge, with clear paths to deeper assessment.
