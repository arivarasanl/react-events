import CategoriesSection from "@/components/sections/CategoriesSection"
import BrandsSection from "@/components/sections/BrandsSection"
import ProductsSection from "@/components/sections/ProductsSection"
import ProgramsSection from "@/components/sections/ProgramsSection"
import FeaturedProgramSection from "@/components/sections/FeaturedProgramSection"
import SponsorsSection from "@/components/sections/SponsorsSection"

export const sectionRegistry = {
  categories: CategoriesSection,
  featured_brands: BrandsSection,
  program_highlight: FeaturedProgramSection,
  featured_products: ProductsSection,
  programs: ProgramsSection,
  sponsors: SponsorsSection,
}