import React, { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, ShoppingCart, Plus, Minus, ArrowRight, Trash2, Package } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const CartSidebar = memo(() => {
  const {
    cart,
    selectedPlan,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    clearCart,
    cartTotal,
    totalItems,
  } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckout = () => {
    setIsCartOpen(false);
    setTimeout(() => {
      if (selectedPlan) {
        // If a plan is selected (with or without add-ons), go directly to secure checkout
        navigate('/checkout');
      } else if (cart && cart.length > 0) {
        // If only add-ons, go to questions step first
        navigate('/checkout?step=questions');
      } else {
        // No items, go to questions step (or show a message if you want)
        navigate('/checkout?step=questions');
      }
    }, 300);
  };

  // Robust plan total calculation
  function getPlanTotal(selectedPlan) {
    if (!selectedPlan) return 0;
    if (typeof selectedPlan.price === 'number') return selectedPlan.price;
    if (typeof selectedPlan.price === 'string') {
      // Remove any non-numeric characters (except dot)
      const num = Number(selectedPlan.price.replace(/[^\d.]/g, ''));
      return isNaN(num) ? 0 : num;
    }
    return 0;
  }

  const planTotal = getPlanTotal(selectedPlan);
  const grandTotal = planTotal + cartTotal;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 border-l border-gray-700 shadow-2xl z-50 flex flex-col"
            style={{ paddingTop: '64px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-bold text-white">Your Cart</h2>
                {totalItems > 0 && (
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    {totalItems}
                  </Badge>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Selected Plan */}
              {selectedPlan && (
                <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white">{selectedPlan.name}</h3>
                        <p className="text-sm text-gray-300">Selected Package</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-white">${selectedPlan.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Add-ons */}
              {cart.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Package className="w-5 h-5 text-purple-400" />
                    Add-ons
                  </h3>
                  {cart.map((item) => (
                    <Card key={item.id} className="bg-gray-800/50 border border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-medium text-white">{item.service}</h4>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                          <div className="text-right ml-4">
                            <p className="font-semibold text-white">
                              ${item.price * item.quantity}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-xs text-gray-400">
                                ${item.price} × {item.quantity}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 p-0 border-gray-600 hover:bg-gray-700"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-white font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => addToCart(item)}
                              className="w-8 h-8 p-0 border-gray-600 hover:bg-gray-700"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-400 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500">Start by selecting a package or add-ons</p>
                </div>
              )}
            </div>

            {/* Footer */}
            {(selectedPlan || cart.length > 0) && (
              <div className="border-t border-gray-700 p-6 space-y-4">
                {/* Totals */}
                <div className="space-y-2">
                  {selectedPlan && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Package:</span>
                      <span className="text-white">${selectedPlan.price}</span>
                    </div>
                  )}
                  {cart.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Add-ons:</span>
                      <span className="text-white">${cartTotal}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold border-t border-gray-700 pt-2">
                    <span className="text-white">Total:</span>
                    <span className="text-white">${grandTotal}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  {(cart.length > 0 || selectedPlan) && (
                    <Button
                      variant="outline"
                      onClick={clearCart}
                      className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clear Cart
                    </Button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default CartSidebar;
