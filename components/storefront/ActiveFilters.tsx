"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"

export function ActiveFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const activeParams = Array.from(searchParams.entries()).filter(([key]) => 
    key !== 'page'
  )

  if (activeParams.length === 0) return null

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(key)
    params.delete('page')
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const clearAll = () => {
    router.replace(pathname, { scroll: false })
  }

  return (
    <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-neutral-100">
      {activeParams.map(([key, value]) => (
        <button
          key={key}
          onClick={() => removeFilter(key)}
          className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-full text-sm text-neutral-600 hover:border-neutral-400 transition-colors"
        >
          <span className="capitalize text-neutral-400">{key}:</span>
          <span className="font-medium text-neutral-900">{value.replace(/-/g, ' ')}</span>
          <span className="ml-1 text-neutral-400 hover:text-black">×</span>
        </button>
      ))}
      <button 
        onClick={clearAll}
        className="text-sm border-b border-transparent hover:border-neutral-500 text-neutral-500 hover:text-black transition-colors ml-4"
      >
        Clear All
      </button>
    </div>
  )
}
