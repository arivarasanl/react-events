/**
 * Mock Newsletter Preferences — Profile Feature
 *
 * Defines the available editorial correspondence options
 * and the member's current preferences.
 *
 * Intentionally minimal — five options maximum.
 * This is editorial correspondence, not a marketing preferences centre.
 *
 * No backend. No persistence.
 */

export interface NewsletterPreference {
  id: string
  /** Short label shown as the primary toggle text */
  label: string
  /** One-line editorial description of what this correspondence contains */
  description: string
}

export const newsletterOptions: NewsletterPreference[] = [
  {
    id:          "new-brands",
    label:       "New Brands",
    description: "Introductions to newly featured brands on the platform.",
  },
  {
    id:          "editorial-stories",
    label:       "Editorial Stories",
    description: "Long-form pieces on craft, process and the people behind the work.",
  },
  {
    id:          "programs-conversations",
    label:       "Programs & Conversations",
    description: "Upcoming programs, events and opportunities to connect with brands.",
  },
  {
    id:          "collections",
    label:       "Collections",
    description: "New collections and seasonal releases from brands you follow.",
  },
  {
    id:          "weekly-digest",
    label:       "Weekly Digest",
    description: "A quiet weekly summary of what's new across the platform.",
  },
]

/** The member's current opt-in state — keyed by preference ID */
export const mockNewsletterPreferences: Record<string, boolean> = {
  "new-brands":             true,
  "editorial-stories":      true,
  "programs-conversations": true,
  "collections":            true,
  "weekly-digest":          false,
}
