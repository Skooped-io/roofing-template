import { Link } from "react-router-dom";
import { Wrench, Home, HardHat, CloudRain, Search, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-roofing.jpg";
import completedImg from "@/assets/completed-roof.jpg";
import stormImg from "@/assets/storm-damage.jpg";

const services = [
  {
    icon: Wrench, title: "Roof Repair", img: completedImg,
    desc: "From minor leaks to significant damage, our repair services restore the integrity of your roof quickly and affordably. We work with all shingle types, flashing, and ventilation systems.",
  },
  {
    icon: Home, title: "Roof Replacement", img: heroImg,
    desc: "When repairs aren't enough, our full replacement service includes a complete tear-off, deck inspection, and installation of premium materials backed by manufacturer warranties.",
  },
  {
    icon: HardHat, title: "New Construction", img: completedImg,
    desc: "Building a new home or commercial property? We partner with builders and homeowners to deliver expertly installed roofing systems for projects of any scale.",
  },
  {
    icon: CloudRain, title: "Storm Damage Repair", img: stormImg,
    desc: "After severe weather, we provide emergency tarping, full damage assessment, and work directly with your insurance company to streamline the claims process.",
  },
  {
    icon: Search, title: "Roof Inspections", img: completedImg,
    desc: "Our certified inspectors provide detailed reports on your roof's condition, remaining lifespan, and any areas of concern — ideal for home sales or annual maintenance.",
  },
  {
    icon: Building2, title: "Commercial Roofing", img: heroImg,
    desc: "We specialize in flat roof systems including TPO, EPDM, and modified bitumen, as well as metal roofing solutions for warehouses, offices, and retail buildings.",
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-secondary-foreground lg:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/70">
            Comprehensive roofing solutions for residential and commercial properties.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto space-y-20 px-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}>
              <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-black text-foreground lg:text-3xl">{s.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link to="/contact" className="mt-6 inline-block">
                    <Button variant="hero" size="lg">Get a Free Estimate for {s.title}</Button>
                  </Link>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <img src={s.img} alt={s.title} className="rounded-lg shadow-lg" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
