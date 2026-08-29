import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getIndustrySlug } from "@/content/industry-details";
import { Reveal } from "@/components/site/motion-primitives";
import { GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { WHO_WE_HELP, INDUSTRIES } from "@/content/site";

export function WhoWeWorkWithSection() {
  return (
    <Section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Who We Work With"
        title="Built for Growing Businesses Across Industries"
        body="Every business is unique, so every solution is tailored to your goals, industry, and challenges."
        align="center"
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-6xl mx-auto">
        {WHO_WE_HELP.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.08}>
            <GlassCard className="flex h-full flex-col items-center p-8 text-center hover:border-primary/30 transition-colors">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
                {w.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {w.body}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
        {INDUSTRIES.map((industry, i) => (
          <Reveal key={industry} delay={i * 0.03}>
            <Link
              to="/industries/$slug"
              params={{ slug: getIndustrySlug(industry) }}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-glass px-4 py-3 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              {industry}
              <ArrowRight className="h-3.5 w-3.5 opacity-60" />
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
