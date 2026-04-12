"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Typography } from "@/components/ui/Typography"
import clsx from "clsx"

type FilterOption = {
  label: string
  value: string
}

type FilterGroupProps = {
  id: string
  title: string
  options: FilterOption[]
}

export type Filters = {
  brands: FilterOption[]
  categories: FilterOption[]
  themes: FilterOption[]
  occasions: FilterOption[]
}

type Props = {
  filters: Filters
}

export function ProductFilters({ filters }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleFilterChange = (id: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (params.get(id) === value) {
      params.delete(id)
    } else {
      params.set(id, value)
    }
    
    params.delete('page')
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const FilterGroup = ({ id, title, options }: FilterGroupProps) => {
    if (!options || options.length === 0) return null
    
    return (
      <div className="mb-10 last:mb-0">
        <Typography variant="small" className="mb-5 uppercase tracking-widest text-neutral-900 font-semibold">
          {title}
        </Typography>
        <div className="space-y-3">
          {options.map((opt) => {
            const isActive = searchParams.get(id) === opt.value
            return (
              <button
                key={opt.value}
                onClick={() => handleFilterChange(id, opt.value)}
                className="block w-full text-left transition-colors duration-200"
              >
                <span className={clsx(
                  "text-[15px] leading-relaxed",
                  isActive ? "text-black font-medium" : "text-neutral-500 hover:text-black"
                )}>
                  {opt.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full pr-8">
      <FilterGroup id="category" title="Category" options={filters.categories} />
      <FilterGroup id="brand" title="Designer" options={filters.brands} />
      <FilterGroup id="theme" title="Theme" options={filters.themes} />
      <FilterGroup id="occasion" title="Occasion" options={filters.occasions} />
    </div>
  )
}
