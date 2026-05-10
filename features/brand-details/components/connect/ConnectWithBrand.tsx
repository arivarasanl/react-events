"use client"

import { Title } from "@/components/ui/Typography"

export function ConnectWithBrand({ brand }: any) {
  return (
    <section className="py-32 bg-neutral-50">

      <div className="max-w-2xl mx-auto text-center px-6">

        <Title>
          Begin a conversation with {brand.name}
        </Title>

        <button className="mt-10 px-8 py-4 bg-black text-white hover:opacity-90 transition">
          Start Conversation
        </button>

      </div>

    </section>
  )
}