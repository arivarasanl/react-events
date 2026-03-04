import { Hero } from "@/components/sections/Hero"
import SectionRenderer from "@/components/sections/SectionRenderer"

import { buildHomepageSections } from "@/lib/builders/homepage-builder"
import { getHomepage } from "@/lib/api/homepage"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { Typography } from "@/components/ui/Typography"

export default async function LandingPage() {
  const data = await getHomepage()
  const sections = buildHomepageSections(data)

  return (
    <main>
      <Hero
        title="Crafted Fashion Week 2026"
        subtitle="Discover designers. Experience stories."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000"
        primaryCta={{ label: "Enter Event", href: "#" }}
      />

      <SectionRenderer sections={sections} />

      <Section spacing="loose">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <Reveal>
              <Typography as="h2" variant="display-lg">
                Where design meets story
              </Typography>
            </Reveal>
            <p className="text-neutral-600">
              Crafted brings together designers, brands, and audiences
              into one immersive virtual runway experience.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  )
}