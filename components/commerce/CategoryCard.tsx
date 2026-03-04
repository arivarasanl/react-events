"use client"

import { ImageTile } from "@/components/ui/ImageTile"
import Link from "next/link"
import clsx from "clsx"
import React from "react"

type CategoryCardProps = {
  title: string
  subtitle?: string
  image: string
  href?: string
  priority?: boolean
  className?: string
}

export function CategoryCard({
  title,
  subtitle,
  image,
  href,
  priority = false,
  className,
}: CategoryCardProps) {

  const Wrapper: React.ElementType = href ? Link : "div"

  return (
    <Wrapper
      href={href ?? ""}
      className={clsx("group block focus:outline-none", className)}
    >
      <article className="space-y-4">

        <ImageTile
          src={image}
          alt={title}
          aspect="square"
          priority={priority}
        />

        <div className="space-y-1">
          <h3 className="font-serif text-base md:text-lg leading-tight tracking-tight">
            {title}
          </h3>

          {subtitle && (
            <p className="text-xs text-neutral-500">
              {subtitle}
            </p>
          )}
        </div>

      </article>
    </Wrapper>
  )
}