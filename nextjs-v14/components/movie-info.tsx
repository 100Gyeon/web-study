import { API_URL } from '../constants/url';

async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <div>{JSON.stringify(movie)}</div>;
}
