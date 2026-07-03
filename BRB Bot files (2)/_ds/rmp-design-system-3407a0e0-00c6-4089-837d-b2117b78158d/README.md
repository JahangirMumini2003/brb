# RMP Design System

The **Release Management Portal (RMP)** is an internal web application that enforces PCI DSS-compliant production deployments with Bitbucket Cloud integration. Every production release flows through RMP: a developer files an RM Ticket, three approvers (Tech → Business → Final) sign off, and a Release Engineer executes the deploy. Segregation of duties is enforced — you cannot approve or deploy your own code.

This design system is what RMP looks and feels like. It's the foundation: tokens, components, screens, and the principles that hold them together.

## Sources

No existing codebase, Figma, or brand assets were provided. This system is designed from first principles, modeled on the visual language of modern operations tooling — **Linear**, **GitHub**, **Vercel**, **Datadog** — adjusted for the seriousness of compliance work. Where a screenshot, font file, or component would normally be lifted from a prior product, an original token or specimen was authored instead. Substitutions are flagged in the relevant sections.

## Design tenets

These four principles drive every decision in this system:

1. **Compliance is a feature, not a tax.** The audit trail and segregation-of-duties checks are the product, not friction wrapped around it. We surface them confidently.
2. **No surprises.** A user should always know what state a ticket is in, what action is needed next, and from whom. Status is visible from across the room.
3. **Reduce cognitive load for approvers.** Especially the CTO. The approval screen answers *"what am I approving and is it safe?"* in under ten seconds.
4. **Make the right thing the easy thing.** Every shortcut is a compliant shortcut. The emergency hotfix path is fast *and* fully logged.

## What's in this folder

> The README sections below — **Content Fundamentals**, **Visual Foundations**, **Iconography** — are the canonical reference for designing with this system. Read them before authoring new screens.

| Path | What it is |
|---|---|
| `README.md` | This file. The doctrine. |
| `colors_and_type.css` | All design tokens as CSS variables — colors, type ramps, spacing, radii, shadows, motion. Import this in any artifact built against RMP. |
| `fonts/` | Webfonts (Inter Tight, JetBrains Mono). |
| `assets/` | Logo, status icons, illustrations. |
| `preview/` | Cards that populate the Design System tab. |
| `ui_kits/rmp/` | The RMP UI kit — components and interactive screen prototypes. |
| `SKILL.md` | Manifest making this folder a portable Claude Skill. |

---

## Content fundamentals

How RMP writes copy. Every label, banner, button, and empty-state should pass these tests.

### Voice
- **Direct.** Cut every word that doesn't add information. "Submit for review" beats "Click here to submit this ticket for review."
- **Calm.** No exclamation marks. No emojis. No "Oops!" The tone is a senior engineer reading the on-call runbook out loud.
- **Accountable.** Always name who took an action and when. "Marcus Chen granted Technical Approval · today 14:38."
- **Specific.** "Approve — Final" beats "Approve." "Approve" beats "OK." "Ready to deploy" beats "All set."

### Person
- **You / your** for the user. *"Awaiting your action."* *"You can't approve your own ticket."*
- **Third person** for other actors. *"Jess Donovan submitted RM-1042."*
- Never **we** — RMP isn't a personality, it's infrastructure. The exception is a single explanatory line in onboarding that doesn't exist yet.

### Casing
- **Sentence case** for everything except statuses. Page titles, buttons, labels, menu items — all sentence case.
- **UPPERCASE WITH LETTER-SPACING** for ticket statuses and eyebrow labels — they're meant to be read as machine tokens, not prose. `PENDING FINAL APPROVAL` is a state name, not a phrase.
- **Monospace** for any string the user could copy: `RM-1042`, `!247`, `PROJ-1187`, `10.42.8.3:8080`, `payments-prod`, commit SHAs.

