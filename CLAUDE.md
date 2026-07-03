# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

An interactive click-through prototype of the **BRB bank Telegram Mini App** (online micro-loans, Uzbekistan market; all UI copy is in Russian). There is no backend — all data (loans, cards, FAQ, articles) is hard-coded fixtures inside the prototype.

The entire app lives in one file: `BRB Bot files (4)/uploads/BRB_Bot/index.html` (~5,200 lines).

## Running it

There is no build, lint, or test tooling. Serve the app folder statically and open it in a browser:

```bash
cd "BRB Bot files (4)/uploads/BRB_Bot" && python3 -m http.server 8000
```

Internet access is required at runtime — `support.js` loads React 18, ReactDOM, and Babel standalone from unpkg CDN, and fonts come from Google Fonts.

Viewport behavior: at widths ≥500px the app renders inside a desktop "phone frame" for preview; below 500px (real device / Telegram WebView) it goes fullscreen and the fake status bar is hidden.

## Architecture: the "dc" document format

`index.html` is a **dc document**, rendered by the generated runtime `support.js` (header: "GENERATED from dc-runtime/src/*.ts — do not edit"; its TypeScript source is not in this repo). The runtime parses the `<x-dc>` element, loads React from CDN, evaluates the logic script, and re-renders on every state change. **Never edit `support.js`** — all changes go into `index.html`.

The file has two halves:

1. **Template** — everything inside `<x-dc>` up to the script tag. Plain HTML with inline styles plus these directives:
   - `<sc-if value="{{ is_someScreen }}">…</sc-if>` — conditional block; there is one per screen, each tagged with `data-screen-label="…"` (Russian screen name)
   - `<sc-for>` — list rendering
   - `{{ name }}` — interpolation, resolved from the object returned by `renderVals()`
   - `onClick="{{ handler }}"` — event binding; navigation buttons pair it with `data-target="screenName"` read by the handler via `e.currentTarget.dataset.target`
   - `style-hover="…"` — hover-state styles
   - `<helmet>` — injected into `<head>` by the runtime (Manrope font, global CSS/keyframes). Do NOT put scripts that depend on load order here: the runtime re-creates them dynamically, so external scripts load async and inline scripts run before them. The Telegram SDK + init script live in the real static `<head>` for exactly this reason.

2. **Logic** — `<script type="text/x-dc" data-dc-script>` at the bottom (~line 3440): a single `class Component extends DCLogic` containing all state and behavior.

### Screen routing

`state.screen` is the router; `state.history` (an array) powers `goBack`. `renderVals()` generates an `is_<name>` boolean for every entry in the `allScreens` array, and those booleans gate the `<sc-if>` blocks.

**To add a screen:** add its name to `allScreens`, add an `<sc-if value="{{ is_name }}">` block in the template, and navigate to it with `data-target="name"` + `onClick="{{ goTo }}"`.

### renderVals()

Recomputed on every render, it returns *all* template bindings: the `is_*` screen flags, derived display strings (formatted amounts, labels), and event-handler closures. If a template references `{{ something }}`, it must exist in this returned object (or in state). Simulated async flows (OTP countdown, application review, fake loading screens) are `setInterval`/`setTimeout` timers managed in `_checkTimers()` and the `goTo` handler.

### Screen map

Modules in template order: onboarding → phone/OTP auth (incl. lockout/limit error states) → MyID face verification → loan calculator → application form → insurance selection → contract terms & OTP signing → dashboard → loans/cards tabs → product catalog → loan detail → auto-debit → payment flows → history → documents → FAQ → notifications → card linking → profile → blog/articles.

## Telegram Mini App integration

The app is deployed to Vercel (production: <https://brb-xi.vercel.app/>) and opened inside Telegram as a Mini App. `BRB Bot files (4)/TELEGRAM_WEBAPP.md` (written in Uzbek) is the integration playbook — BotFather setup, Vercel config (root directory must point at the app folder; serve `index.html` with `no-cache`), and a test checklist. Its invariants apply to all frontend changes:

- The Telegram SDK (`telegram-web-app.js`) and its init script live in the **static** `<head>` of `index.html` — never move them into `<helmet>` (see load-order note above; inside Telegram the `window.Telegram` guard would silently always fail).
- Always guard Telegram calls with `if (window.Telegram && window.Telegram.WebApp)` — the app must keep working in a plain browser.
- Viewport height: the init script writes `--tg-vh` from `tg.viewportStableHeight` (kept fresh via the `viewportChanged` event). Mobile CSS uses `height: var(--tg-vh, 100dvh)` — always use this variable, not raw `100vh`/`100dvh`, inside the `@media (max-width:500px)` block.
- Feature-detect newer Telegram API methods before calling them (e.g. `typeof tg.disableVerticalSwipes === 'function'` or `tg.isVersionAtLeast(...)`).
- `initDataUnsafe` is cosmetic-only (display name, `language_code`); it is client-forgeable, so never base auth/permissions on it, and never put a bot token in the frontend.
- Do not alter the ≥500px desktop phone-frame preview — it is intentional demo behavior.

## Visual conventions (BRB app)

- Font: **Manrope**; brand red **#E53935** (hover `#D32F2F`), text `#1A1A1A`, secondary `#6B7280`, surfaces `#F7F7F8`/`#EEEEF0`
- All styling is inline `style="…"` attributes — there are no CSS classes for components, only the few global rules in `<helmet>`
- Primary buttons: 52px height, 12px radius; screens are flex columns with a scrollable middle area

## The `_ds/` folder is NOT this app's design system

`BRB Bot files (4)/_ds/rmp-design-system-*/` is a bundled design-system artifact for an unrelated product ("RMP", teal/Inter Tight, English ops tool). It ships with the dc tooling but does not describe the BRB prototype's visual language. Do not apply RMP tokens or its README doctrine to BRB screens.

## Repo notes

- The prototype was historically iterated as `BRB TMA Prototype.dc.html` and renamed to `index.html` via the GitHub web UI (see git log); `.dc.html` is the native dc-document extension.
- The nested `uploads/` folder inside the app folder holds the only local asset: the BRB logo SVG (`korotkii-logotip-brb.svg`).
- GitHub remote: `JahangirMumini2003/brb`.
