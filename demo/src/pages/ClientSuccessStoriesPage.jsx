import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Quote,
  Star,
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  User,
  Globe,
  Building,
  BarChart3,
  Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

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
const SuccessHero = () => (
  <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-cyan-900 to-teal-900 overflow-hidden pt-12 md:pt-16">
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
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
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

    <div className="relative flex items-center justify-center min-h-[60vh] px-4 md:px-6 lg:px-8">
      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          className="mb-8 pt-4"
        >
          <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-teal-500/20 border-teal-400 text-teal-200 mb-8 backdrop-blur-sm">
            💼 Client Success Stories • Real Results
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
        >
          Transforming
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent"> Challenges </span>
          Into Success
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          See how our solutions have helped
          <span className="text-teal-400 font-semibold"> real businesses </span>
          achieve
          <span className="text-cyan-400 font-semibold"> extraordinary results </span>
          across industries.
        </motion.p>
      </div>
    </div>
  </section>
)

// Featured Case Study
const FeaturedCaseStudy = () => {
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
            Featured
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"> Success Story</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our work with FutureTech transformed their online presence and doubled conversion rates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Case study hero image */}
          <div className="relative h-[30rem] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt="FutureTech Office"
              className="w-full h-full object-cover object-center"
            />

            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
              <div className="grid md:grid-cols-2 gap-8 items-end">
                <div>
                  <Badge className="mb-4 bg-teal-500/20 text-teal-200 border-teal-400/30 px-3 py-1">
                    <Globe className="w-4 h-4 mr-2" /> Tech Industry
                  </Badge>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">FutureTech: Redefining Digital Experience</h3>

                  <p className="text-gray-300 text-lg mb-6">
                    How we helped a leading tech company transform their customer acquisition strategy and double their conversion rate in just 3 months.
                  </p>

                  <Button
                    className="text-lg bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                <div className="hidden md:flex justify-end">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-teal-500/20 max-w-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-white">Results Achieved</h4>
                      <TrendingUp className="w-5 h-5 text-teal-400" />
                    </div>

                    <div className="space-y-4">
                      {[
                        { metric: "Conversion Rate", value: "+105%", period: "in 3 months" },
                        { metric: "User Engagement", value: "+78%", period: "average session time" },
                        { metric: "Mobile Traffic", value: "+92%", period: "year-over-year" }
                      ].map((stat, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-400">{stat.metric}</span>
                          <div className="text-right">
                            <span className="text-teal-400 font-bold">{stat.value}</span>
                            <span className="text-gray-500 text-xs block">{stat.period}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Case Studies Grid
const CaseStudiesGrid = () => {
  const caseStudies = [
    {
      client: "HealthPlus",
      industry: "Healthcare",
      icon: User,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      problem: "Outdated appointment scheduling causing 40% no-shows",
      solution: "Mobile-friendly booking platform with automated reminders",
      results: ["No-shows reduced by 75%", "32% increase in appointments", "91% patient satisfaction"]
    },
    {
      client: "RetailGrow",
      industry: "E-commerce",
      icon: Building,
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      problem: "Poor mobile conversion rates (under 1%)",
      solution: "Complete UX redesign with mobile-first approach",
      results: ["Mobile conversion up 4.2%", "Cart abandonment down 35%", "Revenue increase of $16K"]
    },
    {
      client: "FinSecure",
      industry: "Finance",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
      problem: "Outdated financial dashboard with poor user adoption",
      solution: "Modern, intuitive financial management platform",
      results: ["User adoption up 128%", "Active users increased 84%", "Customer retention up 42%"]
    },
    {
      client: "TravelXpert",
      industry: "Travel",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      problem: "Fragmented booking experience with high abandonment",
      solution: "Unified cross-platform booking experience",
      results: ["Booking completion up 65%", "Customer support calls down 48%", "Mobile bookings increased 94%"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-cyan-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            More Client
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"> Success Stories</span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            Real-world examples of how our solutions transform businesses across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-cyan-500/20 text-cyan-200 border-cyan-400/30 px-3 py-1">
                        <study.icon className="w-4 h-4 mr-2" /> {study.industry}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{study.client}</h3>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-gray-400 text-sm uppercase font-medium mb-1">The Challenge</h4>
                        <p className="text-gray-300">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm uppercase font-medium mb-1">Our Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm uppercase font-medium mb-2">Results Achieved</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-baseline">
                              <ChevronRight className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Remove the Read full case study button */}
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

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with TechMotiveSupreme transformed our online presence. They didn't just build us a website — they built us a growth engine that continues to deliver results.",
      author: "Grayson Belt",
      role: "CEO, RetailGrow",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
    },
    {
      quote: "Their strategic approach to UX design completely revolutionized our customer journey. Our conversion rates have never been higher.",
      author: "Michael Chen",
      role: "Marketing Director, FinSecure",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      quote: "Not only did they deliver a world-class mobile experience, but they did it faster and with more attention to detail than any agency we've ever worked with.",
      author: "Elena Rodriguez",
      role: "Product Manager, TravelXpert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
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
            What Our Clients
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"> Say About Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it — hear directly from the businesses we've helped succeed.
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-teal-500/20 absolute top-8 left-8" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-teal-500/30">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <blockquote>
                  <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <footer>
                    <div className="flex items-center">
                      <div>
                        <cite className="text-lg font-semibold text-white not-italic">
                          {testimonials[activeIndex].author}
                        </cite>
                        <p className="text-teal-400">{testimonials[activeIndex].role}</p>
                      </div>

                      <div className="ml-auto flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500" fill="#EAB308" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-teal-500' : 'bg-gray-700'
                } transition-colors duration-200`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-r from-teal-900 to-cyan-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Become Our Next
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent"> Success Story?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's work together to transform your challenges into opportunities and achieve extraordinary results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold shadow-2xl transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Start Your Project
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300"
              onClick={() => navigate('/services')}
            >
              Explore Our Services
              <Briefcase className="ml-3 w-6 h-6" />
            </Button>
          </div>

          <p className="text-gray-400 mt-8">
            Results-driven • Client-focused • Excellence in delivery
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Main Page Component
export default function ClientSuccessStoriesPage() {
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
      <SuccessHero />
      <FeaturedCaseStudy />
      <CaseStudiesGrid />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
