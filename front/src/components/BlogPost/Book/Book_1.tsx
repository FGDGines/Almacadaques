import HTMLFlipBook from 'react-pageflip';
import Navbar from "../../Navbar/Navbar";
import Franja from "../../Franja/Franja";
import Footer from "../../Footer/Footer";
import { textos } from '../../../data/textos';
import { useContext } from "react";
import { GlobalContext } from '../../../contexts/GlobalContext';
import '../BlogPost.css';


const Book1 = () => {
  const { setLayoutID } = useContext(GlobalContext);

  const handleBookInit = () => {
    console.log('El libro se ha inicializado.');
  };



  const { languageFlag } =useContext(GlobalContext)
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
                    <h3>{textos[languageFlag].textostipsabundancia}</h3>
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
                <h3>{textos[languageFlag].textoqueeslaabundancia}</h3>
                <p>{textos[languageFlag].textoenfunciondequien}</p>
              </div>
            </div>
          </div>
          <div className="demoPage" >
            <div className="marco">
              <div className="titlePortal">
                <p>{textos[languageFlag].textoscuandosientoabundancia}</p>
                <h3>{textos[languageFlag].textosllenatumente}</h3>
                <p>{textos[languageFlag].textosamenudoconectamos}</p>
                <p>{textos[languageFlag].textoslarealidadesneutra}</p>
                <h3>{textos[languageFlag].textospontedellado}</h3>
                <p>{textos[languageFlag].textossabiasquelaoportunidad}</p>

              </div>
            </div>

          </div>

          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">
                <p>{textos[languageFlag].textossabiasquetumiedo}</p>
                <p>{textos[languageFlag].textosestasatisfaccion}</p>
                <h3>{textos[languageFlag].textosentrenalacompresion}</h3>
                <p>{textos[languageFlag].textoscomprensioneslocontrario}</p>


              </div>
            </div>

          </div>

          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">
                <h3>{textos[languageFlag].textosagradececadamañana}
                  </h3>
                <p>{textos[languageFlag].textosrecuerdaquesi}</p>
                <p>{textos[languageFlag].textosdehechoelagradecimiento}</p>
                <h3>{textos[languageFlag].textosmueveteactuaprueba}</h3>
              </div>
            </div>
          </div>
          <div className="demoPage" >
            <div className="marco">
              <div className="titlePortal">
                <p>{textos[languageFlag].textoslaabundanciaparavalientes}</p>
                <p>{textos[languageFlag].textosdescubreelverdadero}</p>
                <p>{textos[languageFlag].textosenconclusionbusca}</p>
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
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(5)}>{textos[languageFlag].textostipsparar}</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(33)}>{textos[languageFlag].tipsabundancia}</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(34)}>{textos[languageFlag].tipsemociones}</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(35)}>{textos[languageFlag].textostipslidiardiadia}</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(36)}>{textos[languageFlag].textostipsparafluir}</a>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export { Book1 };
