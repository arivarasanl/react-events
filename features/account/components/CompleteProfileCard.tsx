/**
 * CompleteProfileCard
 *
 * Quiet editorial prompt to complete the member's profile.
 *
 * - Prose-only — no progress bar, no percentage, no gamification
 * - Single EditorialCTA
 * - Only shown when profileComplete is false
 * - Calm, human tone — not a notification or alert
 */

import React from "react"
import { EditorialSection } from "./EditorialSection"
import { Body } from "@/components/ui/Typography"
import { EditorialCTA } from "@/components/ui/EditorialCTA"

interface CompleteProfileCardProps {
  /** If true, this component renders nothing */
  profileComplete: boolean
}

export function CompleteProfileCard({ profileComplete }: CompleteProfileCardProps) {
  if (profileComplete) return null

  return (
    <EditorialSection eyebrow="Your Profile">
      <div className="max-w-lg flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Body tone="default" className="text-neutral-900">
            Complete your profile.
          </Body>
          <Body tone="muted">
            Add a little more about yourself to help brands understand your
            interests and the kinds of conversations you're looking to have.
          </Body>
        </div>

        <div>
          <EditorialCTA href="/dashboard/profile">
            Complete Profile
          </EditorialCTA>
        </div>
      </div>
    </EditorialSection>
  )
}
