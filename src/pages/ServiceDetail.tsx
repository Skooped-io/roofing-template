import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone, MapPin, Clock, ArrowRight, ChevronRight, Wrench, Home, HardHat, CloudRain, Search, Building2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { seoConfig, slugify, getServiceBySlug } from "@/lib/config";

const iconMap: Record<string, any> = { Wrench, Home, HardHat, CloudRain, Search, Building2 };

const serviceContent: Record<string, { paragraphs: string[]; includes: string[] }> = {
  "roof-repair": {
    paragraphs: [
      `Whether it's a small leak after a rainstorm or missing shingles from high winds, roof damage left unaddressed can quickly escalate into costly structural problems. At ${seoConfig.businessName}, we specialize in fast, dependable roof repairs that restore your roof's integrity and protect your home.`,
      `Our experienced technicians diagnose the root cause of every issue — not just the visible symptoms. We work with all shingle types, flashing systems, and ventilation components to deliver lasting repairs that hold up through ${seoConfig.serviceArea}'s toughest weather.`,
      `We understand that roof problems don't wait for business hours. That's why we offer prompt response times and transparent pricing with no hidden fees. Every repair comes backed by our workmanship warranty.`,
    ],
    includes: ["Complete leak detection and diagnosis", "Shingle replacement and re-sealing", "Flashing repair around chimneys, vents, and skylights", "Ridge cap and hip repair", "Gutter and downspout assessment", "Written warranty on all repair work"],
  },
  "roof-replacement": {
    paragraphs: [
      `When repairs are no longer enough to keep your home protected, a full roof replacement is the smartest long-term investment you can make. ${seoConfig.businessName} provides complete tear-off and replacement services using premium materials from the industry's top manufacturers.`,
      `Every replacement starts with a full deck inspection to identify hidden damage. We then install a complete roofing system — including underlayment, ice and water shield, drip edge, and ventilation — ensuring your new roof performs at its best for decades.`,
      `We carry products from GAF, CertainTeed, and Owens Corning, and we'll help you choose the right material, color, and warranty level for your budget and style. Financing options are available to make your investment manageable.`,
    ],
    includes: ["Complete tear-off and disposal of old roofing", "Full deck inspection and repair", "Ice and water shield installation", "Premium underlayment and drip edge", "Architectural or designer shingle installation", "Manufacturer warranty up to 50 years"],
  },
  "new-construction": {
    paragraphs: [
      `Building a new home or commercial property in ${seoConfig.serviceArea}? The roofing system is one of the most critical components of any new build, and getting it right from the start saves thousands in future repairs.`,
      `${seoConfig.businessName} partners with builders, general contractors, and homeowners to deliver expertly installed roofing systems on schedule and on budget. We work with your architect's specifications while recommending best practices for ventilation, drainage, and energy efficiency.`,
      `From single-family homes to multi-unit developments, our crew has the experience and equipment to handle projects of any scale — without cutting corners or causing delays.`,
    ],
    includes: ["Coordination with builders and general contractors", "Material selection consulting", "Ventilation and energy efficiency planning", "Compliance with local building codes", "On-schedule installation", "Final walkthrough and quality assurance"],
  },
  "storm-damage-repair": {
    paragraphs: [
      `Severe weather can strike without warning, leaving your roof vulnerable to leaks and further damage. ${seoConfig.businessName} provides rapid response storm damage services to protect your property and restore your peace of mind.`,
      `We offer emergency tarping within hours of your call, followed by a comprehensive damage assessment documented with photos and detailed reports. Our team works directly with your insurance adjuster to streamline the claims process and maximize your coverage.`,
      `${seoConfig.serviceArea} sees its share of hail, high winds, and severe storms. We've helped hundreds of homeowners navigate the recovery process — and we'll be with you every step of the way.`,
    ],
    includes: ["24/7 emergency tarping and board-up", "Full damage assessment with photo documentation", "Insurance claim assistance and adjuster coordination", "Complete restoration to pre-storm condition", "Debris cleanup and disposal", "Follow-up inspection after repair"],
  },
  "roof-inspections": {
    paragraphs: [
      `Regular roof inspections are the most cost-effective way to extend the life of your roof and catch small problems before they become expensive emergencies. ${seoConfig.businessName}'s certified inspectors provide thorough, honest assessments you can trust.`,
      `Whether you're buying or selling a home, filing an insurance claim, or simply want to know your roof's condition, our detailed inspection reports give you the information you need to make smart decisions.`,
      `We inspect every component — shingles, flashing, vents, gutters, soffits, and attic ventilation — and provide clear recommendations with estimated costs so there are never any surprises.`,
    ],
    includes: ["Full exterior roof surface inspection", "Flashing and penetration assessment", "Gutter and drainage evaluation", "Attic and ventilation inspection", "Detailed written report with photos", "Repair cost estimates and recommendations"],
  },
  "commercial-roofing": {
    paragraphs: [
      `Commercial roofing demands specialized expertise, materials, and equipment that differ significantly from residential work. ${seoConfig.businessName} has the experience and certifications to handle flat roof systems and large-scale installations for businesses across ${seoConfig.serviceArea}.`,
      `We specialize in TPO, EPDM, modified bitumen, and metal roofing systems — each selected and installed to meet the specific needs of your building, whether it's a retail space, warehouse, office, or industrial facility.`,
      `Minimizing disruption to your business is always a priority. We work around your schedule, maintain a clean and safe job site, and deliver projects on time and on budget.`,
    ],
    includes: ["TPO, EPDM, and modified bitumen systems", "Metal roofing for commercial structures", "Preventive maintenance programs", "Roof coating and restoration", "Emergency leak repair", "Compliance with commercial building codes"],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : null;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} in ${seoConfig.address.city}, ${seoConfig.address.state} | ${seoConfig.businessName}`;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) {
        descEl.setAttribute("content", `Professional ${service.title.toLowerCase()} services in ${seoConfig.address.city}, ${seoConfig.address.state}. ${service.shortDesc} Call ${seoConfig.phone} for a free estimate.`);
      }
    }
  }, [service]);

  if (!service || !slug) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-black text-foreground">Service Not Found</h1>
          <p className="mt-3 text-muted-foreground">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="mt-6 inline-block">
            <Button variant="hero">View All Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Wrench;
  const content = serviceContent[slug] || serviceContent["roof-repair"];
  const relatedServices = seoConfig.services.filter((s) => slugify(s.title) !== slug).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDesc,
    provider: {
      "@type": "LocalBusiness",
      name: seoConfig.businessName,
      telephone: seoConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: seoConfig.address.street,
        addressLocality: seoConfig.address.city,
        addressRegion: seoConfig.address.state,
        postalCode: seoConfig.address.zip,
      },
    },
    areaServed: seoConfig.serviceArea,
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <div className="bg-secondary/80 border-b border-secondary-foreground/10">
        <div className="container mx-auto flex items-center gap-2 px-4 py-3 text-sm text-secondary-foreground/60">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-secondary-foreground font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-balance text-4xl font-black leading-[1.05] text-secondary-foreground lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70">
              {service.longDesc}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">Get a Free Estimate</Button>
              </Link>
              <a href={`tel:${seoConfig.phoneRaw}`} className="flex items-center gap-2 font-bold text-secondary-foreground">
                <Phone className="h-4 w-4 text-primary" />
                {seoConfig.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="prose prose-lg max-w-none">
                  {content.paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed text-muted-foreground">{p}</p>
                  ))}
                </div>
              </ScrollReveal>

              {/* What's Included */}
              <ScrollReveal animation="slide-in-left">
                <div className="mt-12 rounded-xl border bg-card p-8 shadow-sm">
                  <h2 className="text-2xl font-black text-card-foreground">What's Included</h2>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {content.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal>
                <div className="mt-12 rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
                  <h2 className="text-2xl font-black text-foreground">Ready to Get Started?</h2>
                  <p className="mt-3 text-muted-foreground">
                    Contact us today for a free, no-obligation estimate on your {service.title.toLowerCase()} project.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <Link to="/contact">
                      <Button variant="hero" size="lg">Request Free Estimate</Button>
                    </Link>
                    <a href={`tel:${seoConfig.phoneRaw}`}>
                      <Button variant="heroOutline" size="lg">
                        <Phone className="mr-2 h-4 w-4" />
                        Call {seoConfig.phone}
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* NAP */}
              <ScrollReveal animation="slide-in-right">
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-black text-card-foreground">{seoConfig.businessName}</h3>
                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{seoConfig.address.full}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      <a href={`tel:${seoConfig.phoneRaw}`} className="font-bold hover:text-primary transition-colors">{seoConfig.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 shrink-0 text-primary" />
                      <span>{seoConfig.hours}</span>
                    </div>
                  </div>
                  <div className="mt-5 border-t pt-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Service Area</p>
                    <p className="mt-1 text-sm text-muted-foreground">{seoConfig.serviceArea}</p>
                    <p className="mt-1 text-xs text-muted-foreground/60">{seoConfig.serviceAreaCities.join(" · ")}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Related Services */}
              <ScrollReveal animation="slide-in-right">
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-black text-card-foreground">Other Services</h3>
                  <div className="mt-4 space-y-1">
                    {relatedServices.map((s) => {
                      const SIcon = iconMap[s.icon] || Wrench;
                      return (
                        <Link
                          key={s.title}
                          to={`/services/${slugify(s.title)}`}
                          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                        >
                          <SIcon className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">{s.title}</span>
                          <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}