import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/site/motion-primitives";

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

export function FaqAccordion() {
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
