import Link from "next/link"

type RefineEntryProps = {
  href: string
}

export default function RefineEntry({ href }: RefineEntryProps) {
  return (
    <div className="flex justify-center">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50 hover:border-gray-400"
      >
        Refine your search
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
