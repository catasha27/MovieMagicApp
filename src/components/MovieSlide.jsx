import { Card } from "primereact/card";
import { Link } from "react-router-dom";

export default function MovieSlide({ id, title, backdrop_path }) {
  const header = (
    <img
      className="bg-repeat-x h-60"
      alt="Card"
      src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
    />
  );

  return (
    <div className="flex flex-row justify-center pt-0 mt-0">
      <Card title={title} header={header}>
        <Link
          to={`/detail/${id}`}
          rel="noopener noreferrer"
          severity="info"
          size="small"
          className="p-button font-bold"
        >
          {" "}
          Más info
        </Link>
      </Card>
    </div>
  );
}
