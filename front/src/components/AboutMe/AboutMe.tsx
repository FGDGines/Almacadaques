import './AboutMe.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext} from 'react';
const AboutMe = () => {
    const { languageFlag } = useContext(GlobalContext)
    return <div className="AboutMe">
        <Navbar />
        <Franja text='Sobre Mi' />
        <div className='title1'><span style={{ color: "#75151E" }}> ❝ </span>
                {textos[languageFlag].textsobremi1}
            <span style={{ color: "#75151E" }}> ❞ </span>
        </div>
        <div className='Contenido'>
            <div className="containerSobremi_1">
                
                <div className="infoSobremi_1">
                    <p>{textos[languageFlag].titleparrafo}</p>
                    <ul>
                        <li>{textos[languageFlag].parrafosobremi1}</li>
                        <li>{textos[languageFlag].parrafosobremi2}</li>
                        <li>{textos[languageFlag].parrafosobremi3}</li>
                        <li>{textos[languageFlag].parrafosobremi4}</li>
                    </ul>
                    
                </div>
                <div className="photo_1">
                    <img src="/src/assets/background/unnamed (2).jpg" alt="Foto sobre mi" />                
                </div>
            </div>

            <div className="containerSobremi_2">
            <div className="photo_2">
                    <img src="../../../src/assets/images/no-foto.png" alt="Foto sobre mi" />
                </div>
                <div className="infoSobremi_2">
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
                <div className="photo_1">
                    <img src="../../../src/assets/images/no-foto.png" alt="Bibliografía" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}


export default AboutMe