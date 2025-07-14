import React from 'react';
import Footer from '@/components/Footer';
import { useScrollControl } from '@/hooks/useScrollControl';

const LearnMorePage = () => {
  // Use our custom hook for scroll control
  useScrollControl(true);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative py-20 text-center bg-gradient-to-r from-green-500 to-teal-600">
        <div>
          <h1 className="text-6xl font-extrabold text-white">Learn More</h1>
          <p className="text-2xl mt-4 text-gray-200">Discover more about our services and expertise.</p>
        </div>
      </header>

      {/* Services Section */}
      <main className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Consulting</h3>
              <p className="text-gray-300">Expert advice to help you make informed decisions and achieve your goals.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Development</h3>
              <p className="text-gray-300">Custom solutions tailored to your unique business needs.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Support</h3>
              <p className="text-gray-300">Ongoing assistance to ensure your success and satisfaction.</p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project Alpha</h3>
              <p className="text-gray-300">How we helped a startup achieve exponential growth through innovative solutions.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Enterprise Beta</h3>
              <p className="text-gray-300">Our collaboration with a large enterprise to streamline operations and boost efficiency.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">What services do you offer?</h3>
              <p className="text-gray-300">We offer consulting, development, and support services tailored to your needs.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">How can I get started?</h3>
              <p className="text-gray-300">Simply fill out our inquiry form, and our team will get in touch with you.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMorePage;
