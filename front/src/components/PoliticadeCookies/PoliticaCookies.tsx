import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PoliticaCookies.css"

import { useState } from 'react';

type PoliticasAbiertasType = {
  [key: string]: boolean;
};


function PoliticaCookies() {
  const [politicasAbiertas, setPoliticasAbiertas] = useState<PoliticasAbiertasType>({});

  const handleButtonClick = (id: string) => {
    setPoliticasAbiertas((prevPoliticas) => ({
      ...prevPoliticas,
      [id]: !prevPoliticas[id],
    }));
  };
  return (
    <>
      <Navbar />
      <div className="containerCookies">
        <h1>POLÍTICA DE COOKIES</h1>
        <p><a href="" className="enlace"> https://almacadaques.com </a></p>

        <p>
          El acceso a este Sitio Web puede implicar la utilización de cookies. Las
          cookies son pequeñas cantidades de información que se almacenan en el
          navegador utilizado por cada Usuario —en los distintos dispositivos que
          pueda utilizar para navegar— para que el servidor recuerde cierta
          información que posteriormente y únicamente el servidor que la
          implementó leerá. Las cookies facilitan la navegación, la hacen más
          amigable, y no dañan el dispositivo de navegación.
        </p>
        <p>
          Las cookies son procedimientos automáticos de recogida de información
          relativa a las preferencias determinadas por el Usuario durante su
          visita al Sitio Web con el fin de reconocerlo como Usuario, y
          personalizar su experiencia y el uso del Sitio Web, y pueden también,
          por ejemplo, ayudar a identificar y resolver errores.
        </p>
        <p>
          La información recabada a través de las cookies puede incluir la fecha y
          hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha
          estado en el Sitio Web y los sitios visitados justo antes y después del
          mismo. Sin embargo, ninguna cookie permite que esta misma pueda
          contactarse con el número de teléfono del Usuario o con cualquier otro
          medio de contacto personal. Ninguna cookie puede extraer información del
          disco duro del Usuario o robar información personal. La única manera de
          que la información privada del Usuario forme parte del archivo Cookie es
          que el usuario dé personalmente esa información al servidor.
        </p>
        <p>
          Las cookies que permiten identificar a una persona se consideran datos
          personales. Por tanto, a las mismas les será de aplicación la Política
          de Privacidad anteriormente descrita. En este sentido, para la
          utilización de las mismas será necesario el consentimiento del Usuario.
          Este consentimiento será comunicado, en base a una elección auténtica,
          ofrecido mediante una decisión afirmativa y positiva, antes del
          tratamiento inicial, removible y documentado.
        </p>
        <div className="titleCookies"> 

          <div className={`buttonCookies ${politicasAbiertas['1'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('1')} >
            <div className="imgCookies">
              <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['1'] ? 'rotated' : ''}`}/>
            </div>

            <h4>Cookies propias</h4>

          </div>

          <span className={politicasAbiertas['1'] ? 'displayBlock' : 'hide'}>
            <p>Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas
              exclusivamente por Coaching y experiencias de bienestar para el mejor funcionamiento del Sitio Web. La
              información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su
              experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio
              Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.</p>
          </span>
        </div>
        <div className="titleCookies">
          <div className={`buttonCookies ${politicasAbiertas['2'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('2')} >
            <div className="imgCookies">
              <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['2'] ? 'rotated' : ''}`}/>
            </div>

            <h4>Deshabilitar, rechazar y eliminar cookies</h4>
          </div>

          <span className={politicasAbiertas['2'] ? 'displayBlock' : 'hide'}>
            <p>El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su
              dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome,
              Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden
              diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones
              facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso
              de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la
              utilización de algunas de las prestaciones del mismo.
            </p>
            <p>Este documento de Política de Cookies ha sido creado mediante el generador de plantilla de política de
              cookies web gratis online el día 09/10/2023.</p>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { PoliticaCookies };
