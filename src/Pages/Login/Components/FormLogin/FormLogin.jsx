import { Link } from "react-router-dom";
import { Button } from "../../../../componentes/Button/Button";

export const FormLogin = () => {
  return (
    <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-[#f3f4ff]">
      <p className="text-center text-lg font-medium">Sign in to your account</p>

    
        <label className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />
        </div>
     

      
        <label className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />
        </div>

      <ul className="text-center">
        <Link to="/contact-table" id="btn-login" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">Sign In</Link>
      </ul>

    </form>
  );
};
