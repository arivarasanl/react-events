import Link from "next/link"

export default function ProductResults({
  slug,
  products,
  page,
}: any) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {products.items.map((product: any) => (
            <div key={product.id}>
              <img
                src={product.image}
                className="w-full h-80 object-cover rounded-2xl"
              />
              <p className="mt-4">{product.name}</p>
            </div>
          ))}
        </div>

        {/* Pagination only */}
        <div className="mt-16 flex justify-center gap-6">
          {page > 1 && (
            <Link href={`?page=${page - 1}`}>
              Previous
            </Link>
          )}
          {products.hasNext && (
            <Link href={`?page=${page + 1}`}>
              Next
            </Link>
          )}
        </div>

      </div>
    </section>
  )
}