import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
	ArrowLeft,
	Scale,
	Building2,
	Users,
	ShieldCheck,
	Phone,
	Mail,
	CheckCircle2,
	ChevronDown,
} from "lucide-react"
import { Helmet } from "react-helmet"

const practiceAreas = [
	{ icon: Building2, title: "Business & Corporate Law", desc: "Formation, contracts, mergers, and general counsel for growing companies." },
	{ icon: Users, title: "Family Law", desc: "Divorce, custody, and mediation handled with discretion and care." },
	{ icon: ShieldCheck, title: "Estate Planning", desc: "Wills, trusts, and probate guidance to protect what matters most." },
]

const attorneys = [
	{ name: "Margaret Whitfield", title: "Founding Partner, Corporate Law", years: "22 years experience" },
	{ name: "Daniel Hale", title: "Partner, Family Law", years: "15 years experience" },
]

const whyUs = [
	"Free initial consultation",
	"Transparent, flat-fee pricing",
	"Direct access to your attorney",
	"Decades of combined experience",
]

const faqs = [
	{ q: "How much does a consultation cost?", a: "Your first consultation is free. We'll review your situation and outline your options before any fees are discussed." },
	{ q: "How are your fees structured?", a: "Most matters are handled on a transparent flat-fee basis, so you know the cost upfront — no surprise hourly billing." },
	{ q: "How quickly can I speak with an attorney?", a: "We typically respond to new inquiries within one business day and can schedule a call within the week." },
	{ q: "Do you handle cases outside the region?", a: "We primarily serve clients across the state, with remote consultations available for out-of-area clients." },
]

const fadeUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-80px" },
	transition: { duration: 0.6 },
}

export default function LawFirmDemoPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="min-h-screen bg-white text-slate-900 w-full">
			<Helmet>
				<title>Whitfield & Hale Legal — Demo Law Firm Site</title>
			</Helmet>

			<div className="sticky top-0 z-50 bg-slate-900 text-amber-400 text-sm font-semibold text-center py-2 px-4 flex items-center justify-center gap-2">
				<Link to="/portfolio" className="flex items-center gap-1 hover:underline text-amber-400">
					<ArrowLeft className="w-4 h-4" />
					Back to portfolio
				</Link>
				<span className="hidden sm:inline text-slate-300">— Demo concept site built by TechMotive-Supreme</span>
			</div>

			<header className="border-b border-slate-200">
				<div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Scale className="w-7 h-7 text-slate-900" />
						<span className="text-2xl font-black tracking-tight">Whitfield &amp; Hale</span>
					</div>
					<nav className="hidden md:flex gap-8 text-slate-600 text-base font-medium">
						<a href="#practice" className="hover:text-slate-900 transition-colors">Practice Areas</a>
						<a href="#why" className="hover:text-slate-900 transition-colors">Why Us</a>
						<a href="#attorneys" className="hover:text-slate-900 transition-colors">Attorneys</a>
						<a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
						<a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
					</nav>
					<a href="#contact" className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded text-base hover:bg-slate-800 transition-colors">
						Book a Consultation
					</a>
				</div>
			</header>

			<section className="py-28 px-6 bg-slate-50">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="max-w-4xl mx-auto text-center"
				>
					<h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-slate-900">
						Trusted Counsel.<br />Proven Results.
					</h1>
					<p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
						Whitfield &amp; Hale provides clear, strategic legal guidance for businesses and
						families across the region.
					</p>
				</motion.div>
			</section>

			<section id="practice" className="py-24 px-6">
				<div className="max-w-6xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center text-slate-900">
						Practice Areas
					</motion.h2>
					<div className="grid md:grid-cols-3 gap-8">
						{practiceAreas.map((area, i) => (
							<motion.div
								key={area.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 hover:shadow-md transition-all"
							>
								<area.icon className="w-9 h-9 text-slate-900 mb-5" />
								<h3 className="font-bold text-xl mb-3 text-slate-900">{area.title}</h3>
								<p className="text-slate-600 text-base leading-relaxed">{area.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="why" className="py-24 px-6 bg-slate-900 text-white">
				<div className="max-w-4xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center">
						Why Clients Choose Us
					</motion.h2>
					<div className="grid sm:grid-cols-2 gap-6">
						{whyUs.map((item, i) => (
							<motion.div
								key={item}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="flex items-center gap-4 bg-slate-800/60 rounded-lg p-6"
							>
								<CheckCircle2 className="w-7 h-7 text-amber-400 flex-shrink-0" />
								<span className="font-medium text-lg">{item}</span>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="attorneys" className="py-24 px-6 bg-slate-50">
				<div className="max-w-4xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center text-slate-900">
						Our Attorneys
					</motion.h2>
					<div className="grid sm:grid-cols-2 gap-8">
						{attorneys.map((a, i) => (
							<motion.div
								key={a.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="bg-white border border-slate-200 rounded-lg p-8 text-center"
							>
								<div className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-black mx-auto mb-5">
									{a.name.split(" ").map((n) => n[0]).join("")}
								</div>
								<div className="font-bold text-lg text-slate-900">{a.name}</div>
								<div className="text-slate-600 text-base">{a.title}</div>
								<div className="text-slate-400 text-sm mt-1">{a.years}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="faq" className="py-24 px-6">
				<div className="max-w-3xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center text-slate-900">
						Frequently Asked Questions
					</motion.h2>
					<div className="space-y-3">
						{faqs.map((f, i) => (
							<motion.details
								key={f.q}
								initial={{ opacity: 0, y: 15 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: i * 0.05 }}
								className="group border border-slate-200 rounded-lg px-6 py-5"
							>
								<summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-slate-900 list-none">
									{f.q}
									<ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
								</summary>
								<p className="text-slate-600 text-base leading-relaxed mt-4">{f.a}</p>
							</motion.details>
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="py-24 px-6 bg-slate-50">
				<motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">Schedule a Consultation</h2>
					<p className="text-slate-600 text-lg mb-10">We respond to every inquiry within one business day.</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center text-slate-700 text-lg">
						<div className="flex items-center gap-2 justify-center">
							<Phone className="w-5 h-5" />
							(212) 555-0139
						</div>
						<div className="flex items-center gap-2 justify-center">
							<Mail className="w-5 h-5" />
							intake@whitfieldhale.example
						</div>
					</div>
				</motion.div>
			</section>

			<footer className="border-t border-slate-200 py-8 px-6 text-center text-slate-400 text-sm">
				&copy; {new Date().getFullYear()} Whitfield &amp; Hale Legal. Demo site — not a real firm.
			</footer>
		</div>
	)
}
