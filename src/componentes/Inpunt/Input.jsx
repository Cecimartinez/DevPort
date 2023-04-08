import { PropTypes } from "prop-types";

// export const Input = ({ inputType, className, id, placeholder }) => {
//   return (
//     <input
//       inputType={inputType}
//       className={className}
//       id={id}
//       placeholder={placeholder}
//     />
//   );
// };

export const Input = ({inputType, nameType} ) => {
  console.log(inputType, nameType);
  return (
    <div className="col-span-2 lg:col-span-1">
      <div className=" relative ">
        <input
          type={inputType}
          
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#535353] text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#564dfb] focus:border-transparent"
          placeholder={nameType}
          required
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  nameType:  PropTypes.string.isRequired
};
