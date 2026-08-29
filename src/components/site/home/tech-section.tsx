import { Reveal } from "@/components/site/motion-primitives";
import {
  GlassCard,
  Section,
  SectionHeading,
  CtaLink,
} from "@/components/site/primitives";
import { TECH_GROUPS } from "@/content/site";
import { cn } from "@/lib/utils";

export function TechSection() {
  return (
    <Section id="technology" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Technology"
        title="Modern Tech For Modern Problems."
        body="We choose proven technologies that help us build secure, fast, and reliable software for every project."
      />

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {TECH_GROUPS.map((group, gi) => {
          const isWide =
            group.group === "Frontend" ||
            group.group === "Backend" ||
            group.group === "AI";

          return (
            <Reveal
              key={group.group}
              delay={gi * 0.08}
              className={cn("h-full", isWide ? "md:col-span-2" : "md:col-span-1")}
            >
              <GlassCard className="group flex h-full flex-col rounded-[1.8rem] p-7 transition-all duration-500 hover:border-primary/30 hover:bg-surface/60">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-base font-semibold tracking-wide group-hover:text-primary transition-colors">
                    {group.group}
                  </h3>
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-border bg-glass px-3.5 py-1.5 text-[0.75rem] font-medium text-muted-foreground shadow-sm transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary/50" />
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16 flex justify-center">
        <Reveal delay={0.1}>
          <CtaLink to="/contact">Schedule a Call</CtaLink>
        </Reveal>
      </div>
    </Section>
  );
}
