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
import Login from '../../../src/components/Login/Login';
import { AgendaAdmin } from '../../Dashboard/pages/Agenda/AgendaAdmin';
import { BlogAdmin } from '../../Dashboard/pages/Blog/BlogAdmin';
import { ColaboradoresAdmin } from '../../Dashboard/pages/Colaboradores/ColaboradoresAdmin';
import { InicioAdmin } from '../../Dashboard/pages/Inicio/InicioAdmin';
import { RetirosAdmin } from '../../Dashboard/pages/Retiros/RetirosAdmin';
import { SobreMIAdmin } from '../../Dashboard/pages/SobreMI/SobreMIAdmin';
import { NuevosEventos } from '../../Dashboard/components/NuevosEventos/NuevosEventos';
import { FormularioRedes } from '../../Dashboard/components/Formularios/FormularioRedes/FormularioRedes';
import { FormularioTestimonios } from '../../Dashboard/components/Formularios/FormularioTestimonios/FormularioTestimonios';
import { BlogBienestar } from '../../Dashboard/components/BlogBienestar/BlogBienestar';
import { BlogPodcast } from '../../Dashboard/components/BlogPodcast/BlogPodcast';
import { FormularioEspaciosBienestar } from '../../Dashboard/components/Formularios/FormularioEspaciosBienestar/FormularioEspaciosBienestar';
import { FormularioCarrousel } from '../../Dashboard/components/Formularios/FormularioCarrousel/FormularioCarrousel';

const HandlerLayout = () => {
  const { layoutID, setLayoutID } = useContext(GlobalContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Verifica si se presiona Ctrl (o Command en Mac) y la tecla 'I'
      if ((event.ctrlKey || event.metaKey) && event.key === 'i') {
        // Navega al componente Login
        setLayoutID(16)
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
    case 17:
      screen = <InicioAdmin />;
      break;
    case 18:
      screen = <SobreMIAdmin />;
      break;
    case 19:
      screen = <AgendaAdmin />;
      break;
    case 20:
      screen = <ColaboradoresAdmin />;
      break;
    case 21:
      screen = <BlogAdmin />;
      break;
    case 22:
      screen = <RetirosAdmin />;
      break;
    case 23:
      screen = <NuevosEventos />;
      break;
    case 25:
      screen = <BlogBienestar />;
      break;
    case 26:
      screen = <BlogPodcast />;
      break;
    //Formularios
    case 24:
      screen = <FormularioRedes />;
      break;

    case 27:
      screen = <FormularioEspaciosBienestar />;
      break;

    case 28:
      screen = <FormularioTestimonios />;
      break;

    case 29:
      screen = <FormularioCarrousel />;
      break;
      
    default:
      break;
  }

  return screen
}


export default HandlerLayout;
