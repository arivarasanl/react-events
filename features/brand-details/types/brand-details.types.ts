export interface Brand {
  name: string
  slug: string
  description?: string
  logo_url?: string
  cover_image?: string
}

export interface Product {
  name: string
  slug: string
  price: string
  image_url: string
}

export interface Collection {
  title: string
  products: Product[]
}

export interface EditorialItem {
  title: string
  excerpt: string
  image_url: string
  slug: string
}

export interface Program {
  title: string
  description: string
  date: string
}

export interface RelatedBrand {
  name: string
  slug: string
  logo_url: string
}

export interface BrandDetailsData {
  brand: Brand
  featured_products?: Product[]
  collections?: Collection[]
  editorial?: EditorialItem[]
  programs?: Program[]
  related_brands?: RelatedBrand[]
  quote?: {
    text: string
    author: string
  }
}