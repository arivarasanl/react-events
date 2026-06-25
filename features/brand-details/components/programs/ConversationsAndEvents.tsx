import { Caption } from "@/components/ui/Typography"
import Link from "next/link"
import { ProgramCard } from "@/features/programs/components/card/ProgramCard"

type Program = {
  id: number | string
  slug?: string
  name: string
  description?: string
  cover_image?: string | null
  image_url?: string | null
  sessions_count?: number
  speakers_count?: number
}

type Props = {
  programs: Program[]
}

export function ConversationsAndEvents({ programs }: Props) {
  const featured = programs[0]

  if (!featured) return null

  const href = featured.slug ? `/programs/${featured.slug}` : "#"

  return (
    <section className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Section Label */}
        <Caption className="uppercase tracking-widest text-neutral-400">
          Conversations &amp; Events
        </Caption>

        {/* Featured Program — reuses shared ProgramCard */}
        <div className="max-w-md mx-auto">
          <ProgramCard program={featured} />
        </div>

        {/* Editorial Link */}
        <div className="text-center">
          <Link
            href={href}
            className="inline-block text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition"
          >
            Explore Program →
          </Link>
        </div>
      </div>
    </section>
  )
}
