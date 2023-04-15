import { PropTypes } from "prop-types";

export const Button = ({ type, value, onClick, className, href, id }) => {
  return (
    <div className="col-span-2 text-right">
      <button id={id} type={type} href={href} onClick={onClick} className={className}>
        {value}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};
