import type { SessionMedia } from "@/features/sessions/types";
import { PlayerStage } from "./PlayerStage";
import { GalleryStage } from "./GalleryStage";
import { InstagramStage } from "./InstagramStage";
import { GatewayStage } from "./GatewayStage";

interface StageProps {
  media: SessionMedia;
  title: string;
}

export function Stage({ media, title }: StageProps) {
  switch (media.kind) {
    case "youtube_video":
    case "youtube_live":
    case "uploaded_video":
      return <PlayerStage media={media} title={title} />;
    case "image_gallery":
      return <GalleryStage media={media} title={title} />;
    case "instagram_post":
      return <InstagramStage media={media} title={title} />;
    case "external_link":
      return <GatewayStage media={media} title={title} />;
    default: {
      const _exhaustive: never = media;
      return null;
    }
  }
}
