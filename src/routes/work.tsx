import { createFileRoute } from "@tanstack/react-router";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal, TiltCard } from "@/components/site/motion-primitives";
import { ClosingCta, GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { PROJECTS } from "@/content/site";
import { MockUi } from "@/components/site/mock-ui";

const TITLE = "Selected Work — Enterprise Platforms & AI Products | Aeriform Systems";
const DESCRIPTION =
  "Representative engagements across enterprise platforms, AI products, SaaS, automation, mobile and cloud infrastructure. Anonymised and illustrative.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative">
          <SectionHeading
            eyebrow="Selected work"
            title="Platforms, products and systems in production."
            body="Engagement details are anonymised. Names, interfaces and figures are illustrative of the class of problem we take on."
          />
        </div>
      </Section>

      <Section className="pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06}>
              <TiltCard intensity={5} className="h-full">
                <GlassCard className="h-full rounded-[1.8rem] p-2.5">
                  <div className={`relative aspect-[16/10] overflow-hidden rounded-[1.3rem] bg-gradient-to-br ${p.accent}`}>
                    <div className="absolute inset-0 bg-[oklch(0.1_0_0_/_0.74)]" />
                    <div className="absolute inset-0 grid-lines opacity-30" />
                    <MockUi name={p.name} />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                        {p.category}
                      </p>
                      <p className="font-mono text-[0.65rem] text-muted-foreground">{p.metric}</p>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-semibold">{p.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.goal}</p>

                    <div className="mt-7 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                      <div>
                        <h3 className="eyebrow">Features</h3>
                        <ul className="mt-3 space-y-2">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="eyebrow">Technology</h3>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <li
                              key={t}
                              className="rounded-lg border border-border bg-glass px-2.5 py-1.5 text-xs text-muted-foreground"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        eyebrow="Your system"
        title="Bring us the part that keeps breaking."
        body="Re-platforms, AI features that stalled in prototype, or a product still on the whiteboard — we start where the risk is."
      />
    </>
  );
}
