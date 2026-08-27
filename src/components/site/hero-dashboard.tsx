import { useState, useEffect, Fragment } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ShieldCheck } from "lucide-react";

/* ─── Design tokens ───────────────────────────────────────────── */
const CARD =
  "rounded-[1.1rem] border border-blue-100/80 bg-white/90 backdrop-blur-md shadow-lg shadow-blue-100/40";
const MONO =
  "font-mono text-[0.55rem] uppercase tracking-[0.18em] text-slate-400";

/* ─── Parallax wrapper (GPU-accelerated, zero re-renders) ───── */
function Panel({
  sx,
  sy,
  str,
  delay,
  from,
  cls,
  children,
}: {
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  str: number;
  delay: number;
  from: { y: number };
  cls: string;
  children: React.ReactNode;
}) {
  const tx = useTransform(sx, (v) => v * str);
  const ty = useTransform(sy, (v) => v * str);
  return (
    <motion.div
      initial={{ opacity: 0, y: from.y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ x: tx, y: ty }}
      className={`absolute ${cls}`}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated bar helper ─────────────────────────────────────── */
function Bar({
  label,
  value,
  unit,
  color,
  barColor,
  i,
}: {
  label: string;
  value: number;
  unit: string;
  color: string;
  barColor: string;
  i: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-0.5">
        <span className="font-mono text-[0.55rem] text-slate-400">{label}</span>
        <span className={`font-mono text-[0.55rem] ${color}`}>
          {value}
          {unit}
        </span>
      </div>
      <div className="h-[2px] w-full rounded-full bg-slate-100">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1.2,
            delay: 0.8 + i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
/* ─── MAIN EXPORT ─────────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════ */
export function HeroDashboard() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 30, stiffness: 180 });
  const sy = useSpring(my, { damping: 30, stiffness: 180 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) / (r.width / 2));
    my.set((e.clientY - r.top - r.height / 2) / (r.height / 2));
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      className="relative h-[560px] w-full select-none overflow-hidden"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[80px]" />

      {/* ── 1  CI/CD Pipeline  top-right ─────────────────────── */}
      <Panel sx={sx} sy={sy} str={8} delay={0.3} from={{ y: 24 }} cls="top-0 right-0 w-[230px]">
        <Float dur={5.5}>
          <div className={`${CARD} p-4`}>
            <div className="flex items-center justify-between mb-3">
              <span className={MONO}>CI/CD Pipeline</span>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[0.5rem] text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                Passing
              </span>
            </div>
            <div className="space-y-2">
              {["Build", "Tests", "Lint", "Security Scan", "Deploy"].map(
                (name, i) => (
                  <div key={name}>
                    <div className="flex justify-between text-[0.55rem] mb-0.5">
                      <span className="font-mono text-slate-400">{name}</span>
                      <span className="font-mono text-primary text-[0.55rem]">
                        ✓
                      </span>
                    </div>
                    <div className="h-[2px] w-full rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + i * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-sky-300"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </Float>
      </Panel>

      {/* ── 2  AI Workflow  top-left ──────────────────────────── */}
      <Panel sx={sx} sy={sy} str={12} delay={0.4} from={{ y: 28 }} cls="top-2 left-0 w-[220px]">
        <Float dur={6} off={0.6}>
          <AiWorkflow />
        </Float>
      </Panel>

      {/* ── 3  Infrastructure Metrics  mid-right ─────────────── */}
      <Panel sx={sx} sy={sy} str={6} delay={0.5} from={{ y: 22 }} cls="top-[220px] right-0 w-[220px]">
        <Float dur={7} off={1}>
          <div className={`${CARD} p-4`}>
            <div className="flex items-center justify-between mb-2.5">
              <span className={MONO}>Cluster Metrics</span>
              <span className="font-mono text-[0.5rem] text-emerald-600">
                Stable
              </span>
            </div>
            <div className="space-y-2">
              <Bar label="CPU Load" value={62} unit="%" color="text-primary" barColor="bg-primary" i={0} />
              <Bar label="Heap" value={45} unit="%" color="text-emerald-600" barColor="bg-emerald-400" i={1} />
              <Bar label="Traffic" value={78} unit="k/s" color="text-sky-600" barColor="bg-sky-400" i={2} />
              <Bar label="P99 Lat." value={30} unit="ms" color="text-primary" barColor="bg-primary" i={3} />
            </div>
          </div>
        </Float>
      </Panel>

      {/* ── 4  Terminal  bottom-left ──────────────────────────── */}
      <Panel sx={sx} sy={sy} str={10} delay={0.35} from={{ y: 30 }} cls="bottom-0 left-0 w-[235px]">
        <Float dur={8} off={1.5}>
          <Terminal />
        </Float>
      </Panel>

      {/* ── 5  API Gateway  mid-center ───────────────────────── */}
      <Panel sx={sx} sy={sy} str={4} delay={0.55} from={{ y: 18 }} cls="top-[130px] left-[120px] w-[155px]">
        <Float dur={5.5} off={0.8}>
          <ApiLive />
        </Float>
      </Panel>

      {/* ── 6  Security  bottom-right ────────────────────────── */}
      <Panel sx={sx} sy={sy} str={7} delay={0.65} from={{ y: 22 }} cls="bottom-0 right-2 w-[180px]">
        <Float dur={7} off={1.2}>
          <div className={`${CARD} p-4`}>
            <div className="flex items-center gap-1.5 mb-2.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span className={MONO}>System Shield</span>
            </div>
            <div className="space-y-1.5">
              {[
                { label: "Threat Scan", status: "Clear" },
                { label: "SSL / TLS", status: "Active" },
                { label: "Secrets", status: "Sealed" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between"
                >
                  <span className="font-mono text-[0.52rem] text-slate-400">
                    {s.label}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[0.52rem] text-emerald-600">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Float>
      </Panel>
    </div>
  );
}

/* ─── Sub-components ──────────────────────────────────────────── */

/** Subtle continuous Y float */
function Float({
  dur,
  off = 0,
  children,
}: {
  dur: number;
  off?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: dur,
        repeat: Infinity,
        ease: "easeInOut",
        delay: off,
      }}
    >
      {children}
    </motion.div>
  );
}

/** AI pipeline step cycler */
const AI_STEPS = ["Retrieve", "Rank", "Generate", "Verify", "Response"];

function AiWorkflow() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % AI_STEPS.length),
      1000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`${CARD} p-4`}>
      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        <span className={MONO}>AI Pipeline</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-0.5 gap-y-1">
        {AI_STEPS.map((s, i) => (
          <Fragment key={s}>
            <span
              className={`rounded px-1.5 py-0.5 font-mono text-[0.5rem] transition-all duration-300 ${
                i === active
                  ? "bg-primary/15 text-primary font-bold"
                  : i < active
                  ? "text-emerald-600/90"
                  : "text-slate-300"
              }`}
            >
              {s}
            </span>
            {i < AI_STEPS.length - 1 && (
              <span
                className={`text-[0.45rem] ${
                  i < active ? "text-emerald-400/80" : "text-slate-200"
                }`}
              >
                →
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/** Terminal with typing log lines */
const LOG_LINES = [
  { t: "dim", msg: "$ git push origin main" },
  { t: "dim", msg: "Building production bundle..." },
  { t: "green", msg: "✓ Build completed in 18.3s" },
  { t: "dim", msg: "Running health checks..." },
  { t: "green", msg: "✓ All 142 tests passed" },
  { t: "green", msg: "✓ Deployed successfully" },
  { t: "blue", msg: "→ Live in production" },
];

function Terminal() {
  const [vis, setVis] = useState(1);
  useEffect(() => {
    if (vis >= LOG_LINES.length) return;
    const t = setTimeout(() => setVis((p) => p + 1), 600);
    return () => clearTimeout(t);
  }, [vis]);

  return (
    <div className={`${CARD} p-4`}>
      <div className="flex items-center gap-1.5 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        <span className={`ml-1 ${MONO}`}>deploy.sh</span>
      </div>
      <div className="space-y-0.5 font-mono text-[0.55rem] leading-relaxed min-h-[95px]">
        {LOG_LINES.slice(0, vis).map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={
              l.t === "green"
                ? "text-emerald-600"
                : l.t === "blue"
                ? "text-primary"
                : "text-slate-400"
            }
          >
            {l.msg}
          </motion.p>
        ))}
        <span className="inline-block h-2.5 w-1 animate-pulse bg-primary" />
      </div>
    </div>
  );
}

/** Live API counter */
function ApiLive() {
  const [req, setReq] = useState(18492);
  useEffect(() => {
    const t = setInterval(
      () => setReq((p) => p + Math.floor(Math.random() * 4) + 1),
      800
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`${CARD} p-3.5`}>
      <div className="flex items-center gap-1.5 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className={MONO}>API Gateway</span>
      </div>
      <div className="space-y-1 font-mono text-[0.55rem]">
        <div className="flex justify-between">
          <span className="text-slate-400">Requests</span>
          <span className="text-slate-700 tabular-nums">
            {req.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Latency</span>
          <span className="text-emerald-600">42ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Errors</span>
          <span className="text-primary">0.02%</span>
        </div>
      </div>
    </div>
  );
}
