import { HomepageSection } from "@/lib/builders/homepage-builder"
import CategoriesSection from "./CategoriesSection"
import BrandsSection from "./BrandsSection"
import ProductsSection from "./ProductsSection"
import ProgramsSection from "./ProgramsSection"
import SponsorsSection from "./SponsorsSection"

interface Props {
  sections: HomepageSection[]
}

export default function SectionRenderer({ sections }: Props) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "categories":
            return (
              <CategoriesSection
                key={`${section.type}-${index}`}
                items={section.items}
              />
            )

          case "featured_brands":
            return (
              <BrandsSection
                key={`${section.type}-${index}`}
                items={section.items}
              />
            )

          case "featured_products":
            return (
              <ProductsSection
                key={`${section.type}-${index}`}
                items={section.items}
              />
            )

          case "programs":
            return (
              <ProgramsSection
                key={`${section.type}-${index}`}
                items={section.items}
              />
            )

          case "sponsors":
            return (
              <SponsorsSection
                key={`${section.type}-${index}`}
                items={section.items}
              />
            )

          default:
            return null
        }
      })}
    </>
  )
}