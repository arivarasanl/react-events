type CraftStoryData = {
  title?: string
  description?: string
} | null

type Props = {
  story: CraftStoryData
}

export function CraftStory({ story }: Props) {
  if (!story) return null

  const { title, description } = story

  if (!description || description.trim() === "") return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200">

      <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
        {title && title.trim() !== "" ? title : "The Craft"}
      </h2>

      <p className="max-w-2xl text-base leading-relaxed text-neutral-700">
        {description}
      </p>

    </section>
  )
}
