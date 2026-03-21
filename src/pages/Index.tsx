import { Link } from "react-router-dom";
import { Phone, Shield, Star, Clock, Award, CheckCircle, Wrench, Home, CloudRain, Search, Building2, HardHat, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-roofing.jpg";
import teamImg from "@/assets/team-photo.jpg";

const services = [
  { icon: Wrench, title: "Roof Repair", desc: "Fast, reliable repairs for leaks, missing shingles, and weather damage." },
  { icon: Home, title: "Roof Replacement", desc: "Complete tear-off and replacement with premium materials and warranty." },
  { icon: HardHat, title: "New Installation", desc: "Expert installation for new construction projects of any size." },
  { icon: CloudRain, title: "Storm Damage", desc: "Emergency response and insurance claim assistance after storms." },
  { icon: Search, title: "Inspections", desc: "Thorough roof inspections with detailed reports and recommendations." },
  { icon: Building2, title: "Commercial Roofing", desc: "Flat roof, TPO, EPDM, and metal solutions for commercial buildings." },
];

const testimonials = [
  { name: "Robert & Lisa M.", city: "Springfield, IL", quote: "Apex replaced our entire roof in two days. The crew was professional, cleaned up everything, and the price was exactly what they quoted. Couldn't be happier." },
  { name: "Patricia K.", city: "Decatur, IL", quote: "After the hailstorm, Apex was the first company to respond. They handled everything with our insurance and made the process completely stress-free." },
  { name: "James T.", city: "Champaign, IL", quote: "We got four estimates and Apex wasn't the cheapest — but they were the most thorough. Two years later, not a single issue. Worth every penny." },
];

const trustItems = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Award, label: "20+ Years Experience" },
  { icon: Clock, label: "Free Estimates" },
];

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional roofing crew installing shingles" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
        </div>
        <div className="container relative mx-auto flex min-h-[600px] flex-col justify-center px-4 py-24">
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-black leading-[1.05] text-secondary-foreground sm:text-5xl lg:text-6xl">
              Your Trusted<br />Roofing Experts.
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-lg text-secondary-foreground/70">
              Serving the greater Springfield area with dependable roof repair, replacement, and new installation for over 20 years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">Get a Free Estimate</Button>
              </Link>
              <a href="tel:5551234567">
                <Button variant="heroOutline" size="xl">
                  <Phone className="h-5 w-5" /> (555) 123-4567
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground/80">
              <item.icon className="h-5 w-5 text-success" />
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-black text-foreground lg:text-4xl">Our Roofing Services</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              From minor repairs to full commercial installations, we have you covered.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="group rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <ScrollReveal animation="slide-in-left">
            <img src={teamImg} alt="Apex Roofing team" className="w-full rounded-lg shadow-xl" />
          </ScrollReveal>
          <ScrollReveal animation="slide-in-right">
            <h2 className="text-3xl font-black text-foreground lg:text-4xl">Why Choose Apex Roofing?</h2>
            <div className="mt-8 flex flex-col gap-5">
              {[
                "Licensed & fully insured — protecting you and your property",
                "Free detailed estimates with transparent, upfront pricing",
                "Lifetime workmanship warranty on every project",
                "24/7 emergency storm damage service",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-block">
              <Button variant="hero" size="lg">Request Your Free Estimate</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-black text-foreground lg:text-4xl">What Our Customers Say</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="flex h-full flex-col rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
                  <div className="mt-4 border-t pt-4">
                    <p className="text-sm font-bold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-black text-foreground lg:text-4xl">Areas We Serve</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              Proudly serving communities across central Illinois.
            </p>
          </ScrollReveal>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {["Springfield", "Decatur", "Champaign", "Bloomington", "Jacksonville", "Lincoln", "Taylorville", "Chatham"].map((city, i) => (
              <ScrollReveal key={city} delay={i * 60}>
                <div className="flex items-center gap-2 rounded-lg bg-card p-3 text-sm font-medium text-card-foreground shadow-sm">
                  <MapPin className="h-4 w-4 text-primary" /> {city}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy-deep py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-secondary-foreground lg:text-4xl">
              Need a Roof? Call Us Today.
            </h2>
            <a href="tel:5551234567" className="mt-4 block text-2xl font-black text-primary">
              (555) 123-4567
            </a>
            <Link to="/contact" className="mt-6 inline-block">
              <Button variant="hero" size="xl">Get a Free Estimate</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
