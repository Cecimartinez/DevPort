import { Link } from "react-router-dom";
import { ImageComponent } from "../../../componentes/ImageComponent/ImageComponent";
import PropTypes from "prop-types";

export const ProfesionalCard = ({ fullname, role, src, label, to, className }) => {
  return (
    <div className={`flex flex-col sm:flex-col md:flex-row w-full h-full gap-2 py-5 lg:mx-16 md:mx-auto shadow-md rounded-xl my-7 items-center justify-center text-white ${className}`}>
      <div className="flex items-center justify-center sm:w-full md:w-3/4 max-w-full">
        <ImageComponent className={`w-32 h-32 rounded-full`} href="" src={src} />
      </div>
      <div className="flex flex-col items-center justify-center sm:w-full bg-[#212224] md:w-2/3">
        <h4 className="font-bold text-center text-[#9b7cff]  text-base sm:text-3xl md:text-left mb-2 md:mb-4">{fullname}</h4>
        <p className="text-ml font-semibold">{role}</p>
        <Link
          to={to}
          value="More..."
          className="w-20 h-9 p-1 text-white text-center text-xl mx-4 my-3 duration-200 hover:scale-105 border bg-[#564dfb] rounded-full"
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

ProfesionalCard.propTypes = {
  fullname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProfesionalCard.defaultProps = {
  className: "",
};
