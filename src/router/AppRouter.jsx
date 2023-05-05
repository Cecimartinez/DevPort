import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { ROUTE_PATHS } from "./utils/routePaths";
import { Home } from "../Pages/Home/Home";
import { SobreMi } from "../Pages/SobreMi/SobreMi";
import { Contacto } from "../Pages/Contacto/Contacto";
import { Formacion } from "../Pages/Formacion/Formacion";
import { Skills } from "../Pages/Skills/Skills";
import { Login } from "../Pages/Login/Login";
import { Profesionales } from "../Pages/Profesionales/Profesionales";
import { Experience } from "../Pages/Experience/Experience";
import { ProfessionalProfile } from "../Pages/ProfessionalProfile/ProfessionalProfile";
import { element } from "prop-types";
import { Certifications } from "../Pages/Certifications/Certifications";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
        <Route path={ROUTE_PATHS.PROFESIONALES} element={<Profesionales />} />
        
        <Route path={`${ROUTE_PATHS.PROFESSIONALPROLFILE}/:id`} element={<ProfessionalProfile/>} >
          <Route path={`${ROUTE_PATHS.SOBREMI}`} element={<SobreMi />} />
          <Route path={`${ROUTE_PATHS.FORMACION}`} element={<Formacion />} />
          <Route path={`${ROUTE_PATHS.CERTIFICATIONS}`} element={<Certifications/>}/>
          <Route path={`${ROUTE_PATHS.SKILLS}`} element={<Skills />} />
          <Route path={`${ROUTE_PATHS.EXPERIENCE}`} element={<Experience />} />
          <Route path={`${ROUTE_PATHS.CONTACTO}`} element={<Contacto />} />
        </Route>

        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    </>
  );
};
