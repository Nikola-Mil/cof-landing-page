# Montenegro in the EU — Conference Landing Page

Landing page for **"Montenegro in the EU: Lessons, Issues, and Policy Directions"**,
an international conference hosted by Center for Finance, Montenegro and the
Chamber of Commerce of Montenegro, 15–16 October 2026, Hilton Podgorica.

Built as a standalone single-page app intended to be served at
`centerforfinance.me/landing-page`.

## Project Structure

```
landing-page/
├── src/app/
│   ├── components/   # One standalone component per page section
│   │   ├── navbar/ hero/ about/ agenda/ speakers/
│   │   └── committee/ venue/ register-cta/ footer/
│   ├── data/         # Static content: speakers, agenda, committee, conference info
│   ├── models/       # TypeScript interfaces for the data above
│   └── services/     # SpeakerSelectionService (links agenda ↔ speaker bios)
├── src/styles/       # Shared SCSS variables & mixins (brand palette)
└── public/assets/    # Speaker photos, Center for Finance logos, favicon
```

## Quick Start

```bash
npm install
npx ng serve      # http://localhost:4200
```

## Build

```bash
npx ng build      # production build, output in dist/mne-eu-conference
```

The production build sets `--base-href /landing-page/` (configured in
`angular.json`) so the compiled app resolves correctly when deployed at
`centerforfinance.me/landing-page/`.

## Content

All conference content (agenda, speaker bios, organizing committee) is sourced
from the materials supplied by Center for Finance and lives in
`src/app/data/*.data.ts` — update those files to change page content; no
component code needs to change for routine content edits (new speakers, agenda
changes, etc.).

The registration button links to the official Google Form:
https://forms.gle/pdVzHu64bUWMhnVf6

## Brand

- Gold `#a87013` / darker gold `#8a5c0f` for buttons and accents
- Beige `#fcf3e9` section backgrounds
- Black `#14110d` text and dark sections
- Fonts: Inter (body) + Playfair Display (headings), via Google Fonts

## Stack

Angular 20, standalone components, zoneless change detection, signals. No
router, no backend — all content is static and registration is handled by an
external Google Form.
