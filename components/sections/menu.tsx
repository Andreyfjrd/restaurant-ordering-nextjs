'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { menuItems } from '@/data/restaurant'
import { formatPrice } from '@/lib/whatsapp'
import { useCartContext } from '@/components/cart/cart-context'

const categories = ['Todos', ...new Set(menuItems.map((item) => item.category))]

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const { addItem } = useCartContext()

  const filteredItems =
    activeCategory === 'Todos'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nuestro Menú
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-balance">
            Nuestro Menú
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Rolls artesanales, Poke Bowls, Ramen, Entradas y Promos. Elaborados con ingredientes frescos de primera calidad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
                  {item.category}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(item.price)}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => addItem(item)}
                    className="gap-1"
                  >
                    <Plus className="h-4 w-4" />
                    Agregar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
