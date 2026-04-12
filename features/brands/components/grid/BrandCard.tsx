"use client"

import Link from "next/link"

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

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white"
    >
      {/* Banner */}
      <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
        {brand.banner_url ? (
          <img
            src={brand.banner_url}
            alt={brand.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-neutral-100 to-neutral-200" />
        )}

        {/* Overlay (luxury subtle darkening on hover) */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Brand Info */}
        <div className="flex items-center gap-3">
          {brand.logo_url ? (
            <img
              src={brand.logo_url}
              alt={brand.name}
              className="h-10 w-10 object-contain rounded-full bg-white border"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-neutral-200" />
          )}

          <div className="min-w-0">
            <h3 className="text-base font-medium text-neutral-900 truncate">
              {brand.name}
            </h3>
            <p className="text-sm text-neutral-500">
              {brand.product_count} Products
            </p>
          </div>
        </div>

        {/* Top Products Preview */}
        {brand.top_products?.length > 0 && (
          <div className="flex gap-2">
            {brand.top_products.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100"
              >
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-neutral-200" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}