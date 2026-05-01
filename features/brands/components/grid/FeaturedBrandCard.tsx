"use client"

import Link from "next/link"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type Brand = {
  name: string
  slug: string
  product_count: number
  logo_url: string | null
  banner_url: string | null
  top_products: { image_url?: string }[]
}

export function FeaturedBrandCard({ brand }: { brand: Brand }) {
  const products = brand.top_products || []
  const hasFullCollage = products.length >= 3

  return (
    <Link href={`/brands/${brand.slug}`} className="group block">
      <div className="relative h-[420px] md:h-[460px] w-full overflow-hidden bg-neutral-100 md:rounded-xl">
        
        {/* CASE 1: Full collage */}
        {hasFullCollage && (
          <div className="grid h-full w-full grid-cols-3">
            {products.slice(0, 3).map((p, i) => (
              <img
                key={i}
                src={getImageUrl(p.image_url)}
                alt={brand.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ))}
          </div>
        )}

        {/* CASE 2: Banner fallback */}
        {!hasFullCollage && brand.banner_url && (
          <img
            src={getImageUrl(brand.banner_url)}
            alt={brand.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* CASE 3: Single product fallback */}
        {!hasFullCollage && !brand.banner_url && products[0]?.image_url && (
          <img
            src={getImageUrl(products[0].image_url)}
            alt={brand.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* CASE 4: Empty fallback */}
        {!hasFullCollage &&
          !brand.banner_url &&
          !products[0]?.image_url && (
            <div className="flex h-full items-center justify-center bg-neutral-200">
              <span className="text-6xl text-neutral-400">
                {brand.name.charAt(0)}
              </span>
            </div>
          )}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-white">
                {brand.name}
              </h3>
              <p className="text-sm text-white/80">
                {brand.product_count} products
              </p>
            </div>

            {brand.logo_url && (
              <img
                src={getImageUrl(brand.logo_url)}
                alt={brand.name}
                className="h-10 w-10 rounded-full bg-white/90 object-contain p-1"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}