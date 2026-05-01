"use client"

import { useRouter, useSearchParams } from "next/navigation"

type FilterItem = {
  slug: string
  name: string
  count: number
}

type Filters = {
  categories?: FilterItem[]
  themes?: FilterItem[]
  occasions?: FilterItem[]
}

export function BrandsFilters({ filters }: { filters: Filters }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // --- helpers ---
  const getValues = (key: string): string[] => {
    const value = searchParams.get(key)
    return value ? value.split(",") : []
  }

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const values = new Set(getValues(key))

    if (values.has(value)) {
      values.delete(value)
    } else {
      values.add(value)
    }

    if (values.size === 0) {
      params.delete(key)
    } else {
      params.set(key, Array.from(values).join(","))
    }

    params.set("page", "1") // reset pagination
    router.push(`/brands?${params.toString()}`)
  }

  const clearAll = () => {
    router.push("/brands")
  }

  const hasActiveFilters =
    ["category", "theme", "occasion"].some(
      (key) => getValues(key).length > 0
    )

  // --- UI ---
  return (
    <div className="space-y-8 text-sm">
      {/* Clear All */}
      {/*{hasActiveFilters && (
        <button
          onClick={clearAll}
          className="text-xs text-neutral-500 hover:text-neutral-900"
        >
          Clear all
        </button>
      )}*/}

      {/* Sections */}
      <FilterSection
        title="Categories"
        items={filters.categories}
        paramKey="category"
        getValues={getValues}
        onToggle={updateFilter}
      />

      <FilterSection
        title="Themes"
        items={filters.themes}
        paramKey="theme"
        getValues={getValues}
        onToggle={updateFilter}
      />

      <FilterSection
        title="Occasions"
        items={filters.occasions}
        paramKey="occasion"
        getValues={getValues}
        onToggle={updateFilter}
      />
    </div>
  )
}

function FilterSection({
  title,
  items,
  paramKey,
  getValues,
  onToggle,
}: {
  title: string
  items?: FilterItem[]
  paramKey: string
  getValues: (key: string) => string[]
  onToggle: (key: string, value: string) => void
}) {
  if (!items || items.length === 0) return null

  const activeValues = getValues(paramKey)

  return (
    <div className="space-y-3">
      {/* Section Title */}
      <h4 className="text-xs uppercase tracking-wide text-neutral-400">
        {title}
      </h4>

      {/* Items */}
      <div className="space-y-2">
        {items.map((item) => {
          const active = activeValues.includes(item.slug)

          return (
            <button
              key={item.slug}
              onClick={() => onToggle(paramKey, item.slug)}
              className="flex items-center gap-2 text-left w-full group"
            >
              {/* Dot indicator */}
              <span
                className={`
                  h-1.5 w-1.5 rounded-full
                  ${active ? "bg-neutral-900" : "bg-transparent"}
                `}
              />

              {/* Text */}
              <span
                className={`
                  text-sm transition
                  ${
                    active
                      ? "text-neutral-900 font-medium"
                      : "text-neutral-600 group-hover:text-neutral-900"
                  }
                `}
              >
                {item.name}
              </span>

              {/* Count */}
              <span className="text-xs text-neutral-400">
                ({item.count})
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}