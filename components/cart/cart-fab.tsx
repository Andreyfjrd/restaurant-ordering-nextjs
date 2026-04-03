'use client'

import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartContext } from '@/components/cart/cart-context'
import { formatPrice } from '@/lib/whatsapp'

export function CartFab() {
  const { totalItems, subtotal, setIsOpen } = useCartContext()

  if (totalItems === 0) return null

  return (
    <Button
      size="lg"
      className="fixed bottom-6 left-6 z-50 shadow-lg gap-3 rounded-full pl-4 pr-5 h-14"
      onClick={() => setIsOpen(true)}
    >
      <div className="relative">
        <ShoppingBag className="h-5 w-5" />
        <span className="absolute -top-2 -right-2 bg-primary-foreground text-primary text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
          {totalItems}
        </span>
      </div>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-xs opacity-80">Ver pedido</span>
        <span className="font-bold text-sm">{formatPrice(subtotal)}</span>
      </div>
    </Button>
  )
}
