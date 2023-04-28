import { Nav, Subtitulo } from "../../componentes";
import { FormContact } from "./Components/FormContact/FormContact";

export const Contacto = () => {
  return (
    <div
      id="contacto"
      className="container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4"
    >
      <Subtitulo
        className="text-base text-gray-600 text-center font-medium"
        value="Fernando Longin"
      />

      <Nav/>

      <FormContact />
    </div>
  );
};
