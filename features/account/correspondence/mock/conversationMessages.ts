/**
 * Mock Conversation Messages — Correspondence Feature
 *
 * Messages are keyed by thread ID.
 * Each message has an author role: "member" or "brand".
 *
 * Author display:
 *   member → "You"
 *   brand  → the brand name from the thread
 *
 * Body is plain prose — no markdown, no HTML.
 * Dates are ISO strings — formatted for display by the component.
 *
 * No backend. No persistence.
 */

export type MessageAuthor = "member" | "brand"

export interface ConversationMessage {
  id: string
  threadId: string
  author: MessageAuthor
  /** ISO date string */
  sentAt: string
  body: string
}

export const mockMessages: ConversationMessage[] = [
  // ── conv_001 — Tarun Tahiliani ─────────────────────────────────────────────
  {
    id:       "msg_001_01",
    threadId: "conv_001",
    author:   "member",
    sentAt:   "2025-07-14T10:22:00Z",
    body:     "I came across your Autumn Bridal Collection and was deeply moved by the embroidery work on the Chanderi pieces. I'm planning a wedding for early next year and would love to understand more about the bespoke process — particularly around lead times and the level of customisation available for the embroidery motifs.",
  },
  {
    id:       "msg_001_02",
    threadId: "conv_001",
    author:   "brand",
    sentAt:   "2025-07-15T14:05:00Z",
    body:     "Thank you for reaching out, and for your kind words about the collection. The Chanderi embroidery pieces are among our most considered works — each one is developed over several weeks in close collaboration with our artisans in Varanasi.\n\nFor a wedding in early next year, we would typically begin the bespoke consultation in September to allow sufficient time. The embroidery motifs can be adapted to reflect personal symbolism, family heritage, or a specific colour palette. We would love to arrange a conversation with our design team to explore what might be possible for you.",
  },
  {
    id:       "msg_001_03",
    threadId: "conv_001",
    author:   "member",
    sentAt:   "2025-07-18T09:15:00Z",
    body:     "That sounds wonderful. A September consultation would work perfectly. I'm particularly interested in incorporating a motif that references my family's regional textile tradition — would that be something your artisans could work with, or would you need reference materials from me in advance?",
  },

  // ── conv_002 — Auralee ─────────────────────────────────────────────────────
  {
    id:       "msg_002_01",
    threadId: "conv_002",
    author:   "member",
    sentAt:   "2025-07-10T08:45:00Z",
    body:     "I've been following Auralee's fabric development closely for the past few seasons. The Washed Finx Twill caught my attention — I'm curious about the sourcing process for the Finx yarn and whether you work with any minimum order quantities for wholesale accounts.",
  },
  {
    id:       "msg_002_02",
    threadId: "conv_002",
    author:   "brand",
    sentAt:   "2025-07-11T10:30:00Z",
    body:     "Thank you for your interest in the Finx Twill. The Finx yarn is a high-tenacity polyester developed specifically for its drape and wash characteristics — we source it through a long-standing relationship with a mill in Gifu Prefecture.\n\nFor wholesale, our minimum order quantities vary by category. For trousers and tailoring pieces, we typically work with a minimum of six units per style. We'd be happy to share our wholesale terms document if you'd like to proceed.",
  },
  {
    id:       "msg_002_03",
    threadId: "conv_002",
    author:   "member",
    sentAt:   "2025-07-13T16:20:00Z",
    body:     "Yes, please do share the wholesale terms. I'm also curious whether the SS25 delivery schedule allows for a mid-season reorder, or whether the initial order is the only opportunity.",
  },
  {
    id:       "msg_002_04",
    threadId: "conv_002",
    author:   "brand",
    sentAt:   "2025-07-16T09:00:00Z",
    body:     "I've attached our SS25 wholesale terms below. Regarding mid-season reorders — we do allow them for core styles, subject to production availability. The Finx Twill trousers are a core style this season, so a reorder window would likely be open through August. I'll follow up with the exact dates once our production team confirms.",
  },

  // ── conv_003 — Lemaire ─────────────────────────────────────────────────────
  {
    id:       "msg_003_01",
    threadId: "conv_003",
    author:   "member",
    sentAt:   "2025-06-28T14:10:00Z",
    body:     "I attended the AW25 Wholesale Preview program and was particularly drawn to the outerwear range — specifically the cocoon coats in the undyed wool. I'd like to understand the wholesale pricing structure and whether there are any exclusivity arrangements available for the outerwear category.",
  },
  {
    id:       "msg_003_02",
    threadId: "conv_003",
    author:   "brand",
    sentAt:   "2025-06-30T11:45:00Z",
    body:     "Thank you for attending the preview and for your interest in the outerwear. The undyed wool cocoon coats are one of the centrepieces of AW25 — the wool is sourced from a single farm in the Pyrenees and processed without any chemical treatment.\n\nWe do offer category exclusivity arrangements in select markets. Could you share more about your retail context — location, format, and the brands you currently carry? That would help us understand whether an exclusivity arrangement might be appropriate.",
  },
  {
    id:       "msg_003_03",
    threadId: "conv_003",
    author:   "member",
    sentAt:   "2025-07-02T10:00:00Z",
    body:     "We operate a single-location concept store in Edinburgh, focused on considered European and Japanese ready-to-wear. Current brands include Margaret Howell, Stephan Schneider, and Hed Mayner. We don't currently carry any French outerwear at this level, which is part of why the Lemaire range feels like a natural fit.",
  },
  {
    id:       "msg_003_04",
    threadId: "conv_003",
    author:   "brand",
    sentAt:   "2025-07-05T14:30:00Z",
    body:     "Thank you — that context is very helpful. Edinburgh is currently an open market for us, and the brand context you've described aligns well with how we think about our retail partners. I'll pass this to our wholesale director and we'll be in touch within the week to discuss next steps.\n\nThis correspondence is now marked as resolved on our end — we'll open a new thread once the wholesale director is ready to proceed.",
  },

  // ── conv_004 — Commas ──────────────────────────────────────────────────────
  {
    id:       "msg_004_01",
    threadId: "conv_004",
    author:   "member",
    sentAt:   "2025-06-05T09:30:00Z",
    body:     "I read the Commas story on your brand page and was struck by the approach to resort dressing — particularly the idea of clothing that travels well without sacrificing considered construction. I'd love to know more about the Resort collection and whether you offer any made-to-measure options.",
  },
  {
    id:       "msg_004_02",
    threadId: "conv_004",
    author:   "brand",
    sentAt:   "2025-06-07T10:15:00Z",
    body:     "Thank you for reading the story — it means a great deal that it resonated. The Resort collection is built around a small number of shapes that we've refined over several seasons. We don't currently offer made-to-measure, but our sizing is intentionally generous and the pieces are designed to be worn with ease rather than precision.\n\nIf you have specific questions about fit or fabric, we're happy to help.",
  },
  {
    id:       "msg_004_03",
    threadId: "conv_004",
    author:   "member",
    sentAt:   "2025-06-10T08:45:00Z",
    body:     "That's helpful to know. I'll explore the collection further and may come back with questions about specific pieces. Thank you for the thoughtful response.",
  },

  // ── conv_005 — Baserange ───────────────────────────────────────────────────
  {
    id:       "msg_005_01",
    threadId: "conv_005",
    author:   "member",
    sentAt:   "2025-07-18T11:00:00Z",
    body:     "I've been wearing Baserange for several years and have always been curious about the natural dye process. Specifically — how do you manage colour consistency across production runs, and does the dye process affect the hand-feel of the fabric in any meaningful way?",
  },
  {
    id:       "msg_005_02",
    threadId: "conv_005",
    author:   "brand",
    sentAt:   "2025-07-19T09:30:00Z",
    body:     "These are exactly the right questions to ask. Colour consistency in natural dyeing is genuinely difficult — we work with a small dye house in Lyon that has developed a rigorous process for controlling variables like water pH, temperature, and mordant concentration. Even so, there is always a degree of natural variation between batches, which we consider part of the character of the work rather than a flaw.\n\nAs for hand-feel — yes, the dye process does affect it. Plant-based dyes tend to slightly stiffen the fibre initially, but this softens considerably after the first few washes. The mordanting process can also subtly alter the drape depending on the mordant used.",
  },
  {
    id:       "msg_005_03",
    threadId: "conv_005",
    author:   "member",
    sentAt:   "2025-07-20T14:10:00Z",
    body:     "That's fascinating — I hadn't considered the mordant's effect on drape. Do you document the specific mordants used for each colourway, and is that information available to customers? I ask partly out of curiosity and partly because I have a mild sensitivity to certain metal-based mordants.",
  },
  {
    id:       "msg_005_04",
    threadId: "conv_005",
    author:   "brand",
    sentAt:   "2025-07-21T10:45:00Z",
    body:     "We do document the mordants used for each colourway — this is part of our internal production records. We haven't historically made this information public, but given the sensitivity concern you've raised, I think it's entirely reasonable to share it on request.\n\nI'll compile the mordant information for the current season's colourways and send it through. If you have specific pieces in mind, let me know and I'll prioritise those.",
  },
]
