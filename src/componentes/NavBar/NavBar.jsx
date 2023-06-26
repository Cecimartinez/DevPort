import { Link } from "react-router-dom";
import { ImageComponent } from "../ImageComponent/ImageComponent";
import { ListItems } from "../ListItems/ListItems";
import React, { useState } from "react";

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#212224]  shadow relative px-5 py-3">
        <div className="container-nav mx-auto flex px-8 xl:px-0">
          <div className="flex flex-grow items-center">
            <Link to="/home">
              <ImageComponent
                className="w-11 h-11"
                src="../../img/icono.png"
                alt=""
              />
            </Link>
          </div>

          <div
            className={`lg:flex  flex-grow lg:bg-none  justify-between absolute lg:relative lg:top-0  left-0  top-20 w-full lg:w-auto items-center py-14 lg:py-0 px-8 sm:px-24 lg:px-0 ${
              isNavOpen ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col  lg:flex-row  mb-8 lg:mb-0 justify-center items-center text-white font-medium">
              <ListItems />
            </div>
          </div>

          <div className="flex justify-end  text-center items-center text-white  pt-2">

        
            <Link
              to="/login"
              value="Login"
              placeholder="Login"
              className="inline-block  items-center justify-center rounded-full w-10 h-10"
            >
              <span className="material-symbols-outlined ">Login</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
