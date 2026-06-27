/**
 * AuthFooter
 *
 * Shared footer block for authentication pages.
 *
 * Renders a hairline divider followed by contextual navigation links
 * (e.g. "Already have an account? Sign In").
 *
 * Accepts an arbitrary children slot so each page can compose its own
 * footer links without duplicating the divider + spacing structure.
 */

import React from "react"

interface AuthFooterProps {
  children: React.ReactNode
}

export function AuthFooter({ children }: AuthFooterProps) {
  return (
    <div className="mt-10">
      <div className="border-t border-neutral-200 mb-8" />
      <div className="flex flex-col gap-3 text-sm font-sans text-neutral-500">
        {children}
      </div>
    </div>
  )
}
