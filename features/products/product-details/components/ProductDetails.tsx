type Details = {
  material?: string
  craft?: string
  origin?: string
  care?: string
  fit?: string
  delivery?: string
} | null

type Props = {
  details: Details
}

const FIELD_LABELS: Record<string, string> = {
  material: "Material",
  craft: "Craft",
  origin: "Origin",
  care: "Care",
  fit: "Fit",
  delivery: "Delivery",
}

const FIELD_ORDER = ["material", "craft", "origin", "care", "fit", "delivery"]

export function ProductDetails({ details }: Props) {
  if (!details) return null

  const entries = FIELD_ORDER
    .filter((key) => {
      const value = details[key as keyof typeof details]
      return value && value.trim() !== ""
    })
    .map((key) => ({
      label: FIELD_LABELS[key],
      value: details[key as keyof typeof details]!,
    }))

  if (entries.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200">

      <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-8">
        The Details
      </h2>

      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 max-w-3xl">
        {entries.map((entry) => (
          <div key={entry.label} className="flex flex-col gap-1">
            <dt className="text-xs uppercase tracking-wider text-neutral-400">
              {entry.label}
            </dt>
            <dd className="text-sm text-neutral-800">
              {entry.value}
            </dd>
          </div>
        ))}
      </dl>

    </section>
  )
}
