/**
 * CuratedForYou
 *
 * Editorial brand recommendation section on the member dashboard.
 *
 * - Three curated brands — editorially framed, not algorithmically described
 * - Editorial list layout with hairline dividers — consistent with the
 *   platform's discovery language without duplicating a full grid component
 * - Each item links to the brand detail page
 * - Goal: continue discovery, not selling
 *
 * Layout choice: editorial list rather than a card grid.
 * This keeps the dashboard calm and avoids visual competition with the
 * Correspondence section above it.
 */

import React from "react"
import Link from "next/link"
import { EditorialSection } from "./EditorialSection"
import { EmptyState } from "./EmptyState"
import { Meta } from "@/components/ui/Typography"
import { Body } from "@/components/ui/Typography"
import { Headline } from "@/components/ui/Typography"
import type { RecommendedBrand } from "@/features/account/mock/recommendations"

interface CuratedForYouProps {
  brands: RecommendedBrand[]
}

export function CuratedForYou({ brands }: CuratedForYouProps) {
  return (
    <EditorialSection
      eyebrow="Curated For You"
      headline="Brands Worth Knowing"
    >
      {brands.length === 0 ? (
        <EmptyState
          message="No recommendations yet."
          supporting="Explore the platform and your recommendations will appear here."
        />
      ) : (
        <div className="flex flex-col">
          {brands.map((brand, index) => (
            <Link
              key={brand.id}
              href={brand.href}
              className="group block"
            >
              <div
                className={[
                  "flex flex-col md:flex-row md:items-start md:justify-between",
                  "py-8 gap-4 md:gap-16",
                  index < brands.length - 1 ? "border-b border-neutral-100" : "",
                ].join(" ")}
              >
                {/* Left — category + brand name + origin */}
                <div className="flex flex-col gap-2 md:w-1/3 shrink-0">
                  <Meta tone="default">
                    {brand.category}
                  </Meta>
                  <Headline
                    as="h3"
                    size="title"
                    className="group-hover:text-neutral-500 transition-colors duration-300"
                  >
                    {brand.name}
                  </Headline>
                  <p className="font-sans text-xs text-neutral-400">
                    {brand.origin}
                  </p>
                </div>

                {/* Right — editorial descriptor */}
                <div className="md:w-2/3 flex items-start pt-1">
                  <Body tone="muted" className="leading-relaxed">
                    {brand.descriptor}
                  </Body>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </EditorialSection>
  )
}
