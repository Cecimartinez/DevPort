import { CardProjects } from "./components/CardProjects/CardProjects";

export const Projects = () => {
  return (
    <div className=" flex justify-center container mx-auto px-4 py-8 max-w-[1040px] m-auto md:pl-20 p-4 ">
        <CardProjects/>
        <CardProjects/>
        <CardProjects/>
      </div>
  );
};
