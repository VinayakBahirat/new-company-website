import { Reveal } from "@/components/site/motion-primitives";
import { Section, SectionHeading } from "@/components/site/primitives";
import { FAQS } from "@/content/site";

export function FaqSection() {
  return (
    <Section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        align="center"
      />
      <div className="mt-16 max-w-3xl mx-auto grid gap-4">
        {FAQS.map((faq, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="rounded-2xl border border-border bg-glass p-6">
              <h3 className="font-display text-lg font-semibold">{faq.q}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
