import { BrandsLayout } from "@/features/brands/components/layout/BrandsLayout"
import { fetchBrands } from "@/lib/api/brands"
import { parseBrandsQuery } from "@/lib/utils/parseBrandsQuery"

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function BrandsPage({ searchParams }: Props) {
  const params = await searchParams
  const query = parseBrandsQuery(params)
  const data = await fetchBrands(query)

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <BrandsLayout data={data} />
    </div>
  )
}