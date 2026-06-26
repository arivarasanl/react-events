"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import clsx from "clsx"

// TODO: Replace with real auth state
const IS_AUTHENTICATED = false

const guestItems = [
  { label: "Sign In", href: "/sign-in" },
  { label: "Create Account", href: "/sign-up" },
]

const authenticatedItems = [
  { label: "My Dashboard", href: "/dashboard" },
  { label: "Saved Brands", href: "/dashboard/saved-brands" },
  { label: "Saved Products", href: "/dashboard/saved-products" },
  { label: "My Conversations", href: "/dashboard/conversations" },
  { label: "Quote Requests", href: "/dashboard/quotes" },
  { label: "Settings", href: "/dashboard/settings" },
  { label: "Sign Out", href: "/sign-out" },
]

export function ProfileDropdown() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const items = IS_AUTHENTICATED ? authenticatedItems : guestItems

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-neutral-100"
        aria-label="Profile menu"
      >
        {/* User icon — inline SVG to avoid new dependencies */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-700"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-neutral-200 shadow-sm py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-black hover:bg-neutral-50 tracking-wide transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
