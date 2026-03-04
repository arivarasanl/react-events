export default function EditorialOverview({ category }: any) {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 space-y-6 text-neutral-700">
        <p>{category.editorialText}</p>
      </div>
    </section>
  )
}