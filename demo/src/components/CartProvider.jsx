import React, { createContext, useState, useEffect } from 'react';

/**
 * CartContext: The central store for shopping cart data
 * 
 * This context provides cart functionality throughout the application
 * allowing any component to access and modify the cart state without prop drilling.
 * 
 * Key features:
 * - Stores cart items with quantities and pricing
 * - Provides methods to add/remove/update cart items
 * - Calculates cart totals and tax information
 * - Persists cart data in localStorage between sessions
 * - Handles cart notifications and alerts
 */
export const CartContext = createContext();

/**
 * CartProvider Component
 * 
 * This is a wrapper component that provides cart functionality to all its children
 * through React Context. It manages the entire cart state and localStorage persistence.
 * 
 * Implementation notes:
 * - We use localStorage to persist cart between page refreshes
 * - We maintain cart state in a normalized format for easier manipulation
 * - We implement useEffect for syncing with localStorage
 * - We optimize with careful state updates to prevent unnecessary renders
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the cart context
 */
export const CartProvider = ({ children }) => {
  // Initialize cart state from localStorage or empty array if not available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  // Store cart in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  /**
   * Add an item to the cart
   * If the item already exists, increase quantity, otherwise add new item
   * 
   * @param {Object} item - The product to add to the cart
   * @param {string} item.id - Unique identifier for the product
   * @param {string} item.name - Product name
   * @param {number} item.price - Product price
   * @param {number} [quantity=1] - Quantity to add (defaults to 1)
   */
  const addToCart = (item, quantity = 1) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      
      if (itemIndex >= 0) {
        // Item exists, update quantity
        const updatedCart = [...prevCart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + quantity
        };
        return updatedCart;
      } else {
        // Item doesn't exist, add new item
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  /**
   * Remove an item from the cart
   * 
   * @param {string} itemId - ID of the item to remove
   */
  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  /**
   * Update the quantity of an item in the cart
   * 
   * @param {string} itemId - ID of the item to update
   * @param {number} quantity - New quantity value
   */
  const updateCartItemQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  // Add selectedPlan state
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Only allow one plan at a time
  const selectPlan = (plan) => setSelectedPlan(plan);

  /**
   * Clear all items from the cart
   */
  const clearCart = () => {
    setCart([]);
    setSelectedPlan(null); // Also clear the selected package
  };

  // Calculate plan total
  function getPlanTotal(plan) {
    if (!plan) return 0;
    if (typeof plan.price === 'number') return plan.price;
    if (typeof plan.price === 'string') {
      const num = Number(plan.price.replace(/[^\d.]/g, ''));
      return isNaN(num) ? 0 : num;
    }
    return 0;
  }

  // Cart total includes selected plan
  const planTotal = getPlanTotal(selectedPlan);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const grandTotal = planTotal + cartTotal;

  // Item count: 1 for plan if selected, plus add-ons
  const itemCount = (selectedPlan ? 1 : 0) + cart.reduce((count, item) => count + item.quantity, 0);

  // Context value with cart state and functions
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    cartTotal,
    planTotal,
    grandTotal,
    itemCount,
    selectedPlan,
    setSelectedPlan: selectPlan,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;