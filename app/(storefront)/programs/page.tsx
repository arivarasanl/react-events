import { Section, Container } from "@/components/layout"
import { ProgramSection } from "@/features/programs/components/ProgramSection"
import { getPrograms } from "@/lib/api/programs"
import { Title } from "@/components/ui/Typography"

export default async function ProgramsPage() {
  const [current, future, past] = await Promise.all([
    getPrograms({ status: "current" }),
    getPrograms({ status: "future" }),
    getPrograms({ status: "past" })
  ])

  return (
    <>
      <Section>
        <Container>
        <Title>
          Programs
        </Title>
        </Container>
      </Section>
      <ProgramSection title="Live Now" programs={current.data} />
      <ProgramSection title="Upcoming" programs={future.data} />
      <ProgramSection title="Highlights" programs={past.data} />
    </>
  )
}