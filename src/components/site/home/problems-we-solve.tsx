import { Reveal } from "@/components/site/motion-primitives";
import { Section, SectionHeading, CtaLink } from "@/components/site/primitives";
import { PROBLEMS_SOLVED } from "@/content/site";

export function ProblemsWeSolveSection() {
  return (
    <Section className="py-24 sm:py-32 bg-surface/30">
      <SectionHeading
        eyebrow="Problems We Solve"
        title="Software Should Solve Problems, Not Create Them."
        align="center"
      />
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {PROBLEMS_SOLVED.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-glass p-6 transition-all hover:border-primary/40">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Reveal delay={0.2}>
          <CtaLink to="/contact">Discuss Your Project</CtaLink>
        </Reveal>
      </div>
    </Section>
  );
}
