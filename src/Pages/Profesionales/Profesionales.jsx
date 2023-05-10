import { Subtitulo } from "../../componentes/Subtitulo/Subtitulo";
import { ProfesionalCard } from "./components/ProfesionalCard";

export const Profesionales = () => {
  return (
    <div id="profesionales" className="flex flex-col px-4 sm:px-10 md:px-20 py-10 items-center h-screen overflow-x-hidden">
      <Subtitulo value="Professional" className="font-extrabold text-3xl sm:text-4xl py-4 mx-auto" />
      <p className="py-5 text-center">Explore the portfolios of our professionals.</p>
      <div className="flex flex-col sm:flex-row w-full justify-center ">
        <ProfesionalCard
          fullname="Cecilia Martinez"
          role="Software Developer"
          src="../../img/cecicash.png"
          label={"Go"}
          to={"/professionalprofile/cecilia-martinez/aboutme"}
          className="sm:w-1/2 md:w-auto mx-auto"
        />
        <ProfesionalCard
          fullname="Fernando Longin"
          role="Software Developer"
          src="../../img/ferbigmoji.png"
          label={"Go"}
          to={"/professionalprofile/fernando-longin/aboutme"}
          className="sm:w-1/2 md:w-auto mx-auto"
        />
      </div>
    </div>
  );
};
