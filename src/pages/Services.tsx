import { Link } from "react-router-dom";
import { Wrench, Home, HardHat, CloudRain, Search, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageSEO } from "@/components/PageSEO";
import { seoConfig, getImage, slugify } from "@/lib/config";
import heroImg from "@/assets/hero-roofing.jpg";
import completedImg from "@/assets/completed-roof.jpg";
import stormImg from "@/assets/storm-damage.jpg";

const iconMap: Record<string, any> = { Wrench, Home, HardHat, CloudRain, Search, Building2 };
const defaultImages = [completedImg, heroImg, completedImg, stormImg, completedImg, heroImg];

export default function Services() {
  return (
    <div>
      <PageSEO page="services" />

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-secondary-foreground lg:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/70">
            Comprehensive {seoConfig.industry.toLowerCase()} solutions for residential and commercial properties.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto space-y-20 px-4">
          {seoConfig.services.map((s, i) => {
            const Icon = iconMap[s.icon] || Wrench;
            const fallbackImg = defaultImages[i] || completedImg;
            return (
              <ScrollReveal key={s.title} animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}>
                <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-foreground lg:text-3xl">{s.title}</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{s.longDesc}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link to={`/services/${slugify(s.title)}`}>
                        <Button variant="heroOutline" size="lg">Learn More</Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="hero" size="lg">Get a Free Estimate</Button>
                      </Link>
                    </div>
                  </div>
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <img src={getImage(null, s.imageSlot, fallbackImg)} alt={s.title} className="rounded-lg shadow-lg" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
