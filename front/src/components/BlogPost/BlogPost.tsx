import React, { useRef, useState } from 'react';

import HTMLFlipBook from 'react-pageflip';
import Navbar from "../Navbar/Navbar";
import Franja from "../Franja/Franja";
import Footer from "../Footer/Footer";
import './BlogPost.css';

const BlogPost = () => {
  const htmlFlipBook = React.useRef<HTMLFlipBook | null>(null);

  const handleBookInit = () => {
    console.log('El libro se ha inicializado.');
  };


  return (
    <div className="BlogPost">
      <Navbar />
      <Franja text="Tips de Bienestar" />
      <div className="BookItem">
        <HTMLFlipBook
          width={500}
          height={600}
          className={"libro"}
          style={{
            width: "99vw",
            height: "500px",
          }}
          startPage={0}
          size={"stretch"}
          minWidth={200}
          maxWidth={400}
          minHeight={400}
          maxHeight={600}
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
          ref={htmlFlipBook}
        >



          <div className="demoPage" >
            <div className="port">
              <div className="titlePortal2">
                <img src="../../../src/assets/background/fondo-libro.jpg" alt="" />
                <div className="ctOverlayBook">
                  <h1>Almacadaqués</h1>
                  <p>Elisabet Coll-Vinent</p>
                </div>
              </div>
            </div>
          </div>
          <div className="demoPage" >
            <div className="port">

              <div className="titlePortal2">
                <img src="../../../src/assets/background/fondo-libro.jpg" alt="" />
                <div className="ctOverlayBook">

                </div>
              </div>
            </div>
          </div>

          <div className="demoPage" >
            <div className="marco">

              <div className="titlePortal">
                <img src="../../../src/assets/FotosRetiros/img1Libro.jpg" alt="" className='imgLibro' />
                <h3>TIPS BIENESTAR. ARTICULO 1.</h3>
                <h4>PARAR</h4>
                <p>En las experiencias de bienestar que organizamos desde @almacadaques uno de los elementos más importantes que promovemos es PARAR.</p>
              </div>
            </div>
          </div>

          <div className="demoPage" >
            <div className="marco">

              <div className="titlePortal">
                <p> 5 tips para parar y dedicarte tiempo para ti:</p>
                <h3>1.Establece límites:</h3>
                <p>Parar y establecer límites te permite mantener un equilibrio entre tus responsabilidades y tu bienestar.
                  Al establecer límites, evitas el agotamiento y el estrés excesivo, lo que te permite tener más energía y disfrutar de la vida.</p>
                <h3>2. Prioriza tu bienestar: </h3>
                <p> Dedicarte tiempo para ti te ayuda a cuidar de tu salud física y mental.
                  Al hacerlo, fortaleces tu sistema inmunológico, reduces el riesgo de enfermedades relacionadas con el estrés y mejora tu estado de ánimo.</p>
              </div>
            </div>
          </div>

          <div className="demoPage" >
            <div className="marco">

              <div className="titlePortal">
                <h3>3.Fomenta la creatividad</h3>
                <p>Al parar y dedicarte tiempo para ti, estimulas tu creatividad y exploras nuevas ideas. La creatividad es fundamental para resolver problemas, encontrar nuevas soluciones y mejorar tu calidad de vida.</p>
                <h3>4.Mejora tus relaciones</h3>
                <p>Al cuidarte a ti mism@, tienes más energía y disposición para relacionarte con los demás de manera saludable.
                  Tener tiempo para ti te permite recargar energías y estar presente en tus relaciones, lo que fortalece los vínculos afectivos.</p>
              </div>
            </div>
          </div>
          <div className="demoPage">
            <div className="marco">

              <div className="titlePortal">

                <h3>5.Autoconocimiento y crecimiento personal</h3>
                <p> Parar y dedicarte tiempo para ti te ayuda a conocerte mejor, identificar tus necesidades y objetivos personales.
                  El autoconocimiento es la base para el crecimiento personal y el logro de metas, lo que te lleva a una vida más plena y satisfactoria.
                  ¿Y tu, te permites parar? </p>

                <h3>@almacadaques, setiembre 2023</h3>
              </div>
            </div>
          </div>


          <div className="demoPage">
            <div className="port">

              <div className="titlePortal2">
                <img src="../../../src/assets/background/fondo-libro.jpg" alt="" />
                <div className="ctOverlayBook">

                </div>
              </div>
            </div>
          </div>
          <div className="demoPage">
            <div className="port">

              <div className="titlePortal2">
                <img src="../../../src/assets/background/fondo-libro.jpg" alt="" />
                <div className="ctOverlayBook">

                </div>
              </div>
            </div>
          </div>



        </HTMLFlipBook>
        <div className="ItemBookUser">
          <div className="itemLibroUsuario">
             
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
