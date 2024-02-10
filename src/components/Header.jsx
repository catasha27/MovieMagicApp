import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const itemRenderer = (item) => (
    <a className="flex items-center p-menuitem-link">
      <span className="mx-1">{item.label}</span>
    </a>
  );
  const items = [
    {
      label: "Home",
      command: () => {
        navigate("/");
      },
      template: itemRenderer,
    },
    {
      label: "Últimos Lanzamientos",
      command: () => {
        navigate("/latest-movies");
      },
      template: itemRenderer,
    },
    {
      label: "Populares",
      command: () => {
        navigate("/populars");
      },
      template: itemRenderer,
    },
    {
      label: "Favoritas",
      command: () => {
        navigate("/favorites");
      },
      template: itemRenderer,
    },
    {
      label: "Buscar",
      command: () => {
        navigate("/search");
      },
      template: itemRenderer,
    },
  ];

  const start = (
    <div className="flex flex-row items-center sm:flex-col sm:pl-10 ">
      <img
        alt="logo"
        src="/movie-favicon.svg"
        className="logo mr-5 mb-2 h-14 sm:h-16"
      ></img>
      <h1 className="flex flex-col min-[400px]:flex-row title1 text-3xl min-[400px]:text-4xl sm:text-5xl">
        <span>Movie</span>
        <span>Magic</span>{" "}
      </h1>
    </div>
  );

  return (
    <div className="w-full mb-0 sticky top-0 z-10">
      <Menubar
        model={items}
        start={start}
        pt={{
          popupIcon: "h-20 w-20 text-[#4f46e5] ",
          button: "focus:ring-0 active:ring-0 hover:ring-0",
        }}
        className="rounded-none justify-between pr-10"
      />
    </div>
  );
}
