
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
    <input type="radio" name="page" id="page-1" defaultChecked />
    <label className="page cover" htmlFor="page-3"><h1>{current?.title}</h1><h2>{current?.subtitle}</h2></label>
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
            pages.push(
                <>
                    <label className="page" htmlFor={`page-${index * 2 + 5}`}>
                        <p>{element}</p>
                    </label>
                    <label className="page" htmlFor={`page-${index * 2 + 3}`}>{next}</label>
                    <input type="radio" name="page" id={`page-${index * 2 + 5}`} />
                </>
            );
        }
        return pages;
    })()}
    {/* <input type="radio" name="page" id={`page-${current?.content.length * 2 + 3}`} /> */}
    <label className="page cover" htmlFor={`page-${current?.content.length  + 5}`}></label>
    <label className="page cover" htmlFor={`page-${current?.content.length  + 3}`}></label>
    <input type="radio" name="page" id={`page-${current?.content.length  + 5}`} />
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
      <Footer />
    </div>
  );
};

export default BlogPost;
