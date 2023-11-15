import './CoachingBienestar.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import { textos } from '../../data/textos';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import FormDefault from '../FormDefault/FormDefault';
import { formDataToObject } from '../../helpers/Forms';
import { tpDtmResponse } from '../../types/typesComponents';
import { fetchDefault } from '../../helpers/Server';

const CoachingBienestar = () => {
    const {  languageFlag } = useContext(GlobalContext);

    const subtmitOnFormDefault = (bag: FormData) => {
        bag.append("fragment", "Coaching Bienestar")
        const data = {body: JSON.stringify(formDataToObject(bag))}
        console.log(data)
        fetchDefault("/mail/create", data, (d: tpDtmResponse) => {
            console.log("response",d)
        }, (e: tpDtmResponse) => {
            console.log("error", e)
        })
        
        console.log('Datos enviados:', data);
    }

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
                <span style={{ color: "#75151E" }}> ❞<p className='autorParrafo'>Herminia Gomá.</p></span>
                <div className="containerImg1">
                    <img src="../../../src/assets/images/img_coaching_internacional.jpg" className='imgInternacional' alt="Imagen de coaching" />
                </div>
                
            </div>
            <div className='ct3 containerInnformacion2'>
                    <p className='textFormulario'>
                        {textos[languageFlag].textcoachingpide}
                    </p>
                <div className='ctForm'>
                    <FormDefault hSubmit={subtmitOnFormDefault}/>
                    <img className='imgEquip'  src="../../../src/assets/background/contactanos.jpg" alt="Equipo de trabajo" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default CoachingBienestar