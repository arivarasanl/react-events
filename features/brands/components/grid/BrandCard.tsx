"use client"

import Link from "next/link"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import { CardTitle, Muted } from "@/components/ui/Typography"

export function BrandCard({ brand }: any) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="
        group block overflow-hidden rounded-2xl bg-white
        border border-transparent
        hover:border-neutral-200
        transition duration-300
      "
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
        {brand.banner_url ? (
          <img
            src={getImageUrl(brand.banner_url)}
            alt={brand.name}
            className="
              h-full w-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-neutral-200">
            <span className="text-3xl text-neutral-400">
              {brand.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Logo + Info */}
        <div className="flex items-center gap-3">
          {brand.logo_url ? (
            <img
              src={getImageUrl(brand.logo_url)}
              alt={brand.name}
              className="
                h-9 w-9 rounded-full object-cover
                bg-white border border-neutral-200
              "
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-neutral-200" />
          )}

          <div className="min-w-0">
            <CardTitle className="font-medium text-neutral-900 truncate">
              {brand.name}
            </CardTitle>
            <Muted>
              {brand.product_count} products
            </Muted>
          </div>
        </div>

        {/* Product previews */}
        {brand.top_products?.length > 0 && (
          <div className="flex gap-2">
            {brand.top_products.slice(0, 3).map((p: any, i: number) => (
              <div
                key={i}
                className="h-12 w-12 overflow-hidden rounded-md bg-neutral-100"
              >
                <img
                  src={getImageUrl(p.image_url)}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}