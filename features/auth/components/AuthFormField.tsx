/**
 * AuthFormField
 *
 * Shared form field primitive for authentication forms.
 *
 * - Editorial label (Meta component — uppercase, tracked)
 * - Clean input — no rounded corners, hairline border
 * - Optional error message
 * - Fully controlled via value / onChange
 *
 * Intentionally minimal. No floating labels, no icons, no decorations.
 */

"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface AuthFormFieldProps {
  id: string
  label: string
  type?: React.HTMLInputTypeAttribute
  value: string
  onChange: (value: string) => void
  autoComplete?: string
  placeholder?: string
  error?: string
  required?: boolean
  /** Slot for appending content inside the input wrapper (e.g. visibility toggle) */
  append?: React.ReactNode
}

export function AuthFormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  autoComplete,
  placeholder,
  error,
  required = false,
  append,
}: AuthFormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <label
        htmlFor={id}
        className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-neutral-400"
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative flex items-center">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required={required}
          className={cn(
            "w-full bg-transparent",
            "border-b border-neutral-300",
            "py-3 pr-10 text-sm font-sans text-neutral-900",
            "placeholder:text-neutral-300",
            "outline-none",
            "transition-colors duration-200",
            "focus:border-neutral-900",
            error && "border-red-400 focus:border-red-500"
          )}
        />

        {/* Append slot (e.g. password toggle) */}
        {append && (
          <div className="absolute right-0 flex items-center">
            {append}
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <p className="font-sans text-xs text-red-500 tracking-wide">
          {error}
        </p>
      )}
    </div>
  )
}
