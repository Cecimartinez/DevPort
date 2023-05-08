const FormacionItem = ({ año, institucion, titulo, imagen }) => {
  return (
    <div class="m-5 h-30 border-2 rounded-md w-full shadow-md">
      <div class="flex flex-row items-center justify-center h-full space-x-5 w-full">
        <div class="m-5 w-20 h-16 bg-gray-300 rounded-full flex items-center justify-center">{imagen}</div>
        <div class="flex flex-col space-y-3 w-full">
          <div class="flex justify-between">
            <div class="px-6 pt-0 h-6 bg-indigo-800 text-white rounded-md">{institucion}</div>
            <span class="mr-10">{año}</span>
          </div>
          <div class="flex items-center justify-between">
          <div class="mr-10 p-6 pt-0  h-6 bg-gray-300 rounded-md">{titulo}</div>
            <div class="flex mr-10">
              <span class="px-4 py-2 text-base rounded-full text-indigo-500 border border-indigo-500 undefined ">Metodologias Agiles</span>
              <span class="px-4 py-2 text-base rounded-full text-indigo-500 border border-indigo-500 undefined ">Pro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



/*
FormacionItem.propTypes = {
  año: PropTypes.string.isRequired,
  institucion: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string,
};*/

export default FormacionItem;
