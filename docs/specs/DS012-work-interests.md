---
id: DS012
title: Work Interest Constellation
status: draft
owner: outfinity
summary: Vocational interest profile inspired by O*NET RIASEC model, mapping six activity types that sustain energy and curiosity.
---

# Work Interest Constellation

## Introduction

The Work Interest Constellation maps vocational interests across six dimensions inspired by the O*NET Interest Profiler and Holland's RIASEC model. Unlike traditional career tests that assign job titles, this quiz identifies the types of activities that energize the user, helping them understand their work preferences in venture-building contexts.

## Core Content

### Source and Licensing

The O*NET Interest Profiler is developed by the U.S. Department of Labor and is available under permissive terms for educational and research use. The RIASEC model (Realistic, Investigative, Artistic, Social, Enterprising, Conventional) was developed by John Holland and is widely used in vocational psychology.

**Important:** We do NOT reproduce the official O*NET Interest Profiler items. Instead, we create original items inspired by the RIASEC conceptual framework. This avoids licensing complications while maintaining scientific validity.

Source: https://www.onetcenter.org/IP.html
License: U.S. Government work (public domain in U.S.), but we use original items
Modification: Original items created, inspired by RIASEC concepts
Commercial use: Permitted for original items

### Instrument Design

**Question Count:** 24 activities (4 per dimension)
**Response Format:** 5-point interest scale (Not Interested to Very Interested)
**Duration:** 3-4 minutes
**Scoring Method:** Sum of interest ratings per dimension

### Dimensions and Axes

The quiz measures six vocational interest dimensions, each representing a type of work activity:

1. **Realistic → Builder**
   - Activities: Working with tools, building physical objects, outdoor work, hands-on problem-solving
   - Energy source: Tangible results, mechanical systems, physical engagement
   - Venture context: Hardware startups, manufacturing, construction, agriculture tech

2. **Investigative → Investigator**
   - Activities: Analyzing data, conducting research, solving complex problems, scientific inquiry
   - Energy source: Discovery, understanding systems, intellectual challenge
   - Venture context: Research ventures, data science, biotech, deep tech

3. **Artistic → Creator**
   - Activities: Designing, writing, creating visual content, expressing ideas creatively
   - Energy source: Self-expression, aesthetic quality, originality, creative freedom
   - Venture context: Design studios, content creation, creative agencies, arts ventures

4. **Social → Social Guide**
   - Activities: Teaching, mentoring, helping others, facilitating groups, community building
   - Energy source: Human connection, seeing others grow, collaborative problem-solving
   - Venture context: Education, coaching, community platforms, social enterprises

5. **Enterprising → Persuader**
   - Activities: Leading teams, selling ideas, negotiating, making strategic decisions
   - Energy source: Influence, achievement, competition, organizational impact
   - Venture context: Sales, business development, leadership roles, growth-stage ventures

6. **Conventional → Organizer**
   - Activities: Organizing information, managing processes, ensuring accuracy, creating systems
   - Energy source: Order, efficiency, reliability, clear procedures
   - Venture context: Operations, finance, compliance, process optimization

### Question Format

Each question presents a work activity. The user rates their interest on a 5-point scale:
- Not Interested (1)
- Slightly Interested (2)
- Moderately Interested (3)
- Very Interested (4)
- Extremely Interested (5)

**Example questions:**
- Builder: "Assembling or repairing equipment"
- Investigator: "Analyzing data to identify patterns"
- Creator: "Designing visual layouts or interfaces"
- Social Guide: "Teaching or mentoring someone"
- Persuader: "Leading a team toward a goal"
- Organizer: "Creating systems to track information"

### Result Interpretation

Results are displayed as a radar chart with six axes, showing the user's interest profile. The interpretation includes:

1. **Top 2-3 interests:** Highlighted as primary energy sources
2. **Profile description:** 2-3 sentences describing the user's work style
3. **Venture suggestions:** 3 venture types that align with the profile
4. **Complementarity insight:** What types of collaborators would complement this profile

**Example result:**
```
Your Work Interest Constellation

Primary interests: Investigator + Creator
Secondary interest: Social Guide

You're energized by deep analysis and creative expression. You enjoy 
understanding complex systems and then communicating insights in 
compelling ways. This combination is powerful for research communication, 
data visualization, or educational content creation.

Venture types that fit your profile:
- Research communication platforms
- Data visualization tools
- Educational technology
- Science journalism

Complementary collaborators: You work well with Builders (who can 
implement your ideas) and Persuaders (who can scale your insights).
```

### Viral Mechanics

