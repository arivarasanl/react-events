import { HomepageResponse } from "@/types/homepage"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"
import { BrandCard } from "@/components/commerce/BrandCard"

interface BrandsSectionProps {
    items: HomepageResponse["featured_brands"]
}

export default function BrandsSection({ items }: BrandsSectionProps) {
    return (
        <Section>
            <Container size="wide">
                <h2 className="font-serif text-3xl md:text-4xl mb-10">
                    Featured Designers
                </h2>

                <Grid scroll>
                    {items.map((brand) => (
                        <BrandCard
                            key={brand.id}
                            id={brand.id}
                            name={brand.name}
                            tagline="Runway Collection" // Tagline might need to come from somewhere else if not in API, but keeping it for consistency
                            image={brand.logo_url}
                            href={`/brand/${brand.slug || brand.id}`}
                        />
                    ))}
                </Grid>
            </Container>
        </Section>
    )
}
