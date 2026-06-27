/**
 * DashboardHero
 *
 * Editorial greeting block at the top of the member dashboard.
 *
 * - Time-aware greeting (morning / afternoon / evening)
 * - First name only — personal without being familiar
 * - Supporting editorial copy
 * - No avatar, no metrics, no breadcrumbs
 *
 * Separated from the page so the greeting logic is isolated
 * and the page stays declarative.
 */

import React from "react"
import { Container } from "@/components/layout/Container"
import { Display } from "@/components/ui/Typography"
import { Body } from "@/components/ui/Typography"

interface DashboardHeroProps {
  firstName: string
}

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

export function DashboardHero({ firstName }: DashboardHeroProps) {
  const greeting = getGreeting()

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20 border-b border-neutral-100">
      <Container size="content">
        <div className="max-w-2xl">
          <Display as="h1" className="mb-5">
            {greeting}, {firstName}.
          </Display>
          <Body tone="muted" className="text-base md:text-lg leading-relaxed">
            Continue your journey through craftsmanship.
          </Body>
        </div>
      </Container>
    </section>
  )
}
