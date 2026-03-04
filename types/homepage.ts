// types/homepage.ts

export interface HomepageResponse {
  categories: {
    id: number
    name: string
    slug: string
    image_url: string
  }[]

  featured_brands: {
    id: number
    name: string
    slug: string | null
    logo_url: string
  }[]

  featured_products: {
    id: number
    name: string
    slug: string
    price: string
    image_url: string
  }[]

  programs: {
    id: number
    title: string
    description: string
    start_at: string
    slug: string
  }[]

  sponsors: {
    id: number
    bane: string
    slug: string
    website: string
  }[]
}