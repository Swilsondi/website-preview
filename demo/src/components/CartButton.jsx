import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/components/CartProvider'; // Standardized import

const CartButton = () => {
  const { itemCount, setIsCartOpen } = useCart()

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        aria-label="Open cart"
        onClick={() => setIsCartOpen(true)}
        className="relative bg-gray-800/50 border-gray-600 hover:bg-gray-700 text-white"
      >
        <ShoppingCart className="w-4 h-4" />
        {itemCount > 0 && (
          <Badge 
            variant="secondary" 
            className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-purple-500 text-white text-xs"
          >
            {itemCount}
          </Badge>
        )}
      </Button>
    </div>
  )
}

export default CartButton
