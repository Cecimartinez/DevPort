import { useState } from "react";

export const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.lastname}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-white bg-[#212224] "
            placeholder="Contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#53f] text-white rounded-md"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};
