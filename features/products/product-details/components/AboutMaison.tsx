type Brand = {
  name?: string
  story?: string
  founded_year?: number
  origin?: string
} | null

type Props = {
  brand: Brand
}

export function AboutMaison({ brand }: Props) {
  if (!brand) return null

  const { name, story, founded_year, origin } = brand

  const hasStory = story && story.trim() !== ""
  const hasMeta = founded_year || (origin && origin.trim() !== "")

  if (!hasStory && !hasMeta) return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200">

      <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
        {name ? `About ${name}` : "About the Maison"}
      </h2>

      {hasMeta && (
        <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6">
          {founded_year && (
            <span className="text-sm text-neutral-500">
              Founded {founded_year}
            </span>
          )}
          {origin && origin.trim() !== "" && (
            <span className="text-sm text-neutral-500">
              {origin}
            </span>
          )}
        </div>
      )}

      {hasStory && (
        <p className="max-w-2xl text-base leading-relaxed text-neutral-700">
          {story}
        </p>
      )}

    </section>
  )
}
