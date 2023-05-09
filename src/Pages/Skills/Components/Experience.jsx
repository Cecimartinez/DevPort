/*const Experience = ({imagen}) => {

  return (
    <img src={imagen} className="flex mx-3 my-3 sm:p-4 sm:h-52 rounded-2xl sm:flex-row h-12 sm:h-full sm:w-40 rounded-xl" />

  );
};

export default Experience;
*/
const Experience = ({ imagen }) => {
  return (
    <img src={imagen} className="shadow-md flex mx-3 my-3 sm:p-4 sm:h-52 rounded-2xl sm:flex-row h-12 sm:h-full sm:w-40 rounded-xl" alt="experience" />
  );
};

export default Experience;

