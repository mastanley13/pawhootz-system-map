# PawHootz System Map

Static Vite app for the PawHootz system architecture dossier.

## Content model

- `content/site-data.mjs`: authored sections, comparison matrix, evidence ledger, and page structure
- `content/live-ghl-summary.json`: generated live GHL snapshot used by the page
- `content/evidence-captures.json`: generated authenticated screenshot metadata used by the gallery
- `public/evidence/`: screenshot evidence captures used by the gallery layer
- `lib/render.mjs`: static HTML renderer
- `scripts/generate-site.mjs`: rebuilds `index.html` from the content model
- `scripts/pull-ghl-summary.mjs`: refreshes the live GHL snapshot from `.env.local`
- `scripts/capture-auth-evidence.mjs`: captures authenticated client and staff portal screenshots into `public/evidence/`

## Local development

```powershell
npm install
npm run dev
```

`npm run dev` regenerates `index.html` before starting Vite.

## Refresh live GHL data

```powershell
npm run refresh:ghl
npm run generate
```

The refresh script reads `GHL_LOCATION_ID` and `GHL_API_TOKEN` from `.env.local`.

## Refresh screenshot evidence

```powershell
npm run capture:evidence
npm run generate
```

The capture script reads portal credentials and URLs from `.env.local`, launches local portal servers when needed, and writes the latest authenticated screenshot metadata to `content/evidence-captures.json`.

## Production build

```powershell
npm run build
```

The production output is written to `dist/`.

## Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
