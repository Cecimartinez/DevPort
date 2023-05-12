import { useParams } from "react-router-dom";
import { CardProjects } from "./components/CardProjects/CardProjects";
import { professionals } from "../../Mock/professionalsMock";

export const Projects = () => {
  const { id: professionalId } = useParams();

  const professional = professionals.find(
    (professional) => professional.professionalId === professionalId
  );

  return (
    <div className="container mx-auto px-4  max-w-[1040px] m-auto mb-20 md:pl-10 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        {professional.projects.map((project, index) => (
          <CardProjects
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            src={project.src}
          />
        ))}
      </div>
    </div>
  );
};
