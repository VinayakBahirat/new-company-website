import { a as __toESM } from "../_runtime.mjs";
import { i as useMotionValue, n as useSpring, o as motion, r as useTransform } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Cpu, E as Cloud, F as ArrowRight, M as BrainCircuit, N as Boxes, T as CodeXml, _ as Layers, c as ShieldCheck, o as Smartphone, r as Workflow, y as Gauge } from "../_libs/lucide-react.mjs";
import { _ as SERVICES, a as Parallax, c as TiltCard, d as DIFFERENTIATORS, f as INDUSTRIES, h as PROJECTS, l as cn, m as PROCESS, n as MeshBackground, o as Reveal, p as METRICS, r as Counter, s as SplitHeading, v as TECH_GROUPS, y as VALUES } from "./router-21v6u0fD.mjs";
import { a as Section, i as Pill, n as CtaLink, o as SectionHeading, r as GlassCard, t as ClosingCta } from "./primitives-DwWnNtZZ.mjs";
import { t as StudioArchitecture } from "./studio-architecture-Bp_n5BlN.mjs";
import { t as MockUi } from "./mock-ui-DM3a5Zh7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DpIfSnta.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Mouse-interactive 3D node lattice rendered on canvas with perspective
* projection. Runs entirely on the client; degrades to an empty canvas on the
* server and pauses when off-screen or when reduced motion is requested.
*/
function NodeField({ className, density = 62, accent = "254, 176, 39" }) {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
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
		const count = window.innerWidth < 768 ? Math.round(density * .55) : density;
		const nodes = Array.from({ length: count }, () => ({
			x: Math.random() * 2 - 1,
			y: Math.random() * 2 - 1,
			z: Math.random() * 2 - 1,
			vx: (Math.random() - .5) * 9e-4,
			vy: (Math.random() - .5) * 9e-4,
			vz: (Math.random() - .5) * 9e-4
		}));
		const pointer = {
			x: 0,
			y: 0,
			tx: 0,
			ty: 0
		};
		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			canvas.width = Math.round(width * dpr);
			canvas.height = Math.round(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const onPointer = (e) => {
			const rect = canvas.getBoundingClientRect();
			pointer.tx = ((e.clientX - rect.left) / rect.width - .5) * 2;
			pointer.ty = ((e.clientY - rect.top) / rect.height - .5) * 2;
		};
		const project = (n, rotY, rotX) => {
			const cy = Math.cos(rotY);
			const sy = Math.sin(rotY);
			const cx = Math.cos(rotX);
			const sx = Math.sin(rotX);
			const x1 = n.x * cy - n.z * sy;
			const z1 = n.x * sy + n.z * cy;
			const y1 = n.y * cx - z1 * sx;
			const scale = 1.9 / (2.6 + (n.y * sx + z1 * cx));
			const radius = Math.min(width, height) * .52;
			return {
				px: width / 2 + x1 * radius * scale * 1.35,
				py: height / 2 + y1 * radius * scale * 1.35,
				depth: scale
			};
		};
		let t = 0;
		const render = () => {
			raf = requestAnimationFrame(render);
			if (!visible) return;
			t += reduced ? 0 : .0016;
			pointer.x += (pointer.tx - pointer.x) * .05;
			pointer.y += (pointer.ty - pointer.y) * .05;
			ctx.clearRect(0, 0, width, height);
			const rotY = t + pointer.x * .55;
			const rotX = Math.sin(t * .6) * .18 + pointer.y * .35;
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
			for (let i = 0; i < projected.length; i++) for (let j = i + 1; j < projected.length; j++) {
				const a = projected[i];
				const b = projected[j];
				const dx = a.px - b.px;
				const dy = a.py - b.py;
				const dist = Math.hypot(dx, dy);
				const max = Math.min(width, height) * .22;
				if (dist < max) {
					const alpha = (1 - dist / max) * .32 * ((a.depth + b.depth) / 2);
					ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
					ctx.lineWidth = .6;
					ctx.beginPath();
					ctx.moveTo(a.px, a.py);
					ctx.lineTo(b.px, b.py);
					ctx.stroke();
				}
			}
			for (const p of projected) {
				const r = Math.max(.7, p.depth * 2.1);
				const alpha = Math.min(1, p.depth * .95);
				ctx.fillStyle = `rgba(${accent},${(alpha * .85).toFixed(3)})`;
				ctx.beginPath();
				ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
				ctx.fill();
				ctx.fillStyle = `rgba(${accent},${(alpha * .09).toFixed(3)})`;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		"aria-hidden": true,
		className: cn("h-full w-full [contain:strict]", className)
	});
}
var CARD = "rounded-[1.1rem] border border-white/[0.06] bg-[#0b0b0b]/90 backdrop-blur-md shadow-xl";
var MONO = "font-mono text-[0.55rem] uppercase tracking-[0.18em] text-[#8B8B8B]";
function Panel({ sx, sy, str, delay, from, cls, children }) {
	const tx = useTransform(sx, (v) => v * str);
	const ty = useTransform(sy, (v) => v * str);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: from.y
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		style: {
			x: tx,
			y: ty
		},
		className: `absolute ${cls}`,
		children
	});
}
function Bar({ label, value, unit, color, barColor, i }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between mb-0.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[0.55rem] text-[#8B8B8B]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: `font-mono text-[0.55rem] ${color}`,
			children: [value, unit]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[2px] w-full rounded-full bg-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: `h-full rounded-full ${barColor}`,
			initial: { width: 0 },
			animate: { width: `${value}%` },
			transition: {
				duration: 1.2,
				delay: .8 + i * .1,
				ease: [
					.16,
					1,
					.3,
					1
				]
			}
		})
	})] });
}
function HeroDashboard() {
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const sx = useSpring(mx, {
		damping: 30,
		stiffness: 180
	});
	const sy = useSpring(my, {
		damping: 30,
		stiffness: 180
	});
	const onMove = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		mx.set((e.clientX - r.left - r.width / 2) / (r.width / 2));
		my.set((e.clientY - r.top - r.height / 2) / (r.height / 2));
	};
	const onLeave = () => {
		mx.set(0);
		my.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[560px] w-full select-none overflow-hidden",
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[100px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				sx,
				sy,
				str: 8,
				delay: .3,
				from: { y: 24 },
				cls: "top-0 right-0 w-[230px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
					dur: 5.5,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${CARD} p-4`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: MONO,
								children: "CI/CD Pipeline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[0.5rem] text-emerald-400",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" }),
									" ",
									"Passing"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: [
								"Build",
								"Tests",
								"Lint",
								"Security Scan",
								"Deploy"
							].map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[0.55rem] mb-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[#8B8B8B]",
									children: name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-primary text-[0.55rem]",
									children: "✓"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-[2px] w-full rounded-full bg-white/5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									animate: { width: "100%" },
									transition: {
										duration: 1,
										delay: .5 + i * .08,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "h-full rounded-full bg-gradient-to-r from-primary to-[#FFE08A]"
								})
							})] }, name))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				sx,
				sy,
				str: 12,
				delay: .4,
				from: { y: 28 },
				cls: "top-2 left-0 w-[220px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
					dur: 6,
					off: .6,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiWorkflow, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				sx,
				sy,
				str: 6,
				delay: .5,
				from: { y: 22 },
				cls: "top-[220px] right-0 w-[220px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
					dur: 7,
					off: 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${CARD} p-4`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: MONO,
								children: "Cluster Metrics"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[0.5rem] text-emerald-400",
								children: "Stable"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									label: "CPU Load",
									value: 62,
									unit: "%",
									color: "text-primary",
									barColor: "bg-primary",
									i: 0
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									label: "Heap",
									value: 45,
									unit: "%",
									color: "text-emerald-400",
									barColor: "bg-emerald-400",
									i: 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									label: "Traffic",
									value: 78,
									unit: "k/s",
									color: "text-sky-400",
									barColor: "bg-sky-400",
									i: 2
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									label: "P99 Lat.",
									value: 30,
									unit: "ms",
									color: "text-primary",
									barColor: "bg-primary",
									i: 3
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				sx,
				sy,
				str: 10,
				delay: .35,
				from: { y: 30 },
				cls: "bottom-0 left-0 w-[235px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
					dur: 8,
					off: 1.5,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				sx,
				sy,
				str: 4,
				delay: .55,
				from: { y: 18 },
				cls: "top-[130px] left-[120px] w-[155px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
					dur: 5.5,
					off: .8,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiLive, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				sx,
				sy,
				str: 7,
				delay: .65,
				from: { y: 22 },
				cls: "bottom-0 right-2 w-[180px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
					dur: 7,
					off: 1.2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${CARD} p-4`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 mb-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: MONO,
								children: "System Shield"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1.5",
							children: [
								{
									label: "Threat Scan",
									status: "Clear"
								},
								{
									label: "SSL / TLS",
									status: "Active"
								},
								{
									label: "Secrets",
									status: "Sealed"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[0.52rem] text-[#8B8B8B]",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1 font-mono text-[0.52rem] text-emerald-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-emerald-400" }), s.status]
								})]
							}, s.label))
						})]
					})
				})
			})
		]
	});
}
/** Subtle continuous Y float */
function Float({ dur, off = 0, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		animate: { y: [
			0,
			-4,
			0
		] },
		transition: {
			duration: dur,
			repeat: Infinity,
			ease: "easeInOut",
			delay: off
		},
		children
	});
}
/** AI pipeline step cycler */
var AI_STEPS = [
	"Retrieve",
	"Rank",
	"Generate",
	"Verify",
	"Response"
];
function AiWorkflow() {
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setActive((p) => (p + 1) % AI_STEPS.length), 1e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${CARD} p-4`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 mb-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: MONO,
				children: "AI Pipeline"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center gap-x-0.5 gap-y-1",
			children: AI_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `rounded px-1.5 py-0.5 font-mono text-[0.5rem] transition-all duration-300 ${i === active ? "bg-primary/20 text-primary font-bold" : i < active ? "text-emerald-400/80" : "text-[#444]"}`,
				children: s
			}), i < AI_STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-[0.45rem] ${i < active ? "text-emerald-400/60" : "text-[#222]"}`,
				children: "→"
			})] }, s))
		})]
	});
}
/** Terminal with typing log lines */
var LOG_LINES = [
	{
		t: "dim",
		msg: "$ git push origin main"
	},
	{
		t: "dim",
		msg: "Building production bundle..."
	},
	{
		t: "green",
		msg: "✓ Build completed in 18.3s"
	},
	{
		t: "dim",
		msg: "Running health checks..."
	},
	{
		t: "green",
		msg: "✓ All 142 tests passed"
	},
	{
		t: "green",
		msg: "✓ Deployed successfully"
	},
	{
		t: "amber",
		msg: "→ Live in production"
	}
];
function Terminal() {
	const [vis, setVis] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		if (vis >= LOG_LINES.length) return;
		const t = setTimeout(() => setVis((p) => p + 1), 600);
		return () => clearTimeout(t);
	}, [vis]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${CARD} p-4`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 mb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-red-500/60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-yellow-500/60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500/60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `ml-1 ${MONO}`,
					children: "deploy.sh"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-0.5 font-mono text-[0.55rem] leading-relaxed min-h-[95px]",
			children: [LOG_LINES.slice(0, vis).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					x: -4
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { duration: .2 },
				className: l.t === "green" ? "text-emerald-400" : l.t === "amber" ? "text-primary" : "text-[#555]",
				children: l.msg
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2.5 w-1 animate-pulse bg-primary" })]
		})]
	});
}
/** Live API counter */
function ApiLive() {
	const [req, setReq] = (0, import_react.useState)(18492);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setReq((p) => p + Math.floor(Math.random() * 4) + 1), 800);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${CARD} p-3.5`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 mb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: MONO,
				children: "API Gateway"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1 font-mono text-[0.55rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#666]",
						children: "Requests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white tabular-nums",
						children: req.toLocaleString()
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#666]",
						children: "Latency"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-emerald-400",
						children: "42ms"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#666]",
						children: "Errors"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "0.02%"
					})]
				})
			]
		})]
	});
}
var SERVICE_ICONS = [
	Layers,
	BrainCircuit,
	Boxes,
	CodeXml,
	Smartphone,
	Cloud,
	Workflow,
	Cpu,
	Gauge
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapabilityGrid, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioIntro, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTimeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustriesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "relative min-h-[100svh] overflow-hidden pb-20 pt-36 sm:pt-44",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 -z-0 opacity-70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-[-10%] top-[6%] h-[92vh] w-[70vw] max-w-[900px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeField, { density: 68 })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-1.5 w-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" })]
						}), "Available for new projects"] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-8 text-[2.6rem] font-semibold leading-[0.96] tracking-[-0.04em] sm:text-6xl lg:text-[5.1rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitHeading, {
								text: "We Build Products That",
								delay: .1
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-amber-gradient",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitHeading, {
								text: "Real Businesses Depend On.",
								delay: .28
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .55,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "We help businesses turn ideas into fast, reliable, and scalable software. From custom web applications and SaaS platforms to AI-powered solutions, we build products that solve real business problems and support long-term growth."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .68,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "mt-10 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/contact",
							children: "Schedule a meeting"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/services",
							variant: "ghost",
							children: "Explore capabilities"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.dl, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: .9
						},
						className: "mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-4 hidden",
						children: METRICS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-background/70 px-5 py-6 backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-2xl font-semibold sm:text-3xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: m.value,
									suffix: m.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1.5 text-xs leading-snug text-muted-foreground",
								children: m.label
							})]
						}, m.label))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroDashboard, {})
				})]
			})
		]
	});
}
function MarqueeStrip() {
	const items = TECH_GROUPS.flatMap((g) => g.items);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden border-y border-border py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-marquee flex w-max gap-10",
				children: [...items, ...items].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-primary/70" }), item]
				}, `${item}-${i}`))
			})
		]
	});
}
function CapabilityGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "capabilities",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Services",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Everything You Need.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
					" One Reliable Team."
				] }),
				body: "Every engagement draws from the same senior bench product engineering, applied AI, infrastructure and design working against a single roadmap."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/services",
					variant: "ghost",
					children: "All services"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: SERVICES.map((service, i) => {
				const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "group h-full rounded-[1.4rem] p-7 transition-colors duration-500 hover:border-primary/25",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-glass text-primary transition-transform duration-500 group-hover:-translate-y-0.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-lg font-semibold",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: service.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2 border-t border-border pt-5",
									children: service.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2.5 text-[0.8rem] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 shrink-0 rounded-full bg-primary" }), p]
									}, p))
								})
							]
						})
					})
				}, service.slug);
			})
		})]
	});
}
function StudioIntro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
				distance: 34,
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioArchitecture, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "The studio",
				title: "We take the parts of a product that are hard to undo.",
				body: "A successful product starts with the right foundation. We take time to understand your business, plan the best solution, and build software that is reliable, scalable, and ready for the future."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-2",
				children: [VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full bg-background/70 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: v.body
						})]
					})
				}, v.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden bg-background/70 p-6 sm:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: " text-primary font-display text-base font-semibold",
						children: "Mission"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: "Helping businesses grow with reliable, high-quality software built for long-term success."
					})]
				})]
			})] })]
		})
	});
}
function ProcessTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "process",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Delivery process",
			title: "A Simple Process. Clear at Every Step.",
			body: "We keep the process simple and transparent, so you always know what we're working on and what comes next."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:block"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 md:gap-x-14",
				children: PROCESS.map((stage, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 2 * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative rounded-2xl border border-border bg-surface/30 p-6 transition-colors duration-400 hover:border-primary/30 hover:bg-surface/60 md:ml-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -left-10 top-7 hidden h-6 w-6 place-items-center rounded-full border border-border bg-background text-[0.6rem] font-medium text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary md:grid",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-primary",
									children: stage.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold",
									children: stage.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 text-sm leading-relaxed text-muted-foreground",
								children: stage.body
							})
						]
					})
				}, stage.step))
			})]
		})]
	});
}
function TechSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "technology",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Technology",
			title: "Technology That Powers Every Solution.",
			body: "We choose proven technologies that help us build secure, fast, and reliable software for every project."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-4 lg:grid-cols-5",
			children: TECH_GROUPS.map((group, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: gi * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "h-full rounded-[1.4rem] p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-sm font-semibold uppercase tracking-[0.14em]",
							children: group.group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.65rem] text-muted-foreground",
							children: String(group.items.length).padStart(2, "0")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-wrap gap-2",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg border border-border bg-glass px-2.5 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground",
							children: item
						}, item))
					})]
				})
			}, group.group))
		})]
	});
}
function WorkPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Work",
				title: "Projects That Deliver Real Results",
				body: "A selection of projects that showcase the types of solutions we build for businesses across different industries."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/work",
					variant: "ghost",
					children: "View all work"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-5 lg:grid-cols-3",
			children: PROJECTS.slice(0, 3).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .07,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					intensity: 6,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "group h-full rounded-[1.6rem] p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-[4/3] overflow-hidden rounded-[1.1rem]",
							children: p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								className: "h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-br ${p.accent}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[oklch(0.1_0_0_/_0.72)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockUi, { name: p.name })
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary",
									children: p.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl font-semibold",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-sm leading-relaxed text-muted-foreground",
									children: p.goal
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center justify-between border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: p.metric
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" })]
								})
							]
						})]
					})
				})
			}, p.slug))
		})]
	});
}
function IndustriesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Industries We Serve",
				title: "Built for Businesses Across Industries",
				body: "Every business is unique, so every solution is tailored to your goals, industry, and challenges."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2.5",
				children: INDUSTRIES.map((industry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .03,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center rounded-xl border border-border bg-glass px-4 py-3 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground",
						children: industry
					})
				}, industry))
			})]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Why teams choose us",
			title: "Why Clients Choose Us.",
			align: "center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-5",
			children: DIFFERENTIATORS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 5 * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group h-full bg-background/70 p-6 transition-colors duration-400 hover:bg-surface/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.65rem] text-primary",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-base font-semibold",
							children: d.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: d.body
						})
					]
				})
			}, d.title))
		})]
	});
}
function StatsBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "rounded-[2rem] p-8 sm:p-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "OUR IMPACT"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold sm:text-4xl",
					children: "Results That Speak for Themselves."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-muted-foreground",
					children: "Real numbers that reflect our experience, successful projects, and commitment to quality."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4",
				children: [
					{
						value: 6,
						suffix: "+",
						label: "Years of engineering"
					},
					{
						value: 50,
						suffix: "+",
						label: "Projects delivered"
					},
					{
						value: 100,
						decimals: 1,
						suffix: "%",
						label: "Client Focus"
					},
					{
						value: 99.98,
						decimals: 2,
						suffix: "%",
						label: "Long-Term Support"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-semibold tracking-tight text-amber-gradient sm:text-5xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							to: s.value,
							suffix: s.suffix,
							decimals: s.decimals ?? 0
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: s.label
					})] })
				}, s.label))
			})]
		})
	});
}
//#endregion
export { HomePage as component };
