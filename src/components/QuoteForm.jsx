import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Loader2, Paperclip, X } from 'lucide-react';
import { CONTACT, FORMAT_OPTIONS, PACKAGES, SERVICE_OPTIONS, packageById, packageLabel } from '../data/site';

// Submitted to Netlify Forms. The form name "contact" is kept so existing
// submission notifications keep working. A matching static copy of this form
// lives in index.html so Netlify detects every field at deploy time.
export const FORM_NAME = 'contact';
const MAX_MB = 8; // Netlify Forms hard limit per submission; larger files go via the link field
const ACCEPT = '.jpg,.jpeg,.png,.webp,.gif,.pdf,.svg,.ai,.eps';
const ALLOWED_EXT = ACCEPT.split(',').map((e) => e.slice(1));

const EMPTY = { name: '', email: '', service: '', package: '', design_size: '', file_format: '', file_link: '', message: '' };

function validate(values, file) {
  const e = {};
  if (!values.name.trim()) e.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) e.email = 'Please enter a valid email address.';
  if (!values.service) e.service = 'Please choose a service.';
  if (values.file_link.trim() && !/^https?:\/\/\S+\.\S+/i.test(values.file_link.trim())) e.file_link = 'Please paste a full link starting with https://';
  if (file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) e.artwork = 'Please upload a JPG, PNG, WEBP, GIF, PDF, SVG, AI or EPS file.';
    else if (file.size > MAX_MB * 1024 * 1024) e.artwork = `This file is larger than ${MAX_MB} MB. Remove it and paste a Google Drive, Dropbox or WeTransfer link in the field below instead.`;
  }
  return e;
}

