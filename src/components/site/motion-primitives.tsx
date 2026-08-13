import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  type MotionProps,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- Reveal */

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -8% 0px" });
  const Comp = motion[as as "div"] as typeof motion.div;

  return (
    <Comp
      ref={ref}
      initial={{ opacity: 0, y, scale: 0.96, rotateX: 4 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y, scale: 0.96, rotateX: 4 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ transformOrigin: "bottom center", perspective: 1000 }}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------- Character reveal */

export function SplitHeading({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const words = text.split(" ");
  
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "108%", opacity: 0 }}
            animate={mounted ? { y: "0%", opacity: 1 } : { y: "108%", opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* -------------------------------------------------------------- Magnetic */

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
} & MotionProps;

export function Magnetic({ children, className, strength = 0.35, ...rest }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className={cn("inline-flex", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------- TiltCard */

export function TiltCard({
  children,
  className,
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const [glow, setGlow] = useState({ x: 50, y: 50, on: false });

  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * intensity * 2);
    rx.set(-(py - 0.5) * intensity * 2);
    setGlow({ x: px * 100, y: py * 100, on: true });
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
        setGlow((g) => ({ ...g, on: false }));
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      className={cn("relative [transform-style:preserve-3d]", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
        style={{
          opacity: glow.on ? 1 : 0,
          background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 62%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------- Counter */

export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1800,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(to * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------- ScrollProgress */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-primary/80 shadow-[0_0_18px_2px_var(--ring)]"
    />
  );
}

/* ------------------------------------------------------------ CursorGlow */

export function CursorGlow() {
  const x = useSpring(useMotionValue(-500), { stiffness: 120, damping: 22, mass: 0.6 });
  const y = useSpring(useMotionValue(-500), { stiffness: 120, damping: 22, mass: 0.6 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[55] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_11%,transparent)_0%,transparent_62%)] blur-[10px]" />
    </motion.div>
  );
}

/* ------------------------------------------------------------- Parallax */

export function Parallax({
  children,
  distance = 60,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
