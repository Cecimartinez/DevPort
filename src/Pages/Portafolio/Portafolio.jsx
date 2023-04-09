import html from "../../assets/html.png"
import css from "../../assets/css.png";

export const Portafolio = () => {

  const portfolios = [
    {id: 1,src: html},
    {id: 2,src: css},
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolios
          </p>
          <p className="py-6">Explora los portafolios de nuestro profesionales.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="w-20 mx-auto" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Mas información</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
