"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { heroZoom, fadeRise } from "@/lib/motion/presets"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Typography } from "@/components/ui/Typography"
import { EditorialCTA } from "@/components/ui/EditorialCTA"

const heroImage =
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000"

export function Hero() {
  return (
    <Section variant="hero" className="overflow-hidden">

      {/* Background */}
      <motion.div
        variants={heroZoom}
        initial="hidden"
        animate="show"
        className="absolute inset-0 -z-10"
      >
        <Image
          src={heroImage}
          alt="Crafted Fashion Event"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Editorial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </motion.div>

      <Container size="narrow">

        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate="show"
          className="space-y-10 text-center"
        >
          {/* Label */}
          <Typography
            as="p"
            variant="eyebrow"
            className="tracking-[0.35em]"
          >
            Virtual Fashion Event 2026
          </Typography>

          {/* Headline */}
          <Typography
            as="h1"
            variant="display-xl"
            className="leading-[1.05]"
          >
            Where Design
            <br />
            Meets Story
          </Typography>

          {/* Description */}
          <Typography
            variant="body-lg"
            className="max-w-xl mx-auto text-neutral-600"
          >
            Discover brands, products, and runway programs through a curated
            editorial experience crafted for modern fashion events.
          </Typography>

          {/* CTAs */}
          <div className="flex justify-center gap-4 pt-4">

            <EditorialCTA href="/brands">
              Explore Designers
            </EditorialCTA>

            <EditorialCTA href="/programs">
              View Runway
            </EditorialCTA>

          </div>
        </motion.div>

      </Container>
    </Section>
  )
}