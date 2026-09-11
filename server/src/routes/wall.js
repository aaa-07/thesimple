import { Router } from 'express';
import { sendWallSubmissionEmail } from '../../../shared/wallEmail.js';

const router = Router();

// POST /api/wall — backs the "Add something to the wall" form on /made.
// Called via fetch() from client/src/pages/made.html's #contributeForm handler.
//
// This is the local-dev / persistent-server path (npm run dev, npm start).
// The production-on-Vercel path is api/wall.js at the repo root, which
// shares the same send logic via shared/wallEmail.js.
router.post('/', async (req, res) => {
  const { title, type, story, imageBase64, imageName, imageType } = req.body || {};

  if (!title || !type) {
    return res.status(400).json({ ok: false, error: 'A title and a type are required.' });
  }

  try {
    await sendWallSubmissionEmail({ title, type, story, imageBase64, imageName, imageType });
    res.status(201).json({ ok: true, message: 'Thanks — sent to the team for review.' });
  } catch (err) {
    console.error('[wall] failed to send email', err);
    res.status(502).json({ ok: false, error: 'We could not send that just now — please try again shortly.' });
  }
});

export default router;
