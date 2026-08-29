import { Counter, Reveal } from "@/components/site/motion-primitives";
import { GlassCard, Section } from "@/components/site/primitives";
import { INDUSTRIES } from "@/content/site";

export function StatsBand() {
  return (
    <Section className="py-24 sm:py-32">
      <GlassCard className="rounded-[2rem] p-8 sm:p-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">OUR IMPACT</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Results That Speak for Themselves.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Real numbers that reflect our experience, successful projects, and
            commitment to quality.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            {
              value: INDUSTRIES.length,
              suffix: "+",
              label: "Years Combined Experience",
            },
            { value: 54, suffix: "+", label: "Projects Delivered" },
            { value: 97, decimals: 0, suffix: "%", label: "On-Time Delivery" },
            { value: 99, decimals: 0, suffix: "%", label: "Transparent Process" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div>
                <p className="font-display text-4xl font-semibold tracking-tight text-amber-gradient sm:text-5xl">
                  <Counter
                    to={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </GlassCard>
    </Section>
  );
}
