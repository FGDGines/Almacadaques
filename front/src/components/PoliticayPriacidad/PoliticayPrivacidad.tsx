import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PoliticayPrivacidad.css";
import { useState } from 'react';
import { textos } from "../../data/textos";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";


import nextImg from "../../../src/assets/images/siguiente-boton.png"


type PoliticasAbiertasType = {
  [key: string]: boolean;
};

function PoliticayPrivacidad() {
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
      <div className="containerPrivacidad">
        <h2>{textos[languageFlag].textospoliticaprivacidad}</h2>
        <p> <a href="#" className="enlace"><span style={{ color: "#cf1348" }}> https://almacadaques.com/</span></a> </p>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['1'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('1')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['1'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosI}</h4>
          </div>

          <span className={politicasAbiertas['1'] ? 'displayBlock' : 'hide'}>
            <p>{textos[languageFlag].textosparrafoI}</p>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['2'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('2')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['2'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosII}</h4>
          </div>
          <span className={politicasAbiertas['2'] ? 'displayBlock' : 'hide'}>
            <p>{textos[languageFlag].textosparrafoII}</p>
            <p>{textos[languageFlag].textosparrafoIItextoII}</p>
            <p>{textos[languageFlag].textosparrafoIItextoIII}</p>
            <p>{textos[languageFlag].textosparrafoIItextoIIII}</p>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['3'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('3')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['3'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosIII}</h4>
          </div>
          <span className={politicasAbiertas['3'] ? 'displayBlock' : 'hide'}>

          <p>{textos[languageFlag].textosparrafoIIItextoI}</p>
            <ul>
              <li>{textos[languageFlag].textosparrafoIIItextoII}</li>
              <li>{textos[languageFlag].textosparrafoIIItextoIII}</li>
              <li>{textos[languageFlag].textosparrafoIIItextoIV}</li>
              <li>{textos[languageFlag].textosparrafoIIItextoV}
              </li>
            </ul>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['4'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('4')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['4'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosIV}</h4>
          </div>
          <span className={politicasAbiertas['4'] ? 'displayBlock' : 'hide'}>
          <p>{textos[languageFlag].textosparrafoIVtextoI}</p>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['5'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('5')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['5'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosV}</h4>
          </div>
          <span className={politicasAbiertas['5'] ? 'displayBlock' : 'hide'}>
          <p>{textos[languageFlag].textosparrafoVtextoI}</p>
            <ul>
              <li>{textos[languageFlag].textosparrafoVtextoII}</li>
              <li>{textos[languageFlag].textosparrafoVtextoIII}</li>
              <li>{textos[languageFlag].textosparrafoVtextoIV}</li>
              <li>{textos[languageFlag].textosparrafoVtextoV}</li>
              <li>{textos[languageFlag].textosparrafoVtextoVI}</li>
              <li>{textos[languageFlag].textosparrafoVtextoVII}</li>
              <li>{textos[languageFlag].textosparrafoVtextoVIII}</li>
            </ul>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['6'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('6')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['6'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosVI}</h4>
          </div>
          <span className={politicasAbiertas['6'] ? 'displayBlock' : 'hide'}>
          <p>{textos[languageFlag].textosparrafVItextosI}</p>
            <h4>{textos[languageFlag].textosparrafVItextosII}</h4>
            <p>{textos[languageFlag].textosparrafVItextosIII}</p>
            <p>{textos[languageFlag].textosparrafVItextosIV}</p>
            <p>{textos[languageFlag].textosparrafVItextosV}</p>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['7'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('7')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['7'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosVII}</h4>
          </div>
          <span className={politicasAbiertas['7'] ? 'displayBlock' : 'hide'}>
          <p>{textos[languageFlag].textosparrafoVIItextoI}</p>
          <p>{textos[languageFlag].textosparrafoVIItextoII}</p>
          <p>{textos[languageFlag].textosparrafoVIItextoIII}</p>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['8'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('8')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['8'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosVIII}</h4>
          </div>
          <span className={politicasAbiertas['8'] ? 'displayBlock' : 'hide'}>
            <p>{textos[languageFlag].textosparrafoVIIItextosI}</p>
            <p>{textos[languageFlag].textosparrafoVIIItextosII}</p>
            <h4>{textos[languageFlag].textosparrafoVIIItextosIII}</h4>
            <p>{textos[languageFlag].textosparrafoVIIItextosIV}</p>
            <p>{textos[languageFlag].textosparrafoVIIItextosV}</p>
          </span>
        </div>
        
        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['9'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('9')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['9'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosIX}</h4>
          </div>
          <span className={politicasAbiertas['9'] ? 'displayBlock' : 'hide'}>
          <p>{textos[languageFlag].textosparrafoIXtextoI}</p>

            <h4>{textos[languageFlag].textosparrafoIXtextoII}</h4>
            <p>{textos[languageFlag].textosparrafoIXtextoIII}</p>
            <p>{textos[languageFlag].textosparrafoIXtextoIV}</p>
            <p>{textos[languageFlag].textosparrafoIXtextoV}</p>
            <p>{textos[languageFlag].textosparrafoIXtextoVI}</p>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['10'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('10')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['10'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosX}</h4>
          </div>
          <span className={politicasAbiertas['10'] ? 'displayBlock' : 'hide'}>
          <p>{textos[languageFlag].textosparrafoXtexto1}</p>
            <ul>
              <li>{textos[languageFlag].textosparrafoXtexto2}</li>
              <li>{textos[languageFlag].textosparrafoXtexto3}</li>
              <li>{textos[languageFlag].textosparrafoXtexto4}</li>
              <li>{textos[languageFlag].textosparrafoXtexto5}</li>
              <li>{textos[languageFlag].textosparrafoXtexto6}</li>
              <li>{textos[languageFlag].textosparrafoXtexto7}</li>
              <li>{textos[languageFlag].textosparrafoXtexto8}</li>
            </ul>
            <p>{textos[languageFlag].textosparrafoXtexto9}</p>
            <ul>
              <li>{textos[languageFlag].textosparrafoXtexto10}</li>
              <li>{textos[languageFlag].textosparrafoXtexto11}</li>
              <li>{textos[languageFlag].textosparrafoXtexto12}</li>
              <li>{textos[languageFlag].textosparrafoXtexto13}</li>
              <li>{textos[languageFlag].textosparrafoXtexto14}</li>
            </ul>
            <p>{textos[languageFlag].textosparrafoXtexto15}</p>
            <p>{textos[languageFlag].textosparrafoXtexto16}</p>
            <p>{textos[languageFlag].textosparrafoXtexto17}</p>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['11'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('11')} >
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['11'] ? 'rotated' : ''}`} />
            </div>
            <h4>{textos[languageFlag].textosXI}</h4>
          </div>
          <span className={politicasAbiertas['11'] ? 'displayBlock' : 'hide'}>
          <p>{textos[languageFlag].textosparrafoXItexto1}</p>

            <h4>{textos[languageFlag].textosparrafoXItexto2}</h4>
            <p>{textos[languageFlag].textosparrafoXItexto3}</p>
          </span>
        </div>

        <div className="titlePrivacidad">
          <div className={`buttonPlitica ${politicasAbiertas['12'] ? 'rotate' : ''}`}
            onClick={() => handleButtonClick('12')}>
            <div className="imgPolitica">
              <img src={nextImg} alt="Icono" className={`imagen ${politicasAbiertas['12'] ? 'rotated' : ''}`} />
            </div>

            <h4>{textos[languageFlag].textosXII}</h4>
          </div>

          <span className={politicasAbiertas['12'] ? 'displayBlock' : 'hide'}>
            <p>{textos[languageFlag].textosparrafoXIItexto1}</p>
            <p>{textos[languageFlag].textosparrafoXIItexto2}</p>
            <p>{textos[languageFlag].textosparrafoXIItexto3}</p>
            <p>{textos[languageFlag].textosparrafoXIItexto4}</p>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { PoliticayPrivacidad };
