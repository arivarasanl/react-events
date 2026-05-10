"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal } from "@/components/motion/Reveal"
import { ScrollDiscover } from "@/components/ui/ScrollDiscover"
import { Title, Text } from "@/components/ui/Typography"

export function BrandHero({ brand }: any) {
  const { scrollY } = useScroll()

  // background parallax
  const bgY = useTransform(scrollY, [0, 600], [0, 140])

  // title animation
  const titleY = useTransform(scrollY, [0, 400], [0, -40])
  const titleScale = useTransform(scrollY, [0, 400], [1, 0.9])
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section
      id="brand-hero"
      className="relative h-[92vh] min-h-[620px] w-full overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src={brand.cover_image || brand.logo_url}
          alt={brand.name}
          fill
          priority
          className="object-cover scale-110"
          unoptimized={process.env.NODE_ENV === "development"}
        />
      </motion.div>

      {/* Cinematic Gradient */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-t
        from-black/70
        via-black/25
        to-transparent
      "
      />

      {/* Editorial Content */}
      <div className="absolute bottom-28 w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-white">
          {/* Optional Logo */}
          {brand.logo_url && (
            <Reveal>
              <img
                src={brand.logo_url}
                alt={`${brand.name} logo`}
                className="h-12 mb-6 opacity-90"
              />
            </Reveal>
          )}

          {/* Brand Name */}
          <Reveal>
            <motion.div
              style={{
                y: titleY,
                scale: titleScale,
                opacity: titleOpacity,
              }}
            >
              <Title
                id="brand-hero-title"
                className="text-white max-w-3xl"
              >
                {brand.name}
              </Title>
            </motion.div>
          </Reveal>

          {/* Tagline */}
          {brand.tagline && (
            <Reveal>
              <Text
                className="
                  mt-5
                  text-white/90
                  max-w-xl
                "
              >
                {brand.tagline}
              </Text>
            </Reveal>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollDiscover />
    </section>
  )
}