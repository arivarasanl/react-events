import { Hero } from "@/components/sections/Hero"
// import { SplitHero } from "@/components/sections/SplitHero"
import SectionRenderer from "@/components/sections/SectionRenderer"
import { getHomepage } from "@/lib/api/homepage"
// import { ScrollDiscover } from "@/components/ui/ScrollDiscover"

export default async function LandingPage() {
  const data = await getHomepage()

  return (
    <main>
    {/*<SplitHero
  program={{
    brand: "Aaryav Atelier",
    title: "Regal Heirloom Collection",
    time: "10:00 AM",
    slug: "aaryav-regal-heirloom"
  }}
/>*/}

      <Hero
        title="Crafted Fashion Week 2026"
        subtitle="Discover designers. Experience stories."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000"
        primaryCta={{ label: "Enter Event", href: "#" }}
      />
      {/*<ScrollDiscover />*/}

      <SectionRenderer sections={data.sections} />

    </main>
  )
}