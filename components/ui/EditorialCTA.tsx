/**
 * EditorialCTA
 *
 * Rectangular editorial call-to-action.
 * Renders as a <Link> when only href is provided.
 * Renders as a <button>-triggered <Link> when onClick is provided
 * (e.g. form submission — prevents default navigation, fires handler).
 *
 * Token: radiusRole.editorialCta → radius.none (0)
 * Tracking: letterSpacing.cta → tracking-widest
 */

import Link from "next/link"
import React from "react"

type EditorialCTAProps = {
  href: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function EditorialCTA({ href, children, onClick }: EditorialCTAProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        inline-block
        border border-current
        px-6 py-3
        text-sm
        tracking-widest
        uppercase
        transition
        hover:bg-black
        hover:text-white
      "
    >
      {children}
    </Link>
  )
}
