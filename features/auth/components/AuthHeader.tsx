/**
 * AuthHeader
 *
 * Editorial page heading block for authentication pages.
 *
 * - Headline (serif, page-level)
 * - Supporting copy (body prose)
 * - Hairline divider below
 *
 * Keeps all auth pages visually consistent without duplicating markup.
 */

import React from "react"
import { Headline } from "@/components/ui/Typography"
import { Body } from "@/components/ui/Typography"

interface AuthHeaderProps {
  headline: string
  supporting?: string
}

export function AuthHeader({ headline, supporting }: AuthHeaderProps) {
  return (
    <div className="mb-10">
      <Headline as="h1" className="mb-4">
        {headline}
      </Headline>

      {supporting && (
        <Body tone="muted" className="max-w-sm">
          {supporting}
        </Body>
      )}

      <div className="mt-8 border-t border-neutral-200" />
    </div>
  )
}
