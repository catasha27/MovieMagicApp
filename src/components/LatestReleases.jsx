import { useMovies } from "../hooks/API";
import { useState } from "react";
import { Paginator } from "primereact/paginator";
import ContainMovieCard from "./ContainMovieCard";

export default function LatestReleases() {
  const [first, setFirst] = useState(0);
  const [movies, totalResults] = useMovies("now_playing", first / 20 + 1);

  const onPageChange = (event) => {
    setFirst(event.first);
  };

  return (
    <>
      <h2 className=" font-bold text-3xl min-[500px]:text-4xl text-[#4f46e5] my-8">
        Últimos Lanzamientos
      </h2>
      <ContainMovieCard movies={movies} />
      <div className="card my-6">
        <Paginator
          first={first}
          rows={20}
          totalRecords={totalResults}
          onPageChange={onPageChange}
          pt={{
            pageButton: ({ context }) => ({
              className: context.active
                ? "bg-[#4f46e5]/50 focus:ring-0 active:ring-0"
                : "bg-none",
            }),
          }}
        />
      </div>
    </>
  );
}
