import MovieCard from "./MovieCard";

export default function ContainMovieCard({ movies }) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
