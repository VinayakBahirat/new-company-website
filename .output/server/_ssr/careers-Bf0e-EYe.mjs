import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as Clock, P as ArrowUpRight, i as Users, m as MapPin } from "../_libs/lucide-react.mjs";
import { g as ROLES, n as MeshBackground, o as Reveal, y as VALUES } from "./router-BkslOaj1.mjs";
import { a as Section, o as SectionHeading, r as GlassCard, t as ClosingCta } from "./primitives-B5cKq6Mg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-Bf0e-EYe.js
var import_jsx_runtime = require_jsx_runtime();
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "relative overflow-hidden pb-16 pt-40 sm:pt-48",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Careers",
					title: "Join Our Team",
					body: "We're always interested in meeting talented developers who enjoy building high-quality software and solving real business problems."
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: ROLES.map((role, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#apply",
						className: "focus-ring group flex flex-col gap-4 rounded-2xl border border-border bg-surface/30 p-6 transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface/60 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold sm:text-xl",
							children: role.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5 text-primary" }),
										" ",
										role.team
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
										" ",
										role.location
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }),
										" ",
										role.type
									]
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 self-start rounded-xl border border-border bg-glass px-4 py-2.5 text-sm font-semibold transition-colors group-hover:border-primary/40 group-hover:text-primary sm:self-auto",
							children: ["Apply", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})]
					})
				}, role.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "apply",
			className: "py-24 sm:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "How we work",
				title: "Why You'll Love Working Here."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
				children: VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full rounded-2xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: v.body
						})]
					})
				}, v.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {
			eyebrow: "JOIN OUR TEAM",
			title: "Ready to Build Great Software With Us?",
			body: "If you're passionate about solving real problems and building high-quality software, we'd love to hear from you. Even if there's no current opening, feel free to introduce yourself."
		})
	] });
}
//#endregion
export { CareersPage as component };
