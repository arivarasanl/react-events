"use client"

import Image from "next/image"
import clsx from "clsx"

const isDev = process.env.NODE_ENV === "development"

type Props = {
  src: string
  alt: string
  aspect?: "portrait" | "square" | "landscape"
  priority?: boolean
  sizes?: string
}

export function ImageTile({
  src,
  alt,
  aspect = "portrait",
  priority,
  sizes,
}: Props) {

  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "landscape"
      ? "aspect-[4/3]"
      : "aspect-[3/4]"

  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-2xl",
        aspectClass,
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:shadow-xl"
      )}
    >
      {/* image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized={isDev}
        className="
          object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* overlay */}
      <div
        className="
          absolute inset-0
          bg-black/0
          transition-colors duration-500
          group-hover:bg-black/10
        "
      />
    </div>
  )
}