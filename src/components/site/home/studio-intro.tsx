import { StudioArchitecture } from "@/components/site/studio-architecture";
import { Parallax, Reveal } from "@/components/site/motion-primitives";
import { Section, SectionHeading } from "@/components/site/primitives";
import { VALUES } from "@/content/site";
import { cn } from "@/lib/utils";

export function StudioIntro() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Parallax distance={34} className="w-full">
          <StudioArchitecture />
        </Parallax>

        <div>
          <SectionHeading
            eyebrow="The studio"
            title="We build software that makes your business easier to run."
            body="A successful product starts with the right foundation. We take time to understand your business, plan the best solution, and build software that is reliable, scalable, and ready for the future."
          />
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-border glass-panel sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.05}
                className={cn(
                  "border-border",
                  i % 2 === 0 ? "sm:border-r" : "",
                  i < 4 ? "border-b" : ""
                )}
              >
                <div className="h-full bg-background/70 p-6">
                  <h3 className="font-display text-base font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="hidden bg-background/70 p-6 sm:block">
              <p className=" text-primary font-display text-base font-semibold">
                Mission
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Helping businesses grow with reliable, high-quality software
                built for long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
