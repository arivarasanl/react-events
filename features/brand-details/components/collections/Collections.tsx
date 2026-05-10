"use client"

import Image from "next/image"
import Link from "next/link"
import { Caption } from "@/components/ui/Typography"

export function Collections({ collections }: any) {
  return (
    <section className="py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {collections.map((col: any, idx: number) => (
          <div key={col.title} className={idx > 0 ? "mt-20" : ""}>

            <Caption className="mb-10 block">{col.title}</Caption>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {col.products.map((p: any) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="group">

                  <div className="relative aspect-[3/4] bg-neutral-100">
                    <Image
                      src={p.image_url}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <Caption className="mt-3 block">{p.name}</Caption>

                </Link>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}