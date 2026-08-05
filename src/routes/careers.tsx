import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Clock, Users } from "lucide-react";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal } from "@/components/site/motion-primitives";
import { ClosingCta, GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { ROLES, VALUES } from "@/content/site";

const TITLE = "Careers — Engineering, AI and Design Roles | Aeriform Systems";
const DESCRIPTION =
  "Open roles for senior product engineers, AI systems engineers, platform engineers, designers and delivery leads. Remote-friendly, senior-weighted teams.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative">
          <SectionHeading
            eyebrow="Careers"
            title="Join Our Team"
            body="We're always interested in meeting talented developers who enjoy building high-quality software and solving real business problems."
          />
        </div>
      </Section>

      <Section className="pb-8">
        <div className="grid gap-3">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.05}>
              <a
                href="#apply"
                className="focus-ring group flex flex-col gap-4 rounded-2xl border border-border bg-surface/30 p-6 transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface/60 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="font-display text-lg font-semibold sm:text-xl">{role.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-primary" /> {role.team}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary" /> {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" /> {role.type}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 self-start rounded-xl border border-border bg-glass px-4 py-2.5 text-sm font-semibold transition-colors group-hover:border-primary/40 group-hover:text-primary sm:self-auto">
                  Apply
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="apply" className="py-24 sm:py-32">
        <SectionHeading eyebrow="How we work" title="Why You'll Love Working Here." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.04}>
              <GlassCard className="h-full rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        eyebrow="JOIN OUR TEAM"
        title="Ready to Build Great Software With Us?"
        body="If you're passionate about solving real problems and building high-quality software, we'd love to hear from you. Even if there's no current opening, feel free to introduce yourself."
      />
    </>
  );
}
