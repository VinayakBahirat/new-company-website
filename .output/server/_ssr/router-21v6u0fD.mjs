import { a as __toESM } from "../_runtime.mjs";
import { a as useScroll, c as performance_default, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { P as ArrowUpRight, a as Twitter, g as Linkedin, n as X, p as Menu, v as Github, x as Dribbble } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-21v6u0fD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-AuyAe2zT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var Choose_Your_Attitude_default = "/assets/Choose-Your-Attitude-c1xuL856.jpg";
var Evenskyn_Beauty_default = "/assets/Evenskyn-Beauty-V4Q1_TwP.jpg";
var Six_Vintage_Rugs_default = "/assets/Six-Vintage-Rugs-BbTyu1j2.jpg";
var Norsu_Home_default = "/assets/Norsu-Home-BZLwGQR9.jpg";
var The_Nick_Strand_default = "/assets/The-Nick-Strand-DeJqWyGL.jpg";
var The_Skintessa_default = "/assets/The-Skintessa-Opirfw3C.jpg";
var Bell_Holme_default = "/assets/Bell-Holme-AXs3Y5RG.jpg";
var Alice_Doremi_default = "/assets/Alice-Doremi-CKtkP-M9.jpg";
var MenuMuse_default = "/assets/MenuMuse-FlkV_64J.png";
var SparkFuture_Technologies_default = "/assets/SparkFuture-Technologies-D_mBX-ZT.png";
var Jamea_Saifiyah_Business_School_default = "/assets/Jamea-Saifiyah-Business-School-DLzI-0gS.png";
var Rugna_Adhaar_Foundation_Website_default = "/assets/Rugna-Adhaar-Foundation-Website-DqomdtAn.avif";
var COMPANY = {
	name: "Aeriform Systems",
	short: "Aeriform",
	tagline: "We help businesses build fast, reliable, and scalable software that solves real problems. From web applications to AI-powered solutions, we turn ideas into products people love to use.",
	email: "studio@aeriform.systems",
	phone: "+91 7709044575",
	address: "Pier 9, Innovation Quarter, San Francisco, CA",
	hq: "San Francisco · Amsterdam · Singapore"
};
var NAV_LINKS = [
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Work",
		to: "/work"
	},
	{
		label: "Studio",
		to: "/studio"
	},
	{
		label: "Careers",
		to: "/careers"
	}
];
var METRICS = [
	{
		value: 11,
		suffix: "+",
		label: "Years of shipping code"
	},
	{
		value: 240,
		suffix: "+",
		label: "Production builds shipped"
	},
	{
		value: 68,
		suffix: "",
		label: "Senior engineers on staff"
	},
	{
		value: 19,
		suffix: "",
		label: "Countries served globally"
	}
];
var SERVICES = [
	{
		slug: "enterprise",
		title: "Enterprise Software",
		summary: "Custom software built to streamline operations, improve efficiency, and support your business as it grows.",
		points: [
			"Business Process Automation",
			"Secure Access Control",
			"Scalable Architecture"
		]
	},
	{
		slug: "ai",
		title: "AI Product Development",
		summary: "AI-powered solutions that automate tasks, improve decision-making, and create better customer experiences.",
		points: [
			"AI Chatbots",
			"Workflow Automation",
			"Custom AI Solutions"
		]
	},
	{
		slug: "saas",
		title: "SaaS Platform Engineering",
		summary: "Scalable SaaS platforms built for subscription businesses, secure user management, and long-term growth.",
		points: [
			"Multi-Tenant Architecture",
			"Subscription & Billing",
			"User Management"
		]
	},
	{
		slug: "web",
		title: "Custom Web Applications",
		summary: "Fast, secure, and user-friendly web applications tailored to your business needs.",
		points: [
			"Responsive Design",
			"High Performance",
			"Secure Development"
		]
	},
	{
		slug: "mobile",
		title: "Mobile Applications",
		summary: "Cross-platform mobile apps that deliver a smooth experience on both Android and iOS.",
		points: [
			"Android & iOS Apps",
			"Offline Support",
			"App Store Deployment"
		]
	},
	{
		slug: "cloud",
		title: "Cloud & Platform Ops",
		summary: "Reliable cloud infrastructure that keeps your applications secure, scalable, and always available.",
		points: [
			"Cloud Deployment",
			"CI/CD Automation",
			"Infrastructure Management"
		]
	},
	{
		slug: "automation",
		title: "Automation Systems",
		summary: "Automate repetitive tasks and business workflows to save time, reduce errors, and improve productivity.",
		points: [
			"Workflow Automation",
			"Process Optimization",
			"Smart Notifications"
		]
	},
	{
		slug: "api",
		title: "API & Backend Engineering",
		summary: "Secure and scalable APIs that connect your applications, automate data flow, and support business growth.",
		points: [
			"API Development",
			"System Integration",
			"Secure Data Flow"
		]
	},
	{
		slug: "performance",
		title: "Performance Optimization",
		summary: "Improve the speed, reliability, and performance of your existing software for a better user experience.",
		points: [
			"Faster Loading",
			"Better Performance",
			"Optimized Code"
		]
	}
];
var PROCESS = [
	{
		step: "01",
		title: "Discovery",
		body: "Every successful project starts with understanding your business, goals, and challenges."
	},
	{
		step: "02",
		title: "Planning",
		body: "A clear roadmap with realistic timelines, budgets, and milestones keeps every project on track."
	},
	{
		step: "03",
		title: "UX Research",
		body: "Understanding your users helps create experiences that are simple, intuitive, and effective."
	},
	{
		step: "04",
		title: "Wireframes",
		body: "Simple layouts help visualize the product and validate ideas before development begins."
	},
	{
		step: "05",
		title: "UI Design",
		body: "Clean, modern designs that are easy to use and create a great experience for your customers."
	},
	{
		step: "06",
		title: "Architecture",
		body: "A strong foundation ensures your software is reliable, scalable, and ready for future growth."
	},
	{
		step: "07",
		title: "Development",
		body: "Your project is built step by step, with regular updates so you can track progress throughout the development process."
	},
	{
		step: "08",
		title: "Testing",
		body: "Every feature is carefully tested to make sure your software is reliable, secure, and ready for launch."
	},
	{
		step: "09",
		title: "Deployment",
		body: "Your software is launched smoothly with minimal disruption, ensuring everything works as expected from day one."
	},
	{
		step: "10",
		title: "Maintenance",
		body: "Regular updates and ongoing support keep your software secure, reliable, and ready as your business grows."
	}
];
var TECH_GROUPS = [
	{
		group: "Frontend",
		items: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Three.js",
			"React Three Fiber",
			"Framer Motion"
		]
	},
	{
		group: "Backend",
		items: [
			"Node.js",
			"Express",
			"FastAPI"
		]
	},
	{
		group: "Data",
		items: [
			"PostgreSQL",
			"MongoDB",
			"Vector Search"
		]
	},
	{
		group: "Cloud",
		items: [
			"AWS",
			"Docker",
			"CI/CD"
		]
	},
	{
		group: "AI",
		items: [
			"OpenAI",
			"Gemini",
			"LLM Systems",
			"RAG",
			"Prompt Engineering",
			"AI Automation"
		]
	}
];
var INDUSTRIES = [
	"Healthcare",
	"Finance",
	"Education",
	"Retail",
	"Manufacturing",
	"Real Estate",
	"Artificial Intelligence",
	"Logistics",
	"Travel",
	"Startups",
	"Enterprise"
];
var VALUES = [
	{
		title: "Smart Planning",
		body: "Every successful project starts with a clear plan. We understand your goals, identify the right solution, and build it the right way from the beginning."
	},
	{
		title: "Quality You Can Trust",
		body: "We focus on quality from start to finish, delivering reliable software that performs well today and is easy to improve in the future."
	},
	{
		title: "Clear Communication",
		body: "We keep you informed at every stage with clear updates, realistic timelines, and honest communication."
	},
	{
		title: "Ongoing Support",
		body: "Our support doesn't end after launch. We help keep your software secure, updated, and running smoothly as your business grows."
	},
	{
		title: "A True Partnership",
		body: "We work closely with your team, understand your goals, and stay involved throughout the project to deliver the best results."
	}
];
var DIFFERENTIATORS = [
	{
		title: "Fast Delivery",
		body: "We deliver your project quickly without compromising on quality, so you can start seeing results sooner."
	},
	{
		title: "Built for Growth",
		body: "Architectures shaped for the traffic spikes when your business takes off."
	},
	{
		title: "Reliable Technology",
		body: "We use trusted technologies to build reliable software that is easy to maintain and ready for future growth"
	},
	{
		title: "Experienced Team",
		body: "Work directly with experienced developers who stay involved throughout your project from start to finish."
	},
	{
		title: "Transparent Pipelines",
		body: "Regular updates and clear communication keep you informed throughout every stage of your project."
	},
	{
		title: "Long-Term Partnership",
		body: "We build software that's easy to maintain, improve, and grow as your business evolves."
	},
	{
		title: "High Performance",
		body: "Fast, reliable software that delivers a smooth experience for your users as your business grows."
	},
	{
		title: "Easy to Maintain",
		body: "Your software is built to be easy to maintain, update, and improve as your business grows."
	},
	{
		title: "Security First",
		body: "Security is built into every project to help protect your business, data, and customers."
	},
	{
		title: "Clean Codebase",
		body: "Codebases that are easy to understand, easy to test, and easy to extend."
	}
];
var PROJECTS = [
	{
		slug: "choose-your-attitude",
		name: "Choose Your Attitude",
		category: "Shopify / Store Setup",
		goal: "Built and optimized a complete Shopify store with custom theme development, product management, and enhanced user experience.",
		tech: [
			"Liquid",
			"JavaScript",
			"CSS3"
		],
		features: [
			"Custom theme development",
			"Product management integration",
			"Optimized checkout experience"
		],
		metric: "Shopify Store",
		image: Choose_Your_Attitude_default,
		accent: "from-[oklch(0.8_0.12_75)] to-[oklch(0.6_0.14_45)]"
	},
	{
		slug: "evenskyn-beauty",
		name: "Evenskyn Beauty",
		category: "Shopify / Store Optimization",
		goal: "Enhanced Shopify store performance with custom integrations, payment gateway setup, and inventory management optimization.",
		tech: [
			"Shopify Apps",
			"Custom Scripts",
			"Liquid"
		],
		features: [
			"Performance optimization",
			"Payment gateway integration",
			"Inventory management"
		],
		metric: "Shopify Store",
		image: Evenskyn_Beauty_default,
		accent: "from-[oklch(0.7_0.15_255)] to-[oklch(0.55_0.16_300)]"
	},
	{
		slug: "six-vintage-rugs",
		name: "Six Vintage Rugs",
		category: "Shopify / Custom eCommerce",
		goal: "Developed unique eCommerce experience with advanced product filtering, custom checkout flow, and responsive design.",
		tech: [
			"Liquid",
			"JavaScript",
			"Responsive Design"
		],
		features: [
			"Advanced product filtering",
			"Custom checkout flow",
			"Responsive layouts"
		],
		metric: "Shopify Store",
		image: Six_Vintage_Rugs_default,
		accent: "from-[oklch(0.72_0.14_165)] to-[oklch(0.55_0.12_200)]"
	},
	{
		slug: "norsu-home",
		name: "Norsu Home",
		category: "Shopify / Theme Customization",
		goal: "Customized Shopify theme with focus on performance optimization, SEO improvements, and enhanced product presentation.",
		tech: [
			"Liquid",
			"SEO Optimization",
			"Custom CSS"
		],
		features: [
			"Theme customization",
			"SEO improvements",
			"Product presentation design"
		],
		metric: "Shopify Store",
		image: Norsu_Home_default,
		accent: "from-[oklch(0.78_0.12_95)] to-[oklch(0.6_0.13_60)]"
	},
	{
		slug: "the-nick-strand",
		name: "The Nick Strand",
		category: "Squarespace / Full Site Development",
		goal: "Designed and developed professional Squarespace website with custom styling, responsive layouts, and optimized user experience.",
		tech: [
			"Squarespace",
			"Custom CSS",
			"JavaScript"
		],
		features: [
			"Custom Squarespace styling",
			"Responsive layout system",
			"Optimized user experience"
		],
		metric: "Squarespace Site",
		image: The_Nick_Strand_default,
		accent: "from-[oklch(0.75_0.13_20)] to-[oklch(0.55_0.15_350)]"
	},
	{
		slug: "the-skintessa",
		name: "The Skintessa",
		category: "Squarespace / Design & Customization",
		goal: "Created elegant Squarespace website with custom design elements, booking integration, and mobile-optimized experience.",
		tech: [
			"Squarespace",
			"Custom Design",
			"Responsive"
		],
		features: [
			"Booking workflow integration",
			"Custom design elements",
			"Mobile performance tuning"
		],
		metric: "Squarespace Site",
		image: The_Skintessa_default,
		accent: "from-[oklch(0.68_0.11_230)] to-[oklch(0.5_0.1_265)]"
	},
	{
		slug: "bell-holme",
		name: "Bell Holme",
		category: "WordPress / Development",
		goal: "Developed custom WordPress site with optimized performance, SEO implementation, and responsive design across all devices.",
		tech: [
			"WordPress",
			"PHP",
			"Custom Plugins"
		],
		features: [
			"Custom WordPress architecture",
			"SEO implementation",
			"Responsive cross-device UI"
		],
		metric: "WordPress Site",
		image: Bell_Holme_default,
		accent: "from-[oklch(0.74_0.12_120)] to-[oklch(0.56_0.14_150)]"
	},
	{
		slug: "alice-doremi",
		name: "Alice Doremi",
		category: "WordPress / Optimization",
		goal: "Enhanced WordPress website with performance optimization, custom theme modifications, and improved user interface.",
		tech: [
			"WordPress",
			"Custom Themes",
			"SEO"
		],
		features: [
			"Speed and load time optimization",
			"Theme modifications",
			"Improved navigation & UI"
		],
		metric: "WordPress Site",
		image: Alice_Doremi_default,
		accent: "from-[oklch(0.81_0.13_110)] to-[oklch(0.63_0.15_80)]"
	},
	{
		slug: "menumuse",
		name: "MenuMuse",
		category: "Next.js / Web App",
		goal: "A digital menu platform that helps businesses create and share interactive menus, pricing, and dishes videos through a QR Code, improving customer experience and engagement.",
		tech: [
			"Next.js",
			"Responsive design",
			"GSAP",
			"SEO",
			"Web app",
			"Prismic io",
			"Vercel"
		],
		features: [
			"QR Code menu sharing",
			"Interactive dish videos",
			"Real-time pricing dashboard"
		],
		metric: "Next.js Web App",
		image: MenuMuse_default,
		accent: "from-[oklch(0.85_0.14_85)] to-[oklch(0.7_0.15_55)]"
	},
	{
		slug: "sparkfuture",
		name: "SparkFuture Technologies",
		category: "Next.js / Web Development",
		goal: "A modern technology solutions company offering web, mobile, and software development services, focused on helping businesses enhance their digital presence, streamline operations, and achieve scalable growth.",
		tech: [
			"Next.js",
			"Responsive design",
			"GSAP",
			"SEO",
			"Web development",
			"Github Action",
			"CI/CD Development"
		],
		features: [
			"Service portfolio showcases",
			"Automated deployment pipelines",
			"High-performance marketing pages"
		],
		metric: "Next.js Site",
		image: SparkFuture_Technologies_default,
		accent: "from-[oklch(0.75_0.15_230)] to-[oklch(0.6_0.15_260)]"
	},
	{
		slug: "jsbs",
		name: "Jamea Saifiyah Business School",
		category: "Next.js / Web Portal",
		goal: "An institution that provides quality education in business and management, rooted in the principles of the Islamic ethos.",
		tech: [
			"Bootstrap",
			"CSS",
			"Next.js",
			"Vite",
			"SASS/SCSS"
		],
		features: [
			"Business curriculum modules",
			"Islamic ethos business case studies",
			"Performance-optimized static generation"
		],
		metric: "Next.js Portal",
		image: Jamea_Saifiyah_Business_School_default,
		accent: "from-[oklch(0.78_0.11_140)] to-[oklch(0.58_0.13_175)]"
	},
	{
		slug: "rugna-adhaar",
		name: "Rugna Adhaar Foundation Website",
		category: "Next.js / Frontend & Payment",
		goal: "A website built for Rugna Adhaar Foundation — providing support services and community outreach via a modern frontend, payment integration and automated tax receipt via email to donor.",
		tech: [
			"Next.js",
			"Bootstrap",
			"Razorpay",
			"Automated Email Receipt",
			"Smtp Integration"
		],
		features: [
			"Razorpay payment gateway",
			"Automated 80G tax receipt email",
			"Community outreach dynamic pages"
		],
		metric: "Next.js Website",
		image: Rugna_Adhaar_Foundation_Website_default,
		accent: "from-[oklch(0.75_0.13_30)] to-[oklch(0.55_0.15_5)]"
	}
];
var ROLES = [
	{
		title: "Senior Product Engineer",
		team: "Product",
		location: "Remote · EU / US",
		type: "Full-time"
	},
	{
		title: "AI Systems Engineer",
		team: "Applied AI",
		location: "San Francisco / Remote",
		type: "Full-time"
	},
	{
		title: "Platform & Cloud Engineer",
		team: "Infrastructure",
		location: "Amsterdam / Remote",
		type: "Full-time"
	},
	{
		title: "Senior Product Designer",
		team: "Design",
		location: "Remote · Global",
		type: "Full-time"
	},
	{
		title: "Engineering Manager",
		team: "Delivery",
		location: "Singapore / Remote",
		type: "Full-time"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, delay = 0, y = 26, className, as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-12% 0px -8% 0px"
	});
	const Comp = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		ref,
		initial: {
			opacity: 0,
			y,
			scale: .96,
			rotateX: 4
		},
		animate: inView ? {
			opacity: 1,
			y: 0,
			scale: 1,
			rotateX: 0
		} : {
			opacity: 0,
			y,
			scale: .96,
			rotateX: 4
		},
		transition: {
			duration: .8,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className,
		style: {
			transformOrigin: "bottom center",
			perspective: 1e3
		},
		children
	});
}
function SplitHeading({ text, className, delay = 0 }) {
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-block", className),
		children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden pb-[0.12em] align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "inline-block",
				initial: {
					y: "108%",
					opacity: 0
				},
				animate: {
					y: "0%",
					opacity: 1
				},
				transition: {
					duration: .95,
					delay: delay + i * .055,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				children: [word, i < words.length - 1 ? "\xA0" : ""]
			})
		}, `${word}-${i}`))
	});
}
function Magnetic({ children, className, strength = .35, ...rest }) {
	const ref = (0, import_react.useRef)(null);
	const x = useSpring(useMotionValue(0), {
		stiffness: 220,
		damping: 18,
		mass: .4
	});
	const y = useSpring(useMotionValue(0), {
		stiffness: 220,
		damping: 18,
		mass: .4
	});
	const onMove = (event) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
		y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onPointerMove: onMove,
		onPointerLeave: () => {
			x.set(0);
			y.set(0);
		},
		style: {
			x,
			y
		},
		className: cn("inline-flex", className),
		...rest,
		children
	});
}
function TiltCard({ children, className, intensity = 8 }) {
	const ref = (0, import_react.useRef)(null);
	const rx = useSpring(useMotionValue(0), {
		stiffness: 180,
		damping: 20
	});
	const ry = useSpring(useMotionValue(0), {
		stiffness: 180,
		damping: 20
	});
	const [glow, setGlow] = (0, import_react.useState)({
		x: 50,
		y: 50,
		on: false
	});
	const onMove = (event) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const px = (event.clientX - rect.left) / rect.width;
		const py = (event.clientY - rect.top) / rect.height;
		ry.set((px - .5) * intensity * 2);
		rx.set(-(py - .5) * intensity * 2);
		setGlow({
			x: px * 100,
			y: py * 100,
			on: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		onPointerMove: onMove,
		onPointerLeave: () => {
			rx.set(0);
			ry.set(0);
			setGlow((g) => ({
				...g,
				on: false
			}));
		},
		style: {
			rotateX: rx,
			rotateY: ry,
			transformPerspective: 1100
		},
		className: cn("relative [transform-style:preserve-3d]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300",
			style: {
				opacity: glow.on ? 1 : 0,
				background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 62%)`
			}
		}), children]
	});
}
function Counter({ to, suffix = "", prefix = "", decimals = 0, duration = 1800 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-10%"
	});
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let frame = 0;
		const start = performance_default.now();
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 4);
			setValue(to * eased);
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [
			prefix,
			value.toFixed(decimals),
			suffix
		]
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 26,
		mass: .3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		style: { scaleX },
		className: "fixed inset-x-0 top-0 z-[60] h-px origin-left bg-primary/80 shadow-[0_0_18px_2px_var(--ring)]"
	});
}
function CursorGlow() {
	const x = useSpring(useMotionValue(-500), {
		stiffness: 120,
		damping: 22,
		mass: .6
	});
	const y = useSpring(useMotionValue(-500), {
		stiffness: 120,
		damping: 22,
		mass: .6
	});
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(pointer: fine)").matches) return;
		setEnabled(true);
		const onMove = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, [x, y]);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		style: {
			x,
			y
		},
		className: "pointer-events-none fixed left-0 top-0 z-[55] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_11%,transparent)_0%,transparent_62%)] blur-[10px]" })
	});
}
function Parallax({ children, distance = 60, className }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		style: { y },
		className,
		children
	});
}
function Logotype({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative grid h-8 w-8 place-items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-[10px] bg-[conic-gradient(from_140deg,color-mix(in_oklab,var(--primary)_90%,transparent),transparent_55%,color-mix(in_oklab,var(--primary)_70%,transparent))] opacity-80 blur-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "relative h-8 w-8",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "1",
						y: "1",
						width: "30",
						height: "30",
						rx: "9",
						fill: "oklch(0.14 0 0)",
						stroke: "oklch(1 0 0 / 0.14)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M16 7.5 24.5 24h-4.9L16 16.2 12.4 24H7.5L16 7.5Z",
						fill: "var(--primary)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "21",
						r: "1.9",
						fill: "oklch(0.14 0 0)"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-[0.95rem] font-semibold tracking-tight",
			children: [COMPANY.short, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: ".systems"
			})]
		})]
	});
}
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8", scrolled ? "py-3" : "py-5"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500", scrolled ? "glass-panel" : "border border-transparent"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "focus-ring rounded-lg",
						"aria-label": `${COMPANY.name} home`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logotype, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						"aria-label": "Primary",
						children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "focus-ring relative rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
							activeProps: { className: "text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-4 after:rounded-full after:bg-primary" },
							children: link.label
						}, link.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
							strength: .25,
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "focus-ring group inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_40px_-6px_var(--ring)]",
								children: ["Start a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-label": open ? "Close menu" : "Open menu",
							className: "focus-ring grid h-10 w-10 place-items-center rounded-xl border border-border bg-glass text-foreground lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -12
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -12
			},
			transition: {
				duration: .28,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "mx-5 rounded-2xl glass-panel p-3 lg:hidden",
			children: [...NAV_LINKS, {
				label: "Contact",
				to: "/contact"
			}].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: link.to,
				className: "focus-ring flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-foreground/85 transition-colors hover:bg-glass",
				activeProps: { className: "bg-primary/10 text-primary font-semibold" },
				children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground" })]
			}, link.to))
		}) : null })]
	});
}
/**
* Layered ambient background: animated gradient mesh + grid + vignette.
* Pure CSS, GPU-composited transforms only.
*/
function MeshBackground({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: cn("pointer-events-none absolute inset-0 overflow-hidden", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-[0.55] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,black,transparent_75%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-drift transform-gpu absolute -left-[18%] -top-[26%] h-[62vw] w-[62vw] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_20%,transparent),transparent_66%)] blur-2xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-drift-alt transform-gpu absolute -right-[22%] top-[6%] h-[56vw] w-[56vw] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.13_255_/_0.22),transparent_66%)] blur-2xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-drift transform-gpu absolute bottom-[-30%] left-[22%] h-[54vw] w-[54vw] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.12_320_/_0.16),transparent_68%)] blur-2xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_20%,var(--background)_82%)]" })
		]
	});
}
/** Thin luminous divider used between sections. */
function Hairline({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: cn("h-px w-full bg-[linear-gradient(90deg,transparent,oklch(1_0_0_/_0.14)_18%,color-mix(in_oklab,var(--primary)_45%,transparent)_50%,oklch(1_0_0_/_0.14)_82%,transparent)]", className)
	});
}
var SOCIALS = [
	{
		label: "LinkedIn",
		Icon: Linkedin
	},
	{
		label: "GitHub",
		Icon: Github
	},
	{
		label: "X",
		Icon: Twitter
	},
	{
		label: "Dribbble",
		Icon: Dribbble
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hairline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -bottom-1/2 left-1/2 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_62%)] blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logotype, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm leading-relaxed text-muted-foreground",
									children: COMPANY.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex gap-2",
									children: SOCIALS.map(({ label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										"aria-label": label,
										className: "focus-ring grid h-10 w-10 place-items-center rounded-xl border border-border bg-glass text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
									}, label))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterColumn, {
							title: "Company",
							children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "footer-link focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
								children: l.label
							}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
								children: "Contact"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
							title: "Capabilities",
							children: SERVICES.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								hash: s.slug,
								className: "focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
								children: s.title
							}, s.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterColumn, {
							title: "Get in touch",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${COMPANY.email}`,
									className: "focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
									children: COMPANY.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`,
									className: "focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
									children: COMPANY.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "focus-ring mt-4 inline-flex items-center gap-1.5 rounded-xl border border-primary/35 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/16",
									children: ["Book a call", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex flex-col gap-3 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						COMPANY.name,
						". All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono tracking-wider",
						children: "Designed and engineered in-house."
					})]
				})]
			})
		]
	});
}
function FooterColumn({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "eyebrow mb-4",
		children: title
	}), children] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Error 404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-5xl font-semibold text-gradient",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "This route doesn't exist. It may have moved, or the link is out of date."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "focus-ring inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground",
						children: "Back to home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "focus-ring inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "focus-ring inline-flex items-center justify-center rounded-xl border border-border bg-glass px-4 py-2 text-sm font-medium text-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#050505"
			},
			{
				name: "author",
				content: "Aeriform Systems"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Aeriform Systems"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.1,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 1.5
		});
		let rafId;
		function raf(time) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);
		return () => {
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-DpIfSnta.mjs");
var TITLE$5 = "Aeriform Systems — Enterprise Software & AI Product Engineering";
var DESCRIPTION$5 = "We help startups, SaaS companies, and agencies ship high-quality, production-ready web applications in record time by combining expert human engineering with advanced AI integration. We specialize in React & Next.js frontends, Node.js APIs, and practical AI features that solve real business problems.";
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: TITLE$5 },
		{
			name: "description",
			content: DESCRIPTION$5
		},
		{
			property: "og:title",
			content: TITLE$5
		},
		{
			property: "og:description",
			content: DESCRIPTION$5
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./careers-z199jRn-.mjs");
var TITLE$4 = "Careers — Engineering, AI and Design Roles | Aeriform Systems";
var DESCRIPTION$4 = "Open roles for senior product engineers, AI systems engineers, platform engineers, designers and delivery leads. Remote-friendly, senior-weighted teams.";
var Route$4 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: TITLE$4 },
		{
			name: "description",
			content: DESCRIPTION$4
		},
		{
			property: "og:title",
			content: TITLE$4
		},
		{
			property: "og:description",
			content: DESCRIPTION$4
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-Bx_xoJKb.mjs");
var TITLE$3 = "Contact — Start a Project | Aeriform Systems";
var DESCRIPTION$3 = "Tell us about the platform, AI product or system you need built. We reply within one business day and start with a two-week discovery.";
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: TITLE$3 },
		{
			name: "description",
			content: DESCRIPTION$3
		},
		{
			property: "og:title",
			content: TITLE$3
		},
		{
			property: "og:description",
			content: DESCRIPTION$3
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services-DAisaz03.mjs");
var TITLE$2 = "Services — Enterprise, AI, SaaS & Cloud Engineering | Aeriform Systems";
var DESCRIPTION$2 = "Enterprise software, AI product development, SaaS platforms, mobile, cloud operations, automation and performance engineering delivered by senior pods.";
var Route$2 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: TITLE$2 },
		{
			name: "description",
			content: DESCRIPTION$2
		},
		{
			property: "og:title",
			content: TITLE$2
		},
		{
			property: "og:description",
			content: DESCRIPTION$2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./studio-CBvHnyz1.mjs");
var TITLE$1 = "Studio — Story, Mission and Values | Aeriform Systems";
var DESCRIPTION$1 = "An independent engineering studio of 68 product, AI, infrastructure and design specialists building long-lived software systems across 19 countries.";
var Route$1 = createFileRoute("/studio")({
	head: () => ({ meta: [
		{ title: TITLE$1 },
		{
			name: "description",
			content: DESCRIPTION$1
		},
		{
			property: "og:title",
			content: TITLE$1
		},
		{
			property: "og:description",
			content: DESCRIPTION$1
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work-DkZOJkiW.mjs");
var TITLE = "Selected Work — Enterprise Platforms & AI Products | Aeriform Systems";
var DESCRIPTION = "We help startups, SaaS companies, and agencies ship high-quality, production-ready web applications in record time by combining expert human engineering with advanced AI integration. We specialize in React & Next.js frontends, Node.js APIs, and practical AI features that solve real business problems.";
var Route = createFileRoute("/work")({
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESCRIPTION
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESCRIPTION
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	CareersRoute: Route$4.update({
		id: "/careers",
		path: "/careers",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$6
	}),
	StudioRoute: Route$1.update({
		id: "/studio",
		path: "/studio",
		getParentRoute: () => Route$6
	}),
	WorkRoute: Route.update({
		id: "/work",
		path: "/work",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { SERVICES as _, Parallax as a, TiltCard as c, DIFFERENTIATORS as d, INDUSTRIES as f, ROLES as g, PROJECTS as h, Magnetic as i, cn as l, PROCESS as m, MeshBackground as n, Reveal as o, METRICS as p, Counter as r, SplitHeading as s, router_exports as t, COMPANY as u, TECH_GROUPS as v, VALUES as y };
