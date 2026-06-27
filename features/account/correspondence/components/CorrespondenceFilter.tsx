/**
 * CorrespondenceFilter
 *
 * Editorial tab strip for filtering correspondence by status.
 *
 * - Plain text tabs — no pill buttons, no coloured badges
 * - Active tab: neutral-900, hairline underline
 * - Inactive tab: neutral-400, hover to neutral-700
 * - "All" tab always first
 *
 * Intentionally minimal — consistent with the editorial voice.
 */

"use client"

import React from "react"
import { cn } from "@/lib/utils"
import type { CorrespondenceStatus } from "@/features/account/mock/correspondence"

export type FilterValue = CorrespondenceStatus | "all"

interface FilterTab {
  value: FilterValue
  label: string
}

const tabs: FilterTab[] = [
  { value: "all",             label: "All" },
  { value: "awaiting-reply",  label: "Awaiting Reply" },
  { value: "in-conversation", label: "In Conversation" },
  { value: "resolved",        label: "Resolved" },
  { value: "closed",          label: "Closed" },
]

interface CorrespondenceFilterProps {
  active: FilterValue
  onChange: (value: FilterValue) => void
  /** Count per status — used to show totals next to labels */
  counts: Record<FilterValue, number>
}

export function CorrespondenceFilter({
  active,
  onChange,
  counts,
}: CorrespondenceFilterProps) {
  return (
    <div className="flex items-center gap-8 border-b border-neutral-100 pb-0 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = tab.value === active
        const count = counts[tab.value]

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={cn(
              "relative pb-4 shrink-0",
              "font-sans text-xs tracking-[0.15em] uppercase",
              "transition-colors duration-200",
              "focus:outline-none",
              isActive
                ? "text-neutral-900"
                : "text-neutral-400 hover:text-neutral-700"
            )}
          >
            {tab.label}
            {count > 0 && (
              <span
                className={cn(
                  "ml-2 font-sans text-[0.6rem] tracking-normal normal-case",
                  isActive ? "text-neutral-500" : "text-neutral-300"
                )}
              >
                {count}
              </span>
            )}
            {/* Active underline */}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900" />
            )}
          </button>
        )
      })}
    </div>
  )
}
