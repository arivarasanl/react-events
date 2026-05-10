"use client"

import { motion } from "framer-motion"
import { CardTitle, Muted, Caption } from "@/components/ui/Typography"

export function Programs({ programs }: any) {
  if (!programs || programs.length === 0) return null

  return (
    <section className="py-24 md:py-28">

      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Label */}
        <div className="mb-10">
          <Caption>Programs</Caption>
        </div>

        {/* List */}
        <div className="space-y-8">

          {programs.map((p: any, i: number) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-neutral-200 pb-6"
            >
              <div className="flex justify-between items-start gap-6">

                <div>
                  <CardTitle className="text-neutral-900">
                    {p.title}
                  </CardTitle>

                  <Muted className="mt-2">
                    {p.description}
                  </Muted>
                </div>

                <Caption className="whitespace-nowrap">
                  {p.date}
                </Caption>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}