1. **Shareable radar chart:** Visual representation of six-axis profile
2. **Team constellation:** "What roles does your team need?" - invite team members to see interest distribution
3. **Co-founder matching:** "Find your complement" - compare profiles to identify gaps
4. **Career pivot insight:** "Your interests suggest you might thrive in..." - shareable career insight

### Recommendation Logic

Based on the user's top 2-3 interests, suggest relevant Outfinity ventures:

- **Investigator + Creator** → Axiologic Research (research communication)
- **Builder + Investigator** → Hardware ventures, deep tech
- **Social Guide + Persuader** → Explorer Circle (community building)
- **Creator + Social Guide** → Education ventures, content platforms
- **Persuader + Organizer** → Growth-stage ventures, operations
- **Builder + Organizer** → Manufacturing, process optimization

### Technical Implementation

**JSON Structure:**
```json
{
  "id": "work-interests",
  "version": 1,
  "title": "Work Interest Constellation",
  "questions": [
    {
      "id": "q1",
      "text": "Assembling or repairing equipment",
      "type": "likert",
      "dimension": "realistic",
      "scaleLabels": ["Not Interested", "Slightly", "Moderately", "Very", "Extremely"]
    }
  ],
  "scoring": {
    "type": "likert",
    "dimensions": [
      {
        "key": "realistic",
        "label": "Builder",
        "theoreticalMin": 4,
        "theoreticalMax": 20
      }
    ]
  },
  "interpretation": {
    "ventureSuggestions": {
      "investigator_creator": ["Research communication", "Data visualization", "Educational tech"],
      "builder_investigator": ["Hardware ventures", "Deep tech", "Prototyping"]
    }
  }
}
```

**Scoring Algorithm:**
1. Sum interest ratings per dimension (1-5 per item, 4 items = 4-20 range)
2. Normalize to 0-100 scale: `(raw - 4) / 16 * 100`
3. Identify top 2-3 dimensions (normalized score > 60)
4. Generate profile description based on top dimensions
5. Suggest ventures based on dimension combinations

### Attribution

Footer includes:
"Inspired by Holland's RIASEC model and O*NET Interest Profiler concepts. Items are original and not from the official O*NET instrument."

This maintains transparency while clarifying that we're not reproducing the official tool.

## Decisions & Questions

### Question #1: Should we use the official O*NET Interest Profiler items?

**Response:** No. Create original items inspired by RIASEC concepts. Rationale:
- Official O*NET items have specific licensing requirements
- Original items allow more venture-focused framing
- Avoids confusion about whether this is the "official" O*NET test
- Maintains Outfinity's independence from government instruments

### Question #2: Should we display the RIASEC code (e.g., "RIA")?

**Response:** No. Display friendly dimension names (Builder, Investigator, etc.) instead of RIASEC codes. Rationale:
- RIASEC codes are technical jargon that doesn't resonate with users
- Friendly names are more memorable and shareable
- Codes encourage comparison ("I'm an RIA, you're an SEC") rather than understanding
- Aligns with Outfinity's principle of accessible language

### Question #3: Should we suggest specific job titles?

**Response:** No. Suggest venture types and work contexts, not job titles. Rationale:
- Job titles are limiting and may feel prescriptive
- Venture types are more relevant to Outfinity's audience (entrepreneurs, builders)
- Work contexts allow users to imagine their own role within that context
- Aligns with Outfinity's focus on venture building, not career counseling

### Question #4: How should we handle users with flat profiles (all dimensions similar)?

**Response:** Acknowledge versatility as a strength. Rationale:
- Flat profiles indicate generalists who can work across domains
- This is valuable in early-stage ventures where roles are fluid
- Interpretive text: "You have broad interests and can adapt to different roles. This versatility is valuable in early-stage ventures where you may need to wear multiple hats."
- Suggest: "You might thrive in generalist roles or as a solo founder who needs to handle diverse tasks."

### Question #5: Should we include a "career change" framing?

**Response:** No. Frame as "work interests" rather than "career change." Rationale:
- "Career change" implies dissatisfaction with current work
- "Work interests" is neutral and applicable to anyone
- Many users are exploring, not necessarily changing careers
- Aligns with Outfinity's positive framing (discovery, not deficiency)

## Conclusion

The Work Interest Constellation validates the engine's multi-dimensional Likert scoring and demonstrates the radar chart result format. It serves users who are exploring venture opportunities or trying to understand their work preferences in entrepreneurial contexts.

The quiz balances scientific grounding (RIASEC model) with practical relevance (venture types, not job titles). It positions Outfinity as a tool for venture builders, not a traditional career counseling service.
