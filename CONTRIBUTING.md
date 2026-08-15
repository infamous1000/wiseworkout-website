# Contributing — WiseWorkout project website

Conventions for this repository: the design system, the copy rules, and the few
project constraints that are not obvious from the code. Read this before changing
copy or visuals.

## Project

- FYP group: FYP26S215 · CSIT321 · SIM–University of Wollongong · 2025/26
- App: WiseWorkout — "Fitness that fits your life"
- The site serves three purposes: marketing (`/`), administrative (weekly meeting
  minutes and reflective diaries at `/updates`), and introduction (`/team`, `/about`).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 (`@theme` tokens in
`globals.css`) · Framer Motion · Supabase (PostgreSQL) · Lucide · Vercel.

Next.js 16 changed a number of App Router APIs. When something behaves differently
from an older tutorial, check the docs shipped in `node_modules/next/dist/docs/`
before working around it.

## Design system

The site follows the departure-board / control-room language documented in
`flighty-style-reference.md`: the upper page is a crisp white information panel,
the lower page drops into a deep indigo control room. The palette is almost
entirely achromatic with three signal colours, each locked to one role.

The earlier indigo `#6366F1` / Inter / gradient system was removed deliberately.
Don't reintroduce it.

### Tokens

All tokens live in `src/app/globals.css` under `@theme`. Use the Tailwind utilities
they generate (`bg-deep-indigo`, `text-carbon`, `shadow-whisper`) rather than raw
hex values, except inside the phone mockup and the feature screen panels.

| Role | Token | Value |
|---|---|---|
| Light canvas | `canvas` | `#ffffff` |
| Warm light surface | `linen` | `#faf8f7` |
| Dark canvas | `deep-indigo` | `#0d0021` |
| Darkest surface / cards on dark / footer | `midnight` | `#05010d` |
| Primary text on light | `ink` | `#000000` |
| Body text on light | `carbon` | `#333333` |
| Card metadata | `steel` | `#737373` |
| Labels on dark | `fog` | `#808080` |
| Hairlines on light · body text on dark | `silver` | `#cfcfcf` |
| Action | `signal-blue` | `#007bff` |
| Conversion | `amber` | `#f7be00` |
| Alert | `alert-red` | `#d92d20` |

Hairlines on dark are `border-white/10`.

### The three signal colours are role-locked

- `#f7be00` amber — the conversion only. Filled, `#000` text. Three instances on
  the homepage (hero, offer stack, final CTA) plus the mobile nav sheet. Every one
  of them renders `ui/DownloadCta.tsx`, which is the only place the label and the
  destination live. Amber on white is correct in the hero.
- `#007bff` blue — at most one filled button per surface. Today that is the
  waitlist modal submit and the `/updates` admin submit. Otherwise blue appears
  only as the focus ring, the active nav link, and one notification card border.
  The hero's secondary CTA is a black ghost button, never blue.
- `#d92d20` red — functional alerts only (form errors, one notification card
  border, delete hover). Never decorative.

### Typography

`system-ui` only, weights 400/500/600/700. No web fonts, no `next/font`. Sizes come
from the `@theme` scale — don't invent new ones, and don't introduce new font
styles or mix weights arbitrarily within a block.

| Utility | Size | Use |
|---|---|---|
| `text-display` | 36→56px, 700, lh 1.00, −0.025em | Hero h1, every h2 on dark |
| `text-heading` | 26→32px, 700, lh 1.1 | Section h2 on light |
| `text-heading-sm` | 22px, 600 | Card titles, FAQ questions |
| `text-lede` | 17px, 400, lh 1.5 | Section subheads, body |
| `text-body` | 16px, 400, lh 1.6 | Long prose (`/about`) |
| `text-ui` | 15px, 500/600 | Nav, buttons, table cells |
| `text-meta` | 13px, 400 | Eyebrows, metadata, announcement bar |
| `text-caption` | 12px, 500 | Stat labels, in-screen UI |

Sentence case throughout. No uppercase and no letter-spaced eyebrows — eyebrows are
`text-meta text-steel` in sentence case. Keep spacing between rows and columns
consistent within a section.

### Shape and depth

- `rounded-full` on every button, tag, nav element and icon container.
- `rounded-card` (16px) on cards, `rounded-float` (20px) on floating cards and
  modals, `rounded-xl` (12px) on inputs. Nothing below 8px.
- `shadow-whisper` and `shadow-nav` only — the 0.02–0.04 opacity stacks. The one
  exception is the phone frame, which carries a real device shadow inline.
