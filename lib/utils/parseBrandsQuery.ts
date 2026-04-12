export function parseBrandsQuery(searchParams: Record<string, any>) {
  return {
    category: searchParams.category,
    subcategory: searchParams.subcategory,
    theme: normalizeArray(searchParams.theme),
    occasion: normalizeArray(searchParams.occasion),
    sort: searchParams.sort || "popularity",
    page: searchParams.page ? Number(searchParams.page) : 1,
  }
}

function normalizeArray(value: string | string[] | undefined) {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}