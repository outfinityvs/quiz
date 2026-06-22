---
id: DS023
title: Intelligence Type Profile
status: planned
owner: outfinity
summary: Non-classical intelligence quiz that discovers what type of intelligence the user has, rather than measuring IQ. Maps multiple intelligence dimensions without ranking.
---

# Intelligence Type Profile

## Introduction

The Intelligence Type Profile is a non-classical intelligence quiz that discovers what type of intelligence the user has, rather than measuring IQ or providing a single intelligence score. It maps multiple intelligence dimensions and describes the user's cognitive strengths without ranking or comparing to norms.

## Core Content

### Source and Licensing

Inspired by Howard Gardner's Multiple Intelligences theory and contemporary cognitive science research on diverse cognitive abilities. Items are original and do not reproduce any copyrighted intelligence tests.

**Important:** This is NOT an IQ test. It does not measure general intelligence (g-factor) or provide an IQ score. It maps cognitive strengths across multiple dimensions.

Source: Inspired by Multiple Intelligences theory (Gardner) and cognitive science research
License: CC BY 4.0 for original items
Commercial use: Permitted with attribution

### Instrument Design

**Question Count:** 20 scenarios/tasks (2-3 per intelligence type)
**Response Format:** Multiple choice or self-rating based on scenario
**Duration:** 4-5 minutes
**Scoring Method:** Sum of performance indicators per intelligence type

### Dimensions (Intelligence Types)

The quiz measures eight intelligence types, each representing a distinct cognitive strength:

1. **Linguistic Intelligence**
   - Abilities: Word play, verbal reasoning, storytelling, argumentation
   - Tasks: Analogies, word associations, narrative construction
   - Venture context: Writing, communication, marketing, legal reasoning

2. **Logical-Mathematical Intelligence**
   - Abilities: Pattern recognition, abstract reasoning, numerical problem-solving
   - Tasks: Sequences, logic puzzles, mathematical reasoning
   - Venture context: Data analysis, algorithm design, strategic planning

3. **Spatial Intelligence**
   - Abilities: Mental rotation, visualization, spatial reasoning
   - Tasks: Pattern completion, spatial transformations, map reading
   - Venture context: Design, architecture, visualization, navigation

4. **Musical Intelligence**
   - Abilities: Rhythm recognition, pattern detection in sound, auditory memory
   - Tasks: Rhythm patterns, melodic sequences, sound associations
   - Venture context: Audio design, pattern recognition, creative expression

5. **Bodily-Kinesthetic Intelligence**
   - Abilities: Physical coordination, spatial awareness, hands-on problem-solving
   - Tasks: Coordination scenarios, physical problem-solving, spatial navigation
   - Venture context: Prototyping, physical products, sports, dance

6. **Interpersonal Intelligence**
   - Abilities: Reading people, empathy, social reasoning, persuasion
   - Tasks: Social scenarios, emotion recognition, negotiation situations
   - Venture context: Leadership, sales, team building, community organizing

7. **Intrapersonal Intelligence**
   - Abilities: Self-awareness, emotional regulation, metacognition
   - Tasks: Self-reflection scenarios, emotional awareness, decision reasoning
   - Venture context: Self-management, reflection, personal development

8. **Naturalistic Intelligence**
   - Abilities: Pattern recognition in nature, classification, ecological reasoning
   - Tasks: Classification tasks, pattern detection, systems thinking
   - Venture context: Environmental ventures, systems design, sustainability

### Question Format

Questions are scenario-based or task-based, not traditional IQ test items.

**Example questions:**

Linguistic:
"Which word does not belong in this group: apple, orange, banana, car, grape?"
- A) apple
- B) car (correct - not a fruit)
- C) orange
- D) banana

Logical-Mathematical:
"What comes next in the sequence: 2, 6, 12, 20, 30, ?"
- A) 40
- B) 42 (correct - differences are 4, 6, 8, 10, 12)
- C) 36
- D) 44

Spatial:
"If you fold this paper along the dotted line, which pattern would you see?"
[Visual pattern completion task]

Interpersonal:
"Your colleague seems upset but says they're fine. What do you do?"
- A) Accept their answer and move on
- B) Ask again more gently, showing you notice something is wrong (high interpersonal)
- C) Give them space and check in later
- D) Ignore it - they'll tell you if they want to

### Result Interpretation

Results are displayed as a radar chart with eight axes, showing the user's intelligence profile. The interpretation includes:

1. **Top 2-3 intelligences:** Highlighted as primary cognitive strengths
2. **Profile description:** 2-3 sentences describing the user's cognitive style
3. **Venture suggestions:** 3 venture types that align with the profile
4. **Learning style insight:** How the user learns best based on their profile

