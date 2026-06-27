/**
 * ConversationDetail
 *
 * Full thread detail view.
 *
 * Composes:
 *   ConversationHeader  — brand, subject, origin, date, status
 *   ConversationThread  — ordered message blocks
 *   ReplyComposer       — textarea + send (mock)
 *
 * Client component — manages local message state so new replies
 * can be appended without a page reload.
 *
 * Reply composer is disabled for "resolved" and "closed" threads.
 */

"use client"

import React, { useState } from "react"
import { ConversationHeader } from "./ConversationHeader"
import { ConversationThread } from "./ConversationThread"
import { ReplyComposer } from "./ReplyComposer"
import type { ConversationThread as ConversationThreadType } from "../mock/conversationThreads"
import type { ConversationMessage } from "../mock/conversationMessages"

interface ConversationDetailProps {
  thread: ConversationThreadType
  initialMessages: ConversationMessage[]
}

export function ConversationDetail({
  thread,
  initialMessages,
}: ConversationDetailProps) {
  const [messages, setMessages] = useState<ConversationMessage[]>(initialMessages)

  const handleSend = (newMessages: ConversationMessage[]) => {
    setMessages((prev) => [...prev, ...newMessages])
  }

  const composerDisabled =
    thread.status === "resolved" || thread.status === "closed"

  return (
    <div>
      {/* Header — brand, subject, origin, status */}
      <ConversationHeader thread={thread} />

      {/* Message thread */}
      <div className="mt-2">
        <ConversationThread
          messages={messages}
          brandName={thread.brand}
        />
      </div>

      {/* Reply composer */}
      <div className="mt-4 mb-16">
        <ReplyComposer
          threadId={thread.id}
          brandName={thread.brand}
          onSend={handleSend}
          disabled={composerDisabled}
        />
      </div>
    </div>
  )
}
