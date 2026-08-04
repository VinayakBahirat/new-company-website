import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as Magnetic, l as cn, o as Reveal } from "./router-CDQN5hn-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-BgftHy_v.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ children, className, id, bleed = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative scroll-mt-28", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8", bleed && "max-w-none px-0"),
			children
		})
	});
}
function SectionHeading({ eyebrow, title, body, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: cn("eyebrow flex items-center gap-2.5", align === "center" && "justify-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_2px_var(--ring)]" }), eyebrow]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-balance text-3xl font-semibold leading-[1.05] sm:text-4xl md:text-5xl lg:text-[3.4rem]",
					children: title
				})
			}),
			body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .12,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: body
				})
			}) : null
		]
	});
}
function GlassCard({ children, className, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id,
		className: cn("glass-panel relative overflow-hidden rounded-2xl", className),
		children
	});
}
function Pill({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full border border-border bg-glass px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground", className),
		children
	});
}
function CtaLink({ to, children, variant = "primary", className, hash }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
		strength: .22,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			...hash ? { hash } : {},
			className: cn("focus-ring group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300", variant === "primary" ? "bg-primary text-primary-foreground hover:shadow-[0_0_54px_-8px_var(--ring)]" : "border border-border bg-glass text-foreground hover:border-primary/40 hover:bg-primary/8", className),
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
		})
	});
}
function ClosingCta({ eyebrow = "Next step", title = "Let's scope the first milestone.", body = "Bring the problem, the constraints and the deadline. We will come back with an architecture, a plan and a fixed-scope first increment." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-14 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 -top-1/2 h-[120%] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,color-mix(in_oklab,var(--primary)_13%,transparent),transparent_70%)]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: eyebrow
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.05] sm:text-5xl md:text-[3.6rem]",
							children: title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .12,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
							children: body
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .18,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
								to: "/contact",
								children: "Schedule a meeting"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
								to: "/work",
								variant: "ghost",
								children: "See selected work"
							})]
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { Section as a, Pill as i, CtaLink as n, SectionHeading as o, GlassCard as r, ClosingCta as t };
