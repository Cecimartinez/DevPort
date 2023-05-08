import { ImageComponent } from "../../../../componentes/ImageComponent/ImageComponent";
import { TagSkills } from "../TagSkills/TagSkills";

export const CardProjects = () => {
  return (
    <div className="projects  bg-transparent flex justify-center px-3 py-2 flex-row content-center items-center ">
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-96 w-60">
        <a href="#" className="block w-full h-full">
          <ImageComponent
            src="../../img/cecicash.png"
            className="object-contain w-full max-h-40"
          />

          <div className="w-full p-4 bg-white white:bg-gray-800">
            <p className=" text-indigo-500 text-md font-bold">Project #1</p>
            <h3 className="mb-2 text-xl font-bold text-[#9C9C9C]">
              Calculator
            </h3>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              The new supercar is here, 543 cv and 140 000$. This is best racing
              GT about 7 years on...
            </p>
            <div className="flex flex-wrap items-center mt-4 justify-starts">
              <TagSkills nameSkill="JS" />
              <TagSkills nameSkill="React" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
