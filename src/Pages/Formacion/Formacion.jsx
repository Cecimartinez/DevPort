import React from "react";
import FormacionItem from "./Components/FormacionItem"

const Formacion = () => {
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
          Formación
        </h1>
        {data.map((item, idx) => (
          <FormacionItem
            key={idx}
            año={item.año}
            institucion={item.institucion}
            titulo={item.titulo}
          />
        ))}
        <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline mt-8">
        Certificaciones
        </h1>
        {certificaciones.map((item, idx) => (
          <FormacionItem
            key={idx}
            año={item.año}
            institucion={item.institucion}
            titulo={item.titulo}
          />
      ))}
      </div>
    </div>
  );
};

export default Formacion;
