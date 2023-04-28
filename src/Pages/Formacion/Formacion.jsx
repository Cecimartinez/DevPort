import FormacionItem from "./Components/FormacionItem";
import { Subtitulo } from "../../componentes/Subtitulo/Subtitulo";
import { Nav } from "../../componentes";

export const Formacion = () => {
  // const experiencia = [
  //   {
  //     año: "2023 - Present",
  //     institucion: "ExxonMobil",
  //     titulo: "Software Analyst Trainee",
  //   },
  // ];

  

  return (
    <div
      id="formacion"
      className="container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4 "
    >
      <Subtitulo className="text-base text-gray-600 text-center font-medium"
        value="Fernando Longin"/>

      <Nav/>
      {/* <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline">
        Experiencia
      </h1> */}
        <FormacionItem
          
          año="2023 - Present"
          institucion="UADE"
          titulo="Lic. en Sistemas"
        />
      {/* <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline">
        Educación
      </h1> */}
      
      {/* <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline mt-8">
        Licencias y Certificaciones
      </h1> */}
        <FormacionItem
          año="2015 - 2020"
          institucion="Maria Montessori School"
          titulo="Bilingue - Bachiller Comunicación"
          
        />
    </div>
  );
};
