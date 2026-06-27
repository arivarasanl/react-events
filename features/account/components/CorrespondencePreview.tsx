/**
 * CorrespondencePreview
 *
 * Dashboard preview of the member's latest brand conversations.
 *
 * - Shows the latest three correspondence items only
 * - Hairline-divided list — no cards, no shadows
 * - Status rendered as a calm Meta label — not a badge chip
 * - "View All" trailing link → /dashboard/correspondence
 *
 * Does NOT implement the full correspondence page.
 * That is a separate feature under features/account/correspondence/
 */

import React from "react"
import Link from "next/link"
import { EditorialSection } from "./EditorialSection"
import { EmptyState } from "./EmptyState"
import { Meta } from "@/components/ui/Typography"
import { Body } from "@/components/ui/Typography"
import {
  type CorrespondenceItem,
  correspondenceStatusLabel,
  type CorrespondenceStatus,
} from "@/features/account/mock/correspondence"

interface CorrespondencePreviewProps {
  items: CorrespondenceItem[]
}

function statusColor(status: CorrespondenceStatus): string {
  switch (status) {
    case "awaiting-reply":  return "text-neutral-900"
    case "in-conversation": return "text-neutral-600"
    case "resolved":        return "text-neutral-400"
    case "closed":          return "text-neutral-300"
  }
}

const viewAllLink = (
  <Link
    href="/dashboard/correspondence"
    className="font-sans text-xs tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
  >
    View All
  </Link>
)

export function CorrespondencePreview({ items }: CorrespondencePreviewProps) {
  const preview = items.slice(0, 3)

  return (
    <EditorialSection
      eyebrow="Correspondence"
      headline="Your Conversations"
      trailingLink={items.length > 0 ? viewAllLink : undefined}
    >
      {preview.length === 0 ? (
        <EmptyState
          message="No correspondence yet."
          supporting="Start a conversation with a brand to continue it here."
        />
      ) : (
        <div className="flex flex-col">
          {preview.map((item, index) => (
            <Link
              key={item.id}
              href={`/dashboard/correspondence/${item.id}`}
              className="group block"
            >
              <div
                className={[
                  "flex flex-col md:flex-row md:items-center md:justify-between",
                  "py-6 gap-3 md:gap-8",
                  "transition-colors duration-200",
                  index < preview.length - 1 ? "border-b border-neutral-100" : "",
                ].join(" ")}
              >
                {/* Left — brand + subject */}
                <div className="flex flex-col gap-1 min-w-0">
                  <Meta
                    tone="default"
                    className="group-hover:text-neutral-700 transition-colors duration-200"
                  >
                    {item.brand}
                  </Meta>
                  <Body
                    tone="default"
                    className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200 truncate"
                  >
                    {item.subject}
                  </Body>
                </div>

                {/* Right — status + time */}
                <div className="flex items-center gap-6 shrink-0">
                  <span
                    className={[
                      "font-sans text-[0.7rem] tracking-[0.15em] uppercase",
                      "transition-colors duration-200",
                      statusColor(item.status),
                    ].join(" ")}
                  >
                    {correspondenceStatusLabel[item.status]}
                  </span>

                  <span className="font-sans text-xs text-neutral-300 whitespace-nowrap">
                    {item.lastActivity}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </EditorialSection>
  )
}
