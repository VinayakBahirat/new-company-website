import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Check, ChevronDown } from "lucide-react";
import { MeshBackground } from "@/components/site/mesh-background";
import { ContactAnimation } from "@/components/site/contact-animation";
import { Reveal } from "@/components/site/motion-primitives";
import { GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { COMPANY, FAQS, SERVICES } from "@/content/site";

const TITLE = "Contact — Start a Project | Aeriform Systems";
const DESCRIPTION =
  "Tell us about the platform, AI product or system you need built. We reply within one business day and start with a two-week discovery.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ContactPage,
});

const FIELD =
  "w-full rounded-xl border border-border bg-glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring";

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative">
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what needs to exist."
            body="Share the problem, the constraints and the deadline. You will hear back within one business day from an engineer, not a form autoresponder."
          />
        </div>
      </Section>

      <Section className="pb-8">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <GlassCard className="rounded-[1.8rem] p-7 sm:p-10">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Check className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-semibold">Message received</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thank you. A delivery lead will reply within one business day with next steps and
                    a proposed discovery window.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="eyebrow mb-2.5 block">
                        Full name
                      </label>
                      <input id="name" name="name" required autoComplete="name" className={FIELD} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="eyebrow mb-2.5 block">
                        Work email
                      </label>
                      <input id="email" name="email" type="email" required autoComplete="email" className={FIELD} placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="eyebrow mb-2.5 block">
                        Company
                      </label>
                      <input id="company" name="company" autoComplete="organization" className={FIELD} placeholder="Company name" />
                    </div>
                    <div>
                      <label htmlFor="budget" className="eyebrow mb-2.5 block">
                        Budget range
                      </label>
                      <div className="relative">
                        <select id="budget" name="budget" className={`${FIELD} appearance-none pr-10`} defaultValue="">
                          <option value="" disabled>
                            Select a range
                          </option>
                          <option>Under $50k</option>
                          <option>$50k – $150k</option>
                          <option>$150k – $500k</option>
                          <option>$500k+</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="scope" className="eyebrow mb-2.5 block">
                      What do you need built?
                    </label>
                    <div className="relative">
                      <select id="scope" name="scope" className={`${FIELD} appearance-none pr-10`} defaultValue="">
                        <option value="" disabled>
                          Select a capability
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s.slug}>{s.title}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="eyebrow mb-2.5 block">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className={`${FIELD} resize-none`}
                      placeholder="The system, the users, the constraints and the deadline."
                    />
                  </div>
                  <button
                    type="submit"
                    className="focus-ring group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_54px_-8px_var(--ring)]"
                  >
                    Send project brief
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </GlassCard>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.06}>
              <GlassCard className="rounded-[1.8rem] p-7">
                <h2 className="eyebrow">Direct lines</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a href={`mailto:${COMPANY.email}`} className="focus-ring flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      {COMPANY.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="focus-ring flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      {COMPANY.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {COMPANY.address}
                  </li>
                </ul>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.12}>
              <ContactAnimation />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="py-24 sm:py-32">
        <SectionHeading eyebrow="Before you write" title="Questions we are asked most." />
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface/30 p-7">
                <h3 className="font-display text-base font-semibold">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
