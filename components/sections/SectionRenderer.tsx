import { sectionRegistry } from "./section-registry"

type Props = {
  sections: any[]
}

export default function SectionRenderer({ sections }: Props) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionRegistry[section.type]

        if (!Component) {
          console.warn(`Unknown section type: ${section.type}`)
          return null
        }

        return <Component key={index} {...section} />
      })}
    </>
  )
}