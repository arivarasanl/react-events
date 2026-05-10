import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { Title, Subtitle, Text, Muted } from "@/components/ui/Typography"

interface Program {
  id: number
  title: string
  description?: string
  start_at: string
}

interface ProgramsSectionProps {
  programs: Program[]
}

export default function ProgramsSection({ programs }: ProgramsSectionProps) {
  console.log("Programs:", programs)
  console.table(programs)
  if (!programs?.length) return null

  return (
    <Section variant="feature">
      <Container size="wide">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Sticky Intro */}
          <div className="sticky top-32 self-start">
            <Title className="mb-6">
              Experience the Program
            </Title>

            <Text className="text-neutral-600">
              A curated sequence of runway shows, designer talks,
              and collection launches presented throughout the event.
            </Text>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-neutral-200 pl-10 space-y-14">

            {programs.map((p) => {
              const date = new Date(p.start_at)

              const time = date.toLocaleTimeString("en-IN", {
                hour: "numeric",
                minute: "2-digit"
              })

              const day = date.toLocaleDateString("en-IN", {
                weekday: "long"
              })

              return (
                <Reveal key={p.id}>
                  <div className="relative">

                    {/* timeline dot */}
                    <span className="
                      absolute -left-[44px] top-2
                      w-3 h-3 rounded-full
                      bg-black
                    " />

                    {/* time */}
                    <Muted className="mb-1">
                      {day} • {time}
                    </Muted>

                    {/* title */}
                    <Subtitle>
                      {p.title}
                    </Subtitle>

                    {/* description */}
                    {p.description && (
                      <Text className="mt-2 max-w-md">
                        {p.description}
                      </Text>
                    )}

                  </div>
                </Reveal>
              )
            })}

          </div>

        </div>
      </Container>
    </Section>
  )
}