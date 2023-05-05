import FormacionItem from "./Components/FormacionItem";
//   return (
//     <div
//       id="formacion"
//       className="container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4 "
//     >
//       <FormacionItem
//         año="2023 - Present"
//         institucion="UADE"
//         titulo="Lic. en Sistemas"
//       />
//       {/* <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline">
//         Educación
//       </h1> */}

//       {/* <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline mt-8">
//         Licencias y Certificaciones
//       </h1> */}
//       <FormacionItem
//         año="2015 - 2020"
//         institucion="Maria Montessori School"
//         titulo="Bilingue - Bachiller Comunicación"
//       />
//     </div>
//   );
// };

export const Formacion = () => {
  return (
    <div className=" flex-col container  px-4 py-8 m-auto p-4 w-full ">
      <FormacionItem
        año=" 2023 - Present"
        institucion=" UADE "
        titulo=" Lic. en Sistemas "
      />

      <FormacionItem
        año=" 2023 - Present"
        institucion=" UADE "
        titulo=" Lic. en Sistemas "
      />

      <FormacionItem
        año=" 2023 - Present"
        institucion=" UADE "
        titulo=" Lic. en Sistemas "
      />

      <FormacionItem
        año=" 2023 - Present"
        institucion=" UADE "
        titulo=" Lic. en Sistemas "
      />
    </div>
  );
};
