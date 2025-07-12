import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

const TopNavbar = ({ isOnline }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              Tech Motive Supreme
            </Link>
          </div>
          
          {/* Right side items - only cart button */}
          <div className="flex items-center">
            <CartButton />
            {/* Network status indicator */}
            {isOnline === false && (
              <div className="ml-4 px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                Offline
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
