import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Users,
  Linkedin,
  Twitter,
  Mail,
  Github,
  Globe,
  ArrowRight,
  MapPin,
  Building,
  Briefcase,
  MessageCircle,
  UserPlus
} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "@/components/Footer"
import { Helmet } from "react-helmet"

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
const TeamHero = () => (
  <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden pt-12 md:pt-16">
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
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
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

    <div className="relative flex items-center justify-center min-h-[60vh] px-4 md:px-6 lg:px-8">
      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          className="mb-8 pt-4"
        >
          <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-purple-500/20 border-purple-400 text-purple-200 mb-8 backdrop-blur-sm">
            👥 Meet Our Team • The People Behind The Magic
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
        >
          The Talented Team 
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"> Behind </span>
          Our Success
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Meet our diverse team of 
          <span className="text-purple-400 font-semibold"> creative thinkers</span>, 
          <span className="text-indigo-400 font-semibold"> problem solvers</span>, and 
          <span className="text-violet-400 font-semibold"> digital innovators</span> dedicated to your success.
        </motion.p>
      </div>
    </div>
  </section>
)

// Leadership Section
const LeadershipSection = () => {
  const leaders = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      bio: "With over 15 years of experience in digital product development, Sarah leads our company vision and strategy. Before co-founding TechMotiveSupreme, she was VP of Product at TechGiant and holds an MBA from Stanford.",
      linkedin: "#",
      twitter: "#",
      email: "sarah@techmotive.com"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      bio: "Michael oversees all technical aspects of our projects and leads our engineering team. A former Google developer, he specializes in scalable architecture and emerging technologies.",
      linkedin: "#",
      twitter: "#",
      email: "michael@techmotive.com"
    },
    {
      name: "Elena Vasquez",
      role: "Chief Design Officer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      bio: "Elena brings 12 years of UX/UI expertise to our leadership team. She's passionate about creating intuitive, accessible designs that delight users and drive business results.",
      linkedin: "#",
      twitter: "#",
      email: "elena@techmotive.com"
    },
    {
      name: "David Kim",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      bio: "David ensures our day-to-day operations run smoothly while maintaining our high standards of quality and efficiency. His background in management consulting helps optimize our processes.",
      linkedin: "#",
      twitter: "#",
      email: "david@techmotive.com"
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
            Our
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"> Leadership </span>
            Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the visionaries who guide our company strategy and inspire our team to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 aspect-square"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    </div>
                    
                    <div className="md:w-2/3 p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                        {leader.name}
                      </h3>
                      
                      <p className="text-indigo-300 mb-4">
                        {leader.role}
                      </p>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {leader.bio}
                      </p>
                      
                      <div className="flex space-x-3">
                        <a href={leader.linkedin} className="p-2 bg-gray-700/50 rounded-full text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-300">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={leader.twitter} className="p-2 bg-gray-700/50 rounded-full text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-300">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${leader.email}`} className="p-2 bg-gray-700/50 rounded-full text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-300">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Members Grid
const TeamGrid = () => {
  // Filter options for departments
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Team member data
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Senior Frontend Developer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Maya Patel",
      role: "UI/UX Designer",
      department: "Design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "James Wilson",
      role: "Backend Engineer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Olivia Martinez",
      role: "Project Manager",
      department: "Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Ethan Lee",
      role: "Motion Designer",
      department: "Design",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Sophie Anderson",
      role: "Content Strategist",
      department: "Marketing",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Marcus Johnson",
      role: "DevOps Engineer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Ava Williams",
      role: "Product Manager",
      department: "Product",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Noah Garcia",
      role: "Full Stack Developer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Isabella Lopez",
      role: "Digital Strategist",
      department: "Marketing",
      image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Liam Taylor",
      role: "QA Engineer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    },
    {
      name: "Emma Wright",
      role: "Visual Designer",
      department: "Design",
      image: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageWebp: "/assets/team-member.webp"
    }
  ];
  
  // Get unique departments for filter
  const departments = ['All', ...new Set(teamMembers.map(member => member.department))];
  
  // Filter team members based on selected department
  const filteredMembers = activeFilter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-indigo-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Meet Our
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"> Amazing </span>
            Team
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            The talented individuals who make the magic happen every day.
          </p>
        </motion.div>

        {/* Department filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept, index) => (
            <Button
              key={index}
              variant={activeFilter === dept ? "default" : "outline"}
              className={`
                ${activeFilter === dept 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                  : 'border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300'}
                rounded-full px-6 transition-all duration-300
              `}
              onClick={() => setActiveFilter(dept)}
            >
              {dept}
            </Button>
          ))}
        </div>

        {/* Team members grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/30 transition-all duration-300 shadow-xl">
                <div className="aspect-square overflow-hidden relative">
                  <picture>
                    <source srcSet={member.imageWebp} type="image/webp" />
                    <img 
                      src={member.image}
                      alt={member.name}
                      width={member.width || 400}
                      height={member.height || 400}
                      loading="lazy"
                      className="rounded-full shadow-lg w-32 h-32 object-cover mx-auto mb-4"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors duration-300">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors duration-300">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors duration-300">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-300 text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Office Locations Section
const OfficesSection = () => {
  const locations = [
    {
      city: "San Francisco",
      address: "525 Market Street, Suite 2000",
      image: "https://images.unsplash.com/photo-1534050359320-02900022671e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      city: "Austin",
      address: "200 Congress Avenue, Suite 300",
      image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      city: "Berlin",
      address: "Friedrichstraße 68, 10117",
      image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
            Where We 
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"> Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our offices around the world where we collaborate, innovate, and create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl">
                <img 
                  src={location.image} 
                  alt={location.city} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-purple-400 mr-2" />
                    <h3 className="text-2xl font-bold text-white">{location.city}</h3>
                  </div>
                  <p className="text-gray-300">{location.address}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Culture Section
const CultureSection = () => {
  return (
    <section className="py-24 bg-black">
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
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"> Culture </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We believe in creating an environment where creativity thrives and everyone belongs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Team collaboration" 
                className="w-full h-80 object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Collaborative & Supportive</h3>
            <p className="text-gray-300 leading-relaxed">
              We believe the best work happens when diverse perspectives unite around a common goal. Our collaborative approach means we learn from each other and grow together.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Innovation workshop" 
                className="w-full h-80 object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Innovative & Bold</h3>
            <p className="text-gray-300 leading-relaxed">
              Innovation is in our DNA. We encourage experimental thinking, calculated risk-taking, and the pursuit of bold ideas that challenge the status quo.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700"
          >
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Diverse & Inclusive</h3>
            <p className="text-gray-300">
              We actively foster a diverse team and inclusive environment where everyone feels valued and empowered to contribute their unique perspectives.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700"
          >
            <Globe className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Remote-Friendly</h3>
            <p className="text-gray-300">
              We embrace remote work and flexible schedules, allowing our team to work where and when they're most productive.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700"
          >
            <Building className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Growth-Oriented</h3>
            <p className="text-gray-300">
              We invest in our team's professional development, providing opportunities to learn new skills, attend conferences, and advance their careers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Join Our Team Section
const JoinTeamSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-900 to-purple-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Want to Join Our
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"> Exceptional </span>
            Team?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for creating exceptional digital experiences. Check out our open positions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold shadow-2xl transition-all duration-300"
              onClick={() => navigate('/careers')}
            >
              View Open Positions
              <Briefcase className="ml-3 w-6 h-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Contact Us
              <MessageCircle className="ml-3 w-6 h-6" />
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-xl mx-auto">
            <div className="flex items-center mb-4">
              <UserPlus className="w-6 h-6 text-purple-300 mr-3" />
              <h3 className="text-xl font-bold text-white">Don't See a Perfect Fit?</h3>
            </div>
            <p className="text-gray-300">
              We're always interested in meeting talented individuals! Send us your resume and let us know how you can contribute to our team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Page Component
export default function MeetTheTeamPage() {
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
        <title>Meet the Team | TechMotiveSupreme</title>
        <meta name="description" content="Meet our talented team of creative thinkers, problem solvers, and digital innovators." />
        <meta property="og:title" content="Meet the Team | TechMotiveSupreme" />
        <meta property="og:description" content="Meet our talented team of creative thinkers, problem solvers, and digital innovators." />
        <meta property="og:image" content="/assets/dark-logo.png" />
        <meta property="og:url" content="https://techmotivesupreme.com/team" />
        <link rel="canonical" href="https://www.techmotivesupreme.com/team" />
      </Helmet>
      <div className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <TeamHero />
        <LeadershipSection />
        <TeamGrid />
        <OfficesSection />
        <CultureSection />
        <JoinTeamSection />
        <Footer />
      </div>
    </>
  );
}