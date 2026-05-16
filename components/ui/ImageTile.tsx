"use client"

import Image from "next/image"
import clsx from "clsx"
import {
  imagePresentationClass,
  overlayPresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"
import { transitionClass } from "@/styles/design-system/motion"

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
        "group relative",
        surfacePresentationClass.imageTile,
        aspectClass,
        transitionClass.tileLift,
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
        className={clsx(
          imagePresentationClass.cover,
          imagePresentationClass.hoverZoomEaseOut
        )}
      />

      {/* overlay */}
      <div className={overlayPresentationClass.tileHoverWash} />
    </div>
  )
}
