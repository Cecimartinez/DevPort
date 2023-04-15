import { PropTypes } from "prop-types";

export const Input = ({ inputType, nameType, id, className, value, defaultValue }) => {
  return (
    <div className="col-span-2 lg:col-span-1">
      <div className=" relative ">
        <input
          type={inputType}
          id={id}
          className={className}
          placeholder={nameType}
          value={value}
          defaultValue={defaultValue }
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  inputType: PropTypes.string,
  nameType: PropTypes.string
};
