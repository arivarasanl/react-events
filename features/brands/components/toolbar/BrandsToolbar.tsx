"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Muted } from "@/components/ui/Typography"

/**
 * @deprecated Use BrandsSortDropdown directly in BrandsLayout.
 * This component is kept temporarily for backwards compatibility
 * but is no longer rendered in the BLP.
 */
export function BrandsToolbar({ sorting, rightSlot }: { sorting: any[]; rightSlot?: React.ReactNode }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)

    router.push(`/brands?${params.toString()}`)
  }

  return (
    <div className="flex justify-between items-center">
      <Muted></Muted>

      <div className="flex items-center gap-4">
        <select
          value={searchParams.get("sort") || ""}
          onChange={(e) => handleChange(e.target.value)}
          className="text-sm text-neutral-600 hover:text-neutral-900 transition"
        >
          {sorting?.map((s: any) => (
            <option key={s.key} value={s.key}>
              {s.label}
            </option>
          ))}
        </select>

        {rightSlot}
      </div>
    </div>
  )
}
