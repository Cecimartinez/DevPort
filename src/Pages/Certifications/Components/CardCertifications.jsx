import { ImageComponent } from "../../../componentes/ImageComponent/ImageComponent";
import { Subtitulo } from "../../../componentes/Subtitulo/Subtitulo";
import { Title } from "../../../componentes/Title/Title";

export const CardCertifications = () => {
  return (
    <div className="  flex  shadow-lg mx-3 my-3  sm:p-4 sm:h-52 rounded-2xl sm:flex-row ">
      <section className=" h-36 sm:h-full sm:w-52 rounded-xl ">
        <ImageComponent
          className="w-auto h-full"
          href=""
          src="../../img/cecicash.png"
        />
      </section>

      <main className="flex flex-col flex-1 gap-5 sm:p-2 items-center">
        <header className="flex items-center justify-center py-5">
          <Title
            className="w-full text-center font-semibold text-lg px-3 py-2"
            value="Fullstack Python"
          />
          
        </header>

        <Subtitulo className="w-full h-2   rounded-2xl text-center items-center py-1 px-3 font-semibold  text-[#5a5a5a]" value="Codo a codo" />

        <p className="w-auto bg-gray-200 rounded-full text-center py-1 px-4 text-sm font-semibold text-[#5a5a5a]">
          March 2022
        </p>

      </main>
    </div>
  );
};
