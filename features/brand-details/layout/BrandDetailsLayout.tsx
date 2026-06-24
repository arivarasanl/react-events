import { BrandHero } from "@/features/brand-details/components/hero/BrandHero"
import { SignatureLooks } from "@/features/brand-details/components/looks/SignatureLooks"
import { AboutTheMaison } from "@/features/brand-details/components/about/AboutTheMaison"
import { ThemedProducts } from "@/features/brand-details/components/collections/ThemedProducts"
import { ConversationsAndEvents } from "@/features/brand-details/components/programs/ConversationsAndEvents"
import { FromTheAtelier } from "@/features/brand-details/components/connect/FromTheAtelier"
import DesignerCarousel from "@/components/sections/DesignerCarousel"

export function BrandDetailsLayout({ data }: any) {
  const {
    brand,
    brand_story,
    featured_products = [],
    themed_products = [],
    programs = [],
    explore_brands = [],
    messages = [],
  } = data

  return (
    <>
      {/* HERO */}
      <BrandHero brand={brand} />

      {/* ABOUT THE MAISON */}
      {brand?.description && (
        <div className="pt-20 pb-24">
          <AboutTheMaison description={brand.description} />
        </div>
      )}

      {/* SIGNATURE LOOKS */}
      {featured_products.length >= 3 && (
        <div className="py-24">
          <SignatureLooks products={featured_products} />
        </div>
      )}

      {/* COLLECTIONS (use themed_products) */}
      {themed_products.length > 0 && (
        <div className="py-24">
          <ThemedProducts themes={themed_products} />
        </div>
      )}

      {/* CONVERSATIONS & EVENTS */}
      {programs.length > 0 && (
        <div className="py-24">
          <ConversationsAndEvents programs={programs} />
        </div>
      )}

      {/* FROM THE ATELIER */}
      <div className="py-24">
        <FromTheAtelier brand={brand} messages={messages} />
      </div>

      {/* RELATED (use explore_brands) */}
      {explore_brands.length > 0 && (
        <div className="pt-28 pb-20">
          <DesignerCarousel items={explore_brands} />
        </div>
      )}
    </>
  )
}
