
import HTMLFlipBook from 'react-pageflip';
import Navbar from "../Navbar/Navbar";
import Franja from "../Franja/Franja";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import './BlogPost.css';
import { tpDtmResponse, tpTextLibro } from '../../types/typesComponents';
import { fetchDefault } from '../../helpers/Server';


import portImg from "../../../src/assets/ImgLibro/portada.jpeg"


const BlogPost = () => {
  const [data, setData] = useState<tpTextLibro[]>([]);
  const [current, setCurrent] = useState<tpTextLibro | null>(null);
  const handleBookInit = () => {
    // console.log('El libro se ha inicializado.');
  };

  useEffect(() => {
    const api = async () => {
      const text: tpTextLibro[] = []
      fetchDefault("/text_libro/read", {}, (d: tpDtmResponse) => {
        if(!d.bag) return 
        for (let index = 0; index < d.bag.length; index++) {
          const element: {id: number , title: string, subtitle: string, content: string, image: string } = d.bag[index];
          const r = "src/text_libro/";
          let image: string =  r + element.image
          let content: string[] =  JSON.parse(JSON.parse(element.content))
          const value = { 
            id: element.id,
            title: element.title,
            subtitle: element.subtitle,
            content: content,
            imagenSrc: image
          }
          text.push(value)
        }
        setData(text);
        setCurrent(text[0])
      }) 
    };
    api();
    // eslint-disable-next-line
  }, []);




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
                <img src={portImg} alt="" />
                <div className="ctOverlayBook">
                    <div className="titleCortoPor">
                        <h1>{current?.title}</h1>
                        <h3>{current?.subtitle}</h3>
                    </div>
                    <p>Elisabet Coll-Vinent</p>
                </div>
            </div>
        </div>
    </div>
    <div className="demoPage" >
      <div className="port">

        <div className="titlePortal2">
          <div className="ctOverlayBook">
          <img src={portImg} alt="" />
          </div>
        </div>
      </div>
    </div>

    {current?.content ? current?.content.map((content, index) => (
     
        <div className="demoPage" >
          <div className="marco">
            <div className="titlePortal">
              {index == 0 ? (
                <div className="imgLibro">
                  <img src="../../../src/assets/ImgLibro/1.jpg" alt="" />
                </div>
              ) : <></>}
              <div className="titlePortal">
                {content}
              </div>


            </div>
          </div>

        </div>
          
    )) : <></>}
<div className="demoPage">
            <div className="port">

              <div className="titlePortal2">
              <img src="../../../src/assets/ImgLibro/portada.jpeg" alt="" />
                <div className="ctOverlayBook">

                </div>
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

          {/* 
          <div className="demoPage" >
            <div className="marco">
              <div className="titlePortal">
                <div className="imgLibro">
                  <img src="../../../src/assets/ImgLibro/1.jpg" alt="" />
                </div>
                <div className="titlePortal">
                  <h4>TIPS BIENESTAR. ARTICULO 1.</h4>
                  <h3>PARAR </h3>
                  <p>En las experiencias de bienestar que organizamos desde @almacadaques uno de los elementos. </p>

                </div>


              </div>
            </div>

          </div>
          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">
<p> más importantes que promovemos es PARAR.</p>
                <p>5 tips para parar y dedicarte tiempo para ti:</p>
                <h3>1.Establece límites:  </h3>
                <p>Parar y establecer límites te permite mantener un equilibrio entre tus responsabilidades y tu bienestar.
                  Al establecer límites, evitas el agotamiento y el estrés excesivo, lo que te permite tener más energía y disfrutar de la vida.</p>
                <h3>2. Prioriza tu bienestar: </h3>
                <p>Dedicarte tiempo para ti te ayuda a cuidar de tu salud física y mental.
                  Al hacerlo, fortaleces tu sistema inmunológico, reduces el riesgo de enfermedades relacionadas con el estrés y mejora tu estado de ánimo.</p>

              </div>
            </div>

          </div>
          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">

                <h3>3. Fomenta la creatividad </h3>
                <p>Al parar y dedicarte tiempo para ti, estimulas tu creatividad y exploras nuevas ideas. La creatividad es fundamental para resolver problemas, encontrar nuevas soluciones y mejorar tu calidad de vida.</p>
                <h3>4. Mejora tus relaciones</h3>
                <p>Al cuidarte a ti mism@, tienes más energía y disposición para relacionarte con los demás de manera saludable.
                  Tener tiempo para ti te permite recargar energías y estar presente en tus relaciones, lo que fortalece los vínculos afectivos.</p>

              </div>
            </div>

          </div>

          <div className="demoPage" >

            <div className="marco">
              <div className="titlePortal">

                <h3>5. Autoconocimiento y crecimiento personal </h3>
                <p>Parar y dedicarte tiempo para ti te ayuda a conocerte mejor, identificar tus necesidades y objetivos personales.
                  El autoconocimiento es la base para el crecimiento personal y el logro de metas, lo que te lleva a una vida más plena y satisfactoria.</p>

                <p>¿Y tu, te permites parar? </p>
                <h3>@almacadaques, setiembre 2023</h3>


              </div>
            </div>

          </div>






          <div className="demoPage">
            <div className="port">

              <div className="titlePortal2">
              <img src="../../../src/assets/ImgLibro/portada.jpeg" alt="" />
                <div className="ctOverlayBook">

                </div>
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
          </div> */}



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

export default BlogPost;
