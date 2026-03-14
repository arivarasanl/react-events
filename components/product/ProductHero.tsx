import { ProductGallery } from "./ProductGallery"
import { ProductVariantSelector } from "./ProductVariantSelector"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import Link from "next/link"

export type Product = {
    id: number
    name: string
    slug: string
    price: string
    description: string
    brand: {
        id: number
        name: string
        slug: string
        logo_url: string
    }
}

export type ProductHeroProps = {
    product: Product
    gallery: any[]
    options: any[]
    variants: any[]
    variantIndex: Record<string, any>
}

export function ProductHero({
    product,
    gallery,
    options,
    variants,
    variantIndex
}: ProductHeroProps) {
    return (
        <Section className="py-16 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-7 sticky top-24">
                        <ProductGallery images={gallery} />
                    </div>

                    <div className="lg:col-span-5 flex flex-col space-y-10">
                        <div className="space-y-4 border-b border-stone-200 pb-10">
                            {product.brand && (
                                <Link
                                    href={`/brands/${product.brand.slug}`}
                                    className="text-xs font-medium tracking-[0.2em] uppercase text-stone-500 hover:text-stone-900 transition-colors"
                                >
                                    {product.brand.name}
                                </Link>
                            )}
                            <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-stone-600">
                                {product.price}
                            </p>
                        </div>

                        {options && options.length > 0 && (
                            <ProductVariantSelector
                                options={options}
                                variantIndex={variantIndex}
                                variants={variants}
                            />
                        )}

                        <div className="pt-4 space-y-4">
                            <button className="w-full bg-stone-900 text-white hover:bg-stone-800 transition-colors uppercase tracking-[0.15em] text-sm py-5 px-8 font-medium">
                                Request Quote
                            </button>
                            <p className="text-xs text-stone-500 tracking-wide text-center leading-relaxed">
                                Our concierges will assist you with measurements and customization.
                            </p>
                        </div>

                        <div className="prose prose-stone prose-sm font-light text-stone-600 leading-relaxed mt-8">
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
