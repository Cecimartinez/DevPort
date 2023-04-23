import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "./utils/routePaths";
import { Home } from "../Pages/Home/Home";
import { SobreMi } from "../Pages/SobreMi/SobreMi";
import { Contacto } from "../Pages/Contacto/Contacto";
import { Formacion } from "../Pages/Formacion/Formacion";
import { Skills } from "../Pages/Skills/Skills";
import { Login } from "../Pages/Login/Login";
import { Profesionales } from "../Pages/Profesionales/Profesionales";

export const AppRouter = () => {
  return (
    // Sólo debes tener un componente <BrowserRouter> en tu aplicación
      <Routes>
        {/* La ruta de inicio debe usar "index" en lugar de "path" */}
        <Route index element={<Home />} />

        {/* Las siguientes rutas deben usar "path" */}
        <Route path={ROUTE_PATHS.SOBREMI} element={<SobreMi/>} />
        <Route path={ROUTE_PATHS.FORMACION} element={<Formacion />} />
        <Route path={ROUTE_PATHS.PROFESIONALES} element={<Profesionales />} />
        <Route path={ROUTE_PATHS.SKILLS} element={<Skills />} />
        <Route path={ROUTE_PATHS.CONTACTO} element={<Contacto />} />
        <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />

        {/* Esta ruta captura cualquier ruta no definida anteriormente y redirige a la página de inicio */}
        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    
  );
};
