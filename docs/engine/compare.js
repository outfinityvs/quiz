import { createRadarChart, createTextAlternative } from './radar-chart.js';

function createComparisonView(config) {
  const {
    axes,
    profiles,
    complementarityMap,
    container
  } = config;

  container.innerHTML = '';

  const section = document.createElement('section');
  section.className = 'compare-view';

  const heading = document.createElement('h2');
  heading.textContent = 'Compare Our Maps';
  section.appendChild(heading);

  const labelInputs = document.createElement('div');
  labelInputs.className = 'compare-labels';

  for (let i = 0; i < profiles.length; i++) {
    const group = document.createElement('div');
    group.className = 'compare-label-group';
    const label = document.createElement('label');
    label.textContent = `Profile ${i + 1}`;
    label.setAttribute('for', `compare-label-${i}`);
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `compare-label-${i}`;
    input.value = profiles[i].label || (i === 0 ? 'You' : `Person ${i + 1}`);
    input.className = 'compare-label-input';
    group.appendChild(label);
    group.appendChild(input);
    labelInputs.appendChild(group);
  }
  section.appendChild(labelInputs);

  const chartContainer = document.createElement('div');
  chartContainer.className = 'compare-chart';

  const datasets = profiles.map(p => ({
    label: p.label,
    values: axes.map(a => p.scores[a.key] || 0)
  }));

  const chart = createRadarChart({
    axes: axes,
    datasets: datasets,
    size: 360,
    animate: true
  });
  chartContainer.appendChild(chart);
  section.appendChild(chartContainer);

  const textAlt = createTextAlternative(axes, datasets);
  section.appendChild(textAlt);

  const analysis = computeComplementarity(axes, profiles, complementarityMap);
  const analysisSection = renderAnalysis(analysis);
  section.appendChild(analysisSection);

  container.appendChild(section);
  return section;
}

function computeComplementarity(axes, profiles, complementarityMap) {
  if (profiles.length < 2) return { shared: [], complementary: [], tensions: [] };

  const a = profiles[0];
  const b = profiles[1];
  const threshold = 60;

  const shared = [];
  const complementary = [];
  const tensions = [];

  for (const axis of axes) {
    const scoreA = a.scores[axis.key] || 0;
    const scoreB = b.scores[axis.key] || 0;

    if (scoreA >= threshold && scoreB >= threshold) {
      shared.push({ axis: axis.label, scoreA, scoreB });
    }

    if ((scoreA >= threshold && scoreB < 40) || (scoreB >= threshold && scoreA < 40)) {
      complementary.push({ axis: axis.label, high: scoreA > scoreB ? a.label : b.label, low: scoreA > scoreB ? b.label : a.label });
    }
  }

  if (complementarityMap) {
    for (const pair of complementarityMap) {
      const scoreA1 = a.scores[pair.role1] || 0;
      const scoreB2 = b.scores[pair.role2] || 0;
      const scoreA2 = a.scores[pair.role2] || 0;
      const scoreB1 = b.scores[pair.role1] || 0;

      if ((scoreA1 >= threshold && scoreB2 >= threshold) || (scoreA2 >= threshold && scoreB1 >= threshold)) {
        complementary.push({
          axis: `${pair.role1Label} ↔ ${pair.role2Label}`,
          high: 'Complementary',
          low: 'Match',
          description: pair.description
        });
      }
    }
  }

  for (const axis of axes) {
    const scoreA = a.scores[axis.key] || 0;
    const scoreB = b.scores[axis.key] || 0;

    if (scoreA >= 70 && scoreB >= 70 && axis.tensionWhenBothHigh) {
      tensions.push({ axis: axis.label, type: 'both-high', description: axis.tensionWhenBothHigh });
    }
    if (scoreA < 30 && scoreB < 30 && axis.tensionWhenBothLow) {
      tensions.push({ axis: axis.label, type: 'both-low', description: axis.tensionWhenBothLow });
    }
  }

  return { shared, complementary, tensions };
}

function renderAnalysis(analysis) {
  const section = document.createElement('div');
  section.className = 'compare-analysis';

  if (analysis.shared.length > 0) {
    const block = document.createElement('div');
    block.className = 'compare-analysis__block';
    const h = document.createElement('h3');
    h.textContent = 'Shared strengths';
    block.appendChild(h);
    const list = document.createElement('ul');
    for (const item of analysis.shared) {
      const li = document.createElement('li');
      li.textContent = `${item.axis} — both score high`;
      list.appendChild(li);
    }
    block.appendChild(list);
    section.appendChild(block);
  }

  if (analysis.complementary.length > 0) {
    const block = document.createElement('div');
    block.className = 'compare-analysis__block';
    const h = document.createElement('h3');
    h.textContent = 'Complementary roles';
    block.appendChild(h);
    const list = document.createElement('ul');
    for (const item of analysis.complementary) {
      const li = document.createElement('li');
      if (item.description) {
        li.textContent = item.description;
      } else {
        li.textContent = `${item.axis} — ${item.high} leads, ${item.low} supports`;
      }
      list.appendChild(li);
    }
    block.appendChild(list);
    section.appendChild(block);
  }

  if (analysis.tensions.length > 0) {
    const block = document.createElement('div');
    block.className = 'compare-analysis__block';
    const h = document.createElement('h3');
    h.textContent = 'Potential tensions';
    block.appendChild(h);
    const list = document.createElement('ul');
    for (const item of analysis.tensions) {
      const li = document.createElement('li');
      li.textContent = `${item.axis}: ${item.description}`;
      list.appendChild(li);
    }
    block.appendChild(list);
    section.appendChild(block);
  }

  if (analysis.shared.length === 0 && analysis.complementary.length === 0 && analysis.tensions.length === 0) {
    const p = document.createElement('p');
    p.className = 'compare-analysis__empty';
    p.textContent = 'Your profiles are quite different. This can be a strength — diverse perspectives often produce better decisions.';
    section.appendChild(p);
  }

  return section;
}

function generateCollaborationAgreement(analysis, profiles) {
  const parts = [];

  if (profiles.length >= 2) {
    parts.push(`${profiles[0].label} and ${profiles[1].label}:`);
  }

  if (analysis.complementary.length > 0) {
    const comp = analysis.complementary[0];
    if (comp.description) {
      parts.push(comp.description);
    } else {
      parts.push(`One of you leads on ${comp.axis}, while the other provides support. This is a productive division.`);
    }
  }

  if (analysis.tensions.length > 0) {
    const tension = analysis.tensions[0];
    parts.push(`Likely tension: ${tension.axis} — ${tension.description}`);
    parts.push('Suggested agreement: define separately when to explore and when to commit.');
  }

  if (analysis.shared.length > 0) {
    parts.push(`You share strength in ${analysis.shared.map(s => s.axis).join(', ')}. Decide who leads when both want to act.`);
  }

  return parts.join('\n');
}

export { createComparisonView, computeComplementarity, generateCollaborationAgreement };
