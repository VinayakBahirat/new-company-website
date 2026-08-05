import { a as __toESM } from "../_runtime.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Cpu, S as Database, d as PanelsTopLeft, l as Server, s as Shield, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-architecture-Bp_n5BlN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudioArchitecture() {
	const [hoveredIndex, setHoveredIndex] = (0, import_react.useState)(null);
	const [isContainerHovered, setIsContainerHovered] = (0, import_react.useState)(false);
	const layers = [
		{
			id: "product",
			title: "03 Product UI & Performance",
			desc: "Pixel-perfect production interface with < 100ms budgets",
			icon: PanelsTopLeft,
			color: "from-amber-400/20 to-orange-500/20",
			borderColor: "border-orange-500/30",
			accentColor: "#f59e0b",
			translateZ: 140
		},
		{
			id: "logic",
			title: "02 AI Behaviour & Architecture",
			desc: "Robust agentic workflows, prompt routing, caching",
			icon: Cpu,
			color: "from-blue-500/10 to-indigo-600/10",
			borderColor: "border-indigo-500/30",
			accentColor: "#6366f1",
			translateZ: 70
		},
		{
			id: "substrate",
			title: "01 Substrate & Data Models",
			desc: "Hard-to-undo database relations and infra architecture",
			icon: Database,
			color: "from-emerald-500/10 to-teal-600/10",
			borderColor: "border-emerald-500/30",
			accentColor: "#10b981",
			translateZ: 0
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-surface/30 px-4 select-none sm:h-[580px]",
		onMouseEnter: () => setIsContainerHovered(true),
		onMouseLeave: () => {
			setIsContainerHovered(false);
			setHoveredIndex(null);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,var(--background)_90%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-6 left-6 right-6 z-30 flex flex-col justify-between gap-2 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary",
					children: "System Substrate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg font-semibold mt-0.5",
					children: "Decision Architecture"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden sm:max-w-[280px] md:max-w-[340px] text-left sm:text-right min-h-[2.5rem] flex items-center justify-start sm:justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: hoveredIndex !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								y: 20,
								opacity: 0
							},
							animate: {
								y: 0,
								opacity: 1
							},
							exit: {
								y: -20,
								opacity: 0
							},
							transition: { duration: .2 },
							className: "font-mono text-xs text-muted-foreground leading-normal",
							children: layers[hoveredIndex].desc
						}, hoveredIndex) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								y: 20,
								opacity: 0
							},
							animate: {
								y: 0,
								opacity: 1
							},
							exit: {
								y: -20,
								opacity: 0
							},
							transition: { duration: .2 },
							className: "font-mono text-xs text-muted-foreground/60 leading-normal",
							children: "Hover layers to inspect system layers"
						}, "default")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex h-full w-full items-center justify-center",
				style: { perspective: 1200 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "relative flex h-[230px] w-[270px] items-center justify-center min-[400px]:h-[280px] min-[400px]:w-[340px] sm:h-[320px] sm:w-[400px]",
					style: { transformStyle: "preserve-3d" },
					animate: {
						rotateX: isContainerHovered ? 54 : 48,
						rotateY: 0,
						rotateZ: isContainerHovered ? -38 : -32
					},
					transition: {
						type: "spring",
						stiffness: 90,
						damping: 20
					},
					children: [isContainerHovered && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute inset-0 pointer-events-none h-full w-full overflow-visible z-0",
						style: { transformStyle: "preserve-3d" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
								x1: "20%",
								y1: "20%",
								x2: "20%",
								y2: "20%",
								style: { transform: "translateZ(0px)" },
								animate: { y2: -140 },
								stroke: "rgba(255,255,255,0.12)",
								strokeDasharray: "4 4",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
								x1: "80%",
								y1: "20%",
								x2: "80%",
								y2: "20%",
								style: { transform: "translateZ(0px)" },
								animate: { y2: -140 },
								stroke: "rgba(255,255,255,0.12)",
								strokeDasharray: "4 4",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
								x1: "50%",
								y1: "80%",
								x2: "50%",
								y2: "80%",
								style: { transform: "translateZ(0px)" },
								animate: { y2: -140 },
								stroke: "rgba(255,255,255,0.12)",
								strokeDasharray: "4 4",
								strokeWidth: 1.5
							})
						]
					}), layers.map((layer, index) => {
						const Icon = layer.icon;
						const targetTranslateZ = isContainerHovered ? layer.translateZ : index * 24;
						const isCurrentHovered = hoveredIndex === index;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute inset-0 cursor-pointer",
							style: {
								transformStyle: "preserve-3d",
								backfaceVisibility: "hidden"
							},
							animate: { transform: `translateZ(${targetTranslateZ}px) scale(${isCurrentHovered ? 1.04 : 1})` },
							transition: {
								type: "spring",
								stiffness: 120,
								damping: 22
							},
							onMouseEnter: () => setHoveredIndex(index),
							onMouseLeave: () => setHoveredIndex(null),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `relative h-full w-full rounded-2xl border ${layer.borderColor} bg-surface/85 shadow-2xl backdrop-blur-md transition-all duration-300 ${isCurrentHovered ? "bg-surface/95 shadow-orange-500/5 ring-1 ring-white/10" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 overflow-hidden rounded-2xl p-4 flex flex-col justify-between",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-white/5 pb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "h-4 w-4",
													style: { color: layer.accentColor }
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[0.7rem] font-medium text-white/80",
													children: layer.title
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white/20" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white/20" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white/20" })
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 py-3 flex items-center justify-center",
											children: [
												layer.id === "product" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "w-full h-full flex flex-col justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 bg-white/5 rounded p-1.5 flex flex-col justify-center",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono text-[0.55rem] text-muted-foreground",
																children: "LATENCY"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-baseline gap-1 mt-0.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-display text-xs font-semibold text-emerald-400",
																	children: "42ms"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[0.5rem] text-emerald-400",
																	children: "↓12%"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 bg-white/5 rounded p-1.5 flex flex-col justify-center",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono text-[0.55rem] text-muted-foreground",
																children: "FPS RATE"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-baseline gap-1 mt-0.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-display text-xs font-semibold text-white",
																	children: "60.0"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[0.5rem] text-muted-foreground",
																	children: "stable"
																})]
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 bg-white/5 rounded p-2 relative overflow-hidden flex flex-col justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between items-center z-10",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono text-[0.55rem] text-muted-foreground",
																children: "PERFORMANCE BUDGET"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono text-[0.55rem] text-amber-400 font-semibold",
																children: "98.4%"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
															className: "absolute bottom-0 left-0 right-0 h-10 w-full overflow-visible",
															preserveAspectRatio: "none",
															viewBox: "0 0 100 40",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
																	id: "gradient-chart",
																	x1: "0",
																	y1: "0",
																	x2: "0",
																	y2: "1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
																		offset: "0%",
																		stopColor: "#f59e0b",
																		stopOpacity: "0.25"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
																		offset: "100%",
																		stopColor: "#f59e0b",
																		stopOpacity: "0"
																	})]
																}) }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																	d: "M 0 35 Q 20 20 40 28 T 80 10 T 100 8 L 100 40 L 0 40 Z",
																	fill: "url(#gradient-chart)"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
																	d: "M 0 35 Q 20 20 40 28 T 80 10 T 100 8",
																	fill: "none",
																	stroke: "#f59e0b",
																	strokeWidth: "1.5",
																	initial: { pathLength: 0 },
																	animate: { pathLength: 1 },
																	transition: {
																		duration: 1.5,
																		repeat: Infinity,
																		repeatType: "reverse"
																	}
																})
															]
														})]
													})]
												}),
												layer.id === "logic" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-full h-full flex items-center justify-between gap-2 px-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "relative w-full h-full flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-lg p-2 overflow-hidden",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
															className: "absolute inset-0 h-full w-full",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
																	x1: "20",
																	y1: "35",
																	x2: "80",
																	y2: "15",
																	stroke: "rgba(99,102,241,0.2)",
																	strokeWidth: 1
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
																	x1: "20",
																	y1: "35",
																	x2: "80",
																	y2: "55",
																	stroke: "rgba(99,102,241,0.2)",
																	strokeWidth: 1
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
																	x1: "80",
																	y1: "15",
																	x2: "140",
																	y2: "35",
																	stroke: "rgba(99,102,241,0.2)",
																	strokeWidth: 1
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
																	x1: "80",
																	y1: "55",
																	x2: "140",
																	y2: "35",
																	stroke: "rgba(99,102,241,0.2)",
																	strokeWidth: 1
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
																	x1: "140",
																	y1: "35",
																	x2: "200",
																	y2: "35",
																	stroke: "rgba(99,102,241,0.2)",
																	strokeWidth: 1
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
																	r: "2.5",
																	fill: "#6366f1",
																	animate: {
																		cx: [
																			20,
																			80,
																			140,
																			200
																		],
																		cy: [
																			35,
																			15,
																			35,
																			35
																		]
																	},
																	transition: {
																		duration: 3,
																		repeat: Infinity,
																		ease: "linear"
																	}
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
																	r: "2.5",
																	fill: "#818cf8",
																	animate: {
																		cx: [
																			20,
																			80,
																			140,
																			200
																		],
																		cy: [
																			35,
																			55,
																			35,
																			35
																		]
																	},
																	transition: {
																		duration: 3,
																		repeat: Infinity,
																		ease: "linear",
																		delay: 1.5
																	}
																})
															]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "z-10 flex flex-col justify-between h-full w-full",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex justify-between items-center",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "h-6 w-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3 w-3 text-indigo-400" })
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "h-6 w-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3 text-blue-400" })
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex justify-center items-center",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-mono text-[0.55rem] text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20",
																	children: "ROUTING ENGINE"
																})
															})]
														})]
													})
												}),
												layer.id === "substrate" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "w-full h-full flex flex-col justify-between gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 grid grid-cols-3 gap-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "bg-white/5 border border-white/5 rounded p-1 font-mono text-[0.5rem] flex flex-col gap-0.5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "text-emerald-400 font-semibold border-b border-white/10 pb-0.5 flex items-center gap-0.5",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-2 w-2" }), " users"]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-white/60",
																		children: "id (PK)"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-white/40",
																		children: "org_id (FK)"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-white/40",
																		children: "role"
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "bg-white/5 border border-white/5 rounded p-1 font-mono text-[0.5rem] flex flex-col gap-0.5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "text-emerald-400 font-semibold border-b border-white/10 pb-0.5 flex items-center gap-0.5",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-2 w-2" }), " orgs"]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-white/60",
																		children: "id (PK)"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-white/40",
																		children: "tier"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-white/40",
																		children: "limits"
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "bg-white/5 border border-white/5 rounded p-1 font-mono text-[0.5rem] flex flex-col gap-0.5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "text-emerald-400 font-semibold border-b border-white/10 pb-0.5 flex items-center gap-0.5",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-2 w-2" }), " billing"]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-white/60",
																		children: "id (PK)"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-white/40",
																		children: "user_id (FK)"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-white/40",
																		children: "status"
																	})
																]
															})
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "h-4 flex items-center justify-between bg-white/[0.02] border border-white/5 rounded px-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-mono text-[0.5rem] text-emerald-400/80 flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-emerald-400 animate-ping" }), "POSTGRES CONNECTED"]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[0.5rem] text-white/30",
															children: "99.99% SLA"
														})]
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-t border-white/5 pt-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-[0.55rem] text-muted-foreground uppercase tracking-wider",
												children: [
													layer.id === "product" && "Presentation Layer",
													layer.id === "logic" && "Application Engine",
													layer.id === "substrate" && "Database & Infrastructure"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-[0.55rem] text-white/50",
												children: [
													layer.id === "product" && "0.4s load",
													layer.id === "logic" && "24 threads",
													layer.id === "substrate" && "Replica active"
												]
											})]
										})
									]
								})
							})
						}, layer.id);
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between border-t border-border/40 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.65rem] text-muted-foreground uppercase tracking-widest",
						children: hoveredIndex !== null ? `FOCUSING: ${layers[hoveredIndex].id.toUpperCase()}` : "MONITORING TOPOLOGY"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[0.65rem] text-muted-foreground/50",
					children: "V1.0.4 // ISOMETRIC"
				})]
			})
		]
	});
}
//#endregion
export { StudioArchitecture as t };
