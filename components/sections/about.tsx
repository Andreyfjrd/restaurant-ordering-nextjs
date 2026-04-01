import Image from 'next/image'
import { restaurantInfo } from '@/data/restaurant'

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (3).jpeg"
              alt="Sushi El Chef — rolls artesanales"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Quiénes somos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6 text-balance">
              Sushi & Más con sabor único
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {restaurantInfo.description}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-secondary rounded-xl">
                <span className="block text-2xl sm:text-3xl font-bold text-primary">
                  30+
                </span>
                <span className="text-sm text-muted-foreground">
                  Rolls en el menú
                </span>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <span className="block text-2xl sm:text-3xl font-bold text-primary">
                  🛵
                </span>
                <span className="text-sm text-muted-foreground">
                  Domicilios disponibles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
