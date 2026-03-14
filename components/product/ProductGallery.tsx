"use client"
import Image from "next/image"
import { useState } from "react"

export type ProductImage = {
  url: string
  alt?: string
}
export function ProductGallery({ images }: { images: ProductImage[] | string[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[3/4] bg-stone-100 flex items-center justify-center">
        <span className="text-stone-400 font-light uppercase tracking-widest text-sm">Image not available</span>
      </div>
    )
  }

  const activeImage = images[activeIndex]

  return (
    <div className="flex flex-col md:flex-row gap-4 h-full">
      <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        {images.map((img, idx) => {
          const isSelected = activeIndex === idx
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                relative w-24 h-32 md:w-20 md:h-28 flex-shrink-0 transition-all duration-300
                ${isSelected ? 'opacity-100 ring-1 ring-stone-900 ring-offset-2' : 'opacity-50 hover:opacity-100'}
              `}
            >
              <Image src={img.url} fill className="object-cover" unoptimized={true}/>
            </button>
          )
        })}
      </div>
      <div className="relative aspect-[3/4] md:aspect-auto md:h-[80vh] w-full order-1 md:order-2 bg-stone-50 overflow-hidden group">
        <Image src={activeImage.url} alt={activeImage.alt || "Product image"} fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" unoptimized={true}/>
      </div>
    </div>
  )
}