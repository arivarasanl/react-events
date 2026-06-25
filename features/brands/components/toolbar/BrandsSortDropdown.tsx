"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Dropdown } from "@/components/ui/Dropdown"

const ALLOWED_SORT_KEYS = ["popular", "featured", "newest", "a-z", "z-a"]
const EXCLUDED_SORT_KEYS = ["most-products", "most_products"]

type SortOption = {
  key: string
  label: string
}

export function BrandsSortDropdown({ sorting }: { sorting: SortOption[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentSort = searchParams.get("sort") || ""

  // Filter out "Most Products" and any other excluded options
  const filteredSorting = (sorting || []).filter(
    (s) => !EXCLUDED_SORT_KEYS.includes(s.key)
  )

  const options = filteredSorting.map((s) => ({
    value: s.key,
    label: s.label,
  }))

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)
    router.push(`/brands?${params.toString()}`)
  }

  if (options.length === 0) return null

  return (
    <Dropdown
      value={currentSort || options[0]?.value}
      options={options}
      onChange={handleChange}
    />
  )
}
