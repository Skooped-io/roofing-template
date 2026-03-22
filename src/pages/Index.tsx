import { Link } from "react-router-dom";
import { Phone, Shield, Star, Clock, Award, CheckCircle, Wrench, Home, CloudRain, Search, Building2, HardHat, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageSEO, LocalBusinessSchema } from "@/components/PageSEO";
import { seoConfig, getImage } from "@/lib/config";
import heroImg from "@/assets/hero-roofing.jpg";
import teamImg from "@/assets/team-photo.jpg";

const iconMap: Record<string, any> = { Wrench, Home, HardHat, CloudRain, Search, Building2 };
const trustIconMap = [Shield, Star, Award, Clock];

export default function Index() {
  return (
    <div>
      <PageSEO page="home" />
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <img src={getImage(null, 'hero', heroImg)} alt={`${seoConfig.businessName} - Professional roofing crew`} className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
        </div>
        <div className="container relative mx-auto flex min-h-[600px] flex-col justify-center px-4 py-24">
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-black leading-[1.05] text-secondary-foreground sm:text-5xl lg:text-6xl">
              {seoConfig.seo.home.h1.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-lg text-secondary-foreground/70">
              Serving the greater {seoConfig.address.city} area with dependable roof repair, replacement, and new installation for over 20 years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">Get a Free Estimate</Button>
              </Link>
              <a href={`tel:${seoConfig.phoneRaw}`}>
                <Button variant="heroOutline" size="xl">
                  <Phone className="h-5 w-5" /> {seoConfig.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
          {seoConfig.trustItems.map((label, i) => {
            const Icon = trustIconMap[i];
            return (
              <div key={label} className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground/80">
                <Icon className="h-5 w-5 text-success" />
                {label}
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-black text-foreground lg:text-4xl">Our {seoConfig.industry} Services</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              From minor repairs to full commercial installations, we have you covered.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seoConfig.services.map((s, i) => {
              const Icon = iconMap[s.icon] || Wrench;
              return (
                <ScrollReveal key={s.title} delay={i * 80}>
                  <div className="group rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.shortDesc}</p>
                    <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <ScrollReveal animation="slide-in-left">
            <img src={getImage(null, 'team', teamImg)} alt={`${seoConfig.businessName} team`} className="w-full rounded-lg shadow-xl" />
          </ScrollReveal>
          <ScrollReveal animation="slide-in-right">
            <h2 className="text-3xl font-black text-foreground lg:text-4xl">Why Choose {seoConfig.businessName}?</h2>
            <div className="mt-8 flex flex-col gap-5">
              {seoConfig.whyChooseUs.map((item) => (
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
            {seoConfig.testimonials.map((t, i) => (
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
              Proudly serving communities across {seoConfig.serviceArea.toLowerCase()}.
            </p>
          </ScrollReveal>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {seoConfig.serviceAreaCities.map((city, i) => (
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
            <a href={`tel:${seoConfig.phoneRaw}`} className="mt-4 block text-2xl font-black text-primary">
              {seoConfig.phone}
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
