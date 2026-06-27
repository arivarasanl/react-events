/**
 * Member Dashboard — app/dashboard/page.tsx
 *
 * The editorial home a member sees after signing in.
 *
 * This is NOT an admin dashboard.
 * It is a calm, editorial member home — inspired by Aesop, COS, Vogue Runway.
 *
 * Structure:
 *   DashboardHero          — time-aware greeting
 *   CorrespondencePreview  — latest three conversations
 *   CuratedForYou          — three editorially curated brand recommendations
 *   CompleteProfileCard    — quiet profile completion prompt (hidden if complete)
 *
 * Mock behaviour:
 *   All data sourced from features/account/mock/
 *   No authentication. No backend. No persistence.
 */

import React from "react"
import {
  AccountLayout,
  DashboardHero,
  CorrespondencePreview,
  CuratedForYou,
  CompleteProfileCard,
} from "@/features/account"
import { mockUser }            from "@/features/account/mock/user"
import { mockCorrespondence }  from "@/features/account/mock/correspondence"
import { mockRecommendations } from "@/features/account/mock/recommendations"

export default function DashboardPage() {
  return (
    <AccountLayout>
      {/* ── Greeting ──────────────────────────────────────────────────────── */}
      <DashboardHero firstName={mockUser.firstName} />

      {/* ── Correspondence ────────────────────────────────────────────────── */}
      <CorrespondencePreview items={mockCorrespondence} />

      {/* ── Curated For You ───────────────────────────────────────────────── */}
      <CuratedForYou brands={mockRecommendations} />

      {/* ── Complete Profile (hidden when profileComplete = true) ──────────── */}
      <CompleteProfileCard profileComplete={mockUser.profileComplete} />
    </AccountLayout>
  )
}
