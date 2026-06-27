/**
 * CorrespondenceListItem
 *
 * Single row in the correspondence list.
 *
 * - Brand name (Meta — uppercase, tracked)
 * - Subject (Body — readable prose weight)
 * - Origin context (small, muted — "From: Autumn Bridal Collection")
 * - Status (calm text label — no badge)
 * - Last activity (muted timestamp)
 *
 * No avatars. No unread badges. No message previews.
 * Hairline separator handled by the parent list.
 */

import React from "react"
import Link from "next/link"
import { Meta, Body } from "@/components/ui/Typography"
import { cn } from "@/lib/utils"
import {
  correspondenceStatusLabel,
  type CorrespondenceStatus,
} from "@/features/account/mock/correspondence"
import type { ConversationThread } from "../mock/conversationThreads"

interface CorrespondenceListItemProps {
  thread: ConversationThread
  isLast: boolean
}

function statusColor(status: CorrespondenceStatus): string {
  switch (status) {
    case "awaiting-reply":  return "text-neutral-900"
    case "in-conversation": return "text-neutral-600"
    case "resolved":        return "text-neutral-400"
    case "closed":          return "text-neutral-300"
  }
}

const originTypeLabel: Record<ConversationThread["origin"]["type"], string> = {
  "product":     "Product",
  "program":     "Program",
  "collection":  "Collection",
  "brand-story": "Brand Story",
  "brand":       "Brand",
}

export function CorrespondenceListItem({
  thread,
  isLast,
}: CorrespondenceListItemProps) {
  return (
    <Link
      href={`/dashboard/correspondence/${thread.id}`}
      className="group block"
    >
      <div
        className={cn(
          "flex flex-col md:flex-row md:items-start md:justify-between",
          "py-7 gap-3 md:gap-12",
          "transition-colors duration-200",
          !isLast && "border-b border-neutral-100"
        )}
      >
        {/* Left — brand + subject + origin */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <Meta
            tone="default"
            className="group-hover:text-neutral-600 transition-colors duration-200"
          >
            {thread.brand}
            <span className="text-neutral-300 mx-2 normal-case tracking-normal">·</span>
            <span className="text-neutral-400 normal-case tracking-normal font-sans text-[0.65rem]">
              {thread.brandOrigin}
            </span>
          </Meta>

          <Body
            tone="default"
            className="text-sm text-neutral-800 group-hover:text-neutral-900 transition-colors duration-200"
          >
            {thread.subject}
          </Body>

          <p className="font-sans text-[0.65rem] text-neutral-400 tracking-wide">
            {originTypeLabel[thread.origin.type]}
            <span className="mx-1.5 text-neutral-300">—</span>
            {thread.origin.label}
          </p>
        </div>

        {/* Right — status + time */}
        <div className="flex md:flex-col md:items-end items-center gap-4 md:gap-1.5 shrink-0 pt-0.5">
          <span
            className={cn(
              "font-sans text-[0.65rem] tracking-[0.15em] uppercase",
              "transition-colors duration-200",
              statusColor(thread.status)
            )}
          >
            {correspondenceStatusLabel[thread.status]}
          </span>

          <span className="font-sans text-[0.65rem] text-neutral-300 whitespace-nowrap">
            {thread.lastActivity}
          </span>
        </div>
      </div>
    </Link>
  )
}