- Depth comes from layering and the light-to-dark rhythm, not from heavy shadows.
- Light→dark transitions are a background-colour change on the next `<Section>`.
  No dividers, waves, diagonals or gradient fades.

### Layout

`src/components/ui/Section.tsx` wraps every section: surface, 64–80px vertical
padding, 1200px centred column. Hero, problem and mechanism centre their headings;
the dark sections left-align; the final CTA recentres.

### Animation

Framer Motion, kept restrained: scroll-triggered fade-up on section entry
(`FadeInUp`, `StaggerChildren`), gentle y-oscillation on the hero phone, nav pill
shadow on scroll, notification cards drifting in on a stagger.

Deliberately absent, and not to be added back: hover scale on cards or buttons,
page transitions, count-up number animations, parallax.

`FadeInUp` and `StaggerChildren` short-circuit on `useReducedMotion()`, and
`globals.css` neutralises CSS transitions under `prefers-reduced-motion`. New
motion has to respect it too.

### The signature element

Four white notification cards at −3° to +3° orbiting the hero phone
(`src/components/ui/NotificationCard.tsx`, driven by `siteConfig.notifications`).
Every number on a card also appears on the phone screen behind it or in
`siteConfig.stats` — the cards and the screen are one account.

The signature is spent in the hero and nowhere else. Feature rows get a phone
screen panel or nothing; concentrating it is what makes it read as a signature.

The phone interior and the feature screen panels keep the app's own indigo palette
(`#6C7EE8`, `#E6EAFE`, `#3D3D5C`, `#8A8A9E`) — a screen inside a frame is allowed a
different palette from the page.

### Removed on purpose

Gradient text, gradient fills, the `✦` character, `#f8f7ff` lavender backgrounds,
`shadow-lg`/`shadow-2xl`/coloured shadows, dashed connector lines, the ghosted
footer wordmark, uppercase `tracking-[0.22em]` eyebrows, rows of icons in tinted
rounded squares, and emoji.

## Copy and positioning

All marketing copy lives in `src/content/site-config.ts` — never inline it in a
component. The site is English only.

WiseWorkout is one app for an active life, not a lifting tracker: workouts,
running, cycling, calories and macros, challenges, a social feed, trainer search,
and a plan that bends to the user's real schedule. The line is "Fitness that fits
your life" — the product programmes around the days, minutes and equipment people
actually have.

