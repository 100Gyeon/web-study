import { API_URL } from '../../../constants/url';

interface MovieDetailProps {
  params: {
    id: string;
  };
}

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({ params: { id } }: MovieDetailProps) {
  // console.log(props);
  // hydration이 실행되지 않아서 브라우저 콘솔에는 표시되지 않음
  // localhost:3000/movies/1 -> { params: { id: '1' }, searchParams: {} }

  // 아래처럼 하면 순차적으로 실행됨
  // getMovie가 20초 걸리고, getVideos가 1초 걸린다고 가정하면 총 21초 걸림
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // 위의 비효율적인 방법 대신 병렬로 실행 가능
  // Promise.all이 결괏값으로 된 array를 줌
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return (
    <>
      <h1>{movie.title}</h1>
      <ul>
        {videos.map((video) => (
          <li>{video.name}</li>
        ))}
      </ul>
    </>
  );
}
