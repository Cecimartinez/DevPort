import { useParams } from "react-router-dom";
import { professionals } from "../../Mock/professionalsMock";
import FormacionItem from "../Formacion/Components/FormacionItem";

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

      <div className="p-4 m-auto mt-5 border border-[#53f] rounded-lg shadow w-full">
        <div>
          <span className="text-xs font-light inline-block py-2 px-3 uppercase rounded-full text-white bg-[#53f]">Progress Percentage</span>
        </div>
        <div className="w-full h-6 bg-gray-400 rounded-full mt-3">
          <div className="w-3/4 h-full text-center text-sm text-white bg-[#53f] rounded-full">70%</div>
        </div>
      </div>

      <div className="p-4 mt-10 m-auto border border-[#53f] rounded-lg shadow w-full">
        <div>
          <span className="text-xs font-light inline-block py-2 px-3 uppercase rounded-full text-white bg-[#53f]">Missing Percentage</span>
        </div>
        <div className="w-full h-6 bg-gray-400 rounded-full mt-3">
          <div className="w-1/4 h-full text-center text-sm text-white bg-[#53f] rounded-full">30%</div>
        </div>
      </div>

      <div className="mt-10 text-right">
        <span className="text-xs font-light inline-block py-2 px-3 uppercase rounded-full text-white bg-[#53f]">Average: 9.0</span>
      </div>



    </div>
  );
};
