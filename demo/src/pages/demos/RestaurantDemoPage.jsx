import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Clock, Phone, Star } from "lucide-react"
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

const gallery = [
	"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop",
	"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=600&fit=crop",
	"https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&h=600&fit=crop",
	"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=600&fit=crop",
]

const testimonials = [
	{ quote: "The ribeye alone is worth the drive. Best new spot in the neighborhood.", author: "Local Eats Weekly" },
	{ quote: "Warm room, warmer service. Our go-to for date night.", author: "Priya M., regular guest" },
	{ quote: "Every dish tastes like it was made by someone who actually cares.", author: "Portland Food Diary" },
]

const fadeUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-80px" },
	transition: { duration: 0.6 },
}

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
				<div className="max-w-6xl mx-auto px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
					<span className="text-2xl sm:text-3xl font-black tracking-tight text-amber-400">Ember &amp; Oak</span>
					<nav className="hidden md:flex gap-8 text-stone-300 text-base font-medium">
						<a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
						<a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
						<a href="#about" className="hover:text-amber-400 transition-colors">About</a>
						<a href="#visit" className="hover:text-amber-400 transition-colors">Visit</a>
					</nav>
					<a href="#visit" className="bg-amber-500 text-stone-950 font-bold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base hover:bg-amber-400 transition-colors">
						Reserve a Table
					</a>
				</div>
			</header>

			<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=1000&fit=crop"
					alt="Ember and Oak restaurant interior"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30" />
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="relative px-6 max-w-3xl mx-auto w-full flex flex-col items-center text-center"
				>
					<div className="flex items-center justify-center gap-2 mb-8 text-amber-400">
						{[...Array(5)].map((_, i) => (
							<Star key={i} className="w-6 h-6 fill-amber-400" />
						))}
						<span className="text-stone-200 text-lg ml-3 font-medium">4.9 · 300+ reviews</span>
					</div>
					<h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
						Wood-fired.<br />Handcrafted.
					</h1>
					<p className="text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
						A neighborhood kitchen serving seasonal American plates over an open oak fire.
					</p>
				</motion.div>
			</section>

			<section id="about" className="py-24 px-6">
				<motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black mb-8 text-amber-400">Our Story</h2>
					<p className="text-stone-300 text-xl leading-relaxed">
						Ember &amp; Oak started as a single wood-fired grill at a farmers market. Today we're a
						full kitchen, but the philosophy hasn't changed: local ingredients, live fire, and food
						that tastes like it was made by someone who cares.
					</p>
				</motion.div>
			</section>

			<section id="gallery" className="py-24 px-6 bg-stone-900/50">
				<div className="max-w-5xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center text-amber-400">
						Inside the Kitchen
					</motion.h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{gallery.map((src, i) => (
							<motion.div
								key={src}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="aspect-square rounded-xl overflow-hidden group"
							>
								<img
									src={src}
									alt="Ember and Oak dish"
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									loading="lazy"
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="menu" className="py-24 px-6">
				<div className="max-w-4xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center text-amber-400">
						Menu
					</motion.h2>
					<div className="space-y-14">
						{menu.map((section) => (
							<motion.div key={section.category} {...fadeUp}>
								<h3 className="text-base font-bold uppercase tracking-widest text-stone-500 mb-5">
									{section.category}
								</h3>
								<div className="space-y-6">
									{section.items.map((item) => (
										<div key={item.name} className="flex justify-between gap-4 border-b border-stone-800 pb-5">
											<div>
												<div className="font-bold text-lg text-stone-100">{item.name}</div>
												<div className="text-stone-400 text-base">{item.desc}</div>
											</div>
											<div className="font-bold text-lg text-amber-400 whitespace-nowrap">{item.price}</div>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 px-6 bg-stone-900/50">
				<div className="max-w-5xl mx-auto">
					<motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black mb-14 text-center text-amber-400">
						What Guests Are Saying
					</motion.h2>
					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map((t, i) => (
							<motion.div
								key={t.author}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="bg-stone-950 border border-stone-800 rounded-xl p-7"
							>
								<div className="flex gap-1 text-amber-400 mb-4">
									{[...Array(5)].map((_, j) => (
										<Star key={j} className="w-5 h-5 fill-amber-400" />
									))}
								</div>
								<p className="text-stone-200 text-lg mb-4 leading-relaxed">"{t.quote}"</p>
								<p className="text-stone-500 text-base font-semibold">{t.author}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="visit" className="py-24 px-6">
				<motion.div {...fadeUp} className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
					<div className="flex flex-col items-center gap-3">
						<MapPin className="w-7 h-7 text-amber-400" />
						<div className="font-bold text-lg">Location</div>
						<div className="text-stone-400 text-base">412 Elm Street<br />Portland, OR</div>
					</div>
					<div className="flex flex-col items-center gap-3">
						<Clock className="w-7 h-7 text-amber-400" />
						<div className="font-bold text-lg">Hours</div>
						<div className="text-stone-400 text-base">Tue–Sun<br />5pm – 10pm</div>
					</div>
					<div className="flex flex-col items-center gap-3">
						<Phone className="w-7 h-7 text-amber-400" />
						<div className="font-bold text-lg">Reservations</div>
						<div className="text-stone-400 text-base">(503) 555-0148</div>
					</div>
				</motion.div>
			</section>

			<footer className="border-t border-stone-800 py-8 px-6 text-center text-stone-500 text-sm">
				&copy; {new Date().getFullYear()} Ember &amp; Oak. Demo site — not a real business.
			</footer>
		</div>
	)
}
