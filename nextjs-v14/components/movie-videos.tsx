import { API_URL, YOUTUBE_URL } from '../constants/url';

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div>
      {videos.map((video) => (
        <iframe key={video.id} src={`${YOUTUBE_URL}/${video.key}`} title={video.name} />
      ))}
    </div>
  );
}
