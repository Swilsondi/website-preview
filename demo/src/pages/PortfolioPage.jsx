import React, { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Users, Heart, TrendingUp } from "lucide-react"
import { Helmet } from "react-helmet"

// Helper
const normalize = (str) => (str ? str.trim().toLowerCase() : "")

// Portfolio items
const portfolioItems = [
	{
		id: 1,
		title: "FitLife Pro",
		subtitle: "Health & Wellness",
		image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
		description:
			"A modern fitness coaching site for a boutique gym, featuring class schedules and online signups.",
		features: [
			"Class Booking",
			"Trainer Profiles",
			"Mobile Responsive",
			"SEO Optimized",
		],
		stats: [
			{ value: "+1,200", label: "clients" },
			{ value: "+100%", label: "satisfaction" },
			{ value: "+2025", label: "launch" },
		],
		testimonial: {
			quote:
				"TechMotive Supreme made it easy for our clients to book classes and learn about our trainers. Our online signups doubled!",
			author: "Sarah Johnson - Owner, FitLife Pro",
		},
		category: "Health & Wellness",
		accent: "from-green-400 to-emerald-500",
	},
	{
		id: 2,
		title: "TechFlow Solutions",
		subtitle: "E-commerce",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
		description:
			"Landing page and dashboard UI for a SaaS e-commerce startup, focused on clarity and conversion.",
		features: ["Landing Page", "Dashboard UI", "Conversion Copy", "Branding"],
		stats: [
			{ value: "+2,500", label: "clients" },
			{ value: "+100%", label: "satisfaction" },
			{ value: "+2025", label: "launch" },
		],
		testimonial: {
			quote:
				"Our signups increased and our brand finally looks professional. The process was smooth and collaborative.",
			author: "Michael Chen - Founder, TechFlow Solutions",
		},
		category: "Technology/SaaS",
	},
	{
		id: 3,
		title: "Luxury Estates Co",
		subtitle: "Real Estate",
		image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
		description:
			"A clean, mobile-first site for a local real estate agent, with featured listings and lead forms.",
		features: [
			"Featured Listings",
			"Lead Forms",
			"Mobile First",
			"Photo Gallery",
		],
		stats: [
			{ value: "+800", label: "clients" },
			{ value: "+100%", label: "satisfaction" },
			{ value: "+2025", label: "launch" },
		],
		testimonial: {
			quote:
				"I get more inquiries from my website than any other channel. TechMotive Supreme made it easy!",
			author: "Amanda Rodriguez - Agent, Luxury Estates Co",
		},
		category: "Real Estate",
	},
	{
		id: 4,
		title: "Artisan Market",
		subtitle: "E-commerce",
		image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
		description:
			"A simple e-commerce site for a local artisan collective, with easy product management.",
		features: [
			"Product Catalog",
			"Easy Checkout",
			"Inventory Tools",
			"Customer Reviews",
		],
		stats: [
			{ value: "+3,400", label: "clients" },
			{ value: "+100%", label: "satisfaction" },
			{ value: "+2025", label: "launch" },
		],
		testimonial: {
			quote:
				"We love how easy it is to update our products. Our customers always comment on how smooth the checkout is.",
			author: "David Kim - Co-Founder, Artisan Market",
		},
		category: "E-commerce",
		accent: "from-pink-500 to-yellow-400",
	},
	{
		id: 5,
		title: "Creative Studio Co",
		subtitle: "Creative Agency",
		image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
		description:
			"Portfolio site for a small creative agency, with case studies and a contact form.",
		features: ["Case Studies", "Contact Form", "Gallery", "Blog"],
		stats: [
			{ value: "+650", label: "clients" },
			{ value: "+100%", label: "satisfaction" },
			{ value: "+2025", label: "launch" },
		],
		testimonial: {
			quote:
				"Our new site finally reflects our work. We get more project inquiries and it’s easy to update.",
			author: "Lisa Thompson - Creative Director",
		},
		category: "Creative Agency",
	},
	{
		id: 6,
		title: "Legal Partners LLC",
		subtitle: "Professional Services",
		image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
		description:
			"Professional site for a boutique law firm, with attorney bios and appointment booking.",
		features: ["Attorney Bios", "Booking Form", "Practice Areas", "Testimonials"],
		stats: [
			{ value: "+10,000", label: "clients" },
			{ value: "+100%", label: "satisfaction" },
			{ value: "+2025", label: "launch" },
		],
		testimonial: {
			quote:
				"We needed a site that looked trustworthy and made it easy for clients to reach us. TechMotive Supreme delivered.",
			author: "Robert Wilson - Managing Partner",
		},
		category: "Professional Services",
	},
]

