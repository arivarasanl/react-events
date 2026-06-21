export type SessionMedia =
  | {
      kind: "youtube_video"
      url: string
      poster_url?: string | null
    }
  | {
      kind: "youtube_live"
      url: string
      poster_url?: string | null
    }
  | {
      kind: "uploaded_video"
      video_url?: string | null
      poster_url?: string | null
    }
  | {
      kind: "image_gallery"
      images: {
        url: string
        alt?: string
      }[]
    }
  | {
      kind: "instagram_post"
      url: string
      poster_url?: string | null
    }
  | {
      kind: "external_link"
      url: string
      poster_url?: string | null
    }