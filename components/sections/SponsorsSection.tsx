import { HomepageResponse } from "@/types/homepage"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { Grid } from "@/components/layout/Grid"

interface SponsorsSectionProps {
    items: HomepageResponse["sponsors"]
}

export default function SponsorsSection({ items }: SponsorsSectionProps) {
    return (
        <Section spacing="tight">
            <Container size="wide">
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-8">
                    Partners
                </h3>

                <Reveal>
                    <Grid gap="loose" stagger="none">
                        {items.map((s) => (
                            <div
                                key={s.id}
                                className="text-center text-neutral-400 text-sm"
                            >
                                {/* The API had a typo 'bane', so I'll handle both just in case, or use 'bane' if it's the official field */}
                                {(s as any).name || (s as any).bane}
                            </div>
                        ))}
                    </Grid>
                </Reveal>
            </Container>
        </Section>
    )
}
