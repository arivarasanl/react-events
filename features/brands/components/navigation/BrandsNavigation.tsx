export function BrandsNavigation({ navigation }: { navigation: any }) {
  return (
    <div className="text-sm text-neutral-600">
      {navigation?.categories?.[0]?.name} /{" "}
      {navigation?.subcategories?.[0]?.name}
    </div>
  )
}