"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { reveal } from "@/styles/design-system/motion"

export function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={reveal.framer.initial}
      whileInView={reveal.framer.show}
      viewport={reveal.framer.viewport}
      transition={reveal.framer.transition}
    >
      {children}
    </motion.div>
  )
}
