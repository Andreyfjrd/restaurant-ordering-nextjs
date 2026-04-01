import Image from 'next/image'
import { galleryImages } from '@/data/restaurant'

export function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Galería
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Momentos y Sabores
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Un vistazo a nuestra cocina, nuestros platos y el ambiente que te espera.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? 'aspect-square' : 'aspect-square'
                }`}
              >
                <Image
                  src={image}
                  alt={`Galería ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
