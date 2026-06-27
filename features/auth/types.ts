/**
 * Auth Feature — Shared Types
 *
 * Lightweight type definitions for the authentication feature module.
 * No backend types — mock-only implementation.
 */

export type AuthFormState = "idle" | "submitting" | "success" | "error"

export interface SignInFields {
  email: string
  password: string
}

export interface SignUpFields {
  fullName: string
  email: string
  password: string
}

export interface ForgotPasswordFields {
  email: string
}
