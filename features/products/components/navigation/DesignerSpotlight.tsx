"use client"

import { useProducts } from "@/features/products/context/products"

import { Subtitle } from "@/components/ui/Typography"

export function DesignerSpotlight() {
  const { products, setBrand } = useProducts()

  const designers = Array.from(
    new Map(
      products
        ?.filter((p) => p.brand)
        .map((p) => [p.brand!.slug, p.brand])
    ).values()
  ).slice(0, 6)

  if (!designers.length) return null

  return (
    <div className="mb-16 space-y-6">

      <Subtitle className="uppercase tracking-widest">
        Designer Spotlight
      </Subtitle>

      <div className="flex flex-wrap gap-4">

        {designers.map((designer) => (
          <button
            key={designer.slug}
            onClick={() => setBrand(designer.slug)}
            className="
              px-4 py-2
              border border-neutral-200
              text-sm
              hover:border-black
              transition
            "
          >
            {designer.name}
          </button>
        ))}

      </div>

    </div>
  )
}