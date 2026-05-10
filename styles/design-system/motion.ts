/**
 * Motion Tokens — Crafted Design System
 *
 * Extracted from:
 *   lib/motion/presets.ts              → motionTokens, all variant presets
 *   components/motion/Reveal.tsx       → scroll reveal values
 *   components/motion/RevealOnView.tsx → CSS-only reveal values
 *   components/motion/AnimatedGrid.tsx → stagger grid values
 *   components/ui/ScrollDiscover.tsx   → bounce animation
 *   features/brand-details/components/story/BrandStory.tsx → inline motion values
 *
 * This file re-exports the canonical motion vocabulary from lib/motion/presets.ts
 * and adds the values that currently exist only inline (outside presets.ts).
 *
 * Philosophy (from presets.ts):
 *   calm · cinematic · editorial · invisible
 *   Only opacity + transform. No bounce / spring / parallax / big scale.
 *   If an animation is noticeable → it is too much.
 *
 * Rule: presets.ts remains the authoritative source for Framer Motion variants.
 * This file captures the full motion vocabulary including CSS-only patterns.
 */

// ─── Re-export canonical tokens from presets.ts ───────────────────────────────
// Consumers should import motion presets from lib/motion/presets, not from here.
// These are documented here for completeness and cross-reference.

export { motionTokens } from "@/lib/motion/presets"

/**
 * Canonical duration scale (seconds)
 * Source: lib/motion/presets.ts → motionTokens.duration
 *
 *   instant:   0.12  → micro feedback (not currently used)
 *   fast:      0.32  → hover interactions (hoverLift, hoverCard)
 *   medium:    0.55  → standard entrance / modal content
 *   slow:      0.85  → fadeRise, stagger items
 *   xslow:     1.1   → heroTitle entrance
 *   cinematic: 20    → heroZoom (slow image scale over 20s)
 */

/**
 * Canonical easing curve
 * Source: lib/motion/presets.ts → motionTokens.ease
 *
 *   [0.16, 1, 0.3, 1] — custom cubic-bezier
 *   A fast initial acceleration with a long, gentle tail.
 *   Used universally across all Framer Motion animations.
 */

/**
 * Canonical offset scale (px — used as initial y transform)
 * Source: lib/motion/presets.ts → motionTokens.offset
 *
 *   xs:  6   → not currently used in presets
 *   sm:  10  → fadeMicroRise
 *   md:  18  → fadeRise (standard entrance)
 *   lg:  28  → heroTitle
 */

/**
 * Canonical scale values (used in hover interactions)
 * Source: lib/motion/presets.ts → motionTokens.scale
 *
 *   subtle:  1.015 → not currently used
 *   default: 1.02  → hoverCard
 *   image:   1.03  → hoverImageZoom, heroZoom initial state
 *
 * Note: ImageTile uses scale-105 (Tailwind CSS, not Framer Motion).
 * This is an inconsistency — scale-105 = 1.05 vs motionTokens.scale.image = 1.03.
 */

// ─── Stagger timing values ────────────────────────────────────────────────────
// Extracted from stagger variants in presets.ts + AnimatedGrid.tsx.

export const stagger = {
  /**
   * Standard grid stagger (Grid.tsx default)
   * Source: presets.ts → staggerContainer
   */
  standard: {
    staggerChildren: 0.085,
    delayChildren:   0.05,
  },

  /**
   * Tight stagger — dense item lists
   * Source: presets.ts → staggerContainerTight
   */
  tight: {
    staggerChildren: 0.045,
  },

  /**
   * Relaxed stagger — editorial sections, breathing room between items
   * Source: presets.ts → staggerContainerRelaxed
   */
  relaxed: {
    staggerChildren: 0.13,
    delayChildren:   0.08,
  },

  /**
   * Hero stagger — page entry sequence
   * Source: presets.ts → heroStagger
   */
  hero: {
    staggerChildren: 0.16,
    delayChildren:   0.25,
  },

  /**
   * AnimatedGrid stagger — 3-column grid on landing page
   * Source: components/motion/AnimatedGrid.tsx (inline — not using presets.ts)
   * Note: this is a divergence — AnimatedGrid does not use staggerContainer.
   */
  animatedGrid: {
    staggerChildren: 0.1,
  },
} as const

