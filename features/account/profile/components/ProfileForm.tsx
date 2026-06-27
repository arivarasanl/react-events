/**
 * ProfileForm
 *
 * Controlled editorial profile form.
 *
 * - Reuses AuthFormField for all text inputs — no new input primitive
 * - Three logical field groups separated by ProfileFieldGroup
 * - Mock save: 800ms delay → inline success confirmation
 * - No toast, no modal, no redirect — success message appears inline below the CTA
 *
 * Client component — manages local form state.
 *
 * Groups:
 *   Personal   — Full Name, Email, Phone (optional)
 *   Location   — City, Country
 *   About      — Profession (optional), About Me (optional)
 */

"use client"

import React, { useState } from "react"
import { AuthFormField } from "@/features/auth/components/AuthFormField"
import { ProfileFieldGroup } from "./ProfileFieldGroup"
import { EditorialCTA } from "@/components/ui/EditorialCTA"
import { Body } from "@/components/ui/Typography"
import type { MemberProfile } from "../mock/profile"

type SaveState = "idle" | "saving" | "saved" | "error"

interface ProfileFormProps {
  initialProfile: MemberProfile
}

export function ProfileForm({ initialProfile }: ProfileFormProps) {
  const [profile, setProfile] = useState<MemberProfile>(initialProfile)
  const [saveState, setSaveState] = useState<SaveState>("idle")

  const set = (field: keyof MemberProfile) => (value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
    // Clear saved confirmation when the member edits again
    if (saveState === "saved") setSaveState("idle")
  }

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (saveState === "saving") return

    setSaveState("saving")

    // Mock delay — simulates network round-trip
    await new Promise((resolve) => setTimeout(resolve, 800))

    setSaveState("saved")
  }

  return (
    <div>
      {/* ── Personal ──────────────────────────────────────────────────────── */}
      <ProfileFieldGroup label="Personal">
        <AuthFormField
          id="fullName"
          label="Full Name"
          type="text"
          value={profile.fullName}
          onChange={set("fullName")}
          autoComplete="name"
        />
        <AuthFormField
          id="email"
          label="Email"
          type="email"
          value={profile.email}
          onChange={set("email")}
          autoComplete="email"
        />
        <AuthFormField
          id="phone"
          label="Phone Number"
          type="tel"
          value={profile.phone}
          onChange={set("phone")}
          autoComplete="tel"
          placeholder="Optional"
        />
      </ProfileFieldGroup>

      {/* ── Location ──────────────────────────────────────────────────────── */}
      <ProfileFieldGroup label="Location">
        <AuthFormField
          id="city"
          label="City"
          type="text"
          value={profile.city}
          onChange={set("city")}
          autoComplete="address-level2"
        />
        <AuthFormField
          id="country"
          label="Country"
          type="text"
          value={profile.country}
          onChange={set("country")}
          autoComplete="country-name"
        />
      </ProfileFieldGroup>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <ProfileFieldGroup label="About">
        <AuthFormField
          id="profession"
          label="Profession"
          type="text"
          value={profile.profession}
          onChange={set("profession")}
          autoComplete="organization-title"
          placeholder="Optional"
        />

        {/* About Me — textarea variant */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="about"
            className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-neutral-400"
          >
            About Me
          </label>
          <textarea
            id="about"
            value={profile.about}
            onChange={(e) => set("about")(e.target.value)}
            placeholder="Optional — a few sentences about your interests and what you're looking for."
            rows={5}
            className="
              w-full bg-transparent
              border-b border-neutral-300
              py-3 text-sm font-sans text-neutral-900
              placeholder:text-neutral-300
              outline-none resize-none
              transition-colors duration-200
              focus:border-neutral-900
              leading-[1.8]
            "
          />
        </div>
      </ProfileFieldGroup>

      {/* ── Save ──────────────────────────────────────────────────────────── */}
      <div className="pt-12 border-t border-neutral-100 flex flex-col gap-5">
        <div>
          <EditorialCTA
            href="#"
            onClick={handleSave}
          >
            {saveState === "saving" ? "Saving…" : "Save Changes"}
          </EditorialCTA>
        </div>

        {saveState === "saved" && (
          <Body tone="muted" className="text-sm text-neutral-500">
            Your profile has been updated.
          </Body>
        )}
      </div>
    </div>
  )
}
