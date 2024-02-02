import { Card } from "primereact/card";
import { BsCameraReels, BsCameraReelsFill } from "react-icons/bs";

export default function Detail() {
  const header = (
    <img
      className="h-[30rem]"
      alt="Card"
      src="https://image.tmdb.org/t/p/original//3OdMJBOGkp62e0DfY4ZykL9RuCP.jpg"
    />
  );

  const footer = (
    <span className="flex align-middle text-white">
      <i className="pi pi-play text-xl" />
      Ver trailer
    </span>
  );

  return (
    <>
      <Card
        pt={{
          header: "flex justify-center items-center",
          body: "flex flex-row",
        }}
        className="flex flex-row justify-center align-middle bg-slate-900/60 bg-blend-darken bg-[url('https://image.tmdb.org/t/p/original//cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg')] bg-cover "
        header={header}
        footer={footer}
      >
        <div className="flex flex-col text-left max-w-[400px] text-white">
          <h2 className="font-bold text-2xl mb-5">
            Movie Title <span className="ml-8 text-l">(año)</span>
          </h2>

          <h4 className="font-bold text-l">Sinopsis</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quibusdam, enim a doloribus soluta nemo reprehenderit tenetur
            voluptatum assumenda pariatur qui eligendi libero, doloremque dolore
            delectus saepe? Minima, ipsa accusamus. Fugiat ab recusandae
            expedita nemo id vero voluptate animi, minus ad tempore quaerat
            placeat beatae quidem? Itaque dolore debitis quaerat animi. Ducimus
            laborum porro a, vel est repudiandae quo. Laudantium.
          </p>
          <ul className="mt-2">
            <h4 className="font-bold text-l">Géneros</h4>
            <li>tipo 1</li>
            <li>tipo 2</li>
            <li>tipo 3</li>
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
