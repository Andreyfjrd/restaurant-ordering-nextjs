import { RestaurantInfo, MenuItem } from '@/types'

export const restaurantInfo: RestaurantInfo = {
  name: 'El Chef',
  slogan: 'Sushi & Más — Sabor que enamora',
  description:
    'En El Chef te traemos lo mejor del sushi fusión y la gastronomía asiática con un toque costarricense. Rolls artesanales, Poke Bowls frescos, Ramen y mucho más. Elaboramos cada pieza con ingredientes de calidad para que cada bocado sea una experiencia única. ¡Pedí ya por WhatsApp!',
  phone: '+506 6361-6729',
  whatsapp: '50683262927',
  address: 'Alameda Tamarindo, Zetillal, Ipis, Goicoechea, San José',
  schedule: [
    'Martes a Viernes: 11:00 AM - 9:00 PM',
    'Sábados: 11:00 AM - 10:00 PM',
    'Domingos: 11:00 AM - 8:00 PM',
    'Lunes: Cerrado',
  ],
  googleMapsUrl: 'https://maps.google.com/?q=Alameda+Tamarindo+Zetillal+Ipis+Goicoechea+San+Jose+Costa+Rica',
  socialMedia: {
    instagram: 'https://www.instagram.com/accounts/login/?next=%2Fel_chef25&source=omni_redirect',
    facebook: 'https://www.facebook.com/share/1HUL3LumUq/',
  },
}

