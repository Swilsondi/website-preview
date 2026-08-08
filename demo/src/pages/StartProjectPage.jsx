import React from 'react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { useScrollControl } from '@/hooks/useScrollControl';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";

const StartProjectPage = () => {
  // Use our custom hook for scroll control
  useScrollControl(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Helmet>
        <link rel="canonical" href="https://www.techmotivesupreme.com/start-project" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden pt-16">
        <div className="min-h-[calc(80vh-4rem)] flex items-center justify-center px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Start Your Project
            </h1>
            <p className="text-2xl lg:text-3xl text-neutral-400 mb-10 leading-relaxed">
              Let us help you bring your vision to life with our expertise.
            </p>
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-white text-black hover:bg-neutral-100 font-semibold transition-colors duration-200"
              onClick={() => navigate('/pricing')}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/[0.06]">
        <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 text-center">Why Start Your Project With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">Our team of professionals ensures your project is handled with care and expertise.</p>
            </div>
            <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">We tailor our services to meet your unique needs and goals.</p>
            </div>
            <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Timely Delivery</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">We prioritize efficiency to deliver your project on time without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 bg-black border-t border-white/[0.06]">
        <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 text-center">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-neutral-300 text-lg">
            <li>Fill out our project inquiry form with your requirements.</li>
            <li>Our team reviews your inquiry and schedules a consultation.</li>
            <li>We provide a detailed plan and timeline for your project.</li>
            <li>Once approved, we begin working on your project with regular updates.</li>
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-950 border-t border-white/[0.06]">
        <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
              <p className="text-neutral-300 text-lg italic">"The team exceeded our expectations and delivered a fantastic product!"</p>
              <footer className="mt-4 text-neutral-500">- Alex Johnson</footer>
            </blockquote>
            <blockquote className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
              <p className="text-neutral-300 text-lg italic">"Professional, efficient, and a pleasure to work with. Highly recommend!"</p>
              <footer className="mt-4 text-neutral-500">- Sarah Lee</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartProjectPage;
