import { Input, Subtitulo, Button } from "../../../../componentes";

// optimizar el codigo de este unmountComponentAtNode, utilizar los componente locales o generales q sean necesarios

export const FormContact = () => {
  return (
      <form>
        <div className=" bg-white w-full max-w-2xl px-5 py-10 m-auto mt-10  rounded-lg shadow">
          <div className="mb-6 text-2xl font-light text-center text-black">
            Contact us !
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  className=" rounded-lg border-transparent flex-1 bg-white appearance-none border border-gray-300 w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  id="contact-form-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 bg-[#fff] focus:ring-purple-600 focus:border-transparent"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" >
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base bg-[#fff] text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Enter your comment"
                  name="comment"
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
  );
};
