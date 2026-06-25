"use client"

import { useState } from "react"
import { Caption } from "@/components/ui/Typography"
import { ConversationModal } from "@/features/brand-details/components/connect/ConversationModal"

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
  brand: Brand
  messages?: Message[]
}

export function FromTheAtelier({ brand, messages = [] }: Props) {
  const [modalOpen, setModalOpen] = useState(false)

  const featured = messages[0]
  const quoteText = featured?.text || featured?.body || null

  return (
    <>
      <section className="px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-20">
          {/* Section Label */}
          <Caption className="uppercase tracking-widest text-neutral-400">
            From the Atelier
          </Caption>

          {/* Editorial Quote */}
          {quoteText ? (
            <blockquote className="space-y-10">
              <p className="text-2xl md:text-3xl lg:text-[2.75rem] font-extralight leading-[1.45] tracking-tight text-neutral-800 italic">
                &ldquo;{quoteText}&rdquo;
              </p>

              {featured?.title && (
                <footer className="text-sm tracking-wide text-neutral-400 uppercase">
                  — {featured.title}
                </footer>
              )}
            </blockquote>
          ) : (
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-extralight text-neutral-700 leading-relaxed">
                Discover the world of {brand.name}.
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Begin a private conversation with the maison.
              </p>
            </div>
          )}

          {/* CTA */}
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 text-sm text-neutral-900 border border-neutral-900 px-8 py-3 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Conversation Modal */}
      <ConversationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        brand={brand}
        messages={messages}
      />
    </>
  )
}
