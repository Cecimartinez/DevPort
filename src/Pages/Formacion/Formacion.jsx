import { professionals } from "../../Mock/professionalsMock";
import { useParams } from "react-router-dom";
import FormacionItem from "./Components/FormacionItem";

export const Formacion = () => {
  const { id: professionalId } = useParams();

  const professional = professionals.find(
    (professional) => professional.professionalId === professionalId
  );

  return (
    <div className="container mx-auto px-4 max-w-4xl h-screen overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <div className="w-full">
          {professional && (
            <ul className="mt-6 flex justify-center items-center flex-col gap-1">
              {professional.experience.map((experience, index) => (
              <FormacionItem 
                  key={index}
                  period={experience.period}
                  company={experience.company}
                  position={experience.position}
                  workimage={experience.workimage}
                  tags={experience.tags}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

