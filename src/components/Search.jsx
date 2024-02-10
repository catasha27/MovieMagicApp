import { useSearch } from "../hooks/API";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import Loader from "./Loader";
import ContainMovieCard from "./ContainMovieCard";

export default function Search() {
  const [value, setValue] = useState("");
  const [first, setFirst] = useState(0);
  const { movies, totalResults, loading } = useSearch(value, first / 20 + 1);

  const onPageChange = (event) => {
    setFirst(event.first);
  };

  return (
    <>
      <h2 className="font-bold text-3xl min-[500px]:text-4xl text-[#4f46e5] my-8">
        Busca tu película
      </h2>
      <InputText
        value={value}
        className="p-3 text-xl border-2 mb-2"
        onChange={(e) => setValue(e.target.value)}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          {!!movies.length && (
            <div className="mt-8">
              <ContainMovieCard movies={movies} />
              <div className=" card my-6">
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
            </div>
          )}
        </>
      )}
    </>
  );
}
