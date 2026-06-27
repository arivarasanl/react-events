/**
 * Sign In Page
 *
 * Editorial authentication page — calm, minimal, premium.
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

export default function SignInPage() {
  const router = useRouter()

  const [email, setEmail]       = useState("")
  const [password, setPassword] = useState("")
  const [state, setState]       = useState<AuthFormState>("idle")
  const [error, setError]       = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError("Please enter your email and password.")
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
        <Link
          href="/forgot-password"
          className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700"
        >
          Forgot password?
        </Link>
      </p>

      <p>
        New to Crafted?{" "}
        <Link
          href="/sign-up"
          className="text-neutral-900 hover:text-neutral-500 transition-colors duration-200 underline underline-offset-4 decoration-neutral-400"
        >
          Create your account.
        </Link>
      </p>
    </>
  )

  return (
    <AuthLayout>
      <AuthCard
        headline="Welcome back."
        supporting="Continue your conversations with the brands you've discovered."
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

          <PasswordField
            id="password"
            value={password}
            onChange={setPassword}
            autoComplete="current-password"
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
              {state === "submitting" ? "Signing in…" : "Sign In"}
            </EditorialCTA>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
