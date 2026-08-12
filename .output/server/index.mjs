globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"50272-C8gXjHTnRTTJdUoIq+cGy9CsNgk\"",
		"mtime": "2026-08-05T10:34:29.259Z",
		"size": 328306,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-03T18:22:42.952Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/Alice-Doremi-CKtkP-M9.jpg": {
		"type": "image/jpeg",
		"etag": "\"c8d5-+IW9qzuKE73K6asfCk54JnOl16s\"",
		"mtime": "2026-08-12T19:40:34.983Z",
		"size": 51413,
		"path": "../public/assets/Alice-Doremi-CKtkP-M9.jpg"
	},
	"/assets/Choose-Your-Attitude-c1xuL856.jpg": {
		"type": "image/jpeg",
		"etag": "\"191e0-UfhP06Ri3u++uZGAd46k/anGVOo\"",
		"mtime": "2026-08-12T19:40:34.983Z",
		"size": 102880,
		"path": "../public/assets/Choose-Your-Attitude-c1xuL856.jpg"
	},
	"/assets/Bell-Holme-AXs3Y5RG.jpg": {
		"type": "image/jpeg",
		"etag": "\"f072-qxJOlid4M7aQX6/H2yTScfQdUNo\"",
		"mtime": "2026-08-12T19:40:34.983Z",
		"size": 61554,
		"path": "../public/assets/Bell-Holme-AXs3Y5RG.jpg"
	},
	"/assets/Evenskyn-Beauty-V4Q1_TwP.jpg": {
		"type": "image/jpeg",
		"etag": "\"1561a-u5PcVzGn655S5agxFJQqsNy1PIo\"",
		"mtime": "2026-08-12T19:40:34.983Z",
		"size": 87578,
		"path": "../public/assets/Evenskyn-Beauty-V4Q1_TwP.jpg"
	},
	"/assets/mock-ui-BYzmnOQ4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"730-sLHMt0+OtyEHSfOjKclDunKZ6ZU\"",
		"mtime": "2026-08-12T19:40:34.977Z",
		"size": 1840,
		"path": "../public/assets/mock-ui-BYzmnOQ4.js"
	},
	"/assets/careers-D-db4-25.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"33bd-EQt0AOTrk1edL4XTlRE1VfO0Q7Y\"",
		"mtime": "2026-08-12T19:40:34.977Z",
		"size": 13245,
		"path": "../public/assets/careers-D-db4-25.js"
	},
	"/assets/contact-BtmP87yS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43de-nDFZ2cvR5Ub1srJVybI24Z+4faQ\"",
		"mtime": "2026-08-12T19:40:34.977Z",
		"size": 17374,
		"path": "../public/assets/contact-BtmP87yS.js"
	},
	"/assets/Norsu-Home-BZLwGQR9.jpg": {
		"type": "image/jpeg",
		"etag": "\"12e67-UMTRILmNzlJ3oQYMhGq3Dq7ZiFA\"",
		"mtime": "2026-08-12T19:40:34.983Z",
		"size": 77415,
		"path": "../public/assets/Norsu-Home-BZLwGQR9.jpg"
	},
	"/assets/primitives-BwSLxH9z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d7f-RjY6qhN47PWFb/UkOjnfBO/aJZE\"",
		"mtime": "2026-08-12T19:40:34.977Z",
		"size": 3455,
		"path": "../public/assets/primitives-BwSLxH9z.js"
	},
	"/assets/server-33uQ1Bm1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"147-0BELfnsk9FhYyPFcQdnYj4ft5ec\"",
		"mtime": "2026-08-12T19:40:34.981Z",
		"size": 327,
		"path": "../public/assets/server-33uQ1Bm1.js"
	},
	"/assets/Six-Vintage-Rugs-BbTyu1j2.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b7c7-E5Pj4plHfGzEoT8qf7Qu1ibCRSs\"",
		"mtime": "2026-08-12T19:40:34.983Z",
		"size": 112583,
		"path": "../public/assets/Six-Vintage-Rugs-BbTyu1j2.jpg"
	},
	"/assets/services-DdQwft4C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c21-s4jbHo2KFtRuNvYhdJJLsayUqKc\"",
		"mtime": "2026-08-12T19:40:34.981Z",
		"size": 3105,
		"path": "../public/assets/services-DdQwft4C.js"
	},
	"/assets/routes-Dji4i4uY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d7f-191qO5ZtJ2jjpDDwH/kxEORm+a8\"",
		"mtime": "2026-08-12T19:40:34.981Z",
		"size": 28031,
		"path": "../public/assets/routes-Dji4i4uY.js"
	},
	"/assets/studio-architecture-B7V47RYD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"369c-vzsvbSMbA8fRJcDTkKwnn2GY8lY\"",
		"mtime": "2026-08-12T19:40:34.981Z",
		"size": 13980,
		"path": "../public/assets/studio-architecture-B7V47RYD.js"
	},
	"/assets/studio-BzcXlk0i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f38-1LtH5xX81PihzgtvELmyHRTTqC0\"",
		"mtime": "2026-08-12T19:40:34.981Z",
		"size": 3896,
		"path": "../public/assets/studio-BzcXlk0i.js"
	},
	"/assets/The-Nick-Strand-DeJqWyGL.jpg": {
		"type": "image/jpeg",
		"etag": "\"1041e-AZEOa/ZQmjS/KDH3r7WayHHbw1w\"",
		"mtime": "2026-08-12T19:40:34.983Z",
		"size": 66590,
		"path": "../public/assets/The-Nick-Strand-DeJqWyGL.jpg"
	},
	"/assets/The-Skintessa-Opirfw3C.jpg": {
		"type": "image/jpeg",
		"etag": "\"9e0b-Ly+7r+8pcFWtcaff8uNtDikCWFg\"",
		"mtime": "2026-08-12T19:40:34.983Z",
		"size": 40459,
		"path": "../public/assets/The-Skintessa-Opirfw3C.jpg"
	},
	"/assets/styles-DnX6TbSx.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1d219-ZU4PnXeIwT9nXewFBAu7wsmZQTs\"",
		"mtime": "2026-08-12T19:40:34.987Z",
		"size": 119321,
		"path": "../public/assets/styles-DnX6TbSx.css"
	},
	"/assets/select-D7e4-8W6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b950-i5x01Sqo3OfT/meHW443Ww/nGF8\"",
		"mtime": "2026-08-12T19:40:34.981Z",
		"size": 112976,
		"path": "../public/assets/select-D7e4-8W6.js"
	},
	"/assets/work-CuQvLaO4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd7-PLAhZZgj56vY+t5YQ4f4/YBdtIQ\"",
		"mtime": "2026-08-12T19:40:34.983Z",
		"size": 3031,
		"path": "../public/assets/work-CuQvLaO4.js"
	},
	"/assets/index-Qb6jCbe4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"88542-wLvTjT/MAPThnOnMcjRgwq03Z5I\"",
		"mtime": "2026-08-12T19:40:34.977Z",
		"size": 558402,
		"path": "../public/assets/index-Qb6jCbe4.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_HYRTr7 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_HYRTr7
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
