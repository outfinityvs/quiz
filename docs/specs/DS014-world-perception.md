---
id: DS014
title: World Perception Challenge
status: draft
owner: outfinity
summary: Factual intuition quiz using open data from World Bank and Our World in Data, measuring how realistically the user perceives global trends.
---

# World Perception Challenge

## Introduction

The World Perception Challenge tests the user's intuition about global development, health, education, and climate through estimation questions based on open data. It reveals whether the user's worldview is realistic, pessimistic, optimistic, or selectively informed.

## Core Content

### Source and Licensing

**World Bank Open Data:** The World Bank provides development indicators under CC BY 4.0, allowing unrestricted use with attribution.
- Source: https://data.worldbank.org/
- License: CC BY 4.0
- Commercial use: Permitted with attribution

**Our World in Data (OWID):** OWID provides research and data visualizations under CC BY, but many datasets come from third parties with varying licenses. We use only OWID-produced content or verify third-party licenses before use.
- Source: https://ourworldindata.org/
- License: CC BY (OWID content), verify per-dataset for third-party data
- Commercial use: Permitted with attribution

**Gapminder:** Used as conceptual inspiration for "misconception" questions, not as a direct data source.
- Source: https://www.gapminder.org/
- Use: Conceptual inspiration only

### Instrument Design

**Question Count:** 12 multiple-choice questions
**Response Format:** 3 options per question (1 correct, 2 plausible distractors)
**Duration:** 2-3 minutes
**Scoring Method:** Correct/incorrect per question, mapped to perception dimensions

### Dimensions and Axes

The quiz measures four perception dimensions:

1. **Health Perception**
   - Questions about life expectancy, child mortality, disease prevalence, vaccination rates
   - Reveals whether user overestimates or underestimates global health progress

2. **Economic Perception**
   - Questions about poverty rates, income inequality, GDP growth, development aid
   - Reveals whether user has realistic or distorted view of global economics

3. **Demographic Perception**
   - Questions about population growth, urbanization, migration, age distribution
   - Reveals whether user understands demographic trends

4. **Climate Perception**
   - Questions about CO2 emissions, renewable energy, deforestation, temperature rise
   - Reveals whether user has accurate or exaggerated/minimized climate understanding

### Question Format

Each question presents a factual claim or asks for an estimate. The user chooses from three options:
- One correct answer (based on latest available data)
- Two plausible distractors (common misconceptions)

**Example questions:**

Health:
"What percentage of the world's children are vaccinated against measles?"
- A) 45% (distractor - pessimistic)
- B) 65% (distractor - moderate)
- C) 85% (correct - WHO 2022 data)

Economic:
"How has the global extreme poverty rate changed since 1990?"
- A) Increased slightly (distractor - pessimistic)
- B) Stayed roughly the same (distractor - static)
- C) Decreased by more than half (correct - World Bank data)

Demographic:
"What percentage of the world's population lives in urban areas?"
- A) 35% (distractor - underestimate)
- B) 55% (correct - UN 2022 data)
- C) 75% (distractor - overestimate)

Climate:
"How has global CO2 emissions changed since 2000?"
- A) Decreased by 20% (distractor - optimistic)
- B) Stayed roughly the same (distractor - static)
- C) Increased by 40% (correct - Global Carbon Project)

### Result Interpretation

Results are displayed as positions on four axes, each showing the user's perception style:

**Perception styles:**
- **Realistic:** Answers align with actual data (70%+ correct)
- **Pessimistic:** Systematically underestimates progress, overestimates problems
- **Optimistic:** Systematically overestimates progress, underestimates problems
- **Selective:** Accurate in some domains, distorted in others

**Example result:**
```
Health Perception: Realistic
You have an accurate understanding of global health progress. You know 
that vaccination rates are high and child mortality has declined 
dramatically, even if challenges remain.

Economic Perception: Pessimistic
You tend to underestimate economic progress. You may believe poverty 
is increasing when it has actually declined significantly since 1990. 
This pessimism is common among people who consume negative news 
without seeing long-term trends.

Demographic Perception: Selective
You understand urbanization trends but overestimate population growth. 
This suggests you're well-informed about some demographic issues but 
rely on outdated assumptions about others.

Climate Perception: Realistic
You have an accurate understanding of climate trends, including the 
reality of emissions growth and the progress in renewable energy.
```

