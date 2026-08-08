import React from 'react';
import Footer from '@/components/Footer';
import { useScrollControl } from '@/hooks/useScrollControl';
import { Helmet } from "react-helmet";

const LearnMorePage = () => {
  // Use our custom hook for scroll control
  useScrollControl(true);

  return (
    <>
      <Helmet>
        <title>Learn More | TechMotiveSupreme</title>
        <meta name="description" content="Discover more about our services, expertise, and case studies at TechMotiveSupreme." />
        <meta property="og:title" content="Learn More | TechMotiveSupreme" />
        <meta property="og:description" content="Discover more about our services, expertise, and case studies at TechMotiveSupreme." />
        <meta property="og:image" content="https://www.techmotivesupreme.com/dark-logo.png" />
        <meta property="og:url" content="https://www.techmotivesupreme.com/learn-more" />
        <meta name="twitter:image" content="https://www.techmotivesupreme.com/dark-logo.png" />
        <link rel="canonical" href="https://www.techmotivesupreme.com/learn-more" />
      </Helmet>
      <div className="min-h-screen bg-black w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-black overflow-hidden pt-16">
          <div className="min-h-[calc(60vh-4rem)] flex items-center justify-center px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                Learn More
              </h1>
              <p className="text-2xl lg:text-3xl text-neutral-400 leading-relaxed">
                Discover more about our services and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-neutral-950 border-t border-white/[0.06]">
          <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Consulting</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">Expert advice to help you make informed decisions and achieve your goals.</p>
              </div>
              <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">Custom solutions tailored to your unique business needs.</p>
              </div>
              <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Support</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">Ongoing assistance to ensure your success and satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 bg-black border-t border-white/[0.06]">
          <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 text-center">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Project Alpha</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">How we helped a startup achieve exponential growth through innovative solutions.</p>
              </div>
              <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Beta</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">Our collaboration with a large enterprise to streamline operations and boost efficiency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-neutral-950 border-t border-white/[0.06]">
          <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">What services do you offer?</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">We offer consulting, development, and support services tailored to your needs.</p>
              </div>
              <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">How can I get started?</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">Simply fill out our inquiry form, and our team will get in touch with you.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LearnMorePage;
