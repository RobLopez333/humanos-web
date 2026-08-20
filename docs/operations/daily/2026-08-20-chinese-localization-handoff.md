# HumanOS Web — Chinese Localization Handoff

Date: 2026-08-20

## Change

HumanOS Web now supports four global public languages:

- EN — English
- ES — Español
- JP — 日本語
- ZH — 简体中文

English remains the default and canonical source language.

## Implementation

Chinese was added to the existing reusable localization system.

Internal language code:

`zh`

Current Chinese variant:

Simplified Chinese.

The architecture should remain ready for future separation into:

- `zh-CN`
- `zh-TW`

## Coverage

Chinese localization applies across the current public routes:

- `/`
- `/robotics`
- `/smart-home`

The localization covers visible UI content including navigation, heroes, CTAs, cards, architecture labels, Robotics, Smart Home, Energy/Water references, resilience states, safety copy and footer content.

## Persistence

The existing client-side language preference system remains in use.

Expected behavior:

EN / ES / JP / ZH selection persists across navigation and refresh.

No backend state is required for language preference.

## Scope Protection

This localization change must not alter:

- Home layout
- Robotics layout
- Smart Home layout
- existing routes
- visual identity
- backend
- authentication
- billing
- database
- product functionality

## Current Rule

One HumanOS.
One active language at a time.

English by default, with complete Spanish, Japanese and Simplified Chinese experiences available globally.

## Next Public Verticals

Future HumanOS Energy and HumanOS Water experiences should be created from the beginning with:

- EN
- ES
- JP
- ZH

