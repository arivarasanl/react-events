/**
 * AuthCard
 *
 * Thin composition wrapper that assembles:
 *   AuthHeader + form content + AuthFooter
 *
 * This is NOT a visual card (no border, no shadow, no background).
 * It is purely a structural grouping primitive — an editorial column block.
 *
 * Usage:
 *   <AuthCard
 *     headline="Welcome back."
 *     supporting="Continue your conversations…"
 *     footer={<>…links…</>}
 *   >
 *     <form>…fields…</form>
 *   </AuthCard>
 */

import React from "react"
import { AuthHeader } from "./AuthHeader"
import { AuthFooter } from "./AuthFooter"

interface AuthCardProps {
  headline: string
  supporting?: string
  footer?: React.ReactNode
  children: React.ReactNode
}

export function AuthCard({ headline, supporting, footer, children }: AuthCardProps) {
  return (
    <div>
      <AuthHeader headline={headline} supporting={supporting} />

      <div>{children}</div>

      {footer && <AuthFooter>{footer}</AuthFooter>}
    </div>
  )
}
