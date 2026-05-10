/**
 * Radius Tokens — Crafted Design System
 *
 * Extracted from:
 *   components/ui/Card.tsx           → rounded-xl
 *   components/ui/ImageTile.tsx      → rounded-2xl
 *   features/brands/card/BrandCard.tsx → rounded-2xl
 *   components/sections/SplitHero.tsx  → rounded-3xl (hero image panel)
 *   features/brands/grid/BrandCard.tsx → rounded-full (logo avatar)
 *   features/programs/ProgramCard.tsx  → rounded (status badge, via Card)
 *
 * Rule: No ad-hoc rounded-* outside UI components — ui-system.md §4.
 * These tokens represent what currently exists. They are not aspirational.
 */

// ─── Radius scale ─────────────────────────────────────────────────────────────

export const radius = {
  /**
   * none — 0
   * Used by: EditorialCTA border (borderRadius 0 — pure rectangular).
   */
  none: "0",

  /**
   * sm — 0.25rem (rounded)
   * Used by: ProgramCard status badge.
   */
  sm: "0.25rem",

  /**
   * md — 0.5rem (rounded-lg)
   * Used by: product thumbnail previews in BrandCard (grid), rounded-md.
   */
  md: "0.5rem",

  /**
   * card — 0.75rem (rounded-xl)
   * Used by: Card component — the canonical container radius.
   */
  card: "0.75rem",

  /**
   * tile — 1rem (rounded-2xl)
   * Used by: ImageTile, BrandCard (card/), BrandsGrid items.
   * The dominant radius for editorial image tiles.
   */
  tile: "1rem",

  /**
   * hero — 1.5rem (rounded-3xl)
   * Used by: SplitHero image panel — larger radius for feature-scale imagery.
   */
  hero: "1.5rem",

  /**
   * full — 9999px (rounded-full)
   * Used by: logo avatars in BrandCard (grid), FeaturedBrandCard logo pill.
   */
  full: "9999px",
} as const

// ─── Semantic radius assignments ──────────────────────────────────────────────
// Named for their editorial role, not for their pixel value.

export const radiusRole = {
  /** <Card> component — structured content containers (Programs, etc.) */
  container:    radius.card,
  /** Editorial image tiles — ImageTile, BrandCard image area */
  imageTile:    radius.tile,
  /** Large editorial image panels — SplitHero, feature heroes */
  imageHero:    radius.hero,
  /** Brand logo / avatar mark */
  logoMark:     radius.full,
  /** Status badges, micro chips */
  badge:        radius.sm,
  /** Product thumbnail strip */
  thumbnail:    radius.md,
  /** Editorial CTA button — rectangular, no radius */
  editorialCta: radius.none,
} as const

export type RadiusKey     = keyof typeof radius
export type RadiusRoleKey = keyof typeof radiusRole