### Viral Mechanics

1. **Shareable perception profile:** "I'm realistic about health but pessimistic about economics"
2. **Challenge mechanic:** "How realistic is your worldview?" - share quiz URL
3. **Comparison feature:** "Compare worldviews with a friend" - overlay profiles
4. **Debate starter:** "Where do we see the world differently?"

### Recommendation Logic

Based on perception profile, suggest relevant Outfinity ventures:

- **Realistic across all dimensions** → Explorer Circle (evidence-based ventures)
- **Pessimistic about economics** → Ventures focused on poverty alleviation
- **Optimistic about climate** → Climate tech ventures (reality check needed)
- **Selective perception** → Research ventures (fill knowledge gaps)

### Technical Implementation

**JSON Structure:**
```json
{
  "id": "world-perception",
  "version": 1,
  "title": "World Perception Challenge",
  "questions": [
    {
      "id": "q1",
      "text": "What percentage of the world's children are vaccinated against measles?",
      "type": "multiple-choice",
      "dimension": "health",
      "options": [
        { "text": "45%", "correct": false, "bias": "pessimistic" },
        { "text": "65%", "correct": false, "bias": "moderate" },
        { "text": "85%", "correct": true, "bias": "realistic" }
      ],
      "source": "WHO 2022",
      "sourceUrl": "https://www.who.int/news-room/fact-sheets/detail/measles"
    }
  ],
  "scoring": {
    "type": "correct-answer",
    "dimensions": [
      {
        "key": "health",
        "label": "Health Perception",
        "questionCount": 3
      }
    ]
  }
}
```

**Scoring Algorithm:**
1. Count correct answers per dimension (0-3 per dimension)
2. Determine perception style:
   - 3 correct = Realistic
   - 2 correct = Selective
   - 0-1 correct = Analyze bias pattern (pessimistic vs. optimistic)
3. Generate interpretive text based on style and bias pattern

### Attribution

Footer includes:
"Data from World Bank Open Data (CC BY 4.0) and Our World in Data (CC BY). Questions verify latest available data as of [year]."

Each question result page includes source links for verification.

## Decisions & Questions

### Question #1: Should we show correct answers after each question?

**Response:** No. Show all answers on the result page. Rationale:
- Showing answers during the quiz changes behavior (users adjust based on feedback)
- Revealing all answers at the end creates a "reveal moment" that encourages sharing
- Users can verify sources and learn from mistakes after seeing their profile

### Question #2: Should we penalize wrong answers?

**Response:** No. Wrong answers contribute to the perception style profile. Rationale:
- The quiz measures intuition, not knowledge
- Penalizing wrong answers creates anxiety and reduces completion rate
- Wrong answers are informative (reveal systematic biases)

### Question #3: How should we handle outdated data?

**Response:** Use latest available data and include year in source attribution. Rationale:
- Global data is often 1-2 years behind (e.g., 2024 quiz uses 2022 data)
- Include year in source: "WHO 2022 data"
- Add note: "Data reflects latest available statistics as of [year]"
- Update questions annually to maintain accuracy

### Question #4: Should we include a "learn more" section?

**Response:** Yes, on the result page. Rationale:
- Users who discover they have distorted perceptions may want to learn more
- Provide links to World Bank, OWID, and Gapminder for further exploration
- Aligns with Outfinity's educational mission
- Example: "Want to understand global poverty trends? Explore World Bank data at data.worldbank.org"

## Conclusion

The World Perception Challenge validates the engine's correct-answer scoring and demonstrates the factual intuition result format. It serves users who want to test their worldview against actual data and identify systematic biases.

The quiz balances scientific rigor (using verified open data) with engaging mechanics (estimation questions, misconception testing). It positions Outfinity as a tool for evidence-based thinking, not opinion reinforcement.
