import { Caption, Body } from "@/components/ui/Typography"
import Link from "next/link"

type Program = {
  id: number | string
  slug?: string
  name: string
  description?: string
  sessions_count?: number
  speakers_count?: number
}

type Props = {
  programs: Program[]
}

export function ConversationsAndEvents({ programs }: Props) {
  const featured = programs[0]

  if (!featured) return null

  const stats: string[] = []

  if (featured.sessions_count && featured.sessions_count > 0) {
    stats.push(
      `${featured.sessions_count} session${featured.sessions_count > 1 ? "s" : ""}`
    )
  }

  if (featured.speakers_count && featured.speakers_count > 0) {
    stats.push(
      `${featured.speakers_count} speaker${featured.speakers_count > 1 ? "s" : ""}`
    )
  }

  const href = featured.slug ? `/programs/${featured.slug}` : "#"

  return (
    <section className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        <Caption className="uppercase tracking-widest text-neutral-400">
          Conversations &amp; Events
        </Caption>

        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900">
            {featured.name}
          </h3>

          {stats.length > 0 && (
            <p className="text-xs uppercase tracking-wider text-neutral-400">
              {stats.join(" · ")}
            </p>
          )}

          {featured.description && (
            <Body className="text-neutral-600 leading-relaxed">
              {featured.description}
            </Body>
          )}

          <Link
            href={href}
            className="inline-block text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition"
          >
            Explore Program
          </Link>
        </div>
      </div>
    </section>
  )
}
