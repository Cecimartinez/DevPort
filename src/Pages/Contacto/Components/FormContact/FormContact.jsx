import { formContact } from "../../../../api/formContact.api";
import { useState } from "react";

export const FormContact = () => {

  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await formContact(email, fullname, telephone,message);
    console.log(response, "response");
    sessionStorage.setItem("access-token", response.token);

  };

  return (
    <>
      <form 
      onSubmit={handleSubmit}
      className="w-full max-w-lg  py-4 px-5 rounded-md ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-[#212224]  text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="grid-first-name"
              type="text"
              placeholder="Name"
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            >
              Telephone
            </label>
            <input
              className="appearance-none block w-full bg-[#212224]  text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="grid-first-name"
              type="number"
              placeholder="telephone"
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
        </div> 


        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide  text-white text-xs font-bold mb-2"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-[#212224]  text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-[#212224]  text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500 h-24 resize-none"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center ">
          <div className="md:w-1/3 ">
            <button
              className="shadow bg-[#53ff] hover:bg-[#5e3eff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-md"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </>
  );
};
