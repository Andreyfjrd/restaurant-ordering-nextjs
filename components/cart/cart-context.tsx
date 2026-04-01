'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { useCart } from '@/hooks/use-cart'
import { MenuItem, CartItem, OrderForm } from '@/types'

interface CartContextType {
  items: CartItem[]
  addItem: (item: MenuItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
  isLoaded: boolean
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  orderForm: OrderForm
  setOrderForm: (form: OrderForm) => void
}

const CartContext = createContext<CartContextType | null>(null)

const defaultOrderForm: OrderForm = {
  name: '',
  phone: '',
  address: '',
  orderType: 'pickup',
  notes: '',
}

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [orderForm, setOrderForm] = useState<OrderForm>(defaultOrderForm)

  return (
    <CartContext.Provider
      value={{
        ...cart,
        isOpen,
        setIsOpen,
        orderForm,
        setOrderForm,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }
  return context
}
