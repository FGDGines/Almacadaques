import  React, { useState, useEffect, useContext } from 'react';
import './ItemCarrusel.css';
import itemsData from '../../../data/itemCarrousel';
import { NuevoCarrusel } from './NuevoCarrusel/NuevoCarrusel';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { Loader } from '../LoaderOverlay/LoaderOverlay';
import { formDataToObject } from '../../../helpers/Forms';
import { tpDtmResponse } from '../../../types/typesComponents';
import { fetchDefault } from '../../../helpers/Server';
import { getToken } from '../../../helpers/JWT';


interface ContentItem {
  src: string;
  alt: string;
}
interface BtnMasAgregarProps {
  direccion: number; // Añadiendo la propiedad dirección como number
}


interface TextContent {
  text: string;
}

interface Item {
  index: number;
  content: (ContentItem | {
    content: {
      content: TextContent[];
    }[];
    src?: never;
    alt?: never;
  })[];
}


export const ItemCarrusel: React.FC<BtnMasAgregarProps> = () => {
  const [data, setData] = useState<Item[]>(itemsData);
  const { languageFlag } = useContext(GlobalContext)
  const { setIndexCarrousel } = useContext(GlobalContext);
  const l = languageFlag.toLowerCase() 

  const handleDeleteItemCarrusel = (index: number) => {
    // elimina de la base de datos
    const da = new FormData()
    da.set("id", `${index}`)
    da.set("token", getToken())
    const dat = {body: JSON.stringify(formDataToObject(da))}

    fetchDefault("/carousel/delete", dat, (d: tpDtmResponse) => {
      if (d.status != 200) return
      const updatedData = data.filter((item) => item.index !== index);
      setData(updatedData);
    })
  };

 

  const { setLayoutID } = useContext(GlobalContext);
  const [showLoader, setShowLoader] = useState(false);

  

  // Oculta el loader después de 3 segundos
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showLoader) {
      timeout = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showLoader]);


  const edit = (index: number) => {
    setIndexCarrousel(index)
    setLayoutID(29)
  }

  
  // carga los carrousel
  useEffect(() => {
      const api = async () => {
        const da = new FormData()
        da.set("lang", l)
        const dat = {body: JSON.stringify(formDataToObject(da))}
        
        const carousel: Item[] = []
        fetchDefault("/carousel/read", dat, (d: tpDtmResponse) => {
            if(!d.bag) return 
            for (let index = 0; index < d.bag.length; index++) {
                const element: {id: number , autor: string  , link_autor: string, src:string, data_carousel: {es: string, en: string , cat: string} } = d.bag[index];
                const r = "src/carousel/";
                const value = { 
                  index: element.id, 
                  content: [
                    {
                      src: r + element.src,
                      alt: "autor"
                    },
                    {
                      content: [
                        {
                          content: [
                            { text: element.data_carousel.es || element.data_carousel.en || element.data_carousel.cat},
                            { text: element.link_autor }
                          ]
                        }
                      ]
                    }
                  ] 
                }
                carousel.push(value)
            }
            setData(carousel);
        }) 
      };
      api();
      // eslint-disable-next-line
  }, []);

  return (
    <div className='ItemCarrusel'>

      {showLoader && (
        <Loader></Loader>
      )}
      <div className="barraCarrusel">
        <div className="tituloCarrusel"><p>Item de Carrousel</p></div>
        <div className="botonesCarrusel">
          <i className='left'><img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/left.svg" alt="Left" /></i>
          <i className='right'><img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/right.svg" alt="Right" /></i>
        </div>
      </div>

      <div className="itemsCarrusel">
        {data.length === 0 && <NuevoCarrusel />}

        {data.map((item, index) => (
          <div key={index} className="items">
            {item.content.map((contentItem, contentIndex) => (
              <div key={contentIndex} className="ctOver">
                {('src' in contentItem) && (
                  <>
                    <img src={contentItem.src} alt={contentItem.alt} />
                    <div className="iconosItems">
                      <i onClick={() => handleDeleteItemCarrusel(item.index)}>
                        <img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/Borrar.svg" alt="Borrar" />
                      </i>
                      <i  onClick={() => edit(item.index)} >
                        <img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/Editar.svg" alt="Editar" />
                      </i>
                    </div>
                  </>
                )}
                {('content' in contentItem) && ('content' in contentItem.content[0]) && (
                  <>
                    <div className="iconosItems">
                      <i onClick={() => handleDeleteItemCarrusel(item.index)}>
                        <img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/Borrar.svg" alt="Borrar" />
                      </i>
                      <i  onClick={() => edit(item.index)}>
                        <img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/Editar.svg" alt="Editar" />
                      </i>
                    </div>
                    <div className="contenidoItems">
                      {contentItem.content[0].content.map((textContent: TextContent, textIndex: number) => (
                        <React.Fragment key={textIndex}>
                          <div className='ItemsDescripcion'>
                            {textContent.text}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};