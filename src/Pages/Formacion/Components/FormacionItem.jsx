/*const FormacionItem = ({ año, institucion, titulo, imagen }) => {
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

FormacionItem.propTypes = {
  año: PropTypes.string.isRequired,
  institucion: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string,
};

export default FormacionItem;
*/
import { Outlet } from "react-router-dom";

const FormacionItem = ({ period, company, position, workimage}) => {
  return (
    <div className="w-full px-6 my-2 rounded-md shadow-md md:flex h-full overflow-y-auto ">
      <div className="md:w-1/6 md:pr-4 md:flex-shrink-0">
        <div className="bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
          {workimage}
        </div>
      </div>
      <div className="flex-1 md:ml-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="text-lg font-medium px-6 pt-0 bg-indigo-800 text-white rounded-md">{company}</div>
          <div className="text-lg text-black-500">{period}</div>
        </div>
        <div className="text-lg mt-2">{position}</div>
        <div className="flex justify-end mt-4">
          <span className="px-4 py-2 text-base rounded-full text-indigo-500 border border-indigo-500 mr-2">
            Metodologias Agiles
          </span>
          <span className="px-4 py-2 text-base rounded-full text-indigo-500 border border-indigo-500">
            Pro
          </span>
        </div>
        {/*<ul className="list-disc list-inside text-sm ">
            {tags.map((tag) => (
              <span className="px-4 py-2 text-base rounded-full text-indigo-500 border border-indigo-500 mr-2" key={tag.tag}>{language.language}</span>
            ))}
          </ul> */}
      </div>
      <Outlet />
    </div>
  );
};

export default FormacionItem;
