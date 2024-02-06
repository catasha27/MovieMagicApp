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
      alt="Card"
      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
    />
  );

  return (
    <>
      <Link to={`/detail/${id}`}>
        <Card header={header}>
          <div className="flex justify-center">
            <h2 className="font-bold text-2xl mr-5">{title}</h2>
            {isFav(id) ? (
              <span
                className="text-2xl"
                onClick={(e) => {
                  e.preventDefault();
                  removeFav(id);
                }}
              >
                <BsCameraReelsFill className="text-blue-500 font-outline-4" />
              </span>
            ) : (
              <span
                className="text-2xl"
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
