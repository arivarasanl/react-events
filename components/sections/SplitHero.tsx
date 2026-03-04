"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { heroZoom, fadeRise } from "@/lib/motion/presets"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Typography } from "@/components/ui/Typography"
import { EditorialCTA } from "@/components/ui/EditorialCTA"

type SplitHeroProps = {
  program?: {
    title: string
    brand: string
    time: string
    slug: string
  }
}

const heroImage =
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000"

export function SplitHero({ program }: SplitHeroProps) {
  return (
    <Section variant="hero" className="overflow-hidden">

      <Container size="wide">

        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">

          {/* Left — Image */}
          <motion.div
            variants={heroZoom}
            initial="hidden"
            animate="show"
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <Image
              src={heroImage}
              alt="Crafted Fashion Event"
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
          </motion.div>

          {/* Right — Editorial */}
          <motion.div
            variants={fadeRise}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >

            <Typography
              as="p"
              variant="eyebrow"
              className="tracking-[0.35em]"
            >
              Crafted Fashion Week
            </Typography>

            <Typography
              as="h1"
              variant="display-xl"
              className="leading-[1.05]"
            >
              Where Design
              <br />
              Meets Story
            </Typography>

            <Typography
              variant="body-lg"
              className="text-neutral-600 max-w-md"
            >
              Discover brands, products, and runway programs through a
              curated editorial experience crafted for modern events.
            </Typography>

            {program && (
              <div className="pt-6 space-y-4 border-t border-neutral-200">

                <Typography variant="eyebrow">
                  Upcoming Runway
                </Typography>

                <Typography
                  as="h3"
                  variant="display-sm"
                >
                  {program.brand}
                </Typography>

                <Typography variant="body">
                  {program.title}
                </Typography>

                <Typography variant="body-sm" className="text-neutral-500">
                  {program.time}
                </Typography>

                <EditorialCTA href={`/program/${program.slug}`}>
                  Watch Runway
                </EditorialCTA>

              </div>
            )}

          </motion.div>

        </div>

      </Container>

    </Section>
  )
}