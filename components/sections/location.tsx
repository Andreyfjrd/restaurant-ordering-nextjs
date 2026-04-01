import { MapPin, Clock, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { restaurantInfo } from '@/data/restaurant'

export function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Visítanos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Estamos ubicados en el corazón de San José, listos para recibirte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.00123456789!2d-84.08333!3d9.93333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50d15c5%3A0xe6746a6a9f11b882!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del restaurante"
              className="absolute inset-0"
            />
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Dirección</h3>
                  <p className="text-muted-foreground">
                    {restaurantInfo.address}
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="px-0 mt-2 text-primary"
                  >
                    <a
                      href={restaurantInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Abrir en Google Maps
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Horario</h3>
                  <ul className="space-y-1">
                    {restaurantInfo.schedule.map((schedule, index) => (
                      <li key={index} className="text-muted-foreground text-sm">
                        {schedule}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
