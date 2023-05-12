export const ContactTable = () => {
  return (
    <div
      id="profesionales"
      className="flex flex-col px-5 md:px-20 py-10 items-center h-screen w-screen text-white"
    >
      <div className="container max-w-3xl px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-normal text-left  uppercase bg-[#212224]  border-b border-gray-200"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-normal text-left  uppercase bg-[#212224]  border-b border-gray-200"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-normal text-left  uppercase bg-[#212224]  border-b border-gray-200"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-normal text-left  uppercase bg-[#212224]  border-b border-gray-200"
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-4 md:px-5 md:py-5 text-sm md:text-base bg-[#212224]  border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#" className="relative block">
                            <span className="material-symbols-outlined">account_circle</span>
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className=" whitespace-no-wrap">
                            Jean marc
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <p className=" whitespace-no-wrap">Admin</p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <p className=" whitespace-no-wrap">
                        12/09/2020
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-white">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-[#53f] rounded-full opacity-50"
                        ></span>
                        <span className="relative">Leído</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#" className="relative block">
                          <span className="material-symbols-outlined">account_circle</span>
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className=" whitespace-no-wrap">
                            Marcus coco
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <p className=" whitespace-no-wrap">
                        Designer
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <p className=" whitespace-no-wrap">
                        01/10/2012
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-white">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-[#53f] rounded-full opacity-50"
                        ></span>
                        <span className="relative">Leído</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#" className="relative block">
                          <span className="material-symbols-outlined">account_circle</span>
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className=" whitespace-no-wrap">
                            Ecric marc
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <p className=" whitespace-no-wrap">
                        Developer
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <p className=" whitespace-no-wrap">
                        02/10/2018
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-white">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-[#53f] rounded-full opacity-50"
                        ></span>
                        <span className="relative">Leído</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#" className="relative block">
                          <span className="material-symbols-outlined">account_circle</span>
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className=" whitespace-no-wrap">
                            Julien Huger
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <p className=" whitespace-no-wrap">User</p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <p className=" whitespace-no-wrap">
                        23/09/2010
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-[#212224]  border-b border-gray-200">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-white">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-[#53f] rounded-full opacity-50"
                        ></span>
                        <span className="relative">Leído</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
