import React, { createContext, useState, useEffect } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('website-cart')
    const savedPlan = localStorage.getItem('website-selected-plan')
    
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Error loading cart from localStorage:', e)
      }
    }
    
    if (savedPlan) {
      try {
        setSelectedPlan(JSON.parse(savedPlan))
      } catch (e) {
        console.error('Error loading plan from localStorage:', e)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('website-cart', JSON.stringify(cart))
  }, [cart])

  // Save selected plan to localStorage whenever it changes
  useEffect(() => {
    if (selectedPlan) {
      localStorage.setItem('website-selected-plan', JSON.stringify(selectedPlan))
    }
  }, [selectedPlan])

  const addToCart = (addon) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === addon.id)
      if (existing) {
        return prevCart.map(item => 
          item.id === addon.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...addon, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (addonId) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === addonId)
      if (existing && existing.quantity > 1) {
        return prevCart.map(item => 
          item.id === addonId 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      } else {
        return prevCart.filter(item => item.id !== addonId)
      }
    })
  }

  const clearCart = () => {
    setCart([])
    setSelectedPlan(null)
    localStorage.removeItem('website-cart')
    localStorage.removeItem('website-selected-plan')
  }

  const getCartQuantity = (addonId) => {
    const item = cart.find(item => item.id === addonId)
    return item ? item.quantity : 0
  }

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  const value = {
    cart,
    selectedPlan,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    clearCart,
    getCartQuantity,
    cartTotal,
    totalItems,
    setSelectedPlan
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
export { CartContext }
