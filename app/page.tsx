import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Featured } from '@/components/sections/featured'
import { Menu } from '@/components/sections/menu'
import { Gallery } from '@/components/sections/gallery'
import { Location } from '@/components/sections/location'
import { Contact } from '@/components/sections/contact'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { CartFab } from '@/components/cart/cart-fab'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Featured />
        <Menu />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <CartFab />
      <ScrollToTop />
    </>
  )
}
