import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  about: [
    { label: "About Ngyungne", href: "/about" },
    { label: "Practices", href: "/practices" },
    { label: "Gallery", href: "/gallery" },
    { label: "Our Teachers", href: "/about" },
  ],
  event: [
    { label: "Event", href: "/event" },
    { label: "Schedule", href: "/event" },
    { label: "Register", href: "/contact" },
    { label: "Volunteer", href: "/volunteer" },
  ],
  support: [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Sponsor", href: "/donate" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dihev9qxc/image/upload/v1773302232/ngyungne-removebg-preview_jxhtp1.png"
                alt="Ngyungne Practice"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-body text-primary-foreground/80 text-sm mb-4">
              A sacred Buddhist purification practice dedicated to Avalokiteshvara, the Bodhisattva of Compassion.
            </p>
            <p className="font-body text-primary-foreground/60 text-sm">
              2nd International Ngyungne Retreat<br />December 28, 2025 - January 4, 2026<br />Kathmandu, Nepal
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}><Link to={link.href} className="font-sans text-sm text-primary-foreground/70 hover:text-secondary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary">Event</h4>
            <ul className="space-y-2">
              {footerLinks.event.map((link) => (
                <li key={link.label}><Link to={link.href} className="font-sans text-sm text-primary-foreground/70 hover:text-secondary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}><Link to={link.href} className="font-sans text-sm text-primary-foreground/70 hover:text-secondary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center py-8 border-t border-primary-foreground/10">
          <p className="font-heading text-2xl text-secondary mb-2">ॐ मणि पद्मे हूँ</p>
          <p className="font-body text-sm text-primary-foreground/60 italic">Om Mani Padme Hum — The Jewel in the Lotus</p>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-primary-foreground/60">© 2025 Ngyungne Retreat. Organized by BTMC Foundation. All rights reserved.</p>
            <p className="font-sans text-sm text-primary-foreground/60 flex items-center gap-1">Made with <Heart className="w-4 h-4 text-secondary" /> for the benefit of all beings</p>
          </div>
        </div>
      </div>
    </footer>
  );
}