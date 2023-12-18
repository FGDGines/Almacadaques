
// import HTMLFlipBook from 'react-pageflip';
import Navbar from "../Navbar/Navbar";
import Franja from "../Franja/Franja";
import Footer from "../Footer/Footer";
import { useEffect, useRef, useState } from "react";
import './BlogPost.css';
import { tpDtmResponse, tpTextLibro } from '../../types/typesComponents';
import { fetchDefault } from '../../helpers/Server';


// import portImg from "../../../src/assets/ImgLibro/portada.jpeg"

const BlogPost = () => {
  const [data, setData] = useState<tpTextLibro[]>([]);
  const [current, setCurrent] = useState<tpTextLibro | null>(null);
  const absoluteElementRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const changeBock = (book: tpTextLibro) => {
    setCurrent(book)
  } 


  useEffect(() => {
    const api = async () => {
      const text: tpTextLibro[] = []
      fetchDefault("/text_libro/read", {}, (d: tpDtmResponse) => {
        if(!d.bag) return 
        for (let index = 0; index < d.bag.length; index++) {
          const element: {id: number , title: string, subtitle: string, content: string, imagen_src: string } = d.bag[index];
          const r = "src/text_libro/";
          let image: string =  r + element.imagen_src
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
  
  useEffect(() => {
    function handleResize() {
      if (absoluteElementRef.current && footerRef.current) {
        const absoluteElementHeight = absoluteElementRef.current.offsetHeight;
        footerRef.current.style.marginTop = `${absoluteElementHeight}px`;
      }
    }
  
    // Llama a la función directamente para manejar el tamaño inicial
    handleResize();
  
    window.addEventListener('resize', handleResize);
  
    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="BlogPost">
      <Navbar />
      <Franja text="Tips de Bienestar" />
      <div className="BookItem">

        {current && current.content.length > 0 ?
        
          <div className="book">

            {/* se construye como un i dos l  */}
            {/* para que muestre en las dos caras primero pondremos cuatro y cambiaremoss a dos l un i */}
            <input type="radio" name="page" id="page-1" defaultChecked />
            <label className="page cover" htmlFor="page-3">
              <div>
                <h3>{current.title}</h3>
                <h3>{current.subtitle}</h3>
              </div>
              <p className='cuenta'>Elisabet Coll-Vinent</p>
            </label>
            <label className="page cover" htmlFor="page-1"></label>

            <input type="radio" name="page" id={`page-3`} />
            {(() => {
              const pages = [];
              let i: number = 0
              for (let index = 0; index < current?.content.length/2; index+=1) {
                const element = current.content[i];
                const next = current.content[i + 1]
                i+=2
                if(index == 0) { // la primera cara tiene una foto
                  pages.push(
                    <>
                      <label className="page" htmlFor={`page-${index * 2 + 5}`}>
                        <div className="imgLibro">
                          <img src={current.imagenSrc} alt="" />
                        </ div>
                        <div dangerouslySetInnerHTML={{ __html: element }} />
                      </label>
                      <label className="page" htmlFor={`page-${index * 2 + 3}`}><div dangerouslySetInnerHTML={{ __html: next }} /></label>
                      <input type="radio" name="page" id={`page-${index * 2 + 5}`} />
                    </>
                  );
                }
                else {
                  // para cuando tiene una cantidad impar le sobra un elemeto al final y hay que controlarlo
                  if (index < current.content.length/2 || current.content.length % 2 != 0) {
                    pages.push(
                      <>
                        <label className="page" htmlFor={`page-${index * 2 + 5}`}>
                          <div dangerouslySetInnerHTML={{ __html: element }} />
                        </label>
                        <label className="page" htmlFor={`page-${index * 2 + 3}`}><div dangerouslySetInnerHTML={{ __html: next }} /></label>
                        <input type="radio" name="page" id={`page-${index * 2 + 5}`} />
                      </>
                    );
                  } else {
                    pages.push(
                      <>
                      <label className="page" htmlFor={`page-${index * 2 + 5}`}>
                        <p></p>
                      </label>
                      <label className="page" htmlFor={`page-${index * 2 + 3}`}><div dangerouslySetInnerHTML={{ __html: element }} /></label>
                      <input type="radio" name="page" id={`page-${index * 2 + 5}`} />
                      </>
                    )
                  }
                }
              }
              return pages;
            })()}
            {/* <input type="radio" name="page" id={`page-${current?.content.length * 2 + 3}`} /> */}
            <label className="page cover" htmlFor={`page-${(current?.content.length % 2 != 0 ? current.content.length + 1 : current.content.length)  + 5}`}></label>
            <label className="page cover" htmlFor={`page-${(current?.content.length % 2 != 0 ? current.content.length + 1 : current.content.length)  + 3}`}>
              <p className='cuenta '>Elisabet Coll-Vinent</p>
            </label>
            <input type="radio" name="page" id={`page-${(current?.content.length % 2 != 0 ? current.content.length + 1 : current.content.length)  + 5}`} />
          </div>

        : <></>}

      <div className="ItemBookUser absolute-element" ref={absoluteElementRef}>
        <h3>Lista de libros</h3>
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

      <div className="separator"></div>
      <div className="footer" ref={footerRef}>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;