export const menuItems: MenuItem[] = [
  // ── Rolls Tradicionales ──────────────────────────────────────────
  {
    id: '1',
    name: 'California Roll',
    description:
      'Surimi, semillas de ajonjolí, aguacate y pepino. Clásico y delicioso.',
    price: 4500,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.28 AM.jpeg',
    category: 'Rolls Tradicionales',
    featured: true,
  },
  {
    id: '2',
    name: 'Salmón Spicy',
    description:
      'Salmón fresco con toque spicy, queso crema, ajonjolí, aguacate y pepino.',
    price: 4500,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.28 AM (1).jpeg',
    category: 'Rolls Tradicionales',
  },
  {
    id: '3',
    name: 'Tuna Roll',
    description:
      'Atún fresco, queso crema, ajonjolí, aguacate y pepino.',
    price: 4500,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM.jpeg',
    category: 'Rolls Tradicionales',
  },
  {
    id: '4',
    name: 'Teriyaki Roll',
    description:
      'Salmón bañado en salsa teriyaki con semillas de ajonjolí, aguacate y pepino.',
    price: 4500,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.28 AM (1).jpeg',
    category: 'Rolls Tradicionales',
  },
  {
    id: '5',
    name: 'Nigiri (3 piezas)',
    description: 'Tres piezas de nigiri de atún o salmón fresco sobre arroz de sushi.',
    price: 2800,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM.jpeg',
    category: 'Rolls Tradicionales',
  },
  {
    id: '6',
    name: 'Sashimi (6 piezas)',
    description: 'Seis láminas de atún o salmón fresco de primera calidad.',
    price: 3200,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM.jpeg',
    category: 'Rolls Tradicionales',
  },

  // ── Rolls Especiales ─────────────────────────────────────────────
  {
    id: '7',
    name: 'Rainbow Roll',
    description:
      'Tempura de atún abierto, pescado blanco y aguacate. Un festival de colores y sabor.',
    price: 6250,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (1).jpeg',
    category: 'Rolls Especiales',
    featured: true,
  },
  {
    id: '8',
    name: 'Mamochito Roll',
    description:
      'Pescado blanco tempura cubierto de mango, aguacate y mayo. ¡El favorito de todos!',
    price: 6250,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM.jpeg',
    category: 'Rolls Especiales',
    featured: true,
  },
  {
    id: '9',
    name: 'Papito Roll',
    description:
      'Camarón tempura, queso crema y aguacate. Crujiente y cremoso en cada bocado.',
    price: 6250,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.28 AM (1).jpeg',
    category: 'Rolls Especiales',
  },
  {
    id: '10',
    name: 'Kami Roll',
    description:
      'Camarón y salmón cubiertos de queso crema y kani kama premium.',
    price: 6250,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM.jpeg',
    category: 'Rolls Especiales',
  },
  {
    id: '11',
    name: 'Tiquisia Roll',
    description:
      'Surimi y camarón empanizado cubierto de aguacate y salsa especial de la casa.',
    price: 6250,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (3).jpeg',
    category: 'Rolls Especiales',
  },
  {
    id: '12',
    name: 'Ara Roll',
    description:
      'Roll especial de la casa con ingredientes frescos y salsa secreta del Chef.',
    price: 6250,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (3).jpeg',
    category: 'Rolls Especiales',
  },
  {
    id: '13',
    name: 'Mar y Tierra',
    description:
      'Res y camarón, cubierto de queso y crema, arroz tostado, ajonjolí y cebollín.',
    price: 6250,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM.jpeg',
    category: 'Rolls Especiales',
  },

  // ── Poke Bowls ───────────────────────────────────────────────────
  {
    id: '14',
    name: 'Poke Bowl de Atún',
    description:
      'Bowl fresco de arroz con atún marinado, aguacate, mango, pepino y semillas de ajonjolí.',
    price: 5990,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM (1).jpeg',
    category: 'Poke Bowls',
    featured: true,
  },
  {
    id: '15',
    name: 'Poke Bowl de Salmón',
    description:
      'Bowl con salmón fresco, aguacate, alga wakame, mango y aderezo especial.',
    price: 6990,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM (1).jpeg',
    category: 'Poke Bowls',
  },
  {
    id: '16',
    name: 'Poke Bowl de Camarón',
    description:
      'Bowl tropical con camarones, mango, aguacate, pepino y semillas de chía.',
    price: 7990,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM (1).jpeg',
    category: 'Poke Bowls',
  },
  {
    id: '17',
    name: 'Poke Bowl Pollo Teriyaki',
    description:
      'Bowl de pollo teriyaki jugoso con arroz, aguacate, pepino y salsa teriyaki.',
    price: 4990,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM (1).jpeg',
    category: 'Poke Bowls',
  },

  // ── Ramen y Sopas ────────────────────────────────────────────────
  {
    id: '18',
    name: 'Ramen de Cerdo o Pollo',
    description:
      'Caldo japonés concentrado con fideos ramen, chashu, huevo ajitsuke y vegetales.',
    price: 5950,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (1).jpeg',
    category: 'Ramen y Sopas',
  },
  {
    id: '19',
    name: 'Sopa Miso',
    description:
      'Sopa tradicional japonesa de miso con tofu, alga wakame y cebollín.',
    price: 1000,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (1).jpeg',
    category: 'Ramen y Sopas',
  },
  {
    id: '20',
    name: 'Miso Especial',
    description:
      'Sopa miso especial con ingredientes extras y toques del Chef.',
    price: 1650,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (1).jpeg',
    category: 'Ramen y Sopas',
  },

  // ── Entradas ─────────────────────────────────────────────────────
  {
    id: '21',
    name: 'Guiozas de Cerdo (5 piezas)',
    description:
      'Empanadillas japonesas rellenas de cerdo y vegetales, al vapor o a la plancha.',
    price: 2600,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM.jpeg',
    category: 'Entradas',
  },
  {
    id: '22',
    name: 'Dedos de Pescado',
    description:
      'Dedos de pescado empanizados y fritos, crujientes por fuera y suaves por dentro.',
    price: 3600,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM.jpeg',
    category: 'Entradas',
  },
  {
    id: '23',
    name: 'Edamames',
    description:
      'Vainas de soja al vapor con sal marina. El aperitivo japonés clásico.',
    price: 1800,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM.jpeg',
    category: 'Entradas',
  },
  {
    id: '24',
    name: 'Mochis (6 piezas)',
    description:
      'Bolitas de arroz glutinoso rellenas de helado. El postre japonés por excelencia.',
    price: 3500,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM.jpeg',
    category: 'Entradas',
  },

  // ── Hamburguesas de Sushi ────────────────────────────────────────
  {
    id: '25',
    name: 'Hamburguesa de Sushi Tradicional',
    description:
      'Pan de arroz con queso crema, tampico de surimi, cebollín, aguacate, atún y salmón.',
    price: 7900,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.28 AM.jpeg',
    category: 'Hamburguesas de Sushi',
    featured: true,
  },
  {
    id: '26',
    name: 'Hamburguesa Pollo Teriyaki',
    description:
      'Pan de arroz con queso crema, aguacate y pollo teriyaki jugoso.',
    price: 6900,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.28 AM.jpeg',
    category: 'Hamburguesas de Sushi',
  },

  // ── Promos ───────────────────────────────────────────────────────
  {
    id: '27',
    name: '¡Voy Caliente! — 3 Rollos',
    description:
      '3 rollos a escoger + 2 sopas miso. ¡La promo ideal para compartir!',
    price: 10500,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (2).jpeg',
    category: 'Promos',
    featured: true,
  },
  {
    id: '28',
    name: '¡Sí Chef! — 50 Piezas',
    description:
      '50 piezas a escoger + 2 sopas miso + 4 guiozas. Incluye California, Mamochito, Papito, Ara y Tiquisia Roll.',
    price: 18500,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (2).jpeg',
    category: 'Promos',
    featured: true,
  },
  {
    id: '29',
    name: '¡Voy Caliente! — 70 Piezas',
    description:
      '70 piezas de rolls a escoger + 2 sopas miso + 4 guiozas.',
    price: 24500,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (3).jpeg',
    category: 'Promos',
  },
  {
    id: '30',
    name: '¡En el Agua! — 100 Piezas',
    description:
      '100 piezas a escoger + 4 sopas miso + 4 guiozas + orden de edamames. ¡La mega promo!',
    price: 33900,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (3).jpeg',
    category: 'Promos',
  },
  {
    id: '31',
    name: 'Promo Milagrosa — 40 Piezas',
    description:
      'Solo Martes a Jueves: 40 piezas (Ara, Tiquisia, Mamochito y California Roll) + 2 sopas miso de regalo.',
    price: 10000,
    image: '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (2).jpeg',
    category: 'Promos',
    featured: true,
  },
]

export const galleryImages = [
  '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM.jpeg',
  '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (3).jpeg',
  '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM (1).jpeg',
  '/images/WhatsApp Image 2026-04-01 at 10.36.29 AM.jpeg',
  '/images/WhatsApp Image 2026-04-01 at 10.36.30 AM (1).jpeg',
  '/images/WhatsApp Image 2026-04-01 at 10.36.28 AM (1).jpeg',
]
