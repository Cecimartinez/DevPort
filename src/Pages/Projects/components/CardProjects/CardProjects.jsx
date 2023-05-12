import { ImageComponent } from "../../../../componentes/ImageComponent/ImageComponent";
import { TagSkills } from "../TagSkills/TagSkills";

export const CardProjects = ({ title, description, tags, src }) => {
  return (
    <div className="bg-transparent">
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <a href="#" className="block w-full h-full">
          <div className="w-full h-40 sm:h-64 relative">
            <ImageComponent
              src={src}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          <div className="p-4 bg-[#212224]">
            <h3 className="mb-2 text-xl font-bold text-[#53f]">
              {title}
            </h3>

            <section className="my-2 py-2">
              <p className="font-light text-black-400 dark:text-black-300 text-sm text-white">
                {description}
              </p>
            </section>

            <div className="flex flex-wrap h-20 sm:h-auto items-end my-2 justify-end">
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
