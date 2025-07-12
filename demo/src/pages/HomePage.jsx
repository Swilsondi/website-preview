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
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { Link } from 'react-router-dom';
import useScrollControl from '@/hooks/useScrollControl';

/**
 * HomePage Component
 * 
 * This is the main landing page for the website. It serves as the primary entry point
 * for users and showcases the key services and value propositions of the agency.
 * 
 * The page is structured in sections:
 * 1. Hero Section - Eye-catching introduction with CTA
 * 2. Services Overview - Showcases main service offerings
 * 3. Featured Work - Portfolio highlights
 * 4. Testimonials - Social proof from clients
 * 5. Process - How we work with clients
 * 6. CTA Section - Final call to action
 * 
 * Each section follows the standardized padding pattern:
 * - Hero sections: pt-12 md:pt-16 (top padding)
 * - Content containers: pt-4 (inner content padding)
 * 
 * Performance considerations:
 * - Uses lazy loading for images below the fold
 * - Implements intersection observer for animations
 * - Optimizes animation for reduced motion preferences
 */
const HomePage = () => {
  // Control scroll behavior for smooth anchor navigation
  useScrollControl(true);
  
  // Track whether animations should play based on user preferences
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  // Reference to feature section for scroll navigation
  const featuresRef = useRef(null);

  // Check user's motion preferences
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShouldAnimate(!prefersReducedMotion);
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 
        Hero Section
        This section includes:
        - Main headline and subheading
        - CTA buttons
        - Background animation
        
        Note the standard padding pattern:
        - pt-12 md:pt-16 for top padding (adjusts for mobile/desktop)
        - pt-4 for content container
      */}
      <header className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 overflow-hidden pt-12 md:pt-16">
        {/* Background Elements - Animated gradient spheres */}
        <div className="absolute inset-0 overflow-hidden">
          {shouldAnimate && (
            <>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-5xl opacity-[0.15] animate-blob"></div>
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-5xl opacity-[0.15] animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-5xl opacity-[0.15] animate-blob animation-delay-4000"></div>
            </>
          )}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Build. Launch. Monetize.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10"
              variants={itemVariants}
            >
              We create stunning websites that drive business growth and deliver exceptional user experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link 
                to="/pricing" 
                className="px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
              >
                View Pricing
              </Link>
              
              <Link 
                to="/portfolio" 
                className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                See Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* 
        Services Section 
        This section showcases the key service offerings with:
        - Section headline
        - Service cards with icons
        - "Learn more" links for each service
      */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive digital solutions tailored to your specific needs and goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Web Design */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-purple-600/20 flex items-center justify-center rounded-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Web Design</h3>
              <p className="text-gray-400 mb-6">
                Stunning, responsive websites that look great on any device and engage your audience effectively.
              </p>
              <Link to="/services#web-design" className="text-purple-400 hover:text-purple-300 inline-flex items-center font-medium">
                Learn more 
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Service 2: Development */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-blue-600/20 flex items-center justify-center rounded-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-400 mb-6">
                Fast, secure, and scalable websites built with modern technologies and best practices.
              </p>
              <Link to="/services#development" className="text-blue-400 hover:text-blue-300 inline-flex items-center font-medium">
                Learn more 
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Service 3: E-commerce */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-14 h-14 bg-pink-600/20 flex items-center justify-center rounded-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">E-Commerce</h3>
              <p className="text-gray-400 mb-6">
                Custom online stores that drive sales, with seamless payment processing and inventory management.
              </p>
              <Link to="/services#ecommerce" className="text-pink-400 hover:text-pink-300 inline-flex items-center font-medium">
                Learn more 
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        Featured Work Section
        This section highlights portfolio pieces:
        - Section headline
        - Featured projects with images
        - CTA to full portfolio
      */}
      <section className="py-20 bg-gray-800" ref={featuresRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Check out some of our recent projects and see the results we deliver.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This would typically be mapped from a data array */}
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="relative group overflow-hidden rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
              >
                <img 
                  src={`https://source.unsplash.com/random/600x400?website,${item}`} 
                  alt={`Project ${item}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                  <p className="text-gray-300 mb-4">Brief description of the project and the results achieved.</p>
                  <Link to={`/portfolio/project-${item}`} className="text-white font-medium inline-flex items-center">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Full Portfolio
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 
        Testimonials Section
        This section provides social proof:
        - Section headline
        - Client testimonials with ratings
        - Client logos
      */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This would typically be mapped from a testimonials array */}
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc",
                quote: "Working with this team was an absolute pleasure. They delivered our website on time and exceeded all expectations.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Marketing Director, GrowFast",
                quote: "Our e-commerce sales have increased by 200% since launching our new website. The team was professional and responsive.",
                rating: 5
              },
              {
                name: "Emma Rodriguez",
                role: "Founder, Design Studio",
                quote: "The attention to detail and creative solutions provided by the team helped us stand out in a competitive market.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {/* Star rating */}
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-300 italic mb-6">"{testimonial.quote}"</blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        CTA Section
        Final call to action to convert visitors:
        - Eye-catching headline
        - Subheading with value proposition
        - Primary and secondary CTAs
      */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Let's work together to create a stunning website that drives results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/start-project" 
                className="px-8 py-4 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Your Project
              </Link>
              
              <Link 
                to="/contact?type=consultation" 
                className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;