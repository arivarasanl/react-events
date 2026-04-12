import { buildBrandsUrl, BrandsQuery } from "../utils/buildBrandsUrl"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"

export async function fetchBrands(query: BrandsQuery) {
  const url = buildBrandsUrl(query)

  const res = await fetch(`${BASE_URL}${url}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch brands")
  }

  return res.json()
}