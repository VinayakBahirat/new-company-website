import { cn } from "@/lib/utils";

/**
 * Layered ambient background: animated gradient mesh + grid + vignette.
 * Pure CSS, GPU-composited transforms only.
 */
export function MeshBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 grid-lines opacity-[0.55] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,black,transparent_75%)]" />
      <div className="animate-drift absolute -left-[18%] -top-[26%] h-[62vw] w-[62vw] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_20%,transparent),transparent_66%)] blur-3xl" />
      <div className="animate-drift-alt absolute -right-[22%] top-[6%] h-[56vw] w-[56vw] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.13_255_/_0.22),transparent_66%)] blur-3xl" />
      <div className="animate-drift absolute bottom-[-30%] left-[22%] h-[54vw] w-[54vw] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.12_320_/_0.16),transparent_68%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_20%,var(--background)_82%)]" />
    </div>
  );
}

/** Thin luminous divider used between sections. */
export function Hairline({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-[linear-gradient(90deg,transparent,oklch(1_0_0_/_0.14)_18%,color-mix(in_oklab,var(--primary)_45%,transparent)_50%,oklch(1_0_0_/_0.14)_82%,transparent)]",
        className,
      )}
    />
  );
}
