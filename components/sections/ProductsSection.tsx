import { HomepageResponse } from "@/types/homepage"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"
import { ProductCard } from "@/components/commerce/ProductCard"

interface ProductsSectionProps {
    items: HomepageResponse["featured_products"]
}

export default function ProductsSection({ items }: ProductsSectionProps) {
    return (
        <Section>
            <Container>
                <h2 className="font-serif text-3xl md:text-4xl mb-10">
                    Collections
                </h2>

                <Grid columns={3}>
                    {items.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            brand="Crafted Studio" // Mock brand name as it's not in Product response but used in page.tsx
                            price={parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0}
                            image={product.image_url}
                            href={`/product/${product.slug}`}
                        />
                    ))}
                </Grid>
            </Container>
        </Section>
    )
}
