import { ImageComponent } from "../ImageComponent/ImageComponent";
import { ListItems } from "../ListItems/ListItems";
import React, { useState } from "react";

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="bg-[#4339ff]  shadow relative py-6 px-5 ">
        <div className="container-nav mx-auto flex px-8 xl:px-0">
          <div className="flex flex-grow items-center">
            <ImageComponent
              className="w-8 h-8"
              src="../../img/icono.png"
              alt=""
              href=""
            />
          </div>
          <div className="flex flex-grow items-center"><h3 className="text-white text-start font-bold">devPort</h3></div>
          <div className="flex lg:hidden">
            <img
              src="../../img/menu.svg"
              className="h-6 w-6 text "
              onClick={toggleMenu}
            />
          </div>
          <div
            className={`lg:flex  flex-grow lg:bg-none  justify-between absolute lg:relative lg:top-0  left-0  top-20 w-full lg:w-auto items-center py-14 lg:py-0 px-8 sm:px-24 lg:px-0 ${
              isNavOpen ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col  lg:flex-row  mb-8 lg:mb-0">
              <ListItems />
            </div>

            <div className="flex flex-col lg:flex-row text-center  mb-8 lg:mb-0">
              <a
                href="#"
                className="text-white border border-white py-2.5 px-5 rounded-md hover:bg-white hover:text-[#4339ff] transition duration-500 ease-in-out lg:mr-4 top-2 "
              >
                Iniciar sesión
              </a>
              <a
                href="#"
                className="text-white bg-[#564dfb] border border-[#564dfb] py-2.5 px-5 rounded-md hover:bg-[#635bfc] transition duration-500 ease-in-out my-2 "
              >
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
