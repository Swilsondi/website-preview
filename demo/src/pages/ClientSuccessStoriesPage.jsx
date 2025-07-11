import React from 'react';
import Footer from '@/components/Footer';

const ClientSuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-20 text-center bg-gradient-to-r from-green-500 to-teal-600">
        <h1 className="text-6xl font-extrabold text-white">Client Success Stories</h1>
        <p className="text-2xl mt-4 text-gray-200">Real Stories, Real Results</p>
      </header>

      <main className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Startup Alpha", "Enterprise Beta"].map((client, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{client}</h3>
                <p className="text-gray-300">Learn how we helped {client} achieve their goals through innovative solutions and dedicated support.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["The team exceeded our expectations!", "Professional and efficient, highly recommend!"].map((testimonial, index) => (
              <blockquote key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
                <p className="text-gray-300 italic">"{testimonial}"</p>
                <footer className="mt-4 text-gray-400">- Client {index + 1}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClientSuccessStoriesPage;
