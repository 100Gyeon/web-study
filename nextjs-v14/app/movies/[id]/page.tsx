import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../components/movie-info';
import MovieVideos from '../../../components/movie-videos';

interface MovieDetailProps {
  params: {
    id: string;
  };
}

// page 컴포넌트가 params에서 url의 id를 props로 전달받는 것처럼 generateMetadata에서도 동일하게 동작
export async function generateMetadata({ params: { id } }: MovieDetailProps) {
  const movie = await getMovie(id);
  return { title: movie.title };
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

  return (
    <>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
