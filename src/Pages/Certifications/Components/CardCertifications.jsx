import { ImageComponent } from "../../../componentes/ImageComponent/ImageComponent";
import { Subtitulo } from "../../../componentes/Subtitulo/Subtitulo";
import { Title } from "../../../componentes/Title/Title";

export const CardCertifications = ({title, institution, year, src}) => {
  return (
    <div className="flex flex-col sm:flex-row shadow-md mx-2 p-2 my-3 sm:p-4 sm:h-52 rounded-2xl">
      <section className="w-full sm:w-52 h-36 sm:h-full rounded-xl">
        <ImageComponent
          className="w-full h-full object-cover"
          href=""
          src={src}
        />
      </section>

      <main className="flex flex-col justify-center p-4 sm:p-0">
        <header className="py-2 px-2 sm:py-0">
          <Title
            className="text-sm font-semibold text-center sm:text-left"
            value={title}
          />
          <Subtitulo
            className="text-sm font-semibold text-center sm:text-left text-[#53f]"
            value={institution}
          />
        </header>
        <p className="bg-[#c9beff] rounded-full text-center py-1 px-4 text-sm font-semibold text-[#53f] self-center mt-2 sm:mt-auto">
          {year}
        </p>
      </main>
    </div>
  );
};
