import React from 'react';
import Footer from '@/components/Footer';
import { useScrollControl } from '@/hooks/useScrollControl';
import { useNavigate } from 'react-router-dom';

const StartProjectPage = () => {
  // Use our custom hook for scroll control
  useScrollControl(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative py-20 text-center bg-gradient-to-r from-blue-500 to-purple-600 pt-12 md:pt-16">
        <div className="pt-4">
          <h1 className="text-6xl font-extrabold text-white">Start Your Project</h1>
          <p className="text-2xl mt-4 text-gray-200">Let us help you bring your vision to life with our expertise.</p>
          <button 
            className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
            onClick={() => navigate('/pricing')}
          >
            Get Started Now
          </button>
        </div>
      </header>

      {/* Benefits Section */}
      <main className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Why Start Your Project With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-300">Our team of professionals ensures your project is handled with care and expertise.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-300">We tailor our services to meet your unique needs and goals.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Timely Delivery</h3>
              <p className="text-gray-300">We prioritize efficiency to deliver your project on time without compromising quality.</p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li>Fill out our project inquiry form with your requirements.</li>
            <li>Our team reviews your inquiry and schedules a consultation.</li>
            <li>We provide a detailed plan and timeline for your project.</li>
            <li>Once approved, we begin working on your project with regular updates.</li>
          </ol>
        </section>

        {/* Testimonials */}
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="p-6 bg-gray-800 rounded-lg shadow-md">
              <p className="text-gray-300 italic">"The team exceeded our expectations and delivered a fantastic product!"</p>
              <footer className="mt-4 text-gray-400">- Alex Johnson</footer>
            </blockquote>
            <blockquote className="p-6 bg-gray-800 rounded-lg shadow-md">
              <p className="text-gray-300 italic">"Professional, efficient, and a pleasure to work with. Highly recommend!"</p>
              <footer className="mt-4 text-gray-400">- Sarah Lee</footer>
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StartProjectPage;
