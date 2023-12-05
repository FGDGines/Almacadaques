
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

  const changeBock = (book: tpTextLibro) => {
    console.log(book)
    setCurrent(book)
  } 


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
        console.log(text)
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
     
        <div className="demoPage" key={`blog-${current.id}-${index}`}>
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
{/* 
    {current?.content && current.content.length % 2 == 0  ?(
      <div className="demoPage">
        <div className="port">

          <div className="titlePortal2">
          <img src="../../../src/assets/ImgLibro/portada.jpeg" alt="" />
            <div className="ctOverlayBook">

            </div>
          </div>
        </div>
      </div>
          
    ) : <></>} 

    {current?.content  ?(
        
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
          
    ) : <></>}  */}


      </HTMLFlipBook>
      <div className="ItemBookUser">
          <div className="carduser">
            <ul className='UlLista'>

            {data.map((text) => (
              <a href="#" key={text.id} className='EnlacesItem ' onClick={() => changeBock(text)}>{text.title}</a>
            ))}
              

              {/* <a href="#" className='EnlacesItem ' onClick={() => setLayoutID(5)}>5 Tips Parar</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(33)}>5 Tips Abundancia</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(34)}>5 Tips Emociones</a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(35)}>5 Tips lidiar dia a dia </a>
              <a href="#" className='EnlacesItem' onClick={() => setLayoutID(36)}>5 Tips para Fluir</a> */}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
