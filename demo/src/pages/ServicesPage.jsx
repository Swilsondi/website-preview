import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Globe, 
  Palette, 
  Code, 
  Smartphone, 
  Zap, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Lightbulb,
  BarChart3,
  Rocket,
  Shield
} from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "@/components/Footer"
import { LazyMotion } from "@/components/LazyMotion"
import OptimizedImage from "@/components/OptimizedImage"
import { usePerformance } from "@/hooks/usePerformance"
import { Helmet } from "react-helmet"

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

// Hero Section - OPTIMIZED
const ServicesHero = ({ navigate }) => (
  <>
    <Helmet>
      <title>Services | TechMotiveSupreme</title>
      <meta name="description" content="Professional web development, branding, mobile apps, analytics, and support services to scale your business." />
      <meta property="og:title" content="Services | TechMotiveSupreme" />
      <meta property="og:description" content="Explore our web development, branding, mobile apps, analytics, and support services." />
      <meta property="og:image" content="/assets/dark-logo.png" /> {/* Use optimized image */}
      <meta property="og:url" content="https://www.techmotivesupreme.com/services" />
      <link rel="canonical" href="https://www.techmotivesupreme.com/services" />
    </Helmet>
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden pt-12 md:pt-16">
      <div className="absolute inset-0">
        <LazyMotion
          animationType="fadeIn"
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative flex items-center justify-center min-h-[80vh] px-4 md:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-5xl mx-auto">
          <LazyMotion
            animationType="slideUp"
            className="mb-8 pt-4"
          >
            <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-purple-500/20 border-purple-400 text-purple-200 mb-8 backdrop-blur-sm">
              🎯 Professional Services • Exceptional Results
            </Badge>
          </LazyMotion>

          <LazyMotion
            animationType="slideUp"
            className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
          >
            Services That 
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Scale </span>
            Your Business
          </LazyMotion>

          <LazyMotion
            animationType="slideUp"
            className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From web development to complete digital transformation. 
            <span className="text-purple-400 font-semibold"> We deliver solutions that drive real growth.</span>
          </LazyMotion>

          <LazyMotion animationType="slideUp">
            <Button 
              size="lg" 
              className="text-lg px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 mb-8"
              onClick={() => window.open('https://www.adobe.com/express/learn/blog/brand-strategy#:~:text=with%20automated%20tools-,What%20is%20brand%20strategy?,consistent%20message%20across%20all%20channels.', '_blank')}
            >
              Explore Branding Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </LazyMotion>
        </div>
      </div>
    </section>
  </>
)

// Services Grid - OPTIMIZED
const ServicesGrid = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern technologies for maximum performance and user experience.",
      features: ["React & Next.js", "Mobile Responsive", "Performance Optimized", "SEO Ready"],
      accent: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Complete visual identity design that makes your brand memorable and professional.",
      features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"],
      accent: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions for unique business needs with clean, maintainable code.",
      features: ["Custom Features", "API Integration", "Database Design", "Scalable Architecture"],
      accent: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage your users.",
      features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"],
      accent: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & SEO",
      description: "Data-driven strategies to improve visibility and track performance.",
      features: ["Google Analytics", "SEO Optimization", "Performance Monitoring", "Conversion Tracking"],
      accent: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support to keep your digital presence secure and up-to-date.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Technical Support"],
      accent: "from-teal-500 to-blue-500"
    }
  ]

  return (
    <section className="py-24 bg-gray-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <LazyMotion
          animationType="slideUp"
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Everything You Need to 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Succeed Online</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to take your business to the next level.
          </p>
        </LazyMotion>

        <LazyMotion
          as="div"
          animationType="staggered"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <LazyMotion
              key={index}
              animationType="fadeIn"
              className="group"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.accent} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </LazyMotion>
          ))}
        </LazyMotion>
      </div>
    </section>
  )
}

// Process Section - OPTIMIZED
const ProcessSection = () => (
  <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <LazyMotion
        animationType="slideUp"
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          Our Proven 
          <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent"> Process</span>
        </h2>
        <p className="text-xl text-purple-200 max-w-3xl mx-auto">
          A streamlined approach that delivers exceptional results every time.
        </p>
      </LazyMotion>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Discovery", description: "We understand your goals, audience, and requirements.", icon: Target },
          { step: "02", title: "Strategy", description: "Custom plan tailored to your specific business needs.", icon: Lightbulb },
          { step: "03", title: "Design & Build", description: "Create and develop your solution with precision.", icon: Code },
          { step: "04", title: "Launch & Optimize", description: "Deploy and continuously improve performance.", icon: Rocket }
        ].map((phase, index) => (
          <LazyMotion
            key={index}
            animationType="fadeIn"
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <phase.icon className="w-10 h-10 text-purple-300" />
            </div>
            <div className="text-2xl font-bold text-purple-300 mb-2">{phase.step}</div>
            <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
            <p className="text-purple-200 leading-relaxed">{phase.description}</p>
          </LazyMotion>
        ))}
      </div>
    </div>
  </section>
)

// CTA Section - OPTIMIZED
const ServicesCTA = ({ navigate }) => (
  <section className="py-24 bg-black">
    <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <LazyMotion
        animationType="fadeIn"
        className="text-center"
      >
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Explore Our 
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Unique Offerings</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Discover how we innovate and deliver success through our specialized services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold shadow-2xl transition-all duration-300"
            onClick={() => navigate('/innovation-lab')}
          >
            Innovation Lab
            <Lightbulb className="ml-3 w-6 h-6" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300"
            onClick={() => navigate('/client-success-stories')}
          >
            Client Success Stories
            <Star className="ml-3 w-6 h-6" />
          </Button>
        </div>
        
        <p className="text-gray-500 mt-8">
          Innovation • Excellence • Results
        </p>
      </LazyMotion>
    </div>
  </section>
)

export default function ServicesPage() {
  const [pageLoaded, setPageLoaded] = useState(false)
  const navigate = useNavigate();
  
  // Track page performance
  usePerformance("ServicesPage");

  useEffect(() => {
    // Slight delay ensures smoother transition after route change
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <ServicesHero navigate={navigate} />
      <ServicesGrid />
      <ProcessSection />
      <ServicesCTA navigate={navigate} />
      <Footer />
    </div>
  )
}