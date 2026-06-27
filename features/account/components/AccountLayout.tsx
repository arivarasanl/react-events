/**
 * AccountLayout
 *
 * Shared page shell for all member account pages.
 *
 * - Reuses the public Header unchanged
 * - White background, full editorial column
 * - No sidebar, no boxed dashboard panel
 * - Consistent with the public editorial experience
 */

import React from "react"
import { Header } from "@/components/layout/Header"

interface AccountLayoutProps {
  children: React.ReactNode
}

export function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
