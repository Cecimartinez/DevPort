import { Subtitulo } from "../../componentes/Subtitulo/Subtitulo";
import { ProfesionalCard } from "./components/ProfesionalCard";

export const Profesionales = () => {
  return (
    <div id="profesionales" className="flex flex-col px-20 py-10 items-center h-screen w-screen">
      
      <Subtitulo value="Professional" className=" font-extrabold text-3xl py-4"/>

      <p className="py-5 text-center">Explore the portfolios of our professionals.</p>
      <div className="flex flex-col md:flex-row w-full justify-center m-7 h-auto">
        <ProfesionalCard fullname="Cecilia Martinez" role="Software Developer" src="../../img/cecicash.png " label={"..."} to="/home" />
        <ProfesionalCard fullname="Fernando Longin" role="Software Developer" src="../../img/ferbigmoji.png" label={"..."}  to="/sobremi"/>
      </div>
    </div>
  );
};
