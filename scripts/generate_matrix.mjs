import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..');
const specsDir = resolve(repoRoot, 'docs/specs');
const matrixPath = resolve(specsDir, 'matrix.md');

function parseFrontmatter(markdown) {
  if (!markdown.startsWith('---\n')) return { metadata: {}, body: markdown };
  const endIndex = markdown.indexOf('\n---\n', 4);
  if (endIndex === -1) return { metadata: {}, body: markdown };
  const metadata = {};
  for (const line of markdown.slice(4, endIndex).trim().split('\n')) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) metadata[match[1]] = match[2];
  }
  return { metadata, body: markdown.slice(endIndex + 5) };
}

function normalizeStatus(status) {
  return (status ?? 'unknown').trim().toLowerCase().replace(/\s+/g, '-');
}

async function loadSpecs() {
  const entries = await readdir(specsDir, { withFileTypes: true });
  const specFiles = entries
    .filter(e => e.isFile() && /^DS\d{3}-.*\.md$/.test(e.name))
    .map(e => e.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const specs = [];
  for (const fileName of specFiles) {
    const markdown = await readFile(resolve(specsDir, fileName), 'utf8');
    const { metadata, body } = parseFrontmatter(markdown);
    if (!metadata.id) throw new Error(`${fileName} missing "id" frontmatter.`);
    const titleMatch = body.match(/^#\s+(.+)$/m);
    specs.push({
      id: metadata.id,
      title: metadata.title || (titleMatch ? titleMatch[1] : fileName),
      status: normalizeStatus(metadata.status),
      owner: metadata.owner ?? 'repository',
      summary: metadata.summary ?? '',
      fileName
    });
  }

  const ids = specs.map(s => Number(s.id.slice(2)));
  for (let i = 1; i < ids.length; i++) {
    if (ids[i] !== ids[i - 1] + 1) {
      throw new Error(`DS numbering not contiguous: expected DS${String(ids[i - 1] + 1).padStart(3, '0')} after ${specs[i - 1].id}, found ${specs[i].id}.`);
    }
  }
  return specs;
}

async function main() {
  const specs = await loadSpecs();
  const rows = specs.map(s =>
    `| [${s.id}](specsLoader.html?spec=${s.fileName}) | ${s.title} | [[status:${s.status}]] | ${s.owner} | ${s.summary.replace(/\|/g, '\\|')} |`
  ).join('\n');
  const matrix = `# Specification Matrix\n\nGenerated from DS frontmatter.\n\n| Specification | Title | Status | Owner | Summary |\n| --- | --- | --- | --- | --- |\n${rows}\n`;
  await writeFile(matrixPath, matrix);
  console.log(`Updated ${matrixPath}`);
}

main().catch(e => { console.error(e.message || e); process.exit(1); });
