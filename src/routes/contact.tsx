import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, Check } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";
import { MeshBackground } from "@/components/site/mesh-background";
import { ContactAnimation } from "@/components/site/contact-animation";
import { Reveal } from "@/components/site/motion-primitives";
import { GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { COMPANY, SERVICES } from "@/content/site";
import { useContactForm } from "@/hooks/use-contact-form";
import { FaqAccordion } from "@/components/site/contact/faq-accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



const DOMAIN = "https://sumanixsolutions.com";
const OG_IMAGE = `${DOMAIN}/og-image.png`;
const TITLE = "Contact Us — Start a Project | Sumanix Solutions";
const DESCRIPTION =
  "Contact Sumanix Solutions in Pune, Maharashtra. Start your web app, AI, or SaaS project — free consultation, reply within one business day. Serving India, US, and UK.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:url", content: `${DOMAIN}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${DOMAIN}/contact` },
    ],
  }),
  component: ContactPage,
});

const FIELD =
  "w-full rounded-xl border border-border bg-glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring";

function ContactPage() {
  const { sent, isSubmitting, onSubmit } = useContactForm();

  const breadcrumb = JSON.stringify(breadcrumbSchema([
    { name: "Home", url: DOMAIN },
    { name: "Contact", url: `${DOMAIN}/contact` },
  ]));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
      <Section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together."
            body="Whether you are an individual with an idea or a company looking to build next-generation software, we'd love to hear from you. You will hear back within one business day."
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
                  <h2 className="mt-6 font-display text-2xl font-semibold">Message successfully sent</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thank you. We will get back to you within one business day with next steps.
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
                        Email address
                      </label>
                      <input id="email" name="email" type="email" required autoComplete="email" className={FIELD} placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="eyebrow mb-2.5 block">
                        Phone number (Optional)
                      </label>
                      <input id="phone" name="phone" type="tel" className={FIELD} placeholder="Your phone number" />
                    </div>
                    <div>
                      <label htmlFor="company" className="eyebrow mb-2.5 block">
                        Company (Optional)
                      </label>
                      <input id="company" name="company" autoComplete="organization" className={FIELD} placeholder="Company or project name" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="budget" className="eyebrow mb-2.5 block">
                        Budget range
                      </label>
                      <Select name="budget">
                        <SelectTrigger id="budget" className={`${FIELD} h-auto`}>
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Under $10k">Under $10k</SelectItem>
                          <SelectItem value="$10k – $50k">$10k – $50k</SelectItem>
                          <SelectItem value="$50k – $150k">$50k – $150k</SelectItem>
                          <SelectItem value="$150k – $500k">$150k – $500k</SelectItem>
                          <SelectItem value="$500k+">$500k+</SelectItem>
                          <SelectItem value="Personal / Undefined">Personal / Undefined</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="scope" className="eyebrow mb-2.5 block">
                        What do you need built?
                      </label>
                      <Select name="scope">
                        <SelectTrigger id="scope" className={`${FIELD} h-auto`}>
                          <SelectValue placeholder="Select a capability" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s.slug} value={s.title}>
                              {s.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="Other / General Inquiry">
                            Other / General Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="eyebrow mb-2.5 block">
                      Message details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className={`${FIELD} resize-none`}
                      placeholder="Tell us about your project, idea, goals, or any questions you have."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="focus-ring group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_54px_-8px_var(--ring)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Sending...
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </Reveal>

          <div className="">
            <Reveal delay={0.06}>
              <GlassCard className="rounded-[1.8rem] p-7 mb-5">
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
                    <div>
                      <p>{COMPANY.address}</p>
                      <p className="mt-1 text-xs text-muted-foreground/70">Serving clients across India, US &amp; UK</p>
                    </div>
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
        <SectionHeading
          eyebrow="BEFORE YOU START"
          title="Questions we are asked most."
          body="Everything you need to know before starting a project with us. If your question isn't listed, we're happy to discuss it during a discovery call."
        />
        <FaqAccordion />
      </Section>
    </>
  );
}


