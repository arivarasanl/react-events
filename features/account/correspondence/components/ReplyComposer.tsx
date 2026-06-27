/**
 * ReplyComposer
 *
 * Editorial reply input for the correspondence thread.
 *
 * - Large textarea — bottom border only, no box
 * - Placeholder: "Continue the conversation…"
 * - EditorialCTA: "Send Reply"
 * - Mock behaviour: appends a mock brand reply after a short delay
 *
 * Client component — manages local textarea state and mock send flow.
 *
 * After send:
 *   1. Member message appended immediately
 *   2. Short delay (1.2s) — simulates brand response time
 *   3. Mock brand acknowledgement appended
 *   4. Textarea cleared
 */

"use client"

import React, { useState } from "react"
import { EditorialCTA } from "@/components/ui/EditorialCTA"
import { cn } from "@/lib/utils"
import type { ConversationMessage } from "../mock/conversationMessages"

interface ReplyComposerProps {
  threadId: string
  brandName: string
  onSend: (messages: ConversationMessage[]) => void
  disabled?: boolean
}

const mockBrandReplies = [
  "Thank you for your message. We'll review this carefully and come back to you shortly.",
  "We appreciate you continuing this conversation. We'll be in touch with a considered response.",
  "Thank you — this is helpful context. We'll follow up within the next few days.",
  "We've received your message and will respond thoughtfully. Thank you for your patience.",
]

function randomBrandReply(): string {
  return mockBrandReplies[Math.floor(Math.random() * mockBrandReplies.length)]
}

export function ReplyComposer({
  threadId,
  brandName,
  onSend,
  disabled = false,
}: ReplyComposerProps) {
  const [body, setBody]         = useState("")
  const [sending, setSending]   = useState(false)
  const [sent, setSent]         = useState(false)

  const handleSend = async () => {
    const trimmed = body.trim()
    if (!trimmed || sending) return

    setSending(true)

    const now = new Date().toISOString()

    // Member message
    const memberMessage: ConversationMessage = {
      id:       `msg_new_${Date.now()}`,
      threadId,
      author:   "member",
      sentAt:   now,
      body:     trimmed,
    }

    onSend([memberMessage])
    setBody("")
    setSent(true)

    // Mock brand reply after delay
    await new Promise((resolve) => setTimeout(resolve, 1400))

    const brandMessage: ConversationMessage = {
      id:       `msg_brand_${Date.now()}`,
      threadId,
      author:   "brand",
      sentAt:   new Date().toISOString(),
      body:     randomBrandReply(),
    }

    onSend([brandMessage])
    setSending(false)
    setSent(false)
  }

  if (disabled) {
    return (
      <div className="pt-10 border-t border-neutral-100">
        <p className="font-sans text-xs text-neutral-400 tracking-wide">
          This correspondence is {disabled ? "closed" : "resolved"} and cannot receive new replies.
        </p>
      </div>
    )
  }

  return (
    <div className="pt-10 border-t border-neutral-100">
      {/* Label */}
      <div className="mb-6">
        <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-neutral-400">
          Your Reply
        </span>
      </div>

      {/* Textarea */}
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Continue the conversation…"
        rows={6}
        disabled={sending}
        className={cn(
          "w-full bg-transparent",
          "border-b border-neutral-200",
          "pb-4 text-sm font-sans text-neutral-900",
          "placeholder:text-neutral-300",
          "outline-none resize-none",
          "transition-colors duration-200",
          "focus:border-neutral-900",
          "leading-[1.8]",
          sending && "opacity-50 cursor-not-allowed"
        )}
      />

      {/* Actions */}
      <div className="mt-8 flex items-center gap-8">
        <EditorialCTA
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleSend()
          }}
        >
          {sending ? "Sending…" : "Send Reply"}
        </EditorialCTA>

        {sent && !sending && (
          <span className="font-sans text-xs text-neutral-400 tracking-wide">
            Sent.
          </span>
        )}
      </div>
    </div>
  )
}
