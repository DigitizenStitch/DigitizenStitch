import { Link } from 'react-router';
import { PageHeader, Reveal } from '../components/ui';
import { CONTACT } from '../data/site';

const UPDATED = 'October 2026';

function LegalLayout({ crumb, title, intro, children }) {
  return (
    <>
      <PageHeader crumb={crumb} title={title} intro={intro} />
      <section className="section !pt-14">
        <Reveal className="container-x">
          <div className="prose-legal">
            <p className="text-sm text-slate-500">Last updated: {UPDATED}</p>
            {children}
            <h2>Contact us</h2>
            <p>
              Questions about this page? Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or message us on{' '}
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp ({CONTACT.phoneDisplay})</a>.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <LegalLayout crumb="Privacy Policy" title="Privacy Policy" intro="How we handle the information you share with us.">
      <h2>Information we collect</h2>
      <p>We only collect information you choose to send us:</p>
      <ul>
        <li>Details entered in our quote form: your name, email address, service type, design size, file format and instructions.</li>
        <li>Artwork files you upload or send to us.</li>
        <li>Messages you send by email or WhatsApp.</li>
      </ul>
      <h2>How we use it</h2>
      <p>We use this information to prepare your quote, complete your order, deliver your files by email, handle revisions and reply to your questions. We do not sell your information.</p>
      <h2>Your artwork</h2>
      <p>Artwork you send is used only to complete your request.</p>
      <h2>Third-party services</h2>
      <ul>
        <li>Form submissions are processed by our website host, Netlify.</li>
        <li>If you accept cookies, Google Analytics collects anonymous usage data (pages visited, device, country) to help us improve the site.</li>
        <li>Payments are handled by PayPal. We do not receive or store your card details.</li>
        <li>Email and WhatsApp conversations are subject to the privacy policies of those services.</li>
      </ul>
      <h2>Cookies</h2>
      <p>We do not use advertising cookies. With your consent, we use Google Analytics cookies to understand how visitors use the site. If you decline, no analytics cookies are set. You can change your choice any time with the button below.</p>
      <p><button type="button" className="font-semibold underline" onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}>Cookie settings</button></p>
      <h2>Your choices</h2>
      <p>You can ask us to access, correct or delete the information you have sent us by contacting us at the details below.</p>
    </LegalLayout>
  );
}

export function Terms() {
  return (
    <LegalLayout crumb="Terms of Service" title="Terms of Service" intro="The terms that apply when you use our website and order our services.">
      <h2>Services</h2>
      <p>Digitize&rsquo;NStitch provides embroidery digitizing, vector art and custom physical patches. Service details are described on our service pages.</p>
      <h2>Quotes and pricing</h2>
      <p>Embroidery digitizing is priced by design size: under 5 inches $4.99–$9.99, 5–7 inches $9.99–$14.99, and over 7 inches on quote. The final price within each range depends on design complexity and is confirmed before work begins. Vector art starts at $9.99. Custom patches are priced on quote.</p>
      <h2>Payment</h2>
      <p>Payment is accepted through PayPal only.</p>
      <h2>Turnaround and delivery</h2>
      <p>Embroidery digitizing turnaround is 12–24 hours for designs under 5 inches and 5–7 inches, and 24–48 hours for designs over 7 inches. Timing for vector art and custom patches is confirmed with your quote. Completed digital files are delivered by email.</p>
      <h2>File formats</h2>
      <p>Embroidery files are delivered in the machine format you request, such as DST, PES, EMB, EXP or JEF. Vector art is delivered as AI, EPS, PDF, SVG or PNG. Vector files are artwork files, not embroidery machine files.</p>
      <h2>Revisions and refunds</h2>
      <p>Edits and revisions are free. Refund requests are handled case by case. See our <Link to="/refund-revision-policy">Refund &amp; Revision Policy</Link>.</p>
      <h2>Your artwork</h2>
      <p>By sending artwork, you confirm that you have the right to use it and to have it digitized or reproduced.</p>
    </LegalLayout>
  );
}

export function RefundPolicy() {
  return (
    <LegalLayout crumb="Refund & Revision Policy" title="Refund & Revision Policy" intro="Free revisions, and refund requests reviewed case by case.">
      <h2>Revisions</h2>
      <p>Revisions are free. If your file needs an adjustment, reply to your delivery email or contact us, and describe what you would like changed. Sharing a photo of a test sew-out helps us fix embroidery issues quickly.</p>
      <h2>Refunds</h2>
      <p>Refund requests are handled case by case. Please contact us with your order details and the reason for your request, and we will review your situation and reply.</p>
      <h2>Before you order</h2>
      <p>To avoid problems, tell us the design size, placement, fabric and file format you need when you request your quote.</p>
    </LegalLayout>
  );
}
