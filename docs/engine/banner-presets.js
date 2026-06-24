const OUTFINITY_LOGO_URL = new URL('../assets/outfinity.svg', import.meta.url).href;

const BANNER_PRESETS = {
  'outfinity-explorer-circle': {
    enabled: true,
    title: 'Outfinity Venture Validation Studio',
    message: 'Entrepreneur or AI Expert?\nJoin Explorer Circle for Venture Validation, Partners, and AI-Native Projects.',
    ctaText: 'Join Explorer Circle',
    ctaUrl: 'https://outfinity.ch/studio/explorer-circle.html',
    iconUrl: OUTFINITY_LOGO_URL
  }
};

const DEFAULT_BANNER_KEY = 'outfinity-explorer-circle';

function resolveBannerConfig(input) {
  const defaultBanner = BANNER_PRESETS[DEFAULT_BANNER_KEY];
  if (input === false) return { ...defaultBanner, enabled: false };
  if (!input) return { ...defaultBanner };

  if (typeof input === 'string') {
    return { ...(BANNER_PRESETS[input] || defaultBanner) };
  }

  if (typeof input === 'object') {
    if (input.enabled === false) return { ...defaultBanner, ...input, enabled: false };
    const presetKey = input.preset || input.key || DEFAULT_BANNER_KEY;
    const preset = BANNER_PRESETS[presetKey] || defaultBanner;
    return { ...preset, ...input };
  }

  return { ...defaultBanner };
}

export { BANNER_PRESETS, DEFAULT_BANNER_KEY, resolveBannerConfig };