An earlier version of the site was positioned narrowly ("for lifters six months
in") around an invented mechanism and compared itself to Hevy and Strong. It hid
most of the product and spoke to a fraction of the audience, and it was removed.
Don't reintroduce it, and don't invent a named mechanism the app does not have.

The competitor argument is consolidation: a running app, a calorie app, a workout
logger and a group chat each do their job well, but none knows what the others know.

### Tone

Modern, clean, confident, energetic, human, straightforward. Not corporate, not
"AI startup". Short headlines, short subheads, one idea per block.

Sell the outcome, not the feature name. The feature name belongs in the eyebrow;
the headline is what the user gets — "Know what you're actually eating", not
"Calorie Tracking".

Avoid: "Transform your life", "Unlock your potential", "Become the best version of
yourself", "Your ultimate fitness journey", "Elevate", "Seamlessly", "In today's
world". No emoji.

### Honesty rules

This is graded coursework. Never invent user counts, downloads, ratings,
testimonials, press logos, "trusted by" bars, award badges or pricing. A previous
version shipped an invented $9.99/mo pricing table and a "7-day free trial"; both
were deleted for that reason.

Never claim a feature that isn't in `app_ss/`. Every feature on the homepage is
backed by a real screenshot.

`siteConfig.stats` are one test account's numbers and the Stats section says so in
its lede. If you touch that section, keep the disclaimer.

### The call to action

The CTA is "Download now" (`siteConfig.cta`) and it links to the Android APK on
Google Drive (`siteConfig.ctaHref`), opening in a new tab. It was "Get early
access" into a waitlist form until there was a real build to install. Every
instance sits next to `siteConfig.ctaNote`: the build is an APK from Drive, not a
store listing. Don't claim an App Store or Play Store presence. The site says
Android and stops there.

The waitlist still exists as one text link under the final CTA, for anyone waiting
on the next build. Its copy promises an email when a new build lands and nothing
else — keep that promise narrow.

## App screenshots

Source screenshots live in `app_ss/` (untracked) and are processed into
`public/app/*.png` at 415×900 with `sips -Z 900`. Only the ones actually used are
kept in `public/`. Render them through `src/components/ui/PhoneFrame.tsx`; the
administration dashboard is a desktop web app and uses
`src/components/ui/BrowserFrame.tsx` instead.

Every screenshot has to answer "what does this screen let me do" — screenshot,
headline, one or two sentences, concrete benefit. Never decorative. Redact personal
data (e.g. applicant email addresses) before publishing a screenshot.

The app's five tabs are Home · Plans · Coach · Club · Progress. Setup is Apple
Health sync plus six questions (training type, experience, equipment, days per week
from 2–6, session length 30/45/60/75+) ending in "Build my plan". WiseCoach is an
in-app assistant that reads training history, current plan and injury profile, has
25 free messages a month, carries a "General guidance, not medical advice"
disclaimer, and has a "Find Professional" button for human coaches.

## Pages

### `/` — homepage

Section order is fixed in `src/app/page.tsx`. Surfaces alternate exactly once:
white/linen down to the coaches section, then `#0d0021` from the comparison through
the footer.

| Section | Component | Surface |
|---|---|---|
| Announcement bar + floating nav pill | `layout/Navbar` | `#0d0021` / white |
| Hero + signature orbit | `HeroSection` | white |
| Problem — "this takes four apps" | `ProblemSection` | white |
| Setup — six questions | `MechanismSection` | linen |
| Adaptive support + injury flow | `AdaptiveSection` | white |
| Features ×5, real screenshots | `FeaturesSection` | white |
| Personas | `PersonasSection` | white |
| For fitness professionals | `CoachesSection` | linen |
| Comparison | `ComparisonSection` | `#0d0021` |
| Free vs Premium | `PricingSection` | `#0d0021` |
| Offer stack | `OfferSection` | `#0d0021` |
| Built in public | `BuiltInPublicSection` | `#0d0021` |
| FAQ | `FaqSection` | `#0d0021` |
| Final CTA | `FinalCtaSection` | `#0d0021` |
| Footer | `layout/Footer` | `#05010d` |

Anchors other pages link to: `#features`, `#how-it-works`, `#comparison`,
`#pricing`, `#faq`, `#join`. Keep them if you rename components. In-page anchors go
through `ui/HashLink.tsx` — `next/link` swallows clicks on the route you are
already on, so same-page anchors render as plain `<a href="#…">`.

No testimonials, press logos, award badges or screenshot carousels.

### `/team`

Five cards on white: photo, name, what the person owns (not a job title),
description, GitHub and LinkedIn. Roles are written as ownership; don't revert them
to job titles.

### `/updates`

Dark control-room surface — the "log" metaphor. Two tabs in a pill segmented
control: meeting minutes and reflective diaries, both grouped by week label, newest
first, each an accordion. Admin posts through a password-protected panel behind the
floating Admin button; its submit is the one blue button on that surface. Empty
states are invitations, not apologies. Grouping and ordering must not change.

### `/about`

The academic page: factual register, no marketing voice, no join CTA. Problem
statement and research findings, objectives, scope, user categories, Free vs
Premium, Agile methodology, tech stack, the administration dashboard, references.

## Data and access rules

Tables: `team_members`, `weekly_updates` (diaries), `meeting_minutes`, `waitlist`.
Schema in `supabase/schema.sql`.

- Public pages read with the anon client (`lib/supabase/client.ts` or `server.ts`).
- Admin writes go server-side only through `lib/supabase/admin.ts`, which uses the
  service-role key. Never import it from a client component.
- `SUPABASE_SERVICE_ROLE_KEY` and `ADMIN_PASSWORD` must never appear in a
  `"use client"` file and must never carry a `NEXT_PUBLIC_` prefix — Next.js inlines
  those into the browser bundle.
- The admin gate is verified server-side in `src/lib/admin-auth.ts` and the
  `/api/admin/*` routes. There is no hardcoded fallback: an unset `ADMIN_PASSWORD`
  disables admin writes with a 503.
- `waitlist` has an insert-only RLS policy and deliberately no select policy, so
  nobody can read the email list with the public key. Don't add one.

## File structure

```
src/
  app/          routes: page.tsx, about/, team/, updates/, admin/, api/
  components/
    layout/     Navbar, Footer
    sections/   one file per homepage section
    ui/         Section, Button, DownloadCta, HashLink, PhoneFrame, BrowserFrame, …
    animations/ FadeInUp, StaggerChildren
    waitlist/   WaitlistModalProvider
  content/
    site-config.ts   all static marketing copy, nav links, constants
  lib/
    supabase/   client.ts (browser), server.ts (RSC), admin.ts (server-only)
    admin-auth.ts
```

Anything that does not need to come from the database belongs in `site-config.ts`:
site name, tagline, nav items, feature copy, FAQ, footer links.
