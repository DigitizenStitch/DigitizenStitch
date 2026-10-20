// Fails the build if the inline script in index.html changes without updating
// the hash in netlify.toml's Content-Security-Policy (it would be blocked).
import fs from 'node:fs';
import crypto from 'node:crypto';
const html = fs.readFileSync('index.html', 'utf8');
const toml = fs.readFileSync('netlify.toml', 'utf8');
for (const [, body] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
  const hash = `sha256-${crypto.createHash('sha256').update(body).digest('base64')}`;
  if (!toml.includes(hash)) {
    console.error(`CSP hash missing for inline script. Add '${hash}' to script-src in netlify.toml.`);
    process.exit(1);
  }
}
console.log('CSP inline-script hashes OK');
