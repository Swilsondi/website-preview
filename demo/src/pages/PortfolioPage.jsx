import React, { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Globe, Users, Sparkles } from "lucide-react"
import { Helmet } from "react-helmet"

// Helper
const normalize = (str) => (str ? str.trim().toLowerCase() : "")

// Portfolio items
const portfolioItems = [
	{
		id: 1,
		title: "Team Fever",
		subtitle: "Culture & Community Collective",
		url: "https://www.teamfever.org",
		image: null,
		accent: "from-fuchsia-600 via-purple-600 to-indigo-700",
		description:
			"A live site built for Team Fever, a creative collective centered on culture, fashion, and community events. Includes event promotion, community sections, and social integration.",
		features: ["Event Promotion", "Community Sections", "Social Integration", "Mobile Responsive"],
		category: "Live Client Work",
		badgeLabel: "Live Client Project",
	},
	{
		id: 2,
		title: "Ember & Oak",
		subtitle: "Restaurant",
		url: "/demo-sites/restaurant",
		image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
		description:
			"A demo concept for a wood-fired restaurant — built to show how a menu, reservations, and location info come together in a warm, appetite-driving design.",
		features: ["Menu Showcase", "Reservation CTA", "Hours & Location", "Warm Visual Identity"],
		category: "Demo Concepts",
		badgeLabel: "Demo Concept",
	},
	{
		id: 3,
		title: "Whitfield & Hale",
		subtitle: "Legal / Professional Services",
		url: "/demo-sites/law-firm",
		image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
		description:
			"A demo concept for a boutique law firm — clean, trustworthy design with practice areas, attorney bios, and a clear path to booking a consultation.",
		features: ["Practice Areas", "Attorney Bios", "Consultation CTA", "Professional Design"],
		category: "Demo Concepts",
		badgeLabel: "Demo Concept",
	},
	{
		id: 4,
		title: "Meridian Properties",
		subtitle: "Real Estate",
		url: "/demo-sites/real-estate",
		image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
		description:
			"A demo concept for a real estate agency — featured listings grid, agent profile, and lead capture built for a fast-scanning, photo-first experience.",
		features: ["Listings Grid", "Agent Profile", "Lead Capture", "Photo-First Layout"],
		category: "Demo Concepts",
		badgeLabel: "Demo Concept",
	},
]

// Categories
const categories = ["All", "Live Client Work", "Demo Concepts"]

// Portfolio Hero Section
const PortfolioHero = ({
	categories,
	selectedCategory,
	onCategoryChange,
	gridRef,
}) => (
	<section className="relative min-h-[70vh] bg-black overflow-hidden pt-12 md:pt-16">
		<div className="relative flex items-center justify-center min-h-[70vh] px-4 md:px-6 lg:px-8 pt-4">
			<div className="text-center max-w-6xl mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
				>
					Our{" "}
					<span className="text-white">
						Work
					</span>{" "}
					In Action
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
					className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
				>
					Real client work, plus original demo concepts.{" "}
					<span className="text-purple-400 font-semibold">
						Click any card to open the live page in a new tab.
					</span>
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="flex flex-wrap gap-4 justify-center mb-10"
				>
					{categories.map((category) => (
						<Button
							key={normalize(category)}
							variant={
								normalize(selectedCategory) === normalize(category)
									? "default"
									: "outline"
							}
							onClick={() => {
								onCategoryChange(category)
								if (gridRef && gridRef.current) {
									gridRef.current.scrollIntoView({
										behavior: "smooth",
										block: "start",
									})
								}
							}}
							className={`px-6 py-2 transition-all duration-200 ${
								normalize(selectedCategory) === normalize(category)
									? "bg-white text-black border-0"
									: "border-neutral-700 text-neutral-300 hover:bg-white/5"
							}`}
							tabIndex={0}
							type="button"
						>
							{category}
						</Button>
					))}
				</motion.div>
			</div>
		</div>
	</section>
)

// Portfolio Grid
const PortfolioGrid = ({ portfolioItems }) => (
	<section className="py-20 bg-black">
		<div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
				initial="initial"
				animate="animate"
			>
				{portfolioItems.map((item, idx) => (
					<motion.a
						key={item.id}
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: idx * 0.1 }}
						whileHover={{
							scale: 1.04,
							y: -4,
							boxShadow: "0 8px 32px 0 rgba(80,80,255,0.15)",
						}}
						className="group rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 hover:bg-gray-800/90 transition-all duration-300 flex flex-col text-left cursor-pointer"
					>
						<div className="relative w-full h-64 bg-gray-800 overflow-hidden">
							{item.image ? (
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-full object-cover object-top"
									loading="lazy"
								/>
							) : (
								<div
									className={`w-full h-full bg-gradient-to-br ${item.accent} flex items-center justify-center`}
								>
									<span className="text-white text-3xl font-black tracking-tight text-center px-6">
										{item.title}
									</span>
								</div>
							)}
							<Badge className="absolute top-4 left-4 bg-black/70 text-white border-0 backdrop-blur-sm">
								{item.badgeLabel}
							</Badge>
						</div>
						<div className="p-8 flex-1 flex flex-col items-center justify-between text-center">
							<div className="flex items-center gap-2 mb-1">
								<h3 className="text-2xl font-extrabold text-white leading-snug">{item.title}</h3>
								<ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
							</div>
							<p className="text-sm text-purple-400 font-semibold mb-4">{item.subtitle}</p>
							<p className="text-base text-gray-300 mb-4 leading-relaxed">{item.description}</p>
							<div className="w-full">
								<span className="font-semibold text-white block mb-1 text-sm">Key Features:</span>
								<ul className="list-disc list-inside text-gray-200 ml-2 text-sm">
									{item.features.map((f, i) => (
										<li key={i}>{f}</li>
									))}
								</ul>
							</div>
						</div>
					</motion.a>
				))}
			</motion.div>
		</div>
	</section>
)

