/**
 * ProfileIntro
 *
 * Editorial introduction block for the profile page.
 *
 * - Eyebrow label
 * - Headline
 * - Supporting prose
 * - Hairline divider below
 *
 * Separated from the form so the page reads as:
 *   introduction → form
 * rather than dropping the member directly into fields.
 */

import React from "react"
import { Headline, Body, Meta } from "@/components/ui/Typography"

interface ProfileIntroProps {
  eyebrow: string
  headline: string
  supporting: string
}

export function ProfileIntro({ eyebrow, headline, supporting }: ProfileIntroProps) {
  return (
    <div className="mb-12">
      <Meta tone="default" className="mb-4 block">
        {eyebrow}
      </Meta>

      <Headline as="h1" className="mb-5">
        {headline}
      </Headline>

      <Body tone="muted" className="max-w-lg leading-relaxed">
        {supporting}
      </Body>

      <div className="mt-10 border-t border-neutral-100" />
    </div>
  )
}
