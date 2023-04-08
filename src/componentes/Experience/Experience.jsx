import html from "../../assets/html.png"
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";

const Experience = () => {
  const softSkills = [
    {id: 1,src: html},
    {id: 2,src: css},
    {id: 3,src: javascript},
    {id: 4,src: reactImage},
    {id: 5,src: tailwind},
    {id: 6,src: github},
  ];

  const hardSkills =[
    {id: 1, src: html},
  ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tecnologías
          </p>
          <p className="py-6">Soft Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-4 px-8 sm:px-0">
          {softSkills.map(({ id, src }) => (
            <div
              key={id}
              className={`hover:scale-105 duration-500 py-2`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
            </div>
          ))}
        </div>

        <div>
          <p className="py-6">Hard Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-4 px-8 sm:px-0">
          {hardSkills.map(({ id, src }) => (
            <div
              key={id}
              className={`hover:scale-105 duration-500 py-2`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;