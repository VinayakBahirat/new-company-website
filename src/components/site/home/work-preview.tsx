import { Reveal, TiltCard } from "@/components/site/motion-primitives";
import {
  GlassCard,
  Section,
  SectionHeading,
  CtaLink,
} from "@/components/site/primitives";
import { MockUi } from "@/components/site/mock-ui";
import { PROJECTS } from "@/content/site";

export function WorkPreview() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects That Deliver Real Results"
          body="A selection of projects that showcase the types of solutions we build for businesses across different industries."
        />
        <Reveal delay={0.1}>
          <CtaLink to="/work" variant="ghost">
            View all work
          </CtaLink>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.07}>
            <TiltCard intensity={6} className="h-full">
              <GlassCard className="group h-full rounded-[1.6rem] p-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                      <div className="absolute inset-0 bg-[oklch(0.96_0.02_220_/_0.60)]" />
                      <div className="absolute inset-0 grid-lines opacity-30" />
                      <MockUi name={p.name} />
                    </>
                  )}
                </div>
                <div className="p-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                    {p.category}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {p.name}
                  </h3>
                  <div className="mt-4 flex flex-col gap-2">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground/80">
                        Challenge & Solution:
                      </span>{" "}
                      {p.goal}
                    </p>
                    {p.tech && (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-foreground/80">
                          Technology:
                        </span>{" "}
                        {p.tech.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
