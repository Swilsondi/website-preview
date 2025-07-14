import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Calendar,
  Target, 
  TrendingUp, 
  Award, 
  Users, 
  Rocket,
  ArrowRight,
  Heart,
  Lightbulb,
  Globe,
  Clock,
  BookOpen,
  Map,
  Sparkles
} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "@/components/Footer"
import darkLogo from '@/assets/dark-logo.png'

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Hero Section
const StoryHero = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 overflow-hidden pt-12 md:pt-16">
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
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
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
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-500 rounded-full blur-3xl"
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
          <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-blue-500/20 border-blue-400 text-blue-200 mb-8 backdrop-blur-sm">
            📖 Our Story • Where Vision Meets Action
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
        >
          The Journey That 
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent"> Defined </span>
          Our Success
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          From humble beginnings to industry leadership, discover the 
          <span className="text-blue-400 font-semibold"> passion </span>
          and 
          <span className="text-teal-400 font-semibold"> innovation </span>
          that drive our company forward.
        </motion.p>
      </div>
    </div>
  </section>
)

// --- Origin Story Section (Personalized) ---
const OriginStorySection = () => (
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
          Where It All
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"> Began</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A real story of hustle, learning, and helping creators and small businesses thrive online.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" 
              alt="Our Beginnings" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
            <div className="text-white text-center">
              <div className="font-bold text-2xl">2025</div>
              <div className="text-xs uppercase tracking-wider">Founded</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">A Realistic Start for Real Results</h3>
          <div className="prose prose-lg prose-invert">
            <p className="text-gray-300 mb-6 leading-relaxed">
              TechMotiveSupreme was born in 2025 out of a simple idea: help creators and small businesses get online with websites that actually work for them. No big investors, no fancy offices—just a laptop, a passion for design, and a drive to make a difference for real people.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our founder started by building sites for friends and local businesses, learning what really matters: clear communication, fast delivery, and results that help clients grow. Every project was a chance to learn, improve, and build trust.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, TechMotiveSupreme is still focused on what matters most: helping you launch, grow, and succeed online—without the agency fluff. We’re proud to be a small, nimble team that puts people first and delivers real value, every time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)
// --- End Origin Story Section ---

// --- Timeline Section (Simplified & Realistic) ---
const TimelineSection = () => {
  const milestones = [
    {
      year: "2025",
      title: "First Client Launched",
      description: "Built our first website for a local business and saw their sales grow.",
      icon: Rocket
    },
    {
      year: "Feburary - 2025",
      title: "Word of Mouth Growth",
      description: "Happy clients referred friends and family, helping us grow project by project.",
      icon: Users
    },
    {
      year: "April - 2025",
      title: "Expanding Services",
      description: "Added branding, SEO, and e-commerce to help clients do even more online.",
      icon: TrendingUp
    },
    {
      year: "June - 2025",
      title: "50+ Projects Completed",
      description: "Reached a milestone of 50+ websites launched for creators and small businesses.",
      icon: Award
    },
    {
      year: "July - 2025",
      title: "Still People-First",
      description: "Focused on honest work, fast results, and helping every client succeed—no matter their size.",
      icon: Heart
    }
  ];
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"> Journey </span>
            So Far
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            A real timeline of growth, learning, and helping clients win online.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-emerald-500 transform md:-translate-x-0.5 hidden md:block"></div>
          <div className="space-y-16 relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg shadow-teal-500/50 flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10 hidden md:flex">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex md:hidden items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg shadow-teal-500/50 flex items-center justify-center mr-4">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-teal-400 text-xl font-bold">{milestone.year}</span>
                      </div>
                      <div className="hidden md:block mb-3">
                        <span className="text-teal-400 text-xl font-bold">{milestone.year}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <milestone.icon className="w-5 h-5 mr-2 text-blue-400" />
                        <h3 className="text-2xl font-bold text-white">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-300">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Values Section
const ValuesSection = () => {
  const values = [
    {
      title: "Client Success",
      description: "We measure our success by the results we create for our clients. Their goals are our goals.",
      icon: Target,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Relentless Innovation",
      description: "We constantly explore new technologies and approaches to stay ahead of industry trends.",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Collaborative Spirit",
      description: "We believe the best work happens when diverse perspectives unite around a common goal.",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Honest Partnership",
      description: "We believe in transparent communication and building long-term relationships based on trust.",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Quality Craftsmanship",
      description: "We take pride in our work and never compromise on the excellence of our deliverables.",
      icon: Award,
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of growth where every team member is encouraged to develop new skills.",
      icon: BookOpen,
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
            Our Core
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"> Values </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The guiding principles that shape our culture and inform every decision we make.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Team Photo Section
const TeamPhotoSection = ({ navigate }) => (
  <section className="py-24 bg-black">
    <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          The People 
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"> Behind Our Success</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Our talented and diverse team is our greatest asset and the driving force behind our achievements.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden shadow-2xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="TechMotiveSupreme Team" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Stronger Together</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our team of 7 professionals bringing diverse perspectives and expertise to every project. Starting from the implementation of the design to the security of the code we handle all diverse areas. 
            </p>
            
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

// Vision for the Future Section
const VisionSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Looking 
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent"> Forward</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Our vision is about more than just websites—it's about empowering creators and businesses to thrive in a digital world, together.
          </p>
          <blockquote className="text-2xl text-blue-200 italic font-light leading-relaxed mb-8 mx-auto max-w-2xl">
            "My goal for TechMotiveSupreme is simple: to help real people and small teams turn their ideas into digital realities that make a difference. We believe in honest work, creative solutions, and building lasting partnerships. Every project is personal to us, and our team is committed to your growth, your vision, and your success."
          </blockquote>
          <div className="flex flex-col items-center mb-6">
            <img 
              src={darkLogo} 
              alt="Spencer Wilson / TechMotiveSupreme Logo"
              className="w-28 h-28 object-contain rounded-full border-4 border-blue-500 bg-gray-900 mb-3"
            />
            <div className="text-center">
              <p className="text-white font-semibold">Spencer Wilson</p>
              <p className="text-blue-400 text-sm">CEO & Founder</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold shadow-2xl transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Partner With Us
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300"
              onClick={() => navigate('/innovation-lab')}
            >
              Explore Our Innovation Lab
              <Lightbulb className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Page Component
export default function OurStoryPage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const navigate = useNavigate();

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
      <StoryHero />
      <OriginStorySection />
      <TimelineSection />
      <ValuesSection />
      <TeamPhotoSection navigate={navigate} />
      <VisionSection navigate={navigate} />
      <Footer />
    </div>
  );
}