**Example result:**
```
Your Intelligence Type Profile

Primary intelligences: Logical-Mathematical + Linguistic
Secondary intelligence: Interpersonal

You have strong analytical and verbal abilities. You excel at 
recognizing patterns, constructing arguments, and communicating 
complex ideas clearly. This combination is powerful for research, 
strategy, and leadership roles.

Venture types that fit your profile:
- Research ventures (analytical depth)
- Strategic consulting (pattern recognition + communication)
- Educational technology (explaining complex concepts)

Learning style: You learn best through reading, discussion, and 
logical analysis. You prefer structured information and clear 
explanations over hands-on experimentation.
```

**Critical principle:** The result NEVER provides an IQ score or ranks the user against norms. Instead, it describes cognitive strengths:
- ✗ "Your IQ is 125"
- ✓ "You have strong logical-mathematical and linguistic abilities"

### Viral Mechanics

1. **Shareable intelligence profile:** "I'm logical + linguistic"
2. **Team cognitive diversity:** "What intelligences does our team have?" - invite team members
3. **Complementarity insight:** "You need more spatial thinkers on your team"
4. **Challenge mechanic:** "What type of intelligence do you have?" - share quiz URL

### Recommendation Logic

Based on intelligence profile, suggest relevant Outfinity ventures:

- **Logical + Linguistic** → Research ventures, strategic consulting
- **Spatial + Bodily** → Design ventures, hardware startups, prototyping
- **Interpersonal + Intrapersonal** → Leadership ventures, coaching, community platforms
- **Musical + Linguistic** → Content creation, audio ventures, creative agencies
- **Naturalistic + Logical** → Environmental ventures, systems design

### Technical Implementation

**JSON Structure:**
```json
{
  "id": "intelligence-type",
  "version": 1,
  "title": "Intelligence Type Profile",
  "questions": [
    {
      "id": "q1",
      "text": "Which word does not belong in this group: apple, orange, banana, car, grape?",
      "type": "multiple-choice",
      "dimension": "linguistic",
      "options": [
        { "text": "apple", "correct": false },
        { "text": "car", "correct": true },
        { "text": "orange", "correct": false },
        { "text": "banana", "correct": false }
      ]
    }
  ],
  "scoring": {
    "type": "correct-answer",
    "dimensions": [
      {
        "key": "linguistic",
        "label": "Linguistic Intelligence",
        "questionCount": 3
      }
    ]
  }
}
```

**Scoring Algorithm:**
1. Count correct answers per intelligence type (0-3 per type)
2. Normalize to 0-100 scale: `correct / total * 100`
3. Identify top 2-3 intelligences (normalized score > 60)
4. Generate profile description based on top intelligences
5. Suggest ventures based on intelligence combinations

### Attribution

Footer includes:
"Inspired by Howard Gardner's Multiple Intelligences theory. This is not an IQ test and does not measure general intelligence. Items are original."

This maintains transparency while clarifying the quiz's purpose and limitations.

## Decisions & Questions

### Question #1: Should we provide an IQ score?

**Response:** No. Provide intelligence type profile, not IQ score. Rationale:
- IQ tests require professional administration and interpretation
- Single IQ score is reductive and often misused
- Multiple intelligences provide more nuanced and actionable insight
- Aligns with Outfinity's principle: "Results describe patterns, not rankings"

### Question #2: Should we include visual/spatial tasks?

**Response:** Yes, but use simple visual patterns that work on mobile. Rationale:
- Spatial intelligence is important and often overlooked
- Simple visual tasks (pattern completion, mental rotation) work on mobile
- Avoid complex 3D rotation tasks that require large screens
- Provide text-based alternatives for accessibility

### Question #3: Should we validate against established intelligence tests?

**Response:** No. This is a self-discovery tool, not a validated assessment. Rationale:
- Validation requires large sample sizes and professional oversight
- Self-discovery tools have different standards than clinical assessments
- Clear disclaimer: "This is not a validated intelligence test"
- Aligns with Outfinity's principle: "Results are exploratory, not diagnostic"

### Question #4: How should we handle users who perform poorly?

**Response:** Frame all results positively, emphasizing strengths rather than weaknesses. Rationale:
- Everyone has cognitive strengths in different areas
- Poor performance in one area does not indicate deficiency
- Interpretive text: "You have strong interpersonal intelligence. You excel at reading people and building relationships, even if analytical tasks are not your primary strength."
- Avoid: "You scored low on logical intelligence"

### Question #5: Should we include a "practice" section?

**Response:** No, not in the initial version. Rationale:
- Practice sections add complexity and time
- May be added in a future version as optional feature
- Initial version focuses on discovery, not improvement
- Aligns with Outfinity's focus on self-knowledge, not skill-building

## Conclusion

The Intelligence Type Profile validates the engine's multiple-choice scoring and demonstrates the intelligence-profile result format. It serves users who want to understand their cognitive strengths without being reduced to an IQ score.

The quiz balances scientific grounding (inspired by Multiple Intelligences theory) with ethical restraint (no IQ scores, no rankings). It positions Outfinity as a tool for cognitive self-discovery, not intelligence testing.
