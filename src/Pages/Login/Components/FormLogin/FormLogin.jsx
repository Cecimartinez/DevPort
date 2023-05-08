import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      // redirigir a /contact-table
      console.log("redirigiendo a /contact-table");
      navigate("/contact-table");
    } else {
      // mostrar mensaje de error
      console.log("email o contraseña incorrectos");
    }
  };

  return (
    <form
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-[#f3f4ff]"
      onSubmit={handleSubmit}
    >
      <p className="text-center text-lg font-medium">Sign in to your account</p>

      <label className="sr-only">Email</label>

      <div className="relative">
        <input
          type="email"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <label className="sr-only">Password</label>

      <div className="relative">
        <input
          type="password"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <ul className="text-center">
        <button
          type="submit"
          id="btn-login"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Sign In
        </button>
      </ul>
    </form>
  );
};
