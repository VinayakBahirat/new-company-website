import { motion } from "framer-motion";
import { MeshBackground } from "@/components/site/mesh-background";
import { Pill, Section, CtaLink } from "@/components/site/primitives";

export function Hero() {
  return (
    <Section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pb-20 pt-36 sm:pt-44">
      <MeshBackground />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Pill>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for new projects
          </Pill>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.04em] sm:text-6xl lg:text-[5.5rem]"
        >
          <span className="text-gradient block">
            We Build Products That
          </span>
          <span className="block text-amber-gradient mt-2">
            Real Businesses Depend On.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          We help businesses turn ideas into fast, reliable, and scalable software. From custom web applications and SaaS platforms to AI-powered solutions, we build products that solve real business problems and support long-term growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <CtaLink to="/contact">Book a Free Consultation</CtaLink>
          <CtaLink to="/work" variant="ghost">
            View Our Work
          </CtaLink>
        </motion.div>
      </div>
    </Section>
  );
}
