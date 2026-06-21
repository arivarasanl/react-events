import type {
  MediaType,
  SessionType,
} from "@/features/sessions/types"

/** Human label for a session type. */
export function sessionTypeLabel(type: SessionType): string {
  const map: Record<SessionType, string> = {
    showcase: "Showcase",
    talk: "Talk",
    interview: "Interview",
    panel: "Panel",
    workshop: "Workshop",
  }

  return map[type]
}

/**
 * Human label for a media type — only surfaced when it adds meaning.
 * Returns null for plain on-demand video.
 */
export function mediaTypeLabel(type: MediaType): string | null {
  const map: Record<MediaType, string | null> = {
    youtube_video: null,
    uploaded_video: null,
    youtube_live: "Live",
    image_gallery: "Gallery",
    instagram_post: "Instagram",
    external_link: "External",
  }

  return map[type]
}