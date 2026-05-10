"use client"

import { useRouter, useSearchParams } from "next/navigation"

type Option = {
  slug: string
  name: string
  count: number
}

type Props = {
  title: string
  options: Option[]
  param: string
}

import { CardTitle, Text, Caption } from "@/components/ui/Typography"

export function FilterGroup({ title, options, param }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selected = searchParams.get(param)

  function toggleFilter(value: string) {
    const params = new URLSearchParams(searchParams)

    if (params.get(param) === value) {
      params.delete(param)
    } else {
      params.set(param, value)
    }

    params.set("page", "1")

    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      <CardTitle className="uppercase tracking-wider">
        {title}
      </CardTitle>

      <div className="space-y-3">
        {options.map((option) => {
          const isActive = selected === option.slug

          return (
            <button
              key={option.slug}
              onClick={() => toggleFilter(option.slug)}
              className="flex w-full items-center justify-between text-sm text-left group"
            >
              <Text
                className={
                  isActive
                    ? "font-medium text-neutral-900"
                    : "text-neutral-700 group-hover:text-neutral-900"
                }
              >
                {option.name}
              </Text>

              <Caption>
                {option.count}
              </Caption>
            </button>
          )
        })}
      </div>
    </div>
  )
}