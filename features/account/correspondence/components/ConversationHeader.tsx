/**
 * ConversationHeader
 *
 * Thread detail header block.
 *
 * Displays:
 *   - Brand name + origin city
 *   - Subject
 *   - Origin context (what discovery moment began this conversation)
 *   - Started date
 *   - Current status
 *
 * No avatar. No action buttons. No metadata clutter.
 * Calm, editorial, readable.
 */

import React from "react"
import Link from "next/link"
import { Display, Body, Meta } from "@/components/ui/Typography"
import { correspondenceStatusLabel } from "@/features/account/mock/correspondence"
import type { ConversationThread } from "../mock/conversationThreads"

interface ConversationHeaderProps {
  thread: ConversationThread
}

const originTypeLabel: Record<ConversationThread["origin"]["type"], string> = {
  "product":     "Product",
  "program":     "Program",
  "collection":  "Collection",
  "brand-story": "Brand Story",
  "brand":       "Brand",
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day:   "numeric",
    month: "long",
    year:  "numeric",
  })
}

function statusColor(status: ConversationThread["status"]): string {
  switch (status) {
    case "awaiting-reply":  return "text-neutral-900"
    case "in-conversation": return "text-neutral-600"
    case "resolved":        return "text-neutral-400"
    case "closed":          return "text-neutral-300"
  }
}

export function ConversationHeader({ thread }: ConversationHeaderProps) {
  return (
    <div className="pb-12 border-b border-neutral-100">
      {/* Back link */}
      <div className="mb-10">
        <Link
          href="/dashboard/correspondence"
          className="font-sans text-xs tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
        >
          ← All Correspondence
        </Link>
      </div>

      {/* Brand */}
      <div className="flex flex-col gap-1 mb-6">
        <Meta tone="default">
          {thread.brand}
          <span className="text-neutral-300 mx-2 normal-case tracking-normal">·</span>
          <span className="text-neutral-400 normal-case tracking-normal font-sans text-[0.65rem]">
            {thread.brandOrigin}
          </span>
        </Meta>
      </div>

      {/* Subject */}
      <Display as="h1" className="mb-8 max-w-2xl">
        {thread.subject}
      </Display>

      {/* Metadata row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
        {/* Origin */}
        <div className="flex flex-col gap-1">
          <span className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-neutral-300">
            Started From
          </span>
          <Link
            href={thread.origin.href}
            className="font-sans text-xs text-neutral-600 hover:text-neutral-900 transition-colors duration-200 underline underline-offset-4 decoration-neutral-200 hover:decoration-neutral-500"
          >
            {originTypeLabel[thread.origin.type]} — {thread.origin.label}
          </Link>
        </div>

        <div className="hidden sm:block w-px h-6 bg-neutral-200" />

        {/* Started date */}
        <div className="flex flex-col gap-1">
          <span className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-neutral-300">
            Began
          </span>
          <span className="font-sans text-xs text-neutral-600">
            {formatDate(thread.startedAt)}
          </span>
        </div>

        <div className="hidden sm:block w-px h-6 bg-neutral-200" />

        {/* Status */}
        <div className="flex flex-col gap-1">
          <span className="font-sans text-[0.65rem] tracking-[0.15em] uppercase text-neutral-300">
            Status
          </span>
          <span
            className={`font-sans text-xs tracking-[0.1em] uppercase ${statusColor(thread.status)}`}
          >
            {correspondenceStatusLabel[thread.status]}
          </span>
        </div>
      </div>
    </div>
  )
}
