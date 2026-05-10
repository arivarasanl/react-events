"use client"

import { Card } from "@/components/ui/Card"
import { CardTitle, Text, Muted, Caption } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"

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
    <Card className="overflow-hidden">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={program.title}
          className="w-full h-56 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-6">
        {/* Status + Time (small, subtle) */}
        <Caption className="mb-3 block">
          {statusLabel} • {formattedTime}
        </Caption>

        {/* Title (primary focus) */}
        <CardTitle className="mb-3">
          {program.title}
        </CardTitle>

        {/* Speakers (secondary highlight) */}
        {program.speakers?.length > 0 && (
          <Text className="mb-2">
            {program.speakers.slice(0, 2).map((s: any) => s.name).join(", ")}
            {program.speakers_count > 2 &&
              ` +${program.speakers_count - 2}`}
          </Text>
        )}

        {/* Brand (lowest priority) */}
        {program.brand && (
          <Muted>
            {program.brand.name}
          </Muted>
        )}
      </div>
    </Card>
  )
}