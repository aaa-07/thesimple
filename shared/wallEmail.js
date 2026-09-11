import { Resend } from 'resend';
import { escapeHtml } from './contactEmail.js';

// Shared by both deployment shapes:
//  - server/src/routes/wall.js   → the persistent Express server (local dev, npm start)
//  - api/wall.js                 → the Vercel serverless function (production on Vercel)
// Backs the "Add something to the wall" form on /made (client/src/pages/made.html).
//
// Same log-only-if-unconfigured behaviour as shared/contactEmail.js: a missing
// RESEND_API_KEY is not treated as a failure so the form still "works" without
// Resend set up, it just won't deliver anything.

export async function sendWallSubmissionEmail({ title, type, story, imageBase64, imageName, imageType }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn('[wall] RESEND_API_KEY not set — submission logged but no email was sent.');
    return { sent: false };
  }

  const resend = new Resend(apiKey);

  // imageBase64 is the raw base64 payload (no "data:image/...;base64," prefix)
  // — the client strips that before sending.
  const attachments = imageBase64
    ? [{ filename: imageName || 'wall-submission.jpg', content: imageBase64 }]
    : undefined;

  const { error } = await resend.emails.send({
    from: `thesimple.design <${process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'}>`,
    to: process.env.WALL_TO_EMAIL || process.env.CONTACT_TO_EMAIL,
    subject: `New "Made" wall submission — ${title}`,
    html: `
      <h2>New wall submission</h2>
      <p><strong>Title:</strong> ${escapeHtml(title)}</p>
      <p><strong>Type:</strong> ${escapeHtml(type || 'Not specified')}</p>
      <p><strong>Story:</strong></p>
      <p>${escapeHtml(story || 'Not specified').replace(/\n/g, '<br/>')}</p>
      ${imageBase64 ? `<p><em>Image attached${imageType ? ` (${escapeHtml(imageType)})` : ''}.</em></p>` : ''}
    `,
    attachments,
  });

  // resend.emails.send() resolves (doesn't throw) on API-level failures — see
  // the same note in shared/contactEmail.js. Without this check those
  // failures were silently reported to the client as success.
  if (error) {
    console.error('[wall] Resend rejected the email', error);
    throw new Error('Resend rejected the email');
  }

  return { sent: true };
}
