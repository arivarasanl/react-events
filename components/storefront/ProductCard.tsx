"use client"

import Link from "next/link"
import { Product } from "@/lib/api/products"
import { ImageTile } from "@/components/ui/ImageTile"
import { Typography } from "@/components/ui/Typography"
import { Reveal } from "@/components/motion/Reveal"

type Props = {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority }: Props) {
  return (
    <Reveal>
      <Link href={`/products/${product.slug}`} className="group block focus:outline-none">
        <div className="flex flex-col gap-4">
          <ImageTile 
            src={product.image_url} 
            alt={product.name} 
            aspect="portrait" 
            priority={priority} 
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" className="uppercase tracking-widest text-neutral-500">
              {product.brand.name}
            </Typography>
            <Typography variant="body" className="font-medium text-neutral-900 group-hover:text-black transition-colors">
              {product.name}
            </Typography>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}
