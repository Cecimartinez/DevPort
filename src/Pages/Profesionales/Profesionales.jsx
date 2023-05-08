import { Subtitulo } from "../../componentes/Subtitulo/Subtitulo";
import { ProfesionalCard } from "./components/ProfesionalCard";

export const Profesionales = () => {
  return (
    <div id="profesionales" className="flex flex-col px-4 sm:px-10 md:px-20 py-10 items-center h-screen" style={{ overflowY: "auto" }}>
      <Subtitulo value="Professional" className="font-extrabold text-3xl sm:text-4xl py-4" />
      <p className="py-5 text-center">Explore the portfolios of our professionals.</p>
      <div className="flex flex-col sm:flex-row w-full justify-center m-7">
        <ProfesionalCard
          fullname="Cecilia Martinez"
          role="Software Developer"
          src="../../img/cecicash.png"
          label={"..."}
          to={"/professionalprofile/cecilia-martinez/aboutme"}
          className="sm:w-1/2 md:w-auto"
        />
        <ProfesionalCard
          fullname="Fernando Longin"
          role="Software Developer"
          src="../../img/ferbigmoji.png"
          label={"..."}
          to={"/professionalprofile/fernando-longin/aboutme"}
          className="sm:w-1/2 md:w-auto"
        />
      </div>
    </div>
  );
};
