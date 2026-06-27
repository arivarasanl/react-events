/**
 * AuthLayout
 *
 * Shared page shell for all authentication pages.
 *
 * - Reuses the public Header
 * - Centers a narrow editorial column
 * - Generous vertical rhythm — no boxed SaaS panel
 * - Accepts an optional footer slot
 */

import React from "react"
import { Header } from "@/components/layout/Header"
import { Container } from "@/components/layout/Container"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col justify-center">
        <Container size="narrow">
          <div className="max-w-[480px] mx-auto py-24 md:py-32">
            {children}
          </div>
        </Container>
      </main>
    </div>
  )
}
