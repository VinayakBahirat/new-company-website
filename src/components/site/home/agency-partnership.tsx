import { Briefcase, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import {
  GlassCard,
  Section,
  SectionHeading,
  CtaLink,
} from "@/components/site/primitives";

export function AgencyPartnershipSection() {
  return (
    <Section className="py-24 sm:py-32 bg-primary/5">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="For Agencies & Businesses"
            title="Development Partnership"
            body="We work with agencies and businesses that need reliable development support for new projects, existing products, and ongoing technical work. From full-stack Next.js development to AI integrations and maintenance."
          />
          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "React / Next.js",
                "Full-Stack Development",
                "Backend & APIs",
                "Shopify Development",
                "AI Integration",
                "Maintenance & Support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle className="h-2.5 w-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <CtaLink to="/contact">Partner With Us</CtaLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <GlassCard className="aspect-square w-full rounded-[2rem] p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-surface to-background flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_15%,transparent),transparent_60%)]" />
            <div className="relative text-center z-10">
              <Briefcase className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
              <h3 className="font-display text-2xl font-semibold mb-2">
                Extended Engineering
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Seamlessly expand your technical capabilities without the
                overhead of hiring in-house.
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
