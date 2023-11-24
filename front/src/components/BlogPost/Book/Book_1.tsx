import HTMLFlipBook from 'react-pageflip';
import Navbar from "../../Navbar/Navbar";
import Franja from "../../Franja/Franja";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from '../../../contexts/GlobalContext';
import '../BlogPost.css';


const Book1 = () => {
  const { setLayoutID } = useContext(GlobalContext);

  const handleBookInit = () => {
    // console.log('El libro se ha inicializado.');
  };




  return (
    <div className="BlogPost">
      <Navbar />
      <Franja text="Tips de Bienestar" />
      <div className="BookItem">
        <HTMLFlipBook
          width={2500}
          height={2500}
          className={"libro"}
          style={{
            width: "85vw",
            height: "25vw",
          }}
          startPage={0}
          size={"stretch"}
          minWidth={100}
          maxWidth={3000}
          minHeight={500}
          maxHeight={5000}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={1}
          autoSize={true}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          onInit={handleBookInit}

        >



          <div className="demoPage" >
            <div className="port">
              <div className="titlePortal2">
                <img src="../../../src/assets/ImgLibro/portada.jpeg" alt="" />
                <div className="ctOverlayBook">
                  <div className="titleCortoPor">
                    <h1>Almacadaqués</h1>
                    <h3>5 Tips Abundancia</h3>
                  </div>
                  <p>Elisabet Coll-Vinent</p>
                </div>
              </div>
            </div>
          </div>
          <div className="demoPage" >
            <div className="port">

              <div className="titlePortal2">
                <img src="../../../src/assets/ImgLibro/portada.jpeg" alt="" />
                <div className="ctOverlayBook">

                </div>
              </div>
            </div>
          </div>


          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">
                <div className="imgLibro">
                  <img src="../../../../src/assets/ImgLibro/2.png" alt="" />
                </ div>
                <h3>¿Qué es la abundancia?</h3>
                <p>En función de a quien le preguntes la respuesta será una u otra.
                  Según los estoicos, la abundancia no se basa en la posesión de bienes materiales, sino en la virtud y vivir de acuerdo a la naturaleza. Para ellos, la verdadera abundancia está en tener una mente tranquila, estar en armonía con el universo y ser autosuficiente emocionalmente. Hay quien dice que la abundancia es un estado de plenitud y cercanía en todas las áreas de tu vida. Para mí, la abundancia me conecta con la felicidad. </p>


              </div>
            </div>

          </div>

          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">
                <p>cuando siento abundancia me siento feliz. Y aquí quiero proponerte 5 claves para atraer a Abundancia.</p>
                <h3>1. Llena tu mente de creencias positivas y expansivas</h3>
                <p>A menudo nos conectamos con creencias absorbidas en la infancia y otras experiencias que han dejado una impronta que sólo tiene que ver con una vivencia personal e individual y no con la realidad</p>
                <p>La realidad es neutra, observa cómo la interpretas y descubrirás el sesgo de tu mente y de tus emociones.</p>
                <h3>2. Ponte del lado de la oportunidad</h3>
                <p>¿Sabías que la oportunidad está al otro lado del miedo?.  </p>

              </div>
            </div>

          </div>

          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">
                <p>¿Sabías que tus miedos esconden tu mayor potencial?, ¿Sabías que el despliegue de tu potencial y tus dones son el camino a la abundancia Enfrentar nuestros miedos nos sitúa instantáneamente a la superación. Seguro que has experimentado más de una vez esa sensación después de haber conseguido algo que al principio te generaba temor. </p>
                <p>Esta satisfacción te da confianza y empoderamiento, porque sabes que, si lo has hecho una vez, puedes hacerlo más veces en otros ámbitos.</p>
                <h3>3. Entrena la comprensión</h3>
                <p>La comprensión es lo contrario a la envidia y se refiere al sentimiento de felicidad genuina y alegría por la felicidad del otro, en un sentido auténtico, íntegro y total, sin condicionamientos</p>


              </div>
            </div>

          </div>

          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">
                <h3>4. Agradece cada mañana y cada noche lo que tienes, lo que eres y la vida que vives</h3>
                <p>Recuerda que, si no eres feliz con lo que tienes, tampoco serás feliz con lo que no tienes. Agradecer es verte abundante ahora, en este momento, y la vida te ofrece más de lo que tienes y valoras. </p>
                <p>De hecho, el agradecimiento es una de las energías y actitudes más poderosas. Numerosos estudios de investigación sobre la felicidad detectan que uno de los pilares básicos de un sentimiento es así el agradecimiento.</p>
                <h3>5. Muévete, actúa, prueba, acierta y equivócate</h3>


              </div>
            </div>

          </div>

          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">
                <p>¡La Abundancia es para los valientes que se mueven, se lanzan, se atreven y vibran! Las personas más exitosas son las que han abierto las puertas y han salido fuera, las que se han paseado entre dificultades, retos, obstáculos, logros y pérdidas.</p>
                <p>Descubre el verdadero origen de tus bloqueos personales y abórdalo desde la raíz para desplegar todo tu potencial y alcanzar por fin la autoconfianza, la paz mental y el sentido de vida que anhelas.</p>
                <p>En conclusión, busca siempre una mejor versión de ti y la vida entenderá que ante algo mejor lo que le corresponde es lo excelente, entenderá que vives sintonizado con la abundancia.</p>
                <h3>@almacadaques, octubre 2023</h3>
              </div>
            </div>

          </div>







          <div className="demoPage">
            <div className="port">

              <div className="titlePortal2">
                <img src="../../../src/assets/ImgLibro/portada.jpeg" alt="" />
                <div className="ctOverlayBook">
                  <h3 className='FinalLibro'>© Elisabet Coll-Vinent@almacadaques.com</h3>
                </div>
              </div>
            </div>
          </div>



        </HTMLFlipBook>
        <div className="ItemBookUser">
          <div className="carduser">
            <ul className='UlLista'>
              <a href="#" className='EnlacesItem ' onClick={() => setLayoutID(5)}>5 Tips Parar</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(33)}>5 Tips Abundancia</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(34)}>5 tips Emociones</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(35)}>5 tips lidiar dia a dia </a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(36)}>5 tips para fluir</a>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export { Book1 };
