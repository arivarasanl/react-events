import { CategoriesPageContainer } from "@/features/categories/components/layout/CategoriesPageContainer"
import { getCategories } from "@/lib/api/categories"

export default async function CategoriesPage() {
  const { categories } = await getCategories()

  return <CategoriesPageContainer categories={categories} />
}