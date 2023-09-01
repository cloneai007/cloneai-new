import { S3_BUCKET_BASE_URL } from "../configuration";

export const getAvatarUrl = (user) => {
  if (user?.picture) {
    return `${S3_BUCKET_BASE_URL}/${user.picture}`;
  }
  return null;
};

export const getLandingVideoUrl = () => {
    return `${S3_BUCKET_BASE_URL}/landing_page_video.mp4`;
}
export const getLandingVideoPosterUrl = () => {
    return `${S3_BUCKET_BASE_URL}/landing_video_poster.png`;
}