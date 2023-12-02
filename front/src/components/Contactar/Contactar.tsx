import './Contactar.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import FormDefault from '../FormDefault/FormDefault';
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';
import { fetchDefault } from '../../helpers/Server';
import { formDataToObject } from '../../helpers/Forms';


import contcImg from "./../../assets/background/contactanos.jpg"


const Contactar = ()=>{
    
    const enviarFormulario = (bag: FormData) =>{
        bag.set('fragment'  , 'Contactar')
        fetchDefault('/mail/create', {body: JSON.stringify(formDataToObject(bag))})        
    }
    const { languageFlag } = useContext(GlobalContext)
    return <div className="Contactar">
        <Navbar />
        <Franja text={textos[languageFlag].textocontactar1} />
        <div className="imgContacto">
                <img src={contcImg} alt="elizabet" className='elizabet' />
            </div>
        <div className='ctSections'>
            
            <div className='ctLeftContaT'>
                <div className='title1'>{textos[languageFlag].textocontactar2}</div>
                <br />
                <div className='title2'>{textos[languageFlag].textocontactarjuntoscrearemos}</div>
                <br />
                <div className='ctTelef'>{textos[languageFlag].textocontactartelf}(+34) 660 30 54 21
                </div>
                <div className='ctCorreo'>
                    hola@almacadaques.com
                </div>
                <br />
            </div>
            <div className='ctRight'>
                <div className='TitleForm'>{textos[languageFlag].textocontactarformulariotexto1}</div>
                <FormDefault hSubmit={enviarFormulario} />
            </div>
        </div>
        <Footer />

    </div>
}

export default Contactar