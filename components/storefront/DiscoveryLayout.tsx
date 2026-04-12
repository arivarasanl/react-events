import React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Typography } from "@/components/ui/Typography"

type Props = {
  headerTitle: string
  headerDescription?: string
  sidebarContent: React.ReactNode
  mainContent: React.ReactNode
}

export function DiscoveryLayout({ 
  headerTitle, 
  headerDescription, 
  sidebarContent, 
  mainContent 
}: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <Section variant="tight" className="bg-neutral-50/50 border-b border-neutral-100" noMotion>
        <Container size="wide">
          <div className="max-w-3xl py-8">
            <Typography variant="display-lg" className="mb-6 text-black">
              {headerTitle}
            </Typography>
            {headerDescription && (
              <Typography variant="body-lg" className="text-neutral-500 max-w-xl">
                {headerDescription}
              </Typography>
            )}
          </div>
        </Container>
      </Section>

      {/* Main Content Area */}
      <Section variant="flush" className="py-16 md:py-24" noMotion>
        <Container size="wide">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* Sidebar Filters */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32">
                {sidebarContent}
              </div>
            </div>

            {/* Main Products Grid */}
            <div className="flex-1 min-w-0">
              {mainContent}
            </div>
            
          </div>
        </Container>
      </Section>
    </div>
  )
}
