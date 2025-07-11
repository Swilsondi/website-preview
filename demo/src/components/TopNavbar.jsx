import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

const TopNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Branding */}
        <Link to="/" className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Tech Motive Supreme
        </Link>

        {/* Cart button */}
        <div className="flex items-center">
          <CartButton />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
