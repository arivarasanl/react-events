/**
 * Conversation Detail Page — /dashboard/correspondence/[id]
 *
 * Full thread view for a single correspondence.
 *
 * Structure:
 *   AccountLayout
 *   Container (content width)
 *   ConversationDetail — header + thread + reply composer
 *
 * Mock behaviour:
 *   Thread and messages sourced from mock data.
 *   Reply composer appends mock messages locally.
 *   No authentication. No backend. No persistence.
 *
 * 404 behaviour:
 *   If the thread ID is not found in mock data, renders a calm not-found state.
 */

import React from "react"
import { notFound } from "next/navigation"
import { AccountLayout } from "@/features/account/components/AccountLayout"
import { Container } from "@/components/layout/Container"
import { ConversationDetail } from "@/features/account/correspondence"
import { mockThreads } from "@/features/account/correspondence/mock/conversationThreads"
import { mockMessages } from "@/features/account/correspondence/mock/conversationMessages"

interface ConversationPageProps {
  params: { id: string }
}

export default function ConversationPage({ params }: ConversationPageProps) {
  const thread = mockThreads.find((t) => t.id === params.id)

  if (!thread) {
    notFound()
  }

  const messages = mockMessages.filter((m) => m.threadId === params.id)

  return (
    <AccountLayout>
      <div className="py-16 md:py-20">
        <Container size="content">
          <ConversationDetail
            thread={thread}
            initialMessages={messages}
          />
        </Container>
      </div>
    </AccountLayout>
  )
}

/**
 * Generate static params for mock thread IDs.
 * Allows Next.js to pre-render detail pages at build time.
 */
export function generateStaticParams() {
  return mockThreads.map((thread) => ({ id: thread.id }))
}
