"use client"

import { useProducts } from "@/features/products/context/products"

import { Muted } from "@/components/ui/Typography"

export function SortBar() {
  const { meta, query, setSort } = useProducts()

  const currentSort = query.sort ?? "newest"

  return (
    <div className="flex items-center justify-between border-b pb-6">

      <Muted>
        {meta.total_count} Products
      </Muted>

      <select
        value={currentSort}
        onChange={(e) => setSort(e.target.value)}
        className="text-sm bg-transparent focus:outline-none cursor-pointer"
      >
        <option value="newest">Newest</option>
        <option value="price_low">Price: Low → High</option>
        <option value="price_high">Price: High → Low</option>
        <option value="designer">Designer A–Z</option>
      </select>

    </div>
  )
}