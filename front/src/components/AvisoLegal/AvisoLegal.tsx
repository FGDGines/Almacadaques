import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Avisolegal.css"
import { useState } from 'react';
import { textos } from "../../data/textos";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

type PoliticasAbiertasType = {
    [key: string]: boolean;
};

function AvisoLegal() {
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
            <div className="containerAvisos">
                <h2>{textos[languageFlag].textoAvisoLegal}</h2>
                <p> <a href="" className="enlace"><span style={{ color: "#cf1348" }}>https://almacadaques.com/</span></a> </p>

                <div className="titleaviso">
                    <div className={`buttonAviso ${politicasAbiertas['1'] ? 'rotate' : ''}`}
                        onClick={() => handleButtonClick('1')} >
                        <div className="imgAviso">
                            <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['1'] ? 'rotated' : ''}`} />
                        </div>


                        <h4>{textos[languageFlag].textos1titulo}</h4>
                    </div>
                    <span className={politicasAbiertas['1'] ? 'displayBlock' : 'hide'}>
                        <p>{textos[languageFlag].textos1parrafo1}</p>
                        <p>{textos[languageFlag].textos1parrafo2}</p>
                        <p>{textos[languageFlag].textos1parrafo3}</p>
                        <p>{textos[languageFlag].textos1parrafo4}</p>
                        <p>{textos[languageFlag].textos1parrafo5}</p>

                    </span>

                </div>
                <div className="titleaviso">
                    <div className={`buttonAviso ${politicasAbiertas['2'] ? 'rotate' : ''}`}
                        onClick={() => handleButtonClick('2')} >
                        <div className="imgAviso">
                            <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['2'] ? 'rotated' : ''}`} />
                        </div>
                        <h4>{textos[languageFlag].textos2titulo}</h4>
                    </div>
                    <span className={politicasAbiertas['2'] ? 'displayBlock' : 'hide'}>
                        <h4>{textos[languageFlag].textos2parrafo1}</h4>
                        <p>{textos[languageFlag].textos2parrafo2}</p>
                        <p>{textos[languageFlag].textos2parrafo3}</p>
                        <p>{textos[languageFlag].textos2parrafo4}</p>
                        <p>{textos[languageFlag].textos2parrafo5}</p>
                        <h4>{textos[languageFlag].textos2parrafo6}</h4>
                        <p>{textos[languageFlag].textos2parrafo7}</p>
                        <p>{textos[languageFlag].textos2parrafo8}</p>
                        <ul>
                            <li>{textos[languageFlag].textos2parrafo9}</li>
                            <li>{textos[languageFlag].textos2parrafo10}</li>
                        </ul>
                        <p>{textos[languageFlag].textos2parrafo11}</p>
                        <p>{textos[languageFlag].textos2parrafo12}</p>
                        <p>{textos[languageFlag].textos2parrafo13}</p>
                        <p>{textos[languageFlag].textos2parrafo14}</p>
                        <p>{textos[languageFlag].textos2parrafo15}</p>
                    </span>

                </div>

                <div className="titleaviso">
                    <div className={`buttonAviso ${politicasAbiertas['3'] ? 'rotate' : ''}`}
                        onClick={() => handleButtonClick('3')} >
                        <div className="imgAviso">
                            <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['3'] ? 'rotated' : ''}`} />
                        </div>

                        <h4>{textos[languageFlag].textos3titulo1}</h4>
                    </div>

                    <span className={politicasAbiertas['3'] ? 'displayBlock' : 'hide'}>
                        <p>{textos[languageFlag].textos3parrafo1}</p>
                        <p>{textos[languageFlag].textos3parrafo2}</p>
                        <p>{textos[languageFlag].textos3parrafo3}</p>
                    </span>

                </div>

                <div className="titleaviso">
                    <div className={`buttonAviso ${politicasAbiertas['4'] ? 'rotate' : ''}`}
                        onClick={() => handleButtonClick('4')} >
                        <div className="imgAviso">
                            <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['4'] ? 'rotated' : ''}`} />
                        </div>

                        <h4>{textos[languageFlag].textos4titulo1}</h4>
                    </div>
                    <span className={politicasAbiertas['4'] ? 'displayBlock' : 'hide'}>
                        <p>{textos[languageFlag].textos4parrafo1}</p>
                        <p>{textos[languageFlag].textos4parrafo2}</p>
                        <p>{textos[languageFlag].textos4parrafo3}</p>
                        <p>{textos[languageFlag].textos4parrafo4}</p>
                        <p>{textos[languageFlag].textos4parrafo5}</p>
                        <p>{textos[languageFlag].textos4parrafo6}</p>
                        <p>{textos[languageFlag].textos4parrafo7}</p>
                        <p>{textos[languageFlag].textos4parrafo8}</p>
                        <p>{textos[languageFlag].textos4parrafo9}</p>
                        <p>{textos[languageFlag].textos4parrafo10}</p>
                        <p>{textos[languageFlag].textos4parrafo11}</p>
                    </span>

                </div>

                <div className="titleaviso">
                    <div className={`buttonAviso ${politicasAbiertas['5'] ? 'rotate' : ''}`}
                        onClick={() => handleButtonClick('5')} >
                        <div className="imgAviso">
                            <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['5'] ? 'rotated' : ''}`} />
                        </div>

                        <h4>{textos[languageFlag].textos5titulo1}</h4>
                    </div>
                    <span className={politicasAbiertas['5'] ? 'displayBlock' : 'hide'}>
                        <p>{textos[languageFlag].textos5parrafo1}</p>
                        <p>{textos[languageFlag].textos5parrafo2}</p>
                        <p>{textos[languageFlag].textos5parrafo3}</p>
                        <p>{textos[languageFlag].textos5parrafo4}</p>
                    </span>

                </div>

                <div className="titleaviso">
                    <div className={`buttonAviso ${politicasAbiertas['6'] ? 'rotate' : ''}`}
                        onClick={() => handleButtonClick('6')} >
                        <div className="imgAviso">
                            <img src="../../../src/assets/images/siguiente-boton.png" alt="icono" className={`imagen ${politicasAbiertas['6'] ? 'rotated' : ''}`} />
                        </div>
                        <h4>{textos[languageFlag].textos6titulo1}</h4>
                    </div>
                    <span className={politicasAbiertas['6'] ? 'displayBlock' : 'hide'}>
                        <p>{textos[languageFlag].textos6parrafo1}</p>
                        <p>{textos[languageFlag].textos6parrafo2}</p>
                        
                    </span>

                </div>
            </div>
            <Footer />
        </>
    )
}

export { AvisoLegal }