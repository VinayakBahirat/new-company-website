import { TECH_GROUPS } from "@/content/site";

export function MarqueeStrip() {
  const items = TECH_GROUPS.flatMap((g) => g.items);
  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-10">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-foreground/80 font-medium"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
