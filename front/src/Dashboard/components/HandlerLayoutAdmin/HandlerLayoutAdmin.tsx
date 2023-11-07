import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../src/contexts/GlobalContext";
import { InicioAdmin } from "../../pages/Inicio/InicioAdmin"; 
import { AgendaAdmin } from "../../pages/Agenda/AgendaAdmin";
import { BlogAdmin } from "../../pages/Blog/BlogAdmin";
import { ColaboradoresAdmin } from "../../pages/Colaboradores/ColaboradoresAdmin";
import { RetirosAdmin } from "../../pages/Retiros/RetirosAdmin";
import { SobreMIAdmin } from "../../pages/SobreMI/SobreMIAdmin";
import { Login } from "../Login/Login";
import { routes } from "./Routes";

const HandlerLayout = () => {
  useContext(GlobalContext);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  let screen = <div></div>;

  switch (currentPath) {
    
    case routes.inicio:
      screen = <InicioAdmin />;
      break;
    case routes.sobreMi:
      screen = <SobreMIAdmin />;
      break;
    case routes.agenda:
      screen = <AgendaAdmin />;
      break;
    case routes.colaboradores:
      screen = <ColaboradoresAdmin />;
      break;
    case routes.blog:
      screen = <BlogAdmin />;
      break;
    case routes.retiros:
      screen = <RetirosAdmin />;
      break;
    case routes.login:
      screen = <Login />;
      break;
    default:
      break;

      
  }
  console.log(currentPath);

  return <div>{screen}</div>;
};

export default HandlerLayout;
