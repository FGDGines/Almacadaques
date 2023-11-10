import React, { useRef, useState } from 'react';
import { textLibro } from '../../data/TextLibro';
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

  const pageSize = 25;
  

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

          {textLibro.map((page, index) => (
            <div className="demoPage" key={index}>
              {page.imageSrc && (
                <div className="marco">
                  <div className="titlePortal">
                    <img src={page.imageSrc} alt="" className="imgLibro" />
                    {page.title && <h3>{page.title}</h3>}
                    {page.subtitle && <h4>{page.subtitle}</h4>}
                    {page.content && page.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                  </div>
                </div>
              )}
            </div>
          ))}




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
          <div className="carduser">
            <ul className='UlLista'>
              <a href="" className='EnlacesItem'>5 Tips de Bienestar</a>
              <a href="" className='EnlacesItem'>5 Tips para Parar</a>
              <a href="" className='EnlacesItem'>5 tips de Abundancia</a>
              <a href="" className='EnlacesItem'>5 Tips de Bienestar</a>
              <a href="" className='EnlacesItem'>5 Tips para Parar</a>
              <a href="" className='EnlacesItem'>5 tips de Abundancia</a>
              <a href="" className='EnlacesItem'>5 Tips de Bienestar</a>
              <a href="" className='EnlacesItem'>5 Tips para Parar</a>
              <a href="" className='EnlacesItem'>5 tips de Abundancia</a>
              <a href="" className='EnlacesItem'>5 Tips de Bienestar</a>
              <a href="" className='EnlacesItem'>5 Tips para Parar</a>
              <a href="" className='EnlacesItem'>5 tips de Abundancia</a>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
