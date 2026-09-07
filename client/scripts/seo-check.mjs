#!/usr/bin/env node
// SEO / indexability guardrail — run before every deploy (npm run seo-check).
// Catches exactly the class of issues that caused the Sept 2026 Search Console
// cleanup: an API route crawlable/indexable, pages missing a canonical tag,
// a sitemap listing something that isn't a real public 200 page, robots.txt
// missing/blocking the wrong things. Fails (non-zero exit) on any violation.
//
// This does NOT hit the network/production site — it checks the *build output*
// (client/dist) is internally consistent, so it works in CI before deploy.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';

const dist = fileURLToPath(new URL('../dist', import.meta.url));
const BASE = 'https://www.thesimple.design';
const errors = [];
const warnings = [];

function read(relPath) {
  const p = `${dist}/${relPath}`;
  if (!existsSync(p)) return null;
  return readFileSync(p, 'utf-8');
}

// 1. robots.txt must exist, allow /, and disallow /api/ — and must NOT
//    disallow anything Google needs to render the site (assets/CSS/JS).
const robots = read('robots.txt');
if (!robots) {
  errors.push('robots.txt is missing from the build output.');
} else {
  if (!/^Disallow:\s*\/api\/?/im.test(robots)) {
    errors.push('robots.txt does not Disallow /api/ — API routes are crawlable.');
  }
  if (!/^Sitemap:\s*https:\/\/www\.thesimple\.design\/sitemap\.xml/im.test(robots)) {
    errors.push('robots.txt does not point Sitemap: at the canonical https://www domain.');
  }
  if (/^Disallow:\s*\/assets\/?/im.test(robots)) {
    errors.push('robots.txt blocks /assets/ — Google needs CSS/JS/images to render pages.');
  }
  if (/^Disallow:\s*\/\s*$/im.test(robots)) {
    errors.push('robots.txt disallows the entire site ("Disallow: /").');
  }
}

// 2. sitemap.xml — every <loc> must be the canonical https://www host, must
//    not point at /api/, /src/, static assets, and (checked below) must
//    correspond to a real 200-returning file in the build output.
const sitemap = read('sitemap.xml');
const knownRoutes = new Map([
  ['/', 'index.html'],
  ['/products', 'src/pages/products.html'],
  ['/made', 'src/pages/made.html'],
  ['/journal', 'src/pages/journal.html'],
  ['/work/1', 'src/pages/orbit.html'],
  ['/work/2', 'src/pages/verity.html'],
  ['/work/3', 'src/pages/cybersecurity.html'],
  ['/work/4', 'src/pages/market_intelligence.html'],
  ['/work/5', 'src/pages/neoma.html'],
  ['/pingpong', 'src/pages/pingpong.html'],
  ['/aeryx', 'src/pages/aeryx.html'],
  ['/clinic', 'src/pages/clinic.html'],
]);

if (!sitemap) {
  errors.push('sitemap.xml is missing from the build output.');
} else {
  const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) errors.push('sitemap.xml has no <loc> entries.');
  for (const loc of locs) {
    if (!loc.startsWith(`${BASE}/`) && loc !== `${BASE}`) {
      errors.push(`sitemap.xml has a non-canonical-host URL: ${loc}`);
      continue;
    }
    const route = loc.replace(BASE, '') || '/';
    if (/\/api\//.test(route) || /\/src\//.test(route) || /\.(js|css|woff2?|json|xml|map)$/.test(route)) {
      errors.push(`sitemap.xml lists a non-page URL: ${loc}`);
      continue;
    }
    if (!knownRoutes.has(route)) {
      warnings.push(`sitemap.xml lists ${loc}, which isn't in this script's known-routes map — verify it's a real public page (update knownRoutes if it's legitimately new).`);
    }
  }
  // Every known real route should be IN the sitemap (catches "orphaned from
  // discovery" pages before they ship, not just after GSC flags them).
  for (const [route] of knownRoutes) {
    const loc = route === '/' ? `${BASE}/` : `${BASE}${route}`;
    if (!locs.includes(loc)) {
      errors.push(`A real page (${route}) is missing from sitemap.xml.`);
    }
  }
}

// 3. Every real HTML page must exist in dist (200-able) and carry a
//    self-referencing canonical tag pointing at its own clean URL.
for (const [route, file] of knownRoutes) {
  const html = read(file);
  if (!html) {
    errors.push(`Expected build output missing: ${file} (route ${route}).`);
    continue;
  }
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  const expected = route === '/' ? `${BASE}/` : `${BASE}${route}`;
  if (!canonicalMatch) {
    errors.push(`${file} (route ${route}) has no <link rel="canonical">.`);
  } else if (canonicalMatch[1].replace(/\/$/, '') !== expected.replace(/\/$/, '')) {
    errors.push(`${file} canonical is "${canonicalMatch[1]}", expected "${expected}".`);
  }
  if (/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
    errors.push(`${file} (route ${route}) has an accidental noindex meta tag.`);
  }
}

// 4. api/ must never appear as a static asset inside dist meant for serving
//    as a page (defensive — Vercel serves /api from the repo root, not dist,
//    but this guards against someone ever copying it into client/public).
if (existsSync(`${dist}/api`)) {
  errors.push('dist/api exists — API code should not ship as static output.');
}

// --- report ---
if (warnings.length) {
  console.warn(`\n⚠ ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.warn(`  - ${w}`));
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} SEO/indexability error(s):`);
  errors.forEach((e) => console.error(`  - ${e}`));
  console.error('\nFix these before deploying — see SEO_CHECKLIST.md.\n');
  process.exit(1);
}
console.log(`\n✓ seo-check passed (${knownRoutes.size} routes, sitemap + robots.txt + canonicals all consistent).\n`);
