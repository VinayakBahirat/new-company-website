import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MeshBackground } from "@/components/site/mesh-background";
import { ContactAnimation } from "@/components/site/contact-animation";
import { Reveal } from "@/components/site/motion-primitives";
import { GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { COMPANY, SERVICES } from "@/content/site";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/emailjs";


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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const budget = formData.get("budget") as string;
    const scope = formData.get("scope") as string;
    const message = formData.get("message") as string;

    try {
      await sendContactEmail({
        name,
        email,
        phone: phone || undefined,
        company: company || undefined,
        budget: budget || undefined,
        scope: scope || undefined,
        message,
      });

      toast.success("Message sent successfully!");
      setSent(true);
      form.reset();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>      <Section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
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
                  <h2 className="mt-6 font-display text-2xl font-semibold">Message received</h2>
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
                      <div className="relative">
                        <select id="budget" name="budget" className={`${FIELD} appearance-none pr-10`} defaultValue="">
                          <option value="" disabled className="bg-zinc-950 text-muted-foreground">
                            Select a range
                          </option>
                          <option className="bg-zinc-950 text-white">Under $10k</option>
                          <option className="bg-zinc-950 text-white">$10k – $50k</option>
                          <option className="bg-zinc-950 text-white">$50k – $150k</option>
                          <option className="bg-zinc-950 text-white">$150k – $500k</option>
                          <option className="bg-zinc-950 text-white">$500k+</option>
                          <option className="bg-zinc-950 text-white">Personal / Undefined</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="scope" className="eyebrow mb-2.5 block">
                        What do you need built?
                      </label>
                      <div className="relative">
                        <select id="scope" name="scope" className={`${FIELD} appearance-none pr-10`} defaultValue="">
                          <option value="" disabled className="bg-zinc-950 text-muted-foreground">
                            Select a capability
                          </option>
                          {SERVICES.map((s) => (
                            <option key={s.slug} className="bg-zinc-950 text-white">{s.title}</option>
                          ))}
                          <option className="bg-zinc-950 text-white">Other / General Inquiry</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
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
                  {/* <li className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {COMPANY.address}
                  </li> */}
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

const FAQ_LIST = [
  {
    q: "How do engagements usually start?",
    a: "Every project begins with a short discovery phase where we understand your business goals, technical constraints, and product vision. You'll receive a clear scope, timeline, architecture direction, and delivery plan before development begins.",
  },
  {
    q: "How are teams structured?",
    a: "You work directly with a small senior engineering team. The architects designing your system are the same engineers who build, review, and deploy it, ensuring accountability throughout the project.",
  },
  {
    q: "Who owns the code?",
    a: "You do. From the very first commit, repositories, infrastructure, documentation, deployment pipelines, and intellectual property belong entirely to your organization.",
  },
  {
    q: "Can you work alongside an in-house team?",
    a: "Yes. We regularly collaborate with internal engineering teams, contributing architecture, development, code reviews, and technical leadership without disrupting existing workflows.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Our core stack includes React, Next.js, TypeScript, Node.js, FastAPI, PostgreSQL, MongoDB, AWS, Docker, CI/CD, and modern AI technologies including OpenAI, Gemini, Retrieval-Augmented Generation (RAG), and workflow automation.",
  },
  {
    q: "Do you build AI-powered products?",
    a: "Yes. We build production-ready AI systems including intelligent search, AI assistants, RAG platforms, workflow automation, custom LLM integrations, and enterprise AI applications designed for real business use.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines depend on complexity. Most MVPs are delivered within 6–12 weeks, while larger enterprise platforms are planned and released through clearly defined milestones.",
  },
  {
    q: "What happens after launch?",
    a: "Our partnership continues after deployment with performance optimization, security updates, infrastructure maintenance, monitoring, feature development, and long-term product support.",
  },
  {
    q: "Do you work with startups as well as enterprises?",
    a: "Yes. We work with startups launching new products, growing SaaS companies, digital agencies, and enterprises building or modernizing mission-critical software.",
  },
  {
    q: "Can you improve an existing application instead of building from scratch?",
    a: "Absolutely. We modernize legacy applications, improve performance, redesign user experiences, migrate infrastructure, integrate AI capabilities, and scale existing systems without disrupting business operations.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-14 grid gap-4 lg:grid-cols-2 items-start">
      {FAQ_LIST.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={faq.q} delay={(i % 2) * 0.05}>
            <div className="rounded-2xl border border-border bg-surface/30 transition-all duration-300 hover:border-primary/20 hover:bg-surface/40">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-content-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-2xl cursor-pointer"
              >
                <span className="font-display text-base font-semibold text-foreground">
                  {faq.q}
                </span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-glass transition-colors duration-300 group-hover:border-primary/40">
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="relative block h-3 w-3"
                  >
                    {/* Horizontal line */}
                    <span className="absolute left-0 top-[5px] h-[2px] w-3 bg-primary" />
                    {/* Vertical line */}
                    <span className="absolute left-[5px] top-0 h-3 w-[2px] bg-primary" />
                  </motion.span>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-content-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border/50 px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
