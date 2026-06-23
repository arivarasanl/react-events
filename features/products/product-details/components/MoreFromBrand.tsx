type Props = {
  products: any[] | null | undefined
  brandName?: string
}

export function MoreFromBrand({ products, brandName }: Props) {
  if (!products || products.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200">

      <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-8">
        {brandName ? `More from ${brandName}` : "More from this designer"}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <a
            key={product.id || product.slug}
            href={`/products/${product.slug}`}
            className="group flex flex-col gap-3"
          >
            {product.image && (
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100">
                <img
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            )}
            {product.brand?.name && (
              <span className="text-xs uppercase tracking-wider text-neutral-400">
                {product.brand.name}
              </span>
            )}
            <span className="text-sm text-neutral-800 group-hover:text-black transition-colors">
              {product.name}
            </span>
            {product.price && (
              <span className="text-sm text-neutral-500">
                {product.price}
              </span>
            )}
          </a>
        ))}
      </div>

    </section>
  )
}
