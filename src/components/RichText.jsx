import { Link } from 'react-router';

// Turns "[link text](/internal-path)" inside plain strings into internal links.
// Only site-relative paths are linked; everything else stays plain text.
const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function plainText(text) {
  return typeof text === 'string' ? text.replace(LINK, '$1') : text;
}

export default function RichText({ text, className = 'font-semibold text-navy-800 underline underline-offset-4' }) {
  if (typeof text !== 'string' || !text.includes('](/')) return text;
  const parts = [];
  const re = new RegExp(LINK.source, 'g');
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<Link key={m.index} to={m[2]} className={className}>{m[1]}</Link>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
