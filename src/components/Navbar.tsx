import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { seoConfig } from "@/lib/config";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-secondary shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="font-heading text-xl font-black tracking-tight text-secondary-foreground">
          APEX<span className="text-primary">ROOFING</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-primary"
                  : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${seoConfig.phoneRaw}`} className="flex items-center gap-2 text-sm font-bold text-secondary-foreground">
            <Phone className="h-4 w-4 text-primary" />
            {seoConfig.phone}
          </a>
          <Link to="/contact">
            <Button variant="hero" size="default">Free Estimate</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-secondary-foreground lg:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-secondary-foreground/10 bg-secondary px-6 pb-6 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-secondary-foreground/80 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href={`tel:${seoConfig.phoneRaw}`} className="flex items-center gap-2 text-sm font-bold text-secondary-foreground">
              <Phone className="h-4 w-4 text-primary" />
              {seoConfig.phone}
            </a>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button variant="hero" className="w-full">Free Estimate</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
