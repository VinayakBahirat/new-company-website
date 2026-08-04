import { a as __toESM } from "../_runtime.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as ChevronDown, O as CircleCheck, P as ArrowUpRight, b as FileText, f as Network, h as Mail, j as Check, k as ChevronRight, l as Server, m as MapPin, u as Phone, w as Compass } from "../_libs/lucide-react.mjs";
import { f as FAQS, n as MeshBackground, o as Reveal, u as COMPANY, v as SERVICES } from "./router-CDQN5hn-.mjs";
import { a as Section, o as SectionHeading, r as GlassCard } from "./primitives-BgftHy_v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-x9RcQJnC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactAnimation() {
	const [step, setStep] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setStep((prev) => (prev + 1) % 3);
		}, 4500);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full bg-surface/20 rounded-[1.8rem] border border-border p-6 flex flex-col justify-between overflow-hidden min-h-[300px] select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,var(--background)_90%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "h-3.5 w-3.5 text-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary",
						children: "Brief Synthesis Engine"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[0.55rem] text-muted-foreground/60 bg-white/5 px-2 py-0.5 rounded border border-white/5",
					children: "LIVE COMPILER"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex items-center justify-center relative my-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute inset-x-0 h-10 w-full pointer-events-none overflow-visible",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "20%",
								y1: "20",
								x2: "80%",
								y2: "20",
								stroke: "rgba(255,255,255,0.06)",
								strokeWidth: "2",
								strokeDasharray: "3 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
								r: "3",
								fill: "#f59e0b",
								animate: {
									cx: ["20%", "80%"],
									opacity: [
										0,
										1,
										1,
										0
									]
								},
								transition: {
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
								r: "2",
								fill: "#6366f1",
								animate: {
									cx: ["20%", "80%"],
									opacity: [
										0,
										1,
										1,
										0
									]
								},
								transition: {
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: .8
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
								r: "2",
								fill: "#10b981",
								animate: {
									cx: ["20%", "80%"],
									opacity: [
										0,
										1,
										1,
										0
									]
								},
								transition: {
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1.6
								}
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "absolute left-[8%] flex flex-col items-center gap-2 z-10",
						animate: { y: [
							0,
							-4,
							0
						] },
						transition: {
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.55rem] text-muted-foreground uppercase",
							children: "Project Brief"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10",
						animate: { rotate: 360 },
						transition: {
							duration: 20,
							repeat: Infinity,
							ease: "linear"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-10 w-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-4 w-4 text-primary/60" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "absolute right-[8%] flex flex-col items-center gap-2 z-10",
						animate: { y: [
							0,
							4,
							0
						] },
						transition: {
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 2
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-lg backdrop-blur-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-5 w-5 text-emerald-400" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.55rem] text-emerald-400 uppercase",
							children: "Architecture"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "z-10 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.55rem] text-muted-foreground",
						children: "PARSING INPUT..."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[0.55rem] text-emerald-400 flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " MATCHED"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-7 relative overflow-hidden",
					children: [
						"AI Platform",
						"SaaS Infrastructure",
						"Cloud Database",
						"Enterprise Core"
					].map((tag, idx) => {
						const isActive = step === idx;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "absolute inset-x-0 font-display text-xs font-medium text-white/80 flex items-center gap-1.5",
							initial: {
								opacity: 0,
								y: 15
							},
							animate: isActive ? {
								opacity: 1,
								y: 4
							} : {
								opacity: 0,
								y: -15
							},
							transition: { duration: .4 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tag })]
						}, tag);
					})
				})]
			})
		]
	});
}
var FIELD = "w-full rounded-xl border border-border bg-glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring";
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "relative overflow-hidden pb-16 pt-40 sm:pt-48",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Contact",
					title: "Tell us what needs to exist.",
					body: "Share the problem, the constraints and the deadline. You will hear back within one business day from an engineer, not a form autoresponder."
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
					className: "rounded-[1.8rem] p-7 sm:p-10",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-[420px] flex-col items-center justify-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-2xl font-semibold",
								children: "Message received"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground",
								children: "Thank you. A delivery lead will reply within one business day with next steps and a proposed discovery window."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "grid gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "name",
									className: "eyebrow mb-2.5 block",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									name: "name",
									required: true,
									autoComplete: "name",
									className: FIELD,
									placeholder: "Your name"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "email",
									className: "eyebrow mb-2.5 block",
									children: "Work email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									autoComplete: "email",
									className: FIELD,
									placeholder: "you@company.com"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "company",
									className: "eyebrow mb-2.5 block",
									children: "Company"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "company",
									name: "company",
									autoComplete: "organization",
									className: FIELD,
									placeholder: "Company name"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "budget",
									className: "eyebrow mb-2.5 block",
									children: "Budget range"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "budget",
										name: "budget",
										className: `${FIELD} appearance-none pr-10`,
										defaultValue: "",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Select a range"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Under $50k" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$50k – $150k" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$150k – $500k" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$500k+" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "scope",
								className: "eyebrow mb-2.5 block",
								children: "What do you need built?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "scope",
									name: "scope",
									className: `${FIELD} appearance-none pr-10`,
									defaultValue: "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select a capability"
									}), SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.title }, s.slug))]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "message",
								className: "eyebrow mb-2.5 block",
								children: "Project details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								rows: 6,
								required: true,
								className: `${FIELD} resize-none`,
								placeholder: "The system, the users, the constraints and the deadline."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "focus-ring group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_54px_-8px_var(--ring)]",
								children: ["Send project brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						]
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "rounded-[1.8rem] p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "eyebrow",
								children: "Direct lines"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-5 space-y-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${COMPANY.email}`,
										className: "focus-ring flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), COMPANY.email]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`,
										className: "focus-ring flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), COMPANY.phone]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), COMPANY.address]
									})
								]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .12,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAnimation, {})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-24 sm:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Before you write",
				title: "Questions we are asked most."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 lg:grid-cols-2",
				children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 2 * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-border bg-surface/30 p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: f.a
						})]
					})
				}, f.q))
			})]
		})
	] });
}
//#endregion
export { ContactPage as component };
