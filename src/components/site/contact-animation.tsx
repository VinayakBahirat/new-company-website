import { motion } from "framer-motion";
import { MessageSquareCode, FileText, CheckCircle2, ChevronRight, Server, Compass, Network } from "lucide-react";
import { useState, useEffect } from "react";

export function ContactAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const tags = ["AI Platform", "SaaS Infrastructure", "Cloud Database", "Enterprise Core"];

  return (
    <div className="relative h-full w-full bg-surface/20 rounded-[1.8rem] border border-border p-6 flex flex-col justify-between overflow-hidden min-h-[300px] select-none">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,var(--background)_90%)]" />

      {/* Animation Header HUD */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <Network className="h-3.5 w-3.5 text-primary animate-pulse" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary">Brief Synthesis Engine</span>
        </div>
        <span className="font-mono text-[0.55rem] text-muted-foreground/60 bg-white/5 px-2 py-0.5 rounded border border-white/5">
          LIVE COMPILER
        </span>
      </div>

      {/* Main Interactive Visual */}
      <div className="flex-1 flex items-center justify-center relative my-4">
        {/* Connection pipeline path */}
        <svg className="absolute inset-x-0 h-10 w-full pointer-events-none overflow-visible">
          {/* Base pipeline line */}
          <line x1="20%" y1="20" x2="80%" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* Animated data pulses */}
          <motion.circle
            r="3"
            fill="#f59e0b"
            animate={{
              cx: ["20%", "80%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            r="2"
            fill="#6366f1"
            animate={{
              cx: ["20%", "80%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <motion.circle
            r="2"
            fill="#10b981"
            animate={{
              cx: ["20%", "80%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            }}
          />
        </svg>

        {/* Left Side: The Idea/Brief */}
        <motion.div
          className="absolute left-[8%] flex flex-col items-center gap-2 z-10"
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-12 w-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <span className="font-mono text-[0.55rem] text-muted-foreground uppercase">Project Brief</span>
        </motion.div>

        {/* Center: Processing/Synthesis */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="h-10 w-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center">
            <Compass className="h-4 w-4 text-primary/60" />
          </div>
        </motion.div>

        {/* Right Side: Synthesized System */}
        <motion.div
          className="absolute right-[8%] flex flex-col items-center gap-2 z-10"
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-lg backdrop-blur-md">
            <Server className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="font-mono text-[0.55rem] text-emerald-400 uppercase">Architecture</span>
        </motion.div>
      </div>

      {/* Synthesis Output: Simulating text interpretation */}
      <div className="z-10 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[0.55rem] text-muted-foreground">PARSING INPUT...</span>
          <span className="font-mono text-[0.55rem] text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> MATCHED
          </span>
        </div>
        <div className="h-7 relative overflow-hidden">
          {tags.map((tag, idx) => {
            const isActive = step === idx;
            return (
              <motion.div
                key={tag}
                className="absolute inset-x-0 font-display text-xs font-medium text-white/80 flex items-center gap-1.5"
                initial={{ opacity: 0, y: 15 }}
                animate={isActive ? { opacity: 1, y: 4 } : { opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{tag}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