// Results Section
const ResultsSection = () => (
	<section className="py-20 bg-neutral-950">
		<div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-center mb-16"
			>
				<h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
					Real Work.
					<span className="text-white">
						{" "}
						Real Range.
					</span>
				</h2>
				<p className="text-xl text-neutral-400 max-w-3xl mx-auto">
					Live client projects, backed by original demo concepts across industries.
				</p>
			</motion.div>
			<div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
				{[
					{
						icon: Users,
						stat: "1",
						label: "Live Client Project",
						color: "text-blue-400",
					},
					{
						icon: Sparkles,
						stat: "3",
						label: "Demo Concepts",
						color: "text-purple-400",
					},
					{
						icon: Globe,
						stat: "2026",
						label: "Studio Founded",
						color: "text-green-400",
					},
				].map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						viewport={{ once: true }}
						className="text-center flex flex-col items-center"
					>
						<Card className="bg-neutral-900 border-neutral-800 p-6 hover:border-neutral-600 transition-colors duration-200 flex flex-col items-center justify-center w-full">
							<item.icon
								className={`w-12 h-12 ${item.color} mb-4 mx-auto`}
							/>
							<div className="text-3xl font-black text-white mb-2 text-center">
								{item.stat}
							</div>
							<div className="text-neutral-400 text-sm text-center">
								{item.label}
							</div>
						</Card>
					</motion.div>
				))}
			</div>
		</div>
	</section>
)

// CTA Section
const PortfolioCTA = () => (
	<section className="py-24 bg-black relative overflow-hidden">
		<div className="relative px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, ease: "backOut" }}
				viewport={{ once: true }}
				className="text-center"
			>
				<h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
					Ready to Join Our
					<span className="text-white">
						{" "}
						Success Stories
					</span>
					?
				</h2>
				<p className="text-xl text-gray-300 mb-12 leading-relaxed">
					Get the same results for your business. Professional websites that
					convert visitors into customers.
				</p>
				<div className="flex flex-col sm:flex-row gap-6 justify-center">
					<Button
						size="lg"
						className="text-xl px-12 py-6 bg-white text-black hover:bg-neutral-100 font-bold transition-colors duration-200"
						onClick={() => (window.location.href = "/pricing")}
					>
						Start Your Project
						<ArrowRight className="ml-3 w-6 h-6" />
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="text-xl px-12 py-6 border border-neutral-700 text-neutral-300 hover:bg-white/5 hover:border-neutral-500 font-bold transition-colors duration-200 bg-transparent"
						onClick={() =>
							window.open(
								"https://calendly.com/techmotivesupreme/30min",
								"_blank"
							)
						}
					>
						Free Consultation
						<Globe className="ml-3 w-6 h-6" />
					</Button>
				</div>
			</motion.div>
		</div>
	</section>
)

export default function ShowcasePage() {
	const [selectedCategory, setSelectedCategory] = useState("All")
	const gridRef = useRef(null)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const handleCategoryChange = (cat) => {
		setSelectedCategory(cat)
		if (gridRef.current) {
			gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
		}
	}

	const filteredItems =
		selectedCategory === "All"
			? portfolioItems
			: portfolioItems.filter(
					(item) =>
						normalize(item.category) === normalize(selectedCategory)
			  )

	return (
		<div className="min-h-screen bg-black w-full overflow-x-hidden">
			<Helmet>
				<link rel="canonical" href="https://www.techmotivesupreme.com/portfolio" />
				<meta property="og:url" content="https://www.techmotivesupreme.com/portfolio" />
			</Helmet>
			<PortfolioHero
				categories={categories}
				selectedCategory={selectedCategory}
				onCategoryChange={handleCategoryChange}
				gridRef={gridRef}
			/>
			<div ref={gridRef}>
				<PortfolioGrid portfolioItems={filteredItems} />
			</div>
			<ResultsSection />
			<PortfolioCTA />
			<Footer />
		</div>
	)
}
