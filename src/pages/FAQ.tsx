import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a roof replacement take?", a: "Most residential roof replacements take 1–3 days, depending on the size, complexity, and weather. We'll give you a specific timeline during your free estimate." },
  { q: "Do you offer financing?", a: "Yes. We partner with several financing providers to offer flexible payment plans with competitive rates. Ask us during your consultation for details." },
  { q: "What roofing materials do you use?", a: "We install asphalt shingles (architectural and 3-tab), metal roofing, cedar shakes, and flat roof systems (TPO, EPDM). We carry products from GAF, CertainTeed, and Owens Corning." },
  { q: "Will my insurance cover storm damage?", a: "In most cases, yes. We work directly with your insurance adjuster and provide all necessary documentation, photos, and estimates to support your claim." },
  { q: "How do I know if I need a repair or full replacement?", a: "We'll perform a free inspection and give you an honest recommendation. If your roof is under 15 years old with localized damage, a repair is usually sufficient. Widespread issues often call for replacement." },
  { q: "What warranties do you offer?", a: "All our work comes with a lifetime workmanship warranty. Material warranties vary by manufacturer — typically 25–50 years for architectural shingles." },
  { q: "Do you handle permits and inspections?", a: "Absolutely. We pull all required permits and schedule municipal inspections. It's all included in your project cost." },
  { q: "Can you work on commercial buildings?", a: "Yes. We specialize in flat roof systems for commercial properties including TPO, EPDM, and modified bitumen membranes." },
  { q: "How often should I have my roof inspected?", a: "We recommend annual inspections, especially after severe weather. Regular inspections catch small issues before they become expensive problems." },
  { q: "Are you licensed and insured?", a: "Yes. We carry full general liability insurance, workers' compensation, and hold a valid roofing contractor license (RCC-123456)." },
];

export default function FAQ() {
  return (
    <div>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-secondary-foreground lg:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/70">
            Answers to the most common roofing questions we hear.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
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
