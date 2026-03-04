import { HomepageResponse } from "@/types/homepage"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { Grid } from "@/components/layout/Grid"
import { ImageCard } from "@/components/media/ImageCard"

interface CategoriesSectionProps {
  items: HomepageResponse["categories"]
}

export default function CategoriesSection({ items }: CategoriesSectionProps) {
  return (
    <Section>
      <Container>
        <h2 className="font-serif text-3xl md:text-4xl mb-10">
          Explore
        </h2>

        <Reveal>
          <Grid>
            {items.map((item) => (
              <ImageCard 
                key={item.id} 
                id={item.id}
                title={item.name}
                image={item.image_url}
                href={`/category/${item.slug}`}
              />
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Section>
  )
}
