import { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Contactar from '../Contactar/Contactar';
import BlogPost from '../BlogPost/BlogPost';
import ExperienciasDeBienestar from '../ExperienciasDeBienestar/ExperienciasDeBienestar';
import { ExperienciasDeMedida } from '../ExperienciasDeMedida/ExperienciasDeMedida';
import { Colaboradores } from '../Colaboradores/Colaboradores';
import Blog from '../Blog/Blog';
import CoachingBienestar from '../CoachingBienestar/CoachingBienestar';
import CoachingInternacional from '../CoachingInternacional/CoachingInternacional';
import { PoliticayPrivacidad } from '../PoliticayPriacidad/PoliticayPrivacidad';
import { PoliticaCookies } from '../PoliticadeCookies/PoliticaCookies';
import { AvisoLegal } from '../AvisoLegal/AvisoLegal';
import { BlogRetiro } from '../BlogRetiro/BlogRetiro';
import Podcast from '../Podcast/Podcast';
import  Login  from '../../../src/components/Login/Login';

const HandlerLayout = () => {
  const { layoutID } = useContext(GlobalContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Verifica si se presiona Ctrl (o Command en Mac) y la tecla 'I'
      if ((event.ctrlKey || event.metaKey) && event.key === 'i') {
        // Navega al componente Login
        window.location.href = '/Login';
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  let screen = <div></div>;
  if (window.location.pathname === '/Login') {
    screen = <Login />;
    console.log(<Login />)
    
  } else {
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
    case 11:
      screen = <PoliticayPrivacidad />;
      break;
    case 12:
      screen = <PoliticaCookies />;
      break;
    case 13:
      screen = <AvisoLegal />;
      break;
    case 14:
      screen = <BlogRetiro />;
      break;
    case 15:
      screen = <Podcast />;
      break;
    case 16:
      screen = <Login />;
      break;

    default:
      break;
  }

  return (
    <div>
      {screen}
    </div>
  );
  }
};

export default HandlerLayout;