### Compliance language
The compliance words appear without apology and without scare-tactic phrasing.
- ✅ *"PCI DSS segregation of duties — the author of an RM Ticket can't approve it or deploy it. This is the system working as designed."*
- ❌ *"⚠️ SECURITY VIOLATION! You are not authorized to perform this action."*
- ✅ *"Your approval will be cryptographically signed and logged."*
- ❌ *"Please be aware that all approvals are subject to mandatory audit recording per company policy section 4.2.1."*

### Approver-facing copy
Specifically for the approval modal — the highest-stakes screen.
- The modal title names the stage: *"Grant Technical Approval"* not *"Approve."*
- The "you are approving" recap is a noun phrase, not a question.
- Reject and Request-changes copy *require* a comment; the placeholder asks the right question:
  - Reject placeholder: *"Why is this not safe to deploy?"*
  - Changes placeholder: *"What needs to change before this can be re-submitted?"*

### Numbers and time
- **Relative time** in lists and timelines (*"2h ago"*, *"yesterday"*) so the page stays scannable.
- **Absolute UTC** in the audit log and any logged event (*"2026-05-23 14:38:11"*). Auditors need this.
- **No localization** in the design phase — English only.

### Emoji
**No emoji.** Anywhere. Not in chips, not in banners, not in toasts. The one exception is the inline ⚡ glyph on emergency-flag chips, which we treat as a typographic accent, not an emoji — it's there for at-a-glance scanability of the emergency cohort in a long list.

---

## Visual foundations

### Background & layering
- **Canvas** is `--ink-25` (`#fafbfc`), a near-white with the faintest blue cast. Never pure white — that flattens the perception of surface depth.
- **Surfaces** (cards, modals, tables) are pure white, sitting on the canvas with a 1px `--ink-100` border and `--shadow-sm`. Surfaces hold the content; the canvas is the gap between them.
- **No gradients** as background fills. Two exceptions:
  - The logo mark uses a subtle brand-500 → brand-700 diagonal gradient.
  - Approval-stage cards on the ticket detail get a soft top-to-white gradient (`var(--brand-50)` → `white`) when complete, to telegraph done-ness without a heavy fill.
- **No full-bleed imagery.** No hero photos. No illustrations beyond the empty-state icon circles. RMP is software for grown-ups; it's not selling itself.
- **No patterns / textures.** Surfaces are flat.

### Color
See `colors_and_type.css` for tokens. Rules:
- **One primary per surface.** A page has one Approve / Submit / Deploy button — never two competing primaries.
- **Color is information, not decoration.** Status colors *mean* something. Brand teal is reserved for affirmative action and brand presence. Never put status colors on chrome.
- **Semantic > literal.** Use `--fg-secondary` not `--ink-600` in components, so theming changes are token-driven.

### Typography
- **Inter Tight** for everything UI. **JetBrains Mono** only for things the user might copy.
- **Body is 14px** — this is an ops tool used on laptop displays at arm's length, not a marketing site. Heading scale is restrained: 17 / 20 / 24 / 30px.
- **Letter-spacing trends tight** at heading sizes (`-0.01` to `-0.02em`), normal at body, wide-tracked uppercase for eyebrow labels.
- **`text-wrap: pretty`** on headings and any multi-line body copy.
- **Tabular numerals on by default** (`font-feature-settings: 'cv11', 'cv01'` etc.) so columns of timestamps and counts align.

### Corner radii
Modest. RMP is not consumer software.
- `xs` 3px for chips/tags
- `sm` 5px for buttons and inputs
- `md` 7px for cards
- `lg` 10px for modals
- `xl` 14px for hero surfaces (rare)
- `full` reserved for avatar circles and the status dot only — never on buttons (no pill buttons).

### Borders
- `--border-subtle` (`--ink-100`) for hairlines between rows in tables and timelines.
- `--border-default` (`--ink-200`) for inputs, secondary buttons, table outer edges.
- `--border-strong` (`--ink-300`) on hover for inputs/buttons.
- `--border-focus` (`--brand-500`) on `:focus-visible`, with `--shadow-focus` halo.

