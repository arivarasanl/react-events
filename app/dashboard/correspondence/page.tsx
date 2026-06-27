/**
 * Correspondence List Page — /dashboard/correspondence
 *
 * Editorial list of all member correspondence threads.
 *
 * Structure:
 *   AccountLayout
 *   EditorialSection — "Correspondence" eyebrow, "Your Conversations" headline
 *   CorrespondenceList — filtered list with status tabs
 *
 * Mock behaviour:
 *   All data sourced from features/account/correspondence/mock/
 *   No authentication. No backend. No persistence.
 */

import React from "react"
import { AccountLayout } from "@/features/account/components/AccountLayout"
import { EditorialSection } from "@/features/account/components/EditorialSection"
import { CorrespondenceList } from "@/features/account/correspondence"
import { mockThreads } from "@/features/account/correspondence/mock/conversationThreads"

export default function CorrespondencePage() {
  return (
    <AccountLayout>
      <EditorialSection
        eyebrow="Correspondence"
        headline="Your Conversations"
      >
        <CorrespondenceList threads={mockThreads} />
      </EditorialSection>
    </AccountLayout>
  )
}
