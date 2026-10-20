import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { MessageCircle, Send, X } from 'lucide-react';
import { ALL_FAQS } from '../data/faq';
import { CONTACT } from '../data/site';
import { WhatsAppIcon } from './Icons';

// A free, rule-based FAQ assistant. It only answers from data/faq.js and
// hands anything else over to a human via WhatsApp or email.
const SUGGESTIONS = ['Prices', 'File formats', 'Rush orders', 'Revisions', 'Physical patches', 'How to order'];
const STOP = new Set(['the', 'a', 'an', 'is', 'are', 'do', 'does', 'you', 'your', 'i', 'my', 'me', 'to', 'for', 'of', 'and', 'or', 'can', 'what', 'which', 'how', 'in', 'on', 'it', 'we', 'have', 'with', 'be', 'please', 'hi', 'hello']);

const tokenize = (s) =>
  s.toLowerCase().replace(/[^a-z0-9$\s-]/g, ' ').split(/\s+/)
    .filter((w) => w && !STOP.has(w))
    .flatMap((w) => (w.length > 4 && w.endsWith('s') ? [w, w.slice(0, -1)] : [w]));

function findAnswer(question) {
  const q = question.toLowerCase();
  const words = tokenize(question);
  let best = null;
  let bestScore = 0;
  for (const item of ALL_FAQS) {
    let score = 0;
    for (const k of item.keywords) {
      if (k.includes(' ') ? q.includes(k) : words.includes(k)) score += 2;
    }
    if (score > bestScore) { bestScore = score; best = item; }
  }
  return bestScore >= 2 ? best : null;
}

const GREETING = {
  from: 'bot',
  text: "Hi! I'm the Digitize'NStitch Assistant, an automated helper for common questions about our services, prices, formats and policies. What would you like to know?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); buttonRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const ask = (text) => {
    const question = text.trim();
    if (!question) return;
    const hit = findAnswer(question);
    setMessages((m) => [
      ...m,
      { from: 'user', text: question },
      hit ? { from: 'bot', text: hit.a } : { from: 'bot', fallback: true },
    ]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      {open && (
        <section
          id="chat-panel"
          role="dialog"
          aria-label="Digitize'NStitch Assistant"
          className="anim-fade-scale absolute bottom-[4.5rem] right-0 flex h-[min(34rem,calc(100dvh-7rem))] w-[calc(100vw-2rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift"
        >
          <header className="on-dark flex items-center gap-3 bg-navy-950 px-5 py-4 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 font-display text-lg">D</span>
            <div className="min-w-0 flex-1">
              <h2 className="font-sans text-[15px] font-semibold text-white">Digitize&rsquo;NStitch Assistant</h2>
              <p className="text-xs text-white/60">Automated FAQ helper · not a live agent</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/10">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-ivory px-4 py-5" aria-live="polite">
            {messages.map((m, i) =>
              m.from === 'user' ? (
                <p key={i} className="anim-fade ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-navy-900 px-4 py-2.5 text-sm text-white">{m.text}</p>
              ) : (
                <div key={i} className="anim-fade max-w-[90%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-soft">
                  {m.fallback ? (
                    <>
                      <p>I&rsquo;m not able to answer that confidently. Please contact our team directly and we&rsquo;ll help you:</p>
                      <div className="mt-3 flex flex-col gap-2">
                        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#187a41]">
                          <WhatsAppIcon className="h-4 w-4" aria-hidden="true" /> WhatsApp {CONTACT.phoneDisplay}
                        </a>
                        <a href={`mailto:${CONTACT.email}`} className="font-semibold text-navy-800">{CONTACT.email}</a>
                      </div>
                    </>
                  ) : (
                    <p>{m.text}</p>
                  )}
                  {i > 0 && !m.fallback && (
                    <Link to="/quote" onClick={() => setOpen(false)} className="mt-2 inline-block text-xs font-semibold text-navy-800 underline underline-offset-2">
                      Get a Quote →
                    </Link>
                  )}
                </div>
              ),
            )}
          </div>

          <div className="border-t border-slate-100 bg-white px-3 pb-3 pt-2">
            <ul className="flex gap-1.5 overflow-x-auto pb-2" aria-label="Suggested questions">
              {SUGGESTIONS.map((s) => (
                <li key={s}>
                  <button type="button" onClick={() => ask(s)} className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-navy-900 transition hover:border-navy-900 hover:bg-navy-50">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
            <form onSubmit={(e) => { e.preventDefault(); ask(input); }} className="flex items-center gap-2">
              <label htmlFor="chat-input" className="sr-only">Type your question</label>
              <input
                ref={inputRef}
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about prices, formats…"
                maxLength={200}
                autoComplete="off"
                className="field !rounded-full !py-2.5 text-sm"
              />
              <button type="submit" aria-label="Send" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-900 text-white transition hover:bg-navy-950 active:scale-95">
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-white shadow-lift transition duration-300 hover:-translate-y-0.5 hover:bg-navy-950 active:scale-95"
      >
        {!open && <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-navy-700/40 [animation-duration:3s] [animation-iteration-count:3]" />}
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageCircle className="h-6 w-6" aria-hidden="true" />}
      </button>
    </div>
  );
}
