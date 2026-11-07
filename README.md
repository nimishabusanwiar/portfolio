# Nimisha Busaniwar: portfolio

Bilingual (English / French) portfolio site. React 19, Vite, TypeScript, Tailwind CSS v4, Motion. Every page is prerendered to static HTML at build time, so LinkedIn previews and search engines read the full content without running JavaScript.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173 (French: /fr/)
npm run build      # type-check, client build, SSR build, prerender into dist/
npm run preview    # serve dist/ at http://localhost:4173
```

## Edit content

All text lives in two files:

- `src/content/en.ts`
- `src/content/fr.ts`

Change both together; they hold the same facts. Numbers must come from the CV or the verified project numbers, nothing else.

A case study's "What I would change" section is hidden until you add a `limitations` string to it.

CVs served for download: `public/cv/Nimisha_Busaniwar_CV_EN.pdf` and `public/cv/Nimisha_Busaniwar_CV_FR.pdf`. Replace the files, keep the names.

After the first deploy (or when a custom domain is set), update `SITE_URL` in `src/content/en.ts`. Canonical URLs, hreflang, the sitemap and Open Graph images use it.

## Structure

```
src/
  content/       en.ts, fr.ts, types.ts   (all copy)
  pages/         Home.tsx, CaseStudy.tsx
  components/    Header, Footer, Reveal (scroll animation), SectionHead
  routes.ts      /, /fr/, /work/<slug>/, /fr/work/<slug>/
  head.ts        <title>, meta description, canonical, hreflang, Open Graph, JSON-LD
  entry-server.tsx, main.tsx
scripts/prerender.mjs   writes dist/<route>/index.html, sitemap.xml, robots.txt
public/                 favicon, Open Graph images, CVs
```

## Deploy

Import the GitHub repo in Vercel. `vercel.json` sets the build command and output directory; no other settings are needed.
