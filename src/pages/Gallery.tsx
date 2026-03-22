import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageSEO } from "@/components/PageSEO";
import { seoConfig, getImage } from "@/lib/config";
import heroImg from "@/assets/hero-roofing.jpg";
import completedImg from "@/assets/completed-roof.jpg";
import stormImg from "@/assets/storm-damage.jpg";

const filters = ["All", "Residential", "Commercial", "Storm Damage"] as const;
const fallbackImages = [completedImg, heroImg, stormImg, completedImg, heroImg, stormImg, completedImg, heroImg];

export default function Gallery() {
  const [active, setActive] = useState<typeof filters[number]>("All");
  const projects = seoConfig.gallery;
  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <div>
      <PageSEO page="gallery" />

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-secondary-foreground lg:text-5xl">Our Work</h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/70">
            Browse our portfolio of completed {seoConfig.industry.toLowerCase()} projects.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-lg px-5 py-2 text-sm font-bold transition-all active:scale-[0.97] ${
                  active === f
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => {
              const idx = seoConfig.gallery.indexOf(p);
              const fallback = fallbackImages[idx] || completedImg;
              return (
                <ScrollReveal key={p.title + p.location} delay={i * 80}>
                  <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="relative h-52 overflow-hidden">
                      <img src={getImage(null, p.imageSlot, fallback)} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <span className="absolute left-3 top-3 rounded bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                        {p.type}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-card-foreground">{p.title}</h3>
                      <p className="text-xs font-medium text-muted-foreground">{p.location}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
