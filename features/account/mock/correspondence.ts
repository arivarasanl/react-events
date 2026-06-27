/**
 * Mock Correspondence — Account Feature
 *
 * Represents the member's brand conversations.
 * Only the latest three are shown on the dashboard preview.
 *
 * Statuses:
 *   awaiting-reply  — member has sent a message; brand has not yet responded
 *   in-conversation — active back-and-forth exchange
 *   resolved        — conversation concluded satisfactorily
 *   closed          — conversation ended without resolution or by member request
 *
 * No backend. No persistence.
 */

export type CorrespondenceStatus =
  | "awaiting-reply"
  | "in-conversation"
  | "resolved"
  | "closed"

export interface CorrespondenceItem {
  id: string
  brand: string
  /** Brand's country or city — editorial context only */
  brandOrigin: string
  subject: string
  status: CorrespondenceStatus
  /** Human-readable relative time string */
  lastActivity: string
}

export const mockCorrespondence: CorrespondenceItem[] = [
  {
    id:           "conv_001",
    brand:        "Tarun Tahiliani",
    brandOrigin:  "Mumbai",
    subject:      "Bridal Collection — Autumn Inquiry",
    status:       "awaiting-reply",
    lastActivity: "Yesterday",
  },
  {
    id:           "conv_002",
    brand:        "Auralee",
    brandOrigin:  "Tokyo",
    subject:      "SS25 Fabric Sourcing",
    status:       "in-conversation",
    lastActivity: "2 days ago",
  },
  {
    id:           "conv_003",
    brand:        "Lemaire",
    brandOrigin:  "Paris",
    subject:      "Wholesale Enquiry — Outerwear",
    status:       "resolved",
    lastActivity: "Last week",
  },
  {
    id:           "conv_004",
    brand:        "Commas",
    brandOrigin:  "Sydney",
    subject:      "Resort Collection Preview",
    status:       "closed",
    lastActivity: "3 weeks ago",
  },
]

/** Status display labels — editorial, lowercase, calm */
export const correspondenceStatusLabel: Record<CorrespondenceStatus, string> = {
  "awaiting-reply":  "Awaiting Reply",
  "in-conversation": "In Conversation",
  "resolved":        "Resolved",
  "closed":          "Closed",
}
