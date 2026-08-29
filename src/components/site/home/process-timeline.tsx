import { Reveal } from "@/components/site/motion-primitives";
import { Section, SectionHeading } from "@/components/site/primitives";
import { PROCESS } from "@/content/site";

export function ProcessTimeline() {
  return (
    <Section id="process" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Delivery process"
        title="A Simple Process. Clear at Every Step."
        body="We keep the process simple and transparent, so you always know what we're working on and what comes next."
      />
      <div className="relative mt-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((stage, i) => (
            <Reveal key={stage.step} delay={i * 0.06}>
              <div className="group relative h-full rounded-2xl border border-border bg-surface/30 p-6 transition-colors duration-400 hover:border-primary/30 hover:bg-surface/60">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">
                    {stage.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {stage.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {stage.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
