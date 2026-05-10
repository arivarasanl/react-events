import { Section, Container } from "@/components/layout"

import { Title } from "@/components/ui/Typography"
import { ProgramGrid } from "./ProgramGrid"

export function ProgramSection({
  title,
  programs
}: {
  title: string
  programs: any[]
}) {
  if (!programs.length) return null

  return (
    <Section>
      <Container>
      <Title>
        {title}
      </Title>
        <ProgramGrid programs={programs} />
      </Container>
    </Section>
  )
}