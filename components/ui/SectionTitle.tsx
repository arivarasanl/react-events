import clsx from "clsx"
import { Title } from "@/components/ui/Typography"

type SectionTitleProps = {
  children: React.ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionTitle({
  children,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        align === "center" && "text-center",
        className
      )}
    >
      <Title>{children}</Title>
    </div>
  )
}