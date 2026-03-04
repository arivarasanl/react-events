import { HomepageResponse } from "@/types/homepage"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { Typography } from "@/components/ui/Typography"

interface ProgramsSectionProps {
    items: HomepageResponse["programs"]
}

export default function ProgramsSection({ items }: ProgramsSectionProps) {
    return (
        <Section tone="muted">
            <Container size="wide">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Sticky Left */}
                    <div className="sticky top-32 self-start">
                        <Typography as="h2" variant="display-lg" className="mb-6">
                            Experience the Program
                        </Typography>

                        <Typography variant="body-lg">
                            A curated sequence of runway shows, talks, and launches.
                        </Typography>
                    </div>

                    {/* Scrollable Right */}
                    <div className="space-y-16">
                        {items.map((p) => (
                            <Reveal key={p.id}>
                                <div className="rounded-2xl bg-white p-8 shadow-sm">
                                    <p className="text-sm text-neutral-500 mb-2">
                                        {p.start_at}
                                    </p>
                                    <Typography as="h3" variant="subsection">
                                        {p.title}
                                    </Typography>
                                    {p.description && (
                                        <p className="text-neutral-600 mt-2 text-sm">{p.description}</p>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>

                </div>
            </Container>
        </Section>
    )
}
