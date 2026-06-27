/**
 * PreferenceToggle
 *
 * A single editorial newsletter preference row.
 *
 * - Custom checkbox — no browser default styling
 * - Label (Body weight) + description (muted, small)
 * - Hairline bottom border separates rows
 * - Checked state: neutral-900 square indicator
 * - Unchecked state: neutral-200 square indicator
 *
 * Intentionally calm — no colour, no animation, no toggle switch.
 * This is a considered editorial choice, not a settings toggle.
 */

"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface PreferenceToggleProps {
  id: string
  label: string
  description: string
  checked: boolean
  onChange: (checked: boolean) => void
  isLast: boolean
}

export function PreferenceToggle({
  id,
  label,
  description,
  checked,
  onChange,
  isLast,
}: PreferenceToggleProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex items-start gap-6 py-7 cursor-pointer group",
        !isLast && "border-b border-neutral-100"
      )}
    >
      {/* Custom checkbox indicator */}
      <div className="shrink-0 mt-0.5">
        <div
          className={cn(
            "w-4 h-4 border transition-colors duration-200",
            checked
              ? "bg-neutral-900 border-neutral-900"
              : "bg-white border-neutral-300 group-hover:border-neutral-500"
          )}
        >
          {checked && (
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-full h-full"
              aria-hidden="true"
            >
              <path
                d="M3 8l3.5 3.5L13 5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Hidden native checkbox for accessibility */}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      {/* Label + description */}
      <div className="flex flex-col gap-1.5 min-w-0">
        <span
          className={cn(
            "font-sans text-sm transition-colors duration-200",
            checked ? "text-neutral-900" : "text-neutral-600 group-hover:text-neutral-800"
          )}
        >
          {label}
        </span>
        <span className="font-sans text-xs text-neutral-400 leading-relaxed">
          {description}
        </span>
      </div>
    </label>
  )
}
