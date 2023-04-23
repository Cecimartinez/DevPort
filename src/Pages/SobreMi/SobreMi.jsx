import PersonalInfo from "./Components/PersonalInfo";
import Foto_CV from "../../assets/Foto_CV.jpg"

export const SobreMi = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline">Sobre mi</h1>
      <PersonalInfo name="Cecilia Ayelen" surname="Martinez" email="" linkedin="" phone="" location="Buenos Aires" imageSrc={Foto_CV}/>
      <PersonalInfo name="Fernando José" surname="Longin" email="ferlongin@hotmail.com" linkedin="www.linkedin.com/in/fernando-josé-longin" phone="+54 9 11 5586-5874" location="Buenos Aires" imageSrc={Foto_CV}/>
    </div>
  );
};
