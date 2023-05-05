import { Link } from "react-router-dom";
import { ImageComponent } from "../../../componentes/ImageComponent/ImageComponent";
import PropTypes from 'prop-types';

export const ProfesionalCard = ({fullname, role, src , label, to}) => {
  return (
    <div className="flex flex-col w-full h-full md:flex-row gap-2  py-5 px-8 shadow-md rounded-xl m-7 items-center justify-center">
      <div className="flex items-center justify-center md:w-3/4">
        <ImageComponent
          className={`w-32 h-32 `}
          href=""
          src={src}
        />
      </div>

      <div className="flex flex-col items-center justify-center md:w-2/3">
        <h4 className="font-semibold text-center text-2xl md:text-left mb-2 md:mb-4">{fullname}</h4>
        <p className="text-ml font-medium">{role}</p>
        <Link to={to}
          value="More..."
          className="w-20 h-7 text-white text-center  text-xl mx-4 my-3 duration-200 hover:scale-105 border bg-[#564dfb] rounded-full"
        >{label}</Link>
      </div>
    </div>
  );
};


ProfesionalCard.propTypes = {
  fullname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired}