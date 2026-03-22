import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageSEO } from "@/components/PageSEO";
import { seoConfig } from "@/lib/config";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div>
      <PageSEO page="faq" />

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-secondary-foreground lg:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/70">
            Answers to the most common {seoConfig.industry.toLowerCase()} questions we hear.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {seoConfig.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-lg border bg-card px-6 shadow-sm">
                  <AccordionTrigger className="text-left font-heading text-base font-bold text-card-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy-deep py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-secondary-foreground">Still Have Questions?</h2>
            <p className="mt-3 text-secondary-foreground/70">We're here to help. Give us a call or send us a message.</p>
            <Link to="/contact" className="mt-6 inline-block">
              <Button variant="hero" size="xl">Contact Us</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
