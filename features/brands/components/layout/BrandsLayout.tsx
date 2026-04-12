import { BrandsGrid } from "../grid/BrandsGrid"
import { BrandsFilters } from "../filters/BrandsFilters"
import { BrandsNavigation } from "../navigation/BrandsNavigation"
import { BrandsToolbar } from "../toolbar/BrandsToolbar"

type BrandsLayoutProps = {
  data: any // keep simple for now (API-driven)
}

export function BrandsLayout({ data }: BrandsLayoutProps) {
  return (
    <div className="space-y-6">
      {/* Navigation */}
      <BrandsNavigation navigation={data.navigation} />

      {/* Toolbar */}
      <BrandsToolbar sorting={data.sorting} />

      {/* Main Layout */}
      <div className="flex gap-10">
        {/* Filters (desktop only) */}
        <aside className="hidden lg:block w-64">
          <BrandsFilters filters={data.filters} />
        </aside>

        {/* Grid */}
        <main className="flex-1">
          <BrandsGrid brands={data.brands} />
        </main>
      </div>
    </div>
  )
}