import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import reactImage from "../../../assets/react.png";
import github from "../../../assets/github.png";
import tailwind from "../../../assets/tailwind.png";

const Experience = () => {
  const softSkills = [
    { id: 1, src: html },
    { id: 2, src: css },
    { id: 3, src: javascript },
    { id: 4, src: reactImage },
    { id: 5, src: tailwind },
    { id: 6, src: github },
  ];

  return (
    <div
      name="experience"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="flex justify-start">
        {softSkills.map(({ id, src }) => (
          <div
            key={id}
            className={`hover:scale-105 duration-500 px-5 py-2 justify-center`}
          >
            <img src={src} alt="" className="w-20 h-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
