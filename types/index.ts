export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
}

export interface CartItem extends MenuItem {
  quantity: number
}

export interface OrderForm {
  name: string
  phone: string
  address: string
  orderType: 'pickup' | 'express' | 'dine-in'
  notes: string
}

export interface RestaurantInfo {
  name: string
  slogan: string
  description: string
  phone: string
  whatsapp: string
  address: string
  schedule: string[]
  googleMapsUrl: string
  socialMedia: {
    instagram?: string
    facebook?: string
  }
}
