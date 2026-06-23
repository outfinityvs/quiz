---
id: DS024
title: Quick MBTI-Style Quiz
status: draft
owner: outfinity
summary: Rapid personality type quiz inspired by MBTI concepts, mapping four preference dimensions in under 2 minutes. Fun, shareable, and useful for team dynamics.
---

# Quick MBTI-Style Quiz

## Introduction

The Quick MBTI-Style Quiz is a rapid personality assessment inspired by Myers-Briggs Type Indicator (MBTI) concepts. It maps four preference dimensions using a shortened format optimized for viral sharing and team dynamics exploration.

## Core Content

### Source and Licensing

**Important:** The MBTI is a trademarked instrument owned by The Myers-Briggs Company. We do NOT reproduce MBTI items or use the official MBTI assessment. Instead, we create original items inspired by the four preference dimensions commonly associated with MBTI (Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving).

The underlying psychological concepts (Jungian type theory) are in the public domain. Our original items are released under CC BY 4.0.

Source: Inspired by Jungian type theory and MBTI concepts
License: CC BY 4.0 for original items
Commercial use: Permitted with attribution

### Instrument Design

**Question Count:** 12 forced-choice items (3 per dimension)
**Response Format:** Binary choice between two preference poles
**Duration:** 1-2 minutes
**Scoring Method:** Count preferences per dimension, determine dominant pole

### Dimensions (Preference Poles)

The quiz measures four preference dimensions:

1. **Extraversion (E) ↔ Introversion (I)**
   - Extraversion: Energized by social interaction, external processing, action-oriented
   - Introversion: Energized by solitude, internal processing, reflection-oriented
   - Venture context: Team collaboration vs. independent work

2. **Sensing (S) ↔ Intuition (N)**
   - Sensing: Focuses on concrete facts, practical details, present reality
   - Intuition: Focuses on patterns, possibilities, future potential
   - Venture context: Execution vs. vision, incremental vs. disruptive

3. **Thinking (T) ↔ Feeling (F)**
   - Thinking: Decides based on logic, objective analysis, consistency
   - Feeling: Decides based on values, harmony, impact on people
   - Venture context: Data-driven vs. values-driven decisions

4. **Judging (J) ↔ Perceiving (P)**
   - Judging: Prefers structure, planning, closure, decisiveness
   - Perceiving: Prefers flexibility, exploration, openness, adaptability
   - Venture context: Structured processes vs. adaptive iteration

### Question Format

Each question presents two statements representing opposite preference poles. The user chooses which statement better describes them.

**Example questions:**

Extraversion ↔ Introversion:
"At a party, you typically:"
- A) Mingle with many people and enjoy the energy (E)
- B) Have deeper conversations with a few people (I)

Sensing ↔ Intuition:
"When learning something new, you prefer:"
- A) Step-by-step instructions and concrete examples (S)
- B) Understanding the big picture and underlying principles (N)

Thinking ↔ Feeling:
"When making a difficult decision, you rely more on:"
- A) Logical analysis and objective criteria (T)
- B) Personal values and impact on people (F)

Judging ↔ Perceiving:
"You work best when:"
- A) You have a clear plan and timeline (J)
- B) You can adapt and respond to new information (P)

### Result Interpretation

Results are displayed as a four-letter type code (e.g., "INTJ") with interpretive text.

**Type code format:**
- First letter: E or I (Extraversion/Introversion)
- Second letter: S or N (Sensing/Intuition)
- Third letter: T or F (Thinking/Feeling)
- Fourth letter: J or P (Judging/Perceiving)

**Example result:**
```
Your Type: INTJ

Introversion: You're energized by solitude and internal processing. 
You prefer deep work over constant social interaction.

Intuition: You focus on patterns and possibilities rather than 
concrete details. You're drawn to big-picture thinking.

Thinking: You make decisions based on logical analysis rather than 
personal values. You prioritize consistency and objectivity.

Judging: You prefer structure and planning over flexibility. You 
like to have decisions made and plans in place.

Venture fit: You thrive in strategic roles where you can work 
independently on complex problems. You may prefer solo founder 
roles or small, focused teams.
```

### Viral Mechanics

