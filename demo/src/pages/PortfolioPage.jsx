import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Footer" // ✅ ADD THIS
import { motion } from "framer-motion" // Add the missing import
import { 
  ArrowRight,
  ExternalLink,
  Star,
  Quote,
  Globe,
  Smartphone,
  Zap,
  TrendingUp,
  Heart,
  Eye,
  ShoppingCart,
  Users
} from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

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
const PortfolioHero = () => (
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
          className="flex flex-wrap gap-4 justify-center"
        >
          {['E-commerce', 'SaaS', 'Health & Wellness', 'Real Estate', 'Creative', 'Professional'].map((category, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2 bg-white/10 border-white/20 text-white hover:bg-purple-500/20 transition-all duration-300 cursor-pointer">
              {category}
            </Badge>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)

// Portfolio Grid Section
const PortfolioGrid = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "FitLife Pro",
      category: "Health & Wellness",
      description: "Premium fitness coaching platform with booking system",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      features: ["Online Booking", "Payment Processing", "Member Portal", "Mobile Responsive"],
      stats: { conversion: "340%", traffic: "850%", revenue: "$50K+" },
      testimonial: {
        text: "Our online bookings increased by 340% in just 3 months. The website pays for itself!",
        author: "Sarah Johnson",
        role: "Fitness Coach & Owner"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "TechFlow Solutions",
      category: "Technology/SaaS",
      description: "B2B SaaS platform with advanced dashboard and analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: ["Dashboard Analytics", "API Integration", "User Management", "Real-time Data"],
      stats: { conversion: "280%", signups: "600%", retention: "95%" },
      testimonial: {
        text: "The dashboard design is incredible. Our user engagement has never been higher.",
        author: "Michael Chen",
        role: "CTO, TechFlow"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Luxury Estates Co",
      category: "Real Estate",
      description: "High-end real estate showcase with virtual tours",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      features: ["Virtual Tours", "Property Search", "Lead Generation", "CRM Integration"],
      stats: { leads: "450%", sales: "$2.5M+", viewings: "680%" },
      testimonial: {
        text: "This website has transformed our business. We closed $2.5M in sales this quarter alone.",
        author: "Amanda Rodriguez",
        role: "Luxury Real Estate Agent"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Artisan Market",
      category: "E-commerce",
      description: "Handcrafted goods marketplace with seamless checkout",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      features: ["E-commerce Store", "Payment Gateway", "Inventory Management", "Customer Reviews"],
      stats: { sales: "520%", orders: "890%", revenue: "$125K+" },
      testimonial: {
        text: "Our online sales have exploded! The checkout process is so smooth, customers love it.",
        author: "David Kim",
        role: "Artisan Market Owner"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Creative Studio Co",
      category: "Creative Agency",
      description: "Portfolio showcase with stunning visual effects",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      features: ["Portfolio Gallery", "Animation Effects", "Client Portal", "Project Showcase"],
      stats: { inquiries: "380%", clients: "250%", revenue: "$80K+" },
      testimonial: {
        text: "The visual impact is incredible. We've never received so many high-quality inquiries.",
        author: "Lisa Thompson",
        role: "Creative Director"
      },
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 6,
      title: "Legal Partners LLC",
      category: "Professional Services",
      description: "Professional law firm with consultation booking",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      features: ["Consultation Booking", "Case Studies", "Attorney Profiles", "Contact Forms"],
      stats: { consultations: "290%", clients: "180%", revenue: "$200K+" },
      testimonial: {
        text: "Professional, trustworthy, and effective. Our client acquisition has doubled.",
        author: "Robert Wilson",
        role: "Managing Partner"
      },
      color: "from-gray-600 to-gray-800"
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'E-commerce', 'Technology/SaaS', 'Health & Wellness', 'Real Estate', 'Creative Agency', 'Professional Services']

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <section className="py-24 bg-gray-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
            Industry
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Showcase</span>
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                    : "border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm text-white border-0 hover:bg-white/30"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Live
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${item.color} text-white border-0`}>
                    {item.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 text-sm">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-gray-900/50 rounded-lg">
                    {Object.entries(item.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-purple-400">+{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="relative p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <Quote className="w-6 h-6 text-purple-400 mb-2" />
                    <p className="text-gray-300 text-sm mb-3 italic">"{item.testimonial.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-xs text-gray-400">
                        <span className="text-white font-semibold">{item.testimonial.author}</span> - {item.testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

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
          Our websites don't just look amazing – they drive measurable business growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: TrendingUp, stat: "400%", label: "Average Conversion Increase", color: "text-green-400" },
          { icon: Users, stat: "50+", label: "Happy Clients Served", color: "text-blue-400" },
          { icon: Globe, stat: "99.9%", label: "Website Uptime", color: "text-purple-400" },
          { icon: Heart, stat: "5★", label: "Average Client Rating", color: "text-pink-400" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 hover:bg-white/20 transition-all duration-300">
              <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
              <div className="text-3xl font-black text-white mb-2">{item.stat}</div>
              <div className="text-blue-200 text-sm">{item.label}</div>
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

// Main Portfolio Page Component
export default function ShowcasePage() {
  const location = useLocation();
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Ensure the page scrolls to the top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
      
      <PortfolioHero />
      <PortfolioGrid />
      <ResultsSection />
      <PortfolioCTA />
      <Footer /> {/* ✅ ADD THIS */}
    </div>
  )
}
