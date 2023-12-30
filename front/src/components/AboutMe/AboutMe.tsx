import './AboutMe.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext, useEffect, useState } from 'react';

import f1 from "../../../src/assets/background/1.foto.jpg"
import f2 from "../../../src/assets/background/2.foto.jpg"
import f3 from "../../../src/assets/background/3.foto.jpg"

const AboutMe = () => {
    const { languageFlag } = useContext(GlobalContext)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return <div className="AboutMe">
        <Navbar />
        <Franja text={textos[languageFlag].sobreMi} />
        <div className='title1'><span style={{ color: "#75151E" }}> ❝ </span>
            {textos[languageFlag].textsobremi1}
            <span style={{ color: "#75151E" }}> ❞ </span>
        </div>
        <div className='Contenido'>
            <div className="containerSobremi_1 sobremidiv1">

                <div className="infoSobremi_1">

                    <ul>
                        <li>{textos[languageFlag].parrafosobremi1}</li>
                        <li>{textos[languageFlag].parrafosobremi2}</li>
                        <li>{textos[languageFlag].parrafosobremi3}</li>
                        <li>{textos[languageFlag].parrafosobremi4}</li>
                    </ul>

                </div>
                <div className="photo_1">
                    <img src={f1} alt="Foto sobre mi" />
                    <p> {textos[languageFlag].textopiefoto}</p>
                </div>
            </div>

            <div className="containerSobremi_2">
                <div className="photo_2" style={{ width: windowWidth < 800 ? '100%' : 'auto' }}>
                    <img src={f2} className='foto-to-center' alt="Foto sobre mi" />
                    <p> {textos[languageFlag].textopiefoto}</p>
                </div>
                <div className="infoSobremi_2User" style={{ width: windowWidth < 800 ? '100%' : 'auto' }}>
                    <p >{textos[languageFlag].titleparrafo}</p>  
                    <ul>
                        <li>{textos[languageFlag].parrafosobremi5}</li>
                        <li>{textos[languageFlag].parrafosobremi6}</li>
                        <li>{textos[languageFlag].parrafosobremi7}</li>
                        <li>{textos[languageFlag].parrafosobremi8}</li>
                        <li>{textos[languageFlag].parrafosobremi9}</li>
                        <li>{textos[languageFlag].parrafosobremi10}</li>
                    </ul>
                </div>

            </div>

            <div className="containerSobremi_1">

                <div className="infoSobremi_1">
                    <p>{textos[languageFlag].titleparrafo3}</p>
                    <ul>
                        <li>{textos[languageFlag].parrafosobremi11}</li>
                        <li>{textos[languageFlag].parrafosobremi12}</li>
                        <li>{textos[languageFlag].parrafosobremi13}</li>
                        <li>{textos[languageFlag].parrafosobremi14}</li>
                        <li>{textos[languageFlag].parrafosobremi15}</li>
                        <li>{textos[languageFlag].parrafosobremi16}</li>
                        <li>{textos[languageFlag].parrafosobremi17}</li>
                        <li>{textos[languageFlag].parrafosobremi18}</li>
                    </ul>
                </div>
                <div className="photo_3">
                    <img src={f3} alt="Bibliografía" className='BibliografíaSobreMi'/>
                    <p> {textos[languageFlag].textopiefoto}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}


export default AboutMe