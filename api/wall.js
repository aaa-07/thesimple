import { sendWallSubmissionEmail } from '../shared/wallEmail.js';

// Vercel serverless function — this is what actually runs in production.
// Mirrors api/contact.js's shape: filesystem routing turns this file into
// POST /api/wall. See api/contact.js for the fuller explanation of why this
// file exists alongside server/src/routes/wall.js.
//
// Note: Vercel's default request body limit (~4.5MB) applies here, and the
// attached image is base64-encoded (~33% larger than the original file), so
// very large uploads will be rejected before this handler even runs — the
// client enforces a smaller size cap up front to keep that error rare.
//
// Env vars (RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL / WALL_TO_EMAIL)
// must be set in the Vercel project's Settings → Environment Variables.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  const { title, type, story, imageBase64, imageName, imageType } = req.body || {};

  if (!title || !type) {
    return res.status(400).json({ ok: false, error: 'A title and a type are required.' });
  }

  try {
    await sendWallSubmissionEmail({ title, type, story, imageBase64, imageName, imageType });
    return res.status(201).json({ ok: true, message: 'Thanks — sent to the team for review.' });
  } catch (err) {
    console.error('[wall] failed to send email', err);
    return res.status(502).json({ ok: false, error: 'We could not send that just now — please try again shortly.' });
  }
}
