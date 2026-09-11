import express from 'express';
import cors from 'cors';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import contactRouter from './routes/contact.js';
import wallRouter from './routes/wall.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.join(__dirname, '../../client/dist');

export function createApp() {
  const app = express();

  app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
  // Default express.json() limit (100kb) is too small for the wall form's
  // base64-encoded image attachment — raised to match the client-side cap.
  app.use(express.json({ limit: '6mb' }));

  app.get('/api/health', (req, res) => {
    res.json({ ok: true, time: new Date().toISOString() });
  });

  // Add more feature routers here the same way, e.g.:
  // app.use('/api/lab', labRouter);
  app.use('/api/contact', contactRouter);
  app.use('/api/wall', wallRouter);

  // In production, `npm run build -w client` outputs client/dist. If it
  // exists, serve it directly so one Node process can host the whole site.
  if (fs.existsSync(clientDist)) {
    app.use(express.static(clientDist));
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api')) return next();
      res.sendFile(path.join(clientDist, 'index.html'));
    });
  }

  return app;
}
