import { ImageComponent } from "../../../../componentes/ImageComponent/ImageComponent";
import { TagSkills } from "../TagSkills/TagSkills";

export const CardProjects = ({ number, title, description, tags, src }) => {
  return (
    <div className="projects  bg-transparent flex justify-center px-3 py-2 flex-row content-center items-center ">
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-96 w-60">
        <a href="#" className="block w-full h-full">
          <ImageComponent
            src={"../../img/cecicash.png"}
            className="object-contain w-full max-h-40"
          />

          <div className="w-full h-full p-4 bg-white white:bg-gray-800">
            <p className=" text-indigo-500 text-md font-bold">{number}</p>
            <h3 className="mb-2 text-xl font-bold text-[#9C9C9C]">{title}</h3>

            <section className="my-2 py-2">
              <p className="font-light text-gray-400 dark:text-gray-300 text-sm">
                {description}
              </p>
            </section>
            
            
            <div className="flex flex-wrap h-20 items-end my-2 justify-end">
              {tags.map((tag) => (
                <TagSkills nameSkill={tag.tag} key={tag.tag} />
              ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
