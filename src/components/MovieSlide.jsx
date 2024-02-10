import { Card } from "primereact/card";
import { Link } from "react-router-dom";

export default function MovieSlide({ id, title, backdrop_path }) {
  const footer = (
    <div className="flex flex-col align-middle p-2 sm:p-5 rounded bg-stone-600/50 w-52 sm:w-96">
      <h3 className="text-lg sm:text-2xl font-medium text-white">{title}</h3>
      <Link
        to={`/detail/${id}`}
        rel="noopener noreferrer"
        size="small"
        className="flex justify-center self-center p-button text-base sm:text-lg font-normal sm:font-bold p-1 sm:py-1.5 sm:px-3 mt-4 sm:mt-8 w-20 sm:w-40 text-white"
      >
        {" "}
        Más info
      </Link>
    </div>
  );

  return (
    <div className="flex flex-row justify-center pt-0 mt-0 mb-5 sm:mb-3">
      <Card
        footer={footer}
        className={`flex justify-center items-end w-72 h-auto sm:w-full sm:h-[510px] bg-cover rounded-none`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
        }}
      ></Card>
    </div>
  );
}
