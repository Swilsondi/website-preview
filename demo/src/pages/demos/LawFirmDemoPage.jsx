import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Scale, Building2, Users, ShieldCheck, Phone, Mail } from "lucide-react"
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
						<Scale className="w-6 h-6 text-slate-900" />
						<span className="text-xl font-black tracking-tight">Whitfield &amp; Hale</span>
					</div>
					<nav className="hidden md:flex gap-8 text-slate-600 text-sm font-medium">
						<a href="#practice" className="hover:text-slate-900 transition-colors">Practice Areas</a>
						<a href="#attorneys" className="hover:text-slate-900 transition-colors">Attorneys</a>
						<a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
					</nav>
					<a href="#contact" className="bg-slate-900 text-white font-bold px-5 py-2 rounded text-sm hover:bg-slate-800 transition-colors">
						Book a Consultation
					</a>
				</div>
			</header>

			<section className="py-24 px-6 bg-slate-50">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="max-w-4xl mx-auto text-center"
				>
					<h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-slate-900">
						Trusted Counsel.<br />Proven Results.
					</h1>
					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
						Whitfield &amp; Hale provides clear, strategic legal guidance for businesses and
						families across the region.
					</p>
				</motion.div>
			</section>

			<section id="practice" className="py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-slate-900">Practice Areas</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{practiceAreas.map((area) => (
							<div key={area.title} className="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition-colors">
								<area.icon className="w-8 h-8 text-slate-900 mb-4" />
								<h3 className="font-bold text-lg mb-2 text-slate-900">{area.title}</h3>
								<p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="attorneys" className="py-20 px-6 bg-slate-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-slate-900">Our Attorneys</h2>
					<div className="grid sm:grid-cols-2 gap-8">
						{attorneys.map((a) => (
							<div key={a.name} className="bg-white border border-slate-200 rounded-lg p-8 text-center">
								<div className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-black mx-auto mb-4">
									{a.name.split(" ").map((n) => n[0]).join("")}
								</div>
								<div className="font-bold text-slate-900">{a.name}</div>
								<div className="text-slate-600 text-sm">{a.title}</div>
								<div className="text-slate-400 text-xs mt-1">{a.years}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="py-20 px-6">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">Schedule a Consultation</h2>
					<p className="text-slate-600 mb-8">We respond to every inquiry within one business day.</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center text-slate-700">
						<div className="flex items-center gap-2 justify-center">
							<Phone className="w-5 h-5" />
							(212) 555-0139
						</div>
						<div className="flex items-center gap-2 justify-center">
							<Mail className="w-5 h-5" />
							intake@whitfieldhale.example
						</div>
					</div>
				</div>
			</section>

			<footer className="border-t border-slate-200 py-8 px-6 text-center text-slate-400 text-sm">
				&copy; {new Date().getFullYear()} Whitfield &amp; Hale Legal. Demo site — not a real firm.
			</footer>
		</div>
	)
}
