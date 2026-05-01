"use client"

import { motion } from "framer-motion"

export function Programs({ programs }: any) {
  if (!programs || programs.length === 0) return null

  return (
    <section className="py-24 md:py-28">

      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Label */}
        <div className="mb-10">
          <span className="type-meta">Programs</span>
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
                  <h3 className="type-body text-neutral-900">
                    {p.title}
                  </h3>

                  <p className="type-caption mt-2">
                    {p.description}
                  </p>
                </div>

                <span className="type-meta whitespace-nowrap">
                  {p.date}
                </span>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}