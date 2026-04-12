export type BrandsQuery = {
  category?: string
  subcategory?: string
  theme?: string[]
  occasion?: string[]
  sort?: string
  page?: number
}

export function buildBrandsUrl(query: BrandsQuery) {
  const params = new URLSearchParams()

  if (query.category) params.set("category", query.category)
  if (query.subcategory) params.set("subcategory", query.subcategory)

  query.theme?.forEach((t) => params.append("theme", t))
  query.occasion?.forEach((o) => params.append("occasion", o))

  if (query.sort) params.set("sort", query.sort)
  if (query.page) params.set("page", String(query.page))

  return `/api/v2/storefront/brands.json?${params.toString()}`
}