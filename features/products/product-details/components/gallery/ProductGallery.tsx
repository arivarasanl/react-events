"use client"

import { useState } from "react"
import Image from "next/image"

type Props = {
  images: string[]
}

export function ProductGallery({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const hasImages = images.length > 0
  const hasMultiple = images.length > 1

  if (!hasImages) {
    return (
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          className="object-cover"
          src="/images/placeholder.png"
          alt="Product image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
          priority
        />
      </div>
    )
  }

  const currentImage = images[currentIndex]

  return (
    <div className="flex flex-col gap-4">

      {/* Primary image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          className="object-cover"
          src={currentImage}
          alt="Product image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
          priority
        />
      </div>

      {/* Thumbnail rail — only when multiple images */}
      {hasMultiple && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              type="button"
              aria-label={`View image ${index + 1}`}
              className={`
                relative flex-shrink-0 h-20 w-16 overflow-hidden rounded-lg border transition-all
                focus:outline-none focus-visible:ring-2 focus-visible:ring-black
                ${index === currentIndex
                  ? "border-black opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
                }
              `}
            >
              <Image
                className="object-cover"
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}

    </div>
  )
}
