import clsx from "clsx"
import { Title } from "@/components/ui/Typography"
import { sectionHeaderSpacingClass } from "@/styles/design-system/spacing"

type SectionTitleProps = {
  children: React.ReactNode
  align?: "left" | "center"
  spacing?: "none" | keyof typeof sectionHeaderSpacingClass
  className?: string
}

export function SectionTitle({
  children,
  align = "left",
  spacing = "none",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        align === "center" && "text-center",
        spacing !== "none" && sectionHeaderSpacingClass[spacing],
        className
      )}
    >
      <Title>{children}</Title>
    </div>
  )
}
