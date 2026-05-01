"use client"

import { motion } from "framer-motion"

export function BrandStory({ quote }: any) {
  if (!quote) return null

  return (
    <section className="py-32 md:py-40 bg-neutral-50">

      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">

        {/* Top line */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="block w-12 h-px bg-neutral-300 mx-auto mb-10 origin-left"
        />

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="type-headline text-neutral-800 leading-relaxed"
        >
          “{quote.text}”
        </motion.blockquote>

        {/* Author */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="type-meta mt-8"
        >
          {quote.author}
        </motion.p>

        {/* Bottom line */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="block w-12 h-px bg-neutral-300 mx-auto mt-10 origin-right"
        />

      </div>
    </section>
  )
}