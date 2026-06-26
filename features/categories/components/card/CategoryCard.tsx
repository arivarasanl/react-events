"use client"

import { ImageTile } from "@/components/ui/ImageTile"
import Link from "next/link"
import clsx from "clsx"
import React from "react"

import { SectionTitle, Caption, Body } from "@/components/ui/Typography"
import { cardContentSpacingClass } from "@/styles/design-system/spacing"

type CategoryCardProps = {
  title: string
  description?: string
  image: string
  href?: string
  priority?: boolean
  sizes?: string
  aspect?: "square" | "portrait"
  className?: string
}

export function CategoryCard({
  title,
  description,
  image,
  href,
  priority = false,
  sizes,
  aspect = "square",
  className,
}: CategoryCardProps) {
  const Wrapper: React.ElementType = href ? Link : "div"

  return (
    <Wrapper
      href={href ?? ""}
      className={clsx("group block focus:outline-none", className)}
    >
      <article className={cardContentSpacingClass.mediaToCopy}>
        <ImageTile
          src={image}
          alt={title}
          aspect={aspect}
          priority={priority}
          sizes={sizes}
        />

        <div className={cardContentSpacingClass.copyStack}>
          <SectionTitle as="h3" size="compact">
            {title}
          </SectionTitle>

          {description && <Body>{description}</Body>}
        </div>
      </article>
    </Wrapper>
  )
}
