import PersonalInfo from "./Components/PersonalInfo";
import Foto_CV from "../../assets/Foto_CV.jpg";
import { Subtitulo } from "../../componentes/Subtitulo/Subtitulo";
import { professionals } from "../../Mock/professionalsMock";
import { useParams} from "react-router-dom";

export const SobreMi = () => {
  const { id: professionalId } = useParams();
  console.log(professionalId);
  const professionalInfo = professionals.find(
    (professional) => professional.professionalId === professionalId
  );

  console.log(professionalInfo, "professional");

  return (
    <div
      id="sobremi"
      className="container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4  "
    >
      <Subtitulo
        className="text-base text-gray-600 text-center font-medium"
        value=""
      />
      {professionalInfo && (
        <PersonalInfo
          name={professionalInfo?.name}
          email={professionalInfo?.email}
          linkedin={professionalInfo?.linkedin}
          phone={professionalInfo?.phone}
          location={professionalInfo?.city}
          imageSrc={Foto_CV}
          professionalProfile={professionalInfo?.about}
          strengths={professionalInfo?.strengths}
          languages={professionalInfo?.languages}
          certifications={professionalInfo?.certifications}
        />
      )}
      
    </div>
  );
};
