import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-lg font-black tracking-tight">
            APEX<span className="text-primary">ROOFING</span>
          </h3>
          <p className="text-sm leading-relaxed text-secondary-foreground/70">
            Trusted roofing contractor serving the greater metro area since 2003. Licensed, insured, and committed to quality craftsmanship.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary-foreground/50">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["/", "/about", "/services", "/gallery", "/faq", "/contact"].map((to) => (
              <Link key={to} to={to} className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
                {to === "/" ? "Home" : to.slice(1).charAt(0).toUpperCase() + to.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary-foreground/50">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
            <a href="tel:5551234567" className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4 text-primary" /> (555) 123-4567
            </a>
            <a href="mailto:info@apexroofing.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4 text-primary" /> info@apexroofing.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> 123 Main St, Springfield, IL
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 py-6 text-center text-xs text-secondary-foreground/40">
        © {new Date().getFullYear()} Apex Roofing. All rights reserved. | License #RCC-123456
      </div>
    </footer>
  );
}
