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
      <h2 className="font-bold text-3xl my-4">Películas Favoritas</h2>
      <ContainMovieCard movies={favorites.slice(first, first + 20)} />
      <div className="card">
        <Paginator
          first={first}
          rows={20}
          totalRecords={favorites.length}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
