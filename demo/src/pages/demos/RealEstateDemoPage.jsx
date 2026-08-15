import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, BedDouble, Bath, Ruler, MapPin, Star, CheckCircle2 } from "lucide-react"
import { Helmet } from "react-helmet"

const listings = [
	{
		title: "Modern Hillside Retreat",
		location: "Laurel Heights",
		price: "$1,285,000",
		image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
		beds: 4,
		baths: 3,
		sqft: "3,100",
	},
	{
		title: "Downtown Loft",
		location: "Arts District",
		price: "$625,000",
		image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
		beds: 2,
		baths: 2,
		sqft: "1,450",
	},
	{
		title: "Craftsman Family Home",
		location: "Maple Grove",
		price: "$849,000",
		image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
		beds: 5,
		baths: 4,
		sqft: "3,600",
	},
]

const whyJordan = [
	"Local market expertise across the metro area",
	"Responsive — most inquiries answered same day",
	"Skilled negotiator focused on your bottom line",
	"Guided support from offer to closing",
]

const testimonials = [
	{ quote: "Jordan found us a home in a market where everyone said we'd never win a bid. Incredible advocate.", author: "The Nguyen Family" },
	{ quote: "Sold our place in nine days, over asking. Communication the entire way through.", author: "Marcus T." },
	{ quote: "First-time buyer here — Jordan explained every step and never made me feel rushed.", author: "Alicia R." },
]

const fadeUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-80px" },
	transition: { duration: 0.6 },
}

export default function RealEstateDemoPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="min-h-screen bg-white text-slate-900 w-full">
			<Helmet>
				<title>Meridian Properties — Demo Real Estate Site</title>
			</Helmet>

			<div className="sticky top-0 z-50 bg-blue-600 text-white text-sm font-semibold text-center py-2 px-4 flex items-center justify-center gap-2">
				<Link to="/portfolio" className="flex items-center gap-1 hover:underline">
					<ArrowLeft className="w-4 h-4" />
					Back to portfolio
				</Link>
				<span className="hidden sm:inline text-blue-100">— Demo concept site built by TechMotive-Supreme</span>
			</div>

			<header className="border-b border-slate-200">
				<div className="max-w-6xl mx-auto px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
					<span className="text-xl sm:text-2xl font-black tracking-tight text-blue-700">Meridian Properties</span>
					<nav className="hidden md:flex gap-8 text-slate-600 text-base font-medium">
						<a href="#listings" className="hover:text-blue-700 transition-colors">Listings</a>
						<a href="#why" className="hover:text-blue-700 transition-colors">Why Us</a>
						<a href="#agent" className="hover:text-blue-700 transition-colors">Agent</a>
						<a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
					</nav>
					<a href="#contact" className="bg-blue-600 text-white font-bold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base hover:bg-blue-700 transition-colors">
						Get in Touch
					</a>
				</div>
			</header>

			<section className="relative h-[70vh] flex items-center overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&h=1000&fit=crop"
					alt="Modern home exterior"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-slate-900/50" />
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="relative px-6 max-w-4xl mx-auto w-full text-center text-white"
				>
					<h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
						Find Your Next Home
					</h1>
					<p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
						Curated listings across the metro area, matched to how you actually want to live.
					</p>
				</motion.div>
			</section>

			<section id="listings" className="py-24 px-6">
				<div className="max-w-6xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center text-slate-900">
						Featured Listings
					</motion.h2>
					<div className="grid md:grid-cols-3 gap-8">
						{listings.map((home, i) => (
							<motion.div
								key={home.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group"
							>
								<div className="overflow-hidden">
									<img
										src={home.image}
										alt={home.title}
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<div className="p-6">
									<div className="text-blue-700 font-black text-2xl mb-2">{home.price}</div>
									<div className="font-bold text-lg text-slate-900 mb-1">{home.title}</div>
									<div className="flex items-center gap-1 text-slate-500 text-base mb-4">
										<MapPin className="w-4 h-4" />
										{home.location}
									</div>
									<div className="flex gap-4 text-slate-600 text-base border-t border-slate-100 pt-4">
										<span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> {home.beds}</span>
										<span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {home.baths}</span>
										<span className="flex items-center gap-1"><Ruler className="w-4 h-4" /> {home.sqft} sqft</span>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="why" className="py-24 px-6 bg-blue-700 text-white">
				<div className="max-w-4xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center">
						Why Work With Jordan
					</motion.h2>
					<div className="grid sm:grid-cols-2 gap-6">
						{whyJordan.map((item, i) => (
							<motion.div
								key={item}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="flex items-center gap-4 bg-blue-800/50 rounded-lg p-6"
							>
								<CheckCircle2 className="w-7 h-7 text-blue-200 flex-shrink-0" />
								<span className="font-medium text-lg">{item}</span>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 px-6">
				<div className="max-w-5xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center text-slate-900">
						What Clients Say
					</motion.h2>
					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map((t, i) => (
							<motion.div
								key={t.author}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="bg-slate-50 border border-slate-200 rounded-xl p-7"
							>
								<div className="flex gap-1 text-blue-600 mb-4">
									{[...Array(5)].map((_, j) => (
										<Star key={j} className="w-5 h-5 fill-blue-600" />
									))}
								</div>
								<p className="text-slate-700 text-lg mb-4 leading-relaxed">"{t.quote}"</p>
								<p className="text-slate-500 text-base font-semibold">{t.author}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="agent" className="py-24 px-6 bg-slate-50">
				<motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
					<div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-black mx-auto mb-5">
						JR
					</div>
					<h2 className="text-3xl font-black mb-2 text-slate-900">Jordan Reyes</h2>
					<div className="text-slate-500 text-base mb-5">Licensed Real Estate Agent</div>
					<p className="text-slate-600 text-lg leading-relaxed">
						Jordan has helped over a hundred families buy and sell homes across the metro area,
						with a focus on first-time buyers and relocation clients.
					</p>
				</motion.div>
			</section>

			<section id="contact" className="py-24 px-6">
				<motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900">Let's Find Your Home</h2>
					<p className="text-slate-600 text-lg mb-2">(415) 555-0172</p>
					<p className="text-slate-600 text-lg">jordan@meridianproperties.example</p>
				</motion.div>
			</section>

			<footer className="border-t border-slate-200 py-8 px-6 text-center text-slate-400 text-sm">
				&copy; {new Date().getFullYear()} Meridian Properties. Demo site — not a real business.
			</footer>
		</div>
	)
}
