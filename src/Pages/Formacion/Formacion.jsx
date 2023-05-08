import FormacionItem from "./Components/FormacionItem";
import { professionals } from "../../Mock/professionalsMock";
import { useParams } from "react-router-dom";

export const Formacion = () => {
  const { id: professionalId } = useParams();
  console.log(professionalId);
  const professionalInfo = professionals.find(
    (professional) => professional.professionalId === professionalId
  );

  console.log(professionalInfo);
 
  return (
    <div className="container mx-auto px-4 max-w-4xl h-full overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-20">
        <div className="w-full mt-10">
          {professionalInfo && (
              <FormacionItem
              period={(professionalInfo?.period)}
              company={professionalInfo?.company}
              position={professionalInfo?.position}
              workimage={professionalInfo?.workimage}
              tags={professionalInfo?.tags}
              />
          )}
        </div>
      </div>
    </div>
  );
};

