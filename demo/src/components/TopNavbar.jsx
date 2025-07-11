import React from 'react'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import CartButton from './CartButton'

const TopNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Branding */}
        <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent cursor-pointer">
          Tech Motive Supreme
        </div>

        {/* Cart button */}
        <div className="flex items-center">
          <CartButton />
        </div>
      </div>
    </nav>
  )
}

const SidebarToggle = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <button
      className={`fixed z-50 bg-purple-500 text-white p-2 rounded-full shadow-lg transition-transform duration-300 ease-in-out ${
        isCartOpen ? 'right-[280px]' : 'right-4'
      } top-[70px]`}
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      Toggle
    </button>
  )
}

export { TopNavbar, SidebarToggle }
