import { Outlet } from "react-router-dom";
import { Nav } from "../../componentes";

export const ProfessionalProfile = () => {
  return (
    <>
      <header className="flex justify-center px-5 py-3">
        <Nav />
      </header>
      <Outlet />
    </>
  );
};
