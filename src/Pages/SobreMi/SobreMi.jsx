import PersonalInfo from "./Components/PersonalInfo";
import { Subtitulo } from "../../componentes/Subtitulo/Subtitulo";
import { professionals } from "../../Mock/professionalsMock";
import { useParams } from "react-router-dom";

export const SobreMi = () => {

  const { id: professionalId } = useParams();
  
  const professionalInfo = professionals.find(
    (professional) => professional.professionalId === professionalId
  );

  return (
    <div className="container mx-auto px-4  max-w-[1040px]  h-full overflow-y-auto ">
      <Subtitulo
        className="text-base text-center font-medium"
        value=""
      />
      {professionalInfo && (
        <PersonalInfo
          name={professionalInfo?.name}
          email={professionalInfo?.email}
          linkedin={professionalInfo?.linkedin}
          phone={professionalInfo?.phone}
          location={professionalInfo?.city}
          imageSrc={professionalInfo?.srcImg}
          professionalProfile={professionalInfo?.about}
          strengths={professionalInfo?.strengths}
          languages={professionalInfo?.languages}
          certifications={professionalInfo?.certifications}
        />
      )}
    </div>
  );
};
