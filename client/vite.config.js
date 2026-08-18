import { defineConfig } from 'vite';
import { readdirSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';

// Plain HTML/CSS/JS site — Vite is used only as a dev server (instant reload)
// and a static build tool. No framework, no components. If you ever want a
// small React/Tailwind widget on one section, it can be added later without
// touching anything here.

// Standalone case-study pages (e.g. orbit.html) live under src/pages/ and
// are plain self-contained HTML — Vite's dev server serves any file under
// root regardless of build config, but `vite build` only bundles files it's
// explicitly told about. Without this, src/pages/*.html would 404 in
// production even though they work fine in `npm run dev`. This picks up
// every .html file in that folder automatically, so a new case-study page
// (drop the file in, no config change) is included too.
const pagesDir = fileURLToPath(new URL('./src/pages', import.meta.url));
const pageInputs = Object.fromEntries(
  readdirSync(pagesDir)
    .filter((f) => f.endsWith('.html'))
    .map((f) => [`pages/${f.replace(/\.html$/, '')}`, fileURLToPath(new URL(`./src/pages/${f}`, import.meta.url))])
);

// Case-study links on the homepage point to short /work/1..5 URLs (kept clean
// on purpose — the real files live under src/pages). In production this
// mapping is done by vercel.json rewrites; this plugin does the same rewrite
// for `vite dev` / `vite preview` so local testing matches what's deployed.
const workRoutes = {
  '/work/1': '/src/pages/orbit.html',
  '/work/2': '/src/pages/verity.html',
  '/work/3': '/src/pages/cybersecurity.html',
  '/work/4': '/src/pages/market_intelligence.html',
  '/work/5': '/src/pages/neoma.html'
};
const workRoutesPlugin = {
  name: 'work-clean-urls',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url in workRoutes) req.url = workRoutes[req.url];
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url in workRoutes) req.url = workRoutes[req.url];
      next();
    });
  }
};

export default defineConfig({
  plugins: [workRoutesPlugin],
  server: {
    port: 5173,
    // Lets the page call fetch('/api/...') during `npm run dev` without CORS
    // hassle — requests are forwarded to the backend on port 3001.
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        ...pageInputs
      }
    }
  }
});
