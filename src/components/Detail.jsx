import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { useMovie } from "../hooks/API";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { BsCameraReels, BsCameraReelsFill } from "react-icons/bs";

export default function Detail() {
  const params = useParams();
  const [movie, trailer] = useMovie(params.id);
  const { addFav, removeFav, isFav } = useContext(FavoriteContext);
  const [visible, setVisible] = useState(false);

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
      className="w-72 min-[400px]:w-96 "
      alt="Card"
      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
    />
  );

  const footer = trailer && (
    <div>
      <Button
        className="flex align-middle font-medium text-lg text-white p-2"
        label="Ver trailer"
        icon="pi pi-play text-xl"
        rounded
        text
        raised
        aria-label="Trailer"
        onClick={() => setVisible(true)}
      />
      <Dialog
        className=" bg-black rounded-none"
        visible={visible}
        onHide={() => setVisible(false)}
        draggable={false}
        maximized
        pt={{
          header: "bg-transparent",
          content: "bg-transparent",
          closeButtonIcon: "font-medium text-xl text-white",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailer}?autoplay=0&mute=0&controls=1&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
        ></iframe>
      </Dialog>
    </div>
  );

  return (
    <>
      <Card
        pt={{
          header: "flex justify-center items-center",
          body: "flex flex-col items-center sm:items-baseline justify-center sm:flex-row",
          footer: "p-0 lg:pt-8",
        }}
        className={`flex flex-col lg:flex-row justify-center align-middle gap-2 lg:gap-6 h-auto lg:h-[600px] bg-slate-900/60 bg-blend-darken bg-cover rounded-none	`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
        }}
        header={header}
        footer={footer}
      >
        <div className="flex flex-col text-left max-w-[400px] text-white pt-2 lg:pt-4">
          <h2 className="font-medium min-[425]:font-bold text-2xl sm:text-3xl uppercase mb-5">
            {title}{" "}
            <span className="ml-8 font-medium text-2xl">
              ({release_date.slice(0, 4)})
            </span>
          </h2>

          <h4 className="font-medium text-xl">Sinopsis:</h4>
          <p className="leading-snug">{overview}</p>
          <div className="flex my-4 gap-4">
            {genres.map((genre) => (
              <Tag
                className="font-normal sm:font-medium text-sm sm:text-base px-2 sm:px-3"
                key={genre.id}
                value={genre.name}
                rounded
              ></Tag>
            ))}{" "}
          </div>
          {isFav(id) ? (
            <span
              className="text-2xl border rounded-full p-2 w-fit  bg-gray/60 bg-blend-lighten hover:scale-125	"
              onClick={() => removeFav(id)}
            >
              <BsCameraReelsFill className="text-[#4f46e5]" />
            </span>
          ) : (
            <span
              className="text-2xl border hover:border-[#4f46e5] rounded-full p-2 w-fit hover:scale-125 "
              onClick={() => addFav(movie)}
            >
              <BsCameraReels />
            </span>
          )}
        </div>
      </Card>
    </>
  );
}
