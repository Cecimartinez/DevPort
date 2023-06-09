import { Outlet } from "react-router-dom";

const FormacionItem = ({ period, company, position, workimage, tags}) => {

  return (
    <div className="w-full py-8  px-6 rounded-md shadow-md md:flex  border border-[#53f] ">
      <div className="md:w-1/6 md:pr-4 md:flex-shrink-0">
        <div className="bg-[#c7bcff] text-[#53f] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
          {workimage}
        </div>
      </div>
      <div className="flex-1 md:ml-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="text-lg px-6 w-auto text-center font-semibold mt-4 py-1 bg-[#323232] text-white rounded-lg mb-2 md:mb-0 md:mr-2 md:px-4">{company}</div>
          <div className="text-lg mt-4 text-[#dfd3ff]">{period}</div>
        </div>
        <div className="text-lg  text-[#ffffff] mt-2">{position}</div>
        <div className="flex flex-wrap justify-end mt-5">
          {tags.map((tag) => (
            <span className="px-4 py-1 text-base rounded-full text-white font-semibold border border-[#53f] bg-[#343434] mr-2 mb-2" key={tag.tag}>{tag.tag}</span>
          ))}
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default FormacionItem;
