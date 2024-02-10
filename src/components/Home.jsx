import { useMovies } from "../hooks/API";
import { Link } from "react-router-dom";
import { Carousel } from "primereact/carousel";
import { useRef } from "react";
import MovieSlide from "./MovieSlide";

export default function Home() {
  const [populars] = useMovies("popular");
  const [topRated] = useMovies("top_rated");
  const [latest] = useMovies("now_playing");

  return (
    <>
      <div className="w-screen mb-6">
        <Carousel
          value={latest.slice(0, 10)}
          numVisible={1}
          numScroll={1}
          pt={{
            indicatorButton: ({ context }) => ({
              className: context.active
                ? "bg-[#4f46e5]/50 w-5 sm:w-8"
                : "bg-gray-200 w-5 sm:w-8",
            }),
            previousButtonIcon: "h-20 w-20 text-[#4f46e5] ",
            nextButtonIcon: "h-20 w-20 text-[#4f46e5]",
          }}
          className="w-full"
          circular
          autoplayInterval={3000}
          itemTemplate={MovieSlide}
        />
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-12 md:gap-20 lg:gap-40 mb-4">
        <div className="flex flex-col border-solid border-4 rounded-lg w-72 min-[400px]:w-80 sm:w-96 h-[500px] ">
          <div className="flex justify-center py-3 rounded-t-lg bg-[#4f46e5]">
            <h3 className="text-xl font-bold text-white">
              Películas Populares
            </h3>
          </div>
          <ul className=" flex flex-col gap-2 w-full list-none border m-0 p-3 divide-inherit divide-y-2 divide-dashed overflow-y-auto bg-stone-50">
            {populars.slice(0, 20).map(({ id, title, poster_path }) => (
              <li key={id}>
                <Link
                  to={`/detail/${id}`}
                  className="p-2 flex flex-row items-center align-middle justify-between gap-8"
                >
                  <div className="flex items-center gap-2">
                    <img
                      alt={title}
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      style={{ width: "32px" }}
                    />
                    <span className="font-bold text-left line-clamp-2 ml-3">
                      {title}
                    </span>
                  </div>
                  <i
                    className="pi pi-chevron-right"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col border-solid border-4 rounded-lg w-72 min-[400px]:w-80 sm:w-96 h-[500px]">
          <div className="flex justify-center py-3 rounded-t-lg bg-[#4f46e5]">
            <h3 className="text-xl font-bold text-white">
              Películas Mejor Puntuadas
            </h3>
          </div>
          <ul className="flex flex-col gap-2 w-full list-none border m-0 p-3 divide-inherit divide-y-2 divide-dashed overflow-y-auto bg-stone-50">
            {topRated.slice(0, 20).map(({ id, title, poster_path }) => (
              <li key={id}>
                <Link
                  to={`/detail/${id}`}
                  className="p-2 flex flex-row items-center align-middle justify-between gap-8"
                >
                  <div className="flex items-center gap-2 ">
                    <img
                      alt={title}
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      style={{ width: "32px" }}
                    />
                    <span className="font-bold text-left line-clamp-2 ml-3">
                      {title}
                    </span>
                  </div>
                  <i
                    className="pi pi-chevron-right"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
