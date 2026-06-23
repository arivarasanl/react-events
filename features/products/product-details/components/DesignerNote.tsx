type Props = {
  note: string | null | undefined
}

export function DesignerNote({ note }: Props) {
  if (!note || note.trim() === "") return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200">

      <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
        Designer Note
      </h2>

      <p className="max-w-2xl text-base leading-relaxed text-neutral-700 font-light italic">
        &ldquo;{note}&rdquo;
      </p>

    </section>
  )
}
