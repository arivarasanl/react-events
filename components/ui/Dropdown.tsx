"use client"

import { useState, useRef, useEffect } from "react"
import clsx from "clsx"

type DropdownOption = {
  value: string
  label: string
}

type DropdownProps = {
  value: string
  options: DropdownOption[]
  onChange: (value: string) => void
  className?: string
}

export function Dropdown({ value, options, onChange, className }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((o) => o.value === value)

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close on escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <div ref={containerRef} className={clsx("relative", className)}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          "flex items-center gap-1.5 text-sm transition",
          "text-neutral-600 hover:text-neutral-900"
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>{selectedOption?.label || "Sort"}</span>
        <svg
          className={clsx(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Menu */}
      {open && (
        <div
          className={clsx(
            "absolute right-0 top-full z-50 mt-2",
            "min-w-[160px] rounded-lg",
            "bg-white border border-neutral-200",
            "shadow-sm",
            "py-1"
          )}
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
              className={clsx(
                "block w-full text-left px-4 py-2 text-sm transition",
                option.value === value
                  ? "text-neutral-900 font-medium"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
              )}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
