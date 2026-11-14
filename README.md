# PurpleMtn Premier Group — eXp recruiting page

Standalone recruiting landing page for **PurpleMtn Premier Group at eXp Realty**, intended for PurpleMtn.org use.

## Run locally

```bash
cd purplemtn-exp-recruiting
npm run dev
```

Opens a static server on **http://127.0.0.1:5173** (serves `public/`).

Or without npm scripts:

```bash
npx --yes serve public -l 5173
# or
python3 -m http.server 5173 --bind 127.0.0.1 --directory public
```

## Contents

- `public/index.html` — recruiting page
- `public/styles.css` — layout & motion
- `public/app.js` — scroll reveal
- `public/hero-mountains.jpg` — full-bleed hero visual

Research brief (Project store): `docs/exp-realty-recruiting-brief.md`
