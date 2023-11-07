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
            <div className="titlePortal">
              <h3>Portada del libro</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>
        <div className="demoPage" >
        <div className="port">
          
            <div className="titlePortal">
              <h3>capitulo 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>

        <div className="demoPage" >
        <div className="port">
        
            <div className="titlePortal">
              <h3>capitulo 2</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>

        <div className="demoPage" >
        <div className="port">
        
            <div className="titlePortal">
              <h3>capitulo 3</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>

        <div className="demoPage" >
        <div className="port">

            <div className="titlePortal">
              <h3>capitulo 4</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>
        <div className="demoPage">
        <div className="port">
         
            <div className="titlePortal">
              <h3>Capitulo 5</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>
        <div className="demoPage">
        <div className="port">
        
            <div className="titlePortal">
              <h3>capitulo 6</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>
        <div className="demoPage">
        <div className="port">
        
            <div className="titlePortal">
              <h3>capitulo 7</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>
        <div className="demoPage">
        <div className="port">
        
            <div className="titlePortal">
              <h3>capitulo 8</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>
        <div className="demoPage">
        <div className="port">
        <div className="imgLibro">
            <img src="../../../src/assets/background/1.foto.jpg" alt="" />
          </div>
            <div className="titlePortal">
              <h3>capitulo 9</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur minus numquam a modi, doloremque iure blanditiis dignissimos, expedita iste accusantium architecto odit, aut soluta. Tempora autem blanditiis minima minus?</p>
            </div>
          </div>
        </div>
        
      </HTMLFlipBook>

      <Footer />
    </div>
  );
};

export default BlogPost;
