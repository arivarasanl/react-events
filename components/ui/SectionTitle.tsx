import clsx from "clsx"

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
    <h2
      className={clsx(
        "font-serif text-3xl md:text-4xl tracking-tight",
        align === "center" && "text-center",
        className
      )}
    >
      {children}
    </h2>
  )
}