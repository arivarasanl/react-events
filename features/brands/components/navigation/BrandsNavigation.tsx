type NavigationProps = {
  navigation?: {
    categories?: { name: string }[]
    subcategories?: { name: string }[]
  }
}

export function BrandsNavigation({ navigation }: NavigationProps) {
  const category = navigation?.categories?.[0]?.name
  const subcategory = navigation?.subcategories?.[0]?.name

  if (!category && !subcategory) return null

  return (
    <div className="text-xs uppercase tracking-wide text-neutral-400">
      {category}
      {subcategory && ` — ${subcategory}`}
    </div>
  )
}