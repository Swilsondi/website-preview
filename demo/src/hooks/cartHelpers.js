/**
 * Cart helper functions for calculating totals and handling cart operations
 */

/**
 * Calculate the total price of all items in the cart
 * @param {Array} cart - The cart array containing items with price and quantity
 * @returns {number} - The total price of all items
 */
export const calculateCartTotal = (cart) => {
  return cart.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );
};

/**
 * Calculate the total number of items in the cart
 * @param {Array} cart - The cart array containing items with quantity
 * @returns {number} - The total number of items
 */
export const calculateTotalItems = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

/**
 * Format price as currency
 * @param {number} price - The price to format
 * @returns {string} - Formatted price string
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
};
