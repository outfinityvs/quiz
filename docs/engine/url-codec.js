function encodeResult(payload) {
  const json = JSON.stringify(payload);
  return btoa(json)
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '');
}

function decodeResult(fragment) {
  const raw = fragment.startsWith('#result=')
    ? fragment.slice(8)
    : fragment.startsWith('result=')
      ? fragment.slice(7)
      : fragment;

  const base64 = raw
    .replaceAll('-', '+')
    .replaceAll('_', '/');

  const padded = base64 + '='.repeat((4 - base64.length % 4) % 4);

  try {
    const json = atob(padded);
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function validatePayload(data, schema) {
  if (!data || typeof data !== 'object') return { valid: false, error: 'Invalid payload format.' };
  if (!data.v || typeof data.v !== 'number') return { valid: false, error: 'Missing or invalid version.' };

  const knownVersions = schema.versions || [1];
  if (!knownVersions.includes(data.v)) {
    return { valid: false, error: `Unknown version ${data.v}. This result was generated with a different version of the quiz.` };
  }

  if (schema.dimensions) {
    if (!Array.isArray(data.r)) return { valid: false, error: 'Missing scores array.' };
    if (data.r.length !== schema.dimensions) {
      return { valid: false, error: `Expected ${schema.dimensions} dimensions, got ${data.r.length}.` };
    }
    for (const val of data.r) {
      if (typeof val !== 'number' || val < 0 || val > schema.maxValue || !Number.isFinite(val)) {
        return { valid: false, error: 'Score value out of expected range.' };
      }
    }
  }

  if (schema.ecologyDimensions && data.e) {
    if (!Array.isArray(data.e)) return { valid: false, error: 'Invalid ecology scores.' };
    if (data.e.length !== schema.ecologyDimensions) {
      return { valid: false, error: `Expected ${schema.ecologyDimensions} ecology dimensions, got ${data.e.length}.` };
    }
  }

  if (schema.archetypes && data.a) {
    if (!schema.archetypes.includes(data.a)) {
      return { valid: false, error: 'Unknown archetype.' };
    }
  }

  return { valid: true };
}

function buildShareUrl(baseUrl, payload) {
  const encoded = encodeResult(payload);
  return `${baseUrl}#result=${encoded}`;
}

function parseFragment() {
  const hash = window.location.hash;
  if (!hash || !hash.includes('result=')) return null;
  return decodeResult(hash);
}

export { encodeResult, decodeResult, validatePayload, buildShareUrl, parseFragment };
