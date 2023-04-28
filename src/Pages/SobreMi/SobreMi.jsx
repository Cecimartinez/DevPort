import PersonalInfo from "./Components/PersonalInfo";
import Foto_CV from "../../assets/Foto_CV.jpg";
import { Subtitulo } from "../../componentes/Subtitulo/Subtitulo";
import { Nav } from "../../componentes";

export const SobreMi = () => {
  return (
    <div
      id="sobremi"
      className="container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4  "
    >
      <Subtitulo
        className="text-base text-gray-600 text-center font-medium"
        value="Fernando Longin"
      />
      <Nav />
      {/*<PersonalInfo name="Cecilia Ayelen" surname="Martinez" email="" linkedin="" phone="" location="Buenos Aires" imageSrc={Foto_CV} professionalProfile="" strengths="" languages=""/>*/}
      <PersonalInfo
        name="Fernando José"
        surname="Longin"
        email="ferlongin@hotmail.com"
        linkedin="www.linkedin.com/in/fernando-josé-longin"
        phone="+54 9 11 5586-5874"
        location="Buenos Aires"
        imageSrc={Foto_CV}
        professionalProfile="Software Analyst Trainee specialized in agile methodologies"
        strengths={["Agile Software Development", "Scrum Framework"]}
        languages={[
          "Spanish - Native",
          "English - Bilingual",
          "Portugese - Full Professional Proficiency",
        ]}
        certifications={[
          { title: "React Nanodegree", institution: "Udacity", year: "2021" },
          { title: "Vue.js Course", institution: "Platzi", year: "2018" },
        ]}
      />
    </div>
  );
};