// ─── Reveal values ────────────────────────────────────────────────────────────
// Values used by scroll-reveal components.

export const reveal = {
  /**
   * Framer Motion reveal (Reveal.tsx)
   * initial: { opacity: 0, y: 24 }
   * animate: { opacity: 1, y: 0 }
   * duration: 0.6, ease: "easeOut"
   * viewport: once: true, margin: "-80px"
   *
   * Note: uses "easeOut" string, not the canonical motionTokens.ease cubic-bezier.
   * Minor inconsistency — the easing is visually similar but not the same curve.
   */
  framer: {
    initial:    { opacity: 0, y: 24 },
    viewport:   { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  /**
   * CSS-only reveal (RevealOnView.tsx)
   * Uses IntersectionObserver + Tailwind transition classes.
   * duration-700 ease-out (700ms / cubic-bezier(0,0,0.2,1))
   * Initial: opacity-0 translate-y-6 (24px)
   * Visible: opacity-100 translate-y-0
   *
   * Note: separate implementation from Reveal.tsx — uses CSS transitions,
   * not Framer Motion. Values are visually equivalent (same y offset, similar duration).
   */
  css: {
    duration:        "700ms",
    ease:            "cubic-bezier(0, 0, 0.2, 1)", // ease-out
    initialY:        "1.5rem",  // translate-y-6
    viewportMargin:  "10%",     // IntersectionObserver threshold: 0.1
  },
} as const

// ─── Inline motion values (not in presets.ts) ─────────────────────────────────
// Values from components that define animation inline instead of using presets.
// These are captured as a record of debt — they should eventually use presets.

export const inlineMotion = {
  /**
   * BrandStory.tsx — hairline rule scale animation
   * Not using presets. Direct inline on motion.span.
   */
  brandStoryLine: {
    initial:    { scaleX: 0 },
    whileInView: { scaleX: 1 },
    transition: { duration: 0.8 },
    viewport:   { once: true },
  },

  /**
   * BrandStory.tsx — quote fade in
   */
  brandStoryQuote: {
    initial:    { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1 },
    viewport:   { once: true },
  },

  /**
   * BrandStory.tsx — author fade in (with delay)
   */
  brandStoryAuthor: {
    initial:    { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay: 0.2 },
    viewport:   { once: true },
  },

  /**
   * Programs.tsx (brand-details) — list item fade in with stagger
   * delay: i * 0.1 — matches stagger.animatedGrid timing
   */
  brandProgramItem: {
    initial:    { opacity: 0 },
    whileInView: { opacity: 1 },
    staggerDelay: 0.1,
    viewport:   { once: true },
  },

  /**
   * ScrollDiscover.tsx — bounce indicator
   * Loop: y [0, 8, 0] over 1.6s, infinite, easeInOut
   */
  scrollBounce: {
    animate:    { y: [0, 8, 0] },
    transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
  },

  /**
   * StickyBrandBar.tsx — slide in from top on scroll
   * animate: { y: visible ? 0 : -60, opacity: visible ? 1 : 0 }
   * duration: 0.3, ease: "easeOut"
   */
  stickyBarEntry: {
    initial:    { y: -60, opacity: 0 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
} as const

// ─── Viewport helper ──────────────────────────────────────────────────────────
// Re-exported from presets.ts for convenience.

export { viewportOnce } from "@/lib/motion/presets"

/**
 * viewportOnce (from presets.ts):
 *   once: true
 *   amount: 0.2
 *   margin: "-40px 0px -40px 0px"
 */
