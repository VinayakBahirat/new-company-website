import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Node = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
};

/**
 * Mouse-interactive 3D node lattice rendered on canvas with perspective
 * projection. Runs entirely on the client; degrades to an empty canvas on the
 * server and pauses when off-screen or when reduced motion is requested.
 */
export function NodeField({
  className,
  density = 62,
  accent = "254, 176, 39",
}: {
  className?: string;
  density?: number;
  accent?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;

    const count = window.innerWidth < 768 ? Math.round(density * 0.55) : density;
    const nodes: Node[] = Array.from({ length: count }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 2 - 1,
      vx: (Math.random() - 0.5) * 0.0009,
      vy: (Math.random() - 0.5) * 0.0009,
      vz: (Math.random() - 0.5) * 0.0009,
    }));

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const project = (n: Node, rotY: number, rotX: number) => {
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);
      const x1 = n.x * cy - n.z * sy;
      const z1 = n.x * sy + n.z * cy;
      const y1 = n.y * cx - z1 * sx;
      const z2 = n.y * sx + z1 * cx;
      const scale = 1.9 / (2.6 + z2);
      const radius = Math.min(width, height) * 0.52;
      return {
        px: width / 2 + x1 * radius * scale * 1.35,
        py: height / 2 + y1 * radius * scale * 1.35,
        depth: scale,
      };
    };

    let t = 0;
    const render = () => {
      raf = requestAnimationFrame(render);
      if (!visible) return;
      t += reduced ? 0 : 0.0016;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      ctx.clearRect(0, 0, width, height);
      const rotY = t + pointer.x * 0.55;
      const rotX = Math.sin(t * 0.6) * 0.18 + pointer.y * 0.35;

      const projected = nodes.map((n) => {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          n.z += n.vz;
          if (Math.abs(n.x) > 1) n.vx *= -1;
          if (Math.abs(n.y) > 1) n.vy *= -1;
          if (Math.abs(n.z) > 1) n.vz *= -1;
        }
        return project(n, rotY, rotX);
      });

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i]!;
          const b = projected[j]!;
          const dx = a.px - b.px;
          const dy = a.py - b.py;
          const dist = Math.hypot(dx, dy);
          const max = Math.min(width, height) * 0.22;
          if (dist < max) {
            const alpha = (1 - dist / max) * 0.32 * ((a.depth + b.depth) / 2);
            ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.stroke();
          }
        }
      }

      for (const p of projected) {
        const r = Math.max(0.7, p.depth * 2.1);
        const alpha = Math.min(1, p.depth * 0.95);
        ctx.fillStyle = `rgba(${accent},${(alpha * 0.85).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${accent},${(alpha * 0.09).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, r * 5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    render();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    io.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, [density, accent]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("h-full w-full [contain:strict]", className)}
    />
  );
}
