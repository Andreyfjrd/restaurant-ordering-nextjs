import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/components/cart/cart-context'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'El Chef | Sushi & Más — Costa Rica',
  description:
    'El Chef, el mejor sushi de Costa Rica. Rolls artesanales, Poke Bowls, Ramen y más. Pedí por WhatsApp al 6361-6729.',
  keywords: [
    'sushi costa rica',
    'poke bowl',
    'ramen',
    'rolls de sushi',
    'El Chef',
    'domicilios sushi',
  ],
  openGraph: {
    title: 'El Chef | Sushi & Más',
    description:
      'Rolls artesanales, Poke Bowls frescos, Ramen y más. Pedí ya por WhatsApp.',
    type: 'website',
    locale: 'es_CR',
  },
  icons: {
    icon: '/images/elchef.jpeg',
    apple: '/images/elchef.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: '#6b4423',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
