import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const serviceOptions = ["Roof Repair", "Roof Replacement", "New Installation", "Storm Damage", "Inspection", "Commercial Roofing", "Other"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-secondary-foreground lg:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/70">
            Ready for your free estimate? Fill out the form or give us a call.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-5">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3" animation="slide-in-left">
            {submitted ? (
              <div className="flex min-h-[400px] items-center justify-center rounded-lg border bg-card p-8 text-center shadow-sm">
                <div>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h2 className="text-2xl font-black text-card-foreground">Thank You!</h2>
                  <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours to schedule your free estimate.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border bg-card p-8 shadow-sm">
                <h2 className="text-xl font-black text-card-foreground">Request a Free Estimate</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-card-foreground">Name *</label>
                    <input required type="text" className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-card-foreground">Phone *</label>
                    <input required type="tel" className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-card-foreground">Email</label>
                  <input type="email" className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-card-foreground">Address</label>
                  <input type="text" className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="123 Main St, Springfield, IL" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-card-foreground">Service Needed</label>
                  <select className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary">
                    <option value="">Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-card-foreground">Message</label>
                  <textarea rows={4} className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Tell us about your project..." />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">Request Free Estimate</Button>
              </form>
            )}
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal className="lg:col-span-2" animation="slide-in-right">
            <div className="space-y-6">
              <h2 className="text-xl font-black text-foreground">Get In Touch</h2>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "(555) 123-4567", href: "tel:5551234567" },
                  { icon: Mail, label: "info@apexroofing.com", href: "mailto:info@apexroofing.com" },
                  { icon: MapPin, label: "123 Main St, Springfield, IL 62701" },
                  { icon: Clock, label: "Mon–Fri 7AM–6PM | Sat 8AM–2PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    {item.href ? (
                      <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">{item.label}</a>
                    ) : (
                      <span className="text-sm text-foreground">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="rounded-lg border bg-muted/50 p-4">
                <p className="text-xs font-semibold text-muted-foreground">License #RCC-123456 | Fully Licensed & Insured</p>
              </div>

              {/* Map placeholder */}
              <div className="flex h-64 items-center justify-center rounded-lg border bg-muted text-sm text-muted-foreground">
                Google Map Placeholder
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
