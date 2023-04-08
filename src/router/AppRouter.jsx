import { Navigate, Route, Routes } from "react-router-dom";
// import {Contacto, Home, Formacion, Login, Portafolio, Skills, SobreMi} from "../Pages";
import { ROUTE_PATHS } from "./utils/routePaths";

import {Home} from "../Pages/Home/Home";
import {SobreMi} from "../Pages/SobreMi/SobreMi";
import {Contacto} from "../Pages/Contacto/Contacto";
import {Formacion} from "../Pages/Formacion/Formacion";
import {Skills} from "../Pages/Skills/Skills";
import {Portafolio} from "../Pages/Portafolio/Portafolio";
import {Login} from "../Pages/Login/Login";




export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.SOBREMI} element={<SobreMi/>} />
        <Route path={ROUTE_PATHS.FORMACION} element={<Formacion />} />
        <Route path={ROUTE_PATHS.PORTAFOLIO} element={<Portafolio />} />
        <Route path={ROUTE_PATHS.SKILLS} element={<Skills />} />
        <Route path={ROUTE_PATHS.CONTACTO} element={<Contacto />} />
        <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />

        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    </>
  );
};
