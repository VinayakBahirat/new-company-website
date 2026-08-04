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
		"mtime": "2026-08-04T09:21:28.187Z",
		"size": 51413,
		"path": "../public/assets/Alice-Doremi-CKtkP-M9.jpg"
	},
	"/assets/careers-DJJ17pVp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5a-0+IH1uPKaDnHjAQUMpcakrrnT0M\"",
		"mtime": "2026-08-04T09:21:28.179Z",
		"size": 3162,
		"path": "../public/assets/careers-DJJ17pVp.js"
	},
	"/assets/Bell-Holme-AXs3Y5RG.jpg": {
		"type": "image/jpeg",
		"etag": "\"f072-qxJOlid4M7aQX6/H2yTScfQdUNo\"",
		"mtime": "2026-08-04T09:21:28.187Z",
		"size": 61554,
		"path": "../public/assets/Bell-Holme-AXs3Y5RG.jpg"
	},
	"/assets/Choose-Your-Attitude-c1xuL856.jpg": {
		"type": "image/jpeg",
		"etag": "\"191e0-UfhP06Ri3u++uZGAd46k/anGVOo\"",
		"mtime": "2026-08-04T09:21:28.188Z",
		"size": 102880,
		"path": "../public/assets/Choose-Your-Attitude-c1xuL856.jpg"
	},
	"/assets/contact-BwbMv5W_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e57-AXEUhXoFyn4gF5bz4/wJzXH+Q/0\"",
		"mtime": "2026-08-04T09:21:28.181Z",
		"size": 11863,
		"path": "../public/assets/contact-BwbMv5W_.js"
	},
	"/assets/Evenskyn-Beauty-V4Q1_TwP.jpg": {
		"type": "image/jpeg",
		"etag": "\"1561a-u5PcVzGn655S5agxFJQqsNy1PIo\"",
		"mtime": "2026-08-04T09:21:28.189Z",
		"size": 87578,
		"path": "../public/assets/Evenskyn-Beauty-V4Q1_TwP.jpg"
	},
	"/assets/map-pin-lIpzo2rG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-hLuhF6KKLy30+axNIiGwyTnpaLE\"",
		"mtime": "2026-08-04T09:21:28.181Z",
		"size": 248,
		"path": "../public/assets/map-pin-lIpzo2rG.js"
	},
	"/assets/mock-ui-CsNzSvWK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"730-/pWeeMUyAfthlW2ft/MpCpIHo9s\"",
		"mtime": "2026-08-04T09:21:28.182Z",
		"size": 1840,
		"path": "../public/assets/mock-ui-CsNzSvWK.js"
	},
	"/assets/Norsu-Home-BZLwGQR9.jpg": {
		"type": "image/jpeg",
		"etag": "\"12e67-UMTRILmNzlJ3oQYMhGq3Dq7ZiFA\"",
		"mtime": "2026-08-04T09:21:28.191Z",
		"size": 77415,
		"path": "../public/assets/Norsu-Home-BZLwGQR9.jpg"
	},
	"/assets/primitives-Co0dVyuw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d74-v3sFk0lUCIjBoeh71WgH0XpRWNw\"",
		"mtime": "2026-08-04T09:21:28.183Z",
		"size": 3444,
		"path": "../public/assets/primitives-Co0dVyuw.js"
	},
	"/assets/routes-DG11xztQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"583e-fR3pLRwhAN2Tm9UzoLmonk2VDU0\"",
		"mtime": "2026-08-04T09:21:28.183Z",
		"size": 22590,
		"path": "../public/assets/routes-DG11xztQ.js"
	},
	"/assets/server-CugiCer1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"147-WmfZAGlXOh+uR4lfRn4aiccu3vY\"",
		"mtime": "2026-08-04T09:21:28.184Z",
		"size": 327,
		"path": "../public/assets/server-CugiCer1.js"
	},
	"/assets/Rugna-Adhaar-Foundation-Website-DqomdtAn.avif": {
		"type": "image/avif",
		"etag": "\"16157-r3tavLNPu/TktSxsgftq2Iqw/yE\"",
		"mtime": "2026-08-04T09:21:28.192Z",
		"size": 90455,
		"path": "../public/assets/Rugna-Adhaar-Foundation-Website-DqomdtAn.avif"
	},
	"/assets/services-CQAfRPLH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b5d-PzJOc9+EUONAI/NdXCDojl+Mcmw\"",
		"mtime": "2026-08-04T09:21:28.184Z",
		"size": 2909,
		"path": "../public/assets/services-CQAfRPLH.js"
	},
	"/assets/Six-Vintage-Rugs-BbTyu1j2.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b7c7-E5Pj4plHfGzEoT8qf7Qu1ibCRSs\"",
		"mtime": "2026-08-04T09:21:28.192Z",
		"size": 112583,
		"path": "../public/assets/Six-Vintage-Rugs-BbTyu1j2.jpg"
	},
	"/assets/studio-ZKvmDShh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"108e-ABCVpyQXE+zKu1DvLOMMziMhnKo\"",
		"mtime": "2026-08-04T09:21:28.185Z",
		"size": 4238,
		"path": "../public/assets/studio-ZKvmDShh.js"
	},
	"/assets/studio-architecture-Ck9_GZol.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"366e-Z6PhBb0qfl3eo6WYIJqcmQ1gIDk\"",
		"mtime": "2026-08-04T09:21:28.185Z",
		"size": 13934,
		"path": "../public/assets/studio-architecture-Ck9_GZol.js"
	},
	"/assets/The-Skintessa-Opirfw3C.jpg": {
		"type": "image/jpeg",
		"etag": "\"9e0b-Ly+7r+8pcFWtcaff8uNtDikCWFg\"",
		"mtime": "2026-08-04T09:21:28.194Z",
		"size": 40459,
		"path": "../public/assets/The-Skintessa-Opirfw3C.jpg"
	},
	"/assets/The-Nick-Strand-DeJqWyGL.jpg": {
		"type": "image/jpeg",
		"etag": "\"1041e-AZEOa/ZQmjS/KDH3r7WayHHbw1w\"",
		"mtime": "2026-08-04T09:21:28.194Z",
		"size": 66590,
		"path": "../public/assets/The-Nick-Strand-DeJqWyGL.jpg"
	},
	"/assets/styles-CJynofHF.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1c4ed-y1Yx3AOu/BOwEdpYgMKUe2nnkdY\"",
		"mtime": "2026-08-04T09:21:28.196Z",
		"size": 115949,
		"path": "../public/assets/styles-CJynofHF.css"
	},
	"/assets/index-D2JpVSDo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"895b5-VYOomlaW+LbfEQ7vPh2SgTjA3XA\"",
		"mtime": "2026-08-04T09:21:28.179Z",
		"size": 562613,
		"path": "../public/assets/index-D2JpVSDo.js"
	},
	"/assets/Jamea-Saifiyah-Business-School-DLzI-0gS.png": {
		"type": "image/png",
		"etag": "\"c7ee2-GlmoWzp/8PispQBYYl34G9XEsk8\"",
		"mtime": "2026-08-04T09:21:28.190Z",
		"size": 818914,
		"path": "../public/assets/Jamea-Saifiyah-Business-School-DLzI-0gS.png"
	},
	"/assets/MenuMuse-FlkV_64J.png": {
		"type": "image/png",
		"etag": "\"1254d2-x9kAEbf5atN5Rfth2k9Z6iWfBjg\"",
		"mtime": "2026-08-04T09:21:28.191Z",
		"size": 1201362,
		"path": "../public/assets/MenuMuse-FlkV_64J.png"
	},
	"/assets/SparkFuture-Technologies-D_mBX-ZT.png": {
		"type": "image/png",
		"etag": "\"133d54-DhXB43HbjkezX0XCJIYlfauSIUE\"",
		"mtime": "2026-08-04T09:21:28.193Z",
		"size": 1260884,
		"path": "../public/assets/SparkFuture-Technologies-D_mBX-ZT.png"
	},
	"/assets/work-CS9h6PvM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c35-hYG/RQKIFMbAeA6wgg7I7HcRVhA\"",
		"mtime": "2026-08-04T09:21:28.186Z",
		"size": 3125,
		"path": "../public/assets/work-CS9h6PvM.js"
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
