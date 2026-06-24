"use client"

import { Caption, Body } from "@/components/ui/Typography"
import Link from "next/link"

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
  const featured = messages[0]
  const additional = messages.slice(1)
  const featuredText = featured?.text || featured?.body || null

  return (
    <section className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <Caption className="uppercase tracking-widest text-neutral-400">
          From the Atelier
        </Caption>

        {/* Featured quote */}
        {featuredText && (
          <blockquote className="space-y-5">
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-neutral-800 italic">
              &ldquo;{featuredText}&rdquo;
            </p>

            {featured?.title && (
              <footer className="text-sm text-neutral-500">
                — {featured.title}
              </footer>
            )}
          </blockquote>
        )}

        {/* Additional messages */}
        {additional.length > 0 && (
          <div className="space-y-10 pt-4 border-t border-neutral-100">
            {additional.map((message, index) => {
              const text = message.text || message.body
              if (!text) return null

              return (
                <div key={message.id || index} className="space-y-3">
                  <Body className="text-neutral-700 leading-relaxed">
                    {text}
                  </Body>

                  {message.title && (
                    <p className="text-xs text-neutral-400">
                      — {message.title}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Fallback when no messages */}
        {!featuredText && additional.length === 0 && (
          <Body className="text-neutral-600">
            Start a conversation with {brand.name}.
          </Body>
        )}

        <Link
          href={`/brands/${brand.slug}/conversation`}
          className="inline-block text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition"
        >
          Continue the Conversation
        </Link>
      </div>
    </section>
  )
}
