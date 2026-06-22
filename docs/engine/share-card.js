import { drawRadarOnCanvas } from './radar-chart.js';

async function generateShareCard(config) {
  const {
    quizTitle,
    resultTitle,
    subtitle,
    axes,
    scores,
    shareText,
    quizUrl,
    colors = {
      bg: '#0f1117',
      bgCard: '#181b24',
      accent: '#d4a853',
      text: '#e8e6e3',
      textMuted: '#9a98a0',
      border: '#2e3247'
    }
  } = config;

  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, 1080, 1350);

  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 2;
  ctx.strokeRect(40, 40, 1000, 1270);

  drawLogo(ctx, 80, 80, colors.accent);

  ctx.fillStyle = colors.textMuted;
  ctx.font = '24px system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('OUTFINITY QUIZ', 140, 105);

  ctx.fillStyle = colors.accent;
  ctx.font = 'bold 28px system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(quizTitle, 80, 170);

  ctx.fillStyle = colors.text;
  ctx.font = 'bold 48px Georgia, serif';
  wrapText(ctx, resultTitle, 80, 250, 920, 56);

  if (subtitle) {
    ctx.fillStyle = colors.textMuted;
    ctx.font = '26px system-ui, sans-serif';
    wrapText(ctx, subtitle, 80, 340, 920, 32);
  }

  const chartY = 400;
  const chartSize = 400;
  const chartX = (1080 - chartSize) / 2;

  drawRadarOnCanvas(ctx, {
    axes: axes,
    datasets: [{ values: scores }],
    maxValue: 100,
    colors: [colors.accent]
  }, chartX, chartY, chartSize, chartSize);

  const scoresY = chartY + chartSize + 40;
  ctx.fillStyle = colors.text;
  ctx.font = '22px system-ui, sans-serif';
  ctx.textAlign = 'center';

  const scoreLabels = axes.map((a, i) => `${a.label}: ${scores[i]}`);
  const perRow = Math.ceil(scoreLabels.length / 2);
  for (let i = 0; i < scoreLabels.length; i++) {
    const col = i < perRow ? 0 : 1;
    const row = i < perRow ? i : i - perRow;
    const sx = col === 0 ? 300 : 780;
    const sy = scoresY + row * 32;
    ctx.fillText(scoreLabels[i], sx, sy);
  }

  const textY = scoresY + perRow * 32 + 40;
  ctx.fillStyle = colors.accent;
  ctx.font = 'italic 26px Georgia, serif';
  ctx.textAlign = 'center';
  wrapText(ctx, `"${shareText}"`, 540, textY, 880, 34);

  ctx.fillStyle = colors.textMuted;
  ctx.font = '20px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(quizUrl, 540, 1260);

  ctx.fillStyle = colors.textMuted;
  ctx.font = '18px system-ui, sans-serif';
  ctx.fillText('What role do you play when an important idea has to become real?', 540, 1290);

  return canvas;
}

function drawLogo(ctx, x, y, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(x + 20, y + 20, 18, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x + 20, y + 20, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x + 20, y + 2);
  ctx.lineTo(x + 20, y + 10);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + 20, y + 30);
  ctx.lineTo(x + 20, y + 38);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + 2, y + 20);
  ctx.lineTo(x + 10, y + 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + 30, y + 20);
  ctx.lineTo(x + 38, y + 20);
  ctx.stroke();

  ctx.restore();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (const word of words) {
    const testLine = line + (line ? ' ' : '') + word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, currentY);
  }
}

function downloadCanvas(canvas, filename) {
  const link = document.createElement('a');
  link.download = filename || 'quiz-result.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

async function shareCanvas(canvas, config) {
  const { shareText, quizUrl, filename } = config;

  if (navigator.share && navigator.canShare) {
    try {
      canvas.toBlob(async (blob) => {
        const file = new File([blob], filename || 'quiz-result.png', { type: 'image/png' });
        const shareData = {
          text: shareText,
          url: quizUrl,
          files: [file]
        };

        if (navigator.canShare(shareData)) {
          await navigator.share(shareData);
          return;
        }

        try {
          await navigator.share({ text: shareText, url: quizUrl });
        } catch {
          fallbackShare(shareText, quizUrl, canvas, filename);
        }
      }, 'image/png');
      return;
    } catch {
      // fall through to fallback
    }
  }

  fallbackShare(shareText, quizUrl, canvas, filename);
}

function fallbackShare(shareText, quizUrl, canvas, filename) {
  const fullText = `${shareText}\n${quizUrl}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullText).then(
      () => showShareFeedback('Copied to clipboard'),
      () => downloadCanvas(canvas, filename)
    );
  } else {
    downloadCanvas(canvas, filename);
  }
}

function showShareFeedback(message) {
  const toast = document.createElement('div');
  toast.className = 'share-toast';
  toast.textContent = message;
  toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#1e2130;color:#d4a853;padding:0.75rem 1.5rem;border-radius:8px;border:1px solid #2e3247;font-size:0.9rem;z-index:1000;';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

export { generateShareCard, downloadCanvas, shareCanvas };
