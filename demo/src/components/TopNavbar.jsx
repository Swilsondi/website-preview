import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import logo from '@/assets/dark-logo.png';

const TopNavbar = ({ isOnline }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="w-full">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 ml-0 pl-4">
            <Link
              to="/"
              className="flex items-center space-x-3"
              onClick={e => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
            >
              <div className="rounded-full overflow-hidden flex items-center justify-center h-8 w-8">
                <img
                  src={logo}
                  alt="TechMotiveSupreme site logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-white tracking-wide">
                TechMotive-Supreme
              </span>
            </Link>
          </div>

          <div className="flex items-center pr-4">
            <CartButton />
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
