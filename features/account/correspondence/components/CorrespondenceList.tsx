/**
 * CorrespondenceList
 *
 * Filtered editorial list of all correspondence threads.
 *
 * - Status filter tab strip at the top
 * - Hairline-divided list of CorrespondenceListItem rows
 * - Editorial empty state when no threads match the filter
 *
 * Client component — filter state is local.
 */

"use client"

import React, { useState } from "react"
import { CorrespondenceFilter, type FilterValue } from "./CorrespondenceFilter"
import { CorrespondenceListItem } from "./CorrespondenceListItem"
import { EmptyState } from "@/features/account/components/EmptyState"
import { EditorialCTA } from "@/components/ui/EditorialCTA"
import type { ConversationThread } from "../mock/conversationThreads"
import type { CorrespondenceStatus } from "@/features/account/mock/correspondence"

interface CorrespondenceListProps {
  threads: ConversationThread[]
}

export function CorrespondenceList({ threads }: CorrespondenceListProps) {
  const [filter, setFilter] = useState<FilterValue>("all")

  const filtered =
    filter === "all"
      ? threads
      : threads.filter((t) => t.status === filter)

  // Build counts for each tab
  const counts: Record<FilterValue, number> = {
    all:              threads.length,
    "awaiting-reply": threads.filter((t) => t.status === "awaiting-reply").length,
    "in-conversation":threads.filter((t) => t.status === "in-conversation").length,
    resolved:         threads.filter((t) => t.status === "resolved").length,
    closed:           threads.filter((t) => t.status === "closed").length,
  }

  return (
    <div className="flex flex-col gap-0">
      {/* Filter strip */}
      <div className="mb-10">
        <CorrespondenceFilter
          active={filter}
          onChange={setFilter}
          counts={counts}
        />
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <EmptyState
          message={
            filter === "all"
              ? "No correspondence yet."
              : `No ${filter.replace("-", " ")} correspondence.`
          }
          supporting={
            filter === "all"
              ? "Discover a brand and begin a conversation."
              : undefined
          }
          action={
            filter === "all" ? (
              <EditorialCTA href="/brands">
                Explore Brands
              </EditorialCTA>
            ) : undefined
          }
        />
      ) : (
        <div>
          {filtered.map((thread, index) => (
            <CorrespondenceListItem
              key={thread.id}
              thread={thread}
              isLast={index === filtered.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}
