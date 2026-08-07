import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Clock, Phone } from "lucide-react"
import { Helmet } from "react-helmet"

const menu = [
	{
		category: "Starters",
		items: [
			{ name: "Charred Octopus", price: "$18", desc: "Smoked paprika, fingerling potato, lemon oil" },
			{ name: "Burrata & Heirloom Tomato", price: "$16", desc: "Basil oil, aged balsamic, sea salt" },
		],
	},
	{
		category: "Mains",
		items: [
			{ name: "Oak-Fired Ribeye", price: "$46", desc: "Bone marrow butter, roasted garlic, seasonal greens" },
			{ name: "Miso Glazed Salmon", price: "$32", desc: "Charred bok choy, jasmine rice, ginger scallion oil" },
			{ name: "Wild Mushroom Risotto", price: "$26", desc: "Parmesan, black truffle, crispy sage" },
		],
	},
	{
		category: "Dessert",
		items: [
			{ name: "Basque Cheesecake", price: "$12", desc: "Burnt honey, sea salt" },
		],
	},
]

export default function RestaurantDemoPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="min-h-screen bg-stone-950 text-stone-100 w-full">
			<Helmet>
				<title>Ember & Oak — Demo Restaurant Site</title>
			</Helmet>

			<div className="sticky top-0 z-50 bg-amber-500 text-stone-950 text-sm font-semibold text-center py-2 px-4 flex items-center justify-center gap-2">
				<Link to="/portfolio" className="flex items-center gap-1 hover:underline">
					<ArrowLeft className="w-4 h-4" />
					Back to portfolio
				</Link>
				<span className="hidden sm:inline">— Demo concept site built by TechMotive-Supreme</span>
			</div>

			<header className="border-b border-stone-800">
				<div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
					<span className="text-2xl font-black tracking-tight text-amber-400">Ember &amp; Oak</span>
					<nav className="hidden md:flex gap-8 text-stone-300 text-sm font-medium">
						<a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
						<a href="#about" className="hover:text-amber-400 transition-colors">About</a>
						<a href="#visit" className="hover:text-amber-400 transition-colors">Visit</a>
					</nav>
					<a href="#visit" className="bg-amber-500 text-stone-950 font-bold px-5 py-2 rounded-full text-sm hover:bg-amber-400 transition-colors">
						Reserve a Table
					</a>
				</div>
			</header>

			<section className="relative h-[70vh] flex items-end overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=1000&fit=crop"
					alt="Ember and Oak restaurant interior"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="relative px-6 pb-16 max-w-6xl mx-auto w-full"
				>
					<h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
						Wood-fired.<br />Handcrafted.
					</h1>
					<p className="text-lg md:text-xl text-stone-300 max-w-xl">
						A neighborhood kitchen serving seasonal American plates over an open oak fire.
					</p>
				</motion.div>
			</section>

			<section id="about" className="py-20 px-6">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-black mb-6 text-amber-400">Our Story</h2>
					<p className="text-stone-300 text-lg leading-relaxed">
						Ember &amp; Oak started as a single wood-fired grill at a farmers market. Today we're a
						full kitchen, but the philosophy hasn't changed: local ingredients, live fire, and food
						that tastes like it was made by someone who cares.
					</p>
				</div>
			</section>

			<section id="menu" className="py-20 px-6 bg-stone-900/50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-amber-400">Menu</h2>
					<div className="space-y-12">
						{menu.map((section) => (
							<div key={section.category}>
								<h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-4">
									{section.category}
								</h3>
								<div className="space-y-5">
									{section.items.map((item) => (
										<div key={item.name} className="flex justify-between gap-4 border-b border-stone-800 pb-4">
											<div>
												<div className="font-bold text-stone-100">{item.name}</div>
												<div className="text-stone-400 text-sm">{item.desc}</div>
											</div>
											<div className="font-bold text-amber-400 whitespace-nowrap">{item.price}</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="visit" className="py-20 px-6">
				<div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
					<div className="flex flex-col items-center gap-2">
						<MapPin className="w-6 h-6 text-amber-400" />
						<div className="font-bold">Location</div>
						<div className="text-stone-400 text-sm">412 Elm Street<br />Portland, OR</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Clock className="w-6 h-6 text-amber-400" />
						<div className="font-bold">Hours</div>
						<div className="text-stone-400 text-sm">Tue–Sun<br />5pm – 10pm</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Phone className="w-6 h-6 text-amber-400" />
						<div className="font-bold">Reservations</div>
						<div className="text-stone-400 text-sm">(503) 555-0148</div>
					</div>
				</div>
			</section>

			<footer className="border-t border-stone-800 py-8 px-6 text-center text-stone-500 text-sm">
				&copy; {new Date().getFullYear()} Ember &amp; Oak. Demo site — not a real business.
			</footer>
		</div>
	)
}
