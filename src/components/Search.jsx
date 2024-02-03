import { useSearch } from "../API";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import ContainMovieCard from "./ContainMovieCard";

export default function Search() {
  const [value, setValue] = useState("");
  const [first, setFirst] = useState(0);
  const [movies, totalResults] = useSearch(value, first / 20 + 1);

  const onPageChange = (event) => {
    setFirst(event.first);
  };

  return (
    <>
      <h2 className="font-bold text-3xl my-4">Busca tu película</h2>
      <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      {!!movies.length && (
        <>
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
      )}
    </>
  );
}
