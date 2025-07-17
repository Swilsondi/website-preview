import React, { useEffect } from "react"
import { Card } from "@/components/ui/card"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

// Portfolio data (with features, stats, testimonial)
const portfolioItems = [
	{
		id: 1,
		title: "Brand Website for ABC Corp",
		subtitle: "Health & Wellness",
		image: "/assets/portfolio/abc-corp.webp",
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
			{ value: "+2023", label: "launches" },
		],
		testimonial: {
			quote:
				"TechMotive Supreme made it easy for our clients to book classes and learn about our trainers. Our online signups doubled!",
			author: "Sarah Johnson - Owner, FitLife Pro",
		},
	},
	{
		id: 2,
		title: "E-commerce Platform for XYZ",
		subtitle: "Technology/SaaS",
		image: "/assets/portfolio/xyz-shop.webp",
		description:
			"Landing page and dashboard UI for a SaaS startup, focused on clarity and conversion.",
		features: ["Landing Page", "Dashboard UI", "Conversion Copy", "Branding"],
		stats: [
			{ value: "+2,500", label: "clients" },
			{ value: "+100%", label: "satisfaction" },
			{ value: "+2024", label: "launches" },
		],
		testimonial: {
			quote:
				"Our signups increased and our brand finally looks professional. The process was smooth and collaborative.",
			author: "Michael Chen - Founder, TechFlow",
		},
	},
	{
		id: 3,
		title: "FitLife Pro",
		subtitle: "Health & Wellness",
		image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
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
			{ value: "+2023", label: "launches" },
		],
		testimonial: {
			quote:
				"I get more inquiries from my website than any other channel. TechMotive Supreme made it easy!",
			author: "Amanda Rodriguez - Agent, Luxury Estates Co",
		},
	},
	{
		id: 4,
		title: "TechFlow Solutions",
		subtitle: "Technology/SaaS",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
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
			{ value: "+2024", label: "launches" },
		],
		testimonial: {
			quote:
				"We love how easy it is to update our products. Our customers always comment on how smooth the checkout is.",
			author: "David Kim - Co-Founder, Artisan Market",
		},
	},
	{
		id: 5,
		title: "Luxury Estates Co",
		subtitle: "Real Estate",
		image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
		description:
			"Portfolio site for a small creative agency, with case studies and a contact form.",
		features: ["Case Studies", "Contact Form", "Gallery", "Blog"],
		stats: [
			{ value: "+650", label: "clients" },
			{ value: "+100%", label: "satisfaction" },
			{ value: "+2022", label: "launches" },
		],
		testimonial: {
			quote:
				"Our new site finally reflects our work. We get more project inquiries and it’s easy to update.",
			author: "Lisa Thompson - Creative Director",
		},
	},
	{
		id: 6,
		title: "Artisan Market",
		subtitle: "E-commerce",
		image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
		description:
			"Professional site for a boutique law firm, with attorney bios and appointment booking.",
		features: [
			"Attorney Bios",
			"Booking Form",
			"Practice Areas",
			"Testimonials",
		],
		stats: [
			{ value: "+10,000", label: "clients" },
			{ value: "+100%", label: "satisfaction" },
			{ value: "+2024", label: "launches" },
		],
		testimonial: {
			quote:
				"We needed a site that looked trustworthy and made it easy for clients to reach us. TechMotive Supreme delivered.",
			author: "Robert Wilson - Managing",
		},
	},
]

// Portfolio grid layout (restored)
const PortfolioGrid = ({ portfolioItems }) => (
	<section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
		<div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
			<div className="text-center mb-16">
				<h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
					Portfolio Projects
				</h2>
				<p className="text-xl text-gray-300 max-w-3xl mx-auto">
					Explore our recent work across different industries and business types.
				</p>
			</div>
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
							boxShadow:
								"0 8px 32px 0 rgba(80,80,255,0.15)",
						}}
						className="rounded-2xl overflow-hidden shadow-xl bg-gray-800/70 border border-gray-700 hover:bg-gray-800/90 transition-all duration-300 flex flex-col"
					>
						<img
							src={item.image}
							alt={item.title}
							className="w-full h-48 object-cover"
							loading="lazy"
						/>
						<div className="p-6 flex-1 flex flex-col justify-between">
							<h3 className="text-xl font-bold text-white mb-2">
								{item.title}
							</h3>
							<p className="text-gray-300 mb-2">
								{item.description}
							</p>
							<div className="mb-2">
								<span className="font-bold text-white">
									Key Features:
								</span>
								<ul className="list-disc list-inside text-gray-200 ml-2">
									{item.features.map((f, i) => (
										<li key={i}>{f}</li>
									))}
								</ul>
							</div>
							<div className="flex gap-4 mb-2">
								{item.stats.map((stat, i) => (
									<div key={i} className="text-center">
										<div className="text-lg font-black text-purple-300">
											{stat.value}
										</div>
										<div className="text-gray-400 text-xs">
											{stat.label}
										</div>
									</div>
								))}
							</div>
							<blockquote className="italic text-gray-200 border-l-4 border-purple-400 pl-4 mb-2">
								"{item.testimonial.quote}"
							</blockquote>
							<div className="text-gray-400 text-xs font-semibold">
								{item.testimonial.author}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	</section>
)

// Main Portfolio Page Component
export default function ShowcasePage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="min-h-screen bg-gray-900 w-full overflow-x-hidden">
			<PortfolioGrid portfolioItems={portfolioItems} />
			<Footer />
		</div>
	)
}