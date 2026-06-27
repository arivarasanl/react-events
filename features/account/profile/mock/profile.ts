/**
 * Mock Profile — Profile Feature
 *
 * Single source of truth for the mock member profile.
 * Pre-populated with realistic data so the form renders meaningfully.
 *
 * Replace with real auth context / API when backend is implemented.
 *
 * No backend. No persistence.
 */

export interface MemberProfile {
  fullName: string
  email: string
  /** Optional — not required */
  phone: string
  city: string
  country: string
  /** Optional — not required */
  profession: string
  /** Optional — not required */
  about: string
}

export const mockProfile: MemberProfile = {
  fullName:   "Ari Nakamura",
  email:      "ari@example.com",
  phone:      "",
  city:       "London",
  country:    "United Kingdom",
  profession: "Textile Researcher",
  about:      "I'm drawn to considered craft and the stories behind how things are made. I follow a small number of brands closely and value direct conversation over catalogue browsing.",
}
