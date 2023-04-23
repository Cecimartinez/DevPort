import React from "react";
import FormacionItem from "./Components/FormacionItem"
import Foto_CV from "../../assets/Foto_CV.jpg"

const Formacion = () => {
  const experiencia = [
    {
      año: "2023 - Present",
      institucion: "ExxonMobil",
      titulo: "Software Analyst Trainee",
    }
  ];

  const data = [
    {
      año: "2021 - 2024",
      institucion: "UADE",
      titulo: "Lic. en Sistemas",
    },
    {
      año: "2015 - 2020",
      institucion: "Maria Montessori School",
      titulo: "Bilingue - Bachiller Comunicación",
    },
  ];

  const certificaciones = [
    {
      año: "2015 - 2020",
      institucion: "Maria Montessori School",
      titulo: "Bilingue - Bachiller Comunicación"
    }
  ];

  return (
    <div>
      <div id="formacion" className="container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline">
          Experiencia
        </h1>
        {experiencia.map((item, idx) => (
          <FormacionItem
            key={idx}
            año={item.año}
            institucion={item.institucion}
            titulo={item.titulo}
            imagen={Foto_CV}
          />
        ))}
        <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline">
          Educación
        </h1>
        {data.map((item, idx) => (
          <FormacionItem
            key={idx}
            año={item.año}
            institucion={item.institucion}
            titulo={item.titulo}
            imagen={item.imagen}
          />
        ))}
        <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline mt-8">
        Licencias y Certificaciones
        </h1>
        {certificaciones.map((item, idx) => (
          <FormacionItem
            key={idx}
            año={item.año}
            institucion={item.institucion}
            titulo={item.titulo}
            imagen={item.imagen}
          />
      ))}
      </div>
    </div>
  );
};

export default Formacion;
