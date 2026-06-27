/**
 * ProfileFieldGroup
 *
 * Thin layout wrapper for a logical group of profile fields.
 *
 * - Optional group label (Meta — uppercase, tracked)
 * - Hairline top border separates groups visually
 * - Generous vertical padding
 * - No accordion, no card, no box
 *
 * Used to separate:
 *   Personal (name, email, phone)
 *   Location (city, country)
 *   About (profession, about me)
 */

import React from "react"
import { Meta } from "@/components/ui/Typography"

interface ProfileFieldGroupProps {
  label?: string
  children: React.ReactNode
}

export function ProfileFieldGroup({ label, children }: ProfileFieldGroupProps) {
  return (
    <div className="pt-10 pb-2 border-t border-neutral-100">
      {label && (
        <div className="mb-8">
          <Meta tone="default">{label}</Meta>
        </div>
      )}
      <div className="flex flex-col gap-8">
        {children}
      </div>
    </div>
  )
}
