"use client"

import Image from "next/image"
import Link from "next/link"

export function Editorial({ items }: any) {
  return (
    <section className="py-32 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        <div className="mb-12">
          <span className="type-meta text-white/60">Editorial</span>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {items.map((item: any) => (
            <Link key={item.slug} href={`/editorial/${item.slug}`} className="group">

              <div className="relative aspect-[4/5]">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
              </div>

              <h3 className="mt-4 text-lg">{item.title}</h3>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}