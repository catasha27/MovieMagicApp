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
      label: "Últimos Lanzamientos",
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
      label: "Favoritas",
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
      <img alt="logo" src="/movie-favicon.svg" className="mr-2 mb-2 h-14"></img>
      <h1 className="font-bold text-2xl">MOVIE MAGIC</h1>
    </div>
  );

  return (
    <div className="w-screen mb-0 sticky top-0 z-5">
      <Menubar model={items} start={start} />
    </div>
  );
}
