// lib/builders/homepage-builder.ts

import { HomepageResponse } from "@/types/homepage"

export type HomepageSection =
  // | { type: "categories"; items: HomepageResponse["categories"] }
  | { type: "featured_brands"; items: HomepageResponse["featured_brands"] }
  // | { type: "featured_products"; items: HomepageResponse["featured_products"] }
  // | { type: "programs"; items: HomepageResponse["programs"] }
  // | { type: "sponsors"; items: HomepageResponse["sponsors"] }

export function buildHomepageSections(data: HomepageResponse): HomepageSection[] {
  return [
    { type: "categories", items: data.categories },
    { type: "featured_brands", items: data.featured_brands },
    { type: "featured_products", items: data.featured_products },
    { type: "programs", items: data.programs },
    { type: "sponsors", items: data.sponsors },
  ]
}