import Image from "next/image"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

export type ProductStoryProps = {
    title?: string
    description?: string
    imageUrl?: string
    imageAlt?: string
}

export function ProductStory({
    title = "The Story",
    description,
    imageUrl,
    imageAlt = "Product crafting story"
}: ProductStoryProps) {
    if (!description) return null

    return (
        <Section className="py-20 md:py-32 bg-stone-100">
            <Container>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Mobile Image (stacked), Desktop Image (Left side) */}
                    {imageUrl && (
                        <div className="w-full relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-stone-200">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    )}

                    {/* Text Content */}
                    <div className="flex flex-col space-y-8 w-full">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-900 tracking-tight">
                            {title}
                        </h2>

                        <div className="prose prose-stone prose-sm md:prose-base font-light text-stone-600 leading-loose">
                            <p>{description}</p>
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    )
}
