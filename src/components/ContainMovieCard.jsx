import MovieCard from "./MovieCard";

export default function ContainMovieCard() {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
