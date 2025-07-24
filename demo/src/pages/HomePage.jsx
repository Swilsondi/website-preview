import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  Code, 
  Smartphone, 
  Zap, 
  TrendingUp, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Briefcase,
  Users
} from "lucide-react"
import { useEffect, useState, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { useNavigate } from 'react-router-dom';
import usePerformance from '@/hooks/usePerformance';
import { Helmet } from "react-helmet";

// Optimized animation variants - GPU accelerated
const fadeInUp = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
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

// Enhanced split text animation
const SplitText = ({ children, className = "" }) => {
  const words = children.split(" ")
  
  return (
    <motion.h1 
      className={className}
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-3"
          variants={{
            initial: { opacity: 0, y: 100, rotateX: -90 },
            animate: { 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: index * 0.1
              }
            }
          }}
          style={{ transformOrigin: "50% 50%" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}


// Enhanced Hero Section 
const HeroSection = ({ handleNavigation }) => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden pt-12 md:pt-16">
      {/* Enhanced background with subtle animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative flex items-center justify-center min-h-[80vh] px-4 md:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
            className="mb-8 pt-4"
          >
            <Badge
              variant="outline"
              className="px-6 py-3 text-sm font-medium bg-blue-500/20 border-blue-400 text-blue-200 mb-8 backdrop-blur-sm"
            >
              🚀 Premium Web Development & Digital Branding
            </Badge>
          </motion.div>

          <SplitText className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
            BUILD. LAUNCH. MONETIZE.
          </SplitText>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="text-blue-400 font-semibold">TechMotive-Supreme</span> creates
            <span className="text-purple-400 font-semibold"> high-performing websites </span>
            for creators, brands, and entrepreneurs who are ready to
            <span className="text-green-400 font-semibold"> dominate their market.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="text-lg px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 mb-4"
                onClick={() => handleNavigation("/pricing")}
              >
                Book Your Site Now
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-semibold backdrop-blur-sm transition-all duration-300 mb-4"
                onClick={() => handleNavigation("/showcase")}
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced stats with stagger */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            { [
              {
                number: "50+",
                label: "Sites Launched",
              },
              {
                number: "110%",
                label: "Avg ROI Increase",
              },
              {
                number: "48hrs",
                label: "Typical Launch Turnaround",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Simplified services section 
const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "High-Converting Websites",
      description: "Lightning-fast, mobile-first websites that turn visitors into customers. Built with modern tech and optimized for conversions.",
      features: ["Conversion Optimized", "Mobile-First", "SEO Ready"],
      accent: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Brand Identity & Design",
      description: "Complete visual identity that makes you unforgettable. From logos to brand guidelines that command attention.",
      features: ["Logo Design", "Brand Guidelines", "Visual Systems"],
      accent: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Launch & Growth Strategy",
      description: "We don't just build and disappear. Get a complete roadmap to launch, scale, and monetize your digital presence.",
      features: ["Launch Strategy", "Growth Tactics", "Revenue Optimization"],
      accent: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="py-24 bg-gray-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            We Don't Just Build.
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> We Launch.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end solutions for creators and entrepreneurs who refuse to settle for average.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.accent} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-105`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-200 group-hover:text-blue-400 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Static social proof section - FIXED
const SocialProofSection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-blue-200">
          Join successful creators and brands who chose excellence
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {[
          { number: "50+", label: "Projects Launched", icon: Rocket },
          { number: "100%", label: "Client Satisfaction", icon: Star },
          { number: "$30k", label: "Revenue Generated", icon: TrendingUp },
          { number: "24/7", label: "Elite Support", icon: Users }
        ].map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-200 group-hover:bg-white/20">
              <stat.icon className="w-8 h-8 text-blue-300" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {stat.number}
            </div>
            <div className="text-blue-200">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Minimal CTA section - FIXED
const CTASection = () => (
  <section className="py-24 bg-black">
    <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Ready to 
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Dominate </span>
          Your Market?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Stop settling for average. Book your consultation and let's build something extraordinary together.
        </p>
        
        <Button 
          size="lg" 
          className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold transition-colors duration-200"
          onClick={() => window.open('https://calendly.com/techmotivesupreme/30min', '_blank')}
        >
          Book Your Consultation Now
          <ArrowRight className="ml-3 w-6 h-6" />
        </Button>
        
        <p className="text-gray-500 mt-6">
          Free 30-minute strategy session • No commitment required
        </p>
      </div>
    </div>
  </section>
)

// Better version - add this to ALL your pages
export default function HomePage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const navigate = useNavigate();

  const disableAnimations = false; // Set to false to enable animations

  usePerformance('HomePage');

  useEffect(() => {
    // Slight delay ensures smoother transition after route change
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [])

  useLayoutEffect(() => {
    console.log("Scroll position before reset:", window.scrollY);

    // Reset scroll position for primary containers
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100); // Delay to ensure navigation completes
  };

  return (
    <>
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K85QK9ZX');`
      }} />
      {/* End Google Tag Manager */}
      <Helmet>
        <title>TechMotiveSupreme | Premium Web Development & Branding</title>
        <meta name="description" content="High-performing websites and digital branding for creators, brands, and entrepreneurs. Build, launch, and monetize your digital presence." />
        <meta property="og:title" content="TechMotiveSupreme | Premium Web Development & Branding" />
        <meta property="og:description" content="High-performing websites and digital branding for creators, brands, and entrepreneurs." />
        <meta property="og:image" content="/assets/dark-logo.png" />
        <meta property="og:url" content="https://techmotivesupreme.com" />
        <link rel="canonical" href="https://www.techmotivesupreme.com/" />
      </Helmet>
      <div
        className={`min-h-screen bg-gray-900 w-full overflow-auto transition-all duration-700 ease-out ${
          pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } ${disableAnimations ? "transition-none" : ""}`}
      >
        <HeroSection handleNavigation={handleNavigation} />
        <ServicesSection />
        <SocialProofSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}