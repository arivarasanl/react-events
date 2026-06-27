/**
 * EmptyState
 *
 * Reusable editorial empty state block.
 *
 * - No icons, no illustrations — prose only
 * - Calm, human tone
 * - Optional CTA slot
 *
 * Used when a section has no content to display.
 * Consistent with the editorial voice of the platform.
 */

import React from "react"
import { Body } from "@/components/ui/Typography"

interface EmptyStateProps {
  /** Short primary message */
  message: string
  /** Supporting prose — one sentence */
  supporting?: string
  /** Optional CTA slot (e.g. EditorialCTA or a Link) */
  action?: React.ReactNode
}

export function EmptyState({ message, supporting, action }: EmptyStateProps) {
  return (
    <div className="py-12 flex flex-col gap-4">
      <div className="w-8 border-t border-neutral-300" />

      <Body tone="muted" className="max-w-sm">
        {message}
      </Body>

      {supporting && (
        <p className="font-sans text-xs text-neutral-400 max-w-xs leading-relaxed">
          {supporting}
        </p>
      )}

      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  )
}
