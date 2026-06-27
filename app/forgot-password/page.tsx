/**
 * Forgot Password Page
 *
 * Editorial password reset page — calm, minimal, premium.
 *
 * Mock behaviour:
 *   Submit → show inline success confirmation.
 *   No backend. No email sent. No persistence.
 */

"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  AuthLayout,
  AuthCard,
  AuthFormField,
} from "@/features/auth"
import { EditorialCTA } from "@/components/ui/EditorialCTA"
import { Body } from "@/components/ui/Typography"
import type { AuthFormState } from "@/features/auth/types"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<AuthFormState>("idle")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email) {
      setError("Please enter your email address.")
      return
    }

    setState("submitting")

    // Mock delay — simulates network round-trip
    await new Promise((resolve) => setTimeout(resolve, 800))

    setState("success")
  }

  const footer = (
    <p>
      <Link
        href="/sign-in"
        className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700"
      >
        Back to Sign In
      </Link>
    </p>
  )

  // ── Success state ──────────────────────────────────────────────────────────
  if (state === "success") {
    return (
      <AuthLayout>
        <AuthCard
          headline="Check your inbox."
          footer={footer}
        >
          <div className="flex flex-col gap-6">
            <Body tone="muted">
              If an account exists for{" "}
              <span className="text-neutral-700">{email}</span>, you'll receive
              a reset link shortly.
            </Body>

            <Body tone="muted" className="text-sm">
              Didn't receive it? Check your spam folder, or{" "}
              <button
                type="button"
                onClick={() => setState("idle")}
                className="text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:text-neutral-500 transition-colors duration-200"
              >
                try again
              </button>
              .
            </Body>
          </div>
        </AuthCard>
      </AuthLayout>
    )
  }

  // ── Default state ──────────────────────────────────────────────────────────
  return (
    <AuthLayout>
      <AuthCard
        headline="Reset your password."
        supporting="Enter your email address and we'll send a reset link."
        footer={footer}
      >
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
          <AuthFormField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            autoComplete="email"
            required
          />

          {error && (
            <p className="font-sans text-xs text-red-500 tracking-wide -mt-4">
              {error}
            </p>
          )}

          <div className="pt-2">
            <EditorialCTA
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handleSubmit(e as unknown as React.FormEvent)
              }}
            >
              {state === "submitting" ? "Sending…" : "Send Reset Link"}
            </EditorialCTA>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
