import Link from "next/link"

export default function ExploreThemes({ slug, themes }: any) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl mb-12">
          Explore by Theme
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {themes.slice(0, 5).map((theme: any) => (
            <Link
              key={theme.slug}
              href={`/categories/${slug}?theme=${theme.slug}`}
              className="block rounded-2xl overflow-hidden"
            >
              <img
                src={theme.image}
                className="w-full h-72 object-cover"
              />
              <p className="mt-4 text-lg">
                {theme.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}