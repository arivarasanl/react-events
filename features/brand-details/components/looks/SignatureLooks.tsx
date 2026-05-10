import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { LookbookGrid } from "@/components/layout/LookbookGrid"
import { ProductCard } from "@/features/products/components/card/ProductCard"
import { ImageTile } from "@/components/ui/ImageTile"
export function SignatureLooks({ products }: any) {

  return (
    <Section className="-mt-32 relative z-10">
        <SectionTitle className="mb-12">
          Signature Looks
        </SectionTitle>

        <LookbookGrid>

          {products.map((product: any) => (
            
            <ProductCard
              key={product.slug}
              name={product.name}
              image={product.image_url}
              price={product.price}
              href={`/products/${product.slug}`}
              aspect="portrait"
            />
          ))}

        </LookbookGrid>
    </Section>
  )
}