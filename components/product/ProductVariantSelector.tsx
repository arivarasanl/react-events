"use client"
import { useState, useEffect } from "react"

export type ProductOption = {
    name: string
    values: string[]
}

export type ProductVariantSelectorProps = {
    options: ProductOption[]
    variantIndex: Record<string, string | number>
    variants: any[]
}

export function ProductVariantSelector({
    options,
    variantIndex,
    variants
}: ProductVariantSelectorProps) {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})

    useEffect(() => {
        if (options && options.length > 0 && Object.keys(selectedOptions).length === 0) {
            const initial: Record<string, string> = {}
            options.forEach(opt => {
                if (opt.values && opt.values.length > 0) {
                    initial[opt.name] = opt.values[0]
                }
            })
            setSelectedOptions(initial)
        }
    }, [options, selectedOptions])

    const handleSelect = (optionName: string, value: string) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionName]: value
        }))
    }

    return (
        <div className="space-y-8">
            {options?.map(option => (
                <div key={option.name} className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium uppercase tracking-[0.1em] text-stone-900">
                            {option.name}
                        </span>
                        <span className="text-sm text-stone-500 font-light">
                            {selectedOptions[option.name]}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {option.values.map(value => {
                            const isSelected = selectedOptions[option.name] === value
                            return (
                                <button
                                    key={value}
                                    onClick={() => handleSelect(option.name, value)}
                                    className={`
                    px-6 py-3 text-sm transition-all border
                    ${isSelected
                                            ? 'border-stone-900 bg-stone-900 text-white'
                                            : 'border-stone-200 text-stone-600 hover:border-stone-400 bg-white hover:text-stone-900'
                                        }
                  `}
                                >
                                    {value}
                                </button>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}
