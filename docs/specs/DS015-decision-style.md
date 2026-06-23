---
id: DS015
title: Decision Style Profile
status: draft
owner: outfinity
summary: Decision-making style profile mapping five axes: Analytical ↔ Intuitive, Risk ↔ Caution, Speed ↔ Accuracy, Control ↔ Adaptation, Solo ↔ Collaborative.
---

# Decision Style Profile

## Introduction

The Decision Style Profile maps how the user makes decisions under uncertainty. It uses original scenario-based questions that place the user in realistic decision contexts and measure their reflexes across five bipolar axes.

## Core Content

### Source and Licensing

This is an original instrument created by Outfinity. No external scales are used.

Source: Original Outfinity instrument
License: CC BY 4.0
Commercial use: Permitted with attribution

### Instrument Design

**Question Count:** 15 scenarios (3 per dimension)
**Response Format:** Forced-choice between 2-3 options representing different decision styles
**Duration:** 3-4 minutes
**Scoring Method:** Each option maps to one or two axes with hidden weights

### Dimensions and Axes

The quiz measures five decision-making dimensions:

1. **Analytical ↔ Intuitive**
   - Analytical: Gathers data, weighs evidence, uses systematic reasoning
   - Intuitive: Relies on gut feeling, pattern recognition, experience
   - Venture context: Data-driven decisions vs. founder instinct

2. **Risk ↔ Caution**
   - Risk: Comfortable with uncertainty, willing to bet on uncertain outcomes
   - Caution: Prefers safety, minimizes downside, avoids unnecessary risk
   - Venture context: Bold bets vs. conservative strategy

3. **Speed ↔ Accuracy**
   - Speed: Decides quickly, iterates based on feedback, accepts imperfection
   - Accuracy: Takes time to decide, seeks thoroughness, avoids mistakes
   - Venture context: Fast iteration vs. careful planning

4. **Control ↔ Adaptation**
   - Control: Prefers to direct outcomes, maintains authority, resists external influence
   - Adaptation: Adjusts to circumstances, shares control, embraces change
   - Venture context: Founder-led vs. adaptive governance

5. **Solo ↔ Collaborative**
   - Solo: Decides independently, trusts own judgment, avoids group dynamics
   - Collaborative: Seeks input, builds consensus, values diverse perspectives
   - Venture context: Solo founder vs. team-based decisions

### Question Format

Each question presents a decision scenario. The user chooses between 2-3 options representing different decision styles.

**Example scenarios:**

Analytical ↔ Intuitive:
"Your startup has two potential customers. One offers a large contract but requires significant customization. The other is smaller but aligns perfectly with your product roadmap. You have one week to decide. What do you do?"
- A) Analyze both options systematically: calculate revenue, costs, strategic fit (Analytical)
- B) Go with your gut feeling about which customer feels right (Intuitive)

Risk ↔ Caution:
"You've been offered a partnership that could double your revenue but requires sharing your core technology. The partner is reputable but the agreement is complex. What do you do?"
- A) Take the risk - the upside is worth it (Risk)
- B) Decline - protecting your core technology is more important (Caution)
- C) Negotiate for better terms before deciding (Moderate)

Speed ↔ Accuracy:
"You need to hire a key team member. You have three candidates: one is clearly qualified but expensive, one is promising but unproven, and one is a safe choice but not exciting. You need someone in two weeks. What do you do?"
- A) Decide quickly based on your first impression (Speed)
- B) Take more time to interview thoroughly and check references (Accuracy)

### Result Interpretation

Results are displayed as positions on five bipolar axes. Each axis shows:
- **Axis label:** Bipolar dimension name
- **Position indicator:** Visual marker
- **Decision reflex description:** 2-3 sentences describing the user's tendency

**Example result:**
```
Analytical ↔ Intuitive
[────●────────○]
You lean toward analytical decision-making. You prefer to gather data 
and weigh evidence systematically before committing. This serves you 
well in complex decisions but may slow you down in fast-moving situations.

Risk ↔ Caution
[────────●────○]
You're comfortable with calculated risks. You're willing to bet on 
uncertain outcomes when the potential upside justifies it. This is 
valuable in venture building where uncertainty is inherent.
```

### Viral Mechanics

1. **Shareable decision profile:** "I'm analytical but fast"
2. **Co-founder comparison:** "How do we decide together?" - overlay profiles
3. **Team decision audit:** "How does our team make decisions?" - invite team members
4. **Challenge mechanic:** "What's your decision style?" - share quiz URL

### Recommendation Logic

Based on decision profile, suggest relevant Outfinity ventures:

- **Analytical + Cautious** → Research ventures, due diligence services
- **Intuitive + Risk** → Early-stage ventures, experimental projects
- **Speed + Solo** → Solo founder ventures, fast-moving startups
- **Collaborative + Adaptation** → Cooperative ventures, community platforms
- **Control + Accuracy** → Mission-driven ventures, quality-focused ventures

### Technical Implementation

**JSON Structure:**
```json
{
  "id": "decision-style",
  "version": 1,
  "title": "Decision Style Profile",
  "questions": [
    {
      "id": "q1",
      "text": "Your startup has two potential customers...",
      "type": "forced-choice",
      "options": [
        {
          "text": "Analyze both options systematically",
          "dimensionScores": { "analytical": 2, "intuitive": -1 }
        },
        {
          "text": "Go with your gut feeling",
          "dimensionScores": { "analytical": -1, "intuitive": 2 }
        }
      ]
    }
  ],
  "scoring": {
    "type": "profile",
    "dimensions": [
      {
        "key": "analytical",
        "label": "Analytical",
        "theoreticalMin": -15,
        "theoreticalMax": 30
      }
    ]
  }
}
```

**Scoring Algorithm:**
1. Sum dimension scores from selected options
2. Normalize to 0-100 scale
3. Determine axis position: <33 = first pole, 33-66 = middle, >66 = second pole
4. Generate decision reflex description

## Decisions & Questions

### Question #1: Should scenarios be timed?

**Response:** No. Timing introduces stress that measures speed tolerance rather than decision style. Rationale:
- Timed scenarios create anxiety that affects responses
- Decision style is about preference, not ability under pressure
- Untimed format allows thoughtful reflection
- Users can still complete quickly if they prefer

### Question #2: Should the result suggest improvements?

**Response:** No. Describe patterns, not deficiencies. Rationale:
- Each pole of each axis has legitimate uses depending on context
- Suggesting improvements implies one style is "better"
- Aligns with Outfinity's principle: "Results describe patterns, not deficiencies"
- Example: "You prefer analytical decisions. This is valuable in complex situations but may slow you down in fast-moving contexts."

### Question #3: Should we include a "decision quality" score?

**Response:** No. Measure style, not quality. Rationale:
- Decision quality is context-dependent and difficult to measure
- Style is more stable and actionable
- Quality assessment would require validation against outcomes
- Aligns with Outfinity's focus on self-knowledge, not evaluation

## Conclusion

The Decision Style Profile validates the engine's scenario-based forced-choice scoring and demonstrates the decision-reflex result format. It serves venture builders who want to understand their decision-making patterns and find complementary collaborators.
