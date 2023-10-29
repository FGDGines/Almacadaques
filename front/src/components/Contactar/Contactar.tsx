import './Contactar.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import FormDefault from '../FormDefault/FormDefault';
import { fetchDefault } from '../../helpers/Server';
import { formDataToObject } from '../../helpers/Forms';

const Contactar = ()=>{
    
    const enviarFormulario = (bag: FormData) =>{
        bag.set('fragment'  , 'Contactar')
        fetchDefault('/mail/create', {body: JSON.stringify(formDataToObject(bag))})        
    }

    return <div className="Contactar">
        <Navbar />
        <Franja text='Contactar' />
        <div className="imgContacto">
                <img src="../../../src/assets/background/contactanos.jpg" alt="elizabet" className='elizabet' />
            </div>
        <div className='ctSections'>
            
            <div className='ctLeftContaT'>
                <div className='title1'>
                    Estoy aquí para responder cualquier pregunta que puedas tener.
                </div>
                <br />
                <div className='title2'>
                    Cuéntame todo sobre tu problema, estaré encantado de ayudarte. Rellena el formulario, o si lo prefieres envíanos un email.
                </div>
                <br />
                <div className='ctTelef'>
                    Teléfono:  +1 (256) 1087 000
                </div>
                <div className='ctCorreo'>
                    correo@demolink.org
                </div>
                <br />
                <div className='ctDireccion'>
                    3828 Fincham Road <br />
                    Los Ángeles, CA <br />
                    California 90017 <br />
                </div>
            </div>
            <div className='ctRight'>
                <div className='TitleForm'>
                    Ponerse en contacto                    
                </div>

                <FormDefault hSubmit={enviarFormulario} />
            </div>
        </div>
        <Footer />

    </div>
}

export default Contactar