import { cn } from "@/lib/utils";

/**
 * Layered ambient background: animated gradient mesh + grid + vignette.
 * Pure CSS, GPU-composited transforms only.
 * Light pastel blue/silver theme for Sumanix Solutions.
 */
export function MeshBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 grid-lines opacity-[0.65] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,black,transparent_75%)]" />
      {/* Primary blue blob — top left */}
      <div className="animate-drift transform-gpu absolute -left-[18%] -top-[26%] h-[62vw] w-[62vw] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.10_220_/_0.45),transparent_66%)] blur-2xl" />
      {/* Secondary sky-blue blob — top right */}
      <div className="animate-drift-alt transform-gpu absolute -right-[22%] top-[6%] h-[56vw] w-[56vw] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.07_210_/_0.35),transparent_66%)] blur-2xl" />
      {/* Soft silver-blue blob — bottom center */}
      <div className="animate-drift transform-gpu absolute bottom-[-30%] left-[22%] h-[54vw] w-[54vw] rounded-full bg-[radial-gradient(circle,oklch(0.90_0.04_230_/_0.28),transparent_68%)] blur-2xl" />
      {/* Fade to background at bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_20%,var(--background)_85%)]" />
    </div>
  );
}

/** Thin luminous divider used between sections. */
export function Hairline({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-[linear-gradient(90deg,transparent,oklch(0.78_0.02_220)_18%,color-mix(in_oklab,var(--primary)_40%,transparent)_50%,oklch(0.78_0.02_220)_82%,transparent)]",
        className,
      )}
    />
  );
}
