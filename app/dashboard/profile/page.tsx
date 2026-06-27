/**
 * Profile Page — /dashboard/profile
 *
 * Editorial member profile page.
 *
 * Structure:
 *   AccountLayout
 *   EditorialSection (narrow) — ProfileIntro + ProfileForm
 *
 * The page begins with an editorial introduction before the form fields.
 * Fields are grouped into logical sections separated by hairline dividers.
 *
 * Mock behaviour:
 *   Save → mock success message inline.
 *   No backend. No persistence.
 */

import React from "react"
import { AccountLayout } from "@/features/account/components/AccountLayout"
import { EditorialSection } from "@/features/account/components/EditorialSection"
import { ProfileIntro, ProfileForm } from "@/features/account/profile"
import { mockProfile } from "@/features/account/profile/mock/profile"

export default function ProfilePage() {
  return (
    <AccountLayout>
      <EditorialSection containerSize="narrow">
        <ProfileIntro
          eyebrow="Profile"
          headline="Tell us a little more about yourself."
          supporting="The information you choose to share helps brands better understand your interests and the kinds of conversations you're looking to have."
        />
        <ProfileForm initialProfile={mockProfile} />
      </EditorialSection>
    </AccountLayout>
  )
}
