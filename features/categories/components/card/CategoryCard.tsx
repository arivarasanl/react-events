"use client"

import { ImageTile } from "@/components/ui/ImageTile"
import Link from "next/link"
import clsx from "clsx"
import React from "react"

import { SectionTitle, Caption } from "@/components/ui/Typography"

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
          {/* size="compact" preserves the original text-base md:text-lg scale exactly */}
          <SectionTitle as="h3" size="compact">{title}</SectionTitle>

          {subtitle && (
            <Caption tone="muted">{subtitle}</Caption>
          )}
        </div>

      </article>
    </Wrapper>
  )
}