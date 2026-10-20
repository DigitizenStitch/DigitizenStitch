// Runs automatically on Netlify after every verified Netlify Forms submission
// (the special "submission-created" event). Emails the complete quote request,
// with the uploaded artwork attached, to the business inbox via Gmail SMTP.
//
// Required Netlify environment variables (Site configuration → Environment variables):
//   GMAIL_USER          the Gmail address that sends the email, e.g. digitizenstitch@gmail.com
//   GMAIL_APP_PASSWORD  a Gmail "App password" for that account (not the normal password)
// Optional:
//   NOTIFY_TO           where to send the email (defaults to GMAIL_USER)
import nodemailer from 'nodemailer';

const FIELDS = [
  ['name', 'Name'],
  ['email', 'Email'],
  ['service', 'Service type'],
  ['package', 'Size package'],
  ['design_size', 'Design size'],
  ['file_format', 'Required file format'],
  ['file_link', 'Large-file link'],
  ['message', 'Additional instructions'],
];
// Netlify adds these to every submission; they are not client answers.
const SKIP = new Set(['form-name', 'bot-field', 'ip', 'user_agent', 'referrer', 'artwork']);
const MAX_ATTACHMENT = 20 * 1024 * 1024; // stay under Gmail's 25 MB message limit

const esc = (v) => String(v ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

/** Netlify gives an uploaded file either as a URL string or as { url, filename, type, size }. */
export function fileInfo(value) {
  if (!value) return null;
  if (typeof value === 'string') return value.startsWith('http') ? { url: value, filename: decodeURIComponent(value.split('?')[0].split('/').pop() || 'artwork') } : null;
  if (typeof value === 'object' && value.url) return { url: value.url, filename: value.filename || 'artwork', type: value.type, size: value.size };
  return null;
}

export function buildEmail(data) {
  const rows = [];
  for (const [key, label] of FIELDS) rows.push([label, data[key]]);
  for (const [key, value] of Object.entries(data)) {
    if (!SKIP.has(key) && !FIELDS.some(([k]) => k === key) && typeof value !== 'object') rows.push([key, value]);
  }
  const file = fileInfo(data.artwork);
  const fileLine = file ? `${file.filename} (attached; backup link: ${file.url})` : 'No file uploaded';

  const text = [
    "New quote request from the Digitize'NStitch website",
    '',
    ...rows.map(([l, v]) => `${l}: ${v || '-'}`),
    `Design upload: ${fileLine}`,
    '',
    'Reply to this email to answer the client directly.',
  ].join('\n');

  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#0f172a">
  <h2 style="margin:0 0 12px;color:#172554">New quote request</h2>
  <table cellpadding="8" style="border-collapse:collapse;max-width:640px">
    ${rows.map(([l, v]) => `<tr><td style="border:1px solid #e2e8f0;background:#f8fafc;font-weight:bold;white-space:nowrap;vertical-align:top">${esc(l)}</td><td style="border:1px solid #e2e8f0;white-space:pre-wrap">${esc(v) || '&ndash;'}</td></tr>`).join('\n    ')}
    <tr><td style="border:1px solid #e2e8f0;background:#f8fafc;font-weight:bold">Design upload</td><td style="border:1px solid #e2e8f0">${file ? `${esc(file.filename)} (attached)<br><a href="${esc(file.url)}">Backup download link</a>` : 'No file uploaded'}</td></tr>
  </table>
  <p style="color:#64748b">Reply to this email to answer the client directly.</p>
</div>`;

  return { text, html, file };
}

async function download(file) {
  try {
    const res = await fetch(file.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length > MAX_ATTACHMENT) return { error: 'File is too large to attach; use the backup link.' };
    return { attachment: { filename: file.filename, content: buf, contentType: file.type || res.headers.get('content-type') || undefined } };
  } catch (err) {
    return { error: `Could not attach the file (${err.message}); use the backup link.` };
  }
}

export async function sendSubmission(payload, transport) {
  const data = payload?.data ?? {};
  const { text, html, file } = buildEmail(data);
  const user = process.env.GMAIL_USER;
  const attachments = [];
  let note = '';
  if (file) {
    const r = await download(file);
    if (r.attachment) attachments.push(r.attachment);
    else note = `\n\nNote: ${r.error}`;
  }
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '') ? `${data.name || ''} <${data.email}>` : undefined;

  return transport.sendMail({
    from: `"Digitize'NStitch Website" <${user}>`,
    to: process.env.NOTIFY_TO || user,
    replyTo,
    subject: `New quote request: ${data.name || 'Website client'}${data.service ? ` - ${data.service}` : ''}`,
    text: text + note,
    html: html + (note ? `<p style="color:#b91c1c">${esc(note.trim())}</p>` : ''),
    attachments,
  });
}

export const handler = async (event) => {
  const payload = JSON.parse(event.body || '{}').payload;
  if (payload?.form_name && payload.form_name !== 'contact') return { statusCode: 200, body: 'ignored' };
  console.log('submission-created received', { form: payload?.form_name, id: payload?.id, hasUser: Boolean(process.env.GMAIL_USER), hasPassword: Boolean(process.env.GMAIL_APP_PASSWORD) });
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('GMAIL_USER / GMAIL_APP_PASSWORD are not set; email not sent.');
    return { statusCode: 500, body: 'Email not configured' };
  }
  const transport = nodemailer.createTransport({
    service: 'gmail',
    // Google shows app passwords as "abcd efgh ijkl mnop"; the spaces are not part of it.
    auth: { user: process.env.GMAIL_USER.trim(), pass: process.env.GMAIL_APP_PASSWORD.replace(/\s+/g, '') },
  });
  try {
    const info = await sendSubmission(payload, transport);
    console.log('Quote email sent', info.messageId);
    return { statusCode: 200, body: 'sent' };
  } catch (err) {
    console.error('Quote email failed:', err.code || '', err.responseCode || '', err.message);
    return { statusCode: 500, body: 'send failed' };
  }
};
