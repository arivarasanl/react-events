import { API_BASE_URL } from "@/lib/config/publicUrls"
console.log("API_BASE_URL", API_BASE_URL)

export async function getSession(
  programSlug: string,
  sessionSlug: string
) {
  const res = await fetch(
    `${API_BASE_URL}/api/v2/storefront/programs/${programSlug}/sessions/${sessionSlug}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch session")
  }

  return res.json()
}