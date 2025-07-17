import React, { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { 
  ArrowRight,
  Globe,
  ShoppingCart,
  Users,
  Heart,
  TrendingUp
} from "lucide-react"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet";

// Move normalize to the top so all components share the same reference
const normalize = str => (str ? str.trim().toLowerCase() : "");

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Portfolio Hero Section
const PortfolioHero = React.memo(({ categories, selectedCategory, onCategoryChange, gridRef }) => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden pt-12 md:pt-16">
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
      />
    </div>

    <div className="relative flex items-center justify-center min-h-[70vh] px-4 md:px-6 lg:px-8 pt-4">
      <div className="text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "backOut" }}
          className="mb-8 pt-4"
        >
          <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-purple-500/20 border-purple-400 text-purple-200 mb-8 backdrop-blur-sm">
            🚀 Live Portfolio • Real Results
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
        >
          Our
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Work </span>
          In Action
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Explore stunning websites we've created across industries. 
          <span className="text-purple-400 font-semibold"> Each one designed to convert visitors into customers.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          {categories.map((category) => (
            <Button
              key={normalize(category)}
              variant={normalize(selectedCategory) === normalize(category) ? "default" : "outline"}
              onClick={() => {
                onCategoryChange(category);
                if (gridRef && gridRef.current) {
                  gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
))

// Portfolio items array (keep as before)
const portfolioItems = [
  {
    id: 1,
    title: "Brand Website for ABC Corp",
    image: "/assets/portfolio/abc-corp.webp",
    description: "A modern, responsive site for a local business.",
    category: "Professional Services"
  },
  {
    id: 2,
    title: "E-commerce Platform for XYZ",
    image: "/assets/portfolio/xyz-shop.webp",
    description: "Custom online store with Stripe integration.",
    category: "E-commerce"
  },
  {
    id: 3,
    title: "FitLife Pro",
    image: "/assets/banner-logo.jpeg",
    description: "A modern fitness coaching site for a boutique gym, featuring class schedules and online signups.",
    category: "Health & Wellness"
  },
  {
    id: 4,
    title: "TechFlow Solutions",
    image: "/assets/banner-logo.jpeg",
    description: "Landing page and dashboard UI for a SaaS startup, focused on clarity and conversion.",
    category: "Technology/SaaS"
  },
  {
    id: 5,
    title: "Luxury Estates Co",
    image: "/assets/banner-logo.jpeg",
    description: "A clean, mobile-first site for a local real estate agent, with featured listings and lead forms.",
    category: "Real Estate"
  },
  {
    id: 6,
    title: "Artisan Market",
    image: "/assets/banner-logo.jpeg",
    description: "A simple e-commerce site for a local artisan collective, with easy product management.",
    category: "E-commerce"
  },
  {
    id: 7,
    title: "Creative Studio Co",
    image: "/assets/banner-logo.jpeg",
    description: "Portfolio site for a small creative agency, with case studies and a contact form.",
    category: "Creative Agency"
  },
  {
    id: 8,
    title: "Legal Partners LLC",
    image: "/assets/banner-logo.jpeg",
    description: "Professional site for a boutique law firm, with attorney bios and appointment booking.",
    category: "Professional Services"
  }
];

// Animated Portfolio grid (restored layout & animation)
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
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {portfolioItems.map((item, idx) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            whileHover={{ scale: 1.04, y: -4, boxShadow: "0 8px 32px 0 rgba(80,80,255,0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-gray-800/70 border border-gray-700 hover:bg-gray-800/90 transition-all duration-300 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

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
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Real Impact.</span>
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          50+ clients served • $30k+ revenue generated • 100% satisfaction rate
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Users, stat: "50+", label: "Clients Served", color: "text-blue-400" },
          { icon: Globe, stat: "$30k+", label: "Revenue Generated", color: "text-purple-400" },
          { icon: Heart, stat: "100%", label: "Client Satisfaction", color: "text-pink-400" },
          { icon: TrendingUp, stat: "2025", label: "Years Active", color: "text-green-400" }
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
              <item.icon className={`w-12 h-12 ${item.color} mb-4 mx-auto`} />
              <div className="text-3xl font-black text-white mb-2 text-center">{item.stat}</div>
              <div className="text-blue-200 text-sm text-center">{item.label}</div>
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
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Success Stories</span>
          ?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Get the same results for your business. Professional websites that convert visitors into customers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold shadow-2xl transition-all duration-300"
            onClick={() => window.location.href = '/pricing'}
          >
            Start Your Project
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300"
            onClick={() => window.open('https://calendly.com/techmotivesupreme/30min', '_blank')}
          >
            Free Consultation
            <Globe className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
)

// Move categories and portfolioItems outside of ShowcasePage to avoid re-creation on every render
const categories = [
  'All',
  'E-commerce',
  'Technology/SaaS',
  'Health & Wellness',
  'Real Estate',
  'Creative Agency',
  'Professional Services'
];

// Main Portfolio Page Component
export default function ShowcasePage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);
  const gridRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isMounted && location) {
      window.scrollTo(0, 0);
    }
  }, [location, isMounted]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filter portfolioItems by selectedCategory
  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => normalize(item.category) === normalize(selectedCategory));

  return (
    <div className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K85QK9ZX');`
      }} />
      {/* End Google Tag Manager */}
      {/* Custom Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6366f1, #8b5cf6);
          border-radius: 4px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #4f46e5, #7c3aed);
          border-radius: 4px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        html {
          scrollbar-width: thin;
          scrollbar-color: #6366f1 transparent;
        }
      ` }} />
      
      <PortfolioHero categories={categories} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} gridRef={gridRef} />
      <div ref={gridRef}>
        <PortfolioGrid portfolioItems={filteredItems} />
      </div>
      <ResultsSection />
      <PortfolioCTA />
      <Footer />
    </div>
)}