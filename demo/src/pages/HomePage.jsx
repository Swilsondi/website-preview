import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Palette,
  Globe,
  TrendingUp,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Briefcase,
  Users
} from "lucide-react"
import { useEffect, useState, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { useNavigate } from 'react-router-dom';
import usePerformance from '@/hooks/usePerformance';
import { Helmet } from "react-helmet";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
}

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
            initial: { opacity: 0, y: 60 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}

const HeroSection = ({ handleNavigation }) => {
  return (
    <section className="relative min-h-[80vh] bg-black overflow-hidden pt-12 md:pt-16">
      <div className="relative flex items-center justify-center min-h-[80vh] px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">

          <SplitText className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            BUILD. LAUNCH. MONETIZE.
          </SplitText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl lg:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            TechMotive-Supreme builds custom websites for creators, brands, and entrepreneurs who are serious about growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button
              size="lg"
              className="text-base px-8 py-4 bg-white text-black hover:bg-neutral-100 font-semibold transition-colors duration-200 rounded-lg"
              onClick={() => handleNavigation("/pricing")}
            >
              Book Your Site
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-4 border border-neutral-700 text-neutral-300 hover:bg-white/5 hover:border-neutral-500 font-semibold transition-colors duration-200 rounded-lg bg-transparent"
              onClick={() => handleNavigation("/showcase")}
            >
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-3 gap-12 max-w-3xl mx-auto border-t border-white/[0.08] pt-14 text-center"
          >
            {[
              { number: "50+", label: "Sites Launched" },
              { number: "110%", label: "Avg ROI Increase" },
              { number: "48hrs", label: "Avg Turnaround" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="text-5xl lg:text-6xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-400 text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "High-Converting Websites",
      description: "Lightning-fast, mobile-first websites that turn visitors into customers. Built with modern tech and optimized for conversions.",
      features: ["Conversion Optimized", "Mobile-First", "SEO Ready"],
    },
    {
      icon: Palette,
      title: "Brand Identity & Design",
      description: "Complete visual identity that makes you unforgettable. From logos to brand guidelines that command attention.",
      features: ["Logo Design", "Brand Guidelines", "Visual Systems"],
    },
    {
      icon: TrendingUp,
      title: "Launch & Growth Strategy",
      description: "We don't just build and disappear. Get a complete roadmap to launch, scale, and monetize your digital presence.",
      features: ["Launch Strategy", "Growth Tactics", "Revenue Optimization"],
    }
  ]

  return (
    <section className="py-24 bg-neutral-950 border-t border-white/[0.06]">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            We don't just build.<br />We launch.
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg text-center">
            End-to-end solutions for creators and entrepreneurs who refuse to settle for average.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <Card className="h-full bg-neutral-900 border-neutral-800 hover:border-neutral-600 transition-colors duration-300 rounded-xl">
                <CardContent className="p-8 flex flex-col">
                  <div className="w-10 h-10 border border-neutral-700 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-5 h-5 text-neutral-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-neutral-500 mb-6 leading-relaxed text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-neutral-400 text-base">
                        <div className="w-1 h-1 rounded-full bg-neutral-500 mr-3 flex-shrink-0" />
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

const SocialProofSection = () => (
  <section className="py-20 bg-black border-t border-white/[0.06]">
    <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
          Trusted by creators and brands.
        </h2>
        <p className="text-neutral-500 text-lg">
          Real results from real projects.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800">
        {[
          { number: "50+", label: "Projects Launched", icon: Rocket },
          { number: "100%", label: "Client Satisfaction", icon: Star },
          { number: "$30k+", label: "Revenue Generated", icon: TrendingUp },
          { number: "24/7", label: "Support", icon: Users }
        ].map((stat, index) => (
          <div key={index} className="bg-black p-10 text-center">
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
              {stat.number}
            </div>
            <div className="text-neutral-500 text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const CTASection = () => {
  const navigate = useNavigate()
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/[0.06]">
      <div className="px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to build something real?
          </h2>

          <p className="text-neutral-400 mb-10 leading-relaxed text-lg max-w-xl mx-auto">
            Book a free 30-minute strategy session. No commitment, no templates — just a real conversation about your project.
          </p>

          <Button
            size="lg"
            className="text-base px-10 py-4 bg-white text-black hover:bg-neutral-100 font-semibold transition-colors duration-200 rounded-lg"
            onClick={() => window.open('https://calendly.com/techmotivesupreme/30min', '_blank')}
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <p className="text-neutral-600 text-sm mt-6">
            Free 30-minute strategy session · No commitment required
          </p>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const navigate = useNavigate();

  usePerformance('HomePage');

  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K85QK9ZX');`
      }} />
      <Helmet>
        <title>TechMotiveSupreme | Premium Web Development & Branding</title>
        <meta name="description" content="TechMotive-Supreme builds premium websites that convert. Perfect for creators, entrepreneurs & brands. Get a stunning affordable site that drives real results." />
        <meta property="og:title" content="TechMotiveSupreme | Premium Web Development & Branding" />
        <meta property="og:description" content="High-performing websites and digital branding for creators, brands, and entrepreneurs." />
        <meta property="og:image" content="/assets/dark-logo.png" />
        <meta property="og:url" content="https://www.techmotivesupreme.com" />
        <link rel="canonical" href="https://www.techmotivesupreme.com/" />
      </Helmet>
      <div className={`min-h-screen bg-black w-full overflow-auto transition-opacity duration-500 ${pageLoaded ? "opacity-100" : "opacity-0"}`}>
        <HeroSection handleNavigation={handleNavigation} />
        <ServicesSection />
        <SocialProofSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
