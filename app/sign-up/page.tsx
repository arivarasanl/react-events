/**
 * Create Account Page
 *
 * Editorial registration page — calm, minimal, premium.
 *
 * Mock behaviour:
 *   Submit → navigate to /dashboard
 *   No validation beyond empty-field guard.
 *   No backend. No persistence.
 */

"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  AuthLayout,
  AuthCard,
  AuthFormField,
  PasswordField,
} from "@/features/auth"
import { EditorialCTA } from "@/components/ui/EditorialCTA"
import type { AuthFormState } from "@/features/auth/types"

export default function SignUpPage() {
  const router = useRouter()

  const [fullName, setFullName] = useState("")
  const [email, setEmail]       = useState("")
  const [password, setPassword] = useState("")
  const [state, setState]       = useState<AuthFormState>("idle")
  const [error, setError]       = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!fullName || !email || !password) {
      setError("Please complete all fields.")
      return
    }

    setState("submitting")

    // Mock delay — simulates network round-trip
    await new Promise((resolve) => setTimeout(resolve, 800))

    setState("success")
    router.push("/dashboard")
  }

  const footer = (
    <>
      <p>
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="text-neutral-900 hover:text-neutral-500 transition-colors duration-200 underline underline-offset-4 decoration-neutral-400"
        >
          Sign In
        </Link>
      </p>

      <p className="text-neutral-400 text-xs tracking-wide leading-relaxed pt-1">
        We'll ask for additional profile details only when they're useful.
      </p>
    </>
  )

  return (
    <AuthLayout>
      <AuthCard
        headline="Join Crafted."
        supporting="Create an account to begin conversations with the brands you discover."
        footer={footer}
      >
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
          <AuthFormField
            id="fullName"
            label="Full Name"
            type="text"
            value={fullName}
            onChange={setFullName}
            autoComplete="name"
            required
          />

          <AuthFormField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            autoComplete="email"
            required
          />

          <PasswordField
            id="password"
            value={password}
            onChange={setPassword}
            autoComplete="new-password"
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
              {state === "submitting" ? "Creating account…" : "Create Account"}
            </EditorialCTA>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
