import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import teamImg from "@/assets/team-photo.jpg";
import completedImg from "@/assets/completed-roof.jpg";

const processSteps = [
  { icon: ClipboardCheck, step: "1", title: "Inspection", desc: "We perform a thorough assessment of your roof's condition." },
  { icon: Users, step: "2", title: "Estimate", desc: "You receive a detailed, transparent quote — no hidden fees." },
  { icon: Award, step: "3", title: "Build", desc: "Our skilled crew completes the work on schedule with premium materials." },
  { icon: CheckCircle, step: "4", title: "Final Walkthrough", desc: "We walk the project together to ensure your complete satisfaction." },
];

const certifications = ["GAF Certified", "CertainTeed SELECT", "Owens Corning Preferred", "BBB A+ Rated", "OSHA Compliant", "EPA Lead-Safe Certified"];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-secondary-foreground lg:text-5xl">About Apex Roofing</h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/70">
            Built on integrity. Backed by two decades of experience.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <ScrollReveal animation="slide-in-left">
            <img src={completedImg} alt="Completed roofing project" className="rounded-lg shadow-xl" />
          </ScrollReveal>
          <ScrollReveal animation="slide-in-right">
            <h2 className="text-3xl font-black text-foreground">Our Story</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Founded in 2003 by Mike Harmon, Apex Roofing started as a two-man crew with a simple promise: do honest work at a fair price. Over two decades later, that promise hasn't changed — but our team has grown to over 40 skilled tradespeople serving central Illinois.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We've completed more than 5,000 roofing projects, from small leak repairs to full commercial installations. Every job gets the same attention to detail, because your home is your biggest investment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-foreground">Our Mission</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              To protect every home and business we serve with roofing solutions that are built to last — delivered with honesty, professionalism, and respect for your property.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-black text-foreground">Meet the Team</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Mike Harmon", role: "Founder & CEO", initials: "MH" },
              { name: "Sandra Chen", role: "Operations Manager", initials: "SC" },
              { name: "Dave Rodriguez", role: "Lead Foreman", initials: "DR" },
            ].map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-xl font-black text-secondary-foreground">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-card-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-black text-foreground">Credentials & Certifications</h2>
          </ScrollReveal>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 60}>
                <div className="flex items-center justify-center gap-2 rounded-lg border bg-card px-4 py-3 text-sm font-semibold text-card-foreground shadow-sm">
                  <Award className="h-4 w-4 text-accent" /> {cert}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-black text-foreground">Our Process</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-black text-primary-foreground">
                    {s.step}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-secondary-foreground">Ready to Work With Us?</h2>
            <Link to="/contact" className="mt-6 inline-block">
              <Button variant="hero" size="xl">Get a Free Estimate</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
