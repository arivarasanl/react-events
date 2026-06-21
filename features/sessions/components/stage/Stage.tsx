import type { SessionMedia } from "@/features/sessions/types"
import { PlayerStage } from "./PlayerStage"
import { GalleryStage } from "./GalleryStage"
import { InstagramStage } from "./InstagramStage"
import { GatewayStage } from "./GatewayStage"

/**
 * Stage — the single polymorphic region. One shell, swappable stage:
 * resolves a media payload into one of three render families.
 *
 *   Player   → youtube_video · youtube_live · uploaded_video
 *   Gallery  → image_gallery · instagram_post
 *   Gateway  → external_link
 *
 * Everything around the Stage (title, speakers, description, Up Next) is
 * identical across media types — only this region changes.
 */
export function Stage({
  media,
  title,
}: {
  media: SessionMedia
  title: string
})