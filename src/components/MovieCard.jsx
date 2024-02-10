import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { BsCameraReels, BsCameraReelsFill } from "react-icons/bs";

export default function MovieCard({ movie }) {
  const { id, title, poster_path } = movie;
  const { addFav, removeFav, isFav } = useContext(FavoriteContext);

  const header = (
    <img
      className="h-[30rem]"
      alt="logo"
      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
    />
  );

  return (
    <>
      <Link to={`/detail/${id}`} className="w-72 min-[400px]:w-80">
        <Card header={header}>
          <div className="flex justify-center h-12 sm:h-20">
            <h2 className="font-medium text-xl mr-5 line-clamp-3">{title}</h2>
            {isFav(id) ? (
              <span
                className="text-2xl border rounded-full p-2 h-10 w-fit hover:scale-125	"
                onClick={(e) => {
                  e.preventDefault();
                  removeFav(id);
                }}
              >
                <BsCameraReelsFill className="text-[#4f46e5]" />
              </span>
            ) : (
              <span
                className="text-2xl border hover:border-[#4f46e5] rounded-full p-2 h-10 w-fit hover:scale-125 "
                onClick={(e) => {
                  e.preventDefault();
                  addFav(movie);
                }}
              >
                <BsCameraReels />
              </span>
            )}
          </div>
        </Card>
      </Link>
    </>
  );
}
