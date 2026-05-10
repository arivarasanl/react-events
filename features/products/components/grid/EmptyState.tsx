import { CardTitle, Muted } from "@/components/ui/Typography"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">

      <CardTitle className="mb-2">
        No products found
      </CardTitle>

      <Muted className="mb-6 max-w-sm">
        Try adjusting your filters or explore other collections to find something you love.
      </Muted>

      <a
        href="/products"
        className="text-sm underline underline-offset-4 hover:text-black transition"
      >
        Explore all products
      </a>

    </div>
  )
}