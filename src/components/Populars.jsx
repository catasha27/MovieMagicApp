import { useMovies } from "../API";
import { useState } from "react";
import { Paginator } from "primereact/paginator";
import ContainMovieCard from "./ContainMovieCard";

export default function Populars() {
  const [first, setFirst] = useState(0);
  const [movies, totalResults] = useMovies("popular", first / 20 + 1);

  const onPageChange = (event) => {
    setFirst(event.first);
  };

  return (
    <>
      <h2 className="font-bold text-3xl my-4">Películas Populares</h2>
      <ContainMovieCard movies={movies} />
      <div className="card">
        <Paginator
          first={first}
          rows={20}
          totalRecords={totalResults}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
