import { PAGEITEMS } from "../../constants/pagination.const";
import { PageItems } from "../PageItems/PageItems";
import { useState } from "react";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="text-sm font-medium justify-center items-center h-full mt-0  text-center text-gray-500 border-b border-gray-200 ">
      <button
        className="md:hidden block text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none mx-auto"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {showMenu ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          )}
        </svg>
      </button>
      <ul
        className={`${
          showMenu ? "block" : "hidden"
        } md:flex md:flex-row md:items-center md:justify-center md:w-auto w-full md:text-lg text-base justify-end`}
      >
        {PAGEITEMS.map((item) => (
          <PageItems
            key={item.propName}
            id={item.id}
            label={item.label}
            to={item.propName}
            className="block font-medium px-4 py-2 hover:bg-gray-100"
            onClick={handleItemClick} // Nueva prop para cerrar el menú al hacer click
          />
        ))}
      </ul>
    </div>
  );
};
