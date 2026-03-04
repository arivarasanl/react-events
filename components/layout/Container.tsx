"use client"

import clsx from "clsx"
import React from "react"

type ContainerSize = "narrow" | "content" | "wide" | "full"

type ContainerProps = {
  children: React.ReactNode

  /**
   * Container width presets
   *
   * narrow  → reading / text-heavy content
   * content → default editorial pages
   * wide    → discovery grids (categories, brands, products)
   * full    → near full-bleed (rare, intentional use only)
   */
  size?: ContainerSize

  className?: string
}

/*
  Crafted Container Philosophy

  - controls horizontal alignment ONLY
  - never controls vertical spacing
  - always used inside Section
  - enforces editorial rhythm
  - prevents wrapper chaos

  Container choice is semantic, not aesthetic.
*/

export function Container({
  children,
  size = "content",
  className,
}: ContainerProps) {
  // -------------------------
  // width scale (editorial)
  // -------------------------
  const widthClass =
    size === "narrow"
      ? "max-w-[860px]" // ~768px (reading)
      : size === "wide"
      ? "max-w-[1280px]" // discovery grids
      : size === "full"
      ? "max-w-[1800px]" // near full-bleed (rare)
      : "max-w-[1100px]" // default editorial

  return (
    <div
      className={clsx(
        "mx-auto w-full",

        // horizontal padding only
        "px-5 md:px-16",

        widthClass,
        className
      )}
    >
      {children}
    </div>
  )
}