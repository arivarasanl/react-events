import { Container } from "@/components/layout/Container"
import { CategoryDetail } from "@/lib/api/categories"

type EditorialOverviewProps = {
  category: CategoryDetail
}

export default function EditorialOverview({ category }: EditorialOverviewProps) {
  const text = category.editorial?.introduction || category.description

  if (!text) {
    return null
  }

  return (
    <Container size="narrow">
      <div className="prose prose-lg mx-auto text-center text-gray-700">
        <p>{text}</p>
      </div>
    </Container>
  )
}