### Shadows / elevation
Layered, low-spread, tinted toward `--ink-900` not pure black. Five steps `xs → xl`. Modals lift to `xl`, popovers/menus to `md`, table-row hover bumps to `sm`. The general rule: **surfaces should feel pressed into the page, not levitating**.

### Motion
Tight and mechanical.
- 80ms / 140ms / 220ms / 360ms timing scale — never longer.
- `cubic-bezier(0.2, 0.7, 0.2, 1)` is the canonical ease-out. No bouncy springs.
- **What animates**: hover/focus state transitions, modal in-and-out, toast slide-up, the deploying-status pulse, the approval-timeline pending dot.
- **What doesn't animate**: page transitions (hard cut between routes), tabs, table sorts.
- Reduced-motion respected throughout (status pulse becomes static, modal fades without translate).

### Hover and press states
- **Buttons**: hover darkens fill by one step on the brand/danger scale (e.g. brand-500 → brand-600). Press goes one step further (700). Secondary buttons darken the *background* from white → `--ink-50` and the border from 200 → 300.
- **Rows in tables/lists**: hover sets background to `--ink-25`. No shadow change — that would feel too "card-y" for a row.
- **Icon buttons**: hover background `--ink-50`, color from `--ink-500` → `--ink-700`.
- **No scale-down press states**. RMP isn't a touch app; pressing buttons doesn't feel physical, it feels like committing a deliberate decision.

### Transparency and blur
- **Modal backdrop**: `rgba(14, 19, 32, 0.45)` plus a `backdrop-filter: blur(2px)`. The blur is just enough to deemphasize background content without rendering it illegible — auditors and reviewers may glance at the underlying ticket while a modal is open.
- **No frosted-glass surfaces.** Cards are opaque.
- **No alpha on text** for emphasis levels — use the ink scale instead.

### Imagery
There are essentially no photographs in RMP. The visual language is:
- The seal-mark logo
- Lucide line icons at 1.75 stroke
- Per-user **gradient avatar circles** with initials, tinted by role family (dev / lead / pm / cto / devops / auditor)
- The empty-state illustrative spot — a circular `--ink-50` chip with a single Lucide line icon in `--ink-400`

That's it. No stock photography, no hand-drawn illustrations.

### Layout
- **Fixed sidebar** (248px) + **fixed top bar** (56px), main column scrolls.
- **Max content width 1280px**, centered, with 32px gutters.
- **Two-column ticket detail**: 1fr main + 320px metadata rail.
- **Page header** is consistent across screens: title + subtitle on the left, action buttons on the right, 24px below.
- **Forms** never use floating labels. Always top-aligned with a hint line below.

---

## Iconography

