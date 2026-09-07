# SEO / indexability checklist

Origin: Sept 2026 Search Console cleanup (`/api/contact` crawlable, missing
canonicals, no sitemap/robots.txt). This file is the standing checklist so it
doesn't happen again — most of it is now also enforced automatically by
`npm run seo-check` (runs as a `postbuild` step in `client`, so `vercel build`
fails if these regress). Manual items are marked accordingly.

## Automated (client/scripts/seo-check.mjs, runs on every build)

- [x] `robots.txt` exists, allows `/`, disallows `/api/`, does **not** disallow `/assets/`
- [x] `sitemap.xml` exists and every `<loc>` is `https://www.thesimple.design/...`
- [x] `sitemap.xml` contains no `/api/`, `/src/`, or static-asset (js/css/woff/json) URLs
- [x] Every real page is present in `sitemap.xml` (nothing silently orphaned)
- [x] Every real page's built HTML has a **self-referencing** `<link rel="canonical">`
- [x] No page has an accidental `<meta name="robots" content="noindex">`

If you add a new public page: add it to `vercel.json` rewrites, `client/vite.config.js`
(`workRoutes` + it auto-picks up any `.html` in `src/pages/`), the `knownRoutes`
map in `client/scripts/seo-check.mjs`, **and** `client/public/sitemap.xml`. The
build now fails loudly if you forget the sitemap or canonical part.

## Manual — check after any routing/domain change

- [ ] **Canonical domain** is `https://www.thesimple.design/` everywhere: sitemap,
      canonical tags, internal links, Open Graph `og:url`, structured data, nav.
- [ ] `http://thesimple.design/`, `https://thesimple.design/`, `http://www.thesimple.design/`
      all resolve (301/308) to `https://www.thesimple.design/`. Verify with:
      `curl -I <url>` for each of the 4 host/scheme combinations.
- [ ] No new API/internal route is reachable via `<a href>`, `<form action>`, or
      any crawlable HTML — only via `fetch()`/programmatic calls.
- [ ] Every commercially important page is linked via a real `<a href="...">`
      from somewhere crawlable (not only a JS `onClick` handler) — no orphan pages.
- [ ] Run `npm run build --workspace client` locally before pushing to the
      production branch (this branch auto-deploys on push) — a failing
      `postbuild` seo-check means don't push yet.
- [ ] After deploying: spot-check `curl -I` on changed/new URLs for the right
      status (200 for real pages, 301/308 for moved ones, 404/410 for gone ones).
- [ ] After a major release: re-check Search Console → Page indexing a few
      days later; only click "Validate fix" once the live site is actually
      fixed, never pre-emptively.

## Deliberately excluded from indexing (do not try to "fix" these in GSC)

- `/api/*` — serverless endpoints, blocked in `robots.txt`, never linked.
- `/src/pages/*.html` — the raw file paths behind the clean URLs (`/products`,
  `/made`, etc.); the clean URL is canonical, the raw path is blocked in
  `robots.txt` and Google should keep dropping it from search results shown
  ("Excluded by robots.txt") as it re-crawls.
- `/demos/*` — embedded iframe previews, not standalone pages.
- The 3 non-canonical host/scheme variants of the homepage — they should
  redirect, not independently index.
