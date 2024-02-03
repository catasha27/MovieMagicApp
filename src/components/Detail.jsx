import { useParams } from "react-router-dom";
import { useMovie } from "../API";
import { Card } from "primereact/card";
import { BsCameraReels, BsCameraReelsFill } from "react-icons/bs";

export default function Detail() {
  const params = useParams();

  const [movie, trailer] = useMovie(params.id);

  if (!movie) return;

  const {
    id,
    backdrop_path,
    poster_path,
    title,
    overview,
    genres,
    release_date,
  } = movie;

  const header = (
    <img
      className="h-[30rem]"
      alt="Card"
      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
    />
  );

  const footer = trailer && (
    <a href={`https://www.youtube.com/watch?v=${trailer}`} target="_blank">
      <span className="flex align-middle text-white">
        <i className="pi pi-play text-xl" />
        Ver trailer
      </span>
    </a>
  );

  return (
    <>
      <Card
        pt={{
          header: "flex justify-center items-center",
          body: "flex flex-row",
        }}
        className={`flex flex-row justify-center align-middle bg-slate-900/60 bg-blend-darken bg-cover `}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
        }}
        header={header}
        footer={footer}
      >
        <div className="flex flex-col text-left max-w-[400px] text-white">
          <h2 className="font-bold text-2xl mb-5">
            {title}{" "}
            <span className="ml-8 text-l">({release_date.slice(0, 4)})</span>
          </h2>

          <h4 className="font-bold text-l">Sinopsis</h4>
          <p>{overview}</p>
          <ul className="mt-2">
            <h4 className="font-bold text-l">Géneros</h4>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}{" "}
          </ul>
          <span style={{ fontSize: "1.5rem" }}>
            <BsCameraReels />
            <BsCameraReelsFill />
          </span>
        </div>
      </Card>
    </>
  );
}
