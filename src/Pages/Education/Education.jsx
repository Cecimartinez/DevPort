import { useParams } from "react-router-dom";
import { professionals } from "../../Mock/professionalsMock";
import FormacionItem from "../Formacion/Components/FormacionItem";
// import { ProgressPorcentageEducation } from "./components/ProgressPorcentageEducation";

export const Education = () => {
  const { id: professionalId } = useParams();

  const professional = professionals.find(
    (professional) => professional.professionalId === professionalId
  );

  return (
    <div className="container mx-auto mt-5 px-4 max-w-4xl h-screen overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <div className="rounded-lg shadow w-full mt-5">
          {professional && (
            <>
              <ul className="flex my-10  justify-center items-center flex-col gap-10">
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
      {/* <ProgressPorcentageEducation /> */}
    </div>
  );
};
