/**
 * ConversationThread
 *
 * Ordered sequence of ConversationMessage blocks.
 *
 * - Renders messages in chronological order
 * - Passes the correct author display name to each message
 * - No scroll container — the page scrolls naturally
 * - No "load more" — all messages shown (mock data is small)
 */

import React from "react"
import { ConversationMessage } from "./ConversationMessage"
import type { ConversationMessage as ConversationMessageType } from "../mock/conversationMessages"

interface ConversationThreadProps {
  messages: ConversationMessageType[]
  brandName: string
}

export function ConversationThread({
  messages,
  brandName,
}: ConversationThreadProps) {
  const sorted = [...messages].sort(
    (a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime()
  )

  return (
    <div>
      {sorted.map((message, index) => (
        <ConversationMessage
          key={message.id}
          message={message}
          authorName={message.author === "member" ? "You" : brandName}
          isLast={index === sorted.length - 1}
        />
      ))}
    </div>
  )
}
