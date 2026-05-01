import { ReactNode } from "react"

export function Page({
  children,
  className = ""
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <main
      className={`
        min-h-screen
        bg-stone-50
        text-neutral-900
        antialiased
        ${className}
      `}
    >
      {children}
    </main>
  )
}