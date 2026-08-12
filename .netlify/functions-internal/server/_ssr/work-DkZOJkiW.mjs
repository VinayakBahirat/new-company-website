import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as TiltCard, h as PROJECTS, n as MeshBackground, o as Reveal } from "./router-21v6u0fD.mjs";
import { a as Section, o as SectionHeading, r as GlassCard, t as ClosingCta } from "./primitives-DwWnNtZZ.mjs";
import { t as MockUi } from "./mock-ui-DM3a5Zh7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-DkZOJkiW.js
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "relative overflow-hidden pb-16 pt-40 sm:pt-48",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Selected work",
					title: "Platforms, products and systems in production.",
					body: "We help startups, SaaS companies, and agencies ship high-quality, production-ready web applications in record time by combining expert human engineering with advanced AI integration. We specialize in React & Next.js frontends, Node.js APIs, and practical AI features that solve real business problems."
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 2 * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						intensity: 5,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "h-full rounded-[1.8rem] p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[16/10] overflow-hidden rounded-[1.3rem]",
								children: p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.name,
									className: "h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-br ${p.accent}` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[oklch(0.1_0_0_/_0.74)]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-30" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockUi, { name: p.name })
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary",
											children: p.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[0.65rem] text-muted-foreground",
											children: p.metric
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-2xl font-semibold",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: p.goal
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-7 grid gap-6 border-t border-border pt-6 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "eyebrow",
											children: "Features"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 space-y-2",
											children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-2.5 text-sm text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" }), f]
											}, f))
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "eyebrow",
											children: "Technology"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 flex flex-wrap gap-2",
											children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "rounded-lg border border-border bg-glass px-2.5 py-1.5 text-xs text-muted-foreground",
												children: t
											}, t))
										})] })]
									})
								]
							})]
						})
					})
				}, p.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {
			eyebrow: "LET'S BUILD TOGETHER",
			title: "Let's Build Something Great Together.",
			body: "Whether you're starting a new project or improving an existing one, we're here to help you build the right solution."
		})
	] });
}
//#endregion
export { WorkPage as component };
