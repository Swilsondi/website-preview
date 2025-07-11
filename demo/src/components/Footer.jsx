import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tech Motive Supreme. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
