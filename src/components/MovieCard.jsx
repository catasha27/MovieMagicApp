import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { BsCameraReels, BsCameraReelsFill } from "react-icons/bs";

export default function MovieCard() {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );

  return (
    <>
      <Link to="/detail">
        <Card header={header}>
          <div className="flex justify-center">
            <h2 className="font-bold text-2xl mr-5">Movie Title</h2>
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
