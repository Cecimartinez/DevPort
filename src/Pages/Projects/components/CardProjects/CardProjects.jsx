import { ImageComponent } from "../../../../componentes/ImageComponent/ImageComponent";
import { TagSkills } from "../TagSkills/TagSkills";

export const CardProjects = ({ title, description, tags, src }) => {
  return (
    <div className="bg-transparent">
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <a href="#" className="block w-full h-full">
          <ImageComponent
            src={src}
            className="object-contain w-full h-40 sm:h-full"
          />

          <div className="p-4 bg-white">
            <h3 className="mb-2 text-xl font-bold text-[#9C9C9C]">
              {title}
            </h3>

            <section className="my-2 py-2">
              <p className="font-light text-black-400 dark:text-black-300 text-sm">
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
