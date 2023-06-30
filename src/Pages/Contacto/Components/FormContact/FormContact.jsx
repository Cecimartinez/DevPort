import { formContact } from "../../../../api/formContact.api";
import { useState } from "react";

export const FormContact = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Variable de estado para el estado de la respuesta
  console.log("Me traigo el token una vez que estoy logeado")
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDlmMTg5Mzc2YjE3Nzg5MjUzNDA4NGUiLCJuYW1lIjoiQ2VjaWxpYSIsImxhc3RuYW1lIjoiTWFydGluZXoiLCJlbWFpbCI6Im1hcnRpbmV6Y2VjaWxpYTI3MDdAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkWXk3b0ZpLjQwZlNxUHNPN2N1bU41T1RuZ280VkxkWnlBZFd3RTdXTWZBOTlvb0dBdFhxMVMiLCJfX3YiOjAsImlhdCI6MTY4ODE1NTU3NywiZXhwIjoxNjg4MjQxOTc3fQ.8Yo1b6_4tk1QaLEVT7qDezxJQLGtMtxVq-kcMZ-A-Yc";


  
  const contact = {
    email,
    fullname,
    telephone,
    message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await formContact(accessToken,contact);
    console.log(response, "response");
    console.log(response.status); // Código de estado
  
    if (response.status === 201) {
      console.log("Se guardó el token en sessionStorage");
      sessionStorage.setItem("access-token", response.token);
      alert("Formulario de contacto enviado exitosamente!");
    } else if (response.status === 400) {
      alert("Ya hay un contacto registrado con ese email");
    } else {
      alert("Ocurrió un error al enviar el formulario");
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(accessToken);

  //   const response = await formContact(accessToken, contact);
  //   console.log(response, "response");
  //   sessionStorage.setItem("access-token", response.token);
  //   console.log(response.status); // Código de estado
  // };


  

  return (
    <>
      <form 
      onSubmit={handleSubmit}
      className="w-full max-w-lg mt-10 py-4 px-5 rounded-md ">
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
              placeholder="Telephone"
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
              placeholder="Email"
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
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center ">
          <div className="md:w-1/3 ">
            <button className="shadow bg-[#53ff] hover:bg-[#5e3eff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-md"
              type="submit" onClick={handleSubmit}>Send</button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </>
  );
};