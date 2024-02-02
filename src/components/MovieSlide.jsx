import { Card } from "primereact/card";
import { Link } from "react-router-dom";

export default function Home() {
  const header = (
    <img
      className="bg-repeat-x h-60"
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );

  return (
    <div className="flex flex-row justify-center w-full pt-0 mt-0">
      <Card title="Movie Title" header={header}>
        <Link
          to="/detail"
          rel="noopener noreferrer"
          severity="info"
          size="small"
          className="p-button font-bold"
        >
          Más info
        </Link>
      </Card>
    </div>
  );
}
