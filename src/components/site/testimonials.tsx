import { Star } from "lucide-react";
import { Reveal, TiltCard } from "./motion-primitives";
import { GlassCard } from "./primitives";
import { TESTIMONIALS } from "@/content/site";

export function TestimonialsSection() {
  return (
    <div className="mt-16 grid gap-5 md:grid-cols-3">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.07}>
          <TiltCard intensity={5} className="h-full">
            <GlassCard className="flex h-full flex-col gap-6 rounded-[1.8rem] p-7 transition-colors duration-500 hover:border-primary/20">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className="h-4 w-4 fill-primary/80 text-primary/80"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}
