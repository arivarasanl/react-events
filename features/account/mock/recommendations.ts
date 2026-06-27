/**
 * Mock Recommendations — Account Feature
 *
 * Curated brand recommendations shown in the "Curated For You" section.
 * Three brands — editorially framed, not algorithmically described.
 *
 * Uses the same shape as the existing brand discovery data
 * so existing card components can consume it without modification.
 *
 * No backend. No persistence.
 */

export interface RecommendedBrand {
  id: string
  name: string
  origin: string
  /** One-line editorial descriptor — not a marketing tagline */
  descriptor: string
  /** Category label shown as Meta */
  category: string
  /** Placeholder image path — replace with real assets */
  image: string
  href: string
}

export const mockRecommendations: RecommendedBrand[] = [
  {
    id:         "rec_001",
    name:       "Auralee",
    origin:     "Tokyo",
    descriptor: "Refined materiality and quiet seasonal restraint.",
    category:   "Ready-to-Wear",
    image:      "/images/placeholder-brand-1.jpg",
    href:       "/brands/auralee",
  },
  {
    id:         "rec_002",
    name:       "Baserange",
    origin:     "Copenhagen",
    descriptor: "Undyed natural fibres shaped for daily life.",
    category:   "Essentials",
    image:      "/images/placeholder-brand-2.jpg",
    href:       "/brands/baserange",
  },
  {
    id:         "rec_003",
    name:       "Commas",
    origin:     "Sydney",
    descriptor: "Considered resort and tailoring from the southern hemisphere.",
    category:   "Tailoring",
    image:      "/images/placeholder-brand-3.jpg",
    href:       "/brands/commas",
  },
]
