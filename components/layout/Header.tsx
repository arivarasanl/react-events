"use client"

import Link from "next/link"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const leftNav = [
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
]

const rightNav = [
  { label: "Programs", href: "/programs" },
  { label: "Profile", href: "/profile" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLink = (item: { label: string; href: string }) => {
    const active = pathname.startsWith(item.href)

    return (
      <Link
        key={item.href}
        href={item.href}
        className={clsx(
          "relative transition-colors",
          active ? "text-black" : "text-neutral-600 hover:text-black",
          "after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-black after:transition-all",
          active ? "after:w-full" : "after:w-0 hover:after:w-full"
        )}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200 shadow-sm"
          : "bg-white/60 backdrop-blur-lg"
      )}
    >
      <div
        className={clsx(
          "max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-3 items-center transition-all duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        {/* Left Navigation */}
        <nav className="flex items-center gap-8 text-sm tracking-wide">
          {leftNav.map(navLink)}
        </nav>

        {/* Logo */}
        <div className="flex justify-center">
          <Link
            href="/"
            className={clsx(
              "font-serif tracking-[0.25em] transition-all duration-300",
              scrolled ? "text-lg" : "text-xl md:text-2xl"
            )}
          >
            CRAFTED
          </Link>
        </div>

        {/* Right Navigation */}
        <nav className="flex items-center justify-end gap-8 text-sm tracking-wide">
          {rightNav.map(navLink)}
        </nav>
      </div>
    </header>
  )
}