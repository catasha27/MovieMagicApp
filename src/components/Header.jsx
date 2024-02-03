import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const itemRenderer = (item) => (
    <a className="flex items-center p-menuitem-link">
      <span className="mx-2">{item.label}</span>
    </a>
  );
  const items = [
    {
      label: "Home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Ultimos Lanzamientos",
      command: () => {
        navigate("/latest-movies");
      },
    },
    {
      label: "Populares",
      command: () => {
        navigate("/populars");
      },
    },
    {
      label: "Favoritos",
      command: () => {
        navigate("/favorites");
      },
    },
    {
      label: "Buscar",
      command: () => {
        navigate("/search");
      },
    },
  ];

  const start = (
    <div className="flex flex-col mr-5">
      <img
        alt="logo"
        src="/movie-favicon.svg"
        height="40"
        className="mr-2 mb-2"
      ></img>
      <h1 className="font-bold">MOVIE MAGIC</h1>
    </div>
  );

  return (
    <div className="w-screen mb-0 sticky top-0">
      <Menubar model={items} start={start} />
    </div>
  );
}
