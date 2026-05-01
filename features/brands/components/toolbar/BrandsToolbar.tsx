"use client"

import { useRouter, useSearchParams } from "next/navigation"

export function BrandsToolbar({ sorting }: { sorting: any[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)

    router.push(`/brands?${params.toString()}`)
  }

  return (
    <div className="flex justify-between items-center">
      <p className="text-sm text-neutral-500"></p>

      <select
        value={searchParams.get("sort") || ""}
        onChange={(e) => handleChange(e.target.value)}
        className="text-sm text-neutral-600 hover:text-neutral-900 transition"
      >
        {sorting?.map((s) => (
          <option key={s.key} value={s.key}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  )
}