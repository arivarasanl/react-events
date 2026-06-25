"use client"

import { useEffect, useRef } from "react"
import clsx from "clsx"
import { Caption } from "@/components/ui/Typography"

type Message = {
  id?: number | string
  title?: string
  text?: string
  body?: string
}

type Brand = {
  slug: string
  name: string
}

type Props = {
  open: boolean
  onClose: () => void
  brand: Brand
  messages?: Message[]
}

export function ConversationModal({ open, onClose, brand, messages = [] }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)

  // Close on escape
  useEffect(() => {
    if (!open) return

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open, onClose])

  // Prevent body scroll when open
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

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={clsx(
          "relative z-10 w-full max-w-lg mx-4",
          "bg-white rounded-2xl shadow-xl",
          "max-h-[80vh] overflow-y-auto",
          "p-8 md:p-10"
        )}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="space-y-2 mb-8">
          <Caption className="uppercase tracking-widest text-neutral-400">
            Conversation
          </Caption>
          <h2 className="text-lg font-light text-neutral-900">
            {brand.name}
          </h2>
        </div>

        {/* Messages */}
        {messages.length > 0 ? (
          <div className="space-y-6">
            {messages.map((msg, i) => {
              const text = msg.text || msg.body
              if (!text) return null

              return (
                <div key={msg.id || i} className="space-y-2">
                  {msg.title && (
                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                      {msg.title}
                    </p>
                  )}
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {text}
                  </p>
                </div>
              )
            })}
          </div>
        ) : (
          <p className="text-sm text-neutral-500 leading-relaxed">
            No messages yet. Start a conversation with {brand.name}.
          </p>
        )}

        {/* Reply placeholder */}
        <div className="mt-8 pt-6 border-t border-neutral-100">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Write a message..."
              className="flex-1 text-sm px-4 py-2.5 rounded-full border border-neutral-200 focus:outline-none focus:border-neutral-400 transition"
            />
            <button className="text-sm px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
