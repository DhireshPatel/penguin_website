# Penguin World (Next.js + plain CSS + JavaScript)

A multi-section website about penguins with an interactive globe.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Structure
- `app/` – layout, page, global CSS (no Tailwind, no TypeScript)
- `components/` – Navbar, Hero, Details, Species, GlobeSection, Facts, Footer
- `data/penguins.js` – species list and colony/population data (edit freely)

Population numbers are rounded estimates from published surveys (IUCN, BirdLife, satellite counts) and change over time.
