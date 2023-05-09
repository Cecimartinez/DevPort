import { useParams } from "react-router-dom";
import { CardProjects } from "./components/CardProjects/CardProjects";
import { professionals } from "../../Mock/professionalsMock";
export const Projects = () => {
  const { id: professionalId } = useParams();

  const professional =professionals.find(
    (professional) => professional.professionalId === professionalId
  );

  return (
    <div className=" flex  h-full overflow-y-auto  justify-center container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4 ">
      {professional.projects.map((projects, index) => (
        <CardProjects
          key={index}
          title={projects.title}
          description={projects.description}
          tags={projects.tags}
          src={projects.src}
        />
      ))}
    </div>
  );
};
