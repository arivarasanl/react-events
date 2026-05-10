import { BrandHero } from "@/features/brand-details/components/hero/BrandHero"
import { SignatureLooks } from "@/features/brand-details/components/looks/SignatureLooks"
import { BrandStory } from "@/features/brand-details/components/story/BrandStory"
import { Collections } from "@/features/brand-details/components/collections/Collections"
import { Programs } from "@/features/brand-details/components/programs/Programs"
import { Editorial } from "@/features/brand-details/components/editorial/Editorial"
import { ConnectWithBrand } from "@/features/brand-details/components/connect/ConnectWithBrand"
import { RelatedBrands } from "@/features/brand-details/components/related/RelatedBrands"
import { StickyBrandBar } from "@/features/brand-details/components/navigation/StickyBrandBar"
import { ThemedProducts } from "@/features/brand-details/components/collections/ThemedProducts"

import ProductsSection from "@/components/sections/ProductsSection"
import ProgramsSection from "@/components/sections/ProgramsSection"
import DesignerCarousel from "@/components/sections/DesignerCarousel"

export function BrandDetailsLayout({ data }: any) {
  const {
    brand,
    brand_story,
    featured_products = [],
    themed_products = [],
    programs = [],
    explore_brands = []
  } = data

  return (
    <>
      {/* HERO */}
      <BrandHero brand={brand} />

      {/* SIGNATURE LOOKS */}
      {featured_products.length >= 3 && (
        <SignatureLooks products={featured_products} />
      )}

      {/* STORY */}
      {brand_story && (
        <BrandStory
          title={brand.name}
          description={brand_story}
        />
      )}

      {/* COLLECTIONS (use themed_products) */}
      {themed_products.length > 0 && (
        <ThemedProducts themes={themed_products} />
      )}

      {/* PROGRAMS */}
      {programs.length > 0 && (
        <ProgramsSection programs={programs} />
      )}

      {/* CONNECT */}
      <ConnectWithBrand brand={brand} />

      {/* RELATED (use explore_brands) */}
      {explore_brands.length > 0 && (
        <DesignerCarousel items={explore_brands} />
      )}
    </>
  )
}