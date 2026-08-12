import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as ChevronDown, O as CircleCheck, P as ArrowUpRight, b as FileText, f as Network, h as Mail, j as Check, k as ChevronRight, l as Server, u as Phone, w as Compass } from "../_libs/lucide-react.mjs";
import { _ as SERVICES, n as MeshBackground, o as Reveal, u as COMPANY } from "./router-21v6u0fD.mjs";
import { a as Section, o as SectionHeading, r as GlassCard } from "./primitives-DwWnNtZZ.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bx_xoJKb.js
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
						viewBox: "0 0 400 40",
						className: "absolute inset-x-0 h-10 w-full pointer-events-none overflow-visible",
						preserveAspectRatio: "none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
              @keyframes pulse-dot-1 {
                0%   { cx: 80; opacity: 0; }
                10%  { opacity: 1; }
                80%  { opacity: 1; }
                100% { cx: 320; opacity: 0; }
              }
              @keyframes pulse-dot-2 {
                0%   { cx: 80; opacity: 0; }
                10%  { opacity: 1; }
                80%  { opacity: 1; }
                100% { cx: 320; opacity: 0; }
              }
              @keyframes pulse-dot-3 {
                0%   { cx: 80; opacity: 0; }
                10%  { opacity: 1; }
                80%  { opacity: 1; }
                100% { cx: 320; opacity: 0; }
              }
              .pd1 { animation: pulse-dot-1 2.5s ease-in-out infinite; }
              .pd2 { animation: pulse-dot-2 2.5s ease-in-out 0.8s infinite; }
              .pd3 { animation: pulse-dot-3 2.5s ease-in-out 1.6s infinite; }
            ` }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "80",
								y1: "20",
								x2: "320",
								y2: "20",
								stroke: "rgba(255,255,255,0.06)",
								strokeWidth: "2",
								strokeDasharray: "3 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "pd1",
								r: "3",
								cy: "20",
								cx: "80",
								fill: "#f59e0b"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "pd2",
								r: "2",
								cy: "20",
								cx: "80",
								fill: "#6366f1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "pd3",
								r: "2",
								cy: "20",
								cx: "80",
								fill: "#10b981"
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
/**
* Helper to safely resolve environment variables from import.meta.env or process.env
*/
function getEnvVar(key) {
	if (typeof import.meta !== "undefined" && {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_EMAILJS_PUBLIC_KEY": "fEOtOvX4AQGGxJ56n",
		"VITE_EMAILJS_SERVICE_ID": "service_xaoi3mi",
		"VITE_EMAILJS_TEMPLATE_ID": "template_10dba97"
	}[key]) return {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_EMAILJS_PUBLIC_KEY": "fEOtOvX4AQGGxJ56n",
		"VITE_EMAILJS_SERVICE_ID": "service_xaoi3mi",
		"VITE_EMAILJS_TEMPLATE_ID": "template_10dba97"
	}[key];
	if (typeof process !== "undefined" && process.env && process.env[key]) return process.env[key];
}
/**
* Sends a contact form submission email using EmailJS.
*/
async function sendContactEmail(data) {
	const serviceId = getEnvVar("VITE_EMAILJS_SERVICE_ID") || getEnvVar("EMAILJS_SERVICE_ID");
	const templateId = getEnvVar("VITE_EMAILJS_TEMPLATE_ID") || getEnvVar("EMAILJS_TEMPLATE_ID");
	const publicKey = getEnvVar("VITE_EMAILJS_PUBLIC_KEY") || getEnvVar("EMAILJS_PUBLIC_KEY");
	if (!serviceId || !templateId || !publicKey) {
		const missing = [];
		if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID / EMAILJS_SERVICE_ID");
		if (!templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID / EMAILJS_TEMPLATE_ID");
		if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY / EMAILJS_PUBLIC_KEY");
		console.error(`EmailJS is missing configuration: ${missing.join(", ")}`);
		throw new Error(`EmailJS configuration is missing: ${missing.join(", ")}. Please configure them in your .env file and restart your dev server.`);
	}
	const submissionDate = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZoneName: "short" });
	const templateParams = {
		sender_name: data.name,
		sender_email: data.email,
		phone_number: data.phone || "Not provided",
		company: data.company || "Not provided",
		selected_service: data.scope || "Not provided",
		budget: data.budget || "Not provided",
		message: data.message,
		submission_date: submissionDate
	};
	try {
		const response = await es_default.send(serviceId, templateId, templateParams, publicKey);
		if (response.status !== 200) throw new Error(`EmailJS responded with status code ${response.status}: ${response.text}`);
	} catch (error) {
		console.error("Failed to send email via EmailJS:", error);
		throw error;
	}
}
var FIELD = "w-full rounded-xl border border-border bg-glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring";
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		if (isSubmitting) return;
		setIsSubmitting(true);
		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = formData.get("name");
		const email = formData.get("email");
		const phone = formData.get("phone");
		const company = formData.get("company");
		const budget = formData.get("budget");
		const scope = formData.get("scope");
		const message = formData.get("message");
		try {
			await sendContactEmail({
				name,
				email,
				phone: phone || void 0,
				company: company || void 0,
				budget: budget || void 0,
				scope: scope || void 0,
				message
			});
			toast.success("Message sent successfully!");
			setSent(true);
			form.reset();
		} catch (error) {
			console.error(error);
			toast.error(error.message || "Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"      ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "relative overflow-hidden pb-16 pt-40 sm:pt-48",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Contact",
					title: "Let's build something together.",
					body: "Whether you are an individual with an idea or a company looking to build next-generation software, we'd love to hear from you. You will hear back within one business day."
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
								children: "Thank you. We will get back to you within one business day with next steps."
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
									children: "Email address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									autoComplete: "email",
									className: FIELD,
									placeholder: "you@example.com"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "phone",
									className: "eyebrow mb-2.5 block",
									children: "Phone number (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "phone",
									name: "phone",
									type: "tel",
									className: FIELD,
									placeholder: "Your phone number"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "company",
									className: "eyebrow mb-2.5 block",
									children: "Company (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "company",
									name: "company",
									autoComplete: "organization",
									className: FIELD,
									placeholder: "Company or project name"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
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
												className: "bg-zinc-950 text-muted-foreground",
												children: "Select a range"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "bg-zinc-950 text-white",
												children: "Under $10k"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "bg-zinc-950 text-white",
												children: "$10k – $50k"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "bg-zinc-950 text-white",
												children: "$50k – $150k"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "bg-zinc-950 text-white",
												children: "$150k – $500k"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "bg-zinc-950 text-white",
												children: "$500k+"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "bg-zinc-950 text-white",
												children: "Personal / Undefined"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
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
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												className: "bg-zinc-950 text-muted-foreground",
												children: "Select a capability"
											}),
											SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "bg-zinc-950 text-white",
												children: s.title
											}, s.slug)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "bg-zinc-950 text-white",
												children: "Other / General Inquiry"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "message",
								className: "eyebrow mb-2.5 block",
								children: "Message details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								rows: 6,
								required: true,
								className: `${FIELD} resize-none`,
								placeholder: "Tell us about your project, idea, goals, or any questions you have."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isSubmitting,
								className: "focus-ring group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_54px_-8px_var(--ring)] disabled:opacity-70 disabled:cursor-not-allowed",
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Sending...", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })] })
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${COMPANY.email}`,
									className: "focus-ring flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), COMPANY.email]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`,
									className: "focus-ring flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), COMPANY.phone]
								}) })]
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
				eyebrow: "BEFORE YOU START",
				title: "Questions we are asked most.",
				body: "Everything you need to know before starting a project with us. If your question isn't listed, we're happy to discuss it during a discovery call."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqAccordion, {})]
		})
	] });
}
var FAQ_LIST = [
	{
		q: "How do engagements usually start?",
		a: "Every project begins with a short discovery phase where we understand your business goals, technical constraints, and product vision. You'll receive a clear scope, timeline, architecture direction, and delivery plan before development begins."
	},
	{
		q: "How are teams structured?",
		a: "You work directly with a small senior engineering team. The architects designing your system are the same engineers who build, review, and deploy it, ensuring accountability throughout the project."
	},
	{
		q: "Who owns the code?",
		a: "You do. From the very first commit, repositories, infrastructure, documentation, deployment pipelines, and intellectual property belong entirely to your organization."
	},
	{
		q: "Can you work alongside an in-house team?",
		a: "Yes. We regularly collaborate with internal engineering teams, contributing architecture, development, code reviews, and technical leadership without disrupting existing workflows."
	},
	{
		q: "What technologies do you specialize in?",
		a: "Our core stack includes React, Next.js, TypeScript, Node.js, FastAPI, PostgreSQL, MongoDB, AWS, Docker, CI/CD, and modern AI technologies including OpenAI, Gemini, Retrieval-Augmented Generation (RAG), and workflow automation."
	},
	{
		q: "Do you build AI-powered products?",
		a: "Yes. We build production-ready AI systems including intelligent search, AI assistants, RAG platforms, workflow automation, custom LLM integrations, and enterprise AI applications designed for real business use."
	},
	{
		q: "How long does a typical project take?",
		a: "Project timelines depend on complexity. Most MVPs are delivered within 6–12 weeks, while larger enterprise platforms are planned and released through clearly defined milestones."
	},
	{
		q: "What happens after launch?",
		a: "Our partnership continues after deployment with performance optimization, security updates, infrastructure maintenance, monitoring, feature development, and long-term product support."
	},
	{
		q: "Do you work with startups as well as enterprises?",
		a: "Yes. We work with startups launching new products, growing SaaS companies, digital agencies, and enterprises building or modernizing mission-critical software."
	},
	{
		q: "Can you improve an existing application instead of building from scratch?",
		a: "Absolutely. We modernize legacy applications, improve performance, redesign user experiences, migrate infrastructure, integrate AI capabilities, and scale existing systems without disrupting business operations."
	}
];
function FaqAccordion() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-14 grid gap-4 lg:grid-cols-2 items-start",
		children: FAQ_LIST.map((faq, i) => {
			const isOpen = openIndex === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 2 * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-surface/30 transition-all duration-300 hover:border-primary/20 hover:bg-surface/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-expanded": isOpen,
						"aria-controls": `faq-content-${i}`,
						id: `faq-button-${i}`,
						onClick: () => setOpenIndex(isOpen ? null : i),
						className: "group flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-2xl cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base font-semibold text-foreground",
							children: faq.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-glass transition-colors duration-300 group-hover:border-primary/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								animate: { rotate: isOpen ? 135 : 0 },
								transition: {
									duration: .2,
									ease: "easeInOut"
								},
								className: "relative block h-3 w-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-[5px] h-[2px] w-3 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[5px] top-0 h-3 w-[2px] bg-primary" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							id: `faq-content-${i}`,
							role: "region",
							"aria-labelledby": `faq-button-${i}`,
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							transition: {
								duration: .25,
								ease: "easeInOut"
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-border/50 px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground",
								children: faq.a
							})
						})
					})]
				})
			}, faq.q);
		})
	});
}
//#endregion
export { ContactPage as component };
