/**
 * PasswordField
 *
 * AuthFormField specialisation for password inputs.
 *
 * - Inherits all AuthFormField behaviour
 * - Adds a visibility toggle (show / hide)
 * - Toggle uses a minimal text label — no icon dependency
 */

"use client"

import React, { useState } from "react"
import { AuthFormField } from "./AuthFormField"

interface PasswordFieldProps {
  id: string
  label?: string
  value: string
  onChange: (value: string) => void
  autoComplete?: string
  error?: string
  required?: boolean
}

export function PasswordField({
  id,
  label = "Password",
  value,
  onChange,
  autoComplete = "current-password",
  error,
  required = false,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false)

  const toggle = (
    <button
      type="button"
      onClick={() => setVisible((v) => !v)}
      className="
        font-sans text-[0.65rem] tracking-[0.15em] uppercase
        text-neutral-400 hover:text-neutral-700
        transition-colors duration-200
        select-none
        pb-3
      "
      aria-label={visible ? "Hide password" : "Show password"}
    >
      {visible ? "Hide" : "Show"}
    </button>
  )

  return (
    <AuthFormField
      id={id}
      label={label}
      type={visible ? "text" : "password"}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      error={error}
      required={required}
      append={toggle}
    />
  )
}
