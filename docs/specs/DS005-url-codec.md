---
id: DS005
title: URL Codec
status: draft
owner: outfinity
summary: Base64URL encoding and decoding of quiz results in URL fragments, payload schema, validation, and security constraints.
---

# URL Codec

## Introduction

The URL codec module encodes aggregated quiz results into URL fragments and decodes them back. This enables result sharing without server-side storage. The fragment (after `#`) is processed by the browser and is not transmitted to the server.

## Core Content

The payload schema contains: version number (`v`), aggregated scores array (`r`), ecology or secondary scores array (`e` when applicable), and archetype identifier (`a` when applicable). The payload never contains individual answers, names, emails, completion time, professional domains, or unique identifiers.

Encoding process: the payload object is serialized to JSON, converted to Base64, then made URL-safe by replacing `+` with `-`, `/` with `_`, and removing `=` padding.

Decoding process: the Base64URL string is restored to standard Base64, decoded to JSON, and validated. Validation checks: version number is recognized, array lengths match the expected dimension count, all values are numbers within expected bounds, and archetype identifiers are in the known set.

Decoded data is rendered exclusively through `textContent`. The module never uses `innerHTML` for decoded payload values. This prevents cross-site scripting through crafted URL fragments.

The module exports four functions: `encodeResult(payload)`, `decodeResult(fragment)`, `validatePayload(data, schema)`, and `buildShareUrl(baseUrl, payload)`.

Optional fields (mission domains, current stage) are included only when the user explicitly opts in through checkboxes in the share interface. They are not included by default.

## Decisions & Questions

### Question #1: Should the codec support compression?

Response: Not initially. The payload for current quizzes fits comfortably within URL length limits (under 200 characters). If quizzes with many dimensions are added, lightweight compression may be introduced with a version bump.

### Question #2: How should version mismatches be handled?

Response: If the version in the payload does not match any known version, the module displays a message explaining that the result was generated with a different version of the quiz and offers to retake it.

## Conclusion

The URL codec enables private result sharing through browser-only fragment encoding. Security is enforced through strict validation and textContent-only rendering.
