import React from 'react';
import PropTypes from 'prop-types';

const FormacionItem = ({ año, institucion, titulo, descripcion }) => {
    return (
      <ol className="bg-white rounded-lg shadow-md p-6 m-5 flex items-center text-black">
        <li className="flex justify-between w-full">
          <div>
            <p className="text-lg font-semibold">{institucion}</p>
            <p className="text-m font-semibold">{titulo}</p>
          </div>
          <p className="text-sm mt-2 p-2 font-semibold bg-blue-900 rounded-md text-white">{año}</p>
        </li>
        <p className="mb-2">{descripcion}</p>
      </ol>
    );
  };
  
  

FormacionItem.propTypes = {
  año: PropTypes.string.isRequired,
  institucion: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default FormacionItem;
