import { Product } from "@/lib/api/products"
import { EditorialGrid } from "@/components/layout/EditorialGrid"
import { ProductCard } from "./ProductCard"
import { Typography } from "@/components/ui/Typography"

type Props = {
  products: Product[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="py-32 flex flex-col items-center justify-center text-center">
        <Typography variant="section" className="mb-4">No pieces found</Typography>
        <Typography variant="body">Try adjusting your filters or explore other designers.</Typography>
      </div>
    )
  }

  return (
    <EditorialGrid>
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          priority={index < 4}
        />
      ))}
    </EditorialGrid>
  )
}
