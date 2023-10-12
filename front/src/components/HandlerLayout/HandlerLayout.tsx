import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Contactar from "../Contactar/Contactar";
import BlogPost from "../BlogPost/BlogPost";
import ExperienciasDeBienestar from "../ExperienciasDeBienestar/ExperienciasDeBienestar";
import { ExperienciasDeMedida } from "../ExperienciasDeMedida/ExperienciasDeMedida";
import { Colaboradores } from "../Colaboradores/Colaboradores";
import Blog from "../Blog/Blog";
import CoachingBienestar from "../CoachingBienestar/CoachingBienestar";
import CoachingInternacional from "../CoachingInternacional/CoachingInternacional";

const HandlerLayout = () => {
  const { layoutID } = useContext(GlobalContext);

  let screen = <div></div>;
  switch (layoutID) {
    case 0:
      screen = <div>Hola</div>;
      break;
    case 1:
      screen = <Home />;
      break;
    case 2:
      screen = <AboutMe />;
      break;
    case 3:
      screen = <Contactar />;
      break;
    case 4:
      screen = <CoachingBienestar />;
      break;
    case 5:
      screen = <BlogPost />;
      break;
    case 6:
      screen = <ExperienciasDeBienestar />;
      break;
    case 7:
      screen = <Blog />;
      break;
    case 8:
      screen = <ExperienciasDeMedida />;
      break;
    case 9:
      screen = <Colaboradores />;
      break;
    case 10:
      screen = <CoachingInternacional />;
      break;

    default:
      break;
  }
  return <div>{screen}</div>;
};

export default HandlerLayout;
