/**
 * Color Tokens — Crafted Design System
 *
 * Extracted from:
 *   components/ui/Typography.tsx     → text color assignments per role
 *   components/ui/Card.tsx           → surface color (bg-white)
 *   components/layout/Section.tsx    → muted background (bg-neutral-50)
 *   app/globals.css                  → rgb() values for neutral-400/500/600
 *   ui-system.md §6                  → system constraints (no gradients, no ad-hoc)
 *   features/** (observed patterns)  → overlay/gradient usage
 *
 * Rule: No gradients in the token layer — gradients are editorial effects
 * applied by specific components (BrandHero, BrandCard), not system defaults.
 *
 * Rule: No ad-hoc colors. Every color used in the system must map to a token here.
 */

// ─── Neutral palette ──────────────────────────────────────────────────────────
// Full neutral scale as used across the codebase. Values match Tailwind neutral.
// Raw rgb() values sourced from globals.css comments.

export const neutral = {
  0:   "#ffffff",                 // white — surface default
  50:  "#fafafa",                 // bg-neutral-50 — muted section background
  100: "#f5f5f5",                 // bg-neutral-100 — image placeholders
  200: "#e5e5e5",                 // bg-neutral-200 — empty state backgrounds, borders
  300: "#d4d4d4",                 // bg-neutral-300 — hairline dividers (EditorialDivider)
  400: "rgb(163 163 163)",        // text-neutral-400 — Caption text
  500: "rgb(115 115 115)",        // text-neutral-500 — Muted text, scroll indicator
  600: "rgb(82 82 82)",           // text-neutral-600 — Body text (Text component)
  700: "#404040",                 // text-neutral-700 — StickyBrandBar brand label
  800: "#262626",                 // text-neutral-800 — BrandStory quote (near-black)
  900: "#171717",                 // text-neutral-900 — Emphasized labels, CardTitle
  1000: "#000000",                // black — primary text, CTA fill on hover, overlays
} as const

// ─── Semantic surface colors ──────────────────────────────────────────────────
// Named for their editorial role, not for their hex value.

export const surface = {
  /** Page background — always white */
  page:       neutral[0],
  /** Card / block background — always white (ui-system §4) */
  card:       neutral[0],
  /** Muted section tone — Section variant="muted" */
  muted:      neutral[50],
  /** Image placeholder / empty state */
  placeholder: neutral[100],
} as const

// ─── Semantic text colors ─────────────────────────────────────────────────────
// These map directly to Typography component defaults.

export const text = {
  /** Primary text — headings, brand names, interactive elements */
  primary:   neutral[1000],
  /** Body prose — Text component default */
  body:      neutral[600],
  /** Secondary metadata — Muted component default */
  muted:     neutral[500],
  /** Labels, captions, tags — Caption component default */
  caption:   neutral[400],
  /** Emphasized secondary — borders, toolbar text */
  subtle:    neutral[700],
  /** Near-black — BrandStory quote, emphasized prose */
  strong:    neutral[800],
} as const

// ─── Semantic border colors ───────────────────────────────────────────────────

export const border = {
  /** Default divider — border-neutral-200 */
  default: neutral[200],
  /** Hairline divider — border-neutral-300 (EditorialDivider, BrandStory lines) */
  hairline: neutral[300],
  /** Active / focused border — black */
  active:   neutral[1000],
} as const

// ─── Overlay / scrim colors ───────────────────────────────────────────────────
// Used by editorial image components: BrandHero, BrandCard, FeaturedBrandCard.
// These are rgba values — not Tailwind bg-black/* utilities.
// Captured as-is from each component's implementation.

export const overlay = {
  /**
   * BrandHero cinematic gradient
   * bg-gradient-to-t from-black/70 via-black/25 to-transparent
   */
  heroGradient: {
    from: "rgba(0, 0, 0, 0.70)",
    via:  "rgba(0, 0, 0, 0.25)",
    to:   "transparent",
  },

  /**
   * BrandCard / FeaturedBrandCard editorial gradient (hover reveal)
   * bg-gradient-to-t from-black/70 to-transparent
   */
  cardGradient: {
    from: "rgba(0, 0, 0, 0.70)",
    to:   "transparent",
  },

  /**
   * FeaturedBrandCard — lighter gradient used on the full-bleed card
   * bg-gradient-to-t from-black/30 via-black/10 to-transparent
   */
  featuredCardGradient: {
    from: "rgba(0, 0, 0, 0.30)",
    via:  "rgba(0, 0, 0, 0.10)",
    to:   "transparent",
  },

  /**
   * Editorial item image overlay (Editorial.tsx dark section)
   * Static: bg-black/20 → hover: bg-black/30
   */
  editorialImage: {
    default: "rgba(0, 0, 0, 0.20)",
    hover:   "rgba(0, 0, 0, 0.30)",
  },

  /**
   * CategoryNavigation scroll fade — side gradient on scrollable nav
   * Matches bg-white/90 bleed used for the arrow fade regions
   */
  navFade: {
    strong:  "rgba(255, 255, 255, 0.95)",
    medium:  "rgba(255, 255, 255, 0.90)",
    edge:    "transparent",
  },

  /**
   * Hero editorial wash (Hero.tsx) — light-over-image treatment
   * bg-gradient-to-b from-white/70 via-white/30 to-white/80
   */
  heroLightWash: {
    from: "rgba(255, 255, 255, 0.70)",
    via:  "rgba(255, 255, 255, 0.30)",
    to:   "rgba(255, 255, 255, 0.80)",
  },
} as const

// ─── On-dark text colors ──────────────────────────────────────────────────────
// Colors used when text sits on dark image backgrounds (BrandHero, Editorial).

export const onDark = {
  /** Full white — primary text on dark */
  primary:   "#ffffff",
  /** Slightly muted white — taglines on dark (text-white/90) */
  secondary: "rgba(255, 255, 255, 0.90)",
  /** Muted white — secondary labels on dark (text-white/80) */
  muted:     "rgba(255, 255, 255, 0.80)",
  /** Label / eyebrow on dark — StickyBrandBar, Editorial caption */
  caption:   "rgba(255, 255, 255, 0.60)",
} as const

// ─── Status colors ────────────────────────────────────────────────────────────
// Used only by ProgramCard status badge — constrained to that context.
// Note: red-500 is the one non-neutral color in the codebase (live indicator).

export const status = {
  /** Live / current program — bg-red-500 */
  live:     { bg: "#ef4444", text: "#ffffff" },
  /** Upcoming program — bg-black/70 */
  upcoming: { bg: "rgba(0, 0, 0, 0.70)", text: "#ffffff" },
  /** Past / replay — bg-gray-200 */
  past:     { bg: "#e5e7eb", text: "#000000" },
} as const
