import { useState } from "react";
import { crearUsuario } from "../../api/crearUsuario.api"

export const CreateAccount = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(""); // Variable de estado para el estado de la respuesta

  const usuario = {
    name,
    lastname,
    email,
    password
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await crearUsuario(name, lastname, email, password);
    console.log(response, "response");
    console.log(response.status); // Código de estado
    console.log(name, lastname, email, password);
  
    if (response.status === 200) {
      console.log("Se guardó el token en sessionStorage");
      sessionStorage.setItem("access-token", response.token);
      alert("Usuario registrado correctamente!");
    } else if (response.status === 400) {
      alert("Ya hay un usuario registrado con ese email");
    } else {
      alert("Ocurrió un error al realizar el registro");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-violet-600 to-teal-300 overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-xl shadow-lg w-full max-w-md bg-[#212224]"
      >
        <h1 className="text-2xl mb-6 text-center">Create User</h1>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-[#212224] "
            placeholder="Nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="lastname">
            Apellido
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={(e) => setLastname(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-white bg-[#212224] "
            placeholder="Apellido"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-white bg-[#212224] "
            placeholder="Correo electrónico"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-white bg-[#212224] "
            placeholder="Contraseña"
          />
        </div>
        <button
          type="submit" onClick={handleSubmit}
          className="w-full py-2 px-4 bg-[#53f] text-white rounded-md"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};
