import { Link } from "react-router-dom";
import MovieSlide from "./MovieSlide";

export default function Home() {
  return (
    <>
      <div className="flex w-screen mb-6 ">
        <MovieSlide />
      </div>
      <div className="flex sm:flex-col md:flex-row justify-around gap-10">
        <div className="flex flex-col border border-solid w-96 ">
          <div className="flex justify-center py-3">
            <h3 className="text-xl font-bold">Películas Populares</h3>
          </div>
          <ul className="m-0 list-none border-1 surface-border border-round p-3 flex flex-col justify-right gap-2 w-full md:w-30rem">
            <li>
              <Link
                to="/detail"
                className="p-2 flex flex-row items-center align-middle justify-between gap-8"
              >
                <div className="flex items-center gap-2">
                  <img
                    alt="user.name"
                    src="https://primefaces.org/cdn/primereact/images/usercard.png"
                    style={{ width: "32px" }}
                  />
                  <span className="font-bold">Movie Title</span>
                </div>
                <i
                  className="pi pi-chevron-right"
                  style={{ color: "var(--primary-color)" }}
                ></i>
              </Link>
            </li>
            <li>
              <Link
                to="/detail"
                className="p-2 flex flex-row items-center align-middle justify-between gap-8"
              >
                <div className="flex items-center gap-2">
                  <img
                    alt="user.name"
                    src="https://primefaces.org/cdn/primereact/images/usercard.png"
                    style={{ width: "32px" }}
                  />
                  <span className="font-bold">Movie Title</span>
                </div>
                <i
                  className="pi pi-chevron-right"
                  style={{ color: "var(--primary-color)" }}
                ></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col border border-solid w-96">
          <div className="flex justify-center py-3">
            <h3 className="text-xl font-bold">Películas Mejor Puntuadas</h3>
          </div>
          <ul className="m-0 list-none border-1 surface-border border-round p-3 flex flex-col justify-right gap-2 w-full md:w-30rem">
            <li>
              <Link
                to="/detail"
                className="p-2 flex flex-row items-center align-middle justify-between gap-8"
              >
                <div className="flex items-center gap-2">
                  <img
                    alt="user.name"
                    src="https://primefaces.org/cdn/primereact/images/usercard.png"
                    style={{ width: "32px" }}
                  />
                  <span className="font-bold">Movie Title</span>
                </div>
                <i
                  className="pi pi-chevron-right"
                  style={{ color: "var(--primary-color)" }}
                ></i>
              </Link>
            </li>
            <li>
              <Link
                to="/detail"
                className="p-2 flex flex-row items-center align-middle justify-between gap-8"
              >
                <div className="flex items-center gap-2">
                  <img
                    alt="user.name"
                    src="https://primefaces.org/cdn/primereact/images/usercard.png"
                    style={{ width: "32px" }}
                  />
                  <span className="font-bold">Movie Title</span>
                </div>
                <i
                  className="pi pi-chevron-right"
                  style={{ color: "var(--primary-color)" }}
                ></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
