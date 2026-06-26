import Link from "next/link"

type EditorialCTAProps = {
  href: string
  children: React.ReactNode
}

export function EditorialCTA({ href, children }: EditorialCTAProps) {
  return (
    <Link
      href={href}
      className="
        inline-block
        border border-current
        px-6 py-3
        text-sm
        tracking-widest
        uppercase
        transition
        hover:bg-black
        hover:text-white
      "
    >
      {children}
    </Link>
  )
}
