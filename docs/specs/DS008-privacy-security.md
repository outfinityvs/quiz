---
id: DS008
title: Privacy and Security
status: draft
owner: outfinity
summary: Privacy-by-architecture, Content Security Policy, constrained analytics, fragment-only sharing, referrer policy, and permissions policy.
---

# Privacy and Security

## Introduction

This specification defines the privacy architecture and security constraints for Outfinity Quiz. Privacy is enforced through technical architecture, not policy promises.

## Core Content

Quiz answers, scores, profiles, sensitive business data, and individual result details must not be transmitted by default. Static quiz assets may be loaded from the same origin. Any analytics must be separated from quiz answer data and must follow the constrained event contract in this specification.

The required CSP header for quiz pages:

```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
connect-src 'self';
font-src 'none';
object-src 'none';
frame-src 'none';
form-action 'none';
base-uri 'none';
```

Additional headers:
- `Referrer-Policy: no-referrer`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()`

No third-party tracking pixels, no fingerprinting, no social SDKs, no behavioral advertising tags, and no external scripts are permitted in the default privacy-first deployment. Analytics, when enabled, must be first-party or explicitly approved, must avoid cookies unless separately documented, and must never include answers, option IDs, raw scores, share fragments, emails, names, company identifiers, financial figures, legal/regulatory flags, family details, security gaps, or free-text sensitive content.

The global footer analytics hook may emit only page-level or coarse funnel events such as `quiz_viewed`, `started`, `completed`, `result_shared`, `email_opt_in`, `team_invited`, and `retake_started`. Event payloads may include quiz ID, quiz version, locale, route, category, method type, and non-sensitive duration buckets. Payloads must not include individual response content or result vulnerabilities.

Quiz state exists only in page memory. Closing or reloading the page erases all answers. Optional `localStorage` saving requires explicit user action. Completed result history is saved only when the user clicks `Save Result`; it stores the optional label, quiz title, result title, aggregate score summary, quiz URL, timestamp, and share-safe result fragment where available. It must not store individual answers, answer option IDs, names, emails, company identifiers, financial figures, legal/regulatory flags, family details, security gaps, or free-text sensitive content. The History page must include delete controls for each saved result and a `Delete All Saved Results` control.

Shareable links encode results in the URL fragment (after `#`), not in the query string. The fragment is processed by the browser and is not sent to the server in the HTTP request. The payload contains only safe aggregate material such as quiz ID, version, level, archetype, and aggregate scores when the user explicitly chooses result sharing. It never contains individual answers, names, emails, completion time, professional domains, company identifiers, financial figures, legal/regulatory flags, family details, security gaps, or unique identifiers.

Sharing uses a three-level model, none selected by default:
1. Invite only: shares the quiz URL without any result.
2. Minimal result: shares the profile title and one sentence.
3. Full map: shares the profile, aggregated scores, and diagram.

The public result actions are explicit: create a shareable link, download a share-safe card, or save the result locally. The generic native Web Share action is not required in the result UI; if helper code still exists for backwards compatibility, it must not collect or transmit quiz answers.

External links (Explorer Circle, ventures, partners) use `target="_blank" rel="noopener noreferrer"` with no tracking parameters.

Team, paired, leadership, cybersecurity, privacy, and regulatory results require stricter sharing defaults. Individual answers remain private. Aggregates may be shown only above the threshold defined by the quiz DS and only after respondents understand what will be displayed.

## Decisions & Questions

### Question #1: Should sessionStorage be used for quiz progress?

Response: `sessionStorage` may be used optionally for progress within a single session (surviving accidental navigation). `localStorage` requires explicit opt-in. Neither stores individual answers in the shareable payload.

### Question #2: How should the CSP be applied on GitHub Pages?

Response: GitHub Pages does not support custom HTTP headers. The CSP must be applied via `<meta http-equiv="Content-Security-Policy">` in each quiz page's `<head>`. If analytics is enabled, the CSP must list only the approved analytics endpoint and must still block unrelated outbound connections.

### Question #3: Can the platform collect analytics without breaking the privacy contract?

Response: Yes, but only under a constrained event contract. Analytics may measure coarse product usage and funnel quality. It must not collect answers, raw result details, identifiers, sensitive business information, or share fragments.

## Conclusion

Privacy is enforced architecturally and contractually. The platform separates static quiz operation, constrained product analytics, and explicit result sharing. All sharing is explicit, fragment-based, and contains only safe aggregate results.
