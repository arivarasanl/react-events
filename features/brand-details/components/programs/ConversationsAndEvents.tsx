import { Caption, Body } from "@/components/ui/Typography"
import Link from "next/link"
import { ProgramCard } from "@/features/programs/components/ProgramCard"

type Session = {
  id: number | string
  name: string
  session_type?: string
}

type Program = {
  id: number | string
  slug?: string
  name: string
  description?: string
  cover_image?: string | null
  image_url?: string | null
  session_count?: number
  speaker_count?: number
  sessions?: Session[]
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
      <div className="max-w-7xl mx-auto">

        <Caption className="uppercase tracking-widest text-neutral-400 mb-12">
          Experience the Maison
        </Caption>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">

          {/* Featured Program */}
          <ProgramCard
            program={featured}
            showBrand={false}
          />

          {/* Sessions */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-light tracking-tight text-neutral-900">
                {featured.name}
              </h3>

              {featured.description && (
                <Body className="mt-4 text-neutral-600 leading-relaxed">
                  {featured.description}
                </Body>
              )}
            </div>

            {featured.sessions && featured.sessions.length > 0 && (
              <div>

                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-5">
                  Featured Sessions
                </p>

                <div className="space-y-5">

                  {featured.sessions.slice(0, 3).map((session) => (
                    <div
                      key={session.id}
                      className="border-b border-neutral-200 pb-4"
                    >
                      <h4 className="text-base font-medium text-neutral-900">
                        {session.name}
                      </h4>

                      {session.session_type && (
                        <p className="mt-1 text-sm text-neutral-500 capitalize">
                          {session.session_type}
                        </p>
                      )}
                    </div>
                  ))}

                </div>

              </div>
            )}

            <div className="flex items-center gap-8 text-sm text-neutral-500">

              {featured.session_count ? (
                <span>{featured.session_count} Sessions</span>
              ) : null}

              {featured.speaker_count ? (
                <span>{featured.speaker_count} Speakers</span>
              ) : null}

            </div>

            <Link
              href={href}
              className="inline-flex items-center text-sm uppercase tracking-wider border-b border-neutral-900 pb-1 hover:opacity-70 transition"
            >
              Explore Program
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}