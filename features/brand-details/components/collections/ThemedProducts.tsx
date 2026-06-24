import { ProductCard } from "@/features/products/components/card/ProductCard"

type Product = {
  id: number | string
  name: string
  slug: string
  price?: string
  image_url?: string
  brand?: string
}

type Theme = {
  theme: string
  products: Product[]
}

type Props = {
  themes: Theme[]
}

export function ThemedProducts({ themes }: Props) {
  return (
    <section className="px-6 lg:px-8 space-y-20">
      {themes.map((theme) => (
        <div key={theme.theme} className="space-y-8">

          <span className="block text-xs uppercase tracking-widest text-neutral-400">
            {theme.theme}
          </span>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {theme.products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image_url || "/images/placeholder.png"}
                price={product.price}
                href={`/products/${product.slug}`}
                aspect="portrait"
              />
            ))}
          </div>

        </div>
      ))}
    </section>
  )
}
