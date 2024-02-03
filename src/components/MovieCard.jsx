import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { BsCameraReels, BsCameraReelsFill } from "react-icons/bs";

export default function MovieCard({ movie: { id, title, poster_path } }) {
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
            <span className="text-2xl">
              <BsCameraReels />
              <BsCameraReelsFill />
            </span>
          </div>
        </Card>
      </Link>
    </>
  );
}
