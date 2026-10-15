import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '../data/site';

export { FaWhatsapp as WhatsAppIcon };

export function SocialLinks({ className = '', iconClass = 'h-4 w-4' }) {
  const links = [
    { href: CONTACT.instagramUrl, label: "Digitize'NStitch on Instagram (opens in a new tab)", Icon: FaInstagram },
    { href: CONTACT.facebookUrl, label: "Digitize'NStitch on Facebook (opens in a new tab)", Icon: FaFacebookF },
    { href: CONTACT.whatsappUrl, label: 'Chat on WhatsApp (opens in a new tab)', Icon: FaWhatsapp },
  ];
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-navy-950"
          >
            <Icon className={iconClass} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
