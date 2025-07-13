import { useState, createContext, useContext } from "react";
import { CART_INITIAL_STATE } from "@/utils/cartConstants";
import { calculateCartTotal, calculateTotalItems } from "./cartHelpers";

// Create the CartContext here instead of importing it
export const CartContext = createContext(null);

// Define the useCart hook directly in this file
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(CART_INITIAL_STATE);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prev.filter((cartItem) => cartItem.id !== itemId);
    });
  };

  const getCartQuantity = (itemId) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const cartTotal = calculateCartTotal(cart);
  const totalItems = calculateTotalItems(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCartQuantity,
        cartTotal,
        totalItems,
        selectedPlan,
        setSelectedPlan,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
