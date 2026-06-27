/**
 * Mock Conversation Threads — Correspondence Feature
 *
 * Each thread represents a correspondence between the member and a brand.
 * Every thread preserves its origin — the discovery moment that began it.
 *
 * Origin types:
 *   product      — began from a product detail page
 *   program      — began from a program / event page
 *   collection   — began from a collection editorial
 *   brand-story  — began from a brand story / about page
 *   brand        — began directly from a brand profile
 *
 * No backend. No persistence.
 */

import type { CorrespondenceStatus } from "@/features/account/mock/correspondence"

export interface ThreadOrigin {
  type: "product" | "program" | "collection" | "brand-story" | "brand"
  /** Human-readable label shown in the UI */
  label: string
  /** Link back to the origin page */
  href: string
}

export interface ConversationThread {
  id: string
  brand: string
  brandOrigin: string
  subject: string
  status: CorrespondenceStatus
  origin: ThreadOrigin
  /** ISO date string — when the correspondence began */
  startedAt: string
  /** Human-readable relative time string */
  lastActivity: string
}

export const mockThreads: ConversationThread[] = [
  {
    id:          "conv_001",
    brand:       "Tarun Tahiliani",
    brandOrigin: "Mumbai",
    subject:     "Bridal Collection — Autumn Inquiry",
    status:      "awaiting-reply",
    origin: {
      type:  "collection",
      label: "Autumn Bridal Collection",
      href:  "/brands/tarun-tahiliani/collections/autumn-bridal",
    },
    startedAt:    "2025-07-14T10:22:00Z",
    lastActivity: "Yesterday",
  },
  {
    id:          "conv_002",
    brand:       "Auralee",
    brandOrigin: "Tokyo",
    subject:     "SS25 Fabric Sourcing",
    status:      "in-conversation",
    origin: {
      type:  "product",
      label: "Washed Finx Twill Trousers",
      href:  "/brands/auralee/products/washed-finx-twill-trousers",
    },
    startedAt:    "2025-07-10T08:45:00Z",
    lastActivity: "2 days ago",
  },
  {
    id:          "conv_003",
    brand:       "Lemaire",
    brandOrigin: "Paris",
    subject:     "Wholesale Enquiry — Outerwear",
    status:      "resolved",
    origin: {
      type:  "program",
      label: "AW25 Wholesale Preview",
      href:  "/brands/lemaire/programs/aw25-wholesale-preview",
    },
    startedAt:    "2025-06-28T14:10:00Z",
    lastActivity: "Last week",
  },
  {
    id:          "conv_004",
    brand:       "Commas",
    brandOrigin: "Sydney",
    subject:     "Resort Collection Preview",
    status:      "closed",
    origin: {
      type:  "brand-story",
      label: "The Commas Story",
      href:  "/brands/commas/story",
    },
    startedAt:    "2025-06-05T09:30:00Z",
    lastActivity: "3 weeks ago",
  },
  {
    id:          "conv_005",
    brand:       "Baserange",
    brandOrigin: "Copenhagen",
    subject:     "Natural Dye Process — Technical Questions",
    status:      "in-conversation",
    origin: {
      type:  "brand",
      label: "Baserange",
      href:  "/brands/baserange",
    },
    startedAt:    "2025-07-18T11:00:00Z",
    lastActivity: "Today",
  },
]
