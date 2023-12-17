import './CoachingBienestar.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import { textos } from '../../data/textos';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import FormDefault from '../FormDefault/FormDefault';
import { formDataToObject } from '../../helpers/Forms';
import { fetchDefault } from '../../helpers/Server';


import contcImg from "./../../assets/background/contactanos.jpg"
import chiImg from "../../../src/assets/images/img_coaching_internacional.jpg"
import chbImg from "../../../src/assets/background/coachingBienestar.jpg"

const CoachingBienestar = () => {
    const {  languageFlag } = useContext(GlobalContext);

    const subtmitOnFormDefault = (bag: FormData) => {
        bag.append("fragment", "Coaching Bienestar")
        const data = {body: JSON.stringify(formDataToObject(bag))}
        fetchDefault("/mail/create", data)
        
        // console.log('Datos enviados:', data);
    }

    return <div className="CoachingBienestar">
        <Navbar />
        <Franja text={textos[languageFlag].coachBienestar} />
        <div className="containerBienestar">

            <div className="containerInnformacion1">
                <div className="containerimg1">
                    <img src={chbImg} alt="Elisabet" className='imgBienertar' />
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
                <span style={{ color: "#75151E" }}> ❞<p className='autorParrafo'>Herminia Gomá.</p></span>
                <div className="containerImg1">
                    <img src={chiImg} className='imgInternacional' alt="Imagen de coaching" />
                </div>
                
            </div>
            <div className='ct3 containerInnformacion2'>
                    <p className='textFormulario'>
                        {textos[languageFlag].textcoachingpide}
                    </p>
                <div className='ctForm'>
                    <FormDefault hSubmit={subtmitOnFormDefault}/>
                    <img className='imgEquip'  src={contcImg} alt="Equipo de trabajo" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default CoachingBienestar