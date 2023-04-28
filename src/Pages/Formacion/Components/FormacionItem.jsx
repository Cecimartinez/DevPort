import PropTypes from "prop-types";

const FormacionItem = ({ año, institucion, titulo, imagen }) => {
  return (
    <section className="rounded-lg m-5 px-6 py-3 shadow-md flex items-center text-gray-600">
        <div>
          <p className="text-base font-semibold">{institucion}</p>
          <p className="text-sm font-semibold">{titulo}</p>
        </div>
        <p className="text-xs p-4 font-semibold rounded-md  ml-auto">
          {año}
        </p>
    </section>
  );
};

FormacionItem.propTypes = {
  año: PropTypes.string.isRequired,
  institucion: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string,
};

export default FormacionItem;
