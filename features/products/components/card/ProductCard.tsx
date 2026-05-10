"use client"

import { ImageTile } from "@/components/ui/ImageTile"
import Link from "next/link"
import clsx from "clsx"
import React from "react"

import { CardTitle, Text, Muted } from "@/components/ui/Typography"

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
      <article className="space-y-5">

        <ImageTile
          src={image}
          alt={name}
          aspect={aspect}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="space-y-1">
          {brand && (
            <Muted className="uppercase tracking-wider">
              {brand}
            </Muted>
          )}

          <CardTitle className="leading-tight tracking-tight">
            {name}
          </CardTitle>

          {price !== undefined && (
            <Text>
              {typeof price === "number"
                ? `₹${price.toLocaleString()}`
                : price}
            </Text>
          )}
        </div>

      </article>
    </Link>
  )
}