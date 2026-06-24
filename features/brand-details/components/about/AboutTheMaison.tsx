import { Caption } from "@/components/ui/Typography"

type Props = {
  description: string
}

export function AboutTheMaison({ description }: Props) {
  return (
    <section className="px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Caption className="uppercase tracking-widest text-neutral-400">
          About the Maison
        </Caption>

        <p className="text-base md:text-lg text-neutral-700 leading-[1.85] whitespace-pre-line">
          {description}
        </p>
      </div>
    </section>
  )
}
