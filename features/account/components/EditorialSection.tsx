/**
 * EditorialSection
 *
 * Shared section wrapper for dashboard content blocks.
 *
 * Provides:
 *   - Consistent vertical rhythm between sections
 *   - Optional section eyebrow label (Meta)
 *   - Optional section headline (Headline)
 *   - Optional trailing link slot (e.g. "View All")
 *   - Children slot for section content
 *
 * This avoids duplicating section header markup across every dashboard section.
 * Every dashboard section uses this wrapper — not Section from layout.
 *
 * Note: We intentionally do NOT use the motion Section component here.
 * The dashboard is a calm, immediate experience — no entrance animations.
 */

import React from "react"
import { Container } from "@/components/layout/Container"
import { Meta } from "@/components/ui/Typography"
import { Headline } from "@/components/ui/Typography"

interface EditorialSectionProps {
  /** Uppercase eyebrow label above the headline */
  eyebrow?: string
  /** Section headline */
  headline?: string
  /** Trailing link slot — rendered top-right aligned with the headline */
  trailingLink?: React.ReactNode
  children: React.ReactNode
  className?: string
  containerSize?: "narrow" | "content" | "wide"
}

export function EditorialSection({
  eyebrow,
  headline,
  trailingLink,
  children,
  className,
  containerSize = "content",
}: EditorialSectionProps) {
  const hasHeader = eyebrow || headline || trailingLink

  return (
    <section className={`py-16 md:py-20 border-b border-neutral-100 last:border-b-0 ${className ?? ""}`}>
      <Container size={containerSize}>
        {hasHeader && (
          <div className="flex items-end justify-between mb-10 md:mb-12">
            <div className="flex flex-col gap-3">
              {eyebrow && (
                <Meta tone="default">
                  {eyebrow}
                </Meta>
              )}
              {headline && (
                <Headline as="h2" size="title">
                  {headline}
                </Headline>
              )}
            </div>

            {trailingLink && (
              <div className="pb-1 shrink-0 ml-8">
                {trailingLink}
              </div>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  )
}
