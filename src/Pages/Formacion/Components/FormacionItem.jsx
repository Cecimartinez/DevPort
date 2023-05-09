
import { Outlet } from "react-router-dom";

const FormacionItem = ({ period, company, position, workimage, tags}) => {

  return (
    <div className="w-full  py-4 px-6 my-2 rounded-md shadow-md md:flex h-full overflow-y-auto ">
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
        {/* <ul className="list-disc list-inside text-sm ">
            {tags.map((tag) => (
              <span className="px-4 py-2 text-base rounded-full text-indigo-500 border border-indigo-500 mr-2" key={tag.tag}>{tag.tag}</span>
            ))}
          </ul>  */}
      </div>
      <Outlet/>
    </div>
  );
};

export default FormacionItem;
