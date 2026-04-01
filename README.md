# El Chef — Sitio Web Oficial

Sitio web de pedidos en línea para **El Chef**, restaurante de Sushi & Más ubicado en Zetillal, Ipis, Goicoechea, San José, Costa Rica.

Los clientes pueden explorar el menú completo, agregar platos al carrito y enviar su pedido directamente por WhatsApp.

---

## Características

- **Menú interactivo** con filtro por categoría (Rolls Tradicionales, Rolls Especiales, Poke Bowls, Ramen, Entradas, Hamburguesas de Sushi, Promos)
- **Carrito de pedidos** persistente con localStorage
- **Formulario de pedido** con nombre, teléfono, dirección, tipo de pedido y notas
- **Envío por WhatsApp** — genera un mensaje estructurado y abre WhatsApp con un clic
- **Diseño responsivo** — optimizado para celular y desktop
- **Paleta de marca** extraída del branding oficial de El Chef (negro, rojo carmesí, ámbar dorado)
- **Botón scroll-to-top** para navegación rápida
- **SEO** configurado con metadata, OpenGraph y keywords

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2 | Framework React con App Router |
| [React](https://react.dev/) | 19 | UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.7 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | 4.2 | Estilos |
| [Shadcn UI](https://ui.shadcn.com/) + Radix UI | — | Componentes accesibles |
| [Lucide React](https://lucide.dev/) | — | Íconos |
| [Vercel Analytics](https://vercel.com/analytics) | — | Métricas de visitas |

---

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout raíz, metadata, fuentes
│   └── page.tsx            # Página principal (one-page)
├── components/
│   ├── cart/
│   │   ├── cart-context.tsx  # Estado global del carrito
│   │   └── cart-drawer.tsx   # Panel lateral del carrito + formulario
│   ├── layout/
│   │   ├── navbar.tsx        # Navegación con menú móvil
│   │   └── footer.tsx        # Pie de página
│   ├── sections/
│   │   ├── hero.tsx          # Portada con imagen de fondo
│   │   ├── about.tsx         # Quiénes somos
│   │   ├── featured.tsx      # Platos destacados
│   │   ├── menu.tsx          # Menú completo con filtros
│   │   ├── gallery.tsx       # Galería de fotos
│   │   ├── location.tsx      # Ubicación con Google Maps
│   │   └── contact.tsx       # Contacto y redes sociales
│   └── ui/
│       └── scroll-to-top.tsx # Botón flotante volver arriba
├── data/
│   └── restaurant.ts       # Toda la info del restaurante y menú
├── hooks/
│   └── use-cart.ts         # Lógica del carrito con localStorage
├── lib/
│   └── whatsapp.ts         # Generación del mensaje y URL de WhatsApp
├── styles/
│   └── globals.css         # Variables CSS (paleta El Chef)
├── types/
│   └── index.ts            # Tipos TypeScript (MenuItem, CartItem, OrderForm)
└── public/
    └── images/             # Fotos del menú y branding
```

---

## Instalación y Uso

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd RestauranteElChef

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

```bash
# Construir para producción
npm run build

# Iniciar en producción
npm start
```

---

## Configuración del Restaurante

Toda la información del negocio se centraliza en **un solo archivo**:

```
data/restaurant.ts
```

Campos configurables:

| Campo | Descripción |
|---|---|
| `name` | Nombre del restaurante |
| `slogan` | Eslogan |
| `description` | Descripción para la sección "Quiénes somos" |
| `phone` | Teléfono de contacto |
| `whatsapp` | Número WhatsApp en formato internacional sin `+` (ej: `50663616729`) |
| `address` | Dirección visible en la web |
| `schedule` | Horarios de atención |
| `googleMapsUrl` | URL de Google Maps |
| `socialMedia` | Links de Instagram y Facebook |
| `menuItems` | Lista completa de platos con nombre, descripción, precio, imagen y categoría |

---

## Flujo del Pedido por WhatsApp

1. Cliente agrega platos al carrito desde el menú
2. Abre el carrito y completa: nombre, teléfono, tipo de pedido (recoger / express / comer en sitio) y notas
3. Presiona **"Enviar pedido por WhatsApp"**
4. Se abre WhatsApp con un mensaje pre-formateado:

```
Hola, quiero hacer un pedido:

Nombre: Juan Pérez
Teléfono: 6361-6729
Tipo de pedido: Express (Delivery)
Dirección: Zetillal, Ipis

Pedido:

2x Mamochito Roll — ₡12.500
1x Sopa Miso — ₡1.000

Subtotal: ₡13.500

Notas: Sin aguacate
```

---

## Despliegue

El proyecto está optimizado para desplegarse en **Vercel**:

1. Conectar el repositorio en [vercel.com](https://vercel.com)
2. Vercel detecta Next.js automáticamente
3. Cada push a `main` despliega automáticamente

---

## Contacto del Negocio

| | |
|---|---|
| **Restaurante** | El Chef — Sushi & Más |
| **Dirección** | Alameda Tamarindo, Zetillal, Ipis, Goicoechea, San José |
| **WhatsApp** | [6361-6729](https://wa.me/50663616729) |
| **Instagram** | [@el_chef25](https://www.instagram.com/el_chef25) |
| **Facebook** | [El Chef](https://www.facebook.com/share/1HUL3LumUq/) |
