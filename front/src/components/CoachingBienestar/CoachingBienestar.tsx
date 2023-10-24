import './CoachingBienestar.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import { textos } from '../../data/textos';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import FormDefault from '../FormDefault/FormDefault';

const CoachingBienestar = () => {
    const {  languageFlag } = useContext(GlobalContext);
    return <div className="CoachingBienestar">
        <Navbar />
        <Franja text="Coaching para el Bienestar " />
        <div className="containerBienestar">

            <div className="containerInnformacion1">
                <div className="containerimg1">
                    <img src="../../../src/assets/background/coachingBienestar.jpg" alt="Elisabet" className='imgBienertar' />
                </div>
                <div className="contseccionn1">
                    <span style={{ color: "#75151E" }} className='SpanTitle'> ❝ </span>
                    {textos[languageFlag].textcoaching1}
                    <span style={{ color: "#75151E" }}> ❞ </span>
                    <p className='parrafo'>{textos[languageFlag].textcoachingParrafo1}</p>
                    <h3>{textos[languageFlag].textcoachingtitle2}</h3>
                    <p className='parrafo'>{textos[languageFlag].textcoaching2}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoaching3}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoaching4}</p>
                    {/* <p onClick={() => setLayoutID(5)} > <span className='nlink'> <b>{textos[languageFlag].textcoaching5}</b></span> </p> */}
                </div>

            </div>

            <div className="containerInnformacion2">
                <span style={{ color: "#75151E" }}> ❝ </span>
                    {textos[languageFlag].textcoaching5}
                <span style={{ color: "#75151E" }}> ❞ </span>
            </div>
            <div className='ct3 containerInnformacion2'>
                    <p className='textFormulario'>
                        {textos[languageFlag].textcoachingpide}
                    </p>
                <div className='ctForm'>
                    <FormDefault />
                    <img className='imgEquip'  src="../../../src/assets/background/contactanos.jpg" alt="Equipo de trabajo" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default CoachingBienestar