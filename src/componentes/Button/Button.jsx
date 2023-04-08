// export const Button = ({value, className, id}) => {
//   return (
//     <button className={className} id={id}>
//     {value}
//     </button>
//   );
// };

import { PropTypes } from "prop-types";

export const Button = ({ type, value , onClick}) => {
  return (
    <div className="col-span-2 text-right">
      <button
        type={type}
        onClick={onClick}
        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:border-[#564dfb]  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >{value}
      
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

