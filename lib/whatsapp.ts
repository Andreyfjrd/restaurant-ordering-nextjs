import { CartItem, OrderForm } from '@/types'
import { restaurantInfo } from '@/data/restaurant'

export function formatPrice(price: number): string {
  return `₡${price.toLocaleString('es-CR')}`
}

export function generateWhatsAppMessage(
  items: CartItem[],
  form: OrderForm
): string {
  const orderTypeLabels = {
    pickup: 'Recoger en local',
    express: 'Express (Delivery)',
    'dine-in': 'Comer en sitio',
  }

  const itemsList = items
    .map((item) => `${item.quantity}x ${item.name} — ${formatPrice(item.price * item.quantity)}`)
    .join('\n')

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  let message = `Hola, quiero hacer un pedido:\n\n`
  message += `Nombre: ${form.name}\n`
  message += `Teléfono: ${form.phone}\n`
  message += `Tipo de pedido: ${orderTypeLabels[form.orderType]}\n`

  if (form.orderType === 'express' && form.address) {
    message += `Dirección: ${form.address}\n`
  }

  message += `\nPedido:\n\n${itemsList}\n\n`
  message += `Subtotal: ${formatPrice(subtotal)}`

  if (form.notes) {
    message += `\n\nNotas: ${form.notes}`
  }

  return message
}

export function getWhatsAppUrl(items: CartItem[], form: OrderForm): string {
  const message = generateWhatsAppMessage(items, form)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${restaurantInfo.whatsapp}?text=${encodedMessage}`
}
