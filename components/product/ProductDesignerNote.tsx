import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

export type ProductDesignerNoteProps = {
    note: string
    designerName?: string
}

export function ProductDesignerNote({ note, designerName }: ProductDesignerNoteProps) {
    if (!note) return null

    return (
        <Section className="py-24 md:py-40 bg-white">
            <Container>
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-10 md:space-y-16">

                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
                        A Note from the Designer
                    </div>

                    <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light text-stone-900 leading-snug tracking-tight">
                        &ldquo;{note}&rdquo;
                    </blockquote>

                    {designerName && (
                        <div className="text-sm font-medium uppercase tracking-[0.15em] text-stone-900 border-t border-stone-200 pt-6 px-12 inline-block">
                            {designerName}
                        </div>
                    )}

                </div>
            </Container>
        </Section>
    )
}
