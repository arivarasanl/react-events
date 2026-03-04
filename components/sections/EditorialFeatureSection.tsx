"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeRise } from "@/lib/motion/presets"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Typography } from "@/components/ui/Typography"
import { EditorialCTA } from "@/components/ui/EditorialCTA"

type Props = {
  title: string
  description: string
  image: string
  href: string
}

export default function EditorialFeatureSection({
  title,
  description,
  image,
  href,
}: Props) {
  return (
    <Section variant="feature">

      {/* Campaign image */}
      <div className="relative aspect-[21/9] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />

      </div>

      {/* Story */}
      <Container size="narrow">

        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          className="text-center space-y-8 pt-16"
        >

          <Typography as="h2" variant="display-lg">
            {title}
          </Typography>

          <Typography
            variant="body-lg"
            className="text-neutral-600 max-w-xl mx-auto"
          >
            {description}
          </Typography>

          <EditorialCTA href={href}>
            Read the Story
          </EditorialCTA>

        </motion.div>

      </Container>

    </Section>
  )
}