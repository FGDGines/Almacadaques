import React, { useState } from 'react';
import './ItemCarrusel.css';
import itemsData from '../../../data/itemCarrousel';

interface ContentItem {
  src: string;
  alt: string;
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

export const ItemCarrusel = () => {
  const [data, setData] = useState<Item[]>(itemsData);

  const handleDeleteItemCarrusel = (index: number) => {
    const updatedData = data.filter((item) => item.index !== index);
    setData(updatedData);
  };

  const handleUpdate = (index: number, newText: string) => {
    const updatedData = data.map((item) => {
      if (item.index === index && 'content' in item.content[0]) {
        item.content[0].content[0].content[0].text = newText;
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div className='ItemCarrusel'>
      <div className="barraCarrusel">
        <div className="tituloCarrusel"><p>Item de Carrousel</p></div>
        <div className="botonesCarrusel">
          <i className='left'><img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/left.svg" alt="Left" /></i>
          <i className='right'><img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/right.svg" alt="Right" /></i>
        </div>
      </div>

      <div className="itemsCarrusel">
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
                      <i onClick={() => handleUpdate(item.index, 'Nuevo Texto')}>
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
                      <i onClick={() => handleUpdate(item.index, 'Nuevo Texto')}>
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