1. **Shareable type code:** "I'm an INTJ"
2. **Team type distribution:** "What types does our team have?" - invite team members
3. **Type compatibility:** "INTJ + ENFP = great complementarity"
4. **Challenge mechanic:** "What's your type?" - share quiz URL

### Recommendation Logic

Based on type code, suggest relevant Outfinity ventures:

- **INTJ, INTP** → Research ventures, strategic roles, solo founder
- **ENTJ, ENTP** → Leadership ventures, growth-stage startups, business development
- **ISFJ, ISTJ** → Operations ventures, process optimization, quality-focused
- **ENFJ, ESFJ** → Community ventures, education, team building
- **INFP, ENFP** → Creative ventures, mission-driven startups, content creation
- **ISTP, ESTP** → Hardware ventures, prototyping, hands-on roles

### Technical Implementation

**JSON Structure:**
```json
{
  "id": "quick-mbti",
  "version": 1,
  "title": "Quick MBTI-Style Quiz",
  "questions": [
    {
      "id": "q1",
      "text": "At a party, you typically:",
      "type": "forced-choice",
      "dimension": "extraversion_introversion",
      "options": [
        { "text": "Mingle with many people and enjoy the energy", "pole": "E" },
        { "text": "Have deeper conversations with a few people", "pole": "I" }
      ]
    }
  ],
  "scoring": {
    "type": "binary-choice",
    "dimensions": [
      {
        "key": "extraversion_introversion",
        "label": "Extraversion ↔ Introversion",
        "poles": ["E", "I"],
        "questionCount": 3
      }
    ]
  },
  "interpretation": {
    "typeCodes": {
      "INTJ": {
        "title": "The Strategist",
        "description": "You're a strategic thinker who values independence and logical analysis."
      }
    }
  }
}
```

**Scoring Algorithm:**
1. Count preferences per dimension (0-3 per pole)
2. Determine dominant pole for each dimension (majority wins)
3. Construct four-letter type code (e.g., "INTJ")
4. Generate type description based on code
5. Suggest ventures based on type combinations

### Attribution

Footer includes:
"Inspired by Jungian type theory and MBTI concepts. This is not the official MBTI assessment. Items are original."

This maintains transparency while clarifying independence from the official MBTI.

## Decisions & Questions

### Question #1: Should we use the official MBTI items?

**Response:** No. Create original items inspired by the concepts. Rationale:
- MBTI is trademarked and requires licensing for official use
- Original items allow more venture-focused framing
- Avoids legal complications and confusion about official status
- Maintains Outfinity's independence from commercial assessments

### Question #2: Should we display the four-letter type code?

**Response:** Yes, but with caveats. Rationale:
- Type codes are memorable and shareable (viral mechanic)
- Include disclaimer: "Type codes are simplified and don't capture full personality"
- Provide detailed interpretive text beyond just the code
- Aligns with user expectations (people expect type codes from MBTI-style quizzes)

### Question #3: Should we include all 16 type descriptions?

**Response:** Yes, but keep descriptions brief. Rationale:
- 16 types provide sufficient granularity for viral sharing
- Brief descriptions (2-3 sentences) maintain engagement
- Detailed descriptions available via "Learn more" link
- Aligns with quick quiz format (1-2 minutes)

### Question #4: How should we handle ties (equal preferences)?

**Response:** Use neutral letter or indicate balance. Rationale:
- Ties are common (e.g., 2E vs. 1I is not a strong preference)
- Option 1: Use lowercase letter (e.g., "iNTJ" for weak introversion)
- Option 2: Indicate balance in interpretive text: "You're balanced between extraversion and introversion"
- Prefer Option 2 for clarity

### Question #5: Should we include a "type dynamics" section?

**Response:** No, not in the initial version. Rationale:
- Type dynamics (cognitive functions) add complexity
- May confuse users unfamiliar with Jungian theory
- May be added in a future "deep dive" version
- Initial version focuses on quick discovery and sharing

## Conclusion

The Quick MBTI-Style Quiz validates the engine's binary-choice scoring and demonstrates the type-code result format. It serves users who want a quick personality snapshot for team dynamics and self-discovery.

The quiz balances familiarity (MBTI-style format) with originality (original items, venture-focused interpretation). It positions Outfinity as a tool for practical self-knowledge, not clinical assessment.
