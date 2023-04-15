import {  Subtitulo } from "../../componentes";
import { FormLogin } from "./Components/FormLogin/FormLogin";

export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Subtitulo />
      <div>
        <div className="flex flex-col w-full max-w-md px-4 py-8 ligth:bg-white rounded-lg shadow bg-[#535353] sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Login To Your Account
          </div>
          <div className="mt-8">
            <FormLogin/>
          </div>
          <div className="flex items-center justify-center mt-6">
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
            >
              <span className="ml-2">You don&#x27;t have an account?</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
