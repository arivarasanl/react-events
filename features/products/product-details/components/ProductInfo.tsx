"use client"

import { useState } from "react"
import { RequestQuoteModal } from "./RequestQuoteModal"

type Theme = {
  name: string
  slug: string
}

type Occasion = {
  name: string
  slug: string
}

type Props = {
  product: any
  options: any[]
  variants: any[]
  variantIndex: Record<string, any>
  themes?: Theme[]
  occasions?: Occasion[]
}

export function ProductInfo({
  product,
  options,
  variants,
  variantIndex,
  themes = [],
  occasions = [],
}: Props) {
  const [quoteOpen, setQuoteOpen] = useState(false)

  const brandName = product.brand?.name
  const productName = product.name
  const price = product.price
  const shortDescription = product.short_description

  const hasMetadata = themes.length > 0 || occasions.length > 0

  return (
    <div className="flex flex-col gap-8 py-2">

      {/* Brand */}
      {brandName && (
        <span className="text-xs uppercase tracking-widest text-neutral-400">
          {brandName}
        </span>
      )}

      {/* Product name */}
      <h1 className="text-2xl lg:text-3xl font-light tracking-tight text-black">
        {productName}
      </h1>

      {/* Price */}
      {price && (
        <span className="text-lg text-neutral-700">
          {price}
        </span>
      )}

      {/* Short description */}
      {shortDescription && (
        <p className="text-sm leading-relaxed text-neutral-500">
          {shortDescription}
        </p>
      )}

      {/* Themes & Occasions */}
      {hasMetadata && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
          {themes.map((theme) => (
            <span
              key={theme.slug}
              className="text-xs tracking-wide text-neutral-400"
            >
              {theme.name}
            </span>
          ))}
          {occasions.map((occasion) => (
            <span
              key={occasion.slug}
              className="text-xs tracking-wide text-neutral-400"
            >
              {occasion.name}
            </span>
          ))}
        </div>
      )}

      {/* Request Quote CTA */}
      <div className="pt-4">
        <button
          onClick={() => setQuoteOpen(true)}
          className="w-full py-4 text-sm uppercase tracking-wider font-medium text-white bg-black hover:bg-neutral-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Request Quote
        </button>
      </div>

      <RequestQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName={productName}
        brandName={brandName}
      />

    </div>
  )
}
