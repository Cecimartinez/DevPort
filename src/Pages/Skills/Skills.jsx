import { Nav } from "../../componentes/Nav/Nav";
import { Subtitulo } from "../../componentes/Subtitulo/Subtitulo";
import Experience from "./Components/Experience";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4 "
    >
      <Subtitulo
        className="text-base text-gray-600 text-center font-medium"
        value="Fernando Longin"
      />

      <Nav/>

      <Experience />
    </div>
  );
};
