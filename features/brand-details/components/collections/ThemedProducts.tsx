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
  const featuredTheme = themes[0]

  if (!featuredTheme || featuredTheme.products.length === 0) {
    return null
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="mb-10">
        <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-3">
          Collection
        </span>

        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
          {featuredTheme.theme}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featuredTheme.products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image_url}
              price={product.price}
              href={`/products/${product.slug}`}
            />
        ))}
      </div>

    </section>
  )
}