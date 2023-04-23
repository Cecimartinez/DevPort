import { Subtitulo } from "../../componentes/Subtitulo/Subtitulo";
import { ProfesionalCard } from "./components/ProfesionalCard";

export const Profesionales = () => {
  return (
    <div className="flex flex-col p-5 items-center h-screen w-screen text-white">
      
      <Subtitulo value="Profesionales" className=" font-extrabold text-2xl py-4"/>

      <p className="py-5 text-center">Explora los portafolios de nuestros profesionales.</p>
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        <ProfesionalCard />
        <ProfesionalCard />
      </div>
    </div>
  );
};
