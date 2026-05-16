"use client"

import { useEffect, useRef, useState } from "react"
import { transitionClass, reveal } from "@/styles/design-system/motion"

type Props = {
  children: React.ReactNode
}

export function RevealOnView({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // ✅ Guard for SSR / hydration
    if (typeof window === "undefined") return
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: reveal.css.threshold,
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`
        ${transitionClass.revealCss}
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"}
      `}
    >
      {children}
    </div>
  )
}
