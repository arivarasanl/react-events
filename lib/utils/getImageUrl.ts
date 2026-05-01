const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"

export function getImageUrl(path?: string | null) {
  if (!path) return "/images/placeholder.png"
  if (path.startsWith("http")) return path
  return `${API_BASE}${path}`
}