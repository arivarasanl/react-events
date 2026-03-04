"use client"

import { motion } from "framer-motion"

export function ScrollDiscover() {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">

      <span className="text-xs tracking-[0.35em] uppercase text-neutral-500">
        Scroll
      </span>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-neutral-500"
      >
        ↓
      </motion.div>

    </div>
  )
}