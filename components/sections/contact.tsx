'use client'

import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { restaurantInfo } from '@/data/restaurant'
import { useCartContext } from '@/components/cart/cart-context'

export function Contact() {
  const { setIsOpen } = useCartContext()

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Hablemos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Estamos aquí para atenderte. Contáctanos por el medio que prefieras.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {/* Phone */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {restaurantInfo.phone}
              </a>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <Button
                variant="link"
                className="text-muted-foreground hover:text-primary p-0 h-auto text-sm"
                onClick={() => setIsOpen(true)}
              >
                Hacer pedido
              </Button>
            </CardContent>
          </Card>

          {/* Instagram */}
          {restaurantInfo.socialMedia.instagram && (
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Instagram</h3>
                <a
                  href={restaurantInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  @elchef
                </a>
              </CardContent>
            </Card>
          )}

          {/* Facebook */}
          {restaurantInfo.socialMedia.facebook && (
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Facebook className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Facebook</h3>
                <a
                  href={restaurantInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  El Chef
                </a>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
