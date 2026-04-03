'use client'

import Image from 'next/image'
import { Star, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { menuItems } from '@/data/restaurant'
import { formatPrice } from '@/lib/whatsapp'
import { useCartContext } from '@/components/cart/cart-context'

export function Featured() {
  const { addItem, items, updateQuantity } = useCartContext()
  const featuredItems = menuItems.filter((item) => item.featured)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Favoritos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Platos Destacados
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Los platos más queridos por nuestros clientes, preparados con recetas tradicionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  Destacado
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(item.price)}
                  </span>
                  {(() => {
                    const cartItem = items.find((i) => i.id === item.id)
                    return cartItem ? (
                      <div className="flex items-center gap-1">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-6 text-center font-semibold tabular-nums">
                          {cartItem.quantity}
                        </span>
                        <Button
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => addItem(item)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button size="sm" onClick={() => addItem(item)}>
                        Agregar
                      </Button>
                    )
                  })()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
