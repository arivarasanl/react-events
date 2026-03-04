import clsx from "clsx"

type Props = {
  children: React.ReactNode
  className?: string
}

export function EditorialGrid({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16",

        // Editorial stagger
        "[&>*:nth-child(4n+2)]:md:translate-y-8",
        "[&>*:nth-child(4n+4)]:md:-translate-y-4",
      )}

      
    >

      {children}
    </div>
  )
}