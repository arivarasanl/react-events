export function BrandsToolbar({ sorting }: { sorting: any[] }) {
  return (
    <div className="flex justify-end">
      <select className="border rounded-md px-3 py-2 text-sm">
        {sorting?.map((s) => (
          <option key={s.key} value={s.key}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  )
}