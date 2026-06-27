/**
 * ConversationMessage
 *
 * A single message block in the correspondence thread.
 *
 * Editorial style — NOT a chat bubble.
 *
 * Layout:
 *   Author label (Meta — "You" or brand name)
 *   Date (small, muted)
 *   Body prose (Body — generous line height)
 *   Hairline separator below (except last message)
 *
 * Member messages and brand messages use the same layout.
 * Distinction is made only through the author label — no colour coding,
 * no alignment difference, no background difference.
 *
 * This is correspondence, not chat.
 */

import React from "react"
import { Meta, Body } from "@/components/ui/Typography"
import { cn } from "@/lib/utils"
import type { ConversationMessage as ConversationMessageType } from "../mock/conversationMessages"

interface ConversationMessageProps {
  message: ConversationMessageType
  /** Display name for the author — "You" for member, brand name for brand */
  authorName: string
  isLast: boolean
}

function formatMessageDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day:   "numeric",
    month: "long",
    year:  "numeric",
  })
}

export function ConversationMessage({
  message,
  authorName,
  isLast,
}: ConversationMessageProps) {
  const isMember = message.author === "member"

  return (
    <div
      className={cn(
        "py-10",
        !isLast && "border-b border-neutral-100"
      )}
    >
      {/* Author + date */}
      <div className="flex items-baseline gap-4 mb-5">
        <Meta
          tone="default"
          className={cn(
            isMember ? "text-neutral-900" : "text-neutral-600"
          )}
        >
          {authorName}
        </Meta>
        <span className="font-sans text-[0.65rem] text-neutral-300 tracking-wide">
          {formatMessageDate(message.sentAt)}
        </span>
      </div>

      {/* Body — preserve line breaks from mock data */}
      <div className="max-w-2xl flex flex-col gap-4">
        {message.body.split("\n\n").map((paragraph, i) => (
          <Body
            key={i}
            tone="default"
            className="text-neutral-700 leading-[1.8]"
          >
            {paragraph}
          </Body>
        ))}
      </div>
    </div>
  )
}
