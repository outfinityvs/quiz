---
id: DS008
title: Privacy and Security
status: draft
owner: outfinity
summary: Privacy-by-architecture, Content Security Policy, no-analytics rule, fragment-only sharing, referrer policy, and permissions policy.
---

# Privacy and Security

## Introduction

This specification defines the privacy architecture and security constraints for Outfinity Quiz. Privacy is enforced through technical architecture, not policy promises.

## Core Content

The subsite must not initiate any network connection after page load. This is enforced through `connect-src 'none'` in the Content Security Policy. No `fetch`, `XMLHttpRequest`, `WebSocket`, `EventSource`, or `navigator.sendBeacon` calls are permitted from quiz code.

The required CSP header for quiz pages:

```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
connect-src 'none';
font-src 'none';
object-src 'none';
frame-src 'none';
form-action 'none';
base-uri 'none';
```

Additional headers:
- `Referrer-Policy: no-referrer`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()`

No cookies, no analytics, no tracking pixels, no fingerprinting, no external scripts, no iframes, no social SDKs.

Quiz state exists only in page memory. Closing or reloading the page erases all answers. Optional `localStorage` saving requires explicit user action labeled "Keep progress in this browser only" and must be accompanied by a "Delete all local data" option in the same area.

Shareable links encode results in the URL fragment (after `#`), not in the query string. The fragment is processed by the browser and is not sent to the server in the HTTP request. The payload contains only: quiz ID, version, aggregated scores, and archetype. It never contains individual answers, names, emails, completion time, professional domains, or unique identifiers.

Sharing uses a three-level model, none selected by default:
1. Invite only: shares the quiz URL without any result.
2. Minimal result: shares the profile title and one sentence.
3. Full map: shares the profile, aggregated scores, and diagram.

Web Share API is used only when the browser supports it and only after explicit user action. Fallbacks are always available: copy text, copy link, download image.

External links (Explorer Circle, ventures, partners) use `target="_blank" rel="noopener noreferrer"` with no tracking parameters.

## Decisions & Questions

### Question #1: Should sessionStorage be used for quiz progress?

Response: `sessionStorage` may be used optionally for progress within a single session (surviving accidental navigation). `localStorage` requires explicit opt-in. Neither stores individual answers in the shareable payload.

### Question #2: How should the CSP be applied on GitHub Pages?

Response: GitHub Pages does not support custom HTTP headers. The CSP must be applied via `<meta http-equiv="Content-Security-Policy">` in each quiz page's `<head>`.

## Conclusion

Privacy is enforced architecturally. The `connect-src 'none'` directive provides a verifiable guarantee that quiz code cannot transmit data. All sharing is explicit, fragment-based, and contains only aggregated results.
