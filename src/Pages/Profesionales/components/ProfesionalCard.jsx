import { Button } from "../../../componentes/Button/Button";
import { ImageComponent } from "../../../componentes/ImageComponent/ImageComponent";

export const ProfesionalCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 py-5 px-8 shadow-md rounded-lg m-7 items-center justify-center">
      <div className="flex items-center justify-center md:w-3/4">
        <ImageComponent
          className={`w-24 h-24 `}
          href=""
          src="../../img/cont.png"
        />
      </div>

      <div className="flex flex-col items-center justify-center md:w-2/3">
        <h4 className="font-semibold text-center md:text-left mb-2 md:mb-4">Cecilia Martinez</h4>
        <p className="text-xs">Software Developer</p>
        <Button
          value="More..."
          className="w-20 h-7  text-sm  mx-4 my-3 duration-200 hover:scale-105 border bg-[#564dfb] rounded-md"
        />
      </div>
    </div>
  );
};

