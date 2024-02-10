import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { useState } from "react";
import { Paginator } from "primereact/paginator";
import ContainMovieCard from "./ContainMovieCard";

export default function Favorites() {
  const { favorites } = useContext(FavoriteContext);
  const [first, setFirst] = useState(0);

  const onPageChange = (event) => {
    setFirst(event.first);
  };

  return (
    <>
      <h2 className="font-bold text-3xl min-[500px]:text-4xl text-[#4f46e5] my-8">
        Películas Favoritas
      </h2>
      <ContainMovieCard movies={favorites.slice(first, first + 20)} />
      <div className="card my-6">
        <Paginator
          first={first}
          rows={20}
          totalRecords={favorites.length}
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
