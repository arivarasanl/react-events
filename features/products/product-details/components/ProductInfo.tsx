import { ProductActions } from "./ProductActions"

import { Title, Text, Muted } from "@/components/ui/Typography"

export function ProductInfo({ product }) {

  return (
    <div className="sticky top-32 space-y-8">

      <div>

        <Muted className="uppercase tracking-widest">
          {product.brand_name}
        </Muted>

        <Title className="mt-2">
          {product.name}
        </Title>

      </div>

      <ProductActions />

      {product.description && (
        <Text>
          {product.description}
        </Text>
      )}

    </div>
  )
}