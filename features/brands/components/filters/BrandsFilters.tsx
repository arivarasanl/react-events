export function BrandsFilters({ filters }: { filters: any }) {
  return (
    <div className="space-y-6 text-sm">
      {/* Categories */}
      <div>
        <h4 className="font-medium mb-2">Categories</h4>
        {filters.categories?.map((c: any) => (
          <div key={c.slug}>
            {c.name} ({c.count})
          </div>
        ))}
      </div>

      {/* Themes */}
      <div>
        <h4 className="font-medium mb-2">Themes</h4>
        {filters.themes?.map((t: any) => (
          <div key={t.slug}>
            {t.name} ({t.count})
          </div>
        ))}
      </div>

      {/* Occasions */}
      <div>
        <h4 className="font-medium mb-2">Occasions</h4>
        {filters.occasions?.map((o: any) => (
          <div key={o.slug}>
            {o.name} ({o.count})
          </div>
        ))}
      </div>
    </div>
  )
}