/**
 * Shadow Tokens — Crafted Design System
 *
 * Extracted from:
 *   components/ui/Card.tsx          → shadow-sm (default), transition-shadow
 *   components/ui/ImageTile.tsx     → hover:shadow-xl
 *   features/programs/ProgramCard.tsx → hover:shadow-md
 *
 * Philosophy: shadows are used sparingly — only on structured Card containers
 * and on ImageTile hover. Editorial image components (BrandCard, FeaturedBrandCard)
 * do not use box shadows — depth is created via image overlays and scale instead.
 *
 * Rule: No shadow-* outside UI components — ui-system.md §4.
 */

// ─── Shadow scale ─────────────────────────────────────────────────────────────
// Raw CSS box-shadow values. Tailwind's default shadow scale as implemented.

export const shadow = {
  /**
   * none — no shadow
   * Used by: editorial image cards (BrandCard, FeaturedBrandCard, ProductCard).
   * Depth via overlay + scale, not shadow.
   */
  none: "none",

  /**
   * sm — Tailwind shadow-sm
   * Used by: Card component (default resting state).
   * Subtle — almost invisible. Signals containment without weight.
   */
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",

  /**
   * md — Tailwind shadow-md
   * Used by: ProgramCard hover state (hover:shadow-md).
   * Moderate lift — signals interactivity on structured cards.
   */
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -2px rgba(0, 0, 0, 0.10)",

  /**
   * xl — Tailwind shadow-xl
   * Used by: ImageTile hover state (hover:shadow-xl).
   * Used on editorial image tiles to signal hover depth.
   */
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
} as const

// ─── Semantic shadow assignments ──────────────────────────────────────────────
// Named for their editorial role.

export const shadowRole = {
  /**
   * Resting state of structured Card containers.
   * Source: Card.tsx → shadow-sm
   */
  card: shadow.sm,

  /**
   * Hover state of structured Card containers (ProgramCard).
   * Source: ProgramCard.tsx → hover:shadow-md
   */
  cardHover: shadow.md,

  /**
   * Hover state of editorial image tiles.
   * Source: ImageTile.tsx → hover:shadow-xl
   * Note: ImageTile also applies hover:-translate-y-1 alongside this.
   */
  imageTileHover: shadow.xl,

  /**
   * Editorial image cards — no shadow.
   * BrandCard, FeaturedBrandCard, ProductCard use overlays/scale instead.
   */
  editorial: shadow.none,
} as const

// ─── Shadow transitions ────────────────────────────────────────────────────────
// Duration / easing used when transitioning shadow states.
// Source: Card.tsx → transition-shadow duration-200

export const shadowTransition = {
  /** Card shadow transition — from Card.tsx */
  card: "box-shadow 200ms ease",
} as const

export type ShadowKey     = keyof typeof shadow
export type ShadowRoleKey = keyof typeof shadowRole
