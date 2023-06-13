import { useParams } from "react-router-dom";
import { professionals } from "../../Mock/professionalsMock";
import FormacionItem from "../Formacion/Components/FormacionItem";
import { ProgressPorcentageEducation } from "./components/ProgressPorcentageEducation";

export const Education = () => {
  const { id: professionalId } = useParams();

  const professional = professionals.find(
    (professional) => professional.professionalId === professionalId
  );

  return (
    <div className="container mx-auto px-4 max-w-4xl h-screen overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <div className="border border-[#53f] rounded-lg shadow w-full mt-5">
          {professional && (
            <>
              <ul className="flex justify-center items-center flex-col gap-1">
                {professional.education.map((education, index) => (
                  <FormacionItem
                    key={index}
                    period={education.period}
                    company={education.company}
                    position={education.position}
                    workimage={education.workimage}
                    tags={education.tags}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <ProgressPorcentageEducation />
    </div>
  );
};
