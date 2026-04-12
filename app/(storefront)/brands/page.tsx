import { BrandsLayout } from "@/features/brands/components/layout/BrandsLayout"
import { fetchBrands } from "@/lib/api/brands"
import { parseBrandsQuery } from "@/lib/utils/parseBrandsQuery"

type Props = {
  searchParams: Record<string, string | string[] | undefined>
}

export default async function BrandsPage({ searchParams }: Props) {
  const query = parseBrandsQuery(searchParams)

  const data = await fetchBrands(query)

  return (
    <div className="container mx-auto px-4 py-8">
      <BrandsLayout data={data} />
    </div>
  )
}