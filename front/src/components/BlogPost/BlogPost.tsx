
import HTMLFlipBook from 'react-pageflip';
import Navbar from "../Navbar/Navbar";
import Franja from "../Franja/Franja";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import './BlogPost.css';
import { tpDtmResponse, tpTextLibro } from '../../types/typesComponents';
import { fetchDefault } from '../../helpers/Server';


import portImg from "../../../src/assets/ImgLibro/portada.jpeg"
import { GlobalContext } from '../../contexts/GlobalContext';


const BlogPost = () => {
  const [data, setData] = useState<tpTextLibro[]>([]);
  const [current, setCurrent] = useState<tpTextLibro | null>(null);
  const {dataText, setDataText} = useContext(GlobalContext)
  const handleBookInit = () => {
    // console.log('El libro se ha inicializado.');
  };

  const changeBock = (book: tpTextLibro) => {
    console.log(book)
    setCurrent(book)
    setDataText(book)
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
        setData(text);
        setDataText(text[0])
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
                console.log(element, next, index)
                if(index == 0) { // la primera cara tiene una foto
                  pages.push(
                    <>
                      <label className="page" htmlFor={`page-${index * 2 + 5}`}>
                        <div className="imgLibro">
                          <img src="../../../../src/assets/ImgLibro/2.png" alt="" />
                        </ div>
                        <p>
                          <div dangerouslySetInnerHTML={{ __html: element }} />
                        </p>
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
                            <p><div dangerouslySetInnerHTML={{ __html: element }} /></p>
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

      <div className="separator"></div>
      <Footer />
    </div>
  );
};

export default BlogPost;