// Categories
const categories = [
	"All",
	"E-commerce",
	"Technology/SaaS",
	"Health & Wellness",
	"Real Estate",
	"Creative Agency",
	"Professional Services",
]

// Portfolio Hero Section
const PortfolioHero = ({
	categories,
	selectedCategory,
	onCategoryChange,
	gridRef,
}) => (
	<section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden pt-12 md:pt-16">
		<div className="relative flex items-center justify-center min-h-[70vh] px-4 md:px-6 lg:px-8 pt-4">
			<div className="text-center max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, scale: 0.8, y: -20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1, ease: "backOut" }}
					className="mb-8 pt-4"
				>
					<Badge
						variant="outline"
						className="px-6 py-3 text-sm font-medium bg-purple-500/20 border-purple-400 text-purple-200 mb-8 backdrop-blur-sm"
					>
						🚀 Live Portfolio • Real Results
					</Badge>
				</motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
				>
					Our{" "}
					<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
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
					Explore stunning websites we've created across industries.{" "}
					<span className="text-purple-400 font-semibold">
						Each one designed to convert visitors into customers.
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
									? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
									: "border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
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
	<section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
		<div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
				initial="initial"
				animate="animate"
			>
				{portfolioItems.map((item, idx) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: idx * 0.1 }}
						whileHover={{
							scale: 1.04,
							y: -4,
							boxShadow: "0 8px 32px 0 rgba(80,80,255,0.15)",
						}}
						className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 hover:bg-gray-800/90 transition-all duration-300 flex flex-col"
					>
						<div className="w-full h-64 bg-gray-800 overflow-hidden">
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-full object-cover object-top rounded-t-2xl"
								loading="lazy"
							/>
						</div>
						<div className="p-8 flex-1 flex flex-col items-center justify-between text-center">
							<h3 className="text-2xl font-extrabold text-white mb-2 leading-snug">{item.title}</h3>
							<p className="text-base text-gray-300 mb-4 leading-relaxed">{item.description}</p>
							<div className="mb-4 w-full">
								<span className="font-semibold text-white block mb-1 text-sm">Key Features:</span>
								<ul className="list-disc list-inside text-gray-200 ml-2 mb-2 text-sm">
									{item.features.map((f, i) => (
										<li key={i}>{f}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-row justify-center items-center gap-6 mb-4 w-full">
								{item.stats.map((stat, i) => (
									<div key={i} className="flex flex-col items-center flex-1 min-w-0">
										<div className="text-lg font-bold text-purple-300 leading-tight">{stat.value}</div>
										<div className="text-gray-400 text-xs uppercase tracking-wide">{stat.label}</div>
									</div>
								))}
							</div>
							<blockquote className="italic text-gray-200 border-l-4 border-purple-400 pl-4 mb-2 w-full text-left text-sm">
								"{item.testimonial.quote}"
							</blockquote>
							<div className="text-gray-400 text-xs font-semibold w-full text-left">
								{item.testimonial.author}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	</section>
)

// Results Section
const ResultsSection = () => (
	<section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
		<div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-center mb-16"
			>
				<h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
					Real Results.
					<span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
						{" "}
						Real Impact.
					</span>
				</h2>
				<p className="text-xl text-blue-200 max-w-3xl mx-auto">
					50+ clients served • $30k+ revenue generated • 100% satisfaction rate
				</p>
			</motion.div>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
				{[
					{
						icon: Users,
						stat: "50+",
						label: "Clients Served",
						color: "text-blue-400",
					},
					{
						icon: Globe,
						stat: "$30k+",
						label: "Revenue Generated",
						color: "text-purple-400",
					},
					{
						icon: Heart,
						stat: "100%",
						label: "Client Satisfaction",
						color: "text-pink-400",
					},
					{
						icon: TrendingUp,
						stat: "2025",
						label: "Years Active",
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
						<Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center">
							<item.icon
								className={`w-12 h-12 ${item.color} mb-4 mx-auto`}
							/>
							<div className="text-3xl font-black text-white mb-2 text-center">
								{item.stat}
							</div>
							<div className="text-blue-200 text-sm text-center">
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
					<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
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
						className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold shadow-2xl transition-all duration-300"
						onClick={() => (window.location.href = "/pricing")}
					>
						Start Your Project
						<ArrowRight className="ml-3 w-6 h-6" />
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300"
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
		<div className="min-h-screen bg-gray-900 w-full overflow-x-hidden">
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