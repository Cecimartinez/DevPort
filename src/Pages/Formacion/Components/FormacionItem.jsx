import { Outlet } from "react-router-dom";

const FormacionItem = ({ period, company, position, workimage, tags}) => {

  return (
    <div className="w-full my-10 py-4 px-6 my-2 rounded-md shadow-md md:flex h-full overflow-y-auto ">
      <div className="md:w-1/6 md:pr-4 md:flex-shrink-0">
        <div className="bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
          {workimage}
        </div>
      </div>
      <div className="flex-1 md:ml-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="text-lg font-medium px-6 pt-2 bg-indigo-800 text-white rounded-md mb-2 md:mb-0 md:mr-2 md:px-4">{company}</div>
          <div className="text-lg mt-4 text-black-500">{period}</div>
        </div>
        <div className="text-lg mt-2">{position}</div>
        <div className="flex flex-wrap justify-end mt-4">
          {tags.map((tag) => (
            <span className="px-4 py-2 text-base rounded-full text-indigo-500 border border-indigo-500 mr-2 mb-2" key={tag.tag}>{tag.tag}</span>
          ))}
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default FormacionItem;
