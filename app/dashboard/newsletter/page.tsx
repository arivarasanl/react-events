/**
 * Newsletter Preferences Page — /dashboard/newsletter
 *
 * Editorial correspondence preferences page.
 *
 * This is NOT an account settings page.
 * It is an editorial choice — the member selects the correspondence
 * they would like to receive from the platform.
 *
 * Structure:
 *   AccountLayout
 *   EditorialSection (narrow) — intro + NewsletterPreferencesForm
 *
 * Mock behaviour:
 *   Save → mock success message inline.
 *   No backend. No persistence.
 */

import React from "react"
import { AccountLayout } from "@/features/account/components/AccountLayout"
import { EditorialSection } from "@/features/account/components/EditorialSection"
import { ProfileIntro } from "@/features/account/profile"
import { NewsletterPreferencesForm } from "@/features/account/profile"
import {
  mockNewsletterPreferences,
} from "@/features/account/profile/mock/newsletterPreferences"

export default function NewsletterPage() {
  return (
    <AccountLayout>
      <EditorialSection containerSize="narrow">
        <ProfileIntro
          eyebrow="Editorial Correspondence"
          headline="Choose what we send you."
          supporting="Select the stories, collections and conversations you would like us to send you. We send only what you ask for."
        />
        <NewsletterPreferencesForm
          initialPreferences={mockNewsletterPreferences}
        />
      </EditorialSection>
    </AccountLayout>
  )
}
