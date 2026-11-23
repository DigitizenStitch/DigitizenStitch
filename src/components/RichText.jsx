import { Link } from 'react-router';

// Turns "[link text](/internal-path)" inside plain strings into internal links,
// and "[link text](https://...)" into external links that open in a new tab.
// Only site-relative paths and https:// URLs are linked; everything else stays plain text.
const LINK = /\[([^\]]+)\]\(((?:\/|https:\/\/)[^)\s]*)\)/g;
const HAS_LINK = /\]\((?:\/|https:\/\/)/;

export function plainText(text) {
  return typeof text === 'string' ? text.replace(LINK, '$1') : text;
}

export default function RichText({ text, className = 'font-semibold text-navy-800 underline underline-offset-4' }) {
  if (typeof text !== 'string' || !HAS_LINK.test(text)) return text;
  const parts = [];
  const re = new RegExp(LINK.source, 'g');
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      m[2].startsWith('https://') ? (
        <a key={m.index} href={m[2]} target="_blank" rel="noopener noreferrer" className={className}>
          {m[1]}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <Link key={m.index} to={m[2]} className={className}>{m[1]}</Link>
      ),
    );
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
