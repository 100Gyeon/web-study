interface MovieDetailProps {
  params: {
    id: string;
  };
}

export default function MovieDetail({ params: { id } }: MovieDetailProps) {
  // console.log(props);
  // hydration이 실행되지 않아서 브라우저 콘솔에는 표시되지 않음
  // localhost:3000/movies/1 -> { params: { id: '1' }, searchParams: {} }

  return <h1>Movie Detail {id}</h1>;
}
