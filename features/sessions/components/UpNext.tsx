import { Meta } from "@/components/ui/Typography"
import { UpNextCard } from "./UpNextCard"

type UpNextSession = {
  id: number
  name: string
  slug: string
  session_type: string
  media_type: string
  status: string
  thumbnail_url?: string | null
}

export function UpNext({
  sessions,
  programSlug,
  programName,
}: {
  sessions: UpNextSession[]
  programSlug: string
  programName: string
}) {
  if (sessions.length === 0) return null

  return (
    <section
      aria-label="Up next"
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <Meta className="tracking-[0.2em]">
          Up Next
        </Meta>

        <span className="font-sans text-xs text-neutral-500">
          From {programName}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {sessions.map((session, index) => (
          <UpNextCard
            key={session.id}
            session={session}
            programSlug={programSlug}
            highlighted={index === 0}
          />
        ))}
      </div>
    </section>
  )
}