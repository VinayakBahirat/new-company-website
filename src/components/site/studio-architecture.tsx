import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, Layout, Server, Shield, Zap } from "lucide-react";

export function StudioArchitecture() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  // Labels for the layers
  const layers = [
    {
      id: "product",
      title: "03 Product UI & Performance",
      desc: "Pixel-perfect production interface with < 100ms budgets",
      icon: Layout,
      color: "from-amber-400/20 to-orange-500/20",
      borderColor: "border-orange-500/30",
      accentColor: "#f59e0b",
      translateZ: 140,
    },
    {
      id: "logic",
      title: "02 AI Behaviour & Architecture",
      desc: "Robust agentic workflows, prompt routing, caching",
      icon: Cpu,
      color: "from-blue-500/10 to-indigo-600/10",
      borderColor: "border-indigo-500/30",
      accentColor: "#6366f1",
      translateZ: 70,
    },
    {
      id: "substrate",
      title: "01 Substrate & Data Models",
      desc: "Hard-to-undo database relations and infra architecture",
      icon: Database,
      color: "from-emerald-500/10 to-teal-600/10",
      borderColor: "border-emerald-500/30",
      accentColor: "#10b981",
      translateZ: 0,
    },
  ];

  return (
    <div 
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-surface/30 px-4 select-none sm:h-[580px]"
      onMouseEnter={() => setIsContainerHovered(true)}
      onMouseLeave={() => {
        setIsContainerHovered(false);
        setHoveredIndex(null);
      }}
    >
      {/* Background glow and grid */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,var(--background)_90%)]" />

      {/* Layer description HUD (Heads-Up Display) */}
      <div className="absolute top-6 left-6 right-6 z-30 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">System Substrate</span>
          <h4 className="font-display text-lg font-semibold mt-0.5">Decision Architecture</h4>
        </div>
        <div className="overflow-hidden sm:max-w-[280px] md:max-w-[340px] text-left sm:text-right min-h-[2.5rem] flex items-center justify-start sm:justify-end">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null ? (
              <motion.p
                key={hoveredIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-xs text-muted-foreground leading-normal"
              >
                {layers[hoveredIndex].desc}
              </motion.p>
            ) : (
              <motion.p
                key="default"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-xs text-muted-foreground/60 leading-normal"
              >
                Hover layers to inspect system layers
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main 3D Space */}
      <div className="relative flex h-full w-full items-center justify-center" style={{ perspective: 1200 }}>
        <motion.div
          className="relative flex h-[230px] w-[270px] items-center justify-center min-[400px]:h-[280px] min-[400px]:w-[340px] sm:h-[320px] sm:w-[400px]"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: isContainerHovered ? 54 : 48,
            rotateY: 0,
            rotateZ: isContainerHovered ? -38 : -32,
          }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        >
          {/* Vertical alignment guidelines when hovered */}
          {isContainerHovered && (
            <svg className="absolute inset-0 pointer-events-none h-full w-full overflow-visible z-0" style={{ transformStyle: "preserve-3d" }}>
              <motion.line
                x1="20%" y1="20%" x2="20%" y2="20%"
                style={{ transform: "translateZ(0px)" }}
                animate={{ y2: -140 }}
                stroke="rgba(255,255,255,0.12)"
                strokeDasharray="4 4"
                strokeWidth={1.5}
              />
              <motion.line
                x1="80%" y1="20%" x2="80%" y2="20%"
                style={{ transform: "translateZ(0px)" }}
                animate={{ y2: -140 }}
                stroke="rgba(255,255,255,0.12)"
                strokeDasharray="4 4"
                strokeWidth={1.5}
              />
              <motion.line
                x1="50%" y1="80%" x2="50%" y2="80%"
                style={{ transform: "translateZ(0px)" }}
                animate={{ y2: -140 }}
                stroke="rgba(255,255,255,0.12)"
                strokeDasharray="4 4"
                strokeWidth={1.5}
              />
            </svg>
          )}

          {layers.map((layer, index) => {
            const Icon = layer.icon;
            // The separation increases on container hover
            const targetTranslateZ = isContainerHovered ? layer.translateZ : index * 24;
            const isCurrentHovered = hoveredIndex === index;

            return (
              <motion.div
                key={layer.id}
                className="absolute inset-0 cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                animate={{
                  transform: `translateZ(${targetTranslateZ}px) scale(${isCurrentHovered ? 1.04 : 1})`,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 22 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Visual Card */}
                <div
                  className={`relative h-full w-full rounded-2xl border ${layer.borderColor} bg-surface/85 shadow-2xl backdrop-blur-md transition-all duration-300 ${
                    isCurrentHovered ? "bg-surface/95 shadow-orange-500/5 ring-1 ring-white/10" : ""
                  }`}
                >
                  {/* Card Content - Layer specific visual mockups */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl p-4 flex flex-col justify-between">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" style={{ color: layer.accentColor }} />
                        <span className="font-mono text-[0.7rem] font-medium text-white/80">{layer.title}</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      </div>
                    </div>

                    {/* Middle visuals */}
                    <div className="flex-1 py-3 flex items-center justify-center">
                      {layer.id === "product" && (
                        <div className="w-full h-full flex flex-col justify-between gap-2">
                          {/* Mini dashboard visualization */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex-1 bg-white/5 rounded p-1.5 flex flex-col justify-center">
                              <span className="font-mono text-[0.55rem] text-muted-foreground">LATENCY</span>
                              <div className="flex items-baseline gap-1 mt-0.5">
                                <span className="font-display text-xs font-semibold text-emerald-400">42ms</span>
                                <span className="text-[0.5rem] text-emerald-400">↓12%</span>
                              </div>
                            </div>
                            <div className="flex-1 bg-white/5 rounded p-1.5 flex flex-col justify-center">
                              <span className="font-mono text-[0.55rem] text-muted-foreground">FPS RATE</span>
                              <div className="flex items-baseline gap-1 mt-0.5">
                                <span className="font-display text-xs font-semibold text-white">60.0</span>
                                <span className="text-[0.5rem] text-muted-foreground">stable</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 bg-white/5 rounded p-2 relative overflow-hidden flex flex-col justify-between">
                            <div className="flex justify-between items-center z-10">
                              <span className="font-mono text-[0.55rem] text-muted-foreground">PERFORMANCE BUDGET</span>
                              <span className="font-mono text-[0.55rem] text-amber-400 font-semibold">98.4%</span>
                            </div>
                            {/* Animated Mini area graph using SVG */}
                            <svg className="absolute bottom-0 left-0 right-0 h-10 w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                              <defs>
                                <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M 0 35 Q 20 20 40 28 T 80 10 T 100 8 L 100 40 L 0 40 Z"
                                fill="url(#gradient-chart)"
                              />
                              <motion.path
                                d="M 0 35 Q 20 20 40 28 T 80 10 T 100 8"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                              />
                            </svg>
                          </div>
                        </div>
                      )}

                      {layer.id === "logic" && (
                        <div className="w-full h-full flex items-center justify-between gap-2 px-1">
                          {/* Neural-like node diagram with custom SVGs */}
                          <div className="relative w-full h-full flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-lg p-2 overflow-hidden">
                            {/* AI processing pulse */}
                            <svg className="absolute inset-0 h-full w-full">
                              <line x1="20" y1="35" x2="80" y2="15" stroke="rgba(99,102,241,0.2)" strokeWidth={1} />
                              <line x1="20" y1="35" x2="80" y2="55" stroke="rgba(99,102,241,0.2)" strokeWidth={1} />
                              <line x1="80" y1="15" x2="140" y2="35" stroke="rgba(99,102,241,0.2)" strokeWidth={1} />
                              <line x1="80" y1="55" x2="140" y2="35" stroke="rgba(99,102,241,0.2)" strokeWidth={1} />
                              <line x1="140" y1="35" x2="200" y2="35" stroke="rgba(99,102,241,0.2)" strokeWidth={1} />
                              
                              {/* Pulsing particles */}
                              <motion.circle r="2.5" fill="#6366f1"
                                animate={{ cx: [20, 80, 140, 200], cy: [35, 15, 35, 35] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              />
                              <motion.circle r="2.5" fill="#818cf8"
                                animate={{ cx: [20, 80, 140, 200], cy: [35, 55, 35, 35] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                              />
                            </svg>

                            <div className="z-10 flex flex-col justify-between h-full w-full">
                              <div className="flex justify-between items-center">
                                <div className="h-6 w-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                                  <Shield className="h-3 w-3 text-indigo-400" />
                                </div>
                                <div className="h-6 w-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                                  <Zap className="h-3 w-3 text-blue-400" />
                                </div>
                              </div>
                              <div className="flex justify-center items-center">
                                <span className="font-mono text-[0.55rem] text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                                  ROUTING ENGINE
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {layer.id === "substrate" && (
                        <div className="w-full h-full flex flex-col justify-between gap-1">
                          {/* Grid/Database relations */}
                          <div className="flex-1 grid grid-cols-3 gap-1.5">
                            {/* DB Table 1 */}
                            <div className="bg-white/5 border border-white/5 rounded p-1 font-mono text-[0.5rem] flex flex-col gap-0.5">
                              <span className="text-emerald-400 font-semibold border-b border-white/10 pb-0.5 flex items-center gap-0.5">
                                <Server className="h-2 w-2" /> users
                              </span>
                              <span className="text-white/60">id (PK)</span>
                              <span className="text-white/40">org_id (FK)</span>
                              <span className="text-white/40">role</span>
                            </div>
                            
                            {/* DB Table 2 */}
                            <div className="bg-white/5 border border-white/5 rounded p-1 font-mono text-[0.5rem] flex flex-col gap-0.5">
                              <span className="text-emerald-400 font-semibold border-b border-white/10 pb-0.5 flex items-center gap-0.5">
                                <Server className="h-2 w-2" /> orgs
                              </span>
                              <span className="text-white/60">id (PK)</span>
                              <span className="text-white/40">tier</span>
                              <span className="text-white/40">limits</span>
                            </div>

                            {/* DB Table 3 */}
                            <div className="bg-white/5 border border-white/5 rounded p-1 font-mono text-[0.5rem] flex flex-col gap-0.5">
                              <span className="text-emerald-400 font-semibold border-b border-white/10 pb-0.5 flex items-center gap-0.5">
                                <Server className="h-2 w-2" /> billing
                              </span>
                              <span className="text-white/60">id (PK)</span>
                              <span className="text-white/40">user_id (FK)</span>
                              <span className="text-white/40">status</span>
                            </div>
                          </div>

                          <div className="h-4 flex items-center justify-between bg-white/[0.02] border border-white/5 rounded px-2">
                            <span className="font-mono text-[0.5rem] text-emerald-400/80 flex items-center gap-1">
                              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-ping" />
                              POSTGRES CONNECTED
                            </span>
                            <span className="font-mono text-[0.5rem] text-white/30">99.99% SLA</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer label */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-1.5">
                      <span className="font-mono text-[0.55rem] text-muted-foreground uppercase tracking-wider">
                        {layer.id === "product" && "Presentation Layer"}
                        {layer.id === "logic" && "Application Engine"}
                        {layer.id === "substrate" && "Database & Infrastructure"}
                      </span>
                      <span className="font-mono text-[0.55rem] text-white/50">
                        {layer.id === "product" && "0.4s load"}
                        {layer.id === "logic" && "24 threads"}
                        {layer.id === "substrate" && "Replica active"}
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Dynamic Indicators HUD (Bottom Footer of box) */}
      <div className="absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between border-t border-border/40 pt-4">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span className="font-mono text-[0.65rem] text-muted-foreground uppercase tracking-widest">
            {hoveredIndex !== null ? `FOCUSING: ${layers[hoveredIndex].id.toUpperCase()}` : "MONITORING TOPOLOGY"}
          </span>
        </div>
        <span className="font-mono text-[0.65rem] text-muted-foreground/50">V1.0.4 // ISOMETRIC</span>
      </div>
    </div>
  );
}
