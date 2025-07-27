import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Target, 
  Heart, 
  Zap, 
  Award, 
  Users, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Coffee,
  Lightbulb,
  TrendingUp,
  Shield,
  Code,
  Palette
} from "lucide-react"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react' // ✅ ENSURE THIS IS IMPORTED
import { Helmet } from "react-helmet"

// About Hero Section - FIXED
const AboutHero = ({ navigate }) => (
  <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-emerald-900 to-blue-900 overflow-hidden pt-12 md:pt-16">
    <div className="absolute inset-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"
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
          <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-emerald-500/20 border-emerald-400 text-emerald-200 mb-8 backdrop-blur-sm">
            🚀 About TechMotiveSupreme • Digital Innovation Leaders
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
        >
          Crafting Digital 
          <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"> Excellence </span>
          Since Day One
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          We're not just another web agency. We're 
          <span className="text-emerald-400 font-semibold"> digital architects </span>
          who turn ambitious visions into reality through cutting-edge technology and strategic thinking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <Button 
            size="lg" 
            className="text-lg px-10 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 mb-4"
            onClick={() => navigate('/our-story')}
          >
            Our Story
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-10 py-4 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-semibold backdrop-blur-sm transition-all duration-300 mb-4"
            onClick={() => navigate('/client-success-stories')}
          >
            Client Success Stories
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
)

// Mission/Values Section - FIXED 
const MissionSection = () => (
  <section className="py-24 bg-gray-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          Our Mission & 
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> Core Values</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Everything we do is guided by these fundamental principles that drive our success.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Target,
            title: "Purpose-Driven Design",
            description: "Every pixel serves a purpose. We create digital experiences that drive real business results and meaningful user engagement.",
            accent: "from-emerald-500 to-teal-500"
          },
          {
            icon: Heart,
            title: "Client-Obsessed Culture",
            description: "Your success is our success. We go above and beyond to ensure every project exceeds expectations and delivers value.",
            accent: "from-red-500 to-pink-500"
          },
          {
            icon: Zap,
            title: "Innovation First",
            description: "We embrace cutting-edge technologies and creative solutions to keep our clients ahead of the competition.",
            accent: "from-yellow-500 to-orange-500"
          },
          {
            icon: Shield,
            title: "Quality & Reliability",
            description: "Every project is built to last with clean code, robust architecture, and comprehensive testing protocols.",
            accent: "from-blue-500 to-indigo-500"
          },
          {
            icon: Users,
            title: "Collaborative Partnership",
            description: "We work as an extension of your team, bringing transparency, communication, and shared accountability to every project.",
            accent: "from-purple-500 to-violet-500"
          },
          {
            icon: TrendingUp,
            title: "Growth-Focused Results",
            description: "We measure success by your growth. Every solution is designed to scale and adapt as your business evolves.",
            accent: "from-green-500 to-emerald-500"
          }
        ].map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group"
          >
            <Card className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.accent} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// Team/Expertise Section - FIXED
const ExpertiseSection = () => (
  <section className="py-20 bg-gradient-to-r from-emerald-900 to-blue-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          World-Class 
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Expertise</span>
        </h2>
        <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
          Our team combines technical mastery with creative vision to deliver exceptional results.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Code,
            title: "Full-Stack Development",
            skills: ["React & Next.js", "Node.js & Python", "Cloud Architecture", "API Design"],
            accent: "from-blue-400 to-cyan-400"
          },
          {
            icon: Palette,
            title: "Design & UX",
            skills: ["UI/UX Design", "Brand Identity", "Motion Graphics", "User Research"],
            accent: "from-purple-400 to-pink-400"
          },
          {
            icon: Rocket,
            title: "Digital Strategy",
            skills: ["Growth Hacking", "SEO & Analytics", "Conversion Optimization", "Market Analysis"],
            accent: "from-green-400 to-emerald-400"
          },
          {
            icon: Globe,
            title: "DevOps & Scale",
            skills: ["AWS & Azure", "Performance Optimization", "Security & Compliance", "CI/CD Pipelines"],
            accent: "from-orange-400 to-red-400"
          }
        ].map((expertise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className={`w-20 h-20 bg-gradient-to-r ${expertise.accent} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <expertise.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {expertise.title}
            </h3>
            <ul className="space-y-2">
              {expertise.skills.map((skill, i) => (
                <li key={i} className="text-emerald-200 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// Stats Section - FIXED
const StatsSection = () => (
  <section className="py-20 bg-gray-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          Proven Track Record of 
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> Success</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Numbers that speak to our commitment to excellence and client success.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { number: "100%", label: "Client Satisfaction", icon: Star },
          { number: "2025", label: "Founded In", icon: Award },
          { number: "10+", label: "Industries Served", icon: Globe },
          { number: "30+", label: "Team Certifications", icon: Shield }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-black text-white mb-2">
              {stat.number}
            </div>
            <div className="text-emerald-200">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// CTA Section - FIXED
const AboutCTA = ({ navigate }) => {
  return (
    <section className="py-24 bg-black">
      <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Work 
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"> Together?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss your vision and create something extraordinary that drives real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 text-white font-bold shadow-2xl transition-all duration-300 mb-4"
              onClick={() => navigate('/start-project')}
            >
              Start Your Project
              <Rocket className="ml-3 w-6 h-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300 mb-4"
              onClick={() => navigate('/learn-more')}
            >
              Learn More
              <Lightbulb className="ml-3 w-6 h-6" />
            </Button>
          </div>
          
          <p className="text-gray-500 mt-8">
            Free consultation • Personal approach • Exceptional results
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Main About Page Component
export default function AboutPage() {
  const [pageLoaded, setPageLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <title>About TechMotiveSupreme | Digital Innovation Leaders</title>
        <meta name="description" content="Learn about TechMotiveSupreme's mission, values, expertise, and proven track record in digital excellence." />
        <meta property="og:title" content="About TechMotiveSupreme | Digital Innovation Leaders" />
        <meta property="og:description" content="Discover our mission, values, and expertise in delivering digital excellence." />
        <meta property="og:image" content="/assets/dark-logo.png" /> {/* Use optimized image */}
        <meta property="og:url" content="https://www.techmotivesupreme.com/about" />
      </Helmet>
      <div className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <AboutHero navigate={navigate} />
        <MissionSection />
        <ExpertiseSection />
        <StatsSection />
        <AboutCTA navigate={navigate} />
        <Footer />
      </div>
    </>
  )
}