export function NextSteps({ dark = false }) {
  const steps = [
    ['Submit this form', 'Send your artwork and details. No payment is taken on the website.'],
    ['We contact you by email', 'Our team replies to confirm your order, the exact price and PayPal payment.'],
    ['Files delivered by email', 'Once paid, your completed files are sent to your email address.'],
  ];
  return (
    <div className={`rounded-2xl p-5 ${dark ? 'bg-white/5' : 'bg-paper'}`}>
      <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${dark ? 'text-thread' : 'text-slate-500'}`}>What happens next</p>
      <ol className="mt-4 space-y-3">
        {steps.map(([h, t], i) => (
          <li key={h} className="flex gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-thread text-xs font-bold text-ink">{i + 1}</span>
            <span className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}><b className={dark ? 'text-white' : 'text-ink'}>{h}.</b> {t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function QuoteForm({ defaultService = '' }) {
  const [values, setValues] = useState({ ...EMPTY, service: defaultService });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const fileRef = useRef(null);
  const formRef = useRef(null);
  const [params] = useSearchParams();

  // Preselect the package chosen on a pricing card (/quote?package=under-5).
  useEffect(() => {
    const pkg = packageById(params.get('package'));
    if (pkg) setValues((v) => ({ ...v, service: 'Embroidery Digitizing', package: packageLabel(pkg) }));
  }, [params]);

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const pickFile = (e) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    setErrors((er) => ({ ...er, artwork: f ? validate(values, f).artwork : undefined }));
  };

  const clearFile = () => {
    setFile(null);
    if (fileRef.current) fileRef.current.value = '';
    setErrors((er) => ({ ...er, artwork: undefined }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form['bot-field'].value) return; // honeypot
    const found = validate(values, file);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      form.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const data = new FormData(form); // multipart, required for the file upload
      const res = await fetch('/', { method: 'POST', body: data });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setStatus('success');
      setValues({ ...EMPTY, service: defaultService });
      clearFile();
      formRef.current?.scrollIntoView({ block: 'center' });
    } catch (err) {
      console.error('Quote form submission failed', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="card anim-fade-scale flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-navy-800" aria-hidden="true" />
        <h3 className="mt-5 text-2xl">Thank you, your request has been sent.</h3>
        <p className="mt-3 max-w-md text-slate-600">
          Our team will review your design and contact you by email at the address you gave to confirm your order, price and PayPal payment. Your completed files will also be delivered by email. For anything urgent, message us on{' '}
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-800 underline underline-offset-4">WhatsApp</a>.
        </p>
        <button type="button" className="btn-outline mt-8" onClick={() => setStatus('idle')}>Send another request</button>
      </div>
    );
  }

  const fieldProps = (name) => ({
    id: `q-${name}`,
    name,
    value: values[name],
    onChange: update,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `q-${name}-error` : undefined,
    className: 'field',
  });
  const Err = ({ name }) => (errors[name] ? <p id={`q-${name}-error`} className="field-error">{errors[name]}</p> : null);

  return (
    <form
      ref={formRef}
      name={FORM_NAME}
      method="POST"
      action="/quote"
      encType="multipart/form-data"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
      onSubmit={submit}
      className="card space-y-5 p-6 sm:p-9"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="field-label">Name <span aria-hidden="true" className="text-red-600">*</span></label>
          <input type="text" autoComplete="name" required {...fieldProps('name')} />
          <Err name="name" />
        </div>
        <div>
          <label htmlFor="q-email" className="field-label">Email <span aria-hidden="true" className="text-red-600">*</span></label>
          <input type="email" autoComplete="email" inputMode="email" required {...fieldProps('email')} />
          <Err name="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-service" className="field-label">Service type <span aria-hidden="true" className="text-red-600">*</span></label>
          <select required {...fieldProps('service')}>
            <option value="">Choose a service</option>
            {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <Err name="service" />
        </div>
        <div>
          <label htmlFor="q-file_format" className="field-label">Required file format</label>
          <select {...fieldProps('file_format')}>
            <option value="">Choose a format</option>
            {FORMAT_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {values.service === 'Embroidery Digitizing' && (
        <div className="anim-fade">
          <label htmlFor="q-package" className="field-label">Size package</label>
          <select {...fieldProps('package')}>
            <option value="">Not sure / help me choose</option>
            {PACKAGES.map((p) => <option key={p.id}>{packageLabel(p)}</option>)}
          </select>
          {packageById(PACKAGES.find((p) => packageLabel(p) === values.package)?.id) && (
            <p className="mt-1.5 text-sm text-slate-500">
              Turnaround: {PACKAGES.find((p) => packageLabel(p) === values.package).turnaround}. The exact price within the range is confirmed before work begins.
            </p>
          )}
        </div>
      )}

      <div>
        <label htmlFor="q-design_size" className="field-label">Design size</label>
        <input type="text" placeholder='e.g. 4" wide left chest, or 3.5" x 3" patch' {...fieldProps('design_size')} />
      </div>

      <div>
        <span id="q-artwork-label" className="field-label">Design upload</span>
        <label
          htmlFor="q-artwork"
          className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-7 text-center transition hover:border-navy-700 hover:bg-navy-50/50 ${
            errors.artwork ? 'border-red-400' : 'border-slate-300'
          }`}
        >
          <Paperclip className="h-6 w-6 text-navy-800" aria-hidden="true" />
          <span className="text-sm font-semibold text-navy-950">{file ? 'Replace file' : 'Choose your artwork file'}</span>
          <span className="text-xs text-slate-500">JPG, PNG, PDF, SVG, AI or EPS · up to {MAX_MB} MB</span>
        </label>
        <input
          ref={fileRef}
          id="q-artwork"
          type="file"
          name="artwork"
          accept={ACCEPT}
          onChange={pickFile}
          className="sr-only"
          aria-labelledby="q-artwork-label"
          aria-invalid={errors.artwork ? 'true' : undefined}
          aria-describedby={errors.artwork ? 'q-artwork-error' : undefined}
        />
        {file && (
          <p className="mt-2 flex items-center justify-between gap-3 rounded-lg bg-navy-50 px-3 py-2 text-sm text-navy-950">
            <span className="truncate">{file.name} · {(file.size / 1024 / 1024).toFixed(1)} MB</span>
            <button type="button" onClick={clearFile} aria-label="Remove file" className="grid h-7 w-7 place-items-center rounded-full hover:bg-white">
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </p>
        )}
        <Err name="artwork" />
      </div>

      <div>
        <label htmlFor="q-file_link" className="field-label">Larger file? Paste a link <span className="font-normal text-slate-500">(optional)</span></label>
        <input type="url" inputMode="url" placeholder="Google Drive, Dropbox or WeTransfer link" {...fieldProps('file_link')} />
        <Err name="file_link" />
        <p className="mt-1.5 text-xs text-slate-500">For files over {MAX_MB} MB, upload them to any file-sharing service and paste the link here. Please make sure the link is set to &ldquo;anyone with the link can view&rdquo;.</p>
      </div>

      <div>
        <label htmlFor="q-message" className="field-label">Additional instructions</label>
        <textarea rows={4} placeholder="Garment or fabric, colours, placement, quantity, deadline…" {...fieldProps('message')} />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          Sorry, your request could not be sent. Please try again, or email your artwork to{' '}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">{CONTACT.email}</a>.
        </p>
      )}

      <NextSteps />

      <button type="submit" disabled={status === 'sending'} className="btn-gold w-full !py-4 text-base">
        {status === 'sending' ? (<><Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…</>) : values.package.startsWith('Over') || !values.package ? 'Request my quote' : 'Send my order request'}
      </button>
      <p className="text-center text-xs text-slate-500">
        We use your details only to reply to your request. See our <a href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</a>.
      </p>
    </form>
  );
}
