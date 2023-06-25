export const ProgressPorcentageEducation = () => { 

  return(
  <>
    <div className="p-4 mt-5 m-auto border border-[#53f] rounded-lg shadow w-full">
        <div>
          <span className="text-xs font-light inline-block py-2 px-3 uppercase rounded-full text-white bg-[#53f]">
            Progress Percentage
          </span>
        </div>
        <div className="w-full h-6 bg-gray-400 rounded-full mt-3">
          <div className="w-2/4 h-full text-center text-sm text-white bg-[#53f] rounded-full">
            50%
          </div>
        </div>
      </div>

      <div className="p-4 mt-10 m-auto border border-[#53f] rounded-lg shadow w-full">
        <div>
          <span className="text-xs font-light inline-block py-2 px-3 uppercase rounded-full text-white bg-[#53f]">
            Missing Percentage
          </span>
        </div>
        <div className="w-full h-6 bg-gray-400 rounded-full mt-3">
          <div className="w-2/4 h-full text-center text-sm text-white bg-[#53f] rounded-full">
            50%
          </div>
        </div>
      </div>

      <div className="mt-10 text-right">
        <span className="text-xs font-light inline-block py-2 px-3 uppercase rounded-full text-white bg-[#53f]">
          Average: 9.0
        </span>
      </div>
  </>

    
  )
}