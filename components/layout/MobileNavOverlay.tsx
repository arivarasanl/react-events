"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { useEffect } from "react"

// TODO: Replace with real auth state
const IS_AUTHENTICATED = false

const primaryNav = [
  { label: "Categories", href: "/categories" },
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Programs", href: "/programs" },
]

const guestNav = [
  { label: "Sign In", href: "/sign-in" },
  { label: "Create Account", href: "/sign-up" },
]

const authenticatedNav = [
  { label: "My Dashboard", href: "/dashboard" },
  { label: "Saved Brands", href: "/dashboard/saved-brands" },
  { label: "Saved Products", href: "/dashboard/saved-products" },
  { label: "My Conversations", href: "/dashboard/conversations" },
  { label: "Quote Requests", href: "/dashboard/quotes" },
  { label: "Settings", href: "/dashboard/settings" },
  { label: "Sign Out", href: "/sign-out" },
]

type MobileNavOverlayProps = {
  open: boolean
  onClose: () => void
}

export function MobileNavOverlay({ open, onClose }: MobileNavOverlayProps) {
  const pathname = usePathname()
  const secondaryNav = IS_AUTHENTICATED ? authenticatedNav : guestNav

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[100] flex flex-col bg-white transition-opacity duration-300",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 h-20">
        <Link
          href="/"
          onClick={onClose}
          className="font-serif tracking-[0.25em] text-xl"
        >
          CRAFTED
        </Link>

        <button
          onClick={onClose}
          className="text-sm tracking-wide text-neutral-700 hover:text-black transition-colors"
        >
          Close
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col justify-center px-10 -mt-20">
        <ul className="space-y-8">
          {primaryNav.map((item) => {
            const active = pathname.startsWith(item.href)

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={clsx(
                    "block text-3xl md:text-4xl tracking-wide transition-colors",
                    active ? "text-black" : "text-neutral-500 hover:text-black"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Divider */}
        <div className="my-10 w-12 border-t border-neutral-300" />

        <ul className="space-y-5">
          {secondaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-lg tracking-wide text-neutral-500 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
