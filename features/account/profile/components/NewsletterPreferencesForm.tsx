/**
 * NewsletterPreferencesForm
 *
 * Editorial newsletter preferences form.
 *
 * - Editorial framing — "correspondence you receive", not "marketing settings"
 * - Five preference options maximum — intentionally minimal
 * - PreferenceToggle rows with hairline separators
 * - Mock save: 800ms delay → inline success confirmation
 * - No toast, no modal — success message appears inline below the CTA
 *
 * Client component — manages local preference state.
 */

"use client"

import React, { useState } from "react"
import { PreferenceToggle } from "./PreferenceToggle"
import { EditorialCTA } from "@/components/ui/EditorialCTA"
import { Body } from "@/components/ui/Typography"
import {
  newsletterOptions,
  type NewsletterPreference,
} from "../mock/newsletterPreferences"

type SaveState = "idle" | "saving" | "saved"

interface NewsletterPreferencesFormProps {
  initialPreferences: Record<string, boolean>
}

export function NewsletterPreferencesForm({
  initialPreferences,
}: NewsletterPreferencesFormProps) {
  const [preferences, setPreferences] = useState<Record<string, boolean>>(
    initialPreferences
  )
  const [saveState, setSaveState] = useState<SaveState>("idle")

  const handleChange = (id: string, checked: boolean) => {
    setPreferences((prev) => ({ ...prev, [id]: checked }))
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
      {/* Preference rows */}
      <div>
        {newsletterOptions.map((option: NewsletterPreference, index: number) => (
          <PreferenceToggle
            key={option.id}
            id={option.id}
            label={option.label}
            description={option.description}
            checked={preferences[option.id] ?? false}
            onChange={(checked) => handleChange(option.id, checked)}
            isLast={index === newsletterOptions.length - 1}
          />
        ))}
      </div>

      {/* Save */}
      <div className="pt-10 border-t border-neutral-100 flex flex-col gap-5">
        <div>
          <EditorialCTA
            href="#"
            onClick={handleSave}
          >
            {saveState === "saving" ? "Saving…" : "Save Preferences"}
          </EditorialCTA>
        </div>

        {saveState === "saved" && (
          <Body tone="muted" className="text-sm text-neutral-500">
            Your preferences have been saved.
          </Body>
        )}
      </div>
    </div>
  )
}
