import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

export type ProductDetailsProps = {
    details: {
        material?: string
        craft?: string
        origin?: string
        care?: string
        [key: string]: string | undefined
    }
}

export function ProductDetails({ details }: ProductDetailsProps) {
    if (!details || Object.keys(details).length === 0) return null

    // Ensure consistent rendering order for predefined keys
    const order = ["material", "craft", "origin", "care"]
    const otherKeys = Object.keys(details).filter(k => !order.includes(k))
    const displayKeys = [...order, ...otherKeys].filter(k => details[k])

    return (
        <Section className="py-20 md:py-32 bg-stone-50 border-y border-stone-200">
            <Container>
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Section Header */}
                    <div className="lg:col-span-4">
                        <h2 className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] text-stone-900">
                            Details &amp; Care
                        </h2>
                    </div>

                    {/* Details Grid */}
                    <div className="lg:col-span-8">
                        <div className="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-12">
                            {displayKeys.map(key => (
                                <div key={key} className="flex flex-col space-y-3">
                                    <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-stone-900 border-b border-stone-200 pb-3">
                                        {key}
                                    </h3>
                                    <p className="text-sm font-light text-stone-600 leading-relaxed">
                                        {details[key]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    )
}
