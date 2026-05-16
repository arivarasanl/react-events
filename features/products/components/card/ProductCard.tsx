"use client"

import { ImageTile } from "@/components/ui/ImageTile"
import Link from "next/link"
import clsx from "clsx"
import React from "react"

import { SectionTitle, Body, Meta } from "@/components/ui/Typography"
import { cardContentSpacingClass } from "@/styles/design-system/spacing"

type ProductCardProps = {
  name: string
  image: string
  href: string
  brand?: string
  price?: number | string
  aspect?: "portrait" | "square" | "landscape"
  priority?: boolean
  className?: string
}

export function ProductCard({
  name,
  brand,
  price,
  image,
  href,
  aspect = "portrait",
  priority = false,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={clsx("group block focus:outline-none", className)}
    >
      <article className={cardContentSpacingClass.mediaToCopy}>

        <ImageTile
          src={image}
          alt={name}
          aspect={aspect}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className={cardContentSpacingClass.copyStack}>
          {/* Brand identifier — editorial label role, not a caption or helper text */}
          {brand && (
            <Meta>{brand}</Meta>
          )}

          <SectionTitle as="h4">{name}</SectionTitle>

          {price !== undefined && (
            <Body>
              {typeof price === "number"
                ? `₹${price.toLocaleString()}`
                : price}
            </Body>
          )}
        </div>

      </article>
    </Link>
  )
}
