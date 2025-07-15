import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

const TopNavbar = ({ isOnline }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg">
      {/* Removed max-width and horizontal padding to allow true edge-to-edge */}
      <div className="w-full">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name - absolutely pushed to the left */}
          <div className="flex-shrink-0 ml-0 pl-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="rounded-full overflow-hidden bg-transparent flex items-center justify-center h-9 w-9">
                <picture>
                  <source srcSet="/src/assets/dark-logo.webp" type="image/webp" />
                  <img 
                    src="/src/assets/dark-logo.png" 
                    alt="Tech Motive Supreme logo" 
                    width="120"
                    height="40"
                    loading="eager"
                    className="h-10 w-auto"
                  />
                </picture>
              </div>
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                TechMotive-Supreme
              </span>
            </Link>
          </div>
          
          {/* Right side items - only cart button */}
          <div className="flex items-center pr-4">
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
