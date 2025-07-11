import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

const CartButton = () => {
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsCartOpen(true)}
        className="relative bg-gray-800/50 border-gray-600 hover:bg-gray-700 text-white"
      >
        <ShoppingCart className="w-4 h-4" />
        {totalItems > 0 && (
          <Badge 
            variant="secondary" 
            className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-purple-500 text-white text-xs"
          >
            {totalItems}
          </Badge>
        )}
      </Button>
    </motion.div>
  )
}

export default CartButton
