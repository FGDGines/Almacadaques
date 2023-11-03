
import { useContext } from "react";
import { GlobalContext } from "../../../../src/contexts/GlobalContext";
import { Inicio } from "../../pages/Inicio/InicioAdmin"; 
import { Agenda } from "../../pages/Agenda/AgendaAdmin";
import { Blog } from "../../pages/Blog/BlogAdmin";
import { Colaboradores } from "../../pages/Colaboradores/ColaboradoresAdmin";
import { RetirosAdmin } from "../../pages/Retiros/RetirosAdmin";
import { SobreMIAdmin } from "../../pages/SobreMI/SobreMIAdmin";
import { Login } from "../Login/Login";

const HandlerLayout = () => {
  const { layoutID } = useContext(GlobalContext);

  let screen = <div></div>;
  switch (layoutID) {
    case 16:
      screen = <div>Hola</div>;
      break;
    case 17:
      screen = <Inicio />;
      break;
    case 18:
      screen = <SobreMIAdmin />;
      break;
    case 19:
      screen = <Agenda />; 
      break;
    case 20:
      screen = <Colaboradores />; 
      break;
    case 21:
      screen = <Blog />; 
      break;
    case 22:
      screen = <RetirosAdmin />; 
      break;
    case 23:
        screen = <Login />; 
        break;
    default:
      break;
  }
  return <div>{screen}</div>;
};

export default HandlerLayout;
