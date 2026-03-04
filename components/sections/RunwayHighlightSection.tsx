"use client"

import { EditorialCTA } from "@/components/ui/EditorialCTA"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import Image from "next/image"

export default function RunwayHighlightSection({ item }) {
  return (
    <Section variant="feature">

      <Container size="full">

        <div className="relative overflow-hidden rounded-3xl">

          <div className="relative aspect-[16/9]">

            <Image
              src={
                "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000"
              }
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* content */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-10">

              <Reveal>
                <div className="max-w-xl text-white space-y-6">

                  <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                    {item.title}
                  </h2>

                  {item.description && (
                    <p className="text-lg text-white/90">
                      {item.description}
                    </p>
                  )}

                  <EditorialCTA href={`/program/${item.slug}`}>
                    View Runway
                  </EditorialCTA>

                </div>
              </Reveal>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  )
}