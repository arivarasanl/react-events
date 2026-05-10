/**
 * Typography Tokens — Crafted Design System
 *
 * Extracted from:
 *   components/ui/Typography.tsx   → component-level type scale
 *   app/globals.css                → CSS fluid type scale (.type-*)
 *   components/ui/EditorialCTA.tsx → CTA label style
 *   components/ui/ScrollDiscover.tsx → micro label style
 *
 * IMPORTANT — two parallel systems exist today:
 *
 *   System A: Typography.tsx components (Title, Subtitle, CardTitle, Text, Muted, Caption)
 *             Uses fixed Tailwind steps. Applied via JSX components.
 *
 *   System B: .type-* CSS classes in globals.css
 *             Uses clamp() for fluid scale. Applied via className strings.
 *             Currently used only in BrandStory.tsx.
 *
 * Both are captured here as-is. The fluid scale (System B) is the editorial
 * ideal — reconciliation is a future step, not in scope for this foundation pass.
 *
 * Do not alter the values. Do not merge the systems yet.
 */

// ─── Font families ────────────────────────────────────────────────────────────
// Set as CSS custom properties via next/font in app/layout.tsx.
// Tailwind utilities `font-serif` and `font-sans` map to these.

export const fontFamily = {
  /** Luxury editorial voice — headlines, brand names, titles */
  serif: "var(--font-serif)",
  /** Neutral utility — body, metadata, labels */
  sans:  "var(--font-sans)",
} as const

// ─── System A — Component type scale (Typography.tsx) ────────────────────────
// Fixed-step Tailwind classes used by the Typography component system.
// These are the source-of-truth values baked into each component.

export const typeScale = {
  /** Title — h2 — font-serif text-3xl md:text-4xl leading-snug */
  title: {
    family:      fontFamily.serif,
    sizeMobile:  "1.875rem", // text-3xl
    sizeDesktop: "2.25rem",  // text-4xl
    lineHeight:  "1.375",    // leading-snug
    weight:      "400",      // font-serif default (not bold)
  },

  /** Subtitle — h3 — font-serif text-2xl md:text-3xl leading-snug */
  subtitle: {
    family:      fontFamily.serif,
    sizeMobile:  "1.5rem",   // text-2xl
    sizeDesktop: "1.875rem", // text-3xl
    lineHeight:  "1.375",    // leading-snug
    weight:      "400",
  },

  /** CardTitle — h4 — font-serif text-xl leading-snug */
  cardTitle: {
    family:     fontFamily.serif,
    size:       "1.25rem",  // text-xl
    lineHeight: "1.375",    // leading-snug
    weight:     "400",
  },

  /** Text — p — font-sans text-base text-neutral-600 leading-relaxed */
  text: {
    family:     fontFamily.sans,
    size:       "1rem",    // text-base
    lineHeight: "1.625",   // leading-relaxed
    weight:     "400",
  },

  /** Muted — p — font-sans text-sm text-neutral-500 */
  muted: {
    family:     fontFamily.sans,
    size:       "0.875rem", // text-sm
    lineHeight: "1.5",      // leading-normal
    weight:     "400",
  },

  /**
   * Caption — span — font-sans text-sm text-neutral-400 tracking-wide uppercase
   * Used for: section labels, dates, meta identifiers, editorial tags.
   */
  caption: {
    family:        fontFamily.sans,
    size:          "0.875rem", // text-sm
    lineHeight:    "1.5",
    weight:        "400",
    letterSpacing: "0.05em",   // tracking-wide
    textTransform: "uppercase" as const,
  },
} as const

// ─── System B — Fluid type scale (globals.css .type-* classes) ───────────────
// Uses clamp() for cinematic fluid scaling between viewport widths.
// Currently applied only via raw className — not consumed by Typography.tsx.
// Source: app/globals.css lines 27–68.

export const fluidTypeScale = {
  /**
   * .type-display — Hero / Big Moments
   * font-serif, clamp(2.5rem, 5vw, 4.5rem), line-height 1.05, letter-spacing -0.02em
   */
  display: {
    family:        fontFamily.serif,
    size:          "clamp(2.5rem, 5vw, 4.5rem)",
    lineHeight:    "1.05",
    letterSpacing: "-0.02em",
  },

  /**
   * .type-headline — Section Titles
   * font-serif, clamp(1.5rem, 2.5vw, 2.25rem), line-height 1.2, letter-spacing -0.01em
   */
  headline: {
    family:        fontFamily.serif,
    size:          "clamp(1.5rem, 2.5vw, 2.25rem)",
    lineHeight:    "1.2",
    letterSpacing: "-0.01em",
  },

  /**
   * .type-body — Main body text
   * font-sans, 1rem, line-height 1.7, color neutral-600
   */
  body: {
    family:     fontFamily.sans,
    size:       "1rem",
    lineHeight: "1.7",
  },

  /**
   * .type-body-lg — Hero description / intro
   * font-sans, 1.125rem, line-height 1.75, color neutral-500
   */
  bodyLg: {
    family:     fontFamily.sans,
    size:       "1.125rem",
    lineHeight: "1.75",
  },

  /**
   * .type-meta — Labels, tags, section eyebrows
   * font-sans, 0.7rem, letter-spacing 0.2em, uppercase, color neutral-400
   */
  meta: {
    family:        fontFamily.sans,
    size:          "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
  },

  /**
   * .type-caption — Secondary captions
   * font-sans, 0.8rem, color neutral-500
   */
  caption: {
    family: fontFamily.sans,
    size:   "0.8rem",
  },
} as const

// ─── Letter-spacing scale ─────────────────────────────────────────────────────
// Observed tracking values across components. Named for their editorial intent.

export const letterSpacing = {
  /** Caption / label baseline — tracking-wide */
  label:     "0.05em",
  /** Editorial eyebrow / scroll indicator — tracking-[0.35em] */
  eyebrow:   "0.35em",
  /** CTA / button text — tracking-widest */
  cta:       "0.1em",
  /** Meta / tag text — .type-meta */
  meta:      "0.2em",
  /** StickyBrandBar brand name — tracking-[0.25em] */
  brandBar:  "0.25em",
} as const

export type TypeScaleKey       = keyof typeof typeScale
export type FluidTypeScaleKey  = keyof typeof fluidTypeScale

// ─── CVA tone colour roles ────────────────────────────────────────────────────
// Tailwind colour classes mapped to semantic tone variants.
// Consumed by the CVA layer in components/ui/Typography.tsx.
// Three colour roles — each with three tone variants:
//
//   editorial  — headings, titles, section labels (high contrast)
//   body       — running prose (mid contrast)
//   secondary  — captions, meta labels (low contrast)
//
// inverse tones are calibrated for rendering on dark/image overlays.

export const toneColors = {
  editorial: {
    default: "text-neutral-900",
    muted:   "text-neutral-500",
    inverse: "text-white",
  },
  body: {
    default: "text-neutral-600",
    muted:   "text-neutral-500",
    inverse: "text-white/90",
  },
  secondary: {
    default: "text-neutral-400",
    muted:   "text-neutral-300",
    /** white/80 — calibrated for legibility on semi-transparent dark overlays */
    inverse: "text-white/80",
  },
} as const
