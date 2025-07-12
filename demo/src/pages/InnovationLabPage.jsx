import React from 'react';
import Footer from '@/components/Footer';

const InnovationLabPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-20 text-center bg-gradient-to-r from-purple-500 to-pink-600 pt-12 md:pt-16">
        <div className="pt-4">
          <h1 className="text-6xl font-extrabold text-white">Innovation Lab</h1>
          <p className="text-2xl mt-4 text-gray-200">Custom Branding Solutions Tailored to Your Needs</p>
        </div>
      </header>

      <main className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Branding Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Logo Design", "Brand Identity", "Custom Typography", "Color Systems", "Packaging Design", "Digital Branding"].map((service, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-300">We create unique and memorable branding solutions that resonate with your audience.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Why Choose Us?</h2>
          <p className="text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            Our team of experts combines creativity and strategy to deliver branding solutions that elevate your business and leave a lasting impression.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InnovationLabPage;
