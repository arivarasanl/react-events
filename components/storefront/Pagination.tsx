"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import clsx from "clsx"

type Props = {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  if (totalPages <= 1) return null

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`${pathname}?${params.toString()}`, { scroll: true })
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-between mt-24 pt-12 border-t border-neutral-200">
      <div className="flex-1">
        {currentPage > 1 && (
          <button
            onClick={() => setPage(currentPage - 1)}
            className="text-sm font-medium uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
          >
            Previous
          </button>
        )}
      </div>

      <div className="flex items-center justify-center gap-2">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={clsx(
              "w-10 h-10 flex items-center justify-center rounded-full transition-colors text-sm",
              currentPage === page 
                ? "bg-neutral-900 text-white font-medium" 
                : "text-neutral-500 hover:bg-neutral-100"
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="flex-1 flex justify-end">
        {currentPage < totalPages && (
          <button
            onClick={() => setPage(currentPage + 1)}
            className="text-sm font-medium uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
