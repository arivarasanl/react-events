import { cn } from "@/lib/utils"
import React from "react"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function Title({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("font-serif text-3xl md:text-4xl leading-snug", className)}>
      {children}
    </h2>
  )
}

export function Subtitle({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("font-serif text-2xl md:text-3xl leading-snug", className)}>
      {children}
    </h3>
  )
}

export function CardTitle({ children, className }: TypographyProps) {
  return (
    <h4 className={cn("font-serif text-xl leading-snug", className)}>
      {children}
    </h4>
  )
}

export function Text({ children, className }: TypographyProps) {
  return (
    <p className={cn("font-sans text-base text-neutral-600 leading-relaxed", className)}>
      {children}
    </p>
  )
}

export function Muted({ children, className }: TypographyProps) {
  return (
    <p className={cn("font-sans text-sm text-neutral-500", className)}>
      {children}
    </p>
  )
}

export function Caption({ children, className }: TypographyProps) {
  return (
    <span className={cn("font-sans text-sm text-neutral-400 tracking-wide uppercase", className)}>
      {children}
    </span>
  )
}