### System
**[Lucide](https://lucide.dev)** at version 0.469.0, loaded via CDN UMD bundle. Lucide is line-only, 24×24 viewBox, with a tunable stroke width that lets us harmonize density with our type.

### Settings
- **Stroke width: 1.75** (Lucide default is 2; we go slightly thinner to match Inter Tight's stroke weight).
- **Default sizes: 14, 16, 18, 20px.** 14 for inline-with-text icons; 16 for nav and button icons; 18 for banner accents; 20 for callouts inside cards.
- **Default color: `--ink-600`.** Lucide icons inherit `currentColor`, so they pick up the surrounding text color naturally. Override only when the icon *is* the meaning (e.g. green `check-circle-2` for an approved approval, red `alert-octagon` for a rejection).

### Substitution flag
🚩 **Lucide is a CDN substitution.** No proprietary icon set was supplied with this brief. If RMP adopts a specific icon family in production (e.g. Phosphor, Tabler, an internal set), this is the only system-wide swap needed — every icon usage goes through the `<Icon name="…">` primitive in `ui_kits/rmp/ui.jsx`. Replace the implementation there once.

### Glyph usage map
Recurring meanings → canonical icon. Stick to these so the visual vocabulary stays predictable.

| Meaning | Icon | Notes |
|---|---|---|
| RM ticket | `ticket` | Always the entity |
| Bitbucket MR | `git-pull-request` | brand-600 when active |
| Branch / SHA | `git-branch`, `git-commit-horizontal` | mono text adjacent |
| Approved | `check-circle-2` | brand-500 |
| Rejected | `x-circle` | danger-500 |
| Changes requested | `rotate-ccw` | warning-500 |
| Pending / waiting | `circle-dot` or `clock` | info-500 |
| Deploy | `rocket` | warning-500 if running, brand-500 if done |
| Rollback | `undo-2` | danger-500 |
| Emergency / hotfix | `zap` | emergency-500 only |
| SoD enforcement | `shield-check` / `shield-alert` | warning when blocking |
| Audit / history | `history` | ink-500 |
| Author of ticket | `user-check` | ink-500 |
| Service / target | `server` | ink-500 |
| Pipeline / logs | `terminal` | ink-600 |
| External link | `external-link` | size 12 inline, brand-600 |
| Search | `search` | ink-400 in input affix |
| Settings | `settings` | ink-500 |
| Notifications | `bell` | ink-500 |

### Logo & marks
The seal mark (`assets/logo-mark.svg`) and wordmark (`assets/logo-wordmark.svg`) live with the brand assets. The mark is **a ring with a checkmark inside** — references both wax seals (release sign-off) and code review. It renders at radius ≥ `--radius-md`. Never place on a busy background. There is no monochrome version yet; on dark surfaces the mark sits in an `--ink-800` rounded square with the same gradient stroke.

### Emoji & unicode
**Don't use them.** The single exception is the `⚡` glyph used as a typographic accent on emergency chips. It is not selected from an emoji picker — it's a unicode bolt rendered at the same color as its surrounding chip text. Treat it as a glyph, not a sticker.

---

## Substitutions & open questions

| Item | What was substituted | Why |
|---|---|---|
| Fonts | Inter Tight + JetBrains Mono from Google Fonts | No proprietary fonts in this greenfield system. Both are open-licensed and production-ready. |
| Icon system | Lucide 0.469.0 from CDN | No icon set in scope. Lucide matches the modern-ops aesthetic and is light. |
| Logo | Original (the seal mark) | Designed from the brief. Replace if a corporate identity is supplied. |
| Brand color | "Seal Teal" `#128c6f` | Picked for the audit/compliance metaphor. Open to swap if the parent brand has a primary. |
| Sample data | Hard-coded fixtures | No backend in design phase. |

**Open questions for the next round:**

1. **Parent brand**: does RMP live inside a larger corporate identity that should constrain primary color and type? If yes, we lift those tokens and recolor.
2. **Emergency / hotfix flow specifics**: is single-stage CTO emergency approval the only exception, or can a CTO + one other deploy without all three? The current design assumes "CTO direct approval" as the only escape hatch.
3. **Stale-approval policy**: do all three approvers re-confirm, or only the stages that touch changed code? The current design demotes all three.
4. **MFA**: is the in-modal "I confirm with MFA" check the right pattern, or should it interrupt with a real challenge? Designed as a check to keep prototype testable.
5. **Auditor view**: should Auditors see a different default route than Dashboard? Current design shows them an empty awaiting-me list; might be friendlier to land them in the audit log.

---

## Index

| File / folder | What it is |
|---|---|
| `README.md` | You are here. |
| `SKILL.md` | Manifest making this folder a portable Claude Skill. |
| `colors_and_type.css` | All design tokens as CSS variables. |
| `assets/logo-mark.svg` | The seal mark logo. |
| `assets/logo-wordmark.svg` | Mark + "Release." wordmark. |
| `preview/colors-*.html` | Color cards (brand, neutrals, semantic, statuses). |
| `preview/type-*.html` | Type cards (Inter Tight, mono, scale). |
| `preview/spacing-*.html` | Spacing, radii, elevation. |
| `preview/components-*.html` | Buttons, fields, cards, timeline, banners, nav, states. |
| `preview/brand-*.html` | Logo, iconography. |
| `ui_kits/rmp/` | The full interactive prototype. See its README. |
| `ui_kits/rmp/index.html` | Entry point — click-through demo. |
