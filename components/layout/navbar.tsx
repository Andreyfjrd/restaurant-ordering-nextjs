'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartContext } from '@/components/cart/cart-context'
import { restaurantInfo } from '@/data/restaurant'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#menu', label: 'Menú' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const { totalItems, setIsOpen } = useCartContext()

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))

    const handleScroll = () => {
      const navbarOffset = 80
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= navbarOffset) current = id
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-primary tracking-tight"
        >
          {restaurantInfo.name}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            const isMenu = id === 'menu'
            const isActive = !isMenu && activeSection === id
            return (
              <li key={link.href}>
                <button
                  onClick={() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`text-sm font-medium transition-colors relative ${
                    isMenu
                      ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-full'
                      : isActive
                      ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-full'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Cart Button */}
          <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const id = link.href.slice(1)
              const isMenu = id === 'menu'
              const isActive = isMenu || activeSection === id
              return (
                <li key={link.href}>
                  <button
                    className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => {
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
