function createRadarChart(config) {
  const {
    axes,
    datasets,
    size = 300,
    rings = 5,
    maxValue = 100,
    colors = ['#d4a853', '#7ba4d4', '#5cb87a', '#d45353', '#b07bd4', '#d47b53', '#53d4b0', '#d453a8'],
    animate = true,
    showValues = true
  } = config;

  const center = size / 2;
  const radius = (size / 2) - 40;
  const angleStep = (2 * Math.PI) / axes.length;
  const startAngle = -Math.PI / 2;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Radar chart showing scores across multiple dimensions');
  svg.style.maxWidth = `${size}px`;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  for (let ring = 1; ring <= rings; ring++) {
    const ringRadius = (radius / rings) * ring;
    const points = axes.map((_, i) => {
      const angle = startAngle + i * angleStep;
      const x = center + ringRadius * Math.cos(angle);
      const y = center + ringRadius * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', points);
    polygon.setAttribute('fill', 'none');
    polygon.setAttribute('stroke', ring === rings ? '#2e3247' : '#1e2130');
    polygon.setAttribute('stroke-width', ring === rings ? '1.5' : '0.5');
    svg.appendChild(polygon);

    if (ring < rings) {
      const valueLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      const labelAngle = startAngle;
      const labelX = center + ringRadius * Math.cos(labelAngle) + 4;
      const labelY = center + ringRadius * Math.sin(labelAngle) - 2;
      valueLabel.setAttribute('x', labelX);
      valueLabel.setAttribute('y', labelY);
      valueLabel.setAttribute('fill', '#6b6975');
      valueLabel.setAttribute('font-size', '9');
      valueLabel.setAttribute('font-family', 'system-ui, sans-serif');
      valueLabel.textContent = Math.round((maxValue / rings) * ring);
      svg.appendChild(valueLabel);
    }
  }

  for (let i = 0; i < axes.length; i++) {
    const angle = startAngle + i * angleStep;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', center);
    line.setAttribute('y1', center);
    line.setAttribute('x2', x);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', '#2e3247');
    line.setAttribute('stroke-width', '0.5');
    svg.appendChild(line);

    const labelDistance = radius + 20;
    const labelX = center + labelDistance * Math.cos(angle);
    const labelY = center + labelDistance * Math.sin(angle);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', labelX);
    label.setAttribute('y', labelY);
    label.setAttribute('fill', '#9a98a0');
    label.setAttribute('font-size', '11');
    label.setAttribute('font-family', 'system-ui, sans-serif');
    label.setAttribute('text-anchor', getTextAnchor(angle));
    label.setAttribute('dominant-baseline', getDominantBaseline(angle));
    label.textContent = axes[i].label;
    svg.appendChild(label);
  }

  for (let d = datasets.length - 1; d >= 0; d--) {
    const dataset = datasets[d];
    const color = colors[d % colors.length];
    const values = dataset.values;

    const points = values.map((val, i) => {
      const angle = startAngle + i * angleStep;
      const r = (val / maxValue) * radius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', points);
    polygon.setAttribute('fill', color);
    polygon.setAttribute('fill-opacity', datasets.length > 1 ? '0.15' : '0.2');
    polygon.setAttribute('stroke', color);
    polygon.setAttribute('stroke-width', '2');
    polygon.setAttribute('stroke-opacity', '0.8');

    if (animate && !prefersReducedMotion) {
      polygon.style.opacity = '0';
      polygon.style.transition = 'opacity 400ms ease';
      setTimeout(() => { polygon.style.opacity = '1'; }, 100 + d * 150);
    }

    svg.appendChild(polygon);

    if (showValues) {
      for (let i = 0; i < values.length; i++) {
        const angle = startAngle + i * angleStep;
        const r = (values[i] / maxValue) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', '4');
        circle.setAttribute('fill', color);
        circle.setAttribute('stroke', '#0f1117');
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('tabindex', '0');
        circle.setAttribute('role', 'img');
        circle.setAttribute('aria-label', `${axes[i].label}: ${values[i]}`);

        if (animate && !prefersReducedMotion) {
          circle.style.opacity = '0';
          circle.style.transition = 'opacity 300ms ease';
          setTimeout(() => { circle.style.opacity = '1'; }, 300 + d * 150 + i * 50);
        }

        svg.appendChild(circle);
      }
    }
  }

  return svg;
}

function createTextAlternative(axes, datasets) {
  const container = document.createElement('div');
  container.className = 'radar-text-alternative';

  for (const dataset of datasets) {
    if (dataset.label) {
      const heading = document.createElement('h4');
      heading.textContent = dataset.label;
      heading.className = 'radar-text-alternative__heading';
      container.appendChild(heading);
    }

    const list = document.createElement('dl');
    list.className = 'radar-text-alternative__list';

    for (let i = 0; i < axes.length; i++) {
      const dt = document.createElement('dt');
      dt.textContent = axes[i].label;
      const dd = document.createElement('dd');
      dd.textContent = dataset.values[i];
      list.appendChild(dt);
      list.appendChild(dd);
    }

    container.appendChild(list);
  }

  return container;
}

function getTextAnchor(angle) {
  const deg = ((angle * 180 / Math.PI) + 360) % 360;
  if (deg > 80 && deg < 100) return 'middle';
  if (deg > 260 && deg < 280) return 'middle';
  if (deg >= 90 && deg <= 270) return 'end';
  return 'start';
}

function getDominantBaseline(angle) {
  const deg = ((angle * 180 / Math.PI) + 360) % 360;
  if (deg > 250 && deg < 290) return 'auto';
  if (deg > 70 && deg < 110) return 'hanging';
  return 'central';
}

function drawRadarOnCanvas(ctx, config, x, y, width, height) {
  const {
    axes,
    datasets,
    maxValue = 100,
    colors = ['#d4a853', '#7ba4d4', '#5cb87a', '#d45353']
  } = config;

  const cx = x + width / 2;
  const cy = y + height / 2;
  const radius = Math.min(width, height) / 2 - 30;
  const angleStep = (2 * Math.PI) / axes.length;
  const startAngle = -Math.PI / 2;
  const rings = 5;

  for (let ring = 1; ring <= rings; ring++) {
    const ringRadius = (radius / rings) * ring;
    ctx.beginPath();
    for (let i = 0; i <= axes.length; i++) {
      const angle = startAngle + (i % axes.length) * angleStep;
      const px = cx + ringRadius * Math.cos(angle);
      const py = cy + ringRadius * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = ring === rings ? '#2e3247' : '#1e2130';
    ctx.lineWidth = ring === rings ? 1.5 : 0.5;
    ctx.stroke();
  }

  for (let i = 0; i < axes.length; i++) {
    const angle = startAngle + i * angleStep;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
    ctx.strokeStyle = '#2e3247';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  for (const dataset of datasets) {
    const color = colors[datasets.indexOf(dataset) % colors.length];
    const values = dataset.values;

    ctx.beginPath();
    for (let i = 0; i <= values.length; i++) {
      const angle = startAngle + (i % values.length) * angleStep;
      const r = (values[i % values.length] / maxValue) * radius;
      const px = cx + r * Math.cos(angle);
      const py = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = color + '33';
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  ctx.fillStyle = '#9a98a0';
  ctx.font = '10px system-ui, sans-serif';
  ctx.textAlign = 'center';
  for (let i = 0; i < axes.length; i++) {
    const angle = startAngle + i * angleStep;
    const labelDist = radius + 16;
    const lx = cx + labelDist * Math.cos(angle);
    const ly = cy + labelDist * Math.sin(angle);
    ctx.fillText(axes[i].label, lx, ly + 3);
  }
}

export { createRadarChart, createTextAlternative, drawRadarOnCanvas };
