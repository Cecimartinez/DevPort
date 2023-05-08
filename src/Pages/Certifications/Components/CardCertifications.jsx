import { ImageComponent } from "../../../componentes/ImageComponent/ImageComponent";
import { Subtitulo } from "../../../componentes/Subtitulo/Subtitulo";
import { Title } from "../../../componentes/Title/Title";

export const CardCertifications = () => {
  return (
    <div className="flex flex-col sm:flex-row shadow-lg mx-3 my-3 sm:p-4 sm:h-52 rounded-2xl">
      <section className="w-full sm:w-52 h-36 sm:h-full rounded-xl">
        <ImageComponent
          className="w-full h-full object-cover"
          href=""
          src="../../img/cecicash.png"
        />
      </section>

      <main className="flex flex-col justify-center p-4 sm:p-0">
        <header className="py-2 sm:py-0">
          <Title
            className="text-lg font-semibold text-center sm:text-left"
            value="Fullstack Python"
          />
          <Subtitulo
            className="text-sm font-semibold text-center sm:text-left text-[#5a5a5a]"
            value="Codo a codo"
          />
        </header>
        <p className="bg-gray-200 rounded-full text-center py-1 px-4 text-sm font-semibold text-[#5a5a5a] self-center mt-2 sm:mt-auto">
          March 2022
        </p>
      </main>
    </div>
  );
};
