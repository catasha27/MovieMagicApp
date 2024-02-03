import { useMovies } from "../API";
import { Link } from "react-router-dom";
import { Carousel } from "primereact/carousel";
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
              className: context.active ? "bg-blue-500" : "bg-gray-200",
            }),
          }}
          className="w-screen"
          circular
          autoplayInterval={3000}
          itemTemplate={MovieSlide}
        />
      </div>
      <div className="flex sm:flex-col md:flex-row justify-around gap-10">
        <div className="flex flex-col border-solid border-4 w-96 ">
          <div className="flex justify-center py-3 bg-cyan-900">
            <h3 className="text-xl font-bold">Películas Populares</h3>
          </div>
          <ul className="m-0 list-none border-1 surface-border border-round p-3 flex flex-col justify-right gap-2 w-full md:w-30rem">
            {populars.slice(0, 10).map(({ id, title, poster_path }) => (
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
                    <span className="font-bold">{title}</span>
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
        <div className="flex flex-col border-solid border-4 w-96">
          <div className="flex justify-center py-3  bg-cyan-900">
            <h3 className="text-xl font-bold">Películas Mejor Puntuadas</h3>
          </div>
          <ul className="m-0 list-none border-1 surface-border border-round p-3 flex flex-col justify-right gap-2 w-full md:w-30rem">
            {topRated.slice(0, 10).map(({ id, title, poster_path }) => (
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
                    <span className="font-bold">{title}</span>
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
