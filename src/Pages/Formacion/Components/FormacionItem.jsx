
import PropTypes from 'prop-types';

const FormacionItem = ({ año, institucion, titulo, imagen}) => {
    return (
      <ol className="bg-white rounded-lg shadow-md p-6 m-5 flex items-center text-black">
        <li className="flex w-full">
          <div className="flex-shrink-0 mr-4">
            <img src={imagen} className="w-30 h-16" />
          </div>
          <div>
            <p className="text-lg font-semibold">{institucion}</p>
            <p className="text-m font-semibold">{titulo}</p>
          </div>
          <p className="text-sm p-2 font-semibold bg-blue-900 rounded-md text-white ml-auto">{año}</p>
        </li>
      </ol>
    );
};

FormacionItem.propTypes = {
  año: PropTypes.string.isRequired,
  institucion: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string,
};

export default FormacionItem;