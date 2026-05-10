"use client"

import { ImageTile } from "@/components/ui/ImageTile"
import Link from "next/link"
import clsx from "clsx"
import { SectionTitle, Caption } from "@/components/ui/Typography"

type BrandCardProps = {
  name: string
  image: string
  logo?: string
  href: string
  tagline?: string
  aspect?: "portrait" | "square" | "landscape"
  className?: string
}

export function BrandCard({
  name,
  image,
  logo,
  href,
  tagline,
  aspect = "portrait",
  className,
}: BrandCardProps) {
  return (
    <Link
      href={href}
      className={clsx("group block relative overflow-hidden rounded-2xl", className)}
    >

      {/* Campaign image */}
      <ImageTile
        src={image}
        alt={name}
        aspect={aspect}
      />

      {/* Logo layer */}
      {logo && false && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={logo}
            alt={`${name} logo`}
            className="
              max-h-12
              opacity-90
              transition
              duration-300
              group-hover:scale-105
            "
          />
        </div>
      )}

      {/* Hover info — renders on a dark gradient overlay; tone="inverse" governs all text */}
      <div
        className="
        absolute bottom-0 left-0 right-0
        p-6
        bg-gradient-to-t from-black/70 to-transparent
        opacity-0
        group-hover:opacity-100
        transition
        "
      >
        <SectionTitle as="h4" tone="inverse">{name}</SectionTitle>

        {tagline && (
          <Caption tone="inverse">{tagline}</Caption>
        )}
      </div>

    </Link>
  )
}