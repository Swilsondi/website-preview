import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Lightbulb,
  PenTool,
  Palette,
  Type,
  Layers,
  Package,
  Globe,
  PieChart,
  BarChart3,
  Code,
  ArrowRight,
  Brain,
  Cpu,
  Share2,
  Lock,
  AlertTriangle,
  Sparkles
} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "@/components/Footer"

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Hero Section
const InnovationHero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-violet-900 to-indigo-900 overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-500 rounded-full blur-3xl"
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
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative flex items-center justify-center min-h-[70vh] px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
              className="mb-8 pt-4"
            >
              <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-violet-500/20 border-violet-400 text-violet-200 mb-8 backdrop-blur-sm">
                🧪 Innovation Lab • Where Ideas Take Shape
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
            >
              Pioneering the 
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent"> Future </span>
              of Digital Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Our innovation lab combines 
              <span className="text-violet-400 font-semibold"> cutting-edge technology </span>
              with 
              <span className="text-indigo-400 font-semibold"> creative thinking </span>
              to develop solutions that reshape industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <Button 
                size="lg" 
                className="text-lg px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => navigate('/showcase')}
              >
                Explore Our Innovations
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Add spacing between hero and next section */}
      <div className="h-16 md:h-24 lg:h-32"></div>
    </>
  )
}

// Branding Services Grid
const BrandingServices = () => {
  const services = [
    {
      icon: PenTool,
      title: "Logo Design",
      description: "Unique, memorable logos that encapsulate your brand's identity and values.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Comprehensive visual systems that create a cohesive and distinctive brand presence.",
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: Type,
      title: "Custom Typography",
      description: "Bespoke typefaces and typography systems that enhance brand recognition.",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Layers,
      title: "Color Systems",
      description: "Strategic color palettes that evoke specific emotions and support brand messaging.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Package,
      title: "Packaging Design",
      description: "Eye-catching packaging solutions that stand out on shelves and enhance the customer experience.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Digital Branding",
      description: "Consistent brand implementation across websites, apps, and digital platforms.",
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Innovative 
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> Branding </span>
            Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We create distinctive brand experiences that captivate audiences and drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center text-center justify-center"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-violet-500/50 transition-all duration-300 flex flex-col items-center justify-center">
                <CardContent className="p-8 flex flex-col items-center justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 mx-auto`}>
                    <service.icon className="w-8 h-8 text-white mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors duration-300 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Our Innovation Process
const InnovationProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-violet-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Our Innovation 
            <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent"> Process</span>
          </h2>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto">
            A systematic approach that transforms bold ideas into groundbreaking solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process connector line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-indigo-500 transform md:-translate-x-0.5 hidden md:block"></div>
          
          <div className="space-y-16 relative">
            {[
              {
                number: "01",
                title: "Research & Discovery",
                description: "We begin with deep research into market trends, user needs, and technology capabilities to identify opportunities for innovation.",
                icon: Lightbulb
              },
              {
                number: "02",
                title: "Ideation & Concept Development",
                description: "Through collaborative workshops and creative sessions, we generate bold ideas and develop them into viable concepts.",
                icon: Brain
              },
              {
                number: "03",
                title: "Prototyping & Testing",
                description: "We build working prototypes and test them rigorously with real users to validate assumptions and refine the experience.",
                icon: Code
              },
              {
                number: "04",
                title: "Refinement & Implementation",
                description: "Based on testing insights, we refine the solution and develop a comprehensive implementation strategy for successful launch.",
                icon: Cpu
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Process node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/50 flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10 hidden md:flex">
                  <step.icon className="w-4 h-4 text-white" />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex md:hidden items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/50 flex items-center justify-center mr-4">
                          <step.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-fuchsia-400 text-xl font-bold">{step.number}</span>
                      </div>
                      
                      <div className="hidden md:block mb-3">
                        <span className="text-fuchsia-400 text-xl font-bold">{step.number}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for opposite side */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Technology & Innovation Showcase
const TechnologyShowcase = () => {
  const technologies = [
    {
      title: "Artificial Intelligence",
      description: "We leverage machine learning and AI to create intelligent solutions that learn and adapt to user behavior.",
      icon: Brain,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Augmented Reality",
      description: "Our AR applications blend digital and physical worlds to create immersive brand experiences.",
      icon: Cpu,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Blockchain Solutions",
      description: "We develop secure, transparent blockchain systems for authentication and digital asset management.",
      icon: Lock,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Data Visualization",
      description: "Complex data transformed into intuitive, interactive visualizations for better decision-making.",
      icon: BarChart3,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Voice Interfaces",
      description: "Natural language processing solutions that enable conversational interactions with your brand.",
      icon: Share2,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Predictive Analytics",
      description: "Foresight-driven solutions that anticipate customer needs and market trends for strategic advantage.",
      icon: PieChart,
      color: "from-cyan-500 to-blue-500"
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Cutting-Edge 
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent"> Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We harness the power of emerging technologies to create forward-thinking solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center text-center justify-center"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col items-center justify-center">
                <CardContent className="p-8 flex flex-col items-center justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 mx-auto`}>
                    <tech.icon className="w-8 h-8 text-white mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-fuchsia-400 transition-colors duration-300 text-center">
                    {tech.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-center">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const InnovationCTA = () => {
  const navigate = useNavigate();
  
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
            Ready to
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent"> Innovate </span>
            With Us?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's collaborate to create groundbreaking solutions that push boundaries and set new industry standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 hover:from-violet-700 hover:via-fuchsia-700 hover:to-indigo-700 text-white font-bold shadow-2xl transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Schedule a Consultation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300"
              onClick={() => navigate('/client-success-stories')}
            >
              View Success Stories
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          
          <p className="text-gray-500 mt-8">
            Innovation • Creativity • Forward-thinking solutions
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Main Page Component
export default function InnovationLabPage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Slight delay ensures smoother transition after route change
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <InnovationHero />
      <BrandingServices />
      <InnovationProcess />
      <TechnologyShowcase />
      <InnovationCTA />
      <Footer />
    </div>
  );
}
