import clsx from "clsx"

import { Body, Caption, Meta, SectionTitle } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import { CategoryCard } from "@/features/categories/components/card/CategoryCard"
import type { Category } from "@/lib/api/categories"

type PrimaryCategoryAtlasProps = {
  categories: Category[]
}

export function PrimaryCategoryAtlas({
  categories,
}: PrimaryCategoryAtlasProps) {
  if (categories.length === 0) {
    return (
      <div className="py-24 text-center">
        <Caption variant="plain" tone="secondary">
          No categories are available yet.
        </Caption>
      </div>
    )
  }

  return (
    <div className="space-y-12 md:space-y-16">
      <div className="max-w-3xl space-y-4">
        <Meta>Primary Atlas</Meta>

        <SectionTitle as="h2" size="section">
          Explore category worlds
        </SectionTitle>

        <Body>
          Move through distinct creative worlds before refining by theme,
          creator, or collection.
        </Body>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            description={category.description}
            image={getImageUrl(category.imageUrl)}
            href={`/categories/${category.slug}`}
            aspect="portrait"
            priority={index < 3}
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          />
        ))}
      </div>
    </div>
  )
}
