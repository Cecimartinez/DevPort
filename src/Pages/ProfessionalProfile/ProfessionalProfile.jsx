import { Outlet } from "react-router-dom";
import { Nav } from "../../componentes";

export const ProfessionalProfile = () => {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <header className="flex justify-center ">
        <Nav />
      </header>
      <Outlet />
    </div>
  );
};
