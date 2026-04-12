import { BrandCard } from "./BrandCard"

type Brand = {
  name: string
  slug: string
  product_count: number
  logo_url: string | null
  banner_url: string | null
  top_products: {
    id: number
    slug: string
    name: string
    image_url?: string
  }[]
}

export function BrandsGrid({ brands }: { brands: Brand[] }) {
  if (!brands || brands.length === 0) {
    return (
      <div className="py-20 text-center text-neutral-500">
        No brands found
      </div>
    )
  }

  return (
    <div
      className="
        grid gap-8
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {brands.map((brand) => (
        <BrandCard key={brand.slug} brand={brand} />
      ))}
    </div>
  )
}