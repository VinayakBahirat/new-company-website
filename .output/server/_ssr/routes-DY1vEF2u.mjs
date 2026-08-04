import { a as __toESM } from "../_runtime.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Cpu, E as Cloud, F as ArrowRight, M as BrainCircuit, N as Boxes, T as CodeXml, _ as Layers, c as ShieldCheck, o as Smartphone, r as Workflow, y as Gauge } from "../_libs/lucide-react.mjs";
import { a as Parallax, b as TECH_GROUPS, c as TiltCard, d as DIFFERENTIATORS, g as PROJECTS, h as PROCESS, l as cn, m as METRICS, n as MeshBackground, o as Reveal, p as INDUSTRIES, r as Counter, s as SplitHeading, v as SERVICES, x as VALUES } from "./router-CDQN5hn-.mjs";
import { a as Section, i as Pill, n as CtaLink, o as SectionHeading, r as GlassCard, t as ClosingCta } from "./primitives-BgftHy_v.mjs";
import { t as StudioArchitecture } from "./studio-architecture-Dj9NGask.mjs";
import { t as MockUi } from "./mock-ui-DM3a5Zh7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DY1vEF2u.js
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
		children: [
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
		]
	});
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				children: [
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-1.5 w-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" })]
						}), "Two delivery pods open for Q3"]
					})
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-8 text-[2.6rem] font-semibold leading-[0.96] tracking-[-0.04em] sm:text-6xl lg:text-[5.1rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitHeading, {
							text: "Software that feels",
							delay: .1
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-amber-gradient",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitHeading, {
							text: "engineered, not assembled.",
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
					children: "We help startups, SaaS companies, and agencies ship high-quality, production-ready web applications in record time by combining expert human engineering with advanced AI integration. We specialize in React & Next.js frontends, Node.js APIs, and practical AI features that solve real business problems."
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
					className: "mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-4",
					children: METRICS.map((m) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
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
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPanels, {})
			})]
		})
		]
	});
}
function FloatingPanels() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[520px] [perspective:1400px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 40,
				rotateX: 18,
				rotateY: -18
			},
			animate: {
				opacity: 1,
				y: 0,
				rotateX: 12,
				rotateY: -14
			},
			transition: {
				duration: 1.1,
				delay: .5,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "animate-float-y absolute right-0 top-6 w-[360px] [transform-style:preserve-3d]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "rounded-[1.4rem] p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground",
						children: "deploy · production"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[0.6rem] text-primary",
						children: "passing"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-3",
					children: [
						["build", 100],
						["type-check", 100],
						["test suite", 100],
						["perf budget", 96]
					].map(([label, pct]) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-[0.7rem] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-foreground/80",
								children: [pct, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 h-1 overflow-hidden rounded-full bg-white/8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { width: 0 },
								animate: { width: `${pct}%` },
								transition: {
									duration: 1.4,
									delay: 1,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "h-full rounded-full bg-primary"
							})
						})]
					}, label))
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 60,
				rotateX: 18,
				rotateY: -18
			},
			animate: {
				opacity: 1,
				y: 0,
				rotateX: 10,
				rotateY: -12
			},
			transition: {
				duration: 1.1,
				delay: .72,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "absolute bottom-4 left-0 w-[320px] [transform-style:preserve-3d]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "rounded-[1.4rem] p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground",
					children: "retrieval pipeline"
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2.5 font-mono text-[0.7rem] leading-relaxed",
					children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "embed"
						}), " → chunk(1024) · overlap(128)"]
					}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "search"
						}), " → hybrid(bm25 + vector)"]
					}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "rerank"
						}), " → top_k(8) · threshold(0.72)"]
					}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-foreground/85",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "answer"
						}), " → grounded · cited"]
					})
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center gap-2 border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.7rem] text-muted-foreground",
						children: "Guardrails and evals attached"
					})]
				})
				]
			})
		})]
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
			children: [...items, ...items].map((item, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("span", {
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
				eyebrow: "Capabilities",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
					children: [
						"Nine disciplines,",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
						" one delivery team."
					]
				}),
				body: "Every engagement draws from the same senior bench — product engineering, applied AI, infrastructure and design working against a single roadmap."
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
								children: service.points.map((p) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("li", {
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioArchitecture, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The studio",
					title: "We take the parts of a product that are hard to undo.",
					body: "Architecture, data models, AI behaviour and performance budgets are the decisions that outlive every redesign. That is where our team sits — designing the substrate, then building the product on top of it."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-2",
					children: [VALUES.map((v, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Reveal, {
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
							className: "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary",
							children: "Mission"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: "Make serious software feel effortless for the people who depend on it every day."
						})]
					})]
				})]
			})]
		})
	});
}
function ProcessTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "process",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Delivery process",
			title: "Ten stages. No black boxes.",
			body: "Each stage has an owner, an artefact and an exit criterion. You always know where the work is and what unblocks the next step."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:block"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 md:gap-x-14",
				children: PROCESS.map((stage, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Reveal, {
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
			body: "We would rather know five tools completely than forty superficially. Everything below is in production across active engagements."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-4 lg:grid-cols-5",
			children: TECH_GROUPS.map((group, gi) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Reveal, {
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
						children: group.items.map((item) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("li", {
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
				eyebrow: "Selected work",
				title: "Systems built to be lived in.",
				body: "Representative engagements, anonymised. Names, interfaces and figures are illustrative of the class of problem we take on."
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
			children: PROJECTS.slice(0, 3).map((p, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Reveal, {
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
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
								children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-br ${p.accent}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[oklch(0.1_0_0_/_0.72)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockUi, { name: p.name })
								]
							})
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
				eyebrow: "Industries",
				title: "Regulated, operational, high-consequence.",
				body: "Domains differ; the failure modes rhyme. We adapt to the compliance surface and the vocabulary, not to a template."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2.5",
				children: INDUSTRIES.map((industry, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Reveal, {
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
			title: "Ten commitments we are measured against.",
			align: "center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-5",
			children: DIFFERENTIATORS.map((d, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Reveal, {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "By the numbers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold sm:text-4xl",
						children: "Track record, measured."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-muted-foreground",
					children: "Figures reflect a rolling twelve-month window across active and completed engagements."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4",
				children: [
					{
						value: 11,
						suffix: "+",
						label: "Years of engineering"
					},
					{
						value: 240,
						suffix: "+",
						label: "Projects delivered"
					},
					{
						value: 98.4,
						decimals: 1,
						suffix: "%",
						label: "Partner satisfaction"
					},
					{
						value: 99.98,
						decimals: 2,
						suffix: "%",
						label: "Deployment success"
					}
				].map((s, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl font-semibold tracking-tight text-amber-gradient sm:text-5xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.value,
								suffix: s.suffix,
								decimals: s.decimals ?? 0
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: s.label
						})]
					})
				}, s.label))
			})]
		})
	});
}
//#endregion
export { HomePage as component };
