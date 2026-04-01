'use client'

import Image from 'next/image'
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useCartContext } from '@/components/cart/cart-context'
import { formatPrice, getWhatsAppUrl } from '@/lib/whatsapp'
import { OrderForm } from '@/types'

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
    isOpen,
    setIsOpen,
    orderForm,
    setOrderForm,
  } = useCartContext()

  const updateForm = (field: keyof OrderForm, value: string) => {
    setOrderForm({ ...orderForm, [field]: value })
  }

  const isFormValid =
    orderForm.name.trim() !== '' &&
    orderForm.phone.trim() !== '' &&
    (orderForm.orderType !== 'express' || orderForm.address.trim() !== '')

  const canSubmit = isFormValid && items.length > 0

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col h-full w-full sm:max-w-lg p-0" aria-describedby={undefined}>
        {/* Header — fijo arriba */}
        <SheetHeader className="flex-shrink-0 p-4 sm:p-6 pb-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Tu Pedido ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">Tu carrito está vacío</p>
            <p className="text-sm text-muted-foreground mt-1">
              Agrega platos desde nuestro menú
            </p>
          </div>
        ) : (
          <>
            {/* Área scrollable — items + formulario */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-sm text-primary font-semibold">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive hover:text-destructive ml-auto"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Separator />

              {/* Formulario */}
              <div className="space-y-4">
                <h3 className="font-semibold">Datos del pedido</h3>

                <div className="space-y-2">
                  <Label htmlFor="name">Nombre *</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={orderForm.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    placeholder="8888-8888"
                    value={orderForm.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="orderType">Tipo de pedido *</Label>
                  <Select
                    value={orderForm.orderType}
                    onValueChange={(value) =>
                      updateForm('orderType', value as 'pickup' | 'express' | 'dine-in')
                    }
                  >
                    <SelectTrigger id="orderType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pickup">Recoger en local</SelectItem>
                      <SelectItem value="express">Express (Delivery)</SelectItem>
                      <SelectItem value="dine-in">Comer en sitio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {orderForm.orderType === 'express' && (
                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección de entrega *</Label>
                    <Input
                      id="address"
                      placeholder="Tu dirección"
                      value={orderForm.address}
                      onChange={(e) => updateForm('address', e.target.value)}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="notes">Notas (opcional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Ej: Sin cebolla, extra salsa..."
                    value={orderForm.notes}
                    onChange={(e) => updateForm('notes', e.target.value)}
                    rows={2}
                  />
                </div>
              </div>
            </div>

            {/* Footer — fijo abajo, siempre visible */}
            <div className="flex-shrink-0 p-4 sm:p-6 border-t bg-card">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Subtotal</span>
                <span className="text-xl font-bold text-primary">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <Button
                className="w-full gap-2"
                size="lg"
                disabled={!canSubmit}
                onClick={() => {
                  if (!canSubmit) return
                  window.open(getWhatsAppUrl(items, orderForm), '_blank', 'noopener,noreferrer')
                }}
              >
                <MessageCircle className="h-5 w-5" />
                Enviar pedido por WhatsApp
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
