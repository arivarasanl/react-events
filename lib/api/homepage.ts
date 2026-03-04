// lib/api/homepage.ts

import { HomepageResponse } from "@/types/homepage"

export async function getHomepage(): Promise<HomepageResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v2/storefront/homepage.json`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch homepage")
  }

  return res.json()
}