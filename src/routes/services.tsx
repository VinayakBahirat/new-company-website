import { createFileRoute } from "@tanstack/react-router";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal } from "@/components/site/motion-primitives";
import { ClosingCta, GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { PROCESS, SERVICES, TECH_GROUPS } from "@/content/site";

const TITLE = "Services — Enterprise, AI, SaaS & Cloud Engineering | Aeriform Systems";
const DESCRIPTION =
  "Enterprise software, AI product development, SaaS platforms, mobile, cloud operations, automation and performance engineering delivered by senior pods.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative">
          <SectionHeading
            eyebrow="Capabilities"
            title="Software That Solves Real Business Problems."
            body="Everything you need to build, launch, and grow your software all in one team."
          />
        </div>
      </Section>

      <Section className="pb-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 0.06}>
              <GlassCard id={service.slug} className="h-full scroll-mt-32 rounded-[1.6rem] p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-xl font-semibold sm:text-2xl">{service.title}</h2>
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {service.summary}
                </p>
                <ul className="mt-7 grid gap-2.5 border-t border-border pt-6 sm:grid-cols-3">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-24 sm:py-32">
        <SectionHeading eyebrow="How it runs" title="From discovery to long-horizon ownership." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((s, i) => (
            <Reveal key={s.step} delay={(i % 5) * 0.05}>
              <div className="h-full bg-background/70 p-6">
                <span className="font-mono text-[0.65rem] text-primary">{s.step}</span>
                <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-8">
        <SectionHeading
          eyebrow="Technology"
          title="Technologies We Trust."
          body="We use modern, proven technologies to build fast, secure, and scalable software that grows with your business."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {TECH_GROUPS.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface/30 p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em]">{g.group}</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        eyebrow="LET'S BUILD TOGETHER"
        title="Let's Build Something Great Together."
        body="Tell us about your idea, business, or project. We'll help you plan, build, and launch the right solution."
      />
    </>
  );
}
