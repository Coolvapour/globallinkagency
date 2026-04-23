import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-12 w-12 rounded-md" />
              <div>
                <div className="font-display text-xl">Horizon Link Agency</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold">
                  Migration & Education
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md font-display text-lg italic text-white/80">
              "By Grace, From Sacrifice to Success."
            </p>
            <p className="mt-2 text-sm text-gold">God First. Legacy Always.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="tel:+254722496897" className="hover:text-gold">+254 722 496 897</a>
                <span className="ml-2 text-xs text-gold">(Call / WhatsApp)</span>
              </li>
              <li>
                <a href="tel:+254728444030" className="hover:text-gold">0728 444 030</a>
                <span className="ml-2 text-xs text-gold">(Secondary line)</span>
              </li>
              <li>
                <a href="mailto:info@horizonlinkagency.com" className="hover:text-gold">info@horizonlinkagency.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Horizon Link Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
