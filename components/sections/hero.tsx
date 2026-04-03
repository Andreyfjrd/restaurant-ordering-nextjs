'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { restaurantInfo } from '@/data/restaurant'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/WhatsApp Image 2026-04-01 at 10.36.30 AM.jpeg"
          alt="Sushi El Chef — Rolls artesanales"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-background">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
          {restaurantInfo.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-background/90 max-w-2xl mx-auto text-pretty">
          {restaurantInfo.slogan}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="text-base px-6 sm:px-8"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Menú
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-6 sm:px-8 bg-transparent text-background border-background hover:bg-background hover:text-foreground"
          >
            <Link href="#contacto">Ordenar por WhatsApp</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
