import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PoliticaCookies.css"
import { textos } from "../../data/textos";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

import { useState } from 'react';

type PoliticasAbiertasType = {
  [key: string]: boolean;
};


function PoliticaCookies() {
  const [politicasAbiertas, setPoliticasAbiertas] = useState<PoliticasAbiertasType>({});

  const handleButtonClick = (id: string) => {
    setPoliticasAbiertas((prevPoliticas) => ({
      ...prevPoliticas,
      [id]: !prevPoliticas[id],
    }));
  };
  const { languageFlag } = useContext(GlobalContext) 
  return (
    <>
      <Navbar />
      <div className="containerCookies">
        <h1>{textos[languageFlag].textospoliticadecookies}</h1>
        <p><a href="" className="enlace"><span style={{ color: "#cf1348" }}> https://almacadaques.com </span></a></p>

        <p>{textos[languageFlag].textoscookieparrafo1}</p>
        <p>{textos[languageFlag].textoscookieparrafo2}</p>
        <p>{textos[languageFlag].textoscookieparrafo3}

        </p>
        <p>{textos[languageFlag].textoscookieparrafo4}
          
        </p>
        <div className="titleCookies"> 

          <div className={`buttonCookies ${politicasAbiertas['1'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('1')} >
            <div className="imgCookies">
              <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['1'] ? 'rotated' : ''}`}/>
            </div>

            <h4>{textos[languageFlag].textostitulocookie}
              </h4>

          </div>

          <span className={politicasAbiertas['1'] ? 'displayBlock' : 'hide'}>
            <p>{textos[languageFlag].textoscookiepropias}</p>
          </span>
        </div>
        <div className="titleCookies">
          <div className={`buttonCookies ${politicasAbiertas['2'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('2')} >
            <div className="imgCookies">
              <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['2'] ? 'rotated' : ''}`}/>
            </div>

            <h4>{textos[languageFlag].textoscookiesdeshabilitar}</h4>
          </div>

          <span className={politicasAbiertas['2'] ? 'displayBlock' : 'hide'}>
            <p>{textos[languageFlag].textoscookiesdesparrafo1}
            </p>

          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { PoliticaCookies };
