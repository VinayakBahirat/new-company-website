import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mock-ui-DM3a5Zh7.js
var import_jsx_runtime = require_jsx_runtime();
function MockUi({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 flex flex-col p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-2 truncate font-mono text-[0.6rem] text-white/45",
					children: [name.toLowerCase().replace(/\s+/g, "-"), ".app"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-1 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden w-1/5 flex-col gap-1.5 rounded-lg bg-white/6 p-2 sm:flex",
				children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-1.5 rounded-full bg-white/15",
					style: { width: `${60 + i * 8}%` }
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-white/6 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-1.5 w-2/3 rounded-full bg-white/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block h-3 w-1/2 rounded bg-primary/60" })]
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex-1 overflow-hidden rounded-lg bg-white/6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 200 80",
						preserveAspectRatio: "none",
						className: "absolute inset-0 h-full w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
							points: "0,64 20,58 40,62 60,44 80,48 100,30 120,36 140,20 160,26 180,12 200,16",
							fill: "none",
							stroke: "var(--primary)",
							strokeWidth: "1.6",
							vectorEffect: "non-scaling-stroke"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
							points: "0,64 20,58 40,62 60,44 80,48 100,30 120,36 140,20 160,26 180,12 200,16 200,80 0,80",
							fill: "color-mix(in oklab, var(--primary) 16%, transparent)"
						})]
					})
				})]
			})]
		})]
	});
}
//#endregion
export { MockUi as t };
