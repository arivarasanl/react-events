"use client"

type Props = {
  showFilters: boolean
  onToggleFilters: () => void
  totalCount?: number
}

export function ProductsToolbar({
  showFilters,
  onToggleFilters,
  totalCount,
}: Props) {
  return (
    <div className="flex items-center justify-between pb-6">

      <button
        onClick={onToggleFilters}
        className="text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors duration-200"
      >
        {showFilters ? "Hide Filters" : "Refine"}
      </button>

      {totalCount !== undefined && totalCount > 0 && (
        <span className="text-xs tracking-wide text-neutral-400">
          {totalCount} {totalCount === 1 ? "piece" : "pieces"}
        </span>
      )}

    </div>
  )
}
