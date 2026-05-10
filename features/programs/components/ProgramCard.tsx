"use client"

import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { CardTitle, Text, Muted, Caption } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import clsx from "clsx"

interface ProgramCardProps {
  program: any
}

export function ProgramCard({ program }: ProgramCardProps) {
  const image = getImageUrl(program.media?.cover_image?.url)

  const statusLabel =
    program.status.time === "current"
      ? "Live"
      : program.status.time === "future"
      ? "Upcoming"
      : "Replay"

  const formattedTime = new Date(program.start_at).toLocaleString()

  return (
    <Link href={`/programs/${program.slug}`} className="group block">
      <Card
        className={clsx(
          "overflow-hidden",
          "transition-all duration-200",
          "hover:shadow-md"
        )}
      >
        {/* Image */}
        {image && (
          <div className="relative">
            <img
              src={image}
              alt={program.title}
              className="w-full h-56 object-cover"
            />

            {/* Status badge */}
            <span
              className={clsx(
                "absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded",
                program.status.time === "current" && "bg-red-500 text-white",
                program.status.time === "future" && "bg-black/70 text-white",
                program.status.time === "past" && "bg-gray-200 text-black"
              )}
            >
              {statusLabel}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-3">
          {/* Time */}
          <Caption>
            {formattedTime}
          </Caption>

          {/* Title */}
          <CardTitle className="group-hover:underline">
            {program.title}
          </CardTitle>

          {/* Speakers */}
          {program.speakers?.length > 0 && (
            <Text>
              {program.speakers.slice(0, 2).map((s: any) => s.name).join(", ")}
              {program.speakers_count > 2 &&
                ` +${program.speakers_count - 2}`}
            </Text>
          )}

          {/* Brand */}
          {program.brand && (
            <Muted>
              {program.brand.name}
            </Muted>
          )}
        </div>
      </Card>
    </Link>
  )
}