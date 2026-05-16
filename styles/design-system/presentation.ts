/**
 * Presentation Class Bridges — Crafted Design System
 *
 * Stable Tailwind class combinations for repeated image and surface behavior.
 * These are not wrapper components and do not own composition, dimensions, or layout.
 */

import { transitionClass } from "@/styles/design-system/motion"

export const imagePresentationClass = {
  /** Base image treatment for editorial media. */
  cover: "object-cover",
  /** Cinematic hover zoom with explicit ease-out timing. */
  hoverZoomEaseOut: `${transitionClass.imageTransformEaseOut} group-hover:scale-105`,
  /** Cinematic hover zoom preserving default Tailwind transition easing. */
  hoverZoom: `${transitionClass.imageTransform} group-hover:scale-105`,
} as const

export const surfacePresentationClass = {
  /** Neutral image loading / placeholder plane. */
  imageNeutral: "bg-neutral-100",
  /** Slightly stronger empty-image fallback plane. */
  imageEmpty: "bg-neutral-200",
  /** Dominant editorial image tile surface. */
  imageTile: "overflow-hidden rounded-2xl bg-neutral-100",
  /** Large editorial image panel surface. */
  imageHero: "overflow-hidden rounded-3xl",
} as const

export const overlayPresentationClass = {
  /** Image tile hover wash. */
  tileHoverWash: `absolute inset-0 bg-black/0 ${transitionClass.colorWash} group-hover:bg-black/10`,
  /** Featured brand card text readability gradient. */
  featuredBrandGradient: "absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent",
  /** Runway highlight readability scrim. */
  runwayScrim: "absolute inset-0 bg-black/30",
